/**
 * =====================================================================
 * ASOSIY DASTUR VA FOYDALANUVCHI INTERFEYSI (MAIN APP SCRIPT)
 * =====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initAppWithConfig();
  initSearchAndFilter();
  initSyllabusTable();
  initCertificateModal();
  initContactForm();
  initMobileMenu();
  initScrollEffects();
});

// -------------------------------------------------------------
// 1. MAVZU REJIMI (DARK / LIGHT THEME TOGGLE)
// -------------------------------------------------------------
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const storedTheme = localStorage.getItem('asem_portal_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const currentTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('asem_portal_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;
  themeToggleBtn.innerHTML = theme === 'dark' 
    ? '<i class="fas fa-sun" style="color: #f59e0b;"></i>' 
    : '<i class="fas fa-moon"></i>';
}

// -------------------------------------------------------------
// 2. MA'LUMOTLAR BAZASI BILAN INTERFEYSNI TO'LDIRISH
// -------------------------------------------------------------
let allTopicsList = [];
let activeCategory = 'all';
let searchQuery = '';

function initAppWithConfig() {
  const config = window.COURSE_CONFIG;
  if (!config) {
    console.error("COURSE_CONFIG topilmadi! data/course-data.js faylini tekshiring.");
    return;
  }

  // 1. Kurs va Fan ma'lumotlari
  setText('courseTitleElem', config.course.title);
  setText('courseCodeBadge', `Fan kodi: ${config.course.code}`);
  setText('courseSubtitleElem', config.course.subtitle);
  setText('courseDirectionElem', config.course.direction);
  setText('courseInstElem', config.course.institution);

  // 2. O'qituvchi ma'lumotlari
  setText('teacherNameHero', config.teacher.fullName);
  setText('teacherRoleHero', config.teacher.role);
  setText('teacherInstHero', config.course.institution);
  setText('teacherBioElem', config.teacher.bio);
  setText('teacherExpVal', config.teacher.experienceYears);
  setText('heroTeacherExp', config.teacher.experienceYears);
  setText('teacherEmailVal', config.teacher.email);
  setText('teacherPhoneVal', config.teacher.phone);
  setText('teacherLocationVal', config.teacher.location);
  setText('aboutTeacherName', config.teacher.fullName);
  setText('printTeacherName', config.teacher.fullName);
  setText('printSigTeacherName', config.teacher.shortName || config.teacher.fullName);
  setText('footerAuthor', config.teacher.fullName);
  setText('contactAddressVal', config.teacher.location);

  // Telefon va Email havolalari
  const emailLink = document.getElementById('contactEmailLink');
  if (emailLink) {
    emailLink.href = `mailto:${config.teacher.email}`;
    emailLink.textContent = config.teacher.email;
  }
  const phoneLink = document.getElementById('contactPhoneLink');
  if (phoneLink) {
    phoneLink.href = `tel:${config.teacher.phone.replace(/[^0-9+]/g, '')}`;
    phoneLink.textContent = config.teacher.phone;
  }
  const telegramLink = document.getElementById('contactTelegramLink');
  if (telegramLink && config.teacher.telegram) {
    telegramLink.href = config.teacher.telegram;
  }

  // Rasm manbalari
  setSrc('teacherAvatarImg', config.teacher.avatar);
  setSrc('aboutTeacherPhoto', config.teacher.avatar);
  setSrc('certificateModalImg', config.teacher.certificateImage);

  // 3. Statistik ko'rsatkichlar
  const practicalCount = config.practicalTopics.length;
  const theoreticalCount = config.theoreticalTopics.length;
  const totalTopics = practicalCount + theoreticalCount;
  const practicalHours = practicalCount * 4;
  const theoreticalHours = theoreticalCount * 2;
  const totalHours = practicalHours + theoreticalHours;

  setText('statPracticalCount', practicalCount);
  setText('statTheoryCount', theoreticalCount);
  setText('statTotalCount', totalTopics);
  setText('statTestsCount', totalTopics);
  setText('sylTotalHoursVal', `${totalHours} soat`);

  setText('tabCountAll', totalTopics);
  setText('tabCountPractical', practicalCount);
  setText('tabCountTheory', theoreticalCount);

  // Mundarija havolalari
  setHref('syllabusAmaliyViewBtn', config.course.syllabusPdfPractical);
  setHref('syllabusAmaliyDownloadBtn', config.course.syllabusPdfPractical);
  setHref('syllabusNazariyViewBtn', config.course.syllabusPdfTheory);
  setHref('syllabusNazariyDownloadBtn', config.course.syllabusPdfTheory);

  // 4. Barcha mavzularni birlashtirish
  allTopicsList = [
    ...config.practicalTopics,
    ...config.theoreticalTopics
  ];

  // TopicViewer ga mavzularni uzatish
  if (window.TopicViewer) {
    window.TopicViewer.setTopicsList(allTopicsList);
  }

  // Mavzular kartalarini va mundarija jadvalini chizish
  renderTopics();
  renderSyllabusRows();
}

function setText(elementId, text) {
  const el = document.getElementById(elementId);
  if (el) el.textContent = text;
}

function setSrc(elementId, src) {
  const el = document.getElementById(elementId);
  if (el && src) el.src = src;
}

function setHref(elementId, href) {
  const el = document.getElementById(elementId);
  if (el && href) el.href = href;
}

// -------------------------------------------------------------
// 3. MAVZULARNI CHIZISH VA QIDIRUV / FILTER
// -------------------------------------------------------------
function renderTopics() {
  const grid = document.getElementById('topicsGrid');
  if (!grid) return;

  // Filtr va Qidiruv bo'yicha saralash
  const filtered = allTopicsList.filter(topic => {
    const matchesCategory = 
      activeCategory === 'all' || 
      topic.category === activeCategory;

    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = 
      !query ||
      topic.title.toLowerCase().includes(query) ||
      topic.shortDesc.toLowerCase().includes(query) ||
      `${topic.number}` === query ||
      `${topic.number}-mavzu`.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results-box">
        <i class="fas fa-search no-results-icon"></i>
        <h3>Mavzular topilmadi</h3>
        <p class="slide-body-text">Qidiruv so'zini o'zgartirib ko'ring yoki boshqa toifani tanlang.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(topic => `
    <div class="topic-card" data-id="${topic.id}">
      <div>
        <div class="topic-card-top">
          <span class="topic-num-badge">${topic.number}-Mavzu</span>
          <span class="topic-category-badge ${topic.category}">
            ${topic.categoryName}
          </span>
        </div>
        <h3 class="topic-card-title">${topic.title}</h3>
        <p class="topic-card-desc">${topic.shortDesc || "Ushbu mavzu bo'yicha barcha elektron o'quv-uslubiy materiallar."}</p>
      </div>

      <div>
        <div class="topic-resources-chips">
          <span class="res-chip" title="Ma'ruza PDF"><i class="fas fa-file-pdf"></i> Ma'ruza</span>
          <span class="res-chip" title="Taqdimot slayd"><i class="fas fa-tv"></i> Slayd</span>
          <span class="res-chip" title="Interaktiv test"><i class="fas fa-question-circle"></i> Test</span>
          ${topic.videoUrl ? '<span class="res-chip" title="Video darslik"><i class="fas fa-video"></i> Video</span>' : ''}
          <span class="res-chip" title="Tibbiy glossariy"><i class="fas fa-book"></i> Lug\'at</span>
        </div>

        <button class="btn-open-topic" onclick="window.TopicViewer.openTopic('${topic.id}')">
          <span>Mavzuni ochish</span>
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function initSearchAndFilter() {
  const searchInput = document.getElementById('topicSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const categoryTabBtns = document.querySelectorAll('.category-tabs .tab-btn');

  // Toifalar bo'yicha tablar
  categoryTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      renderTopics();
    });
  });

  // Qidiruv maydoni
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = searchQuery ? 'block' : 'none';
      }
      renderTopics();
    });
  }

  // Qidiruvni tozalash tugmasi
  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClearBtn.style.display = 'none';
      renderTopics();
      searchInput.focus();
    });
  }
}

// -------------------------------------------------------------
// 4. MUNDARIJA JADVALI (HTML SYLLABUS TABLE)
// -------------------------------------------------------------
let syllabusActiveCategory = 'amaliy';
let syllabusSearchQuery = '';

function initSyllabusTable() {
  const btnAmaliy = document.getElementById('btnOpenAmaliySyllabus');
  const btnNazariy = document.getElementById('btnOpenNazariySyllabus');
  const backBtn = document.getElementById('sylBackBtn');
  const switchBtns = document.querySelectorAll('.syllabus-category-switch .syl-switch-btn');
  const searchInput = document.getElementById('syllabusSearchInput');
  const clearBtn = document.getElementById('syllabusClearSearch');

  // Boshlang'ich 2 ta karta/tugma bosilganda
  if (btnAmaliy) {
    btnAmaliy.addEventListener('click', () => openSyllabusCategory('amaliy'));
    btnAmaliy.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openSyllabusCategory('amaliy');
      }
    });
  }

  if (btnNazariy) {
    btnNazariy.addEventListener('click', () => openSyllabusCategory('nazariy'));
    btnNazariy.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openSyllabusCategory('nazariy');
      }
    });
  }

  // Orqaga qaytish tugmasi
  if (backBtn) {
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeSyllabusCategory();
    });
  }

  // Brauzer orqali orqaga qaytishni kuzatish (Back button support)
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.syllabusCategory) {
      openSyllabusCategory(e.state.syllabusCategory, false);
    } else {
      closeSyllabusCategory(false);
    }
  });

  // Bo'limlararo tezkor switch tugmalari
  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-syl-switch') || 'amaliy';
      openSyllabusCategory(cat);
    });
  });

  // Qidiruv
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      syllabusSearchQuery = e.target.value;
      if (clearBtn) {
        clearBtn.style.display = syllabusSearchQuery ? 'block' : 'none';
      }
      renderSyllabusRows();
    });
  }

  // Qidiruvni tozalash
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      syllabusSearchQuery = '';
      clearBtn.style.display = 'none';
      renderSyllabusRows();
      if (searchInput) searchInput.focus();
    });
  }

  // Chop etishdan oldin to'liq ro'yxatni tayyorlash
  window.addEventListener('beforeprint', () => {
    if (searchInput && searchInput.value) {
      searchInput.value = '';
      syllabusSearchQuery = '';
      if (clearBtn) clearBtn.style.display = 'none';
      renderSyllabusRows();
    }
  });

  // Dastlabki ma'lumotlarni tayyorlab qo'yish
  renderSyllabusRows();
}

function openSyllabusCategory(category, pushHistory = true) {
  const choiceGrid = document.getElementById('syllabusChoiceGrid');
  const detailView = document.getElementById('syllabusDetailView');
  const activeTitle = document.getElementById('sylActiveTitle');
  const activeBadge = document.getElementById('sylActiveBadge');
  const switchAmaliyBtn = document.getElementById('switchAmaliyBtn');
  const switchNazariyBtn = document.getElementById('switchNazariyBtn');

  syllabusActiveCategory = category || 'amaliy';

  // Ma'lumotlar bazasi tayyorligini kafolatlash
  if (!allTopicsList || allTopicsList.length === 0) {
    if (window.COURSE_CONFIG) {
      allTopicsList = [
        ...(window.COURSE_CONFIG.practicalTopics || []),
        ...(window.COURSE_CONFIG.theoreticalTopics || [])
      ];
    }
  }

  if (choiceGrid) {
    choiceGrid.style.setProperty('display', 'none', 'important');
  }
  if (detailView) {
    detailView.style.setProperty('display', 'block', 'important');
    detailView.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const printDocTitle = document.getElementById('printDocTitle');
  const printDocHours = document.getElementById('printDocHours');

  const courseTitleUpper = (window.COURSE_CONFIG && window.COURSE_CONFIG.course && window.COURSE_CONFIG.course.title)
    ? window.COURSE_CONFIG.course.title.toUpperCase()
    : "PEDIATRIYA VA NEONATOLOGIYADA HAMSHIRALIK ISHI";

  if (category === 'amaliy') {
    if (activeTitle) activeTitle.textContent = "Amaliy mashg'ulotlar mundarijasi";
    if (activeBadge) activeBadge.textContent = "33 ta mavzu \u2022 132 soat umumiy yuklama";
    if (printDocTitle) printDocTitle.textContent = `"${courseTitleUpper}" FANI BO'YICHA AMALIY MASHG'ULOTLAR TAQVIM-MAVZUIY REJASI`;
    if (printDocHours) printDocHours.innerHTML = "<strong>O'quv hajmi:</strong> 33 ta amaliy mavzu (132 soat)";
    if (switchAmaliyBtn) switchAmaliyBtn.classList.add('active');
    if (switchNazariyBtn) switchNazariyBtn.classList.remove('active');
  } else {
    if (activeTitle) activeTitle.textContent = "Nazariy mashg'ulotlar mundarijasi";
    if (activeBadge) activeBadge.textContent = "30 ta mavzu \u2022 60 soat umumiy yuklama";
    if (printDocTitle) printDocTitle.textContent = `"${courseTitleUpper}" FANI BO'YICHA NAZARIY MASHG'ULOTLAR TAQVIM-MAVZUIY REJASI`;
    if (printDocHours) printDocHours.innerHTML = "<strong>O'quv hajmi:</strong> 30 ta nazariy ma'ruza (60 soat)";
    if (switchNazariyBtn) switchNazariyBtn.classList.add('active');
    if (switchAmaliyBtn) switchAmaliyBtn.classList.remove('active');
  }

  if (pushHistory) {
    try {
      history.pushState({ syllabusCategory: category }, '', '#syllabus-' + category);
    } catch (err) {}
  }

  renderSyllabusRows();
}

function closeSyllabusCategory(updateHistory = true) {
  const choiceGrid = document.getElementById('syllabusChoiceGrid');
  const detailView = document.getElementById('syllabusDetailView');
  const syllabusSection = document.getElementById('syllabus');

  if (detailView) {
    detailView.style.setProperty('display', 'none', 'important');
  }
  if (choiceGrid) {
    choiceGrid.style.setProperty('display', 'grid', 'important');
  }

  if (updateHistory && window.location.hash.startsWith('#syllabus-')) {
    try {
      history.pushState(null, '', '#syllabus');
    } catch (err) {}
  }

  if (syllabusSection) {
    syllabusSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Rasmiy A4 hisobot HTML strukturasini yaratish (Mavzular nomi to'liq, qog'ozga xatosiz tushishi va qatorlar kesilmasligi uchun)
function generateSyllabusReportHtml(category) {
  const config = window.COURSE_CONFIG || {};
  const course = config.course || {};
  const teacher = config.teacher || {};

  const courseTitle = (course.title || "Pediatriya va neonatologiyada hamshiralik ishi").toUpperCase();
  const courseCode = course.code || "50910302";
  const teacherName = teacher.fullName || "Sametullaeva Sveta Smaylovna";
  const teacherShort = teacher.shortName || "Sametullaeva S. S.";
  const teacherExp = teacher.experienceYears || teacher.experience || "23 yil";

  const tableHeaderHtml = `
    <thead>
      <tr style="background: #f1f5f9; color: #000000;">
        <th style="border: 1px solid #000000; padding: 5px 3px; text-align: center; font-size: 8.5pt; font-weight: bold; width: 34px;">№</th>
        <th style="border: 1px solid #000000; padding: 5px 4px; text-align: center; font-size: 8pt; font-weight: bold; width: 76px;">Shakli</th>
        <th style="border: 1px solid #000000; padding: 5px 8px; text-align: center; font-size: 8.5pt; font-weight: bold;">Mavzular nomi va mashg'ulot mazmuni</th>
        <th style="border: 1px solid #000000; padding: 5px 4px; text-align: center; font-size: 8.5pt; font-weight: bold; width: 58px;">Hajmi</th>
      </tr>
    </thead>
  `;

  function renderRows(items) {
    return items.map((t, idx) => {
      const isPrac = t.category === 'amaliy';
      const typeLabel = isPrac ? "Amaliyot" : "Nazariya";
      const itemHours = isPrac ? "4 soat" : "2 soat";
      const rowBg = idx % 2 === 0 ? "#ffffff" : "#fbfbfb";

      return `
        <tr style="background: ${rowBg}; page-break-inside: avoid; break-inside: avoid;">
          <td style="border: 1px solid #000000; padding: 4px 2px; text-align: center; font-weight: bold; font-size: 8.5pt; width: 34px; color: #000000;">${t.number}</td>
          <td style="border: 1px solid #000000; padding: 4px 2px; text-align: center; font-size: 8pt; font-weight: 600; width: 76px; color: #000000;">
            ${typeLabel}
          </td>
          <td style="border: 1px solid #000000; padding: 4px 8px; text-align: left; font-size: 8.5pt; font-weight: 400; color: #000000; line-height: 1.32;">
            ${t.title}
          </td>
          <td style="border: 1px solid #000000; padding: 4px 2px; text-align: center; font-weight: bold; font-size: 8.5pt; width: 58px; color: #000000; white-space: nowrap;">
            ${itemHours}
          </td>
        </tr>
      `;
    }).join('');
  }

  function wrapPage(pageContent, pageNum, totalPages, isFirstPage) {
    const breakTag = isFirstPage ? '' : '<div class="html2pdf__page-break" style="page-break-before: always; height: 0; margin: 0; padding: 0;"></div>';
    return `
      ${breakTag}
      <div class="pdf-page-wrapper" style="width: 710px; box-sizing: border-box; padding: 4px 6px 8px; font-family: 'Times New Roman', Times, 'DejaVu Serif', serif; background: #ffffff; color: #000000; margin: 0 auto;">
        ${pageContent}
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 6px; font-size: 7.5pt; color: #475569; border-top: 1px solid #000000; padding-top: 3px;">
          <span>«Pediatriya va neonatologiyada hamshiralik ishi» | 2-son Nukus Abu Ali ibn Sino nomidagi JTS texnikumi</span>
          <span><strong>${pageNum}</strong> / ${totalPages}-sahifa</span>
        </div>
      </div>
    `;
  }

  const officialHeader = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px; border-bottom: 1.5px solid #000000; padding-bottom: 6px;">
      <div style="width: 62%; text-align: left;">
        <div style="font-size: 8pt; font-weight: bold; color: #000000; text-transform: uppercase; letter-spacing: 0.3px; line-height: 1.2;">
          O'ZBEKISTON RESPUBLIKASI SOG'LIQNI SAQLASH VAZIRLIGI
        </div>
        <div style="font-size: 9.5pt; font-weight: bold; color: #000000; text-transform: uppercase; margin-top: 2px; line-height: 1.2;">
          2-SON NUKUS ABU ALI IBN SINO NOMIDAGI JAMOAT SALOMATLIGI TEXNIKUMI
        </div>
        <div style="font-size: 8pt; color: #1e293b; margin-top: 2px; font-style: italic;">
          «Hamshiralik ishi» kafedrasi
        </div>
      </div>

      <div style="width: 35%; text-align: left; border: 1px solid #000000; background: #ffffff; padding: 4px 7px; font-size: 7.5pt; line-height: 1.3;">
        <div style="font-weight: bold; text-transform: uppercase; color: #000000; margin-bottom: 2px; text-align: center;">«TASDIQLAYMAN»</div>
        <div><strong>O'IBDO':</strong> __________________</div>
        <div>«____» _______________ 202___ y.</div>
        <div style="color: #000000; font-size: 7pt; text-align: right; margin-top: 1px;">(M.O'.)</div>
      </div>
    </div>
  `;

  const signaturesBlock = `
    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 12px; padding-top: 8px; border-top: 1px solid #000000; font-size: 8.5pt;">
      <div style="width: 32%;">
        <div style="font-weight: bold; margin-bottom: 2px; color: #000000;">Kafedra mudiri:</div>
        <div style="border-bottom: 1px solid #000000; height: 18px;"></div>
        <div style="font-size: 7pt; color: #475569; text-align: center; margin-top: 2px;">(imzo, F.I.Sh.)</div>
      </div>
      <div style="width: 32%; text-align: center;">
        <div style="display: inline-block; width: 46px; height: 46px; border: 1.5px dashed #000000; border-radius: 50%; line-height: 46px; font-size: 8pt; font-weight: bold; color: #000000;">
          M. O'.
        </div>
        <div style="font-size: 7pt; color: #000000; margin-top: 2px;">Muhr o'rni</div>
      </div>
      <div style="width: 32%;">
        <div style="font-weight: bold; margin-bottom: 2px; color: #000000;">Fan o'qituvchisi:</div>
        <div style="border-bottom: 1px solid #000000; height: 18px; line-height: 18px; font-weight: bold; color: #000000; text-align: center;">${teacherShort}</div>
        <div style="font-size: 7pt; color: #475569; text-align: center; margin-top: 2px;">(imzo, F.I.Sh.)</div>
      </div>
    </div>
  `;

  if (category === 'amaliy') {
    const list = config.practicalTopics || [];
    // 33 mavzuni qat'iy 3 varaqqa teng taqsimlash (11 + 11 + 11 = 33 ta)
    const p1Items = list.slice(0, 11);
    const p2Items = list.slice(11, 22);
    const p3Items = list.slice(22);

    const page1Content = `
      ${officialHeader}
      <div style="text-align: center; margin: 3px 0 5px;">
        <h2 style="font-size: 10.5pt; font-weight: bold; text-transform: uppercase; color: #000000; margin: 0 0 2px;">
          "${courseTitle}" FANI BO'YICHA AMALIY MASHG'ULOTLAR
        </h2>
        <div style="font-size: 8.5pt; font-weight: bold; color: #000000;">
          TAQVIM-MAVZUIY REJASI (33 TA MAVZU, 132 SOAT)
        </div>
      </div>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 5px; font-size: 8pt; border: 1px solid #000000; background: #ffffff;">
        <tr>
          <td style="padding: 3px 6px; border: 1px solid #000000; width: 18%;"><strong>Fan kodi:</strong></td>
          <td style="padding: 3px 6px; border: 1px solid #000000; width: 32%;">${courseCode}</td>
          <td style="padding: 3px 6px; border: 1px solid #000000; width: 18%;"><strong>Ta'lim yo'nalishi:</strong></td>
          <td style="padding: 3px 6px; border: 1px solid #000000; width: 32%;">Tibbiy profilaktika, Davolash</td>
        </tr>
        <tr>
          <td style="padding: 3px 6px; border: 1px solid #000000;"><strong>O'qituvchi:</strong></td>
          <td style="padding: 3px 6px; border: 1px solid #000000;">${teacherName} (${teacherExp} staj)</td>
          <td style="padding: 3px 6px; border: 1px solid #000000;"><strong>O'quv yuklamasi:</strong></td>
          <td style="padding: 3px 6px; border: 1px solid #000000;"><strong>33 ta mavzu (132 soat)</strong></td>
        </tr>
      </table>
      <table style="width: 100%; border-collapse: collapse;">
        ${tableHeaderHtml}
        <tbody>${renderRows(p1Items)}</tbody>
      </table>
    `;

    const page2Content = `
      <div style="font-size: 8.5pt; font-weight: bold; text-align: center; margin-bottom: 5px; color: #000000; border-bottom: 1px solid #000000; padding-bottom: 3px;">
        "${courseTitle}" — AMALIY MASHG'ULOTLAR TAQVIM-MAVZUIY REJASI (DAVOMI, 12-22 MAVZULAR)
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        ${tableHeaderHtml}
        <tbody>${renderRows(p2Items)}</tbody>
      </table>
    `;

    const page3Content = `
      <div style="font-size: 8.5pt; font-weight: bold; text-align: center; margin-bottom: 5px; color: #000000; border-bottom: 1px solid #000000; padding-bottom: 3px;">
        "${courseTitle}" — AMALIY MASHG'ULOTLAR TAQVIM-MAVZUIY REJASI (YAKUNI, 23-33 MAVZULAR)
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        ${tableHeaderHtml}
        <tbody>${renderRows(p3Items)}</tbody>
        <tfoot>
          <tr style="background: #f1f5f9; color: #000000; font-weight: bold;">
            <td colspan="3" style="border: 1px solid #000000; padding: 5px 8px; text-align: right; font-size: 8.5pt;">JAMI AMALIY O'QUV YUKLAMASI:</td>
            <td style="border: 1px solid #000000; padding: 5px 4px; text-align: center; font-size: 9pt; color: #000000;">132 soat</td>
          </tr>
        </tfoot>
      </table>
      ${signaturesBlock}
    `;

    return wrapPage(page1Content, 1, 3, true) + 
           wrapPage(page2Content, 2, 3, false) + 
           wrapPage(page3Content, 3, 3, false);
  } else if (category === 'nazariy') {
    const list = config.theoreticalTopics || [];
    // 30 mavzuni qat'iy 3 varaqqa teng taqsimlash (10 + 10 + 10 = 30 ta)
    const p1Items = list.slice(0, 10);
    const p2Items = list.slice(10, 20);
    const p3Items = list.slice(20);

    const page1Content = `
      ${officialHeader}
      <div style="text-align: center; margin: 3px 0 5px;">
        <h2 style="font-size: 10.5pt; font-weight: bold; text-transform: uppercase; color: #000000; margin: 0 0 2px;">
          "${courseTitle}" FANI BO'YICHA NAZARIY MASHG'ULOTLAR
        </h2>
        <div style="font-size: 8.5pt; font-weight: bold; color: #000000;">
          TAQVIM-MAVZUIY REJASI (30 TA MA'RUZA, 60 SOAT)
        </div>
      </div>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 5px; font-size: 8pt; border: 1px solid #000000; background: #ffffff;">
        <tr>
          <td style="padding: 3px 6px; border: 1px solid #000000; width: 18%;"><strong>Fan kodi:</strong></td>
          <td style="padding: 3px 6px; border: 1px solid #000000; width: 32%;">${courseCode}</td>
          <td style="padding: 3px 6px; border: 1px solid #000000; width: 18%;"><strong>Ta'lim yo'nalishi:</strong></td>
          <td style="padding: 3px 6px; border: 1px solid #000000; width: 32%;">Tibbiy profilaktika, Davolash</td>
        </tr>
        <tr>
          <td style="padding: 3px 6px; border: 1px solid #000000;"><strong>O'qituvchi:</strong></td>
          <td style="padding: 3px 6px; border: 1px solid #000000;">${teacherName} (${teacherExp} staj)</td>
          <td style="padding: 3px 6px; border: 1px solid #000000;"><strong>O'quv yuklamasi:</strong></td>
          <td style="padding: 3px 6px; border: 1px solid #000000;"><strong>30 ta ma'ruza (60 soat)</strong></td>
        </tr>
      </table>
      <table style="width: 100%; border-collapse: collapse;">
        ${tableHeaderHtml}
        <tbody>${renderRows(p1Items)}</tbody>
      </table>
    `;

    const page2Content = `
      <div style="font-size: 8.5pt; font-weight: bold; text-align: center; margin-bottom: 5px; color: #000000; border-bottom: 1px solid #000000; padding-bottom: 3px;">
        "${courseTitle}" — NAZARIY MASHG'ULOTLAR TAQVIM-MAVZUIY REJASI (DAVOMI, 11-20 MAVZULAR)
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        ${tableHeaderHtml}
        <tbody>${renderRows(p2Items)}</tbody>
      </table>
    `;

    const page3Content = `
      <div style="font-size: 8.5pt; font-weight: bold; text-align: center; margin-bottom: 5px; color: #000000; border-bottom: 1px solid #000000; padding-bottom: 3px;">
        "${courseTitle}" — NAZARIY MASHG'ULOTLAR TAQVIM-MAVZUIY REJASI (YAKUNI, 21-30 MAVZULAR)
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        ${tableHeaderHtml}
        <tbody>${renderRows(p3Items)}</tbody>
        <tfoot>
          <tr style="background: #f1f5f9; color: #000000; font-weight: bold;">
            <td colspan="3" style="border: 1px solid #000000; padding: 5px 8px; text-align: right; font-size: 8.5pt;">JAMI NAZARIY O'QUV YUKLAMASI:</td>
            <td style="border: 1px solid #000000; padding: 5px 4px; text-align: center; font-size: 9pt; color: #000000;">60 soat</td>
          </tr>
        </tfoot>
      </table>
      ${signaturesBlock}
    `;

    return wrapPage(page1Content, 1, 3, true) + 
           wrapPage(page2Content, 2, 3, false) + 
           wrapPage(page3Content, 3, 3, false);
  } else {
    // All (63 topics: 33 amaliy + 30 nazariy)
    const prac = config.practicalTopics || [];
    const theo = config.theoreticalTopics || [];

    const p1Items = prac.slice(0, 11);
    const p2Items = prac.slice(11, 22);
    const p3Items = prac.slice(22);

    const p4Items = theo.slice(0, 15);
    const p5Items = theo.slice(15);

    const page1Content = `
      ${officialHeader}
      <div style="text-align: center; margin: 3px 0 5px;">
        <h2 style="font-size: 10.5pt; font-weight: bold; text-transform: uppercase; color: #000000; margin: 0 0 2px;">
          "${courseTitle}" FANI BO'YICHA TO'LIQ O'QUV DASTURI
        </h2>
        <div style="font-size: 8.5pt; font-weight: bold; color: #000000;">
          TAQVIM-MAVZUIY REJASI (63 TA MAVZU, 192 SOAT)
        </div>
      </div>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 5px; font-size: 8pt; border: 1px solid #000000; background: #ffffff;">
        <tr>
          <td style="padding: 3px 6px; border: 1px solid #000000; width: 18%;"><strong>Fan kodi:</strong></td>
          <td style="padding: 3px 6px; border: 1px solid #000000; width: 32%;">${courseCode}</td>
          <td style="padding: 3px 6px; border: 1px solid #000000; width: 18%;"><strong>Ta'lim yo'nalishi:</strong></td>
          <td style="padding: 3px 6px; border: 1px solid #000000; width: 32%;">Tibbiy profilaktika, Davolash</td>
        </tr>
        <tr>
          <td style="padding: 3px 6px; border: 1px solid #000000;"><strong>O'qituvchi:</strong></td>
          <td style="padding: 3px 6px; border: 1px solid #000000;">${teacherName} (${teacherExp} staj)</td>
          <td style="padding: 3px 6px; border: 1px solid #000000;"><strong>Jami yuklama:</strong></td>
          <td style="padding: 3px 6px; border: 1px solid #000000;"><strong>192 soat (132 s amaliy + 60 s nazariy)</strong></td>
        </tr>
      </table>
      <div style="font-size: 8.5pt; font-weight: bold; margin-bottom: 3px; color: #000000;">I QISM: AMALIY MASHG'ULOTLAR (1-11 MAVZULAR)</div>
      <table style="width: 100%; border-collapse: collapse;">
        ${tableHeaderHtml}
        <tbody>${renderRows(p1Items)}</tbody>
      </table>
    `;

    const page2Content = `
      <div style="font-size: 8.5pt; font-weight: bold; text-align: center; margin-bottom: 5px; color: #000000; border-bottom: 1px solid #000000; padding-bottom: 3px;">
        I QISM: AMALIY MASHG'ULOTLAR (DAVOMI, 12-22 MAVZULAR)
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        ${tableHeaderHtml}
        <tbody>${renderRows(p2Items)}</tbody>
      </table>
    `;

    const page3Content = `
      <div style="font-size: 8.5pt; font-weight: bold; text-align: center; margin-bottom: 5px; color: #000000; border-bottom: 1px solid #000000; padding-bottom: 3px;">
        I QISM: AMALIY MASHG'ULOTLAR (YAKUNI, 23-33 MAVZULAR)
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        ${tableHeaderHtml}
        <tbody>${renderRows(p3Items)}</tbody>
        <tfoot>
          <tr style="background: #f1f5f9; color: #000000; font-weight: bold;">
            <td colspan="3" style="border: 1px solid #000000; padding: 5px 8px; text-align: right; font-size: 8.5pt;">AMALIYOT YUKLAMASI YAKUNI:</td>
            <td style="border: 1px solid #000000; padding: 5px 4px; text-align: center; font-size: 9pt; color: #000000;">132 soat</td>
          </tr>
        </tfoot>
      </table>
    `;

    const page4Content = `
      <div style="font-size: 8.5pt; font-weight: bold; text-align: center; margin-bottom: 5px; color: #000000; border-bottom: 1px solid #000000; padding-bottom: 3px;">
        II QISM: NAZARIY (MA'RUZA) MASHG'ULOTLAR (1-15 MAVZULAR)
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        ${tableHeaderHtml}
        <tbody>${renderRows(p4Items)}</tbody>
      </table>
    `;

    const page5Content = `
      <div style="font-size: 8.5pt; font-weight: bold; text-align: center; margin-bottom: 5px; color: #000000; border-bottom: 1px solid #000000; padding-bottom: 3px;">
        II QISM: NAZARIY (MA'RUZA) MASHG'ULOTLAR (YAKUNI, 16-30 MAVZULAR)
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        ${tableHeaderHtml}
        <tbody>${renderRows(p5Items)}</tbody>
        <tfoot>
          <tr style="background: #f1f5f9; color: #000000; font-weight: bold;">
            <td colspan="3" style="border: 1px solid #000000; padding: 5px 8px; text-align: right; font-size: 8.5pt;">JAMI UMUMIY O'QUV YUKLAMASI (63 TA MAVZU):</td>
            <td style="border: 1px solid #000000; padding: 5px 4px; text-align: center; font-size: 9pt; color: #000000;">192 soat</td>
          </tr>
        </tfoot>
      </table>
      ${signaturesBlock}
    `;

    return wrapPage(page1Content, 1, 5, true) + 
           wrapPage(page2Content, 2, 5, false) + 
           wrapPage(page3Content, 3, 5, false) + 
           wrapPage(page4Content, 4, 5, false) + 
           wrapPage(page5Content, 5, 5, false);
  }
}

// PDF formatida rasmiy hisobotni yuklab olish
function exportSyllabusToPdf(customCategory) {
  const targetCategory = customCategory || syllabusActiveCategory || 'amaliy';
  let categoryName = 'Amaliy';
  if (targetCategory === 'nazariy') categoryName = 'Nazariy';
  if (targetCategory === 'all') categoryName = 'Tolik_192_Soat';

  const rawTitle = (window.COURSE_CONFIG && window.COURSE_CONFIG.course && window.COURSE_CONFIG.course.title)
    ? window.COURSE_CONFIG.course.title
    : 'Pediatriya';
  const cleanTitle = rawTitle.replace(/[^a-zA-Z0-9_]/g, '_');
  const filename = `${cleanTitle}_${categoryName}_Mundarija_Hisoboti.pdf`;

  // Tugmalarda yuklanish indikatori
  const pdfBtns = document.querySelectorAll('.syllabus-pdf-btn, .syl-rep-btn');
  pdfBtns.forEach(btn => {
    btn.dataset.origHtml = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Tayyorlanmoqda...</span>';
    btn.disabled = true;
  });

  const restoreBtns = () => {
    pdfBtns.forEach(btn => {
      btn.innerHTML = btn.dataset.origHtml || '<i class="fas fa-file-pdf"></i> <span>PDF Hisobot</span>';
      btn.disabled = false;
    });
  };

  if (typeof html2pdf !== 'undefined') {
    // 1. Foydalanuvchiga PDF tayyorlanayotgani haqida to'liq ekranli yuklanish oynasi ko'rsatamiz
    const loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'pdfGeneratingOverlay';
    loadingOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(15, 23, 42, 0.88);
      backdrop-filter: blur(8px);
      z-index: 99999999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    `;
    loadingOverlay.innerHTML = `
      <div style="text-align: center; background: #1e293b; padding: 32px 40px; border-radius: 16px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); border: 1px solid rgba(255, 255, 255, 0.1);">
        <i class="fas fa-file-pdf fa-spin" style="font-size: 3.5rem; color: #38bdf8; margin-bottom: 20px;"></i>
        <h3 style="font-size: 1.35rem; font-weight: 700; margin: 0 0 10px; color: #f8fafc;">PDF Hisobot tayyorlanmoqda...</h3>
        <p style="font-size: 0.95rem; color: #94a3b8; margin: 0 0 6px;">Barcha mavzular nomi to'liq jadvalga kiritilmoqda</p>
        <span style="display: inline-block; font-size: 0.82rem; color: #38bdf8; font-weight: 600;">Iltimos, bir necha soniya kuting...</span>
      </div>
    `;
    document.body.appendChild(loadingOverlay);

    // 2. Normal flow konteyner (position absolute/fixed EMAS, html2canvas to'liq balandlikni hisoblashi uchun)
    const reportHtml = generateSyllabusReportHtml(targetCategory);
    const container = document.createElement('div');
    container.id = 'pdfRenderContainer';
    container.innerHTML = reportHtml;
    container.style.cssText = `
      width: 710px;
      margin: 0 auto;
      background: #ffffff;
      color: #000000;
      padding: 0;
      box-sizing: border-box;
    `;
    document.body.appendChild(container);

    const opt = {
      margin:       [6, 6, 6, 6],
      filename:     filename,
      image:        { type: 'jpeg', quality: 1.0 },
      html2canvas:  { 
        scale: 2, 
        useCORS: true, 
        letterRendering: false,
        logging: false,
        backgroundColor: '#ffffff'
      },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak:    { mode: ['css', 'legacy'] }
    };

    html2pdf().set(opt).from(container).save().then(() => {
      // 3. Tozalash va tiklash
      if (container.parentNode) container.remove();
      if (loadingOverlay.parentNode) loadingOverlay.remove();
      restoreBtns();
      showPdfSuccessToast(filename);
    }).catch(err => {
      console.warn("PDF yaratishda xatolik yuz berdi:", err);
      if (container.parentNode) container.remove();
      if (loadingOverlay.parentNode) loadingOverlay.remove();
      restoreBtns();
      window.print();
    });
  } else {
    setTimeout(() => {
      restoreBtns();
      window.print();
    }, 200);
  }
}

function showPdfSuccessToast(filename) {
  let toast = document.getElementById('pdfSuccessToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'pdfSuccessToast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: #ffffff;
      padding: 14px 22px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4);
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: var(--font-heading, sans-serif);
      font-size: 0.92rem;
      font-weight: 600;
      z-index: 99999;
      transform: translateY(100px);
      opacity: 0;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    `;
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fas fa-check-circle" style="font-size: 1.25rem;"></i> <span><strong>${filename}</strong> muvaffaqiyatli yuklab olindi!</span>`;
  toast.style.transform = 'translateY(0)';
  toast.style.opacity = '1';

  setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
  }, 4000);
}

// Global qilish
window.openSyllabusCategory = openSyllabusCategory;
window.closeSyllabusCategory = closeSyllabusCategory;
window.exportSyllabusToPdf = exportSyllabusToPdf;
window.generateSyllabusReportHtml = generateSyllabusReportHtml;
window.showPdfSuccessToast = showPdfSuccessToast;

function renderSyllabusRows() {
  const tbody = document.getElementById('syllabusTableBody');
  const noResults = document.getElementById('syllabusNoResults');
  const table = document.getElementById('syllabusTable');
  if (!tbody) return;

  const filtered = allTopicsList.filter(topic => {
    const matchesCat = 
      syllabusActiveCategory === 'all' || 
      topic.category === syllabusActiveCategory;

    const q = syllabusSearchQuery.trim().toLowerCase();
    const matchesSearch = 
      !q ||
      topic.title.toLowerCase().includes(q) ||
      (topic.shortDesc && topic.shortDesc.toLowerCase().includes(q)) ||
      `${topic.number}` === q ||
      `${topic.number}-mavzu`.toLowerCase().includes(q);

    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    if (table) table.style.display = 'none';
    return;
  }

  if (noResults) noResults.style.display = 'none';
  if (table) table.style.display = '';

  tbody.innerHTML = filtered.map((topic) => {
    const isPractical = topic.category === 'amaliy';
    const hours = isPractical ? '4 soat' : '2 soat';
    const catBadge = isPractical
      ? '<span class="syl-type-pill amaliy"><i class="fas fa-stethoscope"></i> Amaliyot</span>'
      : '<span class="syl-type-pill nazariy"><i class="fas fa-book-medical"></i> Nazariya</span>';

    return `
      <tr class="syllabus-row" data-topic-id="${topic.id}">
        <td class="syl-col-num" style="text-align: center;">
          <span class="syl-num-badge">${topic.number}</span>
        </td>
        <td class="syl-col-cat" style="text-align: center;">
          ${catBadge}
        </td>
        <td class="syl-col-title">
          <div class="syl-topic-title-wrapper">
            <h4 class="syl-topic-title">${topic.title}</h4>
            <p class="syl-topic-desc">${topic.shortDesc || "Ushbu mavzu bo'yicha barcha elektron ta'lim materiallari va 3D slaydlar."}</p>
          </div>
        </td>
        <td class="syl-col-hours" style="text-align: center;">
          <span class="syl-hours-chip"><i class="far fa-clock"></i> ${hours}</span>
        </td>
        <td class="syl-col-action" style="text-align: center;">
          <button class="syl-action-btn" onclick="window.TopicViewer && window.TopicViewer.openTopic('${topic.id}')" title="Mavzuni ochish">
            <span>Ochish</span>
            <i class="fas fa-arrow-right"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// -------------------------------------------------------------
// 5. GUVAHNOMA / SERTIFIKAT MODALI
// -------------------------------------------------------------
function initCertificateModal() {
  const modal = document.getElementById('certificateModal');
  const openBtn = document.getElementById('viewCertificateBtn');
  const closeBtn = document.getElementById('closeCertificateBtn');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

// -------------------------------------------------------------
// 5. BOG'LANISH FORMASI
// -------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Yuborilmoqda...';
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-check"></i> Xabar qabul qilindi!';
      btn.style.background = 'var(--emerald-500)';
      form.reset();

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }, 1000);
  });
}

// -------------------------------------------------------------
// 6. MOBIL MENYU VA SKROLL EFFEKTLARI
// -------------------------------------------------------------
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      toggleBtn.innerHTML = navMenu.classList.contains('open')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });

    // Menyu havolasi bosilganda yopish
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }
}

function initScrollEffects() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.style.boxShadow = 'var(--shadow-md)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
}

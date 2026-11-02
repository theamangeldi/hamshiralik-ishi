/**
 * =====================================================================
 * INTERAKTIV MAVZU KO'RUVCHI VA TEST TIZIMI (TOPIC VIEWER & QUIZ ENGINE)
 * =====================================================================
 */

class TopicViewerManager {
  constructor() {
    this.currentTopic = null;
    this.currentTopicIndex = 0;
    this.allTopics = [];
    this.currentSlideIndex = 0;
    
    // Quiz holati
    this.quizState = {
      questions: [],
      currentIndex: 0,
      userAnswers: {},
      score: 0,
      timerSeconds: 0,
      timerInterval: null
    };

    this.initElements();
    this.initEventListeners();
  }

  initElements() {
    this.modalOverlay = document.getElementById('topicModalOverlay');
    this.modalWindow = document.getElementById('topicModalWindow');
    this.headerBadge = document.getElementById('topicHeaderBadge');
    this.headerTitle = document.getElementById('topicHeaderTitle');
    
    this.closeBtn = document.getElementById('topicCloseBtn');
    this.backBtn = document.getElementById('topicBackBtn');
    this.footerBackBtn = document.getElementById('topicFooterBackBtn');
    this.fullscreenBtn = document.getElementById('topicFullscreenBtn');
    this.prevTopicBtn = document.getElementById('prevTopicBtn');
    this.nextTopicBtn = document.getElementById('nextTopicBtn');

    // Tablar
    this.tabButtons = document.querySelectorAll('.topic-tab-link');
    this.tabPanes = document.querySelectorAll('.topic-tab-pane');

    // Panellar
    this.pdfContainer = document.getElementById('pdfViewerContainer');
    this.slideContainer = document.getElementById('slideViewerContainer');
    this.quizContainer = document.getElementById('quizRunnerContainer');
    this.videoContainer = document.getElementById('videoPlayerContainer');
    this.resourcesContainer = document.getElementById('resourcesGridContainer');
  }

  initEventListeners() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.backBtn) {
      this.backBtn.addEventListener('click', () => this.close());
    }

    if (this.footerBackBtn) {
      this.footerBackBtn.addEventListener('click', () => this.close());
    }

    if (this.fullscreenBtn) {
      this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
    }

    if (this.modalOverlay) {
      this.modalOverlay.addEventListener('click', (e) => {
        if (e.target === this.modalOverlay) this.close();
      });
    }

    // ESC tugmasi orqali yopish
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalOverlay && this.modalOverlay.classList.contains('active')) {
        this.close();
      }
    });

    // Brauzer tarixi (Popstate) orqali mavzudan orqaga qaytish
    window.addEventListener('popstate', (e) => {
      if (e.state && e.state.topicViewerOpen && e.state.topicId) {
        this.openTopic(e.state.topicId, false);
      } else if (this.modalOverlay && this.modalOverlay.classList.contains('active')) {
        this.close(false);
      }
    });

    // Tablar o'rtasida o'tish
    this.tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabTarget = btn.getAttribute('data-tab');
        this.switchTab(tabTarget);
      });
    });

    // Oldingi / Keyingi mavzular
    if (this.prevTopicBtn) {
      this.prevTopicBtn.addEventListener('click', () => this.navigateTopic(-1));
    }
    if (this.nextTopicBtn) {
      this.nextTopicBtn.addEventListener('click', () => this.navigateTopic(1));
    }
  }

  setTopicsList(topics) {
    this.allTopics = topics;
  }

  openTopic(topicId, pushHistory = true) {
    if (!this.allTopics || this.allTopics.length === 0) return;

    const index = this.allTopics.findIndex(t => t.id === topicId);
    if (index === -1) return;

    this.currentTopicIndex = index;
    this.currentTopic = this.allTopics[index];

    // Sarlavha va belgilarni yangilash
    if (this.headerBadge) {
      this.headerBadge.textContent = `${this.currentTopic.categoryName} \u2022 ${this.currentTopic.number}-mavzu`;
    }
    if (this.headerTitle) {
      this.headerTitle.textContent = this.currentTopic.title;
    }

    // Har bir bo'limni yuklash
    this.renderPdfPane();
    this.renderSlidePane();
    this.renderQuizPane();
    this.renderVideoPane();
    this.renderResourcesPane();

    // Dastlabki tabni faollashtirish (Ma'ruza)
    this.switchTab('lecture');

    // Navigatsiya tugmalari holati
    this.updateNavButtons();

    // Modalni ochish
    this.modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (pushHistory) {
      try {
        history.pushState({ topicViewerOpen: true, topicId: topicId }, '', '#topic-' + topicId);
      } catch (e) {}
    }
  }

  close(updateHistory = true) {
    if (this.modalOverlay) {
      this.modalOverlay.classList.remove('active');
    }
    document.body.style.overflow = '';
    
    // Video va timerni to'xtatish
    this.stopVideo();
    this.stopQuizTimer();

    if (updateHistory && window.location.hash.startsWith('#topic-')) {
      try {
        if (window.history.length > 1) {
          window.history.back();
        } else {
          history.pushState(null, '', window.location.pathname);
        }
      } catch (e) {}
    }
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      this.modalWindow.requestFullscreen().catch(err => {
        console.warn('Fullscreen xatosi:', err);
      });
      this.fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
    } else {
      document.exitFullscreen();
      this.fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
    }
  }

  switchTab(tabName) {
    this.tabButtons.forEach(btn => {
      if (btn.getAttribute('data-tab') === tabName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    this.tabPanes.forEach(pane => {
      if (pane.id === `tabPane-${tabName}`) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });

    // Agar video tabidan boshqa tabga o'tsa, videoni to'xtatish
    if (tabName !== 'video') {
      this.stopVideo();
    }
  }

  navigateTopic(direction) {
    const newIndex = this.currentTopicIndex + direction;
    if (newIndex >= 0 && newIndex < this.allTopics.length) {
      this.openTopic(this.allTopics[newIndex].id);
    }
  }

  updateNavButtons() {
    if (this.prevTopicBtn) {
      this.prevTopicBtn.disabled = this.currentTopicIndex === 0;
      this.prevTopicBtn.style.opacity = this.currentTopicIndex === 0 ? '0.4' : '1';
    }
    if (this.nextTopicBtn) {
      this.nextTopicBtn.disabled = this.currentTopicIndex === this.allTopics.length - 1;
      this.nextTopicBtn.style.opacity = this.currentTopicIndex === this.allTopics.length - 1 ? '0.4' : '1';
    }
  }

  // -------------------------------------------------------------
  // 1. MA'RUZA (HTML / PDF) CHIQARISH
  // -------------------------------------------------------------
  renderPdfPane() {
    if (!this.pdfContainer) return;
    const lecturePath = this.currentTopic.lecturePdf || '';
    const isHtml = lecturePath.toLowerCase().endsWith('.html') || lecturePath.toLowerCase().endsWith('.htm');
    const iframeSrc = isHtml ? lecturePath : `${lecturePath}#toolbar=1`;
    const iconClass = isHtml ? 'fas fa-book-reader' : 'fas fa-file-pdf';

    this.pdfContainer.innerHTML = `
      <div class="pdf-viewer-wrapper">
        <div class="pdf-toolbar">
          <div class="pdf-toolbar-info">
            <i class="${iconClass}"></i>
            <span>${this.currentTopic.title} — Ma'ruza matni</span>
          </div>
          <div class="pdf-toolbar-actions">
            <a href="${lecturePath}" target="_blank" class="btn-secondary" style="padding: 6px 14px; font-size: 0.85rem;">
              <i class="fas fa-external-link-alt"></i> Alohida oynada ochish
            </a>
            <button type="button" onclick="var f=document.getElementById('lectureIframe'); if(f && f.contentWindow){f.contentWindow.print();}else{window.open('${lecturePath}','_blank');}" class="btn-primary" style="padding: 6px 14px; font-size: 0.85rem; margin-left: 8px;">
              <i class="fas fa-print"></i> Chop etish
            </button>
          </div>
        </div>
        <iframe id="lectureIframe" class="pdf-frame" src="${iframeSrc}" title="Ma'ruza matni"></iframe>
      </div>
    `;
  }

  // -------------------------------------------------------------
  // 2. 3D INTERAKTIV TAQDIMOT / SLAYDLAR CHIQARISH
  // -------------------------------------------------------------
  renderSlidePane() {
    if (!this.slideContainer) return;
    const topicId = this.currentTopic ? this.currentTopic.id : '';
    const topicTitle = this.currentTopic ? this.currentTopic.title : "Taqdimot";

    this.slideContainer.innerHTML = `
      <div class="slide-3d-wrapper">
        <iframe
          id="slide3dIframe"
          class="slide-3d-frame"
          src="slayd-3d.html?id=${encodeURIComponent(topicId)}&embed=1"
          title="3D Taqdimot: ${topicTitle}"
          allow="fullscreen"
          loading="lazy">
        </iframe>
      </div>
    `;
  }

  // -------------------------------------------------------------
  // 3. INTERAKTIV TEST TIZIMI (QUIZ ENGINE)
  // -------------------------------------------------------------
  renderQuizPane() {
    if (!this.quizContainer) return;
    
    // Mavzu savollari yoki standart namunaviy savollar
    const questions = (this.currentTopic.quiz && this.currentTopic.quiz.length > 0) 
      ? this.currentTopic.quiz 
      : [
          {
            question: "Ushbu mavzu bo'yicha asosiy tibbiy qoidalarni to'g'ri ko'rsating:",
            options: [
              "Sanitariya-gigiyena va aseptika talablariga qat'iy rioya qilish",
              "Har qanday muolajani sterilizatsiyasiz bajarish",
              "Bemorning holatini tekshirmasdan dori yuborish",
              "Tibbiy hujjatlarni to'ldirmaslik"
            ],
            correct: 0,
            explanation: "Har qanday tibbiy muolajaning asosi sanitariya-gigiyena va aseptika qoidalariga rioya qilishdir."
          },
          {
            question: "Hamshiralik parvarishida bemor bilan muloqot qilishning eng muhim omili nima?",
            options: [
              "Tibbiy deontologiya va bemorga hurmat bilan yondashish",
              "Bemorning shikoyatlarini e'tiborsiz qoldirish",
              "Tezda muolajani tugatib ketish",
              "Faqat dori vositalariga tayanish"
            ],
            correct: 0,
            explanation: "Tibbiy deontologiya va samimiy, mas'uliyatli muloqot bemorning tezroq tuzalishiga xizmat qiladi."
          }
        ];

    this.quizState = {
      questions: questions,
      currentIndex: 0,
      userAnswers: {},
      score: 0,
      timerSeconds: 0,
      timerInterval: null
    };

    this.renderQuizQuestion();
  }

  renderQuizQuestion() {
    const q = this.quizState.questions[this.quizState.currentIndex];
    const total = this.quizState.questions.length;
    const currentNum = this.quizState.currentIndex + 1;
    const progressPercent = Math.round((currentNum / total) * 100);

    this.quizContainer.innerHTML = `
      <div class="quiz-runner-card">
        <div class="quiz-header-status">
          <span class="quiz-question-number">Savol ${currentNum} / ${total}</span>
          <span class="quiz-timer"><i class="far fa-clock"></i> Interaktiv test</span>
        </div>
        <div class="quiz-progress-track">
          <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
        </div>
        <h3 class="quiz-question-title">${q.question}</h3>
        <div class="quiz-options-list" id="quizOptionsBox">
          ${q.options.map((opt, i) => `
            <div class="quiz-option-item" data-index="${i}">
              <span class="quiz-option-indicator">${String.fromCharCode(65 + i)}</span>
              <span>${opt}</span>
            </div>
          `).join('')}
        </div>
        <div class="quiz-explanation-box" id="quizExplanationBox">
          <strong><i class="fas fa-info-circle"></i> Izoh:</strong> ${q.explanation || "To'g'ri javob tasdiqlandi."}
        </div>
        <div class="quiz-footer-actions">
          <button class="btn-primary" id="quizCheckBtn" disabled>
            Javobni tasdiqlash <i class="fas fa-check"></i>
          </button>
          <button class="btn-primary" id="quizNextBtn" style="display: none;">
            ${currentNum === total ? 'Natijani ko\'rish' : 'Keyingi savol'} <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div class="quiz-runner-card quiz-result-view" id="quizResultCard">
        <div class="result-score-ring">
          <span class="score-percent" id="finalScorePercent">100%</span>
          <span class="score-label">Natija</span>
        </div>
        <h3 class="quiz-question-title" id="finalResultTitle">A'lo natija!</h3>
        <p class="slide-body-text" id="finalResultDesc" style="margin-bottom: 24px;">Siz ushbu mavzu bo'yicha barcha savollarga muvaffaqiyatli javob berdingiz.</p>
        <button class="btn-primary" id="quizRetakeBtn">
          <i class="fas fa-redo"></i> Testni qayta topshirish
        </button>
      </div>
    `;

    // Variantlarni tanlash
    let selectedOptionIndex = null;
    const optionItems = document.querySelectorAll('.quiz-option-item');
    const checkBtn = document.getElementById('quizCheckBtn');
    const nextBtn = document.getElementById('quizNextBtn');
    const expBox = document.getElementById('quizExplanationBox');

    optionItems.forEach(item => {
      item.addEventListener('click', () => {
        if (checkBtn.style.display === 'none') return; // Allaqachon tekshirilgan bo'lsa
        optionItems.forEach(el => el.classList.remove('selected'));
        item.classList.add('selected');
        selectedOptionIndex = parseInt(item.getAttribute('data-index'));
        checkBtn.removeAttribute('disabled');
      });
    });

    // Javobni tekshirish
    checkBtn.addEventListener('click', () => {
      if (selectedOptionIndex === null) return;

      const isCorrect = selectedOptionIndex === q.correct;
      if (isCorrect) {
        this.quizState.score++;
        optionItems[selectedOptionIndex].classList.add('correct');
      } else {
        optionItems[selectedOptionIndex].classList.add('wrong');
        optionItems[q.correct].classList.add('correct');
      }

      expBox.style.display = 'block';
      checkBtn.style.display = 'none';
      nextBtn.style.display = 'inline-flex';
    });

    // Keyingi savol yoki natija
    nextBtn.addEventListener('click', () => {
      if (this.quizState.currentIndex < this.quizState.questions.length - 1) {
        this.quizState.currentIndex++;
        this.renderQuizQuestion();
      } else {
        this.showQuizResults();
      }
    });

    // Qayta topshirish
    const retakeBtn = document.getElementById('quizRetakeBtn');
    if (retakeBtn) {
      retakeBtn.addEventListener('click', () => {
        this.renderQuizPane();
      });
    }
  }

  showQuizResults() {
    const total = this.quizState.questions.length;
    const score = this.quizState.score;
    const percent = Math.round((score / total) * 100);

    const questionCard = document.querySelector('.quiz-runner-card:not(.quiz-result-view)');
    const resultCard = document.getElementById('quizResultCard');

    if (questionCard) questionCard.style.display = 'none';
    if (resultCard) {
      resultCard.style.display = 'block';
      document.getElementById('finalScorePercent').textContent = `${percent}%`;

      const titleElem = document.getElementById('finalResultTitle');
      const descElem = document.getElementById('finalResultDesc');

      if (percent >= 85) {
        titleElem.textContent = "A'lo natija! 🌟";
        descElem.textContent = `Tabriklaymiz! Siz ${total} ta savoldan ${score} tasiga to'g'ri javob berdingiz va mavzuni to'liq o'zlashtirdingiz.`;
      } else if (percent >= 60) {
        titleElem.textContent = "Yaxshi natija! 👍";
        descElem.textContent = `Siz ${total} ta savoldan ${score} tasiga to'g'ri javob berdingiz. Bilimlaringizni yanada mustahkamlash uchun ma'ruzani takrorlab chiqing.`;
      } else {
        titleElem.textContent = "Qayta urinib ko'ring! 🔄";
        descElem.textContent = `Siz ${total} ta savoldan ${score} tasiga to'g'ri javob berdingiz. Ma'ruza va video darslikni qayta o'rganib, testni takrorlang.`;
      }
    }
  }

  stopQuizTimer() {
    if (this.quizState.timerInterval) {
      clearInterval(this.quizState.timerInterval);
    }
  }

  // -------------------------------------------------------------
  // 4. VIDEO DARSLIK CHIQARISH
  // -------------------------------------------------------------
  renderVideoPane() {
    if (!this.videoContainer) return;
    const videoUrl = this.currentTopic.videoUrl;

    if (videoUrl) {
      const isHtml = videoUrl.toLowerCase().endsWith('.html') || videoUrl.toLowerCase().endsWith('.htm');
      if (isHtml) {
        this.videoContainer.innerHTML = `
          <div class="video-player-container" style="position: relative; width: 100%; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.25); background: #090d16;">
            <iframe id="topicVideoIframe" src="${videoUrl}" style="width: 100%; height: 580px; border: none; display: block;" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
          <div style="text-align: center; margin-top: 14px; display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
            <a href="${videoUrl}" target="_blank" class="btn-primary" style="font-size: 0.88rem; padding: 8px 18px;">
              <i class="fas fa-external-link-alt"></i> Alohida to'liq oynada ochish
            </a>
          </div>
        `;
        return;
      }
      this.videoContainer.innerHTML = `
        <div class="video-player-container">
          <video class="topic-video-elem" id="topicVideoPlayer" controls playsinline preload="metadata">
            <source src="${videoUrl}" type="video/mp4">
            Brauzeringiz videoni qo'llab-quvvatlamaydi.
          </video>
        </div>
        <div style="text-align: center; margin-top: 16px;">
          <a href="${videoUrl}" download class="btn-secondary" style="font-size: 0.88rem; padding: 8px 18px;">
            <i class="fas fa-download"></i> Videoni yuklab olish
          </a>
        </div>
      `;
    } else {
      this.videoContainer.innerHTML = `
        <div class="pdf-fallback-box">
          <i class="fas fa-video-slash pdf-fallback-icon"></i>
          <h3>Video darslik hozircha yuklanmagan</h3>
          <p class="slide-body-text">Ushbu mavzu uchun video fayl tez kunda tizimga joylashtiriladi.</p>
        </div>
      `;
    }
  }

  stopVideo() {
    const videoElem = document.getElementById('topicVideoPlayer');
    if (videoElem) {
      videoElem.pause();
    }
    const iframeElem = document.getElementById('topicVideoIframe');
    if (iframeElem && iframeElem.contentWindow) {
      try {
        iframeElem.contentWindow.postMessage('stopVideo', '*');
      } catch (e) {}
    }
  }

  // -------------------------------------------------------------
  // 5. DIDAKTIK VA PEDAGOGIK RESURSLAR CHIQARISH
  // -------------------------------------------------------------
  renderResourcesPane() {
    if (!this.resourcesContainer) return;
    const t = this.currentTopic;

    const resources = [
      {
        title: "Pedagogik texnologiya",
        desc: "Dars ishlanmasi, o'qitish metodlari va zamonaviy interaktiv usullar majmuasi.",
        file: t.pedTechPdf,
        icon: "fa-chalkboard-teacher"
      },
      {
        title: "Vizual didaktik resurs",
        desc: "Ko'rgazmali qurollar, chizmalar, anatomo-fiziologik sxemalar va fotosuratlar.",
        file: t.visualPdf,
        icon: "fa-images"
      },
      {
        title: "Glossariy qo'llanmasi",
        desc: "Mavzu bo'yicha to'liq tibbiy terminologik lug'at va atamalar izohi.",
        file: t.glossaryPdf,
        icon: "fa-book-medical"
      }
    ];

    this.resourcesContainer.innerHTML = `
      <div class="resources-grid-cards">
        ${resources.map(res => `
          <div class="resource-download-card">
            <div class="resource-file-icon">
              <i class="fas ${res.icon}"></i>
            </div>
            <div class="resource-card-info">
              <h4 class="resource-card-title">${res.title}</h4>
              <p class="resource-card-desc">${res.desc}</p>
              <div style="display: flex; gap: 8px;">
                ${res.file ? `
                  <a href="${res.file}" target="_blank" class="btn-secondary" style="padding: 6px 14px; font-size: 0.85rem;">
                    <i class="fas fa-eye"></i> Ko'rish
                  </a>
                  <a href="${res.file}" download class="btn-primary" style="padding: 6px 14px; font-size: 0.85rem;">
                    <i class="fas fa-download"></i> Yuklab olish
                  </a>
                ` : `
                  <span class="meta-chip"><i class="fas fa-info-circle"></i> Fayl kiritilmoqda</span>
                `}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

// Global instansiya
if (typeof window !== "undefined") {
  window.TopicViewer = new TopicViewerManager();
}

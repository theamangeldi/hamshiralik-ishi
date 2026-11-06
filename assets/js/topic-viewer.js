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
    window.topicViewer = this;
    
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
    this.pedtechContainer = document.getElementById('pedtechViewerContainer');
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
    this.renderPedTechPane();
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
  // 4. VIDEO DARSLIK CHIQARISH (YouTube, HTML & MP4)
  // -------------------------------------------------------------
  renderVideoPane() {
    if (!this.videoContainer) return;
    const videoUrl = this.currentTopic.videoUrl;

    if (!videoUrl) {
      this.videoContainer.innerHTML = `
        <div class="pdf-fallback-box">
          <i class="fas fa-video-slash pdf-fallback-icon"></i>
          <h3>Video darslik hozircha yuklanmagan</h3>
          <p class="slide-body-text">Ushbu mavzu uchun video fayl tez kunda tizimga joylashtiriladi.</p>
        </div>
      `;
      return;
    }

    // 1. YouTube videoni aniqlash va xatosiz 16:9 pleer chiqarish
    const ytMatch = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/i);
    if (ytMatch && ytMatch[1]) {
      const ytId = ytMatch[1];
      const safeTitle = (this.currentTopic.title || 'Video darslik').replace(/"/g, '&quot;');
      const isFileProtocol = window.location.protocol === 'file:';

      // file:// protokolida brauzer Origin yubormagani sababli YouTube "Error 153" chiqaradi.
      // Buning oldini olish uchun GitHub Pages xavfsiz HTTPS proksisidan foydalanamiz,
      // vebda esa www.youtube.com/embed to'g'ridan-to'g'ri ochiladi.
      const embedUrl = isFileProtocol 
        ? `https://theamangeldi.github.io/hamshiralik-ishi/player.html?v=${ytId}&title=${encodeURIComponent(safeTitle)}`
        : `https://www.youtube.com/embed/${ytId}?rel=0`;

      this.videoContainer.innerHTML = `
        <div class="video-player-container" style="position: relative; width: 100%; max-width: 960px; margin: 0 auto; padding-bottom: 56.25%; height: 0; border-radius: 14px; overflow: hidden; box-shadow: 0 12px 35px rgba(0,0,0,0.35); background: #000;">
          <iframe 
            id="topicVideoIframe" 
            src="${embedUrl}" 
            title="${safeTitle}"
            referrerpolicy="strict-origin-when-cross-origin"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </div>
        <div style="text-align: center; margin-top: 16px; display: flex; flex-direction: column; align-items: center; gap: 10px;">
          <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
            <a href="https://www.youtube.com/watch?v=${ytId}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size: 0.95rem; font-weight: 600; padding: 10px 24px; background: linear-gradient(135deg, #e50914, #b20710); border: none; box-shadow: 0 4px 15px rgba(229,9,20,0.35); border-radius: 8px; display: inline-flex; align-items: center; gap: 8px;">
              <i class="fab fa-youtube" style="font-size: 1.15rem;"></i> YouTubeda to'liq ekranda tomosha qilish
            </a>
            <button type="button" onclick="window.topicViewer && window.topicViewer.toggleVideoPlayer('${ytId}')" class="btn-secondary" style="font-size: 0.88rem; padding: 10px 18px; background: rgba(255,255,255,0.08); color: #cbd5e1; border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
              <i class="fas fa-sync-alt"></i> Pleerni almashtirish / Qayta yuklash
            </button>
          </div>
          <div id="playerModeStatus" style="font-size: 0.8rem; color: #94a3b8; display: none;"></div>
          ${isFileProtocol ? `
            <div style="font-size: 0.84rem; color: #38bdf8; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); padding: 8px 18px; border-radius: 8px; max-width: 650px; text-align: center; line-height: 1.5;">
              <i class="fas fa-shield-alt" style="color: #10b981; margin-right: 5px;"></i> 
              YouTube <strong>Error 153</strong> xatosining oldini olish uchun xavfsiz HTTPS proksi orqali yuklanmoqda. Agar internetingiz sekin bo'lsa yoki brauzer bloklasa, qizil tugma orqali bevosita YouTubeda ko'rishingiz mumkin.
            </div>
          ` : `
            <div style="font-size: 0.8rem; color: #94a3b8;">
              <i class="fas fa-info-circle"></i> Agar videoni o'ynatishda brauzer cheklovi bo'lsa, qizil tugmani bosib to'g'ridan-to'g'ri YouTubeda ko'rishingiz mumkin.
            </div>
          `}
        </div>
      `;
      return;
    }

    // 2. HTML interaktiv o'yin / simulyator
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

    // 3. Mahalliy MP4 video fayl
    this.videoContainer.innerHTML = `
      <div class="video-player-container" style="display: flex; justify-content: center; align-items: center; background: #070b14; border-radius: 14px; overflow: hidden; padding: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.35);">
        <video class="topic-video-elem" id="topicVideoPlayer" controls playsinline preload="metadata" style="max-height: 560px; width: auto; max-width: 100%; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
          <source src="${videoUrl}" type="video/mp4">
          Brauzeringiz videoni qo'llab-quvvatlamaydi.
        </video>
      </div>
      <div style="text-align: center; margin-top: 14px; display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
        <a href="${videoUrl}" download class="btn-primary" style="font-size: 0.88rem; padding: 8px 18px;">
          <i class="fas fa-download"></i> Videoni yuklab olish (MP4)
        </a>
        <a href="${videoUrl}" target="_blank" class="btn-secondary" style="font-size: 0.88rem; padding: 8px 18px;">
          <i class="fas fa-external-link-alt"></i> Alohida oynada ko'rish
        </a>
      </div>
    `;
  }

  stopVideo() {
    const videoElem = document.getElementById('topicVideoPlayer');
    if (videoElem) {
      videoElem.pause();
    }
    const iframeElem = document.getElementById('topicVideoIframe');
    if (iframeElem) {
      try {
        iframeElem.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        iframeElem.contentWindow.postMessage('stopVideo', '*');
      } catch (e) {}
      // Reset iframe source to immediately cut off any audio/video
      const currentSrc = iframeElem.src;
      iframeElem.src = '';
      setTimeout(() => {
        if (iframeElem) iframeElem.src = currentSrc;
      }, 50);
    }
  }

  toggleVideoPlayer(ytId) {
    const iframe = document.getElementById('topicVideoIframe');
    const statusElem = document.getElementById('playerModeStatus');
    if (!iframe || !ytId) return;

    this.videoSourceMode = ((this.videoSourceMode || 0) + 1) % 3;
    const safeTitle = (this.currentTopic && this.currentTopic.title ? this.currentTopic.title : 'Video').replace(/"/g, '&quot;');

    const sources = [
      {
        url: `https://theamangeldi.github.io/hamshiralik-ishi/player.html?v=${ytId}&title=${encodeURIComponent(safeTitle)}`,
        name: "Xavfsiz HTTPS Proksi (Error 153 bartaraf etilgan)"
      },
      {
        url: `https://www.youtube.com/embed/${ytId}?rel=0`,
        name: "YouTube Standart Pleer"
      },
      {
        url: `https://www.youtube-nocookie.com/embed/${ytId}?rel=0`,
        name: "YouTube Maxfiy Pleer (No-Cookie)"
      }
    ];

    const current = sources[this.videoSourceMode];
    iframe.src = current.url;

    if (statusElem) {
      statusElem.style.display = 'block';
      statusElem.innerHTML = `<i class="fas fa-check-circle" style="color: #10b981;"></i> Faol pleer rejimi: <strong>${current.name}</strong>`;
    }
  }

  // -------------------------------------------------------------
  // 5. PEDAGOGIK TEXNOLOGIYA VA TEXNOLOGIK XARITALAR CHIQARISH
  // -------------------------------------------------------------
  renderPedTechPane() {
    if (!this.pedtechContainer) return;
    if (window.PedTechBuilder && typeof window.PedTechBuilder.buildHtml === 'function') {
      this.pedtechContainer.innerHTML = window.PedTechBuilder.buildHtml(this.currentTopic, window.COURSE_CONFIG);
    } else {
      this.pedtechContainer.innerHTML = `
        <div class="pdf-fallback-box">
          <i class="fas fa-chalkboard-teacher pdf-fallback-icon"></i>
          <h3>Pedagogik texnologiya moduli tayyorlanmoqda...</h3>
          <p class="slide-body-text">Iltimos, sahifani yangilang.</p>
        </div>
      `;
    }
  }

  // -------------------------------------------------------------
  // 6. DIDAKTIK VA PEDAGOGIK RESURSLAR CHIQARISH
  // -------------------------------------------------------------
  renderResourcesPane() {
    if (!this.resourcesContainer) return;
    const t = this.currentTopic;

    const resources = [
      {
        title: "Pedagogik texnologiya",
        desc: "Dars ishlanmasi, o'qitish metodlari va zamonaviy interaktiv usullar majmuasi.",
        isPedTech: true,
        file: t.pedTechPdf,
        icon: "fa-chalkboard-teacher"
      },
      {
        title: "Vizual didaktik resurs",
        desc: "Ko'rgazmali qurollar, chizmalar, anatomo-fiziologik sxemalar va fotosuratlar.",
        isVisual: true,
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
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                ${res.isPedTech ? `
                  <button type="button" class="btn-primary" onclick="window.topicViewer.switchTab('pedtech')" style="padding: 6px 14px; font-size: 0.85rem; cursor: pointer;">
                    <i class="fas fa-chalkboard-teacher"></i> Interaktiv ko'rish
                  </button>
                  <button type="button" class="btn-secondary" onclick="window.PedTechBuilder.exportWord('${t.id}')" style="padding: 6px 14px; font-size: 0.85rem; cursor: pointer;">
                    <i class="fas fa-file-word"></i> Word yuklab olish
                  </button>
                ` : res.isVisual ? `
                  <button type="button" class="btn-primary" onclick="window.VisualDidacticViewer.zoomImage(window.VisualDidacticViewer.getImageForTopic('${t.id}'), '${t.title.replace(/'/g, "\\'")}')" style="padding: 7px 20px; font-size: 0.88rem; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
                    <i class="fas fa-image"></i> HD Rasm
                  </button>
                ` : (res.file ? `
                  <a href="${res.file}" target="_blank" class="btn-secondary" style="padding: 6px 14px; font-size: 0.85rem;">
                    <i class="fas fa-eye"></i> Ko'rish
                  </a>
                  <a href="${res.file}" download class="btn-primary" style="padding: 6px 14px; font-size: 0.85rem;">
                    <i class="fas fa-download"></i> Yuklab olish
                  </a>
                ` : `
                  <span class="meta-chip"><i class="fas fa-info-circle"></i> Fayl kiritilmoqda</span>
                `)}
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

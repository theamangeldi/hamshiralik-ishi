/**
 * =====================================================================
 * VIZUAL DIDAKTIK RESURSLAR VA KO'RGAZMALI QUROLLAR MODULI
 * =====================================================================
 * Har bir mavzu matnidan kelib chiqqan holda professional tibbiy
 * illyustratsiyalar, anatomo-fiziologik sxemalar, jadvallar va
 * ko'rgazmali plakatlarni ko'rsatish, kattalashtirish (zoom), HD yuklab
 * olish va A4 formatida chop etish imkonini beradi.
 */

window.VisualDidacticViewer = {
  // Mavjud bo'lgan maxsus AI rasmlari ro'yxati
  customImages: {
    "amaliy-1": "assets/images/didactic/amaliy-1.jpg",
    "amaliy-2": "assets/images/didactic/amaliy-2.jpg",
    "amaliy-4": "assets/images/didactic/amaliy-4.jpg",
    "amaliy-6": "assets/images/didactic/amaliy-6.jpg",
    "amaliy-21": "assets/images/didactic/amaliy-21.jpg"
  },

  // Mavzuga oid maxsus didaktik ko'rsatmalar va klinik me'yorlar
  getClinicalTips: function(topic) {
    const text = ((topic.title || '') + ' ' + (topic.shortDesc || '')).toLowerCase();
    
    if (text.includes('antropometriy') || text.includes('jismoniy rivoj')) {
      return [
        "1 yoshgacha bo'lgan bolaning bo'yi maxsus gorizontal bolalar bo'y o'lchagich taxtasida yotqizilgan holda o'lchanadi.",
        "Chaqaloq tug'ilganda bosh aylanasi (34-36 sm) ko'krak qafasi aylanasidan (32-34 sm) 1-2 sm katta bo'ladi. Ular 4 oylikda tenglashadi.",
        "Go'dak hayotining 1-choragida har oy o'rtacha 800 grammdan tana vazni orttiradi.",
        "Antropometriya o'lchovlari har doim bir xil vaqtda (ertalab och qoringa) o'tkazilishi tavsiya etiladi."
      ];
    }
    if (text.includes('puls') || text.includes('nafas') || text.includes('vital')) {
      return [
        "Chaqaloqlarda nafas olish soni daqiqasiga 40-60 marta, 1 yoshda 30-35 marta, maktab yoshida 18-20 marta me'yorda bo'ladi.",
        "Yurak urishlar soni (puls) yangi tug'ilgan davrda 140-160 zarba/daq, 1 yoshda 120 zarba/daq, katta bolalarda 80-90 zarba/daq bo'ladi.",
        "Nafas va pulsni bola to'liq tinch holatda (yig'lamayotganda) kamida to'liq 1 daqiqa davomida sanash shart."
      ];
    }
    if (text.includes('kindik') || text.includes('teri') || text.includes('parvarish')) {
      return [
        "Kindik qoldig'i va jarohati har kuni antiseptik qoidalariga qat'iy rioya etgan holda ishlov beriladi.",
        "Chaqaloq terisidagi burmalar (bo'yin, chov, qo'ltiq osti) toza qaynatilgan iliq suv va paxta sharchalari bilan tozalanadi.",
        "Gonoblennoreya profilaktikasi uchun tug'ruqdan keyin ko'zga 20% li natriy sulfatsil (albucid) eritmasi tomiziladi."
      ];
    }
    if (text.includes('emizish') || text.includes('sut')) {
      return [
        "Tug'ruqdan keyin birinchi 30-60 daqiqa ichida chaqaloqni onaning ko'kragiga yotqizish (teri-teriga kontakt) shart.",
        "Og'iz suti (og'iz suyuqligi) yuqori immunologik himoyaga va vitaminlarga boy eng birinchi tabiiy emlashdir.",
        "Bolani emizishda bola qorni onaning qorniga tegib turishi, boshi va tanasi bir to'g'ri chiziqda bo'lishi lozim."
      ];
    }
    if (text.includes('mantu') || text.includes('emlash')) {
      return [
        "Mantu sinamasi bilak sohasining o'rta uchligiga 0.1 ml (2 TE PPD-L) hajmda terining ichiga (intradermal) yuboriladi.",
        "Inyeksiya joyida 7-8 mm li oqish 'limon po'sti' ko'rinishidagi papula hosil bo'lishi to'g'ri texnikaning belgisidir.",
        "Natija 72 soatdan keyin shaffof millimetrli chizg'ich yordamida qizarish (giperemiya) emas, faqat zichlashma (infiltrat) ko'ndalang diametri o'lchanadi."
      ];
    }

    return [
      "Har qanday tibbiy-profilaktik muolaja sanitariya-gigiyena va aseptika-antiseptika qoidalariga muvofiq bajariladi.",
      "Muolajadan oldin va keyin qo'llarni gigiyenik yuvish va antiseptik bilan ishlov berish majburiydir.",
      "Bola bilan muloqotda tibbiy deontologiya va iliq psixologik muhit yaratish sog'ayishning asosiy omilidir."
    ];
  },

  // Modallarni ochish
  open: function(topicId) {
    let topic = null;
    if (window.COURSE_CONFIG) {
      const all = (window.COURSE_CONFIG.practicalTopics || []).concat(window.COURSE_CONFIG.theoreticalTopics || []);
      topic = all.find(t => t.id === topicId);
    }
    if (!topic && window.topicViewer) {
      topic = window.topicViewer.currentTopic;
    }
    if (!topic) return;

    this.currentTopic = topic;
    this.renderModal(topic);

    const modal = document.getElementById('visualDidacticModal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  },

  // Yopish
  close: function() {
    const modal = document.getElementById('visualDidacticModal');
    if (modal) {
      modal.classList.remove('active');
      if (!document.getElementById('topicModalOverlay').classList.contains('active')) {
        document.body.style.overflow = '';
      }
    }
  },

  // Modal HTML tuzilishi
  renderModal: function(topic) {
    let container = document.getElementById('visualDidacticModal');
    if (!container) {
      container = document.createElement('div');
      container.id = 'visualDidacticModal';
      container.className = 'visual-modal-overlay';
      document.body.appendChild(container);
    }

    const customImg = this.customImages[topic.id] || `assets/images/slides/${topic.id}-slayd-1.svg`;
    const tips = this.getClinicalTips(topic);
    const slides = topic.slides || [];

    container.innerHTML = `
      <div class="visual-modal-window">
        <!-- Modal tepasi -->
        <div class="visual-modal-header">
          <div class="visual-header-info">
            <span class="visual-badge"><i class="fas fa-images"></i> Vizual didaktik resurs</span>
            <h3 class="visual-title">№ ${topic.number}-Mavzu: ${topic.title}</h3>
          </div>
          <div class="visual-header-actions">
            <button class="btn-primary" onclick="window.VisualDidacticViewer.printPoster()" style="font-size: 0.85rem; padding: 7px 14px;">
              <i class="fas fa-print"></i> Plakat chop etish (A4)
            </button>
            <button class="visual-close-btn" onclick="window.VisualDidacticViewer.close()">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>

        <!-- Modal asosiy qismi -->
        <div class="visual-modal-body" id="visualPrintArea">
          <!-- 1. Asosiy Klinik Illyustratsiya -->
          <div class="visual-hero-card">
            <div class="visual-hero-image-wrap">
              <img src="${customImg}" alt="${topic.title}" class="visual-hero-img" id="visualMainHeroImg" onerror="this.src='assets/images/slides/${topic.id}-slayd-1.svg'">
              <div class="visual-hero-badge">
                <i class="fas fa-check-circle"></i> Professional klinik didaktik tasvir
              </div>
            </div>
            <div class="visual-hero-details">
              <h4 class="visual-hero-heading">${topic.title}</h4>
              <p class="visual-hero-desc">${topic.shortDesc || "Ushbu ko'rgazmali didaktik resurs talabalarda amaliy ko'nikmalarni vizual idrok etish va mustahkamlash uchun ishlab chiqilgan."}</p>
              
              <div class="visual-hero-buttons no-print">
                <a href="${customImg}" download="Didaktik_illyustratsiya_${topic.id}.jpg" class="btn-primary" style="font-size: 0.88rem; padding: 8px 18px;">
                  <i class="fas fa-download"></i> HD Rasmni yuklab olish
                </a>
                <button type="button" class="btn-secondary" onclick="window.VisualDidacticViewer.zoomImage('${customImg}', '${topic.title.replace(/'/g, "\\'")}')" style="font-size: 0.88rem; padding: 8px 18px;">
                  <i class="fas fa-search-plus"></i> Katta ekranda ko'rish
                </button>
              </div>
            </div>
          </div>

          <!-- 2. Anatomo-fiziologik va amaliy sxemalar galereyasi (5 ta slayd) -->
          <div class="visual-schemes-section">
            <h4 class="visual-section-heading">
              <i class="fas fa-project-diagram"></i> Mavzuning anatomo-fiziologik va klinik amaliy sxemalari
            </h4>
            <div class="visual-schemes-grid">
              ${slides.map((s, idx) => {
                const svgPath = `assets/images/slides/${topic.id}-slayd-${idx + 1}.svg`;
                return `
                  <div class="visual-scheme-card" onclick="window.VisualDidacticViewer.zoomImage('${svgPath}', '${s.title.replace(/'/g, "\\'")}')">
                    <div class="visual-scheme-img-box">
                      <img src="${svgPath}" alt="${s.title}" class="visual-scheme-img" loading="lazy">
                      <div class="visual-scheme-overlay-hint">
                        <i class="fas fa-search-plus"></i> Kattalashtirish
                      </div>
                    </div>
                    <div class="visual-scheme-info">
                      <div class="visual-scheme-step">Slayd ${idx + 1}</div>
                      <h5 class="visual-scheme-title">${s.title}</h5>
                      <p class="visual-scheme-text">${s.text}</p>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- 3. Didaktik ko'rsatmalar va klinik me'yorlar -->
          <div class="visual-tips-card">
            <h4 class="visual-tips-heading">
              <i class="fas fa-notes-medical"></i> Muhim klinik ko'rsatmalar va eslatmalar
            </h4>
            <div class="visual-tips-list">
              ${tips.map(tip => `
                <div class="visual-tip-item">
                  <i class="fas fa-check-circle visual-tip-icon"></i>
                  <span>${tip}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // Rasmni to'liq ekranda kattalashtirish (Lightbox)
  zoomImage: function(src, title) {
    let lb = document.getElementById('visualLightbox');
    if (!lb) {
      lb = document.createElement('div');
      lb.id = 'visualLightbox';
      lb.className = 'visual-lightbox-overlay';
      lb.onclick = function() { lb.classList.remove('active'); };
      document.body.appendChild(lb);
    }

    lb.innerHTML = `
      <div class="visual-lightbox-container" onclick="event.stopPropagation()">
        <button class="visual-lightbox-close" onclick="document.getElementById('visualLightbox').classList.remove('active')">
          <i class="fas fa-times"></i>
        </button>
        <img src="${src}" alt="${title || 'Rasm'}" class="visual-lightbox-img">
        ${title ? `<div class="visual-lightbox-caption">${title}</div>` : ''}
      </div>
    `;

    lb.classList.add('active');
  },

  // Plakat chop etish
  printPoster: function() {
    window.print();
  }
};

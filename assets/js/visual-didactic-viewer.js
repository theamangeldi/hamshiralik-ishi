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
    "amaliy-3": "assets/images/didactic/amaliy-3.jpg",
    "amaliy-4": "assets/images/didactic/amaliy-4.jpg",
    "amaliy-5": "assets/images/didactic/amaliy-5.jpg",
    "amaliy-6": "assets/images/didactic/amaliy-6.jpg",
    "amaliy-7": "assets/images/didactic/amaliy-7.jpg",
    "amaliy-8": "assets/images/didactic/amaliy-8.jpg",
    "amaliy-9": "assets/images/didactic/amaliy-9.jpg",
    "amaliy-10": "assets/images/didactic/amaliy-10.jpg",
    "amaliy-11": "assets/images/didactic/amaliy-11.jpg",
    "amaliy-12": "assets/images/didactic/amaliy-12.jpg",
    "amaliy-13": "assets/images/didactic/amaliy-13.jpg",
    "amaliy-14": "assets/images/didactic/amaliy-14.jpg",
    "amaliy-15": "assets/images/didactic/amaliy-15.jpg",
    "amaliy-16": "assets/images/didactic/amaliy-16.jpg",
    "amaliy-17": "assets/images/didactic/amaliy-17.jpg",
    "amaliy-18": "assets/images/didactic/amaliy-18.jpg",
    "amaliy-19": "assets/images/didactic/amaliy-19.jpg",
    "amaliy-21": "assets/images/didactic/amaliy-21.jpg",
    "amaliy-22": "assets/images/didactic/amaliy-22.jpg",
    "amaliy-23": "assets/images/didactic/amaliy-23.jpg",
    "amaliy-24": "assets/images/didactic/amaliy-24.jpg"
  },

  // Mavzu uchun mos rasm yo'lini qaytarish
  getImageForTopic: function(topicId) {
    if (this.customImages && this.customImages[topicId]) {
      return this.customImages[topicId];
    }
    return `assets/images/slides/${topicId}-slayd-1.svg`;
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
    if (text.includes('qon bosim') || text.includes('arterial')) {
      return [
        "Bolalarda qon bosimini o'lchashda manjetka kengligi yelka uzunligining 2/3 qismini egallashi shart (yoshga mos bolalar manjetkasi).",
        "1 yoshdan katta bolalarda sistolik qon bosimini hisoblash formulasi: 90 + 2n (bu yerda n - bolaning to'liq yoshi).",
        "Diastolik qon bosimi me'yorda sistolik bosimning 1/2 dan 2/3 qismigacha teng bo'ladi (taxminan 60 + n).",
        "O'lchash bola to'liq tinch holatda, tirsak bo'g'imi yurak sathida joylashtirilgan holda amalga oshiriladi."
      ];
    }
    if (text.includes('patronaj') || text.includes('poliklinika')) {
      return [
        "Chaqaloq tug'uruqxonadan chiqqach dastlabki 3 kun ichida uchastka patronaj hamshirasi va shifokori tomonidan birlamchi patronaj o'tkaziladi.",
        "Patronaj paytida bolaning kindik jarohati, terisi, ko'krak suti bilan emizilishi va umumiy salomatligi to'liq baholanadi.",
        "Onaga go'dak gigiyenasi, to'g'ri kiyintirish, xona harorati (20-22°C) va xavfli belgilar haqida individual tushuntirish beriladi."
      ];
    }
    if (text.includes('prikorm') || text.includes('qo\'shimcha ovqat') || text.includes('taomnoma')) {
      return [
        "Qo'shimcha ovqatlar (prikorm) go'dakka 6 oyligidan boshlab kiritiladi (kunning birinchi yarmida 1 choy qoshiqdan boshlab).",
        "Birinchi prikorm sifatida bir tarkibli sabzavot pyuresi (qovoqcha, sabzi) yoki glyutensiz bo'tqalar (guruch, grechka) beriladi.",
        "Har bir yangi mahsulot 1-2 hafta oralig'ida asta-sekin ko'paytiriladi, bolaning axlat va teri holati muntazam kuzatiladi."
      ];
    }
    if (text.includes('fototerapiya') || text.includes('asfiksiya')) {
      return [
        "Fototerapiya paytida chaqaloqning ko'zlari maxsus yorug'lik o'tkazmaydigan bog'lagich (ko'zoynak) bilan himoyalanishi shart.",
        "Tana harorati har 2-3 soatda o'lchanadi, bolaning tana holati (orqa, qorin, yonbosh) har 2 soatda almashtirib turiladi.",
        "Asfiksiyada dastlabki 30 soniyada: issiqlikni ta'minlash, quritish, nafas yo'llarini shilliqdan tozalash va Ambu qopi bilan nafas berish bajariladi."
      ];
    }
    if (text.includes('yurakni massaj') || text.includes('massaj qilish') || text.includes('sepsis')) {
      return [
        "Kindik jarohatiga har kuni 3% li vodorod peroksidi va antiseptik bilan steril sharlar yordamida markazdan chetga ishlov beriladi.",
        "Chaqaloqlarda yopiq yurak massaji ikki bosh barmoq usuli (Two-Thumb technique) yordamida to'sh suyagining pastki 1/3 qismiga bosiladi.",
        "Massaj chuqurligi ko'krak qafasi o'lchamining 1/3 qismini (taxminan 4 sm) tashkil etib, daqiqasiga 100-120 marta chastotada bajariladi."
      ];
    }
    if (text.includes('raxit') || text.includes('spazmofiliya') || text.includes('diatez')) {
      return [
        "Raxit profilaktikasi uchun to'liq muddatli chaqaloqlarga 1 oyligidan boshlab har kuni 500-1000 XB miqdorida D3 vitamini beriladi.",
        "Dastlabki belgilar: bolaning bezovtaligi, orqa ensa sohasining ko'p terlashi va sochlarning to'kilishi, mushaklar bo'shashishi.",
        "D vitamini qabul qilish bilan birga toza havoda sayr qilish va quyosh vannalaridan me'yorida foydalanish shart."
      ];
    }
    if (text.includes('dori tomizish') || text.includes('kompress') || text.includes('laringit')) {
      return [
        "Kichik yoshdagi bolalarga quloqqa dori tomizishda quloq suprasi orqaga va pastga (katta yoshda orqaga va yuqoriga) tortiladi.",
        "Ko'zga dori tomizishda pastki qovoq biroz pastga tortilib, kon'yunktiva xaltasiga 1-2 tomchi tomiziladi (pipetka shox pardaga tegmasligi kerak).",
        "Quloqqa isituvchi kompress 4 qatlamdan iborat: namlangan teshikli doka, kleyonka/qog'oz, qalin paxta qatlami va mahkamlovchi bint."
      ];
    }
    if (text.includes('nebulayzer') || text.includes('ingalyats') || text.includes('astma') || text.includes('xantal') || text.includes('krup') || text.includes('pnevmoniya')) {
      return [
        "Nebulayzer muolajasi paytida bola qulay o'tirgan holatda bo'lishi va ingalyatsiya niqobi yuziga zich o'rnashishi shart.",
        "Ingalyatsiya davomiyligi o'rtacha 5-10 daqiqa davom etadi, dori qoldig'i 0.5-1.0 ml dan oshmasligi kuzatib boriladi.",
        "Gormonal preparatlar (masalan, budesonid/pulmikort) ingalyatsiyasidan so'ng og'iz bo'shlig'i zamburug'li zararlanishining (kandidoz) oldini olish uchun og'izni toza iliq suv bilan chayish shart.",
        "Soxta krup xurujida tezkor yordam: xonaga toza namlangan havo kiritish, issiq oyoq vannasi, nebulayzerda bronxolitik yuborish va zudlik bilan shifokorga xabar berish."
      ];
    }
    if (text.includes('biokimyoviy tahlil') || text.includes('venadan qon') || text.includes('qon aylanish a\'zolari')) {
      return [
        "Bolalarda venadan qon olishda kapillyar kapalak-igna (butterfly) yoki vakuumli probirkalardan foydalaniladi.",
        "Jgut qo'yilgan vaqt 1 daqiqadan oshmasligi kerak, aks holda gemoliz va qon tahlilining o'zgarishi kuzatiladi.",
        "Inyeksiyadan keyin punksiya joyiga quruq steril paxta sharri qo'yilib, tirsak bo'g'imi 3-5 daqiqa bukilgan holatda ushlab turiladi."
      ];
    }
    if (text.includes('diareya') || text.includes('degidratsiya') || text.includes('regidron') || text.includes('suvsizlanish')) {
      return [
        "Degidratsiyaning I-II darajalarida oral regidratsiya (Regidron) asosiy davolash usuli hisoblanadi.",
        "Regidron eritmasi 1 litr toza qaynatilgan va xona haroratigacha ilitilgan suvda eritiladi.",
        "Bolaga eritmalar oz-ozdan (har 5-10 daqiqada 1-2 choy qoshiqdan) beriladi; qusganda 10 daqiqa tanaffus qilib, yana sekin davom ettiriladi."
      ];
    }
    if (text.includes('stomatit') || text.includes('og\'iz shilliq') || text.includes('gelmintoz')) {
      return [
        "Og'iz shilliq qavatiga dori surtishda steril shpatel va paxta tamponidan foydalaniladi, har bir yaraga alohida ishlov beriladi.",
        "Kandidozli stomatitda (molochnitsa) 2% li natriy gidrokarbonat (iste'mol sodasi) eritmasi bilan shilliq qavat ehtiyotkorlik bilan tozalanadi.",
        "Muolaja ovqatlantirishdan 30 daqiqa oldin yoki ovqatdan keyin og'iz chayilgach bajarilishi lozim."
      ];
    }
    if (text.includes('kapillyar qon') || text.includes('kamqonlik') || text.includes('anemiya')) {
      return [
        "Kapillyar qon odatda bolaning IV (nomsiz) barmog'ining yon yuzasidan steril skarifakator yordamida olinadi.",
        "Birinchi tomchi qon quruq steril paxta bilan artib tashlanadi, chunki unda to'qima suyuqligi bo'ladi.",
        "Barmoqni qattiq siqish taqiqlanadi, aks holda to'qima suyuqligi aralashib, eritrotsit va gemoglobin ko'rsatkichlari buziladi."
      ];
    }
    if (text.includes('burundan qon') || text.includes('epistaksis') || text.includes('gemorragik diatez') || text.includes('muzli xaltacha')) {
      return [
        "Burundan qon ketganda bolaning boshini orqaga tashlash qat'iyan man etiladi (boshni biroz oldinga engashtirish zarur).",
        "Burun qanotlari burun to'sig'iga 5-10 daqiqa davomida barmoqlar bilan zich bosiladi.",
        "Burun suyagi sohasiga (peshona va ensaga) sovuq kompress yoki muzli xaltacha qo'yiladi."
      ];
    }
    if (text.includes('insulin') || text.includes('qandli diabet') || text.includes('shprits-ruchka')) {
      return [
        "Shprits-ruchka yordamida insulin teri osti yog' qatlamiga (qorin, son, yelka) 45-90 gradus burchak ostida kiritiladi.",
        "Inyeksiya tugagach ignani darhol sug'urmasdan, kamida 10 soniya ushlab turish kerak (dori to'liq so'rilishi uchun).",
        "Lipodistrofiyaning oldini olish maqsadida har bir inyeksiya joyi avvalgisidan kamida 1-2 sm masofada o'zgartirib boriladi."
      ];
    }
    if (text.includes('pielonefrit') || text.includes('glomerulonefrit') || text.includes('shishlarni baholash') || text.includes('sistit')) {
      return [
        "Buyrak xastaliklarida shishlar ertalab asosan yuz va ko'z qovoqlarida (oqish, yumshoq) paydo bo'ladi.",
        "Yashirin shishlarni aniqlash uchun har kuni bir vaqtda och qoringa tana vazni va sutkalik diurez (suyuqlik balansi) o'lchanadi.",
        "Boldir suyagi old yuzasiga barmoq bilan 5 soniya bosilganda chuqurcha qolishi shishning obyektiv belgisidir."
      ];
    }
    if (text.includes('vaksin') || text.includes('emlash') || text.includes('profilaktik emlash')) {
      return [
        "Emlashdan oldin bolaning umumiy ahvoli, tana harorati o'lchanadi va pediatr ko'rigidan o'tkazilishi shart.",
        "Vaksinalar 'sovuqlik zanjiri' (+2°C dan +8°C gacha) qoidalariga qat'iy rioya qilingan holda saqlanadi va tashiladi.",
        "Mushak ichiga inyeksiyalar kichik yoshdagi bolalarga sonning oldingi-yon sohasiga, katta bolalarda esa yelkaning deltasimon mushagiga kiritiladi.",
        "Emlashdan so'ng darhol anafilaktik yoki allergik reaksiyalarni kuzatish uchun bola kamida 30 daqiqa tibbiy muassasada nazoratda bo'lishi shart."
      ];
    }
    if (text.includes('o\'rvi') || text.includes('gripp') || text.includes('burun-halqumdan') || text.includes('surtma olish') || text.includes('talvasa') || text.includes('sudorgi')) {
      return [
        "Burun-halqumdan surtma (PSR/ekspress-test) olishda bolaning boshi orqaga biroz engashtiriladi va steril tampon burun tubi bo'ylab kiritiladi.",
        "Tomoqdan surtma olishda tampon til, milk va tishlarga tegmasdan faqat murtak bezlari va orqa halqum devoriga tegishi shart.",
        "Febril talvasada (sudorgi) bolani qattiq, tekis yuzaga yonbosh holatda yotqizish, nafas yo'llarini ochish va kiyimlarni bo'shatish zarur.",
        "Yuqori haroratda (38.5°C dan yuqori) jismoniy sovutish usullari (iliq suv bilan artish) va shifokor tayinlagan antipiretiklar qo'llaniladi."
      ];
    }
    if (text.includes('parotit') || text.includes('tepki') || text.includes('borde-jangu') || text.includes('difteriya') || text.includes('ko\'kyo\'tal')) {
      return [
        "Epidemik parotitda quloq oldi sohasiga quruq issiq yoki isituvchi moyli kompresslar og'riqni kamaytirish uchun qo'yiladi.",
        "Bemor bolaga chaynamaydigan, suyuq yoki bo'tqasimon, kislotali bo'lmagan parhez (issiqligi mo'tadil) tavsiya etiladi.",
        "Difteriyaga shubha bo'lganda burun va halqumdan BL (Borde-Jangu/Loeffler) tayoqchasiga steril quruq tamponlar bilan shoshilinch surtma olinadi.",
        "Orxit va pankreatit kabi asoratlarni oldini olish uchun kamida 9 kun qat'iy yotoq rejimiga rioya qilinishi shart."
      ];
    }
    if (text.includes('qizamiq') || text.includes('suvchechak') || text.includes('qizilcha') || text.includes('skarlatina') || text.includes('ekzantem') || text.includes('toshma')) {
      return [
        "Suvchechak toshmalariga (pufakchalariga) 1% li brilliant yashili (zelyonka) yoki fukortsin eritmasi bilan nuqtali ishlov beriladi.",
        "Qichishishni kamaytirish va ikkilamchi bakterial infeksiya tushmasligi uchun tirnoqlarni qisqa olish va sedativ losonlar tavsiya etiladi.",
        "Qizamiqda fotofobiya (yorug'likdan qo'rqish) bo'lgani sababli xona pardalari yopiladi va ko'zlar iliq choy yoki furatsilin eritmasida yuviladi.",
        "Skarlatinada til o'ziga xos 'malina tili' ko'rinishida bo'lib, tomoqni antiseptik eritmalar (romashka, furatsilin) bilan chayish buyuriladi."
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
        <div style="display: flex; gap: 12px; margin-top: 14px; justify-content: center; align-items: center; flex-wrap: wrap;">
          ${title ? `<div class="visual-lightbox-caption" style="margin: 0; font-weight: 600;">${title}</div>` : ''}
          <a href="${src}" download class="btn-primary" style="font-size: 0.85rem; padding: 6px 16px; border-radius: 6px; text-decoration: none;">
            <i class="fas fa-download"></i> Yuklab olish
          </a>
          <a href="${src}" target="_blank" class="btn-secondary" style="font-size: 0.85rem; padding: 6px 16px; border-radius: 6px; text-decoration: none;">
            <i class="fas fa-external-link-alt"></i> Alohida oynada ochish
          </a>
        </div>
      </div>
    `;

    lb.classList.add('active');
  },

  // Plakat chop etish
  printPoster: function() {
    window.print();
  }
};


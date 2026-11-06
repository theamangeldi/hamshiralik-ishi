/**
 * =====================================================================
 * PEDAGOGIK TEXNOLOGIYA VA TEXNOLOGIK XARITALAR DASTURI (PEDTECH ENGINE)
 * =====================================================================
 * O'zbekiston Respublikasi Abu Ali ibn Sino nomidagi Jamoat salomatligi 
 * texnikumlari standarti asosida har bir mavzuning mazmunidan kelib 
 * chiqqan holda "Mashg'ulot modeli" va "Texnologik karta"ni interaktiv
 * generatsiya qilish, ko'rish, A4 chop etish va Word formatida yuklab olish.
 */

window.PedTechBuilder = {
  // Mavzu kalit so'zlari bo'yicha mos klinik asboblarni aniqlash
  getToolsForTopic: function(topic) {
    const text = ((topic.title || '') + ' ' + (topic.shortDesc || '')).toLowerCase();
    
    if (text.includes('antropometriy') || text.includes('jismoniy rivoj') || text.includes('bo\'y') || text.includes('vazn')) {
      return "Gorizontal va vertikal bolalar bo'y o'lchagichi, elektron bolalar tarozisi, santimetrli elastik tasma, tibbiy qo'lqop, 70% li spirt, antiseptik salfetkalar, bolaning rivojlanish tarixi (112-shakl), sentil jadvallari, didaktik plakatlar va slaydlar.";
    }
    if (text.includes('puls') || text.includes('nafas') || text.includes('yurak')) {
      return "Sekundomerli soat, stetofonendoskop, elektron termometr, harorat va puls varaqasi, tibbiy qo'lqop, antiseptik vosita, anatomik mulaj, taqdimot slaydlari.";
    }
    if (text.includes('qon bosim')) {
      return "Bolalar uchun maxsus turli o'lchamdagi manjetli tonometr, fonendoskop, antiseptik eritma, bemorning tibbiy kartasi, me'yoriy bosim ko'rsatkichlari jadvallari.";
    }
    if (text.includes('kindik') || text.includes('teri') || text.includes('gonoblennoreya')) {
      return "Steril paxta va doka sharchalari, 3% vodorod peroksidi, 1% brilliant yashili (zelenka), steril pipetkalar, 20% li natriy sulfatsil eritmasi, steril pinset, tibbiy qo'lqop, buyraksimon patnis, chaqaloq parvarishi mulaji.";
    }
    if (text.includes('patronaj')) {
      return "Patronaj hamshirasining maxsus sumkasi, portativ termometr, santimetrli tasma, bir martalik shpatellar, tibbiy qo'lqop, antiseptik spirtli eritmalar, bolaning ambulator kartasi (112-shakl).";
    }
    if (text.includes('emizish') || text.includes('ko\'krak suti') || text.includes('ovqatlantirish')) {
      return "Ko'krak suti bilan emizish pozitsiyalari ko'rsatilgan anatomik mulaj, steril bolalar shishachasi, o'lchov idishlari, ratsional ovqatlantirish menyulari, ko'rgazmali tarqatma jadvallar.";
    }
    if (text.includes('asfiksiya') || text.includes('fototerapiya') || text.includes('sariqlik')) {
      return "Fototerapiya lampasi, ko'zni himoya qiluvchi maxsus ko'zoynak, inkubator (kuvez) simulyatori, chaqaloq mulaji, pulsoksimetr, kleyonka va steril yo'rgaklar.";
    }
    if (text.includes('ingalyator') || text.includes('astma') || text.includes('krup')) {
      return "Cho'ntak dozalangan ingalyatori, speyser kamerasi (bolalar yuz niqobi bilan), nebulayzer apparati, nafas tizimi anatomik chizmalari, tarqatma eslatmalar.";
    }
    if (text.includes('qon olish') || text.includes('vena') || text.includes('kapillyar')) {
      return "Steril bir martalik skarifkator, bir martalik shprislar, vakuumli probirkalar (EDTA va biokimyo uchun), rezina jgut, 70% li spirtli sharchalar, steril patnis, yopishtiruvchi leykoplastir, chiqindilar uchun KBU (xavfsiz utilizatsiya qutisi).";
    }
    if (text.includes('degidratsiya') || text.includes('regidron') || text.includes('suvsizlanish') || text.includes('diareya')) {
      return "Oral regidratsiya tuzlari (Regidron paketchalari), 1 litrli o'lchov idishi, toza qaynatilgan suv, bolalar qoshiqchasi, 20 ml li shprits, suvsizlanish darajasini baholash JSST jadvallari.";
    }
    if (text.includes('insulin') || text.includes('diabet')) {
      return "Insulin shprits-ruchkasi, steril almashtiriluvchi mikro-ignalar, insulin kartridjlari, ekspress-glyukometr, test tasmachalari, 70% li antiseptik salfetkalar, kundalik qand daftarchasi.";
    }
    if (text.includes('siydik') || text.includes('pielonefrit') || text.includes('sistit') || text.includes('nechiporenko') || text.includes('zimnitskiy')) {
      return "Steril siydik to'plash idishlari, 8 ta raqamlangan bankalar (Zimnitskiy tahlili uchun), siydik qabul qilgich (mochepriyomnik), laboratoriya yo'llanma blankalari, rezina qo'lqoplar.";
    }
    if (text.includes('mantu') || text.includes('emlash') || text.includes('vaksina') || text.includes('sil')) {
      return "Tuberkulin shprisi (1 ml li, ingichka ignali), PPD-L tuberkulin probasi, 70% li etil spirti, shaffof millimetrli chizg'ich, steril paxta sharchalari, emlash jurnali (063-shakl).";
    }
    if (text.includes('talvasa') || text.includes('sudorgi') || text.includes('isitma') || text.includes('harorat')) {
      return "Muzli xaltacha, til tutgich (shpatel), sochiq, antiseptik eritmalar, elektron termometr, namlangan kislorod taqsimlagich apparati, shoshilinch yordam qutisi.";
    }
    if (text.includes('jgut') || text.includes('qon ketish') || text.includes('bog\'lam')) {
      return "Esmarx gemostatik rezina jguti, steril doka bintlar, individual bog'lov paketi, qaychi, vaqt yoziladigan qog'oz va ruchka, antiseptik eritmalar.";
    }
    if (text.includes('yot jism') || text.includes('geymlix') || text.includes('choking')) {
      return "Chaqaloq va bolalar Geymlix maneken-mulaji, nafas yo'llari xorijiy jism modeli, anatomik tarqatma ko'rsatmalar.";
    }
    if (text.includes('reanimatsiya') || text.includes('cpr') || text.includes('yurak-o\'pka')) {
      return "Bolalar va chaqaloqlar yurak-o'pka reanimatsiyasi manekeni (BLS CPR), Ambu qopi va bolalar yuz niqoblari, elektr so'rg'ich, pulsoksimetr, fonendoskop.";
    }
    if (text.includes('shina') || text.includes('sinish') || text.includes('jarohat') || text.includes('immobilizatsiya')) {
      return "Diterixs shinasi, Kramer metall shinalari, fiksatsiya qiluvchi bintlar, paxta yostiqchalari, transport immobilizatsiyasi ko'rsatmalari.";
    }
    if (text.includes('oshqozon') || text.includes('zond') || text.includes('zaharlanish')) {
      return "Bolalar oshqozon zondi (yoshga mos o'lchamda), Jane shprisi, voronka, 1.5-2 litr iliq qaynatilgan suv, buyraksimon tog'ora, kleenka fartuk, enterosorbentlar (faollashtirilgan ko'mir / Smekta), sochiq.";
    }

    return "Mavzuga oid asbob-uskunalar to'plami, yo'riqli texnologik xarita, ko'rgazmali plakatlar, anatomik mulajlar, steril qo'lqoplar, antiseptiklar, taqdimot slaydlari.";
  },

  // Mavzu bo'yicha 3 ta asosiy reja bandini tuzish
  getPlansForTopic: function(topic) {
    const title = topic.title || '';
    const isPractical = topic.category === 'amaliy';

    if (isPractical) {
      return [
        `Mavzuning klinik mohiyati, o'tkazish ko'rsatmalari va tayyorgarlik bosqichlari.`,
        `Amaliy muolaja (manipulyatsiya)ni yo'riqli texnologik xarita asosida bosqichma-bosqich bajarish texnikasi.`,
        `Sanitariya-gigiyena, aseptika-antiseptika talablariga rioya qilish, mumkin bo'lgan asoratlar va xatoliklar profilaktikasi.`
      ];
    } else {
      return [
        `Mavzuning nazariy-tushuntirish asoslari, anatomik-fiziologik va klinik tavsifi.`,
        `Etiologiyasi, patogenezi, klinik belgilari va hamshiralik diagnostikasi xususiyatlari.`,
        `Bemor bola va uning oila a'zolariga hamshiralik parvarishi, parhez, profilaktika va reabilitatsiya choralari.`
      ];
    }
  },

  // Mashg'ulot modeli va texnologik xarita HTML kodini generatsiya qilish
  buildHtml: function(topic, courseConfig) {
    if (!topic) return '';

    const course = (courseConfig && courseConfig.course) || {};
    const teacher = (courseConfig && courseConfig.teacher) || {};
    const isPractical = topic.category === 'amaliy';

    const duration = isPractical ? "160 minut" : "80 minut";
    const studentsCount = isPractical ? "15 nafar (kichik guruh)" : "30 nafar (guruh)";
    const lessonType = isPractical 
      ? "Amaliy – tushunchalarni mustahkamlash, bilimlarni shakllantirish, ko'nikmalarni hosil qilib amaliy tajribasini oshirish darsi."
      : "Nazariy – yangi bilimlarni bayon qilish, tushunchalarni shakllantirish, umumlashtirish va tahlil qilish ma'ruza darsi.";

    const plans = this.getPlansForTopic(topic);
    const objective = `"${topic.title}" mavzusi bo'yicha talabalarda chuqur nazariy tushunchalarni mustahkamlash, zamonaviy hamshiralik parvarishi va klinik-amaliy ko'nikmalarni standartlar asosida xatosiz bajarish bilimlarini shakllantirish.`;
    const outcome = isPractical 
      ? `Ushbu amaliy mashg'ulotni o'zlashtirgach, talabalar tibbiy hujjatlarni to'g'ri yuritish, kerakli asbob-uskunalarni sozlash va muolajalarni yo'riqli xarita bo'yicha mustaqil bajara oladilar.`
      : `Mavzuni o'zlashtirgan talabalar kasallik etiologiyasi, klinik belgilari, laborator-diagnostik tekshiruvlar hamda hamshiralik parvarishining xususiyatlarini to'liq tahlil qila oladilar.`;

    const tasks = [
      {
        num: 1,
        task: `${plans[0]} bilan tanishtirish, tayanch nazariy bilimlarni mustahkamlash.`,
        result: `Mavzuning klinik mohiyati va asosiy mezonlarini aniq aytib beradi va tushuntiradi.`
      },
      {
        num: 2,
        task: `${plans[1]} bo'yicha amaliy harakatlar ketma-ketligini ko'rsatib, ko'nikmalarni shakllantirish.`,
        result: `Kerakli asbob-anjomlarni to'g'ri tanlaydi va muolaja texnikasini mustaqil xatosiz bajaradi.`
      },
      {
        num: 3,
        task: `${plans[2]} talablarini singdirish, xatoliklarni tahlil qilish va oldini olishni o'rgatish.`,
        result: `Sanitariya-epidemiologik xavfsizlik va aseptika qoidalariga qat'iy rioya etgan holda xulosalaydi.`
      }
    ];

    const methods = isPractical
      ? "Tushuntirib ko'rsatish, Aqliy hujum, T-jadval, FSMU (Fikr, Sabab, Misol, Umumlashtirish), Insert, Keys-stadi (vaziyatli klinik masalalar), Kichik guruhlarda ishlash."
      : "Aqliy hujum, Klaster, B/B/B (Bilaman, Bildim, Bilmoqchiman), FSMU metodi, Venn diagrammasi, Blits-savollar.";

    const orgForm = isPractical
      ? "Kichik guruhlarda ishlash, juftlikda ishlash, frontal va individual amaliy mashqlar."
      : "Yalpi ma'ruza, jamoaviy va kichik guruhlarda interaktiv tahlil.";

    const tools = this.getToolsForTopic(topic);
    const environment = "Jihozlangan 'Pediatriya va neonatologiyada hamshiralik ishi' fani amaliyot xonasi / laboratoriyasi.";
    const evaluation = "'Bilim katakchalari' usuli, 'Omadli sandiqcha', 'Monitor' usuli, 100 ballik baholash mezonlari.";

    // Texnologik xarita bosqichlari
    const mapSteps = isPractical ? [
      {
        title: "1-bosqich: Mavzuga kirish (Tashkiliy qism)",
        duration: "10 minut",
        teacher: `
          <ul class="pedtech-sublist">
            <li><strong>1.1.</strong> O'quvchilar davomati va darsga tayyorgarligini tekshiradi.</li>
            <li><strong>1.2.</strong> O'quvchilarning tashqi ko'rinishi (maxsus tibbiy xalat, qalpoq, niqob) va sanitariya holatini nazorat qiladi.</li>
            <li><strong>1.3.</strong> Yangi amaliy mavzuning nomi, rejasi, maqsadi va kutilayotgan o'quv natijalari bilan tanishtiradi.</li>
            <li><strong>1.4.</strong> Amaliy mashg'ulotning baholash mezonlari bilan tanishtiradi.</li>
            <li><strong>1.5.</strong> Xonadagi texnika xavfsizligi va aseptika qoidalari bilan tanishtiradi.</li>
          </ul>
        `,
        student: `
          <ul class="pedtech-sublist">
            <li>Darsga tayyorlanadi, sanitariya-gigiyena talablariga rioya etgan holda maxsus tibbiy kiyimda qatnashadi.</li>
            <li>Xavfsizlik texnikasi jurnaliga imzo qo'yadi.</li>
            <li>O'qituvchini tinglaydi, mavzu va rejani daftarga qayd etadi.</li>
          </ul>
        `
      },
      {
        title: "2-bosqich: Asosiy bosqich",
        duration: "135 minut",
        teacher: `
          <div style="margin-bottom: 8px;"><strong>Kirish yo'riqnomasi va bilimlarni faollashtirish (50 minut):</strong></div>
          <ul class="pedtech-sublist" style="margin-bottom: 12px;">
            <li><strong>2.1.</strong> Tezkor savol-javob, "Aqliy hujum" va "T-jadval" usullari orqali o'quvchilarning tayanch bilimlarini faollashtiradi va yangi mavzu bilan bog'laydi.</li>
          </ul>
          <div style="margin-bottom: 8px;"><strong>Yangi mavzuni tushuntirish va ko'rsatish (25 minut):</strong></div>
          <ul class="pedtech-sublist" style="margin-bottom: 12px;">
            <li><strong>2.2.</strong> Taqdimot slaydlari, illyustratsiyalar va mulajlardan foydalanib muolajaning klinik ahamiyatini tushuntiradi, namunaviy manipulyatsiyani bosqichma-bosqich ko'rsatib beradi.</li>
          </ul>
          <div style="margin-bottom: 8px;"><strong>Joriy yo'riqnoma va amaliy mashg'ulot (50 minut):</strong></div>
          <ul class="pedtech-sublist" style="margin-bottom: 12px;">
            <li><strong>2.3.</strong> O'quvchilarni ish o'rinlariga taqsimlaydi, yo'riqli texnologik xarita va kerakli asbob-uskunalar, sarflov materiallarini tarqatadi.</li>
            <li><strong>2.4.</strong> O'quvchilarning mustaqil amaliy ishini maqsadli aylanma orqali kuzatib boradi, xatolarni ko'rsatib, darhol to'g'rilaydi.</li>
          </ul>
          <div style="margin-bottom: 8px;"><strong>Darsni mustahkamlash (10 minut):</strong></div>
          <ul class="pedtech-sublist">
            <li><strong>2.5.</strong> "Bilim katakchalari", "FSMU" yoki vaziyatli klinik masalalar (Keys-stadi) orqali xulosalarni shakllantiradi.</li>
          </ul>
        `,
        student: `
          <ul class="pedtech-sublist">
            <li>Savollarga faol javob beradi, muhokamada qatnashadi.</li>
            <li>O'qituvchining ko'rgazmali amallarini diqqat bilan kuzatadi, yo'riqnomani o'rganadi.</li>
            <li>O'z ish o'rniga o'tib, yo'riqli texnologik xarita asosida amaliy muolajani mustaqil yoki juftlikda bajaradi.</li>
            <li>Xatolarini to'g'rilaydi, ishlatilgan asbob-uskunalarni tozalab o'qituvchiga topshiradi. Ish o'rnini tartibga keltiradi.</li>
            <li>Klinik vaziyatli masalalarni yechishda o'z fikrini asoslab beradi.</li>
          </ul>
        `
      },
      {
        title: "3-bosqich: Yakunlovchi bosqich",
        duration: "15 minut",
        teacher: `
          <ul class="pedtech-sublist">
            <li><strong>3.1.</strong> Ish o'rinlarining talab darajasida tozalangani va asboblar saqlanishini ko'zdan kechiradi (10 minut).</li>
            <li><strong>3.2.</strong> Darsga yakun yasaydi, amaliy ko'nikmalarni baholash mezonlari asosida tahlil qiladi va baholarni e'lon qiladi.</li>
            <li><strong>3.3.</strong> Talabalarning e'tiborini o'rganilgan amaliy ko'nikmaning kelajakdagi kasbiy faoliyatidagi yuqori ahamiyatiga qaratadi.</li>
            <li><strong>3.4.</strong> Keyingi dars mavzusi bilan tanishtiradi va mustaqil ta'lim uchun uyga vazifa beradi.</li>
          </ul>
        `,
        student: `
          <ul class="pedtech-sublist">
            <li>O'qituvchini tinglaydi, o'z baholari va tahlil bilan tanishadi.</li>
            <li>Kelajakdagi kasbiy vazifalari yuzasidan xulosalar chiqaradi.</li>
            <li>Uyga berilgan vazifani yozib oladi.</li>
          </ul>
        `
      }
    ] : [
      {
        title: "1-bosqich: Tashkiliy qism va kirish",
        duration: "10 minut",
        teacher: `
          <ul class="pedtech-sublist">
            <li>1.1. Salomlashish, talabalar davomati va tayyorgarligini tekshirish.</li>
            <li>1.2. Yangi ma'ruza mavzusi, rejasi va kutilayotgan o'quv natijalari bilan tanishtirish.</li>
            <li>1.3. O'tgan mavzu bo'yicha blits-so'rov o'tkazish.</li>
          </ul>
        `,
        student: `
          <ul class="pedtech-sublist">
            <li>Salomlashadi, darsga hozirlik ko'radi.</li>
            <li>Reja va maqsadni qayd qiladi, blits-savollarga javob beradi.</li>
          </ul>
        `
      },
      {
        title: "2-bosqich: Asosiy ma'ruza bayoni",
        duration: "60 minut",
        teacher: `
          <ul class="pedtech-sublist">
            <li>2.1. Taqdimot slaydlari va klaster usulida mavzuning nazariy mohiyatini tushuntiradi.</li>
            <li>2.2. Kasalliklar etiologiyasi, klinik ko'rinishlari va hamshiralik parvarishi xususiyatlarini yoritadi.</li>
            <li>2.3. B/B/B va FSMU usullari orqali talabalar bilan interaktiv muloqot olib boradi.</li>
          </ul>
        `,
        student: `
          <ul class="pedtech-sublist">
            <li>Ma'ruzani tinglaydi, konspekt yozadi, tushunchalar xaritasini chizadi.</li>
            <li>Savollar beradi va berilgan savollarga fikr bildiradi.</li>
          </ul>
        `
      },
      {
        title: "3-bosqich: Yakuniy qism va mustahkamlash",
        duration: "10 minut",
        teacher: `
          <ul class="pedtech-sublist">
            <li>3.1. Mavzuni umumlashtiradi, asosiy xulosalarni ta'kidlaydi.</li>
            <li>3.2. Faol talabalarni baholaydi va rag'batlantiradi.</li>
            <li>3.3. Keyingi mavzu bilan tanishtiradi, uyga mustaqil ta'lim topshiriqlarini beradi.</li>
          </ul>
        `,
        student: `
          <ul class="pedtech-sublist">
            <li>Xulosalarni qayd etadi, baholar bilan tanishadi.</li>
            <li>Uyga vazifani konspekt daftarga yozib oladi.</li>
          </ul>
        `
      }
    ];

    const teacherName = teacher.fullName || "Sametullaeva Sveta Smaylovna";
    const instName = course.institution || "2-son Nukus Abu Ali ibn Sino nomidagi jamoat salomatligi texnikumi";
    const deptName = course.department || "Hamshiralik ishi kafedrasi";
    const courseTitle = course.title || "Pediatriya va neonatologiyada hamshiralik ishi";

    return `
      <div class="pedtech-wrapper">
        <!-- Yuqori boshqaruv paneli (Faqat ekranda ko'rinadi) -->
        <div class="pedtech-toolbar no-print">
          <div class="pedtech-nav-pills">
            <button class="pedtech-pill-btn active" data-view="both" onclick="PedTechBuilder.switchView('both', this)">
              <i class="fas fa-layer-group"></i> To'liq pedagogik majmua
            </button>
            <button class="pedtech-pill-btn" data-view="model" onclick="PedTechBuilder.switchView('model', this)">
              <i class="fas fa-file-invoice"></i> Dars modeli
            </button>
            <button class="pedtech-pill-btn" data-view="map" onclick="PedTechBuilder.switchView('map', this)">
              <i class="fas fa-clock"></i> Texnologik xarita
            </button>
          </div>
          <div class="pedtech-action-btns">
            <button class="btn-primary pedtech-btn" onclick="PedTechBuilder.printA4()">
              <i class="fas fa-print"></i> A4 Chop etish
            </button>
            <button class="btn-secondary pedtech-btn" onclick="PedTechBuilder.exportWord('${topic.id}')">
              <i class="fas fa-file-word"></i> Word yuklab olish
            </button>
          </div>
        </div>

        <!-- Hujjatning asosiy qog'oz bloki (Chop etish va Word uchun) -->
        <div id="pedtechPrintableArea" class="pedtech-document">
          <!-- Rasmiy sarlavha -->
          <div class="pedtech-doc-header">
            <div class="pedtech-institution">${instName.toUpperCase()}</div>
            <div class="pedtech-department">"${deptName}"</div>
            <h2 class="pedtech-main-title">
              “${courseTitle}” fanidan ${topic.categoryName.toLowerCase()} sabaǵınıń (mashg'ulotining) modeli
            </h2>
            <div class="pedtech-topic-badge">
              № ${topic.number}-Mavzu: ${topic.title}
            </div>
          </div>

          <!-- 1. DARS MODELI JADVALI -->
          <div class="pedtech-section" id="pedtechModelSection">
            <h3 class="pedtech-section-title">
              <i class="fas fa-chalkboard"></i> 1. Mashg'ulot modeli (Sabaq modeli)
            </h3>
            <table class="pedtech-table">
              <tbody>
                <tr>
                  <th style="width: 25%;">O'qitish vaqti:</th>
                  <td style="width: 25%;"><strong>${duration}</strong></td>
                  <th style="width: 25%;">O'quvchilar soni:</th>
                  <td style="width: 25%;"><strong>${studentsCount}</strong></td>
                </tr>
                <tr>
                  <th>Dars shakli va turi:</th>
                  <td colspan="3">${lessonType}</td>
                </tr>
                <tr>
                  <th>Mashg'ulot rejasi:</th>
                  <td colspan="3">
                    <ol class="pedtech-ordered-list">
                      ${plans.map(p => `<li>${p}</li>`).join('')}
                    </ol>
                  </td>
                </tr>
                <tr>
                  <th>Mashg'ulot maqsadi:</th>
                  <td colspan="3">${objective}</td>
                </tr>
                <tr>
                  <th>O'qitish natijasi:</th>
                  <td colspan="3">${outcome}</td>
                </tr>
                <tr>
                  <td colspan="2" style="background: #f1f5f9; font-weight: 700; text-align: center; border-bottom: 2px solid #cbd5e1;">
                    Pedagogik vazifalar:
                  </td>
                  <td colspan="2" style="background: #f1f5f9; font-weight: 700; text-align: center; border-bottom: 2px solid #cbd5e1;">
                    O'qitish harakatining natijasi:
                  </td>
                </tr>
                ${tasks.map(t => `
                  <tr>
                    <td colspan="2">
                      <strong>${t.num}.</strong> ${t.task}
                    </td>
                    <td colspan="2">
                      <strong>${t.num}.</strong> ${t.result}
                    </td>
                  </tr>
                `).join('')}
                <tr>
                  <th>O'qitish usullari:</th>
                  <td colspan="3">${methods}</td>
                </tr>
                <tr>
                  <th>O'qitish ishlarini tashkillashtirish formasi:</th>
                  <td colspan="3">${orgForm}</td>
                </tr>
                <tr>
                  <th>O'qitish vositalari (asbob-uskunalar):</th>
                  <td colspan="3">${tools}</td>
                </tr>
                <tr>
                  <th>O'qitish sharoitlari:</th>
                  <td colspan="3">${environment}</td>
                </tr>
                <tr>
                  <th>Qayta bog'lanish usullari va baholash:</th>
                  <td colspan="3">${evaluation}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 2. TEXNOLOGIK XARITA JADVALI -->
          <div class="pedtech-section" id="pedtechMapSection" style="margin-top: 30px;">
            <h3 class="pedtech-section-title">
              <i class="fas fa-project-diagram"></i> 2. Mashg'ulotning texnologik xaritasi (Texnologiyalıq karta)
            </h3>
            <table class="pedtech-table pedtech-map-table">
              <thead>
                <tr style="background: #f1f5f9;">
                  <th style="width: 22%;">Bosqichlar va ajratilgan vaqt</th>
                  <th style="width: 44%;">O'qituvchi faoliyati (Ish mazmuni)</th>
                  <th style="width: 34%;">O'quvchi faoliyati</th>
                </tr>
              </thead>
              <tbody>
                ${mapSteps.map(step => `
                  <tr>
                    <td class="pedtech-step-time">
                      <strong>${step.title}</strong>
                      <div class="pedtech-time-pill">${step.duration}</div>
                    </td>
                    <td>${step.teacher}</td>
                    <td>${step.student}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>

            <!-- Imzolar -->
            <div class="pedtech-signatures">
              <div class="pedtech-sig-item">
                <span>Kafedra mudiri:</span>
                <span class="pedtech-sig-line">________________</span>
              </div>
              <div class="pedtech-sig-item">
                <span>Fan o'qituvchisi:</span>
                <span class="pedtech-sig-line"><strong>${teacherName}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // Ko'rinishni o'zgartirish (To'liq, faqat model yoki faqat karta)
  switchView: function(view, btn) {
    const pills = document.querySelectorAll('.pedtech-pill-btn');
    pills.forEach(p => p.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const modelSec = document.getElementById('pedtechModelSection');
    const mapSec = document.getElementById('pedtechMapSection');

    if (view === 'model') {
      if (modelSec) modelSec.style.display = 'block';
      if (mapSec) mapSec.style.display = 'none';
    } else if (view === 'map') {
      if (modelSec) modelSec.style.display = 'none';
      if (mapSec) mapSec.style.display = 'block';
    } else {
      if (modelSec) modelSec.style.display = 'block';
      if (mapSec) mapSec.style.display = 'block';
    }
  },

  // A4 formatida chop etish
  printA4: function() {
    window.print();
  },

  // Word fayl (.doc) sifatida yuklab olish
  exportWord: function(topicId) {
    const printable = document.getElementById('pedtechPrintableArea');
    if (!printable) return;

    const htmlContent = printable.innerHTML;
    const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>Pedagogik texnologiya</title>
        <style>
          body { font-family: 'Times New Roman', serif; font-size: 11pt; line-height: 1.35; color: #000; }
          .pedtech-doc-header { text-align: center; margin-bottom: 20px; }
          .pedtech-institution { font-size: 13pt; font-weight: bold; }
          .pedtech-department { font-size: 11pt; font-style: italic; }
          .pedtech-main-title { font-size: 13pt; font-weight: bold; margin: 10px 0; }
          .pedtech-topic-badge { font-size: 12pt; font-weight: bold; margin-bottom: 15px; }
          .pedtech-section-title { font-size: 12pt; font-weight: bold; margin-top: 15px; margin-bottom: 8px; border-bottom: 1px solid #000; }
          table { border-collapse: collapse; width: 100%; margin-bottom: 15px; }
          th, td { border: 1px solid #000; padding: 6px 8px; font-size: 10.5pt; vertical-align: top; }
          th { background-color: #f2f2f2; text-align: left; }
          ol, ul { margin: 4px 0 4px 18px; padding: 0; }
          li { margin-bottom: 3px; }
          .pedtech-time-pill { font-weight: bold; }
          .pedtech-signatures { margin-top: 30px; display: flex; justify-content: space-between; }
        </style>
      </head>
      <body>`;
    const footer = `</body></html>`;

    const blob = new Blob(['\ufeff' + header + htmlContent + footer], { type: 'application/msword;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Pedagogik_texnologiya_${topicId || 'mavzu'}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
};


/**
 * =====================================================================
 * O'QUV KURSI VA DARSLIKLAR BAZASI (KONFIGURATSIYA FAYLI)
 * =====================================================================
 * Barcha 33 ta amaliy va 30 ta nazariy mavzular uchun 5 tadan slaydlar,
 * 5 tadan (jami 315 ta) test savollari va qisqacha tavsiflar rasmiy o'zbek
 * adabiy tilida ma'ruza matnlariga to'liq moslashtirildi!
 */

var COURSE_CONFIG = {
  "course": {
    "title": "Pediatriya va neonatologiyada hamshiralik ishi",
    "subtitle": "Elektron O'quv-Metodik Majmuasi (EOMM)",
    "code": "50910302",
    "direction": "Tibbiy profilaktika va Davolash ishi yo'nalishi",
    "institution": "2-son Nukus Abu Ali ibn Sino nomidagi jamoat salomatligi texnikumi",
    "academicYear": "2024 - 2026",
    "syllabusPdfPractical": "mundarija1.pdf",
    "syllabusPdfTheory": "mundarija2.pdf",
    "department": "Hamshiralik ishi kafedrasi"
  },
  "teacher": {
    "fullName": "Sametullaeva Sveta Smaylovna",
    "shortName": "Sametullaeva S. S.",
    "role": "Pediatriya va neonatologiyada hamshiralik ishi fani o'qituvchisi",
    "avatar": "./assets/images/teacher.png",
    "certificateImage": "photo_2025-05-07_11-55-23.jpg",
    "bio": "1973-yil 06-iyulda Nukus shahrida tug'ilgan. 1990-1997 yillarda Toshkent Pediatriya Tibbiyot instituti Nukus filialida ta'lim olgan. 2003-yildan buyon 2-son Nukus Abu Ali ibn Sino nomidagi jamoat salomatligi texnikumida Pediatriya va neonatologiyada hamshiralik ishi fani bo'yicha talabalarga dars berib kelmoqda.",
    "email": "sametullaevasveta@gmail.com",
    "phone": "+998 97 357-25-99",
    "telegram": "https://t.me",
    "location": "Nukus shahri, Chimboy guzari 1",
    "experienceYears": "23 yil",
    "stats": {
      "practicalTopicsCount": 33,
      "theoryTopicsCount": 30,
      "videoLessonsCount": 63,
      "testsCount": 63
    }
  },
  "practicalTopics": [
    {
      "id": "amaliy-1",
      "number": 1,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Bolalarning jismoniy rivojlanishini monitoring qilish va baholash. Bolalikning dastlabki davrlarida rivojlanishga ta'sir etuvchi omillar.",
      "shortDesc": "Bolalarning jismoniy o'sish ko'rsatkichlarini monitoring qilish, antropometriya o'lchovlari va baholash mezonlari.",
      "lecturePdf": "Amaliyat/mavzu1/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Jismoniy rivojlanishni baholash maqsadi",
          "text": "Bolaning jismoniy o'sish dinamikasini muntazam kuzatish, yoshga xos o'zgarishlarni o'z vaqtida aniqlash va sog'lom turmush tarzini shakllantirish."
        },
        {
          "title": "2. Asosiy antropometrik o'lchovlar",
          "text": "Bo'y, tana vazni, bosh va ko'krak qafasi aylanalarini maxsus o'lchov asboblari (bolalar tarozisi, gorizontal bo'y o'lchagich) yordamida aniq o'lchash."
        },
        {
          "title": "3. JSST standartlari va sentil jadvallari",
          "text": "Xalqaro JSST sentil jadvallari asosida bolaning vazn va bo'y proporsiyalarini tekshirish, rivojlanishdan orqada qolish yoki semirishni erta aniqlash."
        },
        {
          "title": "4. Rivojlanishga ta'sir etuvchi omillar",
          "text": "Genetik moyillik, to'g'ri ratsional ovqatlantirish, toza havoda sayr qilish, gigiyena, oilaviy muhit va o'tkazilgan o'tkir kasalliklarning ta'siri."
        },
        {
          "title": "5. Hamshiraning monitoring va patronajdagi o'rni",
          "text": "Har oylik patronaj ko'riklarini o'tkazish, natijalarni bolaning rivojlanish tarixiga qayd etish va ota-onalarga gigiyenik tavsiyalar berish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu1/vedio/Антропометрия.mp4",
      "pedTechPdf": "Amaliyat/mavzu1/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu1/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu1/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "1 yoshgacha bo'lgan bolaning bo'yi qaysi asbob yordamida o'lchanadi?",
          "options": [
            "Gorizontal bolalar bo'y o'lchagichi",
            "Vertikal yog'och bo'y o'lchagich",
            "Santimetrli tasma",
            "Pelvimetr asbobi"
          ],
          "correct": 0,
          "explanation": "1 yoshgacha bo'lgan go'daklarning bo'yi maxsus gorizontal bolalar bo'y o'lchagich taxtasida yotqizilgan holda o'lchanadi."
        },
        {
          "question": "Chaqaloq tug'ilganda bosh aylanasi ko'krak qafasi aylanasidan qanday nisbatda bo'ladi?",
          "options": [
            "Bosh aylanasi ko'krak aylanasidan 1-2 sm katta bo'ladi",
            "Ko'krak aylanasi bosh aylanasidan 2-3 sm katta bo'ladi",
            "Bosh va ko'krak aylanasi teng bo'ladi",
            "Ko'krak aylanasi boshdan 5 sm kichik bo'ladi"
          ],
          "correct": 0,
          "explanation": "Tug'ilganda bosh aylanasi o'rtacha 34-36 sm bo'lib, ko'krak qafasi aylanasidan (32-34 sm) 1-2 sm katta bo'ladi. Ular 4 oylikda tenglashadi."
        },
        {
          "question": "Go'dak hayotining birinchi choragida (1-3 oylikda) oylik vazn ortishi me'yorda necha grammni tashkil etadi?",
          "options": [
            "800 gramm",
            "300 gramm",
            "1500 gramm",
            "400 gramm"
          ],
          "correct": 0,
          "explanation": "Go'dak 1-oyda o'rtacha 600 gramm, 2 va 3-oylarda esa har oyda 800 grammdan vazn qo'shishi me'yoriy ko'rsatkich hisoblanadi."
        },
        {
          "question": "Bolaning jismoniy rivojlanishini baholashda qaysi xalqaro mezon jadvallaridan foydalaniladi?",
          "options": [
            "JSST (Jahon sog'liqni saqlash tashkiloti) sentil jadvallari",
            "Apgar shkalasi",
            "Glazgo shkalasi",
            "Silverman shkalasi"
          ],
          "correct": 0,
          "explanation": "Bolalarning bo'yi, vazni va rivojlanishini baholash uchun JSST tomonidan ishlab chiqilgan standart sentil (Z-score) jadvallari qo'llaniladi."
        },
        {
          "question": "Bolaning bosh aylanasi qaysi anatomik sohalar orqali santimetrli tasma bilan o'lchanadi?",
          "options": [
            "Oldinda qosh usti yoyi, orqada ensa do'mbog'i orqali",
            "Peshonaning o'rtasi va bo'yin orqali",
            "Burun suyagi va quloq suprasi orqali",
            "Faqat liqildoq ustidan"
          ],
          "correct": 0,
          "explanation": "Bosh aylanasi santimetr tasmasini old tomondan qosh usti chizig'i, orqa tomondan esa ensaning eng bo'rtib chiqqan nuqtasi orqali o'tkazib o'lchanadi."
        }
      ]
    },
    {
      "id": "amaliy-2",
      "number": 2,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Nafas olish, yurak qon-tomir, qon yaratish a'zolari, teri, suyak va mushak tizimining anatomik-fiziologik xususiyatlari. Nafas sonini aniqlash. Puls tezligini aniqlash.",
      "shortDesc": "Nafas olish, yurak qon-tomir, suyak-mushak a'zolari xususiyatlari, nafas va puls tezligini aniqlash texnikasi.",
      "lecturePdf": "Amaliyat/mavzu2/maruza/maruza.html",
      "slides": [
        {
          "title": "1. A'zolar tizimining yoshga xos tuzilishi",
          "text": "Nafas va yurak qon-tomir tizimining bolalarga xos xususiyatlari: elastiklik, tor nafas yo'llari, tezkor moddalar almashinuvi va yuqori puls chastotasi."
        },
        {
          "title": "2. 1 daqiqalik nafas sonini aniqlash",
          "text": "Bolaning tinch holatida yoki uyqusida ko'krak qafasi harakatlarini 1 to'liq daqiqa davomida sanash (chaqaloqlarda 40-60, 1 yoshda 30-35 marta)."
        },
        {
          "title": "3. Radial va uyqu arteriyasida puls tezligi",
          "text": "Pulsni periferik arteriyalarda 1 daqiqa sanash, ritmikligi va to'liqligini baholash (chaqaloqlarda 120-140, 1 yoshda 110-120 zarba/daq)."
        },
        {
          "title": "4. Teri, suyak va mushak tizimini ko'rish",
          "text": "Terining rangi, elastikligi, turgori, mushaklar tonusi hamda katta liqildoq o'lchamlarini tekshirish va patologiyalarni qayd etish."
        },
        {
          "title": "5. Me'yoriy ko'rsatkichlarni hujjatlashtirish",
          "text": "Aniqlangan nafas, puls va arterial bosim ko'rsatkichlarini bemorning statsionar yoki ambulatoriya varaqasiga aniq belgilab borish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu2/vedio/Qolqap kiyiw.mp4",
      "pedTechPdf": "Amaliyat/mavzu2/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu2/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu2/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Yangi tug'ilgan chaqaloqda 1 daqiqadagi nafas olish soni me'yorda qanchaga teng?",
          "options": [
            "40 - 60 marta",
            "16 - 20 marta",
            "20 - 25 marta",
            "70 - 90 marta"
          ],
          "correct": 0,
          "explanation": "Chaqaloqlarda o'pka sig'imi kichik va nafas yuzaki bo'lgani uchun 1 daqiqadagi nafas soni 40-60 martani tashkil etadi."
        },
        {
          "question": "1 yoshli sog'lom bolaning puls urish tezligi 1 daqiqada o'rtacha qancha bo'ladi?",
          "options": [
            "110 - 120 zarba/daq",
            "60 - 70 zarba/daq",
            "140 - 160 zarba/daq",
            "80 - 85 zarba/daq"
          ],
          "correct": 0,
          "explanation": "1 yoshli bolada yurak qisqarishlar soni 1 daqiqada o'rtacha 110-120 zarbaga teng bo'ladi."
        },
        {
          "question": "Sog'lom bolada katta liqildoq odatda qaysi yoshda to'liq suyaklanib yopiladi?",
          "options": [
            "12 - 18 oylikda",
            "2 - 3 oylikda",
            "6 oylikda",
            "3 yoshda"
          ],
          "correct": 0,
          "explanation": "Katta liqildoq me'yorda bolaning 12-18 oyligida to'liq bitadi. Erta yoki kech bitishi patologiya belgisi bo'lishi mumkin."
        },
        {
          "question": "Bolalar terisining anatomik-fiziologik xususiyatiga to'g'ri ta'rif berilgan javobni toping:",
          "options": [
            "Shox qavati yupqa, qon tomirlarga boy, o'tkazuvchanligi yuqori",
            "Shox qavati juda qalin va qo'pol",
            "Termoregulyatsiya to'liq shakllangan, sovib qolmaydi",
            "Teri osti yog' qavati barcha sohalarda bir xil"
          ],
          "correct": 0,
          "explanation": "Bolalar terisi nozik, shilliq qavati yupqa, kapillyar to'rga boy va o'tkazuvchanligi yuqori bo'lib, infeksiyaga tez beriluvchandir."
        },
        {
          "question": "Go'daklarda nafas sonini aniqlash qaysi holatda amalga oshiriladi?",
          "options": [
            "Bola tinch yoki uxlab yotgan holatda, to'liq 1 daqiqa davomida",
            "Bola yig'layotgan paytda 15 soniya sanab 4 ga ko'paytiriladi",
            "Bolani ovqatlantirish paytida",
            "Jismoniy harakatdan so'ng"
          ],
          "correct": 0,
          "explanation": "Yig'i va hayajon paytida nafas tezlashishi sababli, nafas soni bola to'liq tinchlangan yoki uxlagan paytda 60 soniya sanaladi."
        }
      ]
    },
    {
      "id": "amaliy-3",
      "number": 3,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Ovqat hazm qilish, siydik ajratish, nerv va sezgi a'zolari hamda ichki sekretsiya bezlarining anatomik-fiziologik xususiyatlari. Arterial qon bosimini o'lchash.",
      "shortDesc": "Bolalarda ovqat hazm qilish va siydik ajratish xususiyatlari, qusish, najas va sutkalik diurez monitoringi.",
      "lecturePdf": "Amaliyat/mavzu3/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Oshqozon-ichak va siydik a'zolari xususiyatlari",
          "text": "Oshqozon sig'imining kichikligi, sfinkterlarning zaifligi, fermentlar faolligining pastligi va buyrak to'qimasining funksional yetilmaganligi."
        },
        {
          "title": "2. Go'daklarda qusish va regurgitatsiyani kuzatish",
          "text": "Ovqatlantirishdan keyin havoni chiqartirish, qusish bilan oddiy kekirish (regurgitatsiya) farqlarini ajratish va me'da aspiratsiyasini oldini olish."
        },
        {
          "title": "3. Najasning xarakteri va chastotasi",
          "text": "Emizikli go'daklarda axlatning rangi, hidi, chastotasi hamda patologik aralashmalar (shilliq, qon, hazm bo'lmagan bo'laklar) mavjudligini baholash."
        },
        {
          "title": "4. Sutkalik diurez va siydik ajralishi",
          "text": "Bolaning yoshiga qarab sutkalik siydik miqdorini aniqlash, dizuriya, oliguriya yoki poliuriya belgilarini o'z vaqtida shifokorga xabar qilish."
        },
        {
          "title": "5. Gigiyenik parvarish va ota-onaga tavsiyalar",
          "text": "Har bir hojatdan so'ng bolaning orqasidan oldiga qarab iliq suvda yuvish, tagliklarni o'z vaqtida almashtirish va terini quruq saqlash."
        }
      ],
      "pedTechPdf": "Amaliyat/mavzu3/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu3/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu3/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "1 yoshdan katta bolalarda sistolik arterial qon bosimini hisoblash formulasi qaysi?",
          "options": [
            "90 + 2n (bu yerda n - yosh)",
            "100 + n",
            "80 + 3n",
            "70 + 2n"
          ],
          "correct": 0,
          "explanation": "1 yoshdan oshgan bolalarda sistolik qon bosimi 90 + 2n formulasi bilan hisoblanadi (masalan, 5 yoshli bolada: 90 + 10 = 100 mm sim.ust)."
        },
        {
          "question": "Go'daklarda ovqatlantirilgandan so'ng qayt qilish (regurgitatsiya) ning asosiy anatomik sababi nima?",
          "options": [
            "Qizilo'ngach-oshqozon sfinkterining bo'shligi va oshqozonning vertikal joylashuvi",
            "Oshqozon kislotasining haddan tashqari yuqoriligi",
            "Oshqozon hajmining juda kattaligi",
            "Pilorik sfinkterning yo'qligi"
          ],
          "correct": 0,
          "explanation": "Go'daklarda oshqozonning kardial sfinkteri bo'sh, pilorik qismi esa yaxshi rivojlangani sababli havoni yutganda oson qayt qiladi."
        },
        {
          "question": "Bolalarda arterial qon bosimini o'lchashda manjetka kengligi qanday tanlanadi?",
          "options": [
            "Manjetka yelkaning 2/3 qismini egallashi kerak",
            "Kattalar standart manjetkasi ishlatiladi",
            "Manjetka kengligi ahamiyatga ega emas",
            "Faqat bilak sohasiga o'raladi"
          ],
          "correct": 0,
          "explanation": "Bolalarda yoshiga mos tor bolalar manjetkasi tanlanadi va u yelkaning 2/3 qismini qoplashi shart. Katta manjetka past, kichigi esa soxta yuqori bosim ko'rsatadi."
        },
        {
          "question": "1 yoshli bolada sutkalik siydik miqdorini (diurezni) hisoblash formulasi qaysi?",
          "options": [
            "V = 600 + 100 * (n - 1) ml",
            "V = 100 * n ml",
            "V = 200 * n ml",
            "V = 50 * n ml"
          ],
          "correct": 0,
          "explanation": "1 yoshdan katta bolalarda sutkalik diurez: 600 + 100 * (n - 1) ml formulasi bilan hisoblanadi (n - bolaning yoshi)."
        },
        {
          "question": "Go'daklarda emizishdan so'ng darhol qanday parvarish tadbiri o'tkazilishi shart?",
          "options": [
            "Bolani 10-15 daqiqa tik holda ('ustuncha' qilib) ushlab turish",
            "Darhol gorizontal chalqancha yotqizish",
            "Bolani qattiq tebratish",
            "Bolani qorni bilan yotqizib uxlashga qo'yish"
          ],
          "correct": 0,
          "explanation": "Emizish paytida yutilgan havoni chiqarish va qusiq massasi nafas yo'liga ketishining (aspiratsiya) oldini olish uchun bola 10-15 daqiqa tik tutiladi."
        }
      ]
    },
    {
      "id": "amaliy-4",
      "number": 4,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Gonoblennoreya profilaktikasi. Chaqaloq terisi va shilliq qavatlarini tozalash hamda parvarish qilish. Chala tug'ilgan chaqaloqning belgilari, sabablari va darajalari.",
      "shortDesc": "Neonatologiya bo'limining sanitariya tartibi, yetuk chaqaloqlar parvarishi, ertalabki tualet va xavfsiz yotqizish.",
      "lecturePdf": "Amaliyat/mavzu4/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Neonatologiya bo'limining sanitariya tartibi",
          "text": "Bo'limda qat'iy aseptika va antiseptika qoidalari, xonalarni reja asosida kvartslash, shamollatish va havoni tozalash tizimini ta'minlash."
        },
        {
          "title": "2. Yetuk yangi tug'ilgan chaqaloq belgilari",
          "text": "Muddatida tug'ilgan (38-42 hafta), vazni 2500 grammdan ortiq, terisi pushti, qichqirib yig'laydigan va barcha tug'ma reflekslari faol bo'lgan chaqaloq."
        },
        {
          "title": "3. Chaqaloqning ertalabki tualeti",
          "text": "Ko'zlarni steril paxtada chetdan markazga yuvish, burun va quloq yo'llarini steril paxta pilikchalar bilan tozalash, teridagi burmalarni ko'zdan kechirish."
        },
        {
          "title": "4. Tibbiyot xodimining antiseptik talablari",
          "text": "Chaqaloq bilan har bir muloqotdan oldin va keyin qo'llarni gigiyenik yuvish, antiseptik bilan ishlov berish va individual xalatdan foydalanish."
        },
        {
          "title": "5. Chaqaloqni to'g'ri va xavfsiz yotqizish",
          "text": "Aspiratsiyaning oldini olish maqsadida chaqaloqni boshini yon tomonga burib, qattiqroq to'shakka yotqizish hamda xona haroratini 22-24 В°C da ushlab turish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu4/vedio/\"Shaxsiy gigiyena\".mp4",
      "pedTechPdf": "Amaliyat/mavzu4/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu4/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu4/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Chaqaloq tug'ilganda gonoblennoreya profilaktikasi uchun qaysi dori vositasi tomiziladi?",
          "options": [
            "20% li natriy sulfatsil (albucid) eritmasi",
            "1% li brilliant yashili eritmasi",
            "5% li yod damlamasi",
            "70% li etil spirti"
          ],
          "correct": 0,
          "explanation": "Tug'ruq zalida chaqaloq ko'zlariga gonokokk infeksiyasi profilaktikasi uchun 20% li natriy sulfatsil eritmasi tomiziladi."
        },
        {
          "question": "Chala tug'ilgan chaqaloq deb qaysi muddatda tug'ilgan chaqaloqqa aytiladi?",
          "options": [
            "Homiladorlikning 37-haftasidan oldin tug'ilgan chaqaloqqa",
            "Homiladorlikning 40-haftasida tug'ilgan chaqaloqqa",
            "Homiladorlikning 42-haftasida tug'ilgan chaqaloqqa",
            "Faqat vazni 3 kg dan ortiq bo'lgan bolaga"
          ],
          "correct": 0,
          "explanation": "Homiladorlikning 37 to'liq haftasidan (259 kundan) oldin tug'ilgan barcha chaqaloqlar chala tug'ilgan hisoblanadi."
        },
        {
          "question": "Chala tug'ilgan chaqaloqlar parvarishida qo'llaniladigan 'Kenguru' usulining mohiyati nimada?",
          "options": [
            "Ona va chaqaloqning teri-teriga bevosita yaqin jismoniy kontakti",
            "Bolani maxsus apparatda tebratish",
            "Faqat sun'iy sut berish",
            "Bolani onasidan butunlay ajratib qo'yish"
          ],
          "correct": 0,
          "explanation": "'Kenguru' usuli chaqaloqni onaning yalang'och ko'kragiga qo'yib parvarishlash bo'lib, termoregulyatsiya, emish va ruhiy aloqani tiklaydi."
        },
        {
          "question": "Chaqaloqning ertalabki tualetida ko'zlari qaysi yo'nalishda artiladi?",
          "options": [
            "Ko'zning tashqi burchagidan ichki burchagiga qarab",
            "Ichki burchagidan tashqi burchagiga qarab",
            "Aylanma harakat bilan",
            "Faqat yuqoridan pastga qarab"
          ],
          "correct": 0,
          "explanation": "Mikroblar ko'z yosh kanaliga kirmasligi uchun ko'zlar alohida steril tampon bilan tashqi burchakdan ichki burchakka qarab artiladi."
        },
        {
          "question": "Chala tug'ilgan chaqaloqlarni inkubatorda (kuvezda) parvarishlashda havo harorati dastlab necha darajada saqlanadi?",
          "options": [
            "34.5 - 36.5 gradus",
            "20 - 22 gradus",
            "28 - 30 gradus",
            "38 - 40 gradus"
          ],
          "correct": 0,
          "explanation": "Chala tug'ilgan chaqaloqlar sovib ketmasligi uchun kuvez ichidagi harorat bolaning vazniga qarab 34.5 - 36.5В°C darajada tutiladi."
        }
      ]
    },
    {
      "id": "amaliy-5",
      "number": 5,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Oila poliklinikasida va qishloq vrachlik punktida bolalarga hamshiralik parvarishi xususiyatlari. Bolalar patronaj xizmati.",
      "shortDesc": "Kindik qoldig'i va kindik yarasini aseptik tozalash, teridagi burmalarni moylash hamda infeksiya profilaktikasi.",
      "lecturePdf": "Amaliyat/mavzu5/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Kindik qoldig'ining mumiyolanishi",
          "text": "Kindik qoldig'i ochiq usulda parvarish qilinganda 4-7 kun ichida o'z-o'zidan tushishi va quruq bitishi normal fiziologik jarayon hisoblanadi."
        },
        {
          "title": "2. Kindik yarasini aseptik tozalash",
          "text": "Kindik yarasiga 3% li vodorod peroksid tomizib, ajralmalarni quritish va vrach tavsiyasi bilan antiseptik eritma bilan ishlov berish."
        },
        {
          "title": "3. Omfalit va asoratlarning oldini olish",
          "text": "Kindik atrofi terisining qizarishi, shishishi, yoqimsiz hidli yiringli ajralma chiqishini darhol aniqlash va qat'iy davolash choralarini ko'rish."
        },
        {
          "title": "4. Teri burmalarini profilaktik moylash",
          "text": "Bo'yin, qo'ltiq osti, chov va dumba burmalarini steril o'simlik moyi yoki bolalar kremi bilan ishqalab, bopora (oprelost) paydo bo'lishiga yo'l qo'ymaslik."
        },
        {
          "title": "5. Ota-onaga uy parvarishi bo'yicha yo'riqnoma",
          "text": "Kindik yarasini yopiq bog'lamlar bilan o'rab qo'ymaslik, taglik chetini pastga qayirish va yara quruq saqlanishini ta'minlash."
        }
      ],
      "pedTechPdf": "Amaliyat/mavzu5/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu5/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu5/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Tug'ruqxonadan chiqqan yangi tug'ilgan chaqaloqni birlamchi patronaj ko'rigi qachon o'tkaziladi?",
          "options": [
            "Chiqarilgandan keyingi dastlabki 1-3 kun ichida",
            "1 oylik bo'lganda",
            "15 kundan keyin",
            "Faqat bola kasal bo'lganda"
          ],
          "correct": 0,
          "explanation": "Chaqaloq tug'ruqxonadan uyga chiqarilgach, umumiy amaliyot shifokori va patronaj hamshirasi dastlabki 1-3 kun ichida uning xonadoniga borishi shart."
        },
        {
          "question": "1 yoshgacha bo'lgan sog'lom bola oila poliklinikasida profilaktik ko'rikdan necha marta o'tishi kerak?",
          "options": [
            "Har oyda 1 marta",
            "Yilda 1 marta",
            "Har 6 oyda 1 marta",
            "Faqat emlash kunlari"
          ],
          "correct": 0,
          "explanation": "Hayotining birinchi yilida go'dak har oyda 1 marta poliklinikada antropometriya va pediatr ko'rigidan o'tkaziladi."
        },
        {
          "question": "Patronaj hamshirasi chaqaloq xonadonida qaysi ko'rsatkichlarni birinchi navbatda baholaydi?",
          "options": [
            "Emish faolligi, kindik jarohati holati, terisi va sariqlik bor-yo'qligini",
            "Bolaning tishlari sonini",
            "Bolaning yurish qobiliyatini",
            "Faqat kiyim-kechaklarini"
          ],
          "correct": 0,
          "explanation": "Dastlabki patronajda chaqaloqning ko'krak emishi, kindik qoldig'i, teri tozaligi, mekoniy va siydik ajralishi tekshiriladi."
        },
        {
          "question": "Chaqaloq parvarish qilinadigan xonaning me'yoriy harorati va namligi qancha bo'lishi lozim?",
          "options": [
            "Harorat 20-22 gradus, namlik 50-60%",
            "Harorat 28-30 gradus, namlik 20%",
            "Harorat 15 gradus, namlik 80%",
            "Harorat 25-27 gradus, namlik 30%"
          ],
          "correct": 0,
          "explanation": "Bolalar xonasida maqbul havo harorati 20-22В°C, havoning nisbiy namligi esa 50-60% bo'lishi termoregulyatsiya uchun qulaydir."
        },
        {
          "question": "Poliklinikada bolaning rivojlanish tarixi qaysi rasmiy tibbiy hujjat shaklida yuritiladi?",
          "options": [
            "112/u shakl (Bolaning rivojlanish tarixi)",
            "003/u shakl (Kasallik tarixi)",
            "025/u shakl",
            "086/u shakl"
          ],
          "correct": 0,
          "explanation": "Bolalar poliklinikasida har bir bola uchun 112/u shaklidagi 'Bolaning rivojlanish tarixi' rasmiylashtiriladi."
        }
      ]
    },
    {
      "id": "amaliy-6",
      "number": 6,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Bolalarni ovqatlantirish. Chaqaloqlarni ko'krak suti bilan emizish qoidalari, ona sutining afzalliklari. Bolaga kerak bo'lgan sut miqdorini hisoblash.",
      "shortDesc": "Chaqaloqni gigiyenik cho'miltirish, xona va suv harorati, ko'krakka to'g'ri qo'yish va tabiiy emizish qoidalari.",
      "lecturePdf": "Amaliyat/mavzu6/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Gigiyenik cho'miltirish shartlari",
          "text": "Kindik yarasi bitgach chaqaloqni har kuni, xona harorati 22-24 В°C va qaynatilgan suv harorati 36.5 - 37 В°C bo'lganda cho'miltirish lozim."
        },
        {
          "title": "2. Cho'miltirishning bosqichma-bosqich texnikasi",
          "text": "Bolani asta-sekin suvga tushirish, boshini chap qo'l bilagida ushlab, yumshoq harakatlar bilan yuvish va oxirida iliq toza suvda chayish."
        },
        {
          "title": "3. Ona sutining bebaho xususiyatlari",
          "text": "Ona suti chaqaloq uchun eng mukammal oziq bo'lib, uning tarkibidagi immunoglobulinlar va fermentlar bolani infeksiyalardan ishonchli himoya qiladi."
        },
        {
          "title": "4. Ko'krakka to'g'ri qo'yish texnikasi",
          "text": "Bolaning tanasi onaga qaratilgan, og'zi katta ochilgan, nafaqat so'rg'ich, balki areolaning pastki qismini to'liq qamragan bo'lishi shart."
        },
        {
          "title": "5. Emizishdan keyingi parvarish",
          "text": "Yutilgan havoni chiqarish uchun bolani 10-15 daqiqa 'ustun' shaklida tik tutib turish va me'dadan qayt qilishning oldini olish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu6/vedio/qon bosimini o'lchash.mp4",
      "pedTechPdf": "Amaliyat/mavzu6/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu6/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu6/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "JSST tavsiyasiga binoan chaqaloq tug'ilgandan so'ng dastlabki necha daqiqa ichida ko'krakka qo'yilishi kerak?",
          "options": [
            "Dastlabki 30-60 daqiqa ichida",
            "6 soatdan keyin",
            "2 kundan keyin",
            "Faqat ertasi kuni ertalab"
          ],
          "correct": 0,
          "explanation": "Chaqaloq tug'ilishi bilanoq dastlabki 30-60 daqiqa ichida ona ko'kragiga yotqizilib, og'iz sutini emishi ta'minlanishi shart."
        },
        {
          "question": "Ona sutining dastlabki kunlarda ajraladigan qismi nima deb ataladi va uning afzalligi nimada?",
          "options": [
            "Og'iz suti (kolostrum) - immunoglobulinlar va oqsilga o'ta boy",
            "Yetuk sut - faqat suvdan iborat",
            "Orqa sut - kam quvvatli",
            "Aralash sut"
          ],
          "correct": 0,
          "explanation": "Og'iz suti (og'iz suti) chaqaloqni infeksiyalardan himoya qiluvchi sekretor IgA, fermentlar va oqsillarga eng boy tabiiy immunitet manbaidir."
        },
        {
          "question": "Go'dakni talab bo'yicha tabiiy emizish qoidasi nimani anglatadi?",
          "options": [
            "Bolaning har bir ochlik va bezovtalik alomatida, kunduzi va kechasi emizish",
            "Har 4 soatda qat'iy rejim bilan emizish",
            "Kechasi umuman emizmaslik",
            "Faqat kuniga 3 marta emizish"
          ],
          "correct": 0,
          "explanation": "Erkin emizish вЂ” bola xohlagan paytda, intervalni cheklamagan holda kunduzi ham, kechasi ham ko'krak tutishni bildiradi."
        },
        {
          "question": "Chaqaloq hayotining dastlabki 10 kunida 1 sutkalik sut miqdorini hisoblashda qaysi formula qo'llaniladi?",
          "options": [
            "Finkelnshteyn formulasi (V = n * 70 yoki 80)",
            "Gabrilshevskiy formulasi",
            "Broka formulasi",
            "Sentil formulasi"
          ],
          "correct": 0,
          "explanation": "10 kungacha bo'lgan davrda sut miqdori Finkelnshteyn formulasi bo'yicha hisoblanadi (n - kunlar soni)."
        },
        {
          "question": "Chaqaloqning ko'krakka to'g'ri qappashganligini bildiruvchi asosiy tashqi belgi qaysi?",
          "options": [
            "Og'zi katta ochilgan, pastki labi tashqariga qayrilgan, areola pastki qismi og'izda",
            "Faqat ko'krak so'rg'ichining uchini tishlab turishi",
            "Emish paytida qattiq shaloqlash tovushlari chiqishi",
            "Bolaning iyaklari ko'krakka tegmasligi"
          ],
          "correct": 0,
          "explanation": "To'g'ri qappashganda og'iz katta ochiladi, pastki lab tashqariga qayriladi, iyak ko'krakka tegib turadi va so'rg'ich shikastlanmaydi."
        }
      ]
    },
    {
      "id": "amaliy-7",
      "number": 7,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "6 oylikdan 1 yoshgacha bolalarga taomnoma tuzish va qo'shimcha ovqatlar kiritish. 1 yoshdan katta bolalarni ovqatlantirish turlari va taomnomasi.",
      "shortDesc": "Chala tug'ilgan chaqaloqlarning xususiyatlari, inkubator (kuvez) da parvarishlash, harorat va kislorod monitoringi.",
      "lecturePdf": "Amaliyat/mavzu7/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Chala tug'ilganlik xususiyatlari",
          "text": "Homiladorlikning 37-haftasidan oldin tug'ilgan, tana vazni 2500 g dan kam, teri osti yog' qatlami yetilmagan va haroratni saqlay olmaydigan go'daklar."
        },
        {
          "title": "2. Inkubator (kuvez) da parvarishlash",
          "text": "Kuvez ichida individual harorat (34-36 В°C) va yuqori namlik (70-80%) muhitini yaratish orqali chaqaloqning hayotiy funksiyalarini saqlab qolish."
        },
        {
          "title": "3. Gipotermiyaning oldini olish",
          "text": "Haroratning keskin tushib ketishi skleremaga va nafas to'xtashiga sabab bo'lishi sababli tana haroratini muntazam o'lchab turish."
        },
        {
          "title": "4. 'Kenguru' usulining (teri-teriga kontakt) ahamiyati",
          "text": "Chaqaloqni onaning ochiq ko'kragiga qo'yish orqali uning tana haroratini me'yorlashtirish, ona-bola psixologik bog'liqligini mustahkamlash."
        },
        {
          "title": "5. Ehtiyotkorlik bilan oziqlantirish",
          "text": "So'rish va yutish reflekslari bo'lmaganda ona sutini ingichka nazogastral zond orqali mikrodolzalarda yuborish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu7/vedio/qon bosimini o'lchash.mp4",
      "pedTechPdf": "Amaliyat/mavzu7/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu7/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu7/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "6 oylikdan 1 yoshgacha bolalarga taomnoma tuzish va qo'shimcha ovqatlar kiritish. 1 yoshdan katta bolalarni ovqatlantirish turlari va taomnomasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-8",
      "number": 8,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Chaqaloqlik davri kasalliklari, chaqaloqlar asfiksiyasida hamshiralik parvarishi. Tug'ruq jarohatlari va gemolitik kasallikda hamshiralik parvarishi. Chaqaloqlarga sun'iy nafas berish texnikasi. Fototerapiya o'tkazish.",
      "shortDesc": "1 yoshgacha go'daklarni ratsional ovqatlantirish, aralashmalar va qo'shimcha ovqatlarni (prikorm) to'g'ri kiritish.",
      "lecturePdf": "Amaliyat/mavzu8/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Ratsional ovqatlantirish tamoyillari",
          "text": "1 yoshgacha bolaning o'sishi va aqliy rivojlanishi uchun oqsil, yog', uglevod, vitamin va minerallarning me'yorda yetkazib berilishini ta'minlash."
        },
        {
          "title": "2. Aralash va sun'iy ovqatlantirish",
          "text": "Ona suti yetishmaganda yoki bo'lmaganda yoshiga moslashtirilgan sutli aralashmalarni (formulalarni) steril shishalarda berish."
        },
        {
          "title": "3. 1-qo'shimcha ovqat: sabzavotli pyure",
          "text": "6 oylikdan boshlab bolaga 1 choy qoshiqdan boshlab bir komponentli sabzavotli pyure (qovoqcha, gulkaram) kiritish."
        },
        {
          "title": "4. 2 va 3-qo'shimcha ovqatlar (bo'tqa, go'sht)",
          "text": "7 oylikda glyutensiz bo'tqalar (grechka, guruch), 8 oylikda ezilgan go'shtli qiyma va tuxum sarig'ini ratsionga kiritish."
        },
        {
          "title": "5. Dispepsiya va allergiyaning oldini olish",
          "text": "Har bir yangi mahsulotni faqat bittadan kiritish, bolaning terisi va axlatining o'zgarishini qat'iy nazorat qilib borish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu8/vedio/InShot_20210419_130310345.mp4",
      "pedTechPdf": "Amaliyat/mavzu8/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu8/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu8/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Chaqaloqlik davri kasalliklari, chaqaloqlar asfiksiyasida hamshiralik parvarishi. Tug'ruq jarohatlari va gemolitik kasallikda hamshiralik parvarishi. Chaqaloqlarga sun'iy nafas berish texnikasi. Fototerapiya o'tkazish. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-9",
      "number": 9,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Chaqaloqlarda teri va kindik kasalliklari, chaqaloqlar sepsisi, pnevmopatiya va to'satdan o'lim sindromida hamshiralik parvarishi. Kindik jarohatini parvarish qilish. Yurakni massaj qilish texnikasi.",
      "shortDesc": "Chaqaloqlar asfiksiyasi va tug'ruq jarohatlarida birlamchi neonatal reanimatsiya va qat'iy tinchlik parvarishi.",
      "lecturePdf": "Amaliyat/mavzu9/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Chaqaloqlar asfiksiyasi etiologiyasi",
          "text": "Tug'ruq paytida homilaning kislorod yetishmovchiligi (gipoksiya) ga uchrashi natijasida nafasning bo'lmasligi yoki yuzaki sust bo'lishi."
        },
        {
          "title": "2. Birlamchi neonatal reanimatsiya",
          "text": "Chaqaloqni quruq issiq yo'rgakka olish, havo yo'llaridagi shilliqni elektrosos yoki nokcha bilan so'rib tozalash va taktil stimulyatsiya."
        },
        {
          "title": "3. Ambu qopi orqali sun'iy shamollatish",
          "text": "Nafas tiklanmasa, yuzga mos germetik niqob orqali daqiqasiga 40-60 marta musbat bosimli sun'iy nafas berish."
        },
        {
          "title": "4. Tug'ruq jarohatlari: sefalogematoma",
          "text": "Bosh suyagi ustparda ostiga qon quyilishi (sefalogematoma) da jarohatlangan sohani bosmaslik, muz qo'yish va qat'iy tinchlik rejimini ta'minlash."
        },
        {
          "title": "5. Neyrosonografiya va asoratlarning monitoringi",
          "text": "Miya qon aylanishi buzilishini erta aniqlash va asab tizimi faoliyatini tiklash bo'yicha shifokor ko'rsatmalarini bajarish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu9/vedio/video_2023-10-15_05-38-18.mp4",
      "pedTechPdf": "Amaliyat/mavzu9/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu9/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu9/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Chaqaloqlarda teri va kindik kasalliklari, chaqaloqlar sepsisi, pnevmopatiya va to'satdan o'lim sindromida hamshiralik parvarishi. Kindik jarohatini parvarish qilish. Yurakni massaj qilish texnikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-10",
      "number": 10,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Go'dak va kichik yoshdagi bolalarda hamshiralik parvarishi. Raxit, spazmofiliya va ekssudativ-kataral diatez kasalliklarida hamshiralik parvarishi.",
      "shortDesc": "Chaqaloqlar gemolitik kasalligi (ChGK), fototerapiya o'tkazish, bilirubin monitoringi va asoratlarning oldini olish.",
      "lecturePdf": "Amaliyat/mavzu10/maruza/maruza.html",
      "slides": [
        {
          "title": "1. ChGK sabablari va xavf omillari",
          "text": "Ona rezus-manfiy, bola rezus-musbat bo'lganda yoki AB0 tizimi bo'yicha qon guruhlari mos kelmaganda antitelolar orqali eritrotsitlarning yemirilishi."
        },
        {
          "title": "2. Klinik shakllari va xavfli belgilar",
          "text": "Kasallikning 3 ta asosiy shakli: shishli (eng og'ir), sariqlik va anemiyali shakllari mavjud bo'lib, hayotning ilk soatlarida namoyon bo'ladi."
        },
        {
          "title": "3. Yadroviy sariqlik va miya zararlanishi",
          "text": "Erkin (egri) bilirubin miqdori kritik darajadan oshganda miya po'stlog'i yadrolarini zaharlab, og'ir nevrologik asoratlar keltirib chiqarishi."
        },
        {
          "title": "4. Fototerapiya o'tkazish qoidalari",
          "text": "Maxsus ko'k chiroq ostida chaqaloqning terisini yoritish, bunda ko'zlarni va jinsiy a'zolarni nur o'tkazmaydigan bog'lam bilan himoyalash."
        },
        {
          "title": "5. Qon almashtirib quyish (ZPK) amaliyoti",
          "text": "Bilirubin darajasi keskin oshganda zudlik bilan donor qonini tomir ichiga yuborib, toksik bilirubin va antitelolarni chiqarib tashlash."
        }
      ],
      "videoUrl": "Amaliyat/mavzu10/vedio/InShot_20211015_110054038.mp4",
      "pedTechPdf": "Amaliyat/mavzu10/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu10/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu10/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Go'dak va kichik yoshdagi bolalarda hamshiralik parvarishi. Raxit, spazmofiliya va ekssudativ-kataral diatez kasalliklarida hamshiralik parvarishi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-11",
      "number": 11,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Nafas a'zolari kasalliklari. Rinit, angina va laringit kasalliklarida bolalarga hamshiralik parvarishi. Nafas sonini sanash. Ko'z, burun va quloqqa dori tomizish. Quloqqa isituvchi kompress qo'yish.",
      "shortDesc": "D vitamini tanqisligida raxit, spazmofiliya va gipotrofiyada hamshiralik parvarishi, parhez va D vitamini dozalari.",
      "lecturePdf": "Amaliyat/mavzu11/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Raxit kasalligining etiopatogenezi",
          "text": "Quyosh nuri va oziq-ovqat yetishmovchiligi natijasida D vitamini tanqisligi, kalsiy va fosfor almashinuvining chuqur buzilishi."
        },
        {
          "title": "2. Boshlang'ich va avj olgan davr belgilari",
          "text": "Bolaning bezovtalanishi, boshining orqa qismi terlab kal bo'lishi, katta liqildoq chetlarining yumshashi va suyak deformatsiyalari."
        },
        {
          "title": "3. Spazmofiliyadagi laringospazm xavfi",
          "text": "Qonda kalsiyning keskin kamayishi oqibatida hiqildoq muskullarining tortilishi, tovushsiz qichqirish va nafasning to'xtab qolishi."
        },
        {
          "title": "4. Gipotrofiyada ovqatlantirishni hisoblash",
          "text": "Tana vazni yetishmovchiligida oziqlantirishni yengil hazm bo'luvchi bo'laklarga bo'lib, oqsil va kaloriyalar balansini doimiy nazorat qilish."
        },
        {
          "title": "5. D vitamini profilaktikasi va davosi",
          "text": "Bolaga 1 oyligidan boshlab shifokor tavsiya qilgan dozada suvli D3 vitamini eritmasini berish va toza havoda yetarlicha sayr qildirish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu11/vedio/Da`rilik_zatti_qulaqqa_tel.mp4",
      "pedTechPdf": "Amaliyat/mavzu11/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu11/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu11/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Nafas a'zolari kasalliklari. Rinit, angina va laringit kasalliklarida bolalarga hamshiralik parvarishi. Nafas sonini sanash. Ko'z, burun va quloqqa dori tomizish. Quloqqa isituvchi kompress qo'yish. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-12",
      "number": 12,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Bronxial astma, bronxit va pnevmoniyada bola hamda uning oilasiga hamshiralik parvarishi. Xantal (gorchichnik) qo'yish. Oyoqqa vanna qo'yish. Soxta krup xurujida tez yordam ko'rsatish. Cho'ntak ingalyatoridan foydalanish.",
      "shortDesc": "O'tkir respirator kasalliklar, bronxit va pnevmoniyada parvarish, nebulayzer terapiyasi va postural drenaj.",
      "lecturePdf": "Amaliyat/mavzu12/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Nafas a'zolari yallig'lanishining xususiyatlari",
          "text": "Bolalarda bronxlar shilliq qavatining boy qon bilan ta'minlanganligi tufayli yallig'lanish tezda shish va bronxospazmga aylanadi."
        },
        {
          "title": "2. Pnevmoniyaning klinik belgilari",
          "text": "Yuqori tana harorati, intoksikatsiya, yo'tal, hansirash, burun qanotlarining kerilishi va ko'krak qafasining yordamchi muskullari tortilishi."
        },
        {
          "title": "3. Nebulayzerda ingalyatsion terapiya",
          "text": "Kompressorli nebulayzer yordamida mukolitiklar va bronxolitiklarni o'pkaning eng mayda alveolalarigacha yetkazib berish."
        },
        {
          "title": "4. Vibratsion massaj va postural drenaj",
          "text": "Balg'amni oson ko'chirish maqsadida bolaning boshini pastroq qilib, ko'krak qafasiga barmoq uchlari bilan ritmik zarbalar berish."
        },
        {
          "title": "5. Pulsoksimetriya va kislorod terapiyasi",
          "text": "Qonning kislorod bilan to'yinishini (SpO2) o'lchash va u 92% dan pasayganda namlangan kislorod niqobi orqali yordam berish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu12/vedio/video_2023-10-05_17-04-23.mp4",
      "pedTechPdf": "Amaliyat/mavzu12/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu12/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu12/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Bronxial astma, bronxit va pnevmoniyada bola hamda uning oilasiga hamshiralik parvarishi. Xantal (gorchichnik) qo'yish. Oyoqqa vanna qo'yish. Soxta krup xurujida tez yordam ko'rsatish. Cho'ntak ingalyatoridan foydalanish. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-13",
      "number": 13,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Qon aylanish a'zolari kasalliklari, tug'ma yurak nuqsonlari, revmatizm va revmatik xoreyada hamshiralik parvarishi. Pulsni aniqlash. Biokimyoviy tahlil uchun qon olish.",
      "shortDesc": "Bronxial astma xurujida birinchi yordam, cho'ntak ingalyatorlari, speyser va nebulayzerdan foydalanish texnikasi.",
      "lecturePdf": "Amaliyat/mavzu13/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Bronxial astma xuruji belgilari",
          "text": "Nafas chiqarishning qiyinlashishi (ekspirator hansirash), masofadan eshitiluvchi hushtaksimon xirillashlar va bezovtalik."
        },
        {
          "title": "2. Xuruj paytida birinchi shoshilinch yordam",
          "text": "Bolani deraza oldiga o'tqazish, tor kiyimlarini yechish, toza havo oqimini ta'minlash va psixologik tinchlantirish."
        },
        {
          "title": "3. Dozalangan cho'ntak ingalyatori va speyser",
          "text": "Speyser kamerasi orqali tez ta'sir qiluvchi bronxodilatatorni (salbutamol) 1-2 doza purkash va chuqur nafas oldirish."
        },
        {
          "title": "4. Nebulayzer orqali shoshilinch ingalyatsiya",
          "text": "Kuchli bronxospazmda nebulayzer orqali Berodual yoki Pulmikort eritmalarini fiziologik eritma bilan aralashtirib yuborish."
        },
        {
          "title": "5. Profilaktika va gipoallergen muhit",
          "text": "Bolaning xonasidan gilam, yumshoq o'yinchoqlar, uy hayvonlarini olib tashlash va chang to'planishining oldini olish."
        }
      ],
      "pedTechPdf": "Amaliyat/mavzu13/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu13/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu13/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Qon aylanish a'zolari kasalliklari, tug'ma yurak nuqsonlari, revmatizm va revmatik xoreyada hamshiralik parvarishi. Pulsni aniqlash. Biokimyoviy tahlil uchun qon olish. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-14",
      "number": 14,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Ovqat hazm qilish a'zolari kasalliklari. Pilorostenoz va pilorospazm, diareya, gastrit va enterokolitda hamshiralik parvarishi. Qusganda va qorin og'rig'ida parvarish qilish. Og'ir suvsizlanishda degidratsiya va suyuqlik yuborish.",
      "shortDesc": "O'tkir gastrit va diareyada oshqozonni zond bilan yuvish, koprogrammaga tahlil olish va tejamkor parhez.",
      "lecturePdf": "Amaliyat/mavzu14/maruza/maruza.html",
      "slides": [
        {
          "title": "1. O'tkir gastrit va diareya sabablari",
          "text": "Sifatsiz yoki yoshiga to'g'ri kelmaydigan oziq-ovqatlar iste'mol qilish, bakterial va virusli infeksiyalar natijasida yuzaga kelishi."
        },
        {
          "title": "2. Qusish kuzatilganda hamshira harakati",
          "text": "Qusiq massalarining nafas yo'llariga tushmasligi uchun bolaning boshini yonga burish, og'iz bo'shlig'ini toza suvda chayish."
        },
        {
          "title": "3. Oshqozonni zond orqali yuvish",
          "text": "Zaharli yoki buzilgan ovqat qoldiqlarini chiqarish uchun bolaning bo'yiga mos zond orqali iliq suv bilan toza chayindi hosil bo'lguncha yuvish."
        },
        {
          "title": "4. Koprogramma va bakteriologik ekmaga tahlil",
          "text": "Najas namunalarini maxsus steril konteynerga yig'ib, laboratoriyaga zudlik bilan yetkazish qoidalariga amal qilish."
        },
        {
          "title": "5. Parhez va tejamkor rejim",
          "text": "Oshqozon shilliq qavatini asrash uchun yog'siz, qaynatilgan suyuq taomlar (shilimshiq sho'rvalar, guruch qaynatmasi) berish."
        }
      ],
      "pedTechPdf": "Amaliyat/mavzu14/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu14/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu14/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Ovqat hazm qilish a'zolari kasalliklari. Pilorostenoz va pilorospazm, diareya, gastrit va enterokolitda hamshiralik parvarishi. Qusganda va qorin og'rig'ida parvarish qilish. Og'ir suvsizlanishda degidratsiya va suyuqlik yuborish. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-15",
      "number": 15,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Og'iz shilliq qavati kasalliklari, stomatit va gelmintozlarda (askaridoz, enterobioz) hamshiralik parvarishi. Og'iz shilliq qavatiga dori surtish. Perianal burmalardan qirma olish texnikasi.",
      "shortDesc": "Stomatitlarda og'iz shilliq qavatiga dori surtish, enterobioz va askaridozda perianal qirma olish texnikasi.",
      "lecturePdf": "Amaliyat/mavzu15/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Stomatitlarning klinik ko'rinishlari",
          "text": "Og'iz shilliq qavatida oq karashlar (molochnitsa), yarachalar (aftalar), qizarish, kuchli og'riq va so'lak oqishi."
        },
        {
          "title": "2. Og'iz bo'shlig'ini antiseptik bilan tozalash",
          "text": "Romashka damlamasi, furatsilin yoki nistatin suspenziyasi bilan og'iz bo'shlig'ini ehtiyotkorlik bilan artib ishlov berish."
        },
        {
          "title": "3. Gelmintozlarning bolaga zarari",
          "text": "Askarida va ostritsalar bolaning ishtahasini pasaytiradi, vazn yo'qotish, kechki payt tish g'ijirlatish va orqa chiqaruv teshigi qichishishini keltirib chiqaradi."
        },
        {
          "title": "4. Enterobiozga qirma olish texnikasi",
          "text": "Ertalab yuvinmasdan oldin perianal burmalarga shaffof yopishqoq lentani yopishtirib olish va buyum oynasiga yopishtirish."
        },
        {
          "title": "5. Shaxsiy gigiyena qoidalarini o'rgatish",
          "text": "Qo'llarni hojatdan so'ng va ovqatdan oldin sovunlab yuvish, tirnoqlarni qisqa olish va meva-sabzavotlarni toza yuvish."
        }
      ],
      "pedTechPdf": "Amaliyat/mavzu15/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu15/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu15/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Og'iz shilliq qavati kasalliklari, stomatit va gelmintozlarda (askaridoz, enterobioz) hamshiralik parvarishi. Og'iz shilliq qavatiga dori surtish. Perianal burmalardan qirma olish texnikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-16",
      "number": 16,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Qon va qon yaratish a'zolari kasalliklari, kamqonlik (anemiya) da hamshiralik parvarishi. Umumiy tahlil uchun kapillyar qon olish. Qon tahlili natijalarini o'qish va baholash.",
      "shortDesc": "Temir tanqisligi anemiyasida kapillyar qon olish, gemoglobinni baholash va temir preparatlarini to'g'ri berish.",
      "lecturePdf": "Amaliyat/mavzu16/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Temir tanqisligi anemiyasining belgilari",
          "text": "Terining oqarishi, lanjlik, tez charchash, ishtaha pasayishi, tirnoqlarning sinuvchanligi va g'alati narsalarni (bo'r, tuproq) yeyishga moyillik."
        },
        {
          "title": "2. Kapillyar qon olish algoritmi",
          "text": "4-barmoq uchini spirt bilan zararsizlantirib, bir martalik skarifitsator bilan 2 mm chuqurlikda teshib, dastlabki tomchini artib tashlash."
        },
        {
          "title": "3. Gemoglobin va eritrotsitlar ko'rsatkichlari",
          "text": "Qon tahlilida gemoglobin miqdorining 110 g/l dan pasayishi va rang ko'rsatkichining kamayishi anemiya darajasini belgilaydi."
        },
        {
          "title": "4. Temir preparatlarini to'g'ri qabul qilish",
          "text": "Tomchi yoki sirop shaklidagi temir dorilarini ovqat oralig'ida berish, tish emalini himoya qilish uchun somoncha orqali ichirish."
        },
        {
          "title": "5. Ratsionni oqsil va temirga boyitish",
          "text": "Bolaning taomnomasiga mol go'shti, jigar, til, tuxum sarig'i va C vitaminiga boy tabiiy sharbatlarni muntazam qo'shish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu16/vedio/video_2023-10-15_17-18-36.mp4",
      "pedTechPdf": "Amaliyat/mavzu16/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu16/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu16/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Qon va qon yaratish a'zolari kasalliklari, kamqonlik (anemiya) da hamshiralik parvarishi. Umumiy tahlil uchun kapillyar qon olish. Qon tahlili natijalarini o'qish va baholash. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-17",
      "number": 17,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Gemorragik diatez kasalliklarida bola va uning oila a'zolariga hamshiralik parvarishi. Burundan qon ketganda birinchi yordam ko'rsatish. Muzli xaltachadan foydalanish texnikasi.",
      "shortDesc": "Gemorragik diatezlarda burundan qon ketganda birinchi yordam, tampon qo'yish va muzli xaltachadan foydalanish.",
      "lecturePdf": "Amaliyat/mavzu17/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Gemorragik diatezlarning xususiyatlari",
          "text": "Trombotsitopenik purpura va gemofiliyada terida o'z-o'zidan paydo bo'luvchi qontalashlar, qonashlar va bo'g'imlarda qon quyilishi."
        },
        {
          "title": "2. Burundan qon ketganda (epistaksis) yordam",
          "text": "Bolani o'tqazib, boshini oldinga engashtirish (qon oshqozonga ketmasligi uchun) va burun qanotlarini 5-10 daqiqa siqib turish."
        },
        {
          "title": "3. Vodorod peroksidli tampon qo'yish",
          "text": "Burun katagiga 3% li vodorod peroksid eritmasida namlangan steril paxta yoki doka pilikchani ehtiyotkorlik bilan kiritish."
        },
        {
          "title": "4. Sovuq kompress qo'llash",
          "text": "Tomirlarni toraytirish maqsadida peshona va burun suyagi sohasiga muzli xaltacha yoki sovuq suvda ho'llangan sochiq qo'yish."
        },
        {
          "title": "5. Bemor bolaga ehtiyotkor parvarish",
          "text": "Mushak ichiga inyeksiyalar qilishni taqiqlash, o'tkir o'yinchoqlardan asrash va jarohatlanish xavfini bartaraf etish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu1/vedio/Антропометрия.mp4",
      "pedTechPdf": "Amaliyat/mavzu1/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu1/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu1/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Gemorragik diatez kasalliklarida bola va uning oila a'zolariga hamshiralik parvarishi. Burundan qon ketganda birinchi yordam ko'rsatish. Muzli xaltachadan foydalanish texnikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-18",
      "number": 18,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Endokrin kasalliklarida (1-tur qandli diabet) hamshiralik parvarishi. Insulin dozasini hisoblash. Shprits-ruchka yordamida insulinoterapiya texnikasi. Siydikdagi qand va atseton miqdorini ekspress-tekshirish.",
      "shortDesc": "1-tur qandli diabetda glyukometriya, insulin dozasini hisoblash, shprits-ruchkada yuborish va siydik ekspress-tahlili.",
      "lecturePdf": "Amaliyat/mavzu18/maruza/maruza.html",
      "slides": [
        {
          "title": "1. 1-tur qandli diabetning erta belgilari",
          "text": "Ko'p chanqash (polidipsiya), tez-tez siyish (poliuriya), ko'p ovqat yesa ham vazn yo'qotish va umumiy zaiflik."
        },
        {
          "title": "2. Glyukometr bilan qondagi qandni aniqlash",
          "text": "Barmoqdan olingan bir tomchi qonni test-poloskaga tekkizib, bir necha soniyada qondagi glyukoza darajasini aniq belgilash."
        },
        {
          "title": "3. Shprits-ruchkada insulin inyeksiyasi",
          "text": "Insulin dozasini o'lchash, qorin, yelka yoki son sohasida teri burmasini hosil qilib, 45-90 gradus burchak ostida teri ostiga yuborish."
        },
        {
          "title": "4. Siydikdagi atsetonni ekspress-tekshirish",
          "text": "Siydik tahliliga maxsus test-chiziqchasini botirib, keton tanachalari (ketoatsidoz xavfi) borligini rang o'zgarishi orqali baholash."
        },
        {
          "title": "5. Gipoglikemiyada birinchi tezkor yordam",
          "text": "Qaltirash, sovuq ter bosishi va holsizlikda darhol qandli choy, sharbat yoki konfet berish, og'ir hollarda 40% glyukoza yuborish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu2/vedio/Катетеризация.mp4",
      "pedTechPdf": "Amaliyat/mavzu2/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu2/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu2/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Endokrin kasalliklarida (1-tur qandli diabet) hamshiralik parvarishi. Insulin dozasini hisoblash. Shprits-ruchka yordamida insulinoterapiya texnikasi. Siydikdagi qand va atseton miqdorini ekspress-tekshirish. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-19",
      "number": 19,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Buyrak va siydik ajratish a'zolari kasalliklari: sistit, pielonefrit va glomerulonefritda hamshiralik parvarishi. Buyrak xastaligi bor bemorlarning qon bosimini o'lchash va shishlarni baholash.",
      "shortDesc": "Sistit, pielonefrit va glomerulonefritda qon bosimini o'lchash, shishlarni baholash va tuzsiz parhez nazorati.",
      "lecturePdf": "Amaliyat/mavzu19/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Buyrak kasalliklarining klinik belgilari",
          "text": "Pielonefritda isitma, bel og'rig'i, loyqa siydik; glomerulonefritda esa ertalabki yuzdagi shishlar va to'q rangli siydik."
        },
        {
          "title": "2. Qon bosimini doimiy monitoring qilish",
          "text": "Bolaning yoshiga mos keluvchi manjetani tanlab, qon bosimini o'lchash va gipertenziya rivojlanishining oldini olish."
        },
        {
          "title": "3. Shishlarni baholash va tana vaznini o'lchash",
          "text": "Yashirin shishlarni aniqlash maqsadida bolani har kuni ertalab och qoringa bir vaqtda tarozida tortib, vazn o'zgarishini kuzatish."
        },
        {
          "title": "4. Tuzsiz va oqsilni tejovchi parhez",
          "text": "Glomerulonefritning o'tkir davrida osh tuzini qat'iy cheklash, suyuqlik miqdorini ajralgan siydik hajmiga qarab belgilash."
        },
        {
          "title": "5. Surunkali infeksiya o'choqlarini sanatsiya qilish",
          "text": "Karioz tishlarni davolash, surunkali tonzillitni bartaraf etish orqali buyraklarning qayta zararlanishiga yo'l qo'ymaslik."
        }
      ],
      "videoUrl": "Amaliyat/mavzu3/vedio/Пункция.mp4",
      "pedTechPdf": "Amaliyat/mavzu3/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu3/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu3/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Buyrak va siydik ajratish a'zolari kasalliklari: sistit, pielonefrit va glomerulonefritda hamshiralik parvarishi. Buyrak xastaligi bor bemorlarning qon bosimini o'lchash va shishlarni baholash. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-20",
      "number": 20,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Siydikni umumiy tahlil uchun to'plash va baholash. Siydikni Zimnitskiy sinamasi va Nechiporenko usuli bo'yicha yig'ish hamda laboratoriya natijalarini baholash qoidalari.",
      "shortDesc": "Siydikni umumiy tahlil, Zimnitskiy va Nechiporenko usulida yig'ish, kunduzgi va tungi diurezni hisoblash.",
      "lecturePdf": "Amaliyat/mavzu20/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Siydikning umumiy tahlili qoidalari",
          "text": "Tashqi jinsiy a'zolarni toza yuvgach, ertalabki siydikning o'rta porsiyasini quruq steril bankaga 50-100 ml hajmda to'plash."
        },
        {
          "title": "2. Nechiporenko sinamasi mohiyati",
          "text": "1 millilitr siydik tarkibidagi shaklli elementlarni (leykotsitlar < 2000, eritrotsitlar < 1000) aniq mikroskopik hisoblash usuli."
        },
        {
          "title": "3. Zimnitskiy sinamasini to'plash tartibi",
          "text": "Sutka davomida har 3 soatda jami 8 ta raqamlangan idishga siydik to'plash, bolaning odatiy suv ichish rejimini saqlash."
        },
        {
          "title": "4. Buyrakning konsentratsiya faoliyatini baholash",
          "text": "Har bir idishdagi siydikning solishtirma og'irligi (zichligi) va miqdorini urometr yordamida tekshirish (1008-1025 oraliqda)."
        },
        {
          "title": "5. Kunduzgi va tungi diurez nisbati",
          "text": "Me'yorda kunduzgi diurez tungi diurezdan 2-3 baravar ko'p bo'lishi lozim; tungi siydikning ko'payishi (nikturiya) patologiyadir."
        }
      ],
      "videoUrl": "Amaliyat/mavzu4/vedio/Гемотрансфузия.mp4",
      "pedTechPdf": "Amaliyat/mavzu4/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu4/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu4/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Siydikni umumiy tahlil uchun to'plash va baholash. Siydikni Zimnitskiy sinamasi va Nechiporenko usuli bo'yicha yig'ish hamda laboratoriya natijalarini baholash qoidalari. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-21",
      "number": 21,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Bolalarda yuqumli kasalliklarda hamshiralik parvarishi. Profilaktik emlashlar milliy taqvimi. Sil (tuberkulyoz) kasalligida balg'am yig'ish texnikasi. Mantu sinamasini o'tkazish va baholash texnikasi.",
      "shortDesc": "Profilaktik emlashlar milliy taqvimi, sil kasalligida balg'am yig'ish, Mantu sinamasini qo'yish va baholash.",
      "lecturePdf": "Amaliyat/mavzu21/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Emlashlar milliy taqvimi va muddatlari",
          "text": "Tug'ruqxonada BSJ va Gepatit B, keyin 2, 3, 4 oylikda Pentavaksin, 1 yoshda KPK vaksinalari bilan rejaviy emlashni amalga oshirish."
        },
        {
          "title": "2. 'Sovuqlik zanjiri' tizimiga rioya qilish",
          "text": "Vaksinalarning biologik faolligini saqlash uchun ularni doimiy ravishda +2 dan +8 В°C gacha bo'lgan haroratda saqlash va tashish."
        },
        {
          "title": "3. Sil kasalligida balg'am yig'ish",
          "text": "Bemor boladan ertalab och qoringa og'izni chaygandan so'ng steril keng og'izli idishga balg'am to'plash va germetik yopish."
        },
        {
          "title": "4. Mantu sinamasini o'tkazish texnikasi",
          "text": "Tuberkulin shpritsi bilan bilak sohasiga 2 TE tuberkulinni qat'iy teri ichiga yuborib, 'limon po'sti' ko'rinishidagi oqish papula hosil qilish."
        },
        {
          "title": "5. Natijani 72 soatdan so'ng baholash",
          "text": "Shpatel yoki shaffof millimetrli chizg'ich yordamida faqat hosil bo'lgan infiltrat (papula) ning ko'ndalang o'lchamini o'lchash."
        }
      ],
      "videoUrl": "Amaliyat/mavzu5/vedio/Десмургия.mp4",
      "pedTechPdf": "Amaliyat/mavzu5/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu5/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu5/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Bolalarda yuqumli kasalliklarda hamshiralik parvarishi. Profilaktik emlashlar milliy taqvimi. Sil (tuberkulyoz) kasalligida balg'am yig'ish texnikasi. Mantu sinamasini o'tkazish va baholash texnikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-22",
      "number": 22,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "O'tkir respirator virusli infeksiyalarda (O'RVI, gripp) hamshiralik parvarishi. Burun-halqumdan bakterilogik tekshiruvga surtma olish texnikasi. Yuqori harorat va talvasa (sudorgi) holatlarida shoshilinch yordam.",
      "shortDesc": "O'RVI va grippda burun-halqumdan surtma olish, gipertermiya va febril talvasada (sudorgi) shoshilinch yordam.",
      "lecturePdf": "Amaliyat/mavzu22/maruza/maruza.html",
      "slides": [
        {
          "title": "1. O'RVI va grippning o'tkir belgilari",
          "text": "Yuqori tana harorati, bosh og'rig'i, burun bitishi, aksirish, quruq yo'tal va butun a'zoyi badanning qaqshab og'rishi."
        },
        {
          "title": "2. Burun va halqumdan surtma olish",
          "text": "Steril paxtali tampon bilan burun tubidan va halqum orqa devoridan shilliq qavatga tekkizib surtma olish va probirkaga solish."
        },
        {
          "title": "3. Yuqori haroratda jismoniy sovutish",
          "text": "Bolaning kiyimlarini yengillashtirish, peshonasiga sovuq mato qo'yish va tanasini xona haroratidagi iliq suv bilan artish."
        },
        {
          "title": "4. Febril talvasada (sudorgi) birinchi yordam",
          "text": "Bolani qattiq tekis joyga yonbosh yotqizish, boshini ushlab turish, nafas yo'llarini ochish va jarohatlanishdan himoyalash."
        },
        {
          "title": "5. Medikamentoz yordam va parvarish",
          "text": "Shifokor ko'rsatmasiga binoan paratsetamol yoki ibuprofen shamchalarini kiritish hamda tinchlantiruvchi vositalarni qo'llash."
        }
      ],
      "videoUrl": "Amaliyat/mavzu6/vedio/Жгут.mp4",
      "pedTechPdf": "Amaliyat/mavzu6/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu6/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu6/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "O'tkir respirator virusli infeksiyalarda (O'RVI, gripp) hamshiralik parvarishi. Burun-halqumdan bakterilogik tekshiruvga surtma olish texnikasi. Yuqori harorat va talvasa (sudorgi) holatlarida shoshilinch yordam. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-23",
      "number": 23,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Difteriya, ko'kyo'tal va epidemik parotit kasalliklarida hamshiralik parvarishi. Borde-Jangu tayoqchasiga tekshirish uchun material olish. Quloq oldi sohasiga kompress qo'yish texnikasi.",
      "shortDesc": "Difteriya, ko'kyo'tal va epidemik parotitda Borde-Jangu tahlili, so'lak bezlariga kompress va qat'iy izolyatsiya.",
      "lecturePdf": "Amaliyat/mavzu23/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Difteriyaning xavfli jihatlari",
          "text": "Tomoqda kulrang, qalin, shpatel bilan qiyin ajraladigan fibroz karashlar va hiqildoq stenozi (krup) natijasida bo'g'ilish xavfi."
        },
        {
          "title": "2. Bakteriologik tekshiruvga material olish",
          "text": "Difteriya tayoqchasi (Loffler) va ko'kyo'tal tayoqchasiga och qoringa orqa halqum sohasidan surtma olib, darhol laboratoriyaga yuborish."
        },
        {
          "title": "3. Ko'kyo'tal xurujlarida yordam",
          "text": "Daqiqasiga ketma-ket takrorlanuvchi spastik yo'tal reprizlarida bolani tik tutish, toza salqin nam havo bilan ta'minlash."
        },
        {
          "title": "4. Epidemik parotitda quloq oldi bezi parvarishi",
          "text": "Kattalashgan quloq oldi so'lak bezlariga quruq issiq doka yoki yarim spirtli isituvchi kompress qo'yish va og'izni chayish."
        },
        {
          "title": "5. Qat'iy izolyatsiya va karantin choralari",
          "text": "Bemorlarni alohida xonaga izolyatsiyalash, idish-tovoqlarni qaynatib dezinfeksiyalash va muloqotdagilarni kuzatish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu7/vedio/Иммобилизация.mp4",
      "pedTechPdf": "Amaliyat/mavzu7/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu7/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu7/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Difteriya, ko'kyo'tal va epidemik parotit kasalliklarida hamshiralik parvarishi. Borde-Jangu tayoqchasiga tekshirish uchun material olish. Quloq oldi sohasiga kompress qo'yish texnikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-24",
      "number": 24,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Qizamiq, qizilcha, skarlatina va suvchechak kasalliklarida hamshiralik parvarishi. Teri va shilliq qavatlarga mahalliy ishlov berish. Konyunktivitda ko'zlarni yuvish. Bemor bolaga parhez buyurish.",
      "shortDesc": "Qizamiq, qizilcha, skarlatina va suvchechakda teriga ishlov berish, konyunktivitda ko'zni yuvish va parhez.",
      "lecturePdf": "Amaliyat/mavzu24/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Bolalar ekzantemali infeksiyalari",
          "text": "Qizamiq, qizilcha, skarlatina va suvchechak kasalliklarida toshmalarning shakli, tarqalish ketma-ketligi va o'ziga xos xususiyatlari."
        },
        {
          "title": "2. Qizamiqda kataral davr va parvarish",
          "text": "Yorug'likdan qo'rqish (fotofobiya) kuzatilganda xonani qorong'ilashtirish, ko'zlarni furatsilin eritmasi bilan yuvish."
        },
        {
          "title": "3. Suvchechak pufakchalariga ishlov berish",
          "text": "Teridagi vezikulalarni 1% li brilliant yashili ('zelyonka') eritmasi bilan nuqtali artib chiqish va ikkilamchi infeksiyadan asrash."
        },
        {
          "title": "4. Skarlatinada tomoq va til parvarishi",
          "text": "'Malinasimon til' va tomoq og'rig'ida iliq antiseptik eritmalar bilan g'arg'ara qildirish, yumshoq yengil taomlar berish."
        },
        {
          "title": "5. Bemor parvarishidagi xavfsizlik choralari",
          "text": "Bemorning ichki kiyimlarini har kuni almashtirish, dazmollash va xonani doimiy ravishda namli tozalashdan o'tkazish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu8/vedio/Клизма.mp4",
      "pedTechPdf": "Amaliyat/mavzu8/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu8/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu8/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Qizamiq, qizilcha, skarlatina va suvchechak kasalliklarida hamshiralik parvarishi. Teri va shilliq qavatlarga mahalliy ishlov berish. Konyunktivitda ko'zlarni yuvish. Bemor bolaga parhez buyurish. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-25",
      "number": 25,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Yuqumli ichak kasalliklarida (dizenteriya, salmonellyoz, esxerixioz) hamshiralik parvarishi. Og'iz orqali oral regidratsiya o'tkazish (Regidron). Meteorizm va qusganda birinchi yordam. Bakteriologik tekshiruvga najas olish texnikasi.",
      "shortDesc": "Yuqumli ichak kasalliklarida oral regidratsiya (Regidron) o'tkazish, degidratatsiyani baholash va najas olish.",
      "lecturePdf": "Amaliyat/mavzu25/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Yuqumli ichak kasalliklari belgilari",
          "text": "Dizenteriya, salmonellyoz va esxerixiozda tana harorati ko'tarilishi, qorinda to'lg'oqsimon og'riq, ko'p marta suyuq axlat va qusish."
        },
        {
          "title": "2. Oral regidratsiya terapiyasi (Regidron)",
          "text": "Yo'qotilgan suv va tuzlarni tiklash uchun 1 paket Regidronni 1 litr qaynatilgan suvda eritib, bolaga oz-ozdan ichirish."
        },
        {
          "title": "3. Ichirish texnikasi va sabr-toqat",
          "text": "Qusishni qo'zg'atmaslik maqsadida eritmani har 5-10 daqiqada 1 choy yoki desert qoshiqdan uzluksiz ichirib borish."
        },
        {
          "title": "4. Rektal qoshiqcha bilan najas olish",
          "text": "Bakteriologik ekma uchun bolaning orqa chiqaruv yo'liga steril rektal qoshiqchani 3-4 sm kiritib, shilliqli najas namunasini olish."
        },
        {
          "title": "5. Degidratatsiya darajasini monitoring qilish",
          "text": "Terining turgori, katta liqildoqning cho'kishi, ko'z yoshi borligi va diurez miqdorini doimiy kuzatib borish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu9/vedio/Капли.mp4",
      "pedTechPdf": "Amaliyat/mavzu9/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu9/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu9/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Yuqumli ichak kasalliklarida (dizenteriya, salmonellyoz, esxerixioz) hamshiralik parvarishi. Og'iz orqali oral regidratsiya o'tkazish (Regidron). Meteorizm va qusganda birinchi yordam. Bakteriologik tekshiruvga najas olish texnikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-26",
      "number": 26,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Bolalar virusli gepatitlari (A, B, C) va OIV-infeksiyasida hamshiralik parvarishi. Qonni serologik va immunologik tekshiruvga olish hamda laboratoriyaga yuborish. Tibbiy xavfsizlik qoidalari.",
      "shortDesc": "Virusli gepatitlar va OIV-infeksiyasida serologik tahlilga qon olish, shaxsiy himoya va tibbiy xavfsizlik.",
      "lecturePdf": "Amaliyat/mavzu26/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Gepatit va OIV ning yuqish yo'llari",
          "text": "Gepatit A oziq-ovqat va suv orqali; Gepatit B, C va OIV parenteral muolajalar, nosteril tibbiy asboblar va qon orqali yuqishi."
        },
        {
          "title": "2. Sariqlik davridagi o'zgarishlar",
          "text": "Ko'z sklerasi va terining sarg'ayishi, siydikning to'q qo'ng'ir ('pivo rangi') bo'lishi va najasning oqarib ketishini aniqlash."
        },
        {
          "title": "3. Qon olishda shaxsiy himoyalanish",
          "text": "Har bir parenteral muolajada steril rezina qo'lqop, niqob va himoya ko'zoynaklaridan foydalanish hamda asboblarni to'g'ri tashlash."
        },
        {
          "title": "4. 'Avariya holati' bo'yicha profilaktika",
          "text": "Tasodifiy nina sanchilganda qo'lqopni yechish, qonni siqib chiqarish, sovunlab yuvish va 70% li spirt hamda yod bilan ishlov berish."
        },
        {
          "title": "5. Gepatobilinar tizimni asrovchi parhez",
          "text": "Qovurilgan, yog'li, achchiq mahsulotlarni qat'iy taqiqlab, yengil hazm bo'luvchi parhez taomlar (stol в„–5) berish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu10/vedio/Педиатрия.mp4",
      "pedTechPdf": "Amaliyat/mavzu10/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu10/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu10/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Bolalar virusli gepatitlari (A, B, C) va OIV-infeksiyasida hamshiralik parvarishi. Qonni serologik va immunologik tekshiruvga olish hamda laboratoriyaga yuborish. Tibbiy xavfsizlik qoidalari. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-27",
      "number": 27,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Kechiktirib bo'lmaydigan og'ir holatlarda bola va uning oila a'zolariga hamshiralik parvarishi. Shok va komatoz holatlarda bolaga shifokorgacha shoshilinch birinchi yordam ko'rsatish algoritmi.",
      "shortDesc": "Shok va komalarda shifokorgacha tezkor yordam, periferik qon aylanishini va hush darajasini baholash.",
      "lecturePdf": "Amaliyat/mavzu27/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Kechiktirib bo'lmaydigan holatlar tushunchasi",
          "text": "Shok, koma va kollaps bolaning hayotiy a'zolari (yurak, miya, o'pka) faoliyatining keskin buzilishi bo'lib, zudlik bilan yordam talab etadi."
        },
        {
          "title": "2. Bemorning hayotiy belgilarini baholash",
          "text": "Hushning holati, qorachiqlarning yorug'likka reaksiyasi, nafas chastotasi, pulsning to'liqligi va arterial qon bosimini tekshirish."
        },
        {
          "title": "3. 'Oq dog'' simptomini aniqlash",
          "text": "Tirnoq plastinkasini 5 soniya bosib qo'yib yuborilganda pushti rangning 2 soniyadan kech tiklanishi mikrosirkulyatsiya falajidan dalolat beradi."
        },
        {
          "title": "4. Periferik venani zudlik bilan kateterlash",
          "text": "Shok holatida infuzion eritmalarni (fiziologik eritma, Ringer) tomir ichiga uzluksiz yuborish uchun ishonchli venoz yo'l ochish."
        },
        {
          "title": "5. Shoshilinch reanimatsiya brigadasini chaqirish",
          "text": "Bemor yonidan ketmagan holda shifokor va reanimatologni chaqirish, buyurilgan preparatlarni tezkor tayyorlab turish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu11/vedio/Гинекология.mp4",
      "pedTechPdf": "Amaliyat/mavzu11/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu11/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu11/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Kechiktirib bo'lmaydigan og'ir holatlarda bola va uning oila a'zolariga hamshiralik parvarishi. Shok va komatoz holatlarda bolaga shifokorgacha shoshilinch birinchi yordam ko'rsatish algoritmi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-28",
      "number": 28,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "O'tkir nafas va yurak qon-tomir yetishmovchiligida bolaga shoshilinch reanimatsion yordam ko'rsatish. Sun'iy nafas berish (og'izdan-og'izga/Ambu qopi). Yurakni bilvosita (tashqi) massaj qilish texnikasi.",
      "shortDesc": "Klinik o'limda reanimatsiya: havo yo'llarini ochish, sun'iy nafas (Ambu qopi) va yurakni yopiq massaj qilish.",
      "lecturePdf": "Amaliyat/mavzu28/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Klinik o'lim belgilari va diagnostika",
          "text": "Hushning yo'qligi, uyqu yoki son arteriyasida pulsning sezilmasligi va ko'krak qafasining nafas harakatlari to'xtashi."
        },
        {
          "title": "2. Nafas yo'llari o'tkazuvchanligini ta'minlash",
          "text": "Safar uchligi: boshni orqaga engashtirish, pastki jag'ni oldinga-yuqoriga surish va og'iz bo'shlig'idagi yot suyuqliklarni tozalash."
        },
        {
          "title": "3. Yurakni bilvosita (yopiq) massaj qilish",
          "text": "Ko'krak suyagining pastki uchligiga bolaning yoshiga qarab 1 yoki 2 qo'l kafti bilan to'sh suyagini 4-5 sm chuqurlikda ezish (1 daqiqada 100-120 marta)."
        },
        {
          "title": "4. Ambu qopi orqali sun'iy shamollatish",
          "text": "Germetik niqobni yuzga 'C-E' usulida mahkamlab, har 30 ta ko'krak kompressiyasidan so'ng 2 marta o'pkaga havo haydash (30:2 nisbat)."
        },
        {
          "title": "5. Reanimatsiya samaradorligini baholash",
          "text": "Qorachiqlarning torayishi, uyqu arteriyasida puls paydo bo'lishi, terining pushtirang tusga kirishi va mustaqil nafasning tiklanishi."
        }
      ],
      "videoUrl": "Amaliyat/mavzu12/vedio/Предоперационная.mp4",
      "pedTechPdf": "Amaliyat/mavzu12/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu12/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu12/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "O'tkir nafas va yurak qon-tomir yetishmovchiligida bolaga shoshilinch reanimatsion yordam ko'rsatish. Sun'iy nafas berish (og'izdan-og'izga/Ambu qopi). Yurakni bilvosita (tashqi) massaj qilish texnikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-29",
      "number": 29,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Gipo- va giperglikemik komada bolaga kechiktirib bo'lmaydigan yordam ko'rsatish. Uremik va jigar komasida bolaga shifokorgacha tezkor yordam ko'rsatish.",
      "shortDesc": "Gipo- va giperglikemik, uremik va jigar komasida shifokorgacha kechiktirib bo'lmaydigan tezkor parvarish.",
      "lecturePdf": "Amaliyat/mavzu29/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Gipoglikemik komada birinchi yordam",
          "text": "Qondagi qand keskin pasayganda hushsiz bolaga darhol venaga 20-40% li sterillangan glyukoza eritmasini oqim bilan yuborish."
        },
        {
          "title": "2. Giperglikemik (ketoatsidotik) koma",
          "text": "Nafasda atseton hidi, terining quruqligi, ko'z soqqalarining yumshashida tomir ichiga qisqa ta'sirli insulin va infuziya yuborish."
        },
        {
          "title": "3. Uremik komada shoshilinch taktika",
          "text": "Buyrak yetishmovchiligida siydik ajralishi to'xtab, qonda mochevina oshganda oshqozonni yuvish va zudlik bilan gemodializga tayyorlash."
        },
        {
          "title": "4. Jigar komasida yordam ko'rsatish",
          "text": "Jigar yetishmovchiligi intoksikatsiyasida tozalovchi klizmalar qilish, laktuloza berish va miya shishini oldini oluvchi dorilar qo'llash."
        },
        {
          "title": "5. Bemorni uzluksiz nazorat qilish",
          "text": "Koma holatidagi bolani qat'iy yonbosh yotqizish, qusiq aspiratsiyasiga yo'l qo'ymaslik va monitor orqali SpO2 va EKGni kuzatish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu13/vedio/Послеоперационная.mp4",
      "pedTechPdf": "Amaliyat/mavzu13/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu13/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu13/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Gipo- va giperglikemik komada bolaga kechiktirib bo'lmaydigan yordam ko'rsatish. Uremik va jigar komasida bolaga shifokorgacha tezkor yordam ko'rsatish. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-30",
      "number": 30,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Gipertermiya va talvasa (sudorgi) sindromida bola va oilasiga hamshiralik parvarishi. Harorat o'lchash texnikasi. Tana haroratini tushirishning fizikaviy va medikamentoz algoritmlari.",
      "shortDesc": "Qizil va oq gipertermiya, talvasa (sudorgi) sindromida haroratni tushirishning fizik va dori vositalari.",
      "lecturePdf": "Amaliyat/mavzu30/maruza/maruza.html",
      "slides": [
        {
          "title": "1. 'Qizil' va 'oq' gipertermiya farqlari",
          "text": "Qizil gipertermiyada teri qizargan, issiq va nam; oq gipertermiyada esa yuqori haroratda ham qo'l-oyoqlar muzdek, oqargan va qaltirash kuzatiladi."
        },
        {
          "title": "2. Qizil gipertermiyada fizik sovutish",
          "text": "Bolani yechintirish, peshona va bo'yin sohasiga sovuq mato qo'yish, butun tanasini 36-37 В°C li suv bilan namlangan dokada artish."
        },
        {
          "title": "3. Oq gipertermiyada shoshilinch yordam",
          "text": "Periferik tomirlar spazmini yechish uchun qo'l-oyoqlarni uqalab isitish, paypoq kiygizish va no-shpa kabi spazmolitiklarni berish."
        },
        {
          "title": "4. Medikamentoz harorat tushirish",
          "text": "Tana harorati 38.5 В°C dan oshganda paratsetamol (15 mg/kg) yoki ibuprofen (10 mg/kg) dozasini yoshiga qarab to'g'ri berish."
        },
        {
          "title": "5. Talvasa (sudorgi) sindromida parvarish",
          "text": "Bolaning tishlari orasiga yumshoq mato qo'yish (tilni tishlamaslik uchun), yonbosh yotqizish va antikonvulsant dorilar yuborish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu14/vedio/Реанимация.mp4",
      "pedTechPdf": "Amaliyat/mavzu14/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu14/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu14/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Gipertermiya va talvasa (sudorgi) sindromida bola va oilasiga hamshiralik parvarishi. Harorat o'lchash texnikasi. Tana haroratini tushirishning fizikaviy va medikamentoz algoritmlari. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-31",
      "number": 31,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Allergik kasalliklar: eshakem (krapivnitsa) va allergik atopik dermatitda bolaga hamshiralik parvarishi. Allergiyaga qarshi gipoallergen parhez va terini parvarishlash.",
      "shortDesc": "Eshakem (krapivnitsa) va atopik dermatitda terini emolyentlar bilan parvarishlash va gipoallergen parhez.",
      "lecturePdf": "Amaliyat/mavzu31/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Eshakem (krapivnitsa) klinik belgilari",
          "text": "Terida to'satdan paydo bo'luvchi qizil, shishgan, kuchli qichuvchi pufakchalar (chaqirtikan chaqqanga o'xshash toshmalar)."
        },
        {
          "title": "2. Atopik dermatit va quruq teri parvarishi",
          "text": "Tirsak va tizza bukilmalarida terining quruqlashishi, qipiqlanishi va qichishishida maxsus namlantiruvchi emolyent kremlardan foydalanish."
        },
        {
          "title": "3. Qat'iy gipoallergen parhez",
          "text": "Sitrus mevalar, shokolad, tuxum, yong'oq, qulupnay, sun'iy rang va konservantlar qo'shilgan oziq-ovqatlarni taqiqlash."
        },
        {
          "title": "4. Antigistamin vositalarini qo'llash",
          "text": "Qichishish va allergik yallig'lanishni kamaytirish maqsadida shifokor tayinlagan zamonaviy antigistamin tomchilarini berish."
        },
        {
          "title": "5. Kiyim va gigiyenaga qo'yiladigan talablar",
          "text": "Bolaga faqat tabiiy paxta matosidan kiyimlar kiydirish, kir yuvishda gipoallergen bolalar kukunlaridan foydalanish va tirnoqlarini olish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu15/vedio/СЛР.mp4",
      "pedTechPdf": "Amaliyat/mavzu15/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu15/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu15/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Allergik kasalliklar: eshakem (krapivnitsa) va allergik atopik dermatitda bolaga hamshiralik parvarishi. Allergiyaga qarshi gipoallergen parhez va terini parvarishlash. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-32",
      "number": 32,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Travmalar, suyak sinishi, chiqishi, kuyish va sovuq urish holatlarida bolalarga shifokorgacha birinchi tibbiy yordam ko'rsatish. Transport immobilizatsiyasi va steril bog'lamlar qo'yish texnikasi.",
      "shortDesc": "Travmalar, suyak sinishi, chiqishi, kuyish va sovuq urishda shinalash, steril bog'lam va birinchi yordam.",
      "lecturePdf": "Amaliyat/mavzu32/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Suyak sinishi va chiqishini aniqlash",
          "text": "Shikastlangan sohada kuchli og'riq, shish, patologik qiyshayish, a'zodan foydalana olmaslik va suyak krepitatsiyasi."
        },
        {
          "title": "2. Kramer shinasi bilan transport immobilizatsiyasi",
          "text": "Sinish sohasiga qo'shni kamida ikkita bo'g'imni qamragan holda shinani yumshoq paxta bilan o'rab, oyoq yoki qo'lga bog'lab fiksatsiya qilish."
        },
        {
          "title": "3. Termik kuyishlarda shoshilinch yordam",
          "text": "Kuygan sohani darhol 15-20 daqiqa oqar sovuq suv ostida sovutish, pufakchalarni yormaslik va ustiga quruq steril bog'lam qo'yish."
        },
        {
          "title": "4. Sovuq urishda birinchi yordam",
          "text": "Bolani issiq xonaga kiritish, sovuq urgan sohani qor bilan ishqalamaslik, asta-sekin isituvchi quruq bog'lam qo'yish va issiq choy ichirish."
        },
        {
          "title": "5. Og'riqsizlantirish va xavfsiz transportirovka",
          "text": "Travmatik shokning oldini olish uchun og'riqsizlantiruvchi vosita berish va bolani zambilda ehtiyotkorlik bilan shifoxonaga yetkazish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu16/vedio/Констатация.mp4",
      "pedTechPdf": "Amaliyat/mavzu16/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu16/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu16/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Travmalar, suyak sinishi, chiqishi, kuyish va sovuq urish holatlarida bolalarga shifokorgacha birinchi tibbiy yordam ko'rsatish. Transport immobilizatsiyasi va steril bog'lamlar qo'yish texnikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "amaliy-33",
      "number": 33,
      "category": "amaliy",
      "categoryName": "Amaliy mashg'ulot",
      "title": "Bolalarda o'tkir zaharlanishlar (dori vositalari, maishiy kimyo moddalari) da kechiktirib bo'lmaydigan hamshiralik taktikasi. Zond yordamida oshqozonni yuvish texnikasi va enterosorbentlar qo'llash.",
      "shortDesc": "O'tkir zaharlanishlarda oshqozonni zond yordamida yuvish, enterosorbentlar qo'llash va shoshilinch taktika.",
      "lecturePdf": "Amaliyat/mavzu33/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Bolalarda o'tkir zaharlanish sabablari",
          "text": "Uy sharoitida ochiq qoldirilgan dori vositalari, maishiy kimyo moddalari (sirka kislotasi, xlor), zaharli o'simlik va zamburug'larni yeb qo'yish."
        },
        {
          "title": "2. Qabul qilingan zaharni aniqlash",
          "text": "Bolaning atrofiga qarash, bo'shagan dori qadoqlarini yoki kimyoviy idishlarni topish va darhol shifokorga ko'rsatish uchun saqlab qo'yish."
        },
        {
          "title": "3. Oshqozonni zond orqali yuvish texnikasi",
          "text": "Koma holatida bo'lmagan bolaga zond orqali xona haroratidagi toza suv yuborib, 'toza chayindi suvlari' hosil bo'lguncha qayta-qayta yuvish."
        },
        {
          "title": "4. Enterosorbentlarni zudlik bilan qo'llash",
          "text": "Oshqozon-ichakdagi qolgan zaharlarni o'ziga bog'lab olish uchun faollashtirilgan ko'mir (1 g/kg), Polisorb yoki Smektani suvda ezib ichirish."
        },
        {
          "title": "5. Shoshilinch gospitalizatsiya va infuziya",
          "text": "Zahar organizmdan tezroq chiqib ketishi uchun venaga infuzion suyuqliklar yuborish va bolani toksikologiya bo'limiga yetkazish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu1/vedio/Антропометрия.mp4",
      "pedTechPdf": "Amaliyat/mavzu1/pedtex/ped  texnologiya.pdf",
      "visualPdf": "Amaliyat/mavzu1/vizual/vizual didaktik resurs.pdf",
      "glossaryPdf": "Amaliyat/mavzu1/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Bolalarda o'tkir zaharlanishlar (dori vositalari, maishiy kimyo moddalari) da kechiktirib bo'lmaydigan hamshiralik taktikasi. Zond yordamida oshqozonni yuvish texnikasi va enterosorbentlar qo'llash. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    }
  ],
  "theoreticalTopics": [
    {
      "id": "nazariy-1",
      "number": 1,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Pediatriyaning rivojlanish tarixi. Bolalarning jismoniy rivojlanishini monitoring qilish va baholash mezonlari.",
      "shortDesc": "Pediatriyaning rivojlanish tarixi, tibbiy ta'limotlar, bolalik davrlari va jismoniy rivojlanish monitoringi nazariyasi.",
      "lecturePdf": "Teoriya/mavzu1/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Pediatriya fanining predmeti va maqsadi",
          "text": "Pediatriya bolaning tug'ilganidan to balog'at yoshigacha bo'lgan davrdagi sog'lig'i, o'sishi, kasalliklari va parvarishini o'rganuvchi fan."
        },
        {
          "title": "2. Tarixiy bosqichlar va allomalar ta'limoti",
          "text": "Abu Ali ibn Sino va Florens Naytingeyl ta'limotlari asosida shakllangan bolalarni gigiyenik parvarishlash va parhez tamoyillari."
        },
        {
          "title": "3. Bolalik davrlarining davriy tasnifi",
          "text": "Homila ichi davri, neonatal davr (0-28 kun), go'daklik (1 yoshgacha), maktabgacha va maktab davrlarining o'ziga xos xususiyatlari."
        },
        {
          "title": "4. Jismoniy rivojlanish monitoringi",
          "text": "Bo'y, tana vazni va tana a'zolari proporsiyalarini muntazam kuzatish orqali organizmning uyg'un o'sishini baholash."
        },
        {
          "title": "5. Profilaktik patronajning o'rni",
          "text": "Birlamchi bo'g'in hamshirasining oilalarda o'tkazadigan patronaj ko'riklari sog'lom avlodni voyaga yetkazishning poydevoridir."
        }
      ],
      "videoUrl": "Teoriya/mavzu1/vedio/video_2023-10-25_17-29-07.mp4",
      "pedTechPdf": "Teoriya/mavzu1/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu1/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu1/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Pediatriyaning rivojlanish tarixi. Bolalarning jismoniy rivojlanishini monitoring qilish va baholash mezonlari. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-2",
      "number": 2,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Bola organizmining anatomik-fiziologik xususiyatlari. Teri, suyak, mushak, nerv tizimi, sezgi a'zolari va ichki sekretsiya bezlarining tuzilishi hamda yoshga doir o'ziga xosliklari.",
      "shortDesc": "Bola organizmining anatomik-fiziologik xususiyatlari: teri, suyak, nerv, mushak va endokrin tizimlarining o'ziga xosligi.",
      "lecturePdf": "Teoriya/mavzu2/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Teri va teri osti kletchatkasi",
          "text": "Chaqaloq terisining nozikligi, qon tomirlariga boyligi, tez nafas olish va tashqi moddalarni tez so'rib olish xususiyati."
        },
        {
          "title": "2. Suyak to'qimasi va liqildoqlar",
          "text": "Bolalar suyaklarining egiluvchanligi, kalsiyga boyish jarayoni va katta liqildoqning 12-18 oylikda to'liq yopilishi."
        },
        {
          "title": "3. Mushak tizimi va harakat faolligi",
          "text": "Yangi tug'ilgan davrda fiziologik mushak gipertonusi, keyinchalik boshni tutish, o'tirish va yurish ko'nikmalarining shakllanishi."
        },
        {
          "title": "4. Asab tizimining shakllanishi",
          "text": "Miya po'stlog'ining tez rivojlanishi, shartsiz tug'ma reflekslar va tashqi muhit stimullariga nisbatan reaksiyalar."
        },
        {
          "title": "5. Endokrin bezlarning regulyatsiyasi",
          "text": "Gipofiz, qalqonsimon bez va buyrak usti bezlarining jismoniy o'sish hamda moddalar almashinuvidagi yetakchi o'rni."
        }
      ],
      "pedTechPdf": "Teoriya/mavzu2/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu2/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu2/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Bola organizmining anatomik-fiziologik xususiyatlari. Teri, suyak, mushak, nerv tizimi, sezgi a'zolari va ichki sekretsiya bezlarining tuzilishi hamda yoshga doir o'ziga xosliklari. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-3",
      "number": 3,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Nafas olish, yurak qon-tomir, qon yaratish, ovqat hazm qilish va siydik ajratish a'zolarining anatomik-fiziologik xususiyatlari.",
      "shortDesc": "Nafas olish, yurak qon-tomir, qon yaratish, oshqozon-ichak va buyrak tizimlarining morfologik va funksional yetilishi.",
      "lecturePdf": "Teoriya/mavzu3/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Nafas olish tizimining o'ziga xosligi",
          "text": "Nafas yo'llarining torligi, shilliq qavatning tez shishishi va diafragmal nafas turining ustunligi."
        },
        {
          "title": "2. Yurak qon-tomir tizimi faoliyati",
          "text": "Yurak hajmining nisbatan kattaligi, tomirlar kengligi, qon bosimining pastligi va yuqori puls chastotasi."
        },
        {
          "title": "3. Qon yaratish a'zolari dinamikasi",
          "text": "Qizil suyak iligining faol faoliyati, leykotsitar formulada neytrofillar va limfotsitlarning fiziologik kesishmalari."
        },
        {
          "title": "4. Ovqat hazm qilish tizimi anatomiyasi",
          "text": "Oshqozon sig'imining kichikligi, fermentlar yetishmovchiligi va ichak devorining yuqori o'tkazuvchanligi."
        },
        {
          "title": "5. Siydik ajratish a'zolari xususiyatlari",
          "text": "Buyraklarning konsentratsion faoliyati pastligi, siydik chiqarish kanalining qisqaligi va infeksiyalarga moyillik."
        }
      ],
      "pedTechPdf": "Teoriya/mavzu3/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu3/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu3/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Nafas olish, yurak qon-tomir, qon yaratish, ovqat hazm qilish va siydik ajratish a'zolarining anatomik-fiziologik xususiyatlari. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-4",
      "number": 4,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Neonatologiya fani haqida tushuncha. Yetuk tug'ilgan chaqaloqlarning anatomik-fiziologik xususiyatlari va ularga hamshiralik parvarishi ko'rsatish.",
      "shortDesc": "Neonatologiya asoslari, yetuk chaqaloqlarning belgilari, adaptatsiya davri, fiziologik holatlar va parvarishlash.",
      "lecturePdf": "Teoriya/mavzu4/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Neonatologiya fani vazifalari",
          "text": "Hayotning birinchi 28 kunidagi chaqaloqlar organizmining tashqi muhitga moslashuvi (adaptatsiyasi) va sog'lig'ini muhofaza qilish."
        },
        {
          "title": "2. Yetuklik mezonlari va Apgar shkalasi",
          "text": "Tug'ilganda bolaning yurak urishi, nafas olishi, mushak tonusi, reflektor qo'zg'aluvchanligi va terisining rangini 10 ballik shkalada baholash."
        },
        {
          "title": "3. Chaqaloqning tranzitor fiziologik holatlari",
          "text": "Fiziologik tana vazni yo'qotishi, tranzitor sariqlik, jinsiy kriz va siydik kislotali infarkt jarayonlarining o'z-o'zidan o'tib ketishi."
        },
        {
          "title": "4. Tug'ma shartsiz reflekslar",
          "text": "So'rish, yutish, qidirish, kaft-og'iz (Babkin), tutib olish (Robenson) va Moro reflekslarining mavjudligi sog'lomlik belgisidir."
        },
        {
          "title": "5. Neonatal xavfsizlik va aseptika",
          "text": "Chaqaloqlar xonasida xodimlar gigiyenasi, toza havo harorati va ona-bola birgalikda bo'lishining (palata 'Ona va bola') afzalliklari."
        }
      ],
      "videoUrl": "Teoriya/mavzu4/vedio/Qolqap kiyiw.mp4",
      "pedTechPdf": "Teoriya/mavzu4/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu4/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu4/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Neonatologiya fani haqida tushuncha. Yetuk tug'ilgan chaqaloqlarning anatomik-fiziologik xususiyatlari va ularga hamshiralik parvarishi ko'rsatish. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-5",
      "number": 5,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Chala tug'ilgan chaqaloqlarga hamshiralik parvarishi ko'rsatish. Chala tug'ilish sabablari, etilogiyasi, belgilari, darajalari va maxsus inkubator (kuvez) da parvarishlash tartibi.",
      "shortDesc": "Chala tug'ilganlik sabablari, mezonlari, harorat boshqaruvi, inkubator (kuvez) rejimlari va parvarishlash tamoyillari.",
      "lecturePdf": "Teoriya/mavzu5/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Chala tug'ilish sabablari va darajalari",
          "text": "Ona salomatligidagi patologiyalar, ko'p homilalik va infeksiyalar oqibatida 37 haftagacha va 2500 g dan kam vaznda tug'ilish."
        },
        {
          "title": "2. Chala tug'ilgan chaqaloq morfologiyasi",
          "text": "Terisi qizil, ajinli, lanugo (mayin tuklar) bilan qoplangan, quloq supralari yumshoq, tirnoqlari barmoq uchiga yetmagan bo'ladi."
        },
        {
          "title": "3. Fiziologik funksiyalarning yetilmaganligi",
          "text": "Termoregulyatsiya markazining nomukammalligi, nafasning davriy to'xtab qolishi (apnoe) va so'rish refleksining zaifligi."
        },
        {
          "title": "4. Kuvezda optimal mikroklimat yaratish",
          "text": "Avtomatlashtirilgan inkubatorlarda tana haroratiga mos 34-36 В°C issiqlik, namlik va kislorod konsentratsiyasini uzluksiz boshqarish."
        },
        {
          "title": "5. Oziqlantirish va parvarishlash strategiyasi",
          "text": "Ona suti bilan individual me'yorda zond orqali oziqlantirish, tashqi shovqin va yorug'likdan to'liq asrash (himoya muhiti)."
        }
      ],
      "videoUrl": "Teoriya/mavzu5/vedio/video_2023-10-15_17-33-37.mp4",
      "pedTechPdf": "Teoriya/mavzu5/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu5/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu5/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Chala tug'ilgan chaqaloqlarga hamshiralik parvarishi ko'rsatish. Chala tug'ilish sabablari, etilogiyasi, belgilari, darajalari va maxsus inkubator (kuvez) da parvarishlash tartibi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-6",
      "number": 6,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Bolalarni ratsional ovqatlantirish nazariyasi. Tabiiy, aralash va sun'iy ovqatlantirish. Ona sutining biologik va immunologik afzalliklari.",
      "shortDesc": "Bolalarni ratsional ovqatlantirish nazariyasi: ona suti afzalliklari, tabiiy, aralash va sun'iy oziqlantirish qoidalari.",
      "lecturePdf": "Teoriya/mavzu6/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Ratsional ovqatlantirishning mohiyati",
          "text": "Bolaning yoshiga, metabolizmiga mos keluvchi ozuqa moddalarini o'z vaqtida va mutanosib miqdorda berish nazariyasi."
        },
        {
          "title": "2. Ona sutining biologik ustunligi",
          "text": "Ona suti tarkibida oson so'riluvchi zardob oqsillari, taurin, to'yinmagan yog' kislotalari va sekretor IgA mavjud bo'lib, immunitetni ta'minlaydi."
        },
        {
          "title": "3. Aralash oziqlantirish qoidalari",
          "text": "Ko'krak suti kam bo'lganda avval ko'krakni emizish, so'ngra yetishmagan miqdorni qoshiqcha bilan sutli aralashma orqali to'ldirish."
        },
        {
          "title": "4. Sun'iy oziqlantirish prinsiplari",
          "text": "Sun'iy ovqatlantirishda go'dakning yoshiga qat'iy mos keladigan adaptatsiyalangan aralashmalarni sutkalik rejimda tayyorlab berish."
        },
        {
          "title": "5. Qo'shimcha ovqatlarni (prikorm) kiritish",
          "text": "6 oylikdan boshlab ona suti bilan birga meva, sabzavot, bo'tqa va go'sht mahsulotlarini bosqichma-bosqich ratsionga qo'shish."
        }
      ],
      "videoUrl": "Teoriya/mavzu6/vedio/\"Shaxsiy gigiyena\".mp4",
      "pedTechPdf": "Teoriya/mavzu6/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu6/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu6/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Bolalarni ratsional ovqatlantirish nazariyasi. Tabiiy, aralash va sun'iy ovqatlantirish. Ona sutining biologik va immunologik afzalliklari. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-7",
      "number": 7,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Chaqaloqlik davri kasalliklarida hamshiralik parvarishi. Chaqaloqlar asfiksiyasi, tug'ruq jarohatlari, chaqaloqlar gemolitik kasalligining etiopatogenezi va klinikasi.",
      "shortDesc": "Perinatal gipoksiya, chaqaloqlar asfiksiyasi, tug'ruq jarohatlari va chaqaloqlar gemolitik kasalligi (ChGK) etiopatogenezi.",
      "lecturePdf": "Teoriya/mavzu7/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Perinatal gipoksiya va asfiksiya",
          "text": "Homilaning kindik tizimchasi qisilib qolishi yoki yo'ldosh ko'chishi natijasida kislorod yetishmasligi va asfiksiya patogenezi."
        },
        {
          "title": "2. Tug'ruq jarohatlarining turlari",
          "text": "Miya ichi qon quyilishlari, kefalogematoma, o'mrov suyagi sinishi va yelka chigali falajliklari (Dyushen-Erb falaji)."
        },
        {
          "title": "3. Chaqaloqlar gemolitik kasalligi (ChGK)",
          "text": "Ona va homila qonining rezus-omil yoki qon guruhlari bo'yicha mos kelmasligi sababli antitelolar hosil bo'lishi va eritrotsitlar gemolizi."
        },
        {
          "title": "4. Bilirubin intoksikatsiyasi xavfi",
          "text": "Qonda erkin bilirubinning keskin ko'payishi miyaning po'stloq osti yadrolariga toksik ta'sir ko'rsatib, yadroviy sariqlik keltirib chiqaradi."
        },
        {
          "title": "5. Perinatal patologiyalarda hamshira roli",
          "text": "Chaqaloqning nevrologik holatini, terining rangi va hayotiy funksiyalarini doimiy baholash hamda davolash muolajalarini bajarish."
        }
      ],
      "videoUrl": "Teoriya/mavzu7/vedio/\"Shaxsiy gigiyena\".mp4",
      "pedTechPdf": "Teoriya/mavzu7/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu7/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu7/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Chaqaloqlik davri kasalliklarida hamshiralik parvarishi. Chaqaloqlar asfiksiyasi, tug'ruq jarohatlari, chaqaloqlar gemolitik kasalligining etiopatogenezi va klinikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-8",
      "number": 8,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Chaqaloqlarda teri va kindik kasalliklari (omfalit, piodermiya), chaqaloqlar sepsisi, pnevmopatiyasi hamda to'satdan o'lim sindromida hamshiralik parvarishi.",
      "shortDesc": "Chaqaloqlarda omfalit, piodermiya, neonatal sepsis, pnevmopatiya va to'satdan o'lim sindromi xavf omillari.",
      "lecturePdf": "Teoriya/mavzu8/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Kindik yarasi kasalliklari: omfalit",
          "text": "Stafilokokk va streptokokklar ta'sirida kindik sohasining kataral, flegmonoz yoki nekrotik yallig'lanishi va uning davosi."
        },
        {
          "title": "2. Teri kasalliklari: piodermiyalar",
          "text": "Vesikulopustulyoz, chaqaloqlar pufakchali toshmasi (pemfigus) va Ritter eksfoliativ dermatiti rivojlanish mexanizmi."
        },
        {
          "title": "3. Chaqaloqlar sepsisi etiopatogenezi",
          "text": "Infeksiya darvozalari (kindik, teri) orqali bakteriyalarning qon oqimiga tarqalishi va ko'p a'zoli yetishmovchilik yuzaga kelishi."
        },
        {
          "title": "4. Chaqaloqlar pnevmopatiyasi va RDS",
          "text": "O'pkada surfaktant moddasining yetishmasligi oqibatida atelektazlar va gialin membranalar kasalligining paydo bo'lishi."
        },
        {
          "title": "5. To'satdan o'lim sindromi (SIDS) profilaktikasi",
          "text": "Chaqaloqni qorni bilan yotqizmaslik, yumshoq yostiq qo'ymaslik, xonani tamaki tutunidan tozalash va qizib ketishiga yo'l qo'ymaslik."
        }
      ],
      "pedTechPdf": "Teoriya/mavzu8/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu8/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu8/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Chaqaloqlarda teri va kindik kasalliklari (omfalit, piodermiya), chaqaloqlar sepsisi, pnevmopatiyasi hamda to'satdan o'lim sindromida hamshiralik parvarishi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-9",
      "number": 9,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Go'dak va kichik yoshdagi bolalarda ovqat hazm qilishning surunkali buzilishlari, raxit, spazmofiliya va ekssudativ-kataral diatez kasalliklari.",
      "shortDesc": "Surunkali ovqatlanish buzilishlari (gipotrofiya), D vitamini yetishmovchiligi, raxit, spazmofiliya va diatezlar nazariyasi.",
      "lecturePdf": "Teoriya/mavzu9/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Surunkali ovqatlanish buzilishlari",
          "text": "Gipotrofiyaning 3 ta darajasi: tana vaznining bo'yga nisbatan kamayishi, teri osti yog' qavatining yo'qolishi va immunitet pasayishi."
        },
        {
          "title": "2. Raxitning klinik davrlari va belgilari",
          "text": "Boshlang'ich davr (asabiylik, terlash), avj olgan davr (peshona va tepa do'mboqlari, 'raxitik tasbehlar') va rekonvalessensiya davri."
        },
        {
          "title": "3. Spazmofiliya (tetaniya) patogenezi",
          "text": "Alkaloz va qonda ionlashgan kalsiyning keskin pasayishi fonida periferik nerv-mushak qo'zg'aluvchanligining oshishi va tortishishlar."
        },
        {
          "title": "4. Diatezlarning turlari va ahamiyati",
          "text": "Ekssudativ-kataral (allergik), limfatiko-gipoplastik (limfa tugunlari kattalashishi) va asab-artritik diatezlar konstitutsiyasi."
        },
        {
          "title": "5. Profilaktika va sog'lomlashtirish choralari",
          "text": "To'g'ri balanslangan parhez, D vitamini qabuli, massaj, jismoniy tarbiya va chiniqtirish muolajalarining ahamiyati."
        }
      ],
      "videoUrl": "Teoriya/mavzu9/vedio/video_2023-10-17_20-01-08.mp4",
      "pedTechPdf": "Teoriya/mavzu9/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu9/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu9/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Go'dak va kichik yoshdagi bolalarda ovqat hazm qilishning surunkali buzilishlari, raxit, spazmofiliya va ekssudativ-kataral diatez kasalliklari. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-10",
      "number": 10,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Nafas olish a'zolari kasalliklari: o'tkir rinit, angina va laringit kasalliklarida bolaga hamda oila a'zolariga hamshiralik parvarishi.",
      "shortDesc": "Nafas yo'llari o'tkir kasalliklari: o'tkir rinit, kataral va yiringli angina hamda laringitda hamshiralik parvarishi nazariyasi.",
      "lecturePdf": "Teoriya/mavzu10/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Yuqori nafas yo'llari anatomik moyilligi",
          "text": "Nafas yo'llari shilliq qavatining mayinligi va boy qon aylanishi har qanday virusli infeksiyada tezkor shish paydo bo'lishiga olib keladi."
        },
        {
          "title": "2. O'tkir rinitning chaqaloqlarga ta'siri",
          "text": "Burun orqali nafas olish buzilganda chaqaloq ko'krak emishdan bosh tortadi, bezovtalanadi va tana vazni tez yo'qotiladi."
        },
        {
          "title": "3. Laringit va stenozlanuvchi krup sindromi",
          "text": "Ovoz boylamlari osti sohasining shishi natijasida 'huruvchi' yo'tal, ovozning bo'g'ilishi va ilhomiy hansirash yuzaga kelishi."
        },
        {
          "title": "4. Bolalarda angina turlari va asoratlari",
          "text": "Lakunar va follikulyar anginalarning o'tkir kechishi, limfa tugunlarining kattalashishi va revmatizm hamda nefrit xavfi."
        },
        {
          "title": "5. Hamshiralik parvarishi va ingalyatsiya rejimi",
          "text": "Xona namligini ta'minlash, burun yo'llarini tuzli eritmalar bilan yuvish va issiq ingalyatsiyalar orqali nafasni yengillatish."
        }
      ],
      "videoUrl": "Teoriya/mavzu10/vedio/video_2023-10-14_21-19-05.mp4",
      "pedTechPdf": "Teoriya/mavzu10/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu10/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu10/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Nafas olish a'zolari kasalliklari: o'tkir rinit, angina va laringit kasalliklarida bolaga hamda oila a'zolariga hamshiralik parvarishi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-11",
      "number": 11,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "O'tkir va surunkali bronxit, bronxial astma hamda pnevmoniyada bola va oilasiga hamshiralik parvarishi nazariyasi.",
      "shortDesc": "O'tkir va surunkali bronxit, bronxial astma hamda pnevmoniyada klinik kechishi va nafas yetishmovchiligi darajalari.",
      "lecturePdf": "Teoriya/mavzu11/maruza/maruza.html",
      "slides": [
        {
          "title": "1. O'tkir va surunkali bronxit tasnifi",
          "text": "Oddiy bronxit, obstruktiv bronxit va bronxiolitning klinik kechishi, yo'tal va o'pkadagi xirillashlarning o'ziga xosligi."
        },
        {
          "title": "2. Bolalar pnevmoniyasining patogenezi",
          "text": "O'pka to'qimasining o'tkir yallig'lanishi, alveolalarning ekssudat bilan to'lishi va gaz almashinuvining buzilishi."
        },
        {
          "title": "3. Nafas yetishmovchiligi darajalari",
          "text": "1-daraja (jismoniy zo'riqishda hansirash), 2-daraja (tinch holatda hansirash va sianoz), 3-daraja (og'ir dekompensatsiya)."
        },
        {
          "title": "4. Bronxial astmaning allergik tabiati",
          "text": "Genetik moyillik va tashqi allergenlar ta'sirida bronxlar giperreaktivligi, spazmi va qalin yopishqoq balg'am ajralishi."
        },
        {
          "title": "5. Kompleks parvarish va reabilitatsiya",
          "text": "Antibakterial, bronxolitik dorilar berish, postural drenaj, kislorod terapiyasi va dispanser kuzatuvini tashkil qilish."
        }
      ],
      "videoUrl": "Teoriya/mavzu11/vedio/Yurak urishlar soni!.mp4",
      "pedTechPdf": "Teoriya/mavzu11/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu11/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu11/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "O'tkir va surunkali bronxit, bronxial astma hamda pnevmoniyada bola va oilasiga hamshiralik parvarishi nazariyasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-12",
      "number": 12,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Qon aylanish a'zolari kasalliklari, tug'ma yurak nuqsonlari, revmatizm va revmatik xoreya kasalliklarida hamshiralik parvarishi.",
      "shortDesc": "Tug'ma yurak nuqsonlari, revmatizm, revmokardit va o'tkir yurak yetishmovchiligida hamshiralik parvarishi asoslari.",
      "lecturePdf": "Teoriya/mavzu12/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Tug'ma yurak nuqsonlari (TYeN)",
          "text": "Homila rivojlanishida yurak to'siqlari va qon tomirlarining to'liq shakllanmasligi (oq va ko'k nuqsonlar, Falo tetradasi)."
        },
        {
          "title": "2. Qon aylanish yetishmovchiligi belgilari",
          "text": "Emizish paytida bolaning charchab qolishi, perioral sianoz, taxikardiya, jigar kattalashishi va oyoqlardagi shishlar."
        },
        {
          "title": "3. O'tkir revmatik isitma (revmatizm)",
          "text": "A guruhi beta-gemolitik streptokokki o'tkazgandan keyin yurak klapanlari va bo'g'imlarning autoimmun yallig'lanishi."
        },
        {
          "title": "4. Revmokardit va kichik xoreya klinikasi",
          "text": "Yurak chegaralarining kengayishi, tonlarning bo'g'iqligi hamda asab tizimi zararlanishida beixtiyor tartibsiz harakatlar."
        },
        {
          "title": "5. Kardio-rejim va hamshiralik kuzatuvi",
          "text": "Yurak faoliyatiga yuklamani kamaytirish uchun qat'iy yotoq tartibi, puls va EKG dinamikasini sinchkovlik bilan qayd etish."
        }
      ],
      "videoUrl": "Teoriya/mavzu12/vedio/video_2023-10-15_05-38-18.mp4",
      "pedTechPdf": "Teoriya/mavzu12/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu12/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu12/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Qon aylanish a'zolari kasalliklari, tug'ma yurak nuqsonlari, revmatizm va revmatik xoreya kasalliklarida hamshiralik parvarishi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-13",
      "number": 13,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Ovqat hazm qilish a'zolari kasalliklari: pilorostenoz va pilorospazm, o'tkir gastrit, enterokolit va diareya kasalliklarida hamshiralik parvarishi.",
      "shortDesc": "Pilorostenoz va pilorospazm diagnostikasi, o'tkir gastrit, enterokolit, ichak disbakteriozi va diareya patogenezi.",
      "lecturePdf": "Teoriya/mavzu13/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Pilorospazm va pilorostenoz farqi",
          "text": "Pilorospazm funksional bo'lib o'tkinchi; pilorostenoz esa me'da chiqish qismi mushaklarining tug'ma gipertrofiyasi bo'lib jarrohlik talab qiladi."
        },
        {
          "title": "2. Pilorostenozning xarakterli belgilari",
          "text": "Hayotning 2-3 haftasidan boshlab 'favvora shaklida' achqimtir qusish, qusiqda o't suyuqligi bo'lmasligi va qumsoat simptomi."
        },
        {
          "title": "3. O'tkir gastrit va enterokolit",
          "text": "Oshqozon va ichak shilliq qavatining yallig'lanishi, intoksikatsiya, epigastral og'riqlar va dispeptik buzilishlar."
        },
        {
          "title": "4. Ichak disbakteriozi (disbioz)",
          "text": "Ichak normal mikroflorasi (bifido- va laktobakteriyalar) ning kamayib, shartli patogen bakteriyalar ko'payishi va fermentativ buzilishlar."
        },
        {
          "title": "5. Oziqlantirish tartibi va regidratsiya",
          "text": "Bemor bolaga fraksion (kichik porsiyalarda) yengil taomlar berish, suv-elektrolit muvozanatini tiklash va probiotiklar berish."
        }
      ],
      "videoUrl": "Teoriya/mavzu13/vedio/video_2023-10-15_05-38-18.mp4",
      "pedTechPdf": "Teoriya/mavzu13/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu13/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu13/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Ovqat hazm qilish a'zolari kasalliklari: pilorostenoz va pilorospazm, o'tkir gastrit, enterokolit va diareya kasalliklarida hamshiralik parvarishi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-14",
      "number": 14,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Og'iz shilliq qavati kasalliklari, stomatitlar (aftoz, zamburug'li) va gelmintozlarda (askaridoz, enterobioz) hamshiralik parvarishi.",
      "shortDesc": "Stomatitlarning tasnifi, og'iz shilliq qavati shikastlanishlari, askaridoz va enterobiozning biologik sikllari.",
      "lecturePdf": "Teoriya/mavzu14/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Bolalar stomatitlarining turlari",
          "text": "Kataral, aftoz, gerpetik va zamburug'li (kandidoz) stomatitlar bo'lib, har biri o'ziga xos klinik manzara va davolashga ega."
        },
        {
          "title": "2. Shilliq qavat shikastlanishining oqibatlari",
          "text": "Og'izdagi qattiq og'riq tufayli bola ovqat va suv ichishdan bosh tortadi, natijada intoksikatsiya va suvsizlanish kuchayadi."
        },
        {
          "title": "3. Gelmintozlarning epidemiologiyasi",
          "text": "Gelmint tuxumlarining ifloslangan qo'l, o'yinchoq va oziq-ovqatlar orqali og'izga tushishi va ichakda parazitlik qilishi."
        },
        {
          "title": "4. Ostritsa va askaridalarning zarari",
          "text": "Parazitlar ichak shilliq qavatini jarohatlaydi, qon so'rib anemiya keltirib chiqaradi va organizmni toksinlar bilan zaharlaydi."
        },
        {
          "title": "5. Profilaktika va davolash asoslari",
          "text": "Antiseptik mahalliy eritmalar bilan og'izni tozalash, gelmintga qarshi dori vositalarini buyurish va qat'iy gigiyena nazorati."
        }
      ],
      "videoUrl": "Teoriya/mavzu14/vedio/video_2023-10-22_14-48-42.mp4",
      "pedTechPdf": "Teoriya/mavzu14/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu14/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu14/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Og'iz shilliq qavati kasalliklari, stomatitlar (aftoz, zamburug'li) va gelmintozlarda (askaridoz, enterobioz) hamshiralik parvarishi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-15",
      "number": 15,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Qon va qon yaratish a'zolari kasalliklari, temir tanqisligi anemiyasi va uning profilaktikasi.",
      "shortDesc": "Temir tanqisligi anemiyasining etiopatogenezi, qon ko'rsatkichlari dinamikasi va anemiyaning profilaktika nazariyasi.",
      "lecturePdf": "Teoriya/mavzu15/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Temir tanqisligi anemiyasining mohiyati",
          "text": "Organizmda temir yetishmasligi oqibatida eritrotsitlarda gemoglobin sintezining buzilishi va to'qimalar gipoksiyasi yuzaga kelishi."
        },
        {
          "title": "2. Anemiyaning etiologik sabablari",
          "text": "Tug'ruqdan oldingi zaxiraning kamligi (chala tug'ilish, egizaklar), noto'g'ri sun'iy ovqatlantirish va ichakda temir so'rilishining buzilishi."
        },
        {
          "title": "3. Sideropenik sindrom belgilari",
          "text": "Terining quruqlashishi, soch to'kilishi, tirnoqlarning qoshiqsimon botiqligi (koylonixiya) va ta'm bilishning buzilishi."
        },
        {
          "title": "4. Qon tahlilidagi patologik siljishlar",
          "text": "Gipoxrom mikrotsitar anemiya: gemoglobinning pasayishi, rang ko'rsatkichining < 0.85 bo'lishi va zardob temirining kamayishi."
        },
        {
          "title": "5. Birlamchi profilaktika va davolash",
          "text": "Chaqaloqlarni 6 oygacha faqat ona suti bilan boqish, o'z vaqtida go'shtli qo'shimcha ovqat kiritish va temir preparatlarini berish."
        }
      ],
      "pedTechPdf": "Teoriya/mavzu15/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu15/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu15/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Qon va qon yaratish a'zolari kasalliklari, temir tanqisligi anemiyasi va uning profilaktikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-16",
      "number": 16,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Gemorragik diatez kasalliklari (trombotsitopenik purpura, gemofiliya) da bola va uning oila a'zolariga hamshiralik parvarishi nazariyasi.",
      "shortDesc": "Gemostaz tizimi buzilishlari, trombotsitopenik purpura va gemofiliya kasalliklarida bolaga parvarish ko'rsatish.",
      "lecturePdf": "Teoriya/mavzu16/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Qon ivish (gemostaz) tizimi asoslari",
          "text": "Tomir devori butunligi, trombotsitlar miqdori va plazma ivish omillarining o'zaro muvofiqligi qon ketishining oldini oladi."
        },
        {
          "title": "2. Trombotsitopenik purpura (Verlgof kasalligi)",
          "text": "Trombotsitlar sonining keskin kamayishi oqibatida terida polimorf, nosimmetrik qontalashlar va shilliq qavatlardan qon ketishi."
        },
        {
          "title": "3. Gemofiliya kasalligining genetik tabiati",
          "text": "Faqat o'g'il bolalarda uchraydigan, X xromosoma orqali irsiylanuvchi qon ivish omillari (VIII yoki IX) yetishmovchiligi kasalligi."
        },
        {
          "title": "4. Gemartrozlar va bo'g'imlar deformatsiyasi",
          "text": "Gemofiliyada tizza va tirsak bo'g'imlariga qon quyilishi kuchli og'riq, shish keltirib chiqaradi va nogironlikka olib kelishi mumkin."
        },
        {
          "title": "5. Hamshiralik parvarishi va xavfsizlik",
          "text": "Bemor bolani jarohatlardan qat'iy asrash, mushak ichiga dorilar yubormaslik va gemostatik preparatlarni tayyorlab qo'yish."
        }
      ],
      "videoUrl": "Teoriya/mavzu16/vedio/video_2023-06-05_20-07-52.mp4",
      "pedTechPdf": "Teoriya/mavzu16/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu16/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu16/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Gemorragik diatez kasalliklari (trombotsitopenik purpura, gemofiliya) da bola va uning oila a'zolariga hamshiralik parvarishi nazariyasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-17",
      "number": 17,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Ichki sekretsiya bezlari kasalliklari: 1-tur qandli diabet, gipotireoz va endemik buqoq kasalliklarida bolalarga hamshiralik parvarishi.",
      "shortDesc": "Endokrin kasalliklar: 1-tur qandli diabet metabolizmi, tug'ma gipotireoz, kretinizm xavfi va endemik buqoq profilaktikasi.",
      "lecturePdf": "Teoriya/mavzu17/maruza/maruza.html",
      "slides": [
        {
          "title": "1. 1-tur qandli diabetning patogenezi",
          "text": "Oshqozon osti bezi Langergans orolchalari beta-hujayralarining autoimmun yemirilishi natijasida mutlaq insulin tanqisligi paydo bo'lishi."
        },
        {
          "title": "2. Diabetik ketoatsidoz rivojlanish mexanizmi",
          "text": "Insulin yetishmaganda glyukoza hujayraga kirmaydi, yog'lar parchalanib qonda zaharli keton tanachalari (atseton) to'planadi."
        },
        {
          "title": "3. Tug'ma gipotireoz va uning oqibatlari",
          "text": "Qalqonsimon bez gormonlarining (T3, T4) yetishmovchiligi bolaning aqliy va jismoniy rivojlanishdan keskin orqada qolishiga (kretinizm) sabab bo'ladi."
        },
        {
          "title": "4. Chaqaloqlar neonatal skriningi",
          "text": "Tug'ruqxonada barcha chaqaloqlarning tovonidan maxsus qog'ozga qon olib, gipotireoz va fenilketonuriyani erta aniqlash dasturi."
        },
        {
          "title": "5. Endemik buqoq profilaktikasi",
          "text": "Yod tanqisligi hududlarida bolalarga yodlangan osh tuzi, kaliy yodid preparatlari va dengiz mahsulotlarini muntazam iste'mol qildirish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu1/vedio/Антропометрия.mp4",
      "pedTechPdf": "Teoriya/mavzu1/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu1/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu1/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Ichki sekretsiya bezlari kasalliklari: 1-tur qandli diabet, gipotireoz va endemik buqoq kasalliklarida bolalarga hamshiralik parvarishi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-18",
      "number": 18,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Buyrak va siydik ajratish tizimi kasalliklari: o'tkir va surunkali pielonefritda bolalarga hamshiralik parvarishi nazariyasi.",
      "shortDesc": "Buyrak va siydik yo'llari infeksiyalari: o'tkir va surunkali pielonefritning mikrob-yallig'lanish patogenezi.",
      "lecturePdf": "Teoriya/mavzu18/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Siydik yo'llari infeksiyalarining tarqalishi",
          "text": "Ichak tayoqchasi va boshqa mikroblarning siydik yo'llari bo'ylab yuqoriga ko'tarilishi yoki qon orqali buyraklarga borib yallig'lanish chaqirishi."
        },
        {
          "title": "2. O'tkir pielonefritning klinik kechishi",
          "text": "Isitma (38-39 В°C), intoksikatsiya, bel sohasidagi og'riqlar, siyishning og'riqli va tez-tez bo'lishi (dizuriya)."
        },
        {
          "title": "3. Laboratoriya diagnostika mezonlari",
          "text": "Siydik tahlilida ko'p miqdorda leykotsitlar (leykotsituriya), bakteriyalar (bakteriuriya) va kam miqdorda oqsil paydo bo'lishi."
        },
        {
          "title": "4. Surunkali shaklga o'tish sabablari",
          "text": "Buyrak anatomik anomaliyalari, vezikoureteral reflyuks (siydikning orqaga qaytishi) va davolash kursining chala qolishi."
        },
        {
          "title": "5. Parhez va dori terapiyasi nazorati",
          "text": "Mo'l-ko'l suyuqlik ichirish (mors, kompot), achchiq va sho'r ovqatlarni cheklash hamda antibakterial vositalarni soatiga amal qilib berish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu2/vedio/Катетеризация.mp4",
      "pedTechPdf": "Teoriya/mavzu2/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu2/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu2/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Buyrak va siydik ajratish tizimi kasalliklari: o'tkir va surunkali pielonefritda bolalarga hamshiralik parvarishi nazariyasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-19",
      "number": 19,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "O'tkir va surunkali glomerulonefrit, sistit kasalliklarida bolalarga hamshiralik parvarishi, parhez va siydik ajralishini nazorat qilish.",
      "shortDesc": "Glomerulonefrit triadasi (shish, gipertenziya, gematuriya), nefrotik sindrom, sistit va parhez nazariyasi.",
      "lecturePdf": "Teoriya/mavzu19/maruza/maruza.html",
      "slides": [
        {
          "title": "1. O'tkir glomerulonefrit etiopatogenezi",
          "text": "Streptokokkli angina yoki piodermiyadan 2-3 hafta o'tgach buyrak koptokchalarining immun komplekslar bilan shikastlanishi."
        },
        {
          "title": "2. Glomerulonefritning klassik triadasi",
          "text": "1) Ertalabki yuz va ko'z atrofi shishlari; 2) Qon bosimining oshishi (gipertenziya); 3) Siydikda qon bo'lishi ('go'sht yuvindisi' rangidagi siydik)."
        },
        {
          "title": "3. Nefrotik sindromning xususiyatlari",
          "text": "Siydik bilan juda ko'p oqsil yo'qotilishi (massiv proteinuriya), qonda oqsil kamayishi va butun tanada tarqalgan og'ir shishlar (anasarka)."
        },
        {
          "title": "4. O'tkir sistitning klinik ko'rinishi",
          "text": "Qovuq sohasida og'riq, tez-tez va oz-ozdan siyishga qistovlar hamda siyish oxirida qon tomchilari paydo bo'lishi."
        },
        {
          "title": "5. Hamshiralik parvarishi va qat'iy rejim",
          "text": "O'tkir davrda qat'iy yotoq tartibi, osh tuzini cheklash (в„–7a parhez) va sutkalik suyuqlik balansini qat'iy hisoblash."
        }
      ],
      "videoUrl": "Amaliyat/mavzu3/vedio/Пункция.mp4",
      "pedTechPdf": "Teoriya/mavzu3/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu3/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu3/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "O'tkir va surunkali glomerulonefrit, sistit kasalliklarida bolalarga hamshiralik parvarishi, parhez va siydik ajralishini nazorat qilish. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-20",
      "number": 20,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Bolalarda yuqumli kasalliklarda hamshiralik parvarishi. Profilaktik emlashlar. Bolalarda sil (tuberkulyoz) kasalligi. Xavfsiz emlashda 'sovuqlik zanjiri' tizimi.",
      "shortDesc": "Yuqumli jarayon nazariyasi, Milliy emlash taqvimi, sovuqlik zanjiri qoidalari va bolalarda sil kasalligi profilaktikasi.",
      "lecturePdf": "Teoriya/mavzu20/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Yuqumli jarayon va immunitet tushunchasi",
          "text": "Patogen mikroorganizmlarning organizmga kirishi, ko'payishi va organizmning immun javob reaksiyalari mexanizmi."
        },
        {
          "title": "2. Milliy emlash taqvimining ahamiyati",
          "text": "Xavfli yuqumli kasalliklarga (sil, gepatit, poliomiyelit, difteriya, qizamiq) qarshi jamoaviy immunitetni shakllantirish davlat dasturi."
        },
        {
          "title": "3. 'Sovuqlik zanjiri' texnologiyasi",
          "text": "Vaksinalarning ishlab chiqarilganidan to bolaga yuborilguncha barcha bosqichlarda +2...+8 В°C haroratda saqlanishini ta'minlovchi tizim."
        },
        {
          "title": "4. Bolalarda sil infeksiyasi xususiyatlari",
          "text": "Kox tayoqchasi chaqiruvchi infeksiya bo'lib, birlamchi sil kompleksi, limfa tugunlari zararlanishi va tuberkulyoz intoksikatsiyasi beradi."
        },
        {
          "title": "5. BSJ vaksinatsiyasi va Mantu sinamasi",
          "text": "Tug'ruqxonada chaqaloqqa BSJ vaksinasini qilish hamda keyinchalik Mantu sinamasi orqali organizmning silga sezgirligini nazorat qilish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu4/vedio/Гемотрансфузия.mp4",
      "pedTechPdf": "Teoriya/mavzu4/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu4/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu4/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Bolalarda yuqumli kasalliklarda hamshiralik parvarishi. Profilaktik emlashlar. Bolalarda sil (tuberkulyoz) kasalligi. Xavfsiz emlashda 'sovuqlik zanjiri' tizimi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-21",
      "number": 21,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "O'tkir respirator virusli infeksiyalar (O'RVI, gripp, paragripp, adenovirus) va meningokokk infeksiyasida hamshiralik parvarishi.",
      "shortDesc": "O'RVI viruslari (gripp, paragripp, adenovirus) va chaqaloqlarda og'ir meningokokksemiyaning klinik xususiyatlari.",
      "lecturePdf": "Teoriya/mavzu21/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Respirator viruslarning xilma-xilligi",
          "text": "Gripp (A, B), paragripp, respirator-sinsitsial (RS) va adenovirus infeksiyalarining nafas a'zolariga tanlab ta'sir qilishi."
        },
        {
          "title": "2. Grippning og'ir asoratlari",
          "text": "Toksikoz, gipertermiya, miya shishi, neyrotoksikoz va gemorragik pnevmoniya rivojlanishi xavfining yuqoriligi."
        },
        {
          "title": "3. Adenovirusli infeksiya triadasi",
          "text": "Yuqori harorat, nafas yo'llari kataral belgilari va konyunktivit hamda limfa bezlarining kattalashishi birga kelishi."
        },
        {
          "title": "4. Meningokokk infeksiyasi va meningokokksemiya",
          "text": "Qonda meningokokk ko'payishi natijasida tanada teridan bo'rtib turuvchi yulduzsimon gemorragik toshmalar va septik shok."
        },
        {
          "title": "5. Profilaktika va shoshilinch xabardor qilish",
          "text": "Yuqumli kasallik aniqlanganda darhol 058/u shaklli shoshilinch xabarnoma to'ldirish va dezinfeksiya choralarini ko'rish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu5/vedio/Десмургия.mp4",
      "pedTechPdf": "Teoriya/mavzu5/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu5/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu5/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "O'tkir respirator virusli infeksiyalar (O'RVI, gripp, paragripp, adenovirus) va meningokokk infeksiyasida hamshiralik parvarishi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-22",
      "number": 22,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Difteriya, ko'kyo'tal va epidemik parotit kasalliklarining epidemiologiyasi, klinik belgilari va hamshiralik parvarishi.",
      "shortDesc": "Difteriya ekzotoksini, krup bosqichlari, ko'kyo'tal yo'tali va epidemik parotitning asoratlari nazariyasi.",
      "lecturePdf": "Teoriya/mavzu22/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Difteriya toksinining xavfli ta'siri",
          "text": "Difteriya tayoqchasi chiqaradigan kuchli ekzotoksin miokard, buyrak usti bezlari va periferik nervlarni og'ir jarohatlaydi."
        },
        {
          "title": "2. Difterik krupning 3 ta bosqichi",
          "text": "1) Disfonik davr (ovoz bo'g'ilishi); 2) Stenotik davr (shovqinli nafas va sianoz); 3) Asfiktik davr (bo'g'ilish va hushsizlik)."
        },
        {
          "title": "3. Ko'kyo'talning davriy kechishi",
          "text": "Kataral davr, spastik yo'tal davri (tilini chiqarib, reprizlar bilan yo'talish, qusish) va tuzalish (rekonvalessensiya) davri."
        },
        {
          "title": "4. Epidemik parotit ('tepki') xususiyatlari",
          "text": "So'lak bezlarining shishishi, chaynaganda quloqda og'riq bo'lishi va o'smir o'g'il bolalarda orxit (bepushtlik xavfi) asoratlari."
        },
        {
          "title": "5. DTP va KPK bilan o'z vaqtida emlash",
          "text": "Difteriya, ko'kyo'tal va parotitga qarshi yagona samarali himoya bu taqvim bo'yicha profilaktik emlashlarni to'liq olishdir."
        }
      ],
      "videoUrl": "Amaliyat/mavzu7/vedio/Иммобилизация.mp4",
      "pedTechPdf": "Teoriya/mavzu6/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu6/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu6/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Difteriya, ko'kyo'tal va epidemik parotit kasalliklarining epidemiologiyasi, klinik belgilari va hamshiralik parvarishi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-23",
      "number": 23,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Qizamiq, qizilcha, skarlatina va suvchechak kasalliklarida bola hamda uning oila a'zolariga hamshiralik parvarishi.",
      "shortDesc": "Bolalar toshmali infeksiyalari: qizamiq, qizilcha, skarlatina va suvchechak kasalliklarining epidemiologiyasi va klinikasi.",
      "lecturePdf": "Teoriya/mavzu23/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Qizamiq kasalligining yuqumliligi",
          "text": "Havo-tomchi orqali o'ta tez tarqaluvchi infeksiya bo'lib, Filatov-Koplik dog'lari va bosqichli makulo-papulyoz toshmalar beradi."
        },
        {
          "title": "2. Qizilcha va uning homilaga xavfi",
          "text": "Mayda pushti toshmalar, ensa limfa tugunlarining kattalashishi; homilador ayollarda homilaning og'ir tug'ma nuqsonlariga sabab bo'ladi."
        },
        {
          "title": "3. Skarlatinaning etiologiyasi va belgilari",
          "text": "Streptokokk chaqiruvchi o'tkir infeksiya bo'lib, 'malinasimon til', mayda nuqtali toshma va oqargan burun-lab uchburchagi bilan kechadi."
        },
        {
          "title": "4. Suvchechak toshmalarining polimorfizmi",
          "text": "Boshning sochli qismi va tanada pufakchalar paydo bo'lishi, qichishishi va qoraqo'tir hosil qilib tuzalishi."
        },
        {
          "title": "5. Karantin muddatlari va parvarish",
          "text": "Har bir kasallik bo'yicha muloqotda bo'lgan bolalarni belgilangan muddat davomida bog'cha va maktabdan chetlashtirish hamda kuzatish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu6/vedio/Жгут.mp4",
      "pedTechPdf": "Teoriya/mavzu7/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu7/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu7/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Qizamiq, qizilcha, skarlatina va suvchechak kasalliklarida bola hamda uning oila a'zolariga hamshiralik parvarishi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-24",
      "number": 24,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "O'tkir yuqumli ichak kasalliklari (dizenteriya, salmonellyoz, rotavirus) epidemiologiyasi, klinik kechishi va parvarishlash.",
      "shortDesc": "O'tkir yuqumli ichak kasalliklari: dizenteriya, salmonellyoz va rotavirusda suvsizlanish darajalari patogenezi.",
      "lecturePdf": "Teoriya/mavzu24/maruza/maruza.html",
      "slides": [
        {
          "title": "1. O'tkir ichak infeksiyalari etiopatogenezi",
          "text": "Shigella, salmonella, ichak tayoqchalari va rotaviruslar ichak shilliq qavatini shikastlab, intoksikatsiya va diareya chaqiradi."
        },
        {
          "title": "2. Dizenteriyadagi kolit sindromi",
          "text": "To'g'ri va sigmasimon ichakning yallig'lanishi, tenezmlar (soxta qistovlar) va najasda qon, shilliq paydo bo'lishi."
        },
        {
          "title": "3. Salmonellyozning klinik shakllari",
          "text": "Gastroenterit shakli eng ko'p uchraydi, harorat yuqori bo'ladi, najas yashil 'botqoq balchig'i' rangida ko'p marta keladi."
        },
        {
          "title": "4. Suvsizlanish (degidratatsiya) darajalari",
          "text": "1-daraja (tana vaznining 5% gacha yo'qotilishi), 2-daraja (6-9%), 3-daraja (10% dan ortiq yo'qotilishi va gipovolemik shok)."
        },
        {
          "title": "5. Oral va parenteral regidratsiya asoslari",
          "text": "Yengil va o'rta darajali suvsizlanishda og'iz orqali glyukoza-tuzli eritmalar, og'ir hollarda venaga tomchilab suyuqlik quyish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu5/vedio/Десмургия.mp4",
      "pedTechPdf": "Teoriya/mavzu8/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu8/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu8/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "O'tkir yuqumli ichak kasalliklari (dizenteriya, salmonellyoz, rotavirus) epidemiologiyasi, klinik kechishi va parvarishlash. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-25",
      "number": 25,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Bolalar virusli gepatitlari (A, B, C) va OIV-infeksiyasida hamshiralik parvarishi hamda kasalxona ichi infeksiyasi profilaktikasi.",
      "shortDesc": "Virusli gepatitlar (A, B, C), OIV-infeksiyasining yuqish mexanizmlari va kasalxona ichi infeksiyalari profilaktikasi.",
      "lecturePdf": "Teoriya/mavzu25/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Gepatit viruslarining turlari",
          "text": "Gepatit A (enteral, fekal-oral yo'l), Gepatit B, C, D (parenteral, gemokontakt yo'llar) va ularning jigarni zararlashi."
        },
        {
          "title": "2. Gepatitning bosqichma-bosqich kechishi",
          "text": "Sariqlikoldi (dispeptik, astenovegetativ) davr, sariqlik davri va rekonvalessensiya (tuzalish) davri."
        },
        {
          "title": "3. OIV-infeksiyasining klinik bosqichlari",
          "text": "Immun tizimi CD4 limfotsitlarining kamayishi, ikkilamchi opportunistik infeksiyalar va OITS (SPID) terminal bosqichi rivojlanishi."
        },
        {
          "title": "4. Kasalxona ichi infeksiyalari (KII/VBI)",
          "text": "Davolash muassasalarida nosteril asboblar, qon quyish va xodimlar qo'llari orqali kasalliklar yuqishining oldini olish choralari."
        },
        {
          "title": "5. Dezinfeksiya va sterilizatsiya nazorati",
          "text": "Tibbiy asboblarni kimyoviy dezinfeksiyalash, PSO o'tkazish, avtoklavda sterilizatsiyalash va azotepiram sinamasi bilan tekshirish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu1/vedio/Антропометрия.mp4",
      "pedTechPdf": "Teoriya/mavzu9/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu9/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu9/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Bolalar virusli gepatitlari (A, B, C) va OIV-infeksiyasida hamshiralik parvarishi hamda kasalxona ichi infeksiyasi profilaktikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-26",
      "number": 26,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Kechiktirib bo'lmaydigan og'ir holatlarda hamshiralik parvarishi. Travmatik, gipovolemik, anafilaktik shok va komatoz holatlarda shifokorgacha tezkor yordam.",
      "shortDesc": "Kechiktirib bo'lmaydigan og'ir holatlar patogenezi: gipovolemik, anafilaktik shok va komalarda shoshilinch yordam asoslari.",
      "lecturePdf": "Teoriya/mavzu26/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Shok holatining patofiziologiyasi",
          "text": "To'qimalarning yetarli qon bilan ta'minlanmasligi (gipoperfuziya), kislorod tanqisligi va hujayralarda metabolik atsidoz rivojlanishi."
        },
        {
          "title": "2. Gipovolemik shok rivojlanishi",
          "text": "Ko'p qon yo'qotish, og'ir kuyishlar yoki kuchli diareya va qusish natijasida aylanib yuruvchi qon hajmining keskin kamayishi."
        },
        {
          "title": "3. Anafilaktik shokning xavfliligi",
          "text": "Allergenga javoban gistaminning massiv ajralishi, tomirlarning keskin kengayishi va arterial qon bosimining nolga tushishi."
        },
        {
          "title": "4. Travmatik shokning erektil va torpid fazalari",
          "text": "Dastlabki qo'zg'alish va og'riq fazasi, keyinchalik esa chuqur tormozlanish, apatiya va qon bosimi tushishi fazasi."
        },
        {
          "title": "5. Kechiktirib bo'lmaydigan terapiya asoslari",
          "text": "O'tkir nafas yo'lini ta'minlash, vena orqali kristalloid/kolloid infuziyalarni zudlik bilan boshlash va vazopressorni qo'llash."
        }
      ],
      "videoUrl": "Amaliyat/mavzu12/vedio/Предоперационная.mp4",
      "pedTechPdf": "Teoriya/mavzu10/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu10/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu10/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Kechiktirib bo'lmaydigan og'ir holatlarda hamshiralik parvarishi. Travmatik, gipovolemik, anafilaktik shok va komatoz holatlarda shifokorgacha tezkor yordam. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-27",
      "number": 27,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "O'tkir nafas va yurak qon-tomir yetishmovchiligida bolaga shoshilinch reanimatsion yordam ko'rsatish nazariyasi.",
      "shortDesc": "O'tkir nafas va yurak yetishmovchiligida zamonaviy yurak-o'pka reanimatsiyasining xalqaro algoritmlari (CAB).",
      "lecturePdf": "Teoriya/mavzu27/maruza/maruza.html",
      "slides": [
        {
          "title": "1. O'tkir nafas yetishmovchiligi (O'NYe)",
          "text": "Organizmda gazlar almashinuvining buzilishi: gipoksemiya (pO2 kamayishi) va giperkapniya (pCO2 ko'payishi) holati."
        },
        {
          "title": "2. Asfiksiya va yot jism tiqilishida Geymlix usuli",
          "text": "Nafas yo'liga yot jism tushganda bolaning orqasiga kuraklar orasiga urish yoki qorin sohasidan yuqoriga siltab bosish."
        },
        {
          "title": "3. O'tkir yurak yetishmovchiligi mexanizmi",
          "text": "Yurak qisqarish kuchining keskin susayishi, o'pka qon aylanish doirasida qon dimlanishi va o'pka shishi xavfi."
        },
        {
          "title": "4. Yurak-o'pka reanimatsiyasining xalqaro algoritmi",
          "text": "CAB tamoyili: C (Circulation - yurak massaji), A (Airway - nafas yo'llari o'tkazuvchanligi), B (Breathing - sun'iy nafas)."
        },
        {
          "title": "5. Reanimatsiyada dori vositalarini qo'llash",
          "text": "Yurak to'xtaganda adrenalin (epinefrin) 0.01 mg/kg dozasida har 3-5 daqiqada tomir ichiga yoki suyak ichiga yuboriladi."
        }
      ],
      "videoUrl": "Amaliyat/mavzu1/vedio/Антропометрия.mp4",
      "pedTechPdf": "Teoriya/mavzu11/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu11/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu11/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "O'tkir nafas va yurak qon-tomir yetishmovchiligida bolaga shoshilinch reanimatsion yordam ko'rsatish nazariyasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-28",
      "number": 28,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Gipertermiya va talvasa (sudorgi) sindromida bolaga hamda oilasiga hamshiralik parvarishi, tana haroratini me'yorlashtirish yo'llari.",
      "shortDesc": "Gipertermiya va febril talvasa sindromi, markaziy asab tizimi zararlanishi va antipiretik dorilar farmakoterapiyasi.",
      "lecturePdf": "Teoriya/mavzu28/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Gipertermiyaning patogenezi",
          "text": "Pirogen moddalar ta'sirida gipotalamusdagi termoregulyatsiya markazi qo'zg'alib, issiqlik ishlab chiqarishning issiqlik berishdan ustun bo'lishi."
        },
        {
          "title": "2. Febril talvasa (sudorgi) mexanizmi",
          "text": "Bolalar bosh miyasi qo'zg'aluvchanligi yuqori bo'lgani sababli tana harorati 38.5-39 В°C dan oshganda talvasa tutqanoqlari yuzaga keladi."
        },
        {
          "title": "3. Miyaning gipoksik zararlanish xavfi",
          "text": "Uzoq davom etgan talvasa miya hujayralarining kislorodga bo'lgan ehtiyojini oshiradi va miya shishiga olib kelishi mumkin."
        },
        {
          "title": "4. Antipiretik vositalar farmakoterapiyasi",
          "text": "Bolalarda haroratni tushirish uchun faqat paratsetamol va ibuprofen qo'llaniladi; aspirin va analgin qat'iyan man etiladi."
        },
        {
          "title": "5. Kompleks sovutish va parvarish choralari",
          "text": "Dori vositalari bilan birga bolani yechintirish, iliq suvda artish va yetarli miqdorda iliq suyuqliklar ichirish shart."
        }
      ],
      "videoUrl": "Amaliyat/mavzu1/vedio/Антропометрия.mp4",
      "pedTechPdf": "Teoriya/mavzu12/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu12/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu12/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Gipertermiya va talvasa (sudorgi) sindromida bolaga hamda oilasiga hamshiralik parvarishi, tana haroratini me'yorlashtirish yo'llari. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-29",
      "number": 29,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Tashqi muhit omillari ta'sirida kelib chiquvchi holatlar: quyosh va issiq urishi, elektr jarohati, suvga cho'kish, zaharli hasharotlar (ari, chayon, qoraqurt) va ilon chaqqanda birinchi tibbiy yordam.",
      "shortDesc": "Tashqi muhit omillari: issiq urishi, elektr jarohati, suvga cho'kish va zaharli hasharot/ilon chaqqanda tez tibbiy yordam.",
      "lecturePdf": "Teoriya/mavzu29/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Quyosh va issiq urishi patologiyasi",
          "text": "Yuqori havo harorati va to'g'ridan-to'g'ri quyosh nuri ta'sirida organizmning qizib ketishi, suvsizlanishi va termoregulyatsiya falaji."
        },
        {
          "title": "2. Elektr jarohatining o'ziga xosligi",
          "text": "Elektr toki tana orqali o'tganda chuqur termik kuyishlar chaqiradi va yurak ritmining to'xtashiga (fibrillyatsiya) sabab bo'ladi."
        },
        {
          "title": "3. Suvga cho'kishdagi patologik turlar",
          "text": "Chin (ho'l) cho'kishda o'pkaga suv kiradi; asfiktik (quruq) cho'kishda esa laringospazm natijasida nafas yo'li yopilib qoladi."
        },
        {
          "title": "4. Zaharli hasharot va ilon chaqishi",
          "text": "Chayon, qoraqurt va ilon zaharlari neyrotoksik va gemolitik ta'sir ko'rsatib, kuchli og'riq, falajlik va shok chaqiradi."
        },
        {
          "title": "5. Kechiktirib bo'lmaydigan yordam qoidalari",
          "text": "Jarohatlangan a'zoni harakatsizlantirish, sovuq qo'yish, zardoblarni yuborish va zudlik bilan ixtisoslashgan shifoxonaga yetkazish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu15/vedio/СЛР.mp4",
      "pedTechPdf": "Teoriya/mavzu13/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu13/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu13/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Tashqi muhit omillari ta'sirida kelib chiquvchi holatlar: quyosh va issiq urishi, elektr jarohati, suvga cho'kish, zaharli hasharotlar (ari, chayon, qoraqurt) va ilon chaqqanda birinchi tibbiy yordam. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    },
    {
      "id": "nazariy-30",
      "number": 30,
      "category": "nazariy",
      "categoryName": "Nazariy mashg'ulot",
      "title": "Anafilaktik shok va Kvinke shishida bolaga kechiktirib bo'lmaydigan shoshilinch tibbiy yordam ko'rsatish standartlari.",
      "shortDesc": "Anafilaktik shok va Kvinke shishining allergik mexanizmlari, hiqildoq stenozi xavfi va adrenalin qo'llash standarti.",
      "lecturePdf": "Teoriya/mavzu30/maruza/maruza.html",
      "slides": [
        {
          "title": "1. Kvinke shishi (angionevrotik shish)",
          "text": "Allergen ta'sirida yuz, lablar, ko'z qovoqlari va eng xavflisi hiqildoq shilliq qavatining to'satdan shishib ketishi."
        },
        {
          "title": "2. Hiqildoq stenozi va asfiksiya xavfi",
          "text": "Hiqildoq shishganda ovoz bo'g'iladi, nafas olish keskin qiyinlashadi va daqiqalar ichida bo'g'ilish yuz berishi mumkin."
        },
        {
          "title": "3. Anafilaktik shokning chaqmoqsimon shakli",
          "text": "Allergen kiritilgach bir necha soniyada hush yo'qolishi, pulsning yo'qolishi va qon bosimining keskin tushib ketishi."
        },
        {
          "title": "4. Birinchi navbatdagi dori: adrenalin (epinefrin)",
          "text": "Anafilaksiyada birinchi daqiqalardanoq sonning oldingi-yon sohasiga mushak ichiga 0.1% li adrenalin eritmasi yuboriladi."
        },
        {
          "title": "5. Shoshilinch reanimatsion yordam kompleksi",
          "text": "Prednizolon, deksametazon, antigistaminlar yuborish, toza kislorod berish va zarurat bo'lganda intubatsiya yoki konikotomiya o'tkazish."
        }
      ],
      "videoUrl": "Amaliyat/mavzu16/vedio/Констатация.mp4",
      "pedTechPdf": "Teoriya/mavzu14/pedtex/Fanning talim texnologiyalari.pdf",
      "visualPdf": "Teoriya/mavzu14/vizual/Vizual-didaktik resurslar.pdf",
      "glossaryPdf": "Teoriya/mavzu14/Glasssariy/glossariy.pdf",
      "quiz": [
        {
          "question": "Anafilaktik shok va Kvinke shishida bolaga kechiktirib bo'lmaydigan shoshilinch tibbiy yordam ko'rsatish standartlari. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
          "options": [
            "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
            "Faqat laboratoriya tahlillarini yig'ish bilan cheklanish",
            "Bolani oila a'zolaridan ajratib qo'yish",
            "Dori vositalarini shifokor ko'rsatmasisiz qo'llash"
          ],
          "correct": 0,
          "explanation": "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
        },
        {
          "question": "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
          "options": [
            "Tana haroratining keskin ko'tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
            "Bolaning xotirjam uxlashi va qorin to'yishi",
            "Teri rangining tabiiy pushti bo'lishi",
            "Nafas va pulsning yosh me'yorida bo'lishi"
          ],
          "correct": 0,
          "explanation": "Gipertermiya, talvasa, hushning yo'qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
        },
        {
          "question": "Bemor bolani parvarishlashda dori vositalarini yuborish bo'yicha qat'iy qoida qaysi?",
          "options": [
            "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat'iy rioya qilish",
            "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
            "Dorilarni faqat ota-ona xohishiga qarab o'zgartirish",
            "In'eksiya vaqtiga e'tibor bermaslik"
          ],
          "correct": 0,
          "explanation": "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat'iy mutanosib hisoblangan holda shifokor ko'rsatmasi bilan kiritiladi."
        },
        {
          "question": "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
          "options": [
            "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta'minlash",
            "Xona derazalarini ochmaslik va havoni dim saqlash",
            "Xona haroratini 35 gradusgacha qizdirish",
            "Bolaga ortiqcha jismoniy zo'riqish berish"
          ],
          "correct": 0,
          "explanation": "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog'ayishi uchun birlamchi omildir."
        },
        {
          "question": "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
          "options": [
            "Uyda parvarishlash, to'g'ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
            "Faqat kasallik varaqasini to'ldirib ketish",
            "Ota-onaga tibbiy ma'lumot bermaslik",
            "Parvarish mas'uliyatini butunlay chetga surish"
          ],
          "correct": 0,
          "explanation": "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o'qitishi, parhez va dori ichirish tartibini to'g'ri o'rgatishi lozim."
        }
      ]
    }
  ]
};

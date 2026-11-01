/**
 * =====================================================================
 * O'QUV KURSI VA DARSLIKLAR BAZASI (KONFIGURATSIYA FAYLI)
 * =====================================================================
 * Barcha 33 ta amaliy va 30 ta nazariy mavzular uchun mavzuga 100% mos
 * yangi slayd illyustratsiyalari va test savollari to'liq ulandi!
 */

var COURSE_CONFIG = {
    "course":  {
                   "title":  "Pediatriya va neonatologiyada hamshiralik ishi",
                   "subtitle":  "Elektron O\u0027quv-Metodik Majmuasi (EOMM)",
                   "code":  "50910302",
                   "direction":  "Tibbiy profilaktika va Davolash ishi yo\u0027nalishi",
                   "institution":  "2-son Nukus Abu Ali ibn Sino nomidagi jamoat salomatligi texnikumi",
                   "academicYear":  "2024 - 2026",
                   "syllabusPdfPractical":  "mundarija1.pdf",
                   "syllabusPdfTheory":  "mundarija2.pdf",
                   "department":  "Hamshiralik ishi kafedrasi"
               },
    "teacher":  {
                    "fullName":  "Sametullaeva Sveta Smaylovna",
                    "shortName":  "Sametullaeva S. S.",
                    "role":  "Pediatriya va neonatologiyada hamshiralik ishi fani o\u0027qituvchisi",
                    "avatar":  "./assets/images/teacher.png",
                    "certificateImage":  "photo_2025-05-07_11-55-23.jpg",
                    "bio":  "1973-yil 06-iyulda Nukus shahrida tug\u0027ilgan. 1990-1997 yillarda Toshkent Pediatriya Tibbiyot instituti Nukus filialida ta\u0027lim olgan. 2003-yildan buyon 2-son Nukus Abu Ali ibn Sino nomidagi jamoat salomatligi texnikumida Pediatriya va neonatologiyada hamshiralik ishi fani bo\u0027yicha talabalarga dars berib kelmoqda.",
                    "email":  "sametullaevasveta@gmail.com",
                    "phone":  "+998 97 357-25-99",
                    "telegram":  "https://t.me",
                    "location":  "Nukus shahri, Chimboy guzari 1",
                    "experienceYears":  "23 yil",
                    "stats":  {
                                  "practicalTopicsCount":  33,
                                  "theoryTopicsCount":  30,
                                  "videoLessonsCount":  63,
                                  "testsCount":  63
                              }
                },
    "practicalTopics":  [
                            {
                                "id":  "amaliy-1",
                                "number":  1,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Bolalarning jismoniy rivojlanishini monitoring qilish va baholash. Bolalikning dastlabki davrlarida rivojlanishga ta\u0027sir etuvchi omillar.",
                                "shortDesc":  "Bolalarning jismoniy o\u0027sish ko\u0027rsatkichlarini monitoring qilish, antropometriya o\u0027lchovlari va baholash mezonlari.",
                                "lecturePdf":  "Amaliyat/mavzu1/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Jismoniy rivojlanishni baholash maqsadi",
                                                   "text":  "Bolaning jismoniy o\u0027sish dinamikasini muntazam kuzatish, yoshga xos o\u0027zgarishlarni o\u0027z vaqtida aniqlash va sog\u0027lom turmush tarzini shakllantirish."
                                               },
                                               {
                                                   "title":  "2. Asosiy antropometrik o\u0027lchovlar",
                                                   "text":  "Bo\u0027y, tana vazni, bosh va ko\u0027krak qafasi aylanalarini maxsus o\u0027lchov asboblari (bolalar tarozisi, gorizontal bo\u0027y o\u0027lchagich) yordamida aniq o\u0027lchash."
                                               },
                                               {
                                                   "title":  "3. JSST standartlari va sentil jadvallari",
                                                   "text":  "Xalqaro JSST sentil jadvallari asosida bolaning vazn va bo\u0027y proporsiyalarini tekshirish, rivojlanishdan orqada qolish yoki semirishni erta aniqlash."
                                               },
                                               {
                                                   "title":  "4. Rivojlanishga ta\u0027sir etuvchi omillar",
                                                   "text":  "Genetik moyillik, to\u0027g\u0027ri ratsional ovqatlantirish, toza havoda sayr qilish, gigiyena, oilaviy muhit va o\u0027tkazilgan o\u0027tkir kasalliklarning ta\u0027siri."
                                               },
                                               {
                                                   "title":  "5. Hamshiraning monitoring va patronajdagi o\u0027rni",
                                                   "text":  "Har oylik patronaj ko\u0027riklarini o\u0027tkazish, natijalarni bolaning rivojlanish tarixiga qayd etish va ota-onalarga gigiyenik tavsiyalar berish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu1/vedio/Антропометрия.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu1/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu1/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "1 yoshgacha bo\u0027lgan bolaning bo\u0027yi qaysi asbob yordamida o\u0027lchanadi?",
                                                 "options":  [
                                                                 "Gorizontal bolalar bo\u0027y o\u0027lchagichi",
                                                                 "Vertikal yog\u0027och bo\u0027y o\u0027lchagich",
                                                                 "Santimetrli tasma",
                                                                 "Pelvimetr asbobi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "1 yoshgacha bo\u0027lgan go\u0027daklarning bo\u0027yi maxsus gorizontal bolalar bo\u0027y o\u0027lchagich taxtasida yotqizilgan holda o\u0027lchanadi."
                                             },
                                             {
                                                 "question":  "Chaqaloq tug\u0027ilganda bosh aylanasi ko\u0027krak qafasi aylanasidan qanday nisbatda bo\u0027ladi?",
                                                 "options":  [
                                                                 "Bosh aylanasi ko\u0027krak aylanasidan 1-2 sm katta bo\u0027ladi",
                                                                 "Ko\u0027krak aylanasi bosh aylanasidan 2-3 sm katta bo\u0027ladi",
                                                                 "Bosh va ko\u0027krak aylanasi teng bo\u0027ladi",
                                                                 "Ko\u0027krak aylanasi boshdan 5 sm kichik bo\u0027ladi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Tug\u0027ilganda bosh aylanasi o\u0027rtacha 34-36 sm bo\u0027lib, ko\u0027krak qafasi aylanasidan (32-34 sm) 1-2 sm katta bo\u0027ladi. Ular 4 oylikda tenglashadi."
                                             },
                                             {
                                                 "question":  "Go\u0027dak hayotining birinchi choragida (1-3 oylikda) oylik vazn ortishi me\u0027yorda necha grammni tashkil etadi?",
                                                 "options":  [
                                                                 "800 gramm",
                                                                 "300 gramm",
                                                                 "1500 gramm",
                                                                 "400 gramm"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Go\u0027dak 1-oyda o\u0027rtacha 600 gramm, 2 va 3-oylarda esa har oyda 800 grammdan vazn qo\u0027shishi me\u0027yoriy ko\u0027rsatkich hisoblanadi."
                                             },
                                             {
                                                 "question":  "Bolaning jismoniy rivojlanishini baholashda qaysi xalqaro mezon jadvallaridan foydalaniladi?",
                                                 "options":  [
                                                                 "JSST (Jahon sog\u0027liqni saqlash tashkiloti) sentil jadvallari",
                                                                 "Apgar shkalasi",
                                                                 "Glazgo shkalasi",
                                                                 "Silverman shkalasi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarning bo\u0027yi, vazni va rivojlanishini baholash uchun JSST tomonidan ishlab chiqilgan standart sentil (Z-score) jadvallari qo\u0027llaniladi."
                                             },
                                             {
                                                 "question":  "Bolaning bosh aylanasi qaysi anatomik sohalar orqali santimetrli tasma bilan o\u0027lchanadi?",
                                                 "options":  [
                                                                 "Oldinda qosh usti yoyi, orqada ensa do\u0027mbog\u0027i orqali",
                                                                 "Peshonaning o\u0027rtasi va bo\u0027yin orqali",
                                                                 "Burun suyagi va quloq suprasi orqali",
                                                                 "Faqat liqildoq ustidan"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bosh aylanasi santimetr tasmasini old tomondan qosh usti chizig\u0027i, orqa tomondan esa ensaning eng bo\u0027rtib chiqqan nuqtasi orqali o\u0027tkazib o\u0027lchanadi."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Antropometriya",
                                                     "def":  "Inson tanasi o\u0027lchamlari va jismoniy rivojlanish ko\u0027rsatkichlarini (bo\u0027y, vazn, aylanalar) maxsus asboblar yordamida o\u0027lchash usuli."
                                                 },
                                                 {
                                                     "term":  "Sentil jadvallari",
                                                     "def":  "Bolaning yoshi va jinsiga qarab vazn hamda bo\u0027y ko\u0027rsatkichlarini xalqaro me\u0027yoriy chegaralar bo\u0027yicha baholash uchun maxsus statistik jadvallar."
                                                 },
                                                 {
                                                     "term":  "Monitoring",
                                                     "def":  "Bolaning o\u0027sish va rivojlanish dinamikasini vaqt davomida muntazam va uzluksiz kuzatib borish tizimi."
                                                 },
                                                 {
                                                     "term":  "Gipotrofiya",
                                                     "def":  "Bolaning tana vazni o\u0027z yoshiga nisbatan sezilarli darajada kam bo\u0027lishi bilan kechuvchi surunkali oziqlanish buzilishi."
                                                 },
                                                 {
                                                     "term":  "Fizik rivojlanish",
                                                     "def":  "Bolaning suyak, mushak va a\u0027zolarining yoshga mos ravishda mutanosib o\u0027sishi va yetilishi jarayoni."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu1/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-2",
                                "number":  2,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Nafas olish, yurak qon-tomir, qon yaratish a\u0027zolari, teri, suyak va mushak tizimining anatomik-fiziologik xususiyatlari. Nafas sonini aniqlash. Puls tezligini aniqlash.",
                                "shortDesc":  "Nafas olish, yurak qon-tomir, suyak-mushak a\u0027zolari xususiyatlari, nafas va puls tezligini aniqlash texnikasi.",
                                "lecturePdf":  "Amaliyat/mavzu2/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. A\u0027zolar tizimining yoshga xos tuzilishi",
                                                   "text":  "Nafas va yurak qon-tomir tizimining bolalarga xos xususiyatlari: elastiklik, tor nafas yo\u0027llari, tezkor moddalar almashinuvi va yuqori puls chastotasi."
                                               },
                                               {
                                                   "title":  "2. 1 daqiqalik nafas sonini aniqlash",
                                                   "text":  "Bolaning tinch holatida yoki uyqusida ko\u0027krak qafasi harakatlarini 1 to\u0027liq daqiqa davomida sanash (chaqaloqlarda 40-60, 1 yoshda 30-35 marta)."
                                               },
                                               {
                                                   "title":  "3. Radial va uyqu arteriyasida puls tezligi",
                                                   "text":  "Pulsni periferik arteriyalarda 1 daqiqa sanash, ritmikligi va to\u0027liqligini baholash (chaqaloqlarda 120-140, 1 yoshda 110-120 zarba/daq)."
                                               },
                                               {
                                                   "title":  "4. Teri, suyak va mushak tizimini ko\u0027rish",
                                                   "text":  "Terining rangi, elastikligi, turgori, mushaklar tonusi hamda katta liqildoq o\u0027lchamlarini tekshirish va patologiyalarni qayd etish."
                                               },
                                               {
                                                   "title":  "5. Me\u0027yoriy ko\u0027rsatkichlarni hujjatlashtirish",
                                                   "text":  "Aniqlangan nafas, puls va arterial bosim ko\u0027rsatkichlarini bemorning statsionar yoki ambulatoriya varaqasiga aniq belgilab borish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu2/vedio/Qolqap kiyiw.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu2/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu2/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Yangi tug\u0027ilgan chaqaloqda 1 daqiqadagi nafas olish soni me\u0027yorda qanchaga teng?",
                                                 "options":  [
                                                                 "40 - 60 marta",
                                                                 "16 - 20 marta",
                                                                 "20 - 25 marta",
                                                                 "70 - 90 marta"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Chaqaloqlarda o\u0027pka sig\u0027imi kichik va nafas yuzaki bo\u0027lgani uchun 1 daqiqadagi nafas soni 40-60 martani tashkil etadi."
                                             },
                                             {
                                                 "question":  "1 yoshli sog\u0027lom bolaning puls urish tezligi 1 daqiqada o\u0027rtacha qancha bo\u0027ladi?",
                                                 "options":  [
                                                                 "110 - 120 zarba/daq",
                                                                 "60 - 70 zarba/daq",
                                                                 "140 - 160 zarba/daq",
                                                                 "80 - 85 zarba/daq"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "1 yoshli bolada yurak qisqarishlar soni 1 daqiqada o\u0027rtacha 110-120 zarbaga teng bo\u0027ladi."
                                             },
                                             {
                                                 "question":  "Sog\u0027lom bolada katta liqildoq odatda qaysi yoshda to\u0027liq suyaklanib yopiladi?",
                                                 "options":  [
                                                                 "12 - 18 oylikda",
                                                                 "2 - 3 oylikda",
                                                                 "6 oylikda",
                                                                 "3 yoshda"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Katta liqildoq me\u0027yorda bolaning 12-18 oyligida to\u0027liq bitadi. Erta yoki kech bitishi patologiya belgisi bo\u0027lishi mumkin."
                                             },
                                             {
                                                 "question":  "Bolalar terisining anatomik-fiziologik xususiyatiga to\u0027g\u0027ri ta\u0027rif berilgan javobni toping:",
                                                 "options":  [
                                                                 "Shox qavati yupqa, qon tomirlarga boy, o\u0027tkazuvchanligi yuqori",
                                                                 "Shox qavati juda qalin va qo\u0027pol",
                                                                 "Termoregulyatsiya to\u0027liq shakllangan, sovib qolmaydi",
                                                                 "Teri osti yog\u0027 qavati barcha sohalarda bir xil"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalar terisi nozik, shilliq qavati yupqa, kapillyar to\u0027rga boy va o\u0027tkazuvchanligi yuqori bo\u0027lib, infeksiyaga tez beriluvchandir."
                                             },
                                             {
                                                 "question":  "Go\u0027daklarda nafas sonini aniqlash qaysi holatda amalga oshiriladi?",
                                                 "options":  [
                                                                 "Bola tinch yoki uxlab yotgan holatda, to\u0027liq 1 daqiqa davomida",
                                                                 "Bola yig\u0027layotgan paytda 15 soniya sanab 4 ga ko\u0027paytiriladi",
                                                                 "Bolani ovqatlantirish paytida",
                                                                 "Jismoniy harakatdan so\u0027ng"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Yig\u0027i va hayajon paytida nafas tezlashishi sababli, nafas soni bola to\u0027liq tinchlangan yoki uxlagan paytda 60 soniya sanaladi."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Taxipnoe",
                                                     "def":  "Bolalarda nafas olish sonining yosh me\u0027yoridan ortiq tezlashishi (nafas qisishi)."
                                                 },
                                                 {
                                                     "term":  "Bradipnoe",
                                                     "def":  "Nafas harakatlari sonining yoshga xos me\u0027yordan kamayishi, nafas markazi tormozlanishi belgisi."
                                                 },
                                                 {
                                                     "term":  "Taxikardiya",
                                                     "def":  "Yurak qisqarishlari sonining (puls) yoshga xos me\u0027yordan ortiq tezlashishi."
                                                 },
                                                 {
                                                     "term":  "Bradikardiya",
                                                     "def":  "Yurak qisqarishlar sonining belgilangan me\u0027yordan kamayishi."
                                                 },
                                                 {
                                                     "term":  "Auskultatsiya",
                                                     "def":  "Ichki a\u0027zolarda (o\u0027pka, yurak) hosil bo\u0027ladigan tovushlarni stetoskop yoki fonendoskop yordamida eshitib tekshirish usuli."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu2/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-3",
                                "number":  3,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Ovqat hazm qilish, siydik ajratish, nerv va sezgi a\u0027zolari hamda ichki sekretsiya bezlarining anatomik-fiziologik xususiyatlari. Arterial qon bosimini o\u0027lchash.",
                                "shortDesc":  "Bolalarda ovqat hazm qilish va siydik ajratish xususiyatlari, qusish, najas va sutkalik diurez monitoringi.",
                                "lecturePdf":  "Amaliyat/mavzu3/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Oshqozon-ichak va siydik a\u0027zolari xususiyatlari",
                                                   "text":  "Oshqozon sig\u0027imining kichikligi, sfinkterlarning zaifligi, fermentlar faolligining pastligi va buyrak to\u0027qimasining funksional yetilmaganligi."
                                               },
                                               {
                                                   "title":  "2. Go\u0027daklarda qusish va regurgitatsiyani kuzatish",
                                                   "text":  "Ovqatlantirishdan keyin havoni chiqartirish, qusish bilan oddiy kekirish (regurgitatsiya) farqlarini ajratish va me\u0027da aspiratsiyasini oldini olish."
                                               },
                                               {
                                                   "title":  "3. Najasning xarakteri va chastotasi",
                                                   "text":  "Emizikli go\u0027daklarda axlatning rangi, hidi, chastotasi hamda patologik aralashmalar (shilliq, qon, hazm bo\u0027lmagan bo\u0027laklar) mavjudligini baholash."
                                               },
                                               {
                                                   "title":  "4. Sutkalik diurez va siydik ajralishi",
                                                   "text":  "Bolaning yoshiga qarab sutkalik siydik miqdorini aniqlash, dizuriya, oliguriya yoki poliuriya belgilarini o\u0027z vaqtida shifokorga xabar qilish."
                                               },
                                               {
                                                   "title":  "5. Gigiyenik parvarish va ota-onaga tavsiyalar",
                                                   "text":  "Har bir hojatdan so\u0027ng bolaning orqasidan oldiga qarab iliq suvda yuvish, tagliklarni o\u0027z vaqtida almashtirish va terini quruq saqlash."
                                               }
                                           ],
                                "pedTechPdf":  "Amaliyat/mavzu3/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu3/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "1 yoshdan katta bolalarda sistolik arterial qon bosimini hisoblash formulasi qaysi?",
                                                 "options":  [
                                                                 "90 + 2n (bu yerda n - yosh)",
                                                                 "100 + n",
                                                                 "80 + 3n",
                                                                 "70 + 2n"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "1 yoshdan oshgan bolalarda sistolik qon bosimi 90 + 2n formulasi bilan hisoblanadi (masalan, 5 yoshli bolada: 90 + 10 = 100 mm sim.ust)."
                                             },
                                             {
                                                 "question":  "Go\u0027daklarda ovqatlantirilgandan so\u0027ng qayt qilish (regurgitatsiya) ning asosiy anatomik sababi nima?",
                                                 "options":  [
                                                                 "Qizilo\u0027ngach-oshqozon sfinkterining bo\u0027shligi va oshqozonning vertikal joylashuvi",
                                                                 "Oshqozon kislotasining haddan tashqari yuqoriligi",
                                                                 "Oshqozon hajmining juda kattaligi",
                                                                 "Pilorik sfinkterning yo\u0027qligi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Go\u0027daklarda oshqozonning kardial sfinkteri bo\u0027sh, pilorik qismi esa yaxshi rivojlangani sababli havoni yutganda oson qayt qiladi."
                                             },
                                             {
                                                 "question":  "Bolalarda arterial qon bosimini o\u0027lchashda manjetka kengligi qanday tanlanadi?",
                                                 "options":  [
                                                                 "Manjetka yelkaning 2/3 qismini egallashi kerak",
                                                                 "Kattalar standart manjetkasi ishlatiladi",
                                                                 "Manjetka kengligi ahamiyatga ega emas",
                                                                 "Faqat bilak sohasiga o\u0027raladi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarda yoshiga mos tor bolalar manjetkasi tanlanadi va u yelkaning 2/3 qismini qoplashi shart. Katta manjetka past, kichigi esa soxta yuqori bosim ko\u0027rsatadi."
                                             },
                                             {
                                                 "question":  "1 yoshli bolada sutkalik siydik miqdorini (diurezni) hisoblash formulasi qaysi?",
                                                 "options":  [
                                                                 "V = 600 + 100 * (n - 1) ml",
                                                                 "V = 100 * n ml",
                                                                 "V = 200 * n ml",
                                                                 "V = 50 * n ml"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "1 yoshdan katta bolalarda sutkalik diurez: 600 + 100 * (n - 1) ml formulasi bilan hisoblanadi (n - bolaning yoshi)."
                                             },
                                             {
                                                 "question":  "Go\u0027daklarda emizishdan so\u0027ng darhol qanday parvarish tadbiri o\u0027tkazilishi shart?",
                                                 "options":  [
                                                                 "Bolani 10-15 daqiqa tik holda (\u0027ustuncha\u0027 qilib) ushlab turish",
                                                                 "Darhol gorizontal chalqancha yotqizish",
                                                                 "Bolani qattiq tebratish",
                                                                 "Bolani qorni bilan yotqizib uxlashga qo\u0027yish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Emizish paytida yutilgan havoni chiqarish va qusiq massasi nafas yo\u0027liga ketishining (aspiratsiya) oldini olish uchun bola 10-15 daqiqa tik tutiladi."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Tonometriya",
                                                     "def":  "Arterial qon bosimini sfigmomanometr (tonometr) va fonendoskop yordamida o\u0027lchash usuli."
                                                 },
                                                 {
                                                     "term":  "Sistolik bosim",
                                                     "def":  "Yurak qorinchalari qisqarganda (sistola paytida) tomirlardagi maksimal qon bosimi ko\u0027rsatkichi."
                                                 },
                                                 {
                                                     "term":  "Diastolik bosim",
                                                     "def":  "Yurak mushaklari bo\u0027shashgan (diastola paytidagi) minimal qon bosimi ko\u0027rsatkichi."
                                                 },
                                                 {
                                                     "term":  "Diurez",
                                                     "def":  "Ma\u0027lum vaqt oralig\u0027ida (odatda 24 soat davomida) organizmdan ajralgan siydikning umumiy miqdori."
                                                 },
                                                 {
                                                     "term":  "Peristaltika",
                                                     "def":  "Qizilo\u0027ngach, oshqozon va ichak devorlarining to\u0027lqinsimon qisqarib, ovqat luqmasini oldinga siljitish harakati."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu3/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-4",
                                "number":  4,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Gonoblennoreya profilaktikasi. Chaqaloq terisi va shilliq qavatlarini tozalash hamda parvarish qilish. Chala tug\u0027ilgan chaqaloqning belgilari, sabablari va darajalari.",
                                "shortDesc":  "Neonatologiya bo\u0027limining sanitariya tartibi, yetuk chaqaloqlar parvarishi, ertalabki tualet va xavfsiz yotqizish.",
                                "lecturePdf":  "Amaliyat/mavzu4/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Neonatologiya bo\u0027limining sanitariya tartibi",
                                                   "text":  "Bo\u0027limda qat\u0027iy aseptika va antiseptika qoidalari, xonalarni reja asosida kvartslash, shamollatish va havoni tozalash tizimini ta\u0027minlash."
                                               },
                                               {
                                                   "title":  "2. Yetuk yangi tug\u0027ilgan chaqaloq belgilari",
                                                   "text":  "Muddatida tug\u0027ilgan (38-42 hafta), vazni 2500 grammdan ortiq, terisi pushti, qichqirib yig\u0027laydigan va barcha tug\u0027ma reflekslari faol bo\u0027lgan chaqaloq."
                                               },
                                               {
                                                   "title":  "3. Chaqaloqning ertalabki tualeti",
                                                   "text":  "Ko\u0027zlarni steril paxtada chetdan markazga yuvish, burun va quloq yo\u0027llarini steril paxta pilikchalar bilan tozalash, teridagi burmalarni ko\u0027zdan kechirish."
                                               },
                                               {
                                                   "title":  "4. Tibbiyot xodimining antiseptik talablari",
                                                   "text":  "Chaqaloq bilan har bir muloqotdan oldin va keyin qo\u0027llarni gigiyenik yuvish, antiseptik bilan ishlov berish va individual xalatdan foydalanish."
                                               },
                                               {
                                                   "title":  "5. Chaqaloqni to\u0027g\u0027ri va xavfsiz yotqizish",
                                                   "text":  "Aspiratsiyaning oldini olish maqsadida chaqaloqni boshini yon tomonga burib, qattiqroq to\u0027shakka yotqizish hamda xona haroratini 22-24 В°C da ushlab turish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu4/vedio/\"Shaxsiy gigiyena\".mp4",
                                "pedTechPdf":  "Amaliyat/mavzu4/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu4/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Chaqaloq tug\u0027ilganda gonoblennoreya profilaktikasi uchun qaysi dori vositasi tomiziladi?",
                                                 "options":  [
                                                                 "20% li natriy sulfatsil (albucid) eritmasi",
                                                                 "1% li brilliant yashili eritmasi",
                                                                 "5% li yod damlamasi",
                                                                 "70% li etil spirti"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Tug\u0027ruq zalida chaqaloq ko\u0027zlariga gonokokk infeksiyasi profilaktikasi uchun 20% li natriy sulfatsil eritmasi tomiziladi."
                                             },
                                             {
                                                 "question":  "Chala tug\u0027ilgan chaqaloq deb qaysi muddatda tug\u0027ilgan chaqaloqqa aytiladi?",
                                                 "options":  [
                                                                 "Homiladorlikning 37-haftasidan oldin tug\u0027ilgan chaqaloqqa",
                                                                 "Homiladorlikning 40-haftasida tug\u0027ilgan chaqaloqqa",
                                                                 "Homiladorlikning 42-haftasida tug\u0027ilgan chaqaloqqa",
                                                                 "Faqat vazni 3 kg dan ortiq bo\u0027lgan bolaga"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Homiladorlikning 37 to\u0027liq haftasidan (259 kundan) oldin tug\u0027ilgan barcha chaqaloqlar chala tug\u0027ilgan hisoblanadi."
                                             },
                                             {
                                                 "question":  "Chala tug\u0027ilgan chaqaloqlar parvarishida qo\u0027llaniladigan \u0027Kenguru\u0027 usulining mohiyati nimada?",
                                                 "options":  [
                                                                 "Ona va chaqaloqning teri-teriga bevosita yaqin jismoniy kontakti",
                                                                 "Bolani maxsus apparatda tebratish",
                                                                 "Faqat sun\u0027iy sut berish",
                                                                 "Bolani onasidan butunlay ajratib qo\u0027yish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "\u0027Kenguru\u0027 usuli chaqaloqni onaning yalang\u0027och ko\u0027kragiga qo\u0027yib parvarishlash bo\u0027lib, termoregulyatsiya, emish va ruhiy aloqani tiklaydi."
                                             },
                                             {
                                                 "question":  "Chaqaloqning ertalabki tualetida ko\u0027zlari qaysi yo\u0027nalishda artiladi?",
                                                 "options":  [
                                                                 "Ko\u0027zning tashqi burchagidan ichki burchagiga qarab",
                                                                 "Ichki burchagidan tashqi burchagiga qarab",
                                                                 "Aylanma harakat bilan",
                                                                 "Faqat yuqoridan pastga qarab"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Mikroblar ko\u0027z yosh kanaliga kirmasligi uchun ko\u0027zlar alohida steril tampon bilan tashqi burchakdan ichki burchakka qarab artiladi."
                                             },
                                             {
                                                 "question":  "Chala tug\u0027ilgan chaqaloqlarni inkubatorda (kuvezda) parvarishlashda havo harorati dastlab necha darajada saqlanadi?",
                                                 "options":  [
                                                                 "34.5 - 36.5 gradus",
                                                                 "20 - 22 gradus",
                                                                 "28 - 30 gradus",
                                                                 "38 - 40 gradus"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Chala tug\u0027ilgan chaqaloqlar sovib ketmasligi uchun kuvez ichidagi harorat bolaning vazniga qarab 34.5 - 36.5В°C darajada tutiladi."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Gonoblennoreya",
                                                     "def":  "Chaqaloqlarning ko\u0027z shilliq qavatining (konyunktiva) gonokokk bakteriyalari bilan o\u0027tkir yiringli yallig\u0027lanishi."
                                                 },
                                                 {
                                                     "term":  "Albrext usuli",
                                                     "def":  "Chaqaloq tug\u0027ilishi bilanoq ko\u0027zlariga gonoblennoreyaning oldini olish uchun 20% li natriy sulfatsil (albucid) tomizish muolajasi."
                                                 },
                                                 {
                                                     "term":  "Chala tug\u0027ilganlik",
                                                     "def":  "Homiladorlikning 22-haftasidan 37-haftasigacha bo\u0027lgan muddatda, tana vazni 2500 grammdan kam tug\u0027ilgan bola holati."
                                                 },
                                                 {
                                                     "term":  "Kuvez (inkubator)",
                                                     "def":  "Chala tug\u0027ilgan chaqaloqlar uchun tana harorati, namlik va kislorod miqdorini doimiy ushlab turuvchi maxsus tibbiy apparat."
                                                 },
                                                 {
                                                     "term":  "Lanugo",
                                                     "def":  "Chala yoki yangi tug\u0027ilgan chaqaloqlar tanasida (yag\u0027rin, yelkalar) mavjud bo\u0027lgan mayin, nozik homila tuklari."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu4/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-5",
                                "number":  5,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Oila poliklinikasida va qishloq vrachlik punktida bolalarga hamshiralik parvarishi xususiyatlari. Bolalar patronaj xizmati.",
                                "shortDesc":  "Kindik qoldig\u0027i va kindik yarasini aseptik tozalash, teridagi burmalarni moylash hamda infeksiya profilaktikasi.",
                                "lecturePdf":  "Amaliyat/mavzu5/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Kindik qoldig\u0027ining mumiyolanishi",
                                                   "text":  "Kindik qoldig\u0027i ochiq usulda parvarish qilinganda 4-7 kun ichida o\u0027z-o\u0027zidan tushishi va quruq bitishi normal fiziologik jarayon hisoblanadi."
                                               },
                                               {
                                                   "title":  "2. Kindik yarasini aseptik tozalash",
                                                   "text":  "Kindik yarasiga 3% li vodorod peroksid tomizib, ajralmalarni quritish va vrach tavsiyasi bilan antiseptik eritma bilan ishlov berish."
                                               },
                                               {
                                                   "title":  "3. Omfalit va asoratlarning oldini olish",
                                                   "text":  "Kindik atrofi terisining qizarishi, shishishi, yoqimsiz hidli yiringli ajralma chiqishini darhol aniqlash va qat\u0027iy davolash choralarini ko\u0027rish."
                                               },
                                               {
                                                   "title":  "4. Teri burmalarini profilaktik moylash",
                                                   "text":  "Bo\u0027yin, qo\u0027ltiq osti, chov va dumba burmalarini steril o\u0027simlik moyi yoki bolalar kremi bilan ishqalab, bopora (oprelost) paydo bo\u0027lishiga yo\u0027l qo\u0027ymaslik."
                                               },
                                               {
                                                   "title":  "5. Ota-onaga uy parvarishi bo\u0027yicha yo\u0027riqnoma",
                                                   "text":  "Kindik yarasini yopiq bog\u0027lamlar bilan o\u0027rab qo\u0027ymaslik, taglik chetini pastga qayirish va yara quruq saqlanishini ta\u0027minlash."
                                               }
                                           ],
                                "pedTechPdf":  "Amaliyat/mavzu5/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu5/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Tug\u0027ruqxonadan chiqqan yangi tug\u0027ilgan chaqaloqni birlamchi patronaj ko\u0027rigi qachon o\u0027tkaziladi?",
                                                 "options":  [
                                                                 "Chiqarilgandan keyingi dastlabki 1-3 kun ichida",
                                                                 "1 oylik bo\u0027lganda",
                                                                 "15 kundan keyin",
                                                                 "Faqat bola kasal bo\u0027lganda"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Chaqaloq tug\u0027ruqxonadan uyga chiqarilgach, umumiy amaliyot shifokori va patronaj hamshirasi dastlabki 1-3 kun ichida uning xonadoniga borishi shart."
                                             },
                                             {
                                                 "question":  "1 yoshgacha bo\u0027lgan sog\u0027lom bola oila poliklinikasida profilaktik ko\u0027rikdan necha marta o\u0027tishi kerak?",
                                                 "options":  [
                                                                 "Har oyda 1 marta",
                                                                 "Yilda 1 marta",
                                                                 "Har 6 oyda 1 marta",
                                                                 "Faqat emlash kunlari"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hayotining birinchi yilida go\u0027dak har oyda 1 marta poliklinikada antropometriya va pediatr ko\u0027rigidan o\u0027tkaziladi."
                                             },
                                             {
                                                 "question":  "Patronaj hamshirasi chaqaloq xonadonida qaysi ko\u0027rsatkichlarni birinchi navbatda baholaydi?",
                                                 "options":  [
                                                                 "Emish faolligi, kindik jarohati holati, terisi va sariqlik bor-yo\u0027qligini",
                                                                 "Bolaning tishlari sonini",
                                                                 "Bolaning yurish qobiliyatini",
                                                                 "Faqat kiyim-kechaklarini"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Dastlabki patronajda chaqaloqning ko\u0027krak emishi, kindik qoldig\u0027i, teri tozaligi, mekoniy va siydik ajralishi tekshiriladi."
                                             },
                                             {
                                                 "question":  "Chaqaloq parvarish qilinadigan xonaning me\u0027yoriy harorati va namligi qancha bo\u0027lishi lozim?",
                                                 "options":  [
                                                                 "Harorat 20-22 gradus, namlik 50-60%",
                                                                 "Harorat 28-30 gradus, namlik 20%",
                                                                 "Harorat 15 gradus, namlik 80%",
                                                                 "Harorat 25-27 gradus, namlik 30%"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalar xonasida maqbul havo harorati 20-22В°C, havoning nisbiy namligi esa 50-60% bo\u0027lishi termoregulyatsiya uchun qulaydir."
                                             },
                                             {
                                                 "question":  "Poliklinikada bolaning rivojlanish tarixi qaysi rasmiy tibbiy hujjat shaklida yuritiladi?",
                                                 "options":  [
                                                                 "112/u shakl (Bolaning rivojlanish tarixi)",
                                                                 "003/u shakl (Kasallik tarixi)",
                                                                 "025/u shakl",
                                                                 "086/u shakl"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalar poliklinikasida har bir bola uchun 112/u shaklidagi \u0027Bolaning rivojlanish tarixi\u0027 rasmiylashtiriladi."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Patronaj",
                                                     "def":  "Homiladorlar, yangi tug\u0027ilgan chaqaloqlar va 1 yoshgacha bolalarni xonadonida muntazam tibbiy ko\u0027rikdan o\u0027tkazish va gigiyenik tavsiyalar berish tizimi."
                                                 },
                                                 {
                                                     "term":  "Universal-progressiv model",
                                                     "def":  "Har bir oilaning xavf darajasiga qarab patronaj ko\u0027riklari soni va mazmunini individual belgilash tizimi."
                                                 },
                                                 {
                                                     "term":  "Dispanserizatsiya",
                                                     "def":  "Aholining ma\u0027lum guruhlarini (bolalar, surunkali bemorlar) hisobga olib, doimiy dinamik nazorat qilish usuli."
                                                 },
                                                 {
                                                     "term":  "Sanitariya-maorif ishi",
                                                     "def":  "Ota-onalar o\u0027rtasida sog\u0027lom turmush tarzi, gigiyena va bolani to\u0027g\u0027ri o\u0027stirish bo\u0027yicha tushuntirish va o\u0027rgatish ishlari."
                                                 },
                                                 {
                                                     "term":  "Anamnez",
                                                     "def":  "Bolaning kasallik tarixi, rivojlanishi, oziqlanishi va yashash sharoitlari haqida ota-onasidan so\u0027rab-surishtirib to\u0027plangan ma\u0027lumotlar."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu5/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-6",
                                "number":  6,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Bolalarni ovqatlantirish. Chaqaloqlarni ko\u0027krak suti bilan emizish qoidalari, ona sutining afzalliklari. Bolaga kerak bo\u0027lgan sut miqdorini hisoblash.",
                                "shortDesc":  "Chaqaloqni gigiyenik cho\u0027miltirish, xona va suv harorati, ko\u0027krakka to\u0027g\u0027ri qo\u0027yish va tabiiy emizish qoidalari.",
                                "lecturePdf":  "Amaliyat/mavzu6/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Gigiyenik cho\u0027miltirish shartlari",
                                                   "text":  "Kindik yarasi bitgach chaqaloqni har kuni, xona harorati 22-24 В°C va qaynatilgan suv harorati 36.5 - 37 В°C bo\u0027lganda cho\u0027miltirish lozim."
                                               },
                                               {
                                                   "title":  "2. Cho\u0027miltirishning bosqichma-bosqich texnikasi",
                                                   "text":  "Bolani asta-sekin suvga tushirish, boshini chap qo\u0027l bilagida ushlab, yumshoq harakatlar bilan yuvish va oxirida iliq toza suvda chayish."
                                               },
                                               {
                                                   "title":  "3. Ona sutining bebaho xususiyatlari",
                                                   "text":  "Ona suti chaqaloq uchun eng mukammal oziq bo\u0027lib, uning tarkibidagi immunoglobulinlar va fermentlar bolani infeksiyalardan ishonchli himoya qiladi."
                                               },
                                               {
                                                   "title":  "4. Ko\u0027krakka to\u0027g\u0027ri qo\u0027yish texnikasi",
                                                   "text":  "Bolaning tanasi onaga qaratilgan, og\u0027zi katta ochilgan, nafaqat so\u0027rg\u0027ich, balki areolaning pastki qismini to\u0027liq qamragan bo\u0027lishi shart."
                                               },
                                               {
                                                   "title":  "5. Emizishdan keyingi parvarish",
                                                   "text":  "Yutilgan havoni chiqarish uchun bolani 10-15 daqiqa \u0027ustun\u0027 shaklida tik tutib turish va me\u0027dadan qayt qilishning oldini olish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu6/vedio/qon bosimini o\u0027lchash.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu6/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu6/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "JSST tavsiyasiga binoan chaqaloq tug\u0027ilgandan so\u0027ng dastlabki necha daqiqa ichida ko\u0027krakka qo\u0027yilishi kerak?",
                                                 "options":  [
                                                                 "Dastlabki 30-60 daqiqa ichida",
                                                                 "6 soatdan keyin",
                                                                 "2 kundan keyin",
                                                                 "Faqat ertasi kuni ertalab"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Chaqaloq tug\u0027ilishi bilanoq dastlabki 30-60 daqiqa ichida ona ko\u0027kragiga yotqizilib, og\u0027iz sutini emishi ta\u0027minlanishi shart."
                                             },
                                             {
                                                 "question":  "Ona sutining dastlabki kunlarda ajraladigan qismi nima deb ataladi va uning afzalligi nimada?",
                                                 "options":  [
                                                                 "Og\u0027iz suti (kolostrum) - immunoglobulinlar va oqsilga o\u0027ta boy",
                                                                 "Yetuk sut - faqat suvdan iborat",
                                                                 "Orqa sut - kam quvvatli",
                                                                 "Aralash sut"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Og\u0027iz suti (og\u0027iz suti) chaqaloqni infeksiyalardan himoya qiluvchi sekretor IgA, fermentlar va oqsillarga eng boy tabiiy immunitet manbaidir."
                                             },
                                             {
                                                 "question":  "Go\u0027dakni talab bo\u0027yicha tabiiy emizish qoidasi nimani anglatadi?",
                                                 "options":  [
                                                                 "Bolaning har bir ochlik va bezovtalik alomatida, kunduzi va kechasi emizish",
                                                                 "Har 4 soatda qat\u0027iy rejim bilan emizish",
                                                                 "Kechasi umuman emizmaslik",
                                                                 "Faqat kuniga 3 marta emizish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Erkin emizish вЂ” bola xohlagan paytda, intervalni cheklamagan holda kunduzi ham, kechasi ham ko\u0027krak tutishni bildiradi."
                                             },
                                             {
                                                 "question":  "Chaqaloq hayotining dastlabki 10 kunida 1 sutkalik sut miqdorini hisoblashda qaysi formula qo\u0027llaniladi?",
                                                 "options":  [
                                                                 "Finkelnshteyn formulasi (V = n * 70 yoki 80)",
                                                                 "Gabrilshevskiy formulasi",
                                                                 "Broka formulasi",
                                                                 "Sentil formulasi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "10 kungacha bo\u0027lgan davrda sut miqdori Finkelnshteyn formulasi bo\u0027yicha hisoblanadi (n - kunlar soni)."
                                             },
                                             {
                                                 "question":  "Chaqaloqning ko\u0027krakka to\u0027g\u0027ri qappashganligini bildiruvchi asosiy tashqi belgi qaysi?",
                                                 "options":  [
                                                                 "Og\u0027zi katta ochilgan, pastki labi tashqariga qayrilgan, areola pastki qismi og\u0027izda",
                                                                 "Faqat ko\u0027krak so\u0027rg\u0027ichining uchini tishlab turishi",
                                                                 "Emish paytida qattiq shaloqlash tovushlari chiqishi",
                                                                 "Bolaning iyaklari ko\u0027krakka tegmasligi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "To\u0027g\u0027ri qappashganda og\u0027iz katta ochiladi, pastki lab tashqariga qayriladi, iyak ko\u0027krakka tegib turadi va so\u0027rg\u0027ich shikastlanmaydi."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Tabiiy ovqatlantirish",
                                                     "def":  "Go\u0027dakni dastlabki 6 oyligida faqat ona suti bilan boqish, unga hech qanday qo\u0027shimcha ovqat yoki suv bermaslik."
                                                 },
                                                 {
                                                     "term":  "Og\u0027iz suti (kolostrum)",
                                                     "def":  "Tug\u0027ruqdan keyingi dastlabki 3-5 kun davomida ajraladigan, oqsillar, immunoglobulinlar va vitaminlarga o\u0027ta boy bo\u0027lgan quyuq dastlabki sut."
                                                 },
                                                 {
                                                     "term":  "Gipogalaktiya",
                                                     "def":  "Emizikli onada sut bezlarining yetarli miqdorda sut ajratmasligi holati."
                                                 },
                                                 {
                                                     "term":  "Shkaff formulasi",
                                                     "def":  "Yangi tug\u0027ilgan chaqaloqning bir kunlik sut miqdorini tana vazni va yashagan kunlariga qarab aniqlash usuli."
                                                 },
                                                 {
                                                     "term":  "Laktatsiya",
                                                     "def":  "Emizikli ona sut bezlarida sut hosil bo\u0027lishi va ajralishining murakkab neyro-gumoral fiziologik jarayoni."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu6/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-7",
                                "number":  7,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "6 oylikdan 1 yoshgacha bolalarga taomnoma tuzish va qo\u0027shimcha ovqatlar kiritish. 1 yoshdan katta bolalarni ovqatlantirish turlari va taomnomasi.",
                                "shortDesc":  "Chala tug\u0027ilgan chaqaloqlarning xususiyatlari, inkubator (kuvez) da parvarishlash, harorat va kislorod monitoringi.",
                                "lecturePdf":  "Amaliyat/mavzu7/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Chala tug\u0027ilganlik xususiyatlari",
                                                   "text":  "Homiladorlikning 37-haftasidan oldin tug\u0027ilgan, tana vazni 2500 g dan kam, teri osti yog\u0027 qatlami yetilmagan va haroratni saqlay olmaydigan go\u0027daklar."
                                               },
                                               {
                                                   "title":  "2. Inkubator (kuvez) da parvarishlash",
                                                   "text":  "Kuvez ichida individual harorat (34-36 В°C) va yuqori namlik (70-80%) muhitini yaratish orqali chaqaloqning hayotiy funksiyalarini saqlab qolish."
                                               },
                                               {
                                                   "title":  "3. Gipotermiyaning oldini olish",
                                                   "text":  "Haroratning keskin tushib ketishi skleremaga va nafas to\u0027xtashiga sabab bo\u0027lishi sababli tana haroratini muntazam o\u0027lchab turish."
                                               },
                                               {
                                                   "title":  "4. \u0027Kenguru\u0027 usulining (teri-teriga kontakt) ahamiyati",
                                                   "text":  "Chaqaloqni onaning ochiq ko\u0027kragiga qo\u0027yish orqali uning tana haroratini me\u0027yorlashtirish, ona-bola psixologik bog\u0027liqligini mustahkamlash."
                                               },
                                               {
                                                   "title":  "5. Ehtiyotkorlik bilan oziqlantirish",
                                                   "text":  "So\u0027rish va yutish reflekslari bo\u0027lmaganda ona sutini ingichka nazogastral zond orqali mikrodolzalarda yuborish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu7/vedio/qon bosimini o\u0027lchash.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu7/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu7/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "6 oylikdan 1 yoshgacha bolalarga taomnoma tuzish va qo\u0027shimcha ovqatlar kiritish. 1 yoshdan katta bolalarni ovqatlantirish turlari va taomnomasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Qo\u0027shimcha ovqat (prikorm)",
                                                     "def":  "Bolaga 6 oyligidan boshlab ona sutiga qo\u0027shimcha ravishda beriladigan quyuq va yarim quyuq taomlar (pyure, bo\u0027tqa)."
                                                 },
                                                 {
                                                     "term":  "Monokomponentli ovqat",
                                                     "def":  "Dastlab kiritiladigan, faqat bir turdagi sabzavot yoki yormadan (guruch, grechka) tayyorlangan allergiya chaqirmaydigan taom."
                                                 },
                                                 {
                                                     "term":  "Ovqatlanish kundaligi",
                                                     "def":  "Bolaga yangi taom kiritilganda uning qabul qilishi, terisidagi toshmalar va najas holatini qayd etib boruvchi yozuv."
                                                 },
                                                 {
                                                     "term":  "Gluten",
                                                     "def":  "Ba\u0027zi donli ekinlarda (bug\u0027doy, arpa, suli) uchraydigan, go\u0027daklarda erta berilganda hazm buzilishiga sabab bo\u0027lishi mumkin bo\u0027lgan oqsil."
                                                 },
                                                 {
                                                     "term":  "Ratsional taomnoma",
                                                     "def":  "Bolaning yoshiga, metabolizmiga va ehtiyojiga moslashtirilgan muvozanatli oqsillar, yog\u0027lar, uglevodlar va vitaminlar majmuasi."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu7/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-8",
                                "number":  8,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Chaqaloqlik davri kasalliklari, chaqaloqlar asfiksiyasida hamshiralik parvarishi. Tug\u0027ruq jarohatlari va gemolitik kasallikda hamshiralik parvarishi. Chaqaloqlarga sun\u0027iy nafas berish texnikasi. Fototerapiya o\u0027tkazish.",
                                "shortDesc":  "1 yoshgacha go\u0027daklarni ratsional ovqatlantirish, aralashmalar va qo\u0027shimcha ovqatlarni (prikorm) to\u0027g\u0027ri kiritish.",
                                "lecturePdf":  "Amaliyat/mavzu8/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Ratsional ovqatlantirish tamoyillari",
                                                   "text":  "1 yoshgacha bolaning o\u0027sishi va aqliy rivojlanishi uchun oqsil, yog\u0027, uglevod, vitamin va minerallarning me\u0027yorda yetkazib berilishini ta\u0027minlash."
                                               },
                                               {
                                                   "title":  "2. Aralash va sun\u0027iy ovqatlantirish",
                                                   "text":  "Ona suti yetishmaganda yoki bo\u0027lmaganda yoshiga moslashtirilgan sutli aralashmalarni (formulalarni) steril shishalarda berish."
                                               },
                                               {
                                                   "title":  "3. 1-qo\u0027shimcha ovqat: sabzavotli pyure",
                                                   "text":  "6 oylikdan boshlab bolaga 1 choy qoshiqdan boshlab bir komponentli sabzavotli pyure (qovoqcha, gulkaram) kiritish."
                                               },
                                               {
                                                   "title":  "4. 2 va 3-qo\u0027shimcha ovqatlar (bo\u0027tqa, go\u0027sht)",
                                                   "text":  "7 oylikda glyutensiz bo\u0027tqalar (grechka, guruch), 8 oylikda ezilgan go\u0027shtli qiyma va tuxum sarig\u0027ini ratsionga kiritish."
                                               },
                                               {
                                                   "title":  "5. Dispepsiya va allergiyaning oldini olish",
                                                   "text":  "Har bir yangi mahsulotni faqat bittadan kiritish, bolaning terisi va axlatining o\u0027zgarishini qat\u0027iy nazorat qilib borish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu8/vedio/InShot_20210419_130310345.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu8/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu8/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Chaqaloqlik davri kasalliklari, chaqaloqlar asfiksiyasida hamshiralik parvarishi. Tug\u0027ruq jarohatlari va gemolitik kasallikda hamshiralik parvarishi. Chaqaloqlarga sun\u0027iy nafas berish texnikasi. Fototerapiya o\u0027tkazish. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Asfiksiya",
                                                     "def":  "Chaqaloq tug\u0027ilganda nafas olmasligi yoki yuzaki, tartibsiz nafas olishi natijasida gipoksiya va giperkapniya rivojlanishi."
                                                 },
                                                 {
                                                     "term":  "Apgar shkalasi",
                                                     "def":  "Yangi tug\u0027ilgan chaqaloqning hayotiy belgilarini (yurak urishi, nafas, mushak tonusi, reflekslar, teri rangi) 1- va 5-daqiqalarda 10 ballik tizimda baholash."
                                                 },
                                                 {
                                                     "term":  "Gemolitik kasallik",
                                                     "def":  "Ona va homila qonining rezus-omil yoki qon guruhlari bo\u0027yicha mos kelmasligi sababli eritrotsitlarning ommaviy parchalanishi."
                                                 },
                                                 {
                                                     "term":  "Fototerapiya",
                                                     "def":  "Chaqaloqlar sarg\u0027ayganda bilirubinni eruvchan shaklga o\u0027tkazish uchun ko\u0027k spektrli maxsus yorug\u0027lik nurlari bilan davolash usuli."
                                                 },
                                                 {
                                                     "term":  "Kefalogematoma",
                                                     "def":  "Tug\u0027ruq paytida mexanik bosim tufayli kalla suyagi ustparda ostiga qon quyilishi natijasida hosil bo\u0027lgan shish."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu8/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-9",
                                "number":  9,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Chaqaloqlarda teri va kindik kasalliklari, chaqaloqlar sepsisi, pnevmopatiya va to\u0027satdan o\u0027lim sindromida hamshiralik parvarishi. Kindik jarohatini parvarish qilish. Yurakni massaj qilish texnikasi.",
                                "shortDesc":  "Chaqaloqlar asfiksiyasi va tug\u0027ruq jarohatlarida birlamchi neonatal reanimatsiya va qat\u0027iy tinchlik parvarishi.",
                                "lecturePdf":  "Amaliyat/mavzu9/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Chaqaloqlar asfiksiyasi etiologiyasi",
                                                   "text":  "Tug\u0027ruq paytida homilaning kislorod yetishmovchiligi (gipoksiya) ga uchrashi natijasida nafasning bo\u0027lmasligi yoki yuzaki sust bo\u0027lishi."
                                               },
                                               {
                                                   "title":  "2. Birlamchi neonatal reanimatsiya",
                                                   "text":  "Chaqaloqni quruq issiq yo\u0027rgakka olish, havo yo\u0027llaridagi shilliqni elektrosos yoki nokcha bilan so\u0027rib tozalash va taktil stimulyatsiya."
                                               },
                                               {
                                                   "title":  "3. Ambu qopi orqali sun\u0027iy shamollatish",
                                                   "text":  "Nafas tiklanmasa, yuzga mos germetik niqob orqali daqiqasiga 40-60 marta musbat bosimli sun\u0027iy nafas berish."
                                               },
                                               {
                                                   "title":  "4. Tug\u0027ruq jarohatlari: sefalogematoma",
                                                   "text":  "Bosh suyagi ustparda ostiga qon quyilishi (sefalogematoma) da jarohatlangan sohani bosmaslik, muz qo\u0027yish va qat\u0027iy tinchlik rejimini ta\u0027minlash."
                                               },
                                               {
                                                   "title":  "5. Neyrosonografiya va asoratlarning monitoringi",
                                                   "text":  "Miya qon aylanishi buzilishini erta aniqlash va asab tizimi faoliyatini tiklash bo\u0027yicha shifokor ko\u0027rsatmalarini bajarish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu9/vedio/video_2023-10-15_05-38-18.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu9/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu9/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Chaqaloqlarda teri va kindik kasalliklari, chaqaloqlar sepsisi, pnevmopatiya va to\u0027satdan o\u0027lim sindromida hamshiralik parvarishi. Kindik jarohatini parvarish qilish. Yurakni massaj qilish texnikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Omfalit",
                                                     "def":  "Chaqaloq kindik jarohati, kindik qoldig\u0027i va uning atrofidagi teri hamda teri osti to\u0027qimalarining bakterial yallig\u0027lanishi."
                                                 },
                                                 {
                                                     "term":  "Sepsis",
                                                     "def":  "Infeksiyaning birlamchi o\u0027choqdan (masalan, kindikdan) qonga tarqalishi natijasida yuzaga keladigan og\u0027ir umumiy infeksion jarayon."
                                                 },
                                                 {
                                                     "term":  "Piodermiya",
                                                     "def":  "Chaqaloqlar terisining stafilokokk yoki streptokokklar ta\u0027sirida yiringli shikastlanishi (pufakchalar, chipqonlar)."
                                                 },
                                                 {
                                                     "term":  "Vezikulopustulyoz",
                                                     "def":  "Teridagi ter bezlari teshiklarining yiringlab, mayda pufakchalar hosil bo\u0027lishi bilan kechuvchi kasallik."
                                                 },
                                                 {
                                                     "term":  "Kindik qoldig\u0027i mumifikatsiyasi",
                                                     "def":  "Yangi tug\u0027ilgan chaqaloq kindik qoldig\u0027ining qisqich ostida asta-sekin qurib, o\u0027z-o\u0027zidan tushib ketish jarayoni."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu9/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-10",
                                "number":  10,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Go\u0027dak va kichik yoshdagi bolalarda hamshiralik parvarishi. Raxit, spazmofiliya va ekssudativ-kataral diatez kasalliklarida hamshiralik parvarishi.",
                                "shortDesc":  "Chaqaloqlar gemolitik kasalligi (ChGK), fototerapiya o\u0027tkazish, bilirubin monitoringi va asoratlarning oldini olish.",
                                "lecturePdf":  "Amaliyat/mavzu10/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. ChGK sabablari va xavf omillari",
                                                   "text":  "Ona rezus-manfiy, bola rezus-musbat bo\u0027lganda yoki AB0 tizimi bo\u0027yicha qon guruhlari mos kelmaganda antitelolar orqali eritrotsitlarning yemirilishi."
                                               },
                                               {
                                                   "title":  "2. Klinik shakllari va xavfli belgilar",
                                                   "text":  "Kasallikning 3 ta asosiy shakli: shishli (eng og\u0027ir), sariqlik va anemiyali shakllari mavjud bo\u0027lib, hayotning ilk soatlarida namoyon bo\u0027ladi."
                                               },
                                               {
                                                   "title":  "3. Yadroviy sariqlik va miya zararlanishi",
                                                   "text":  "Erkin (egri) bilirubin miqdori kritik darajadan oshganda miya po\u0027stlog\u0027i yadrolarini zaharlab, og\u0027ir nevrologik asoratlar keltirib chiqarishi."
                                               },
                                               {
                                                   "title":  "4. Fototerapiya o\u0027tkazish qoidalari",
                                                   "text":  "Maxsus ko\u0027k chiroq ostida chaqaloqning terisini yoritish, bunda ko\u0027zlarni va jinsiy a\u0027zolarni nur o\u0027tkazmaydigan bog\u0027lam bilan himoyalash."
                                               },
                                               {
                                                   "title":  "5. Qon almashtirib quyish (ZPK) amaliyoti",
                                                   "text":  "Bilirubin darajasi keskin oshganda zudlik bilan donor qonini tomir ichiga yuborib, toksik bilirubin va antitelolarni chiqarib tashlash."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu10/vedio/InShot_20211015_110054038.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu10/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu10/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Go\u0027dak va kichik yoshdagi bolalarda hamshiralik parvarishi. Raxit, spazmofiliya va ekssudativ-kataral diatez kasalliklarida hamshiralik parvarishi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Raxit",
                                                     "def":  "D vitamini va fosfor-kalsiy almashinuvining buzilishi oqibatida suyak to\u0027qimasi shakllanishi izdan chiqadigan bolalik kasalligi."
                                                 },
                                                 {
                                                     "term":  "Kraniotabes",
                                                     "def":  "Raxitning erta belgisi bo\u0027lib, chaqaloq kalla suyagi ensa va tepa suyaklarining yumshab qolishi holati."
                                                 },
                                                 {
                                                     "term":  "Spazmofiliya (tetaniya)",
                                                     "def":  "Qonda erkin kalsiy miqdorining keskin kamayishi oqibatida mushaklarda talvasa va tortishishlar rivojlanishi."
                                                 },
                                                 {
                                                     "term":  "Laringospazm",
                                                     "def":  "Spazmofiliyada ovoz yorig\u0027ining to\u0027satdan spazmga uchrashi, ovozning bo\u0027g\u0027ilishi va nafas to\u0027xtashi xavfi."
                                                 },
                                                 {
                                                     "term":  "Atopik diatez",
                                                     "def":  "Bolaning tashqi muhit allergenlariga nisbatan tug\u0027ma moyilligi va allergik yallig\u0027lanishlarga moyillik holati."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu10/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-11",
                                "number":  11,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Nafas a\u0027zolari kasalliklari. Rinit, angina va laringit kasalliklarida bolalarga hamshiralik parvarishi. Nafas sonini sanash. Ko\u0027z, burun va quloqqa dori tomizish. Quloqqa isituvchi kompress qo\u0027yish.",
                                "shortDesc":  "D vitamini tanqisligida raxit, spazmofiliya va gipotrofiyada hamshiralik parvarishi, parhez va D vitamini dozalari.",
                                "lecturePdf":  "Amaliyat/mavzu11/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Raxit kasalligining etiopatogenezi",
                                                   "text":  "Quyosh nuri va oziq-ovqat yetishmovchiligi natijasida D vitamini tanqisligi, kalsiy va fosfor almashinuvining chuqur buzilishi."
                                               },
                                               {
                                                   "title":  "2. Boshlang\u0027ich va avj olgan davr belgilari",
                                                   "text":  "Bolaning bezovtalanishi, boshining orqa qismi terlab kal bo\u0027lishi, katta liqildoq chetlarining yumshashi va suyak deformatsiyalari."
                                               },
                                               {
                                                   "title":  "3. Spazmofiliyadagi laringospazm xavfi",
                                                   "text":  "Qonda kalsiyning keskin kamayishi oqibatida hiqildoq muskullarining tortilishi, tovushsiz qichqirish va nafasning to\u0027xtab qolishi."
                                               },
                                               {
                                                   "title":  "4. Gipotrofiyada ovqatlantirishni hisoblash",
                                                   "text":  "Tana vazni yetishmovchiligida oziqlantirishni yengil hazm bo\u0027luvchi bo\u0027laklarga bo\u0027lib, oqsil va kaloriyalar balansini doimiy nazorat qilish."
                                               },
                                               {
                                                   "title":  "5. D vitamini profilaktikasi va davosi",
                                                   "text":  "Bolaga 1 oyligidan boshlab shifokor tavsiya qilgan dozada suvli D3 vitamini eritmasini berish va toza havoda yetarlicha sayr qildirish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu11/vedio/Da`rilik_zatti_qulaqqa_tel.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu11/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu11/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Nafas a\u0027zolari kasalliklari. Rinit, angina va laringit kasalliklarida bolalarga hamshiralik parvarishi. Nafas sonini sanash. Ko\u0027z, burun va quloqqa dori tomizish. Quloqqa isituvchi kompress qo\u0027yish. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Rinit",
                                                     "def":  "Burun bo\u0027shlig\u0027i shilliq qavatining yallig\u0027lanishi, burundan shilliq oqishi va nafas qiyinlashishi."
                                                 },
                                                 {
                                                     "term":  "Angina (tonzillit)",
                                                     "def":  "Tanglay murtaklarining (bodomsimon bezlar) streptokokk yoki boshqa mikroblar ta\u0027sirida o\u0027tkir yallig\u0027lanishi."
                                                 },
                                                 {
                                                     "term":  "Laringit",
                                                     "def":  "Hiqildoq shilliq qavatining yallig\u0027lanishi, ovozning bo\u0027g\u0027ilishi va quruq yo\u0027tal bilan namoyon bo\u0027lishi."
                                                 },
                                                 {
                                                     "term":  "Soxta krup (stenozlovchi laringit)",
                                                     "def":  "Hiqildoq osti sohasining shishi natijasida ovoz bo\u0027g\u0027ilishi, xirillagan \u0027huruvchi\u0027 yo\u0027tal va bo\u0027g\u0027ilish xuruji."
                                                 },
                                                 {
                                                     "term":  "Instillyatsiya",
                                                     "def":  "Ko\u0027z, burun yoki quloq bo\u0027shlig\u0027iga shifobaxsh tomchilarni to\u0027g\u0027ri texnika bilan tomizish muolajasi."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu11/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-12",
                                "number":  12,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Bronxial astma, bronxit va pnevmoniyada bola hamda uning oilasiga hamshiralik parvarishi. Xantal (gorchichnik) qo\u0027yish. Oyoqqa vanna qo\u0027yish. Soxta krup xurujida tez yordam ko\u0027rsatish. Cho\u0027ntak ingalyatoridan foydalanish.",
                                "shortDesc":  "O\u0027tkir respirator kasalliklar, bronxit va pnevmoniyada parvarish, nebulayzer terapiyasi va postural drenaj.",
                                "lecturePdf":  "Amaliyat/mavzu12/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Nafas a\u0027zolari yallig\u0027lanishining xususiyatlari",
                                                   "text":  "Bolalarda bronxlar shilliq qavatining boy qon bilan ta\u0027minlanganligi tufayli yallig\u0027lanish tezda shish va bronxospazmga aylanadi."
                                               },
                                               {
                                                   "title":  "2. Pnevmoniyaning klinik belgilari",
                                                   "text":  "Yuqori tana harorati, intoksikatsiya, yo\u0027tal, hansirash, burun qanotlarining kerilishi va ko\u0027krak qafasining yordamchi muskullari tortilishi."
                                               },
                                               {
                                                   "title":  "3. Nebulayzerda ingalyatsion terapiya",
                                                   "text":  "Kompressorli nebulayzer yordamida mukolitiklar va bronxolitiklarni o\u0027pkaning eng mayda alveolalarigacha yetkazib berish."
                                               },
                                               {
                                                   "title":  "4. Vibratsion massaj va postural drenaj",
                                                   "text":  "Balg\u0027amni oson ko\u0027chirish maqsadida bolaning boshini pastroq qilib, ko\u0027krak qafasiga barmoq uchlari bilan ritmik zarbalar berish."
                                               },
                                               {
                                                   "title":  "5. Pulsoksimetriya va kislorod terapiyasi",
                                                   "text":  "Qonning kislorod bilan to\u0027yinishini (SpO2) o\u0027lchash va u 92% dan pasayganda namlangan kislorod niqobi orqali yordam berish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu12/vedio/video_2023-10-05_17-04-23.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu12/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu12/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Bronxial astma, bronxit va pnevmoniyada bola hamda uning oilasiga hamshiralik parvarishi. Xantal (gorchichnik) qo\u0027yish. Oyoqqa vanna qo\u0027yish. Soxta krup xurujida tez yordam ko\u0027rsatish. Cho\u0027ntak ingalyatoridan foydalanish. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Bronxial astma",
                                                     "def":  "Nafas yo\u0027llarining surunkali allergik yallig\u0027lanishi, bronxlar spazmi va nafas chiqarishning (ekspirator) qiyinlashishi xuruji."
                                                 },
                                                 {
                                                     "term":  "Pnevmoniya",
                                                     "def":  "O\u0027pka to\u0027qimasining o\u0027tkir infeksion yallig\u0027lanishi, isitma, yo\u0027tal, hansirash va mayda pufakchali xirillashlar bilan kechishi."
                                                 },
                                                 {
                                                     "term":  "Bronxit",
                                                     "def":  "Bronxlar shilliq qavatining diffuz yallig\u0027lanishi, ko\u0027krak qafasida og\u0027riq va balg\u0027amli yo\u0027tal bilan kechishi."
                                                 },
                                                 {
                                                     "term":  "Ingalyatsiya",
                                                     "def":  "Dorivor moddalarni aerozol yoki bug\u0027 holatida nafas yo\u0027llariga yuborish orqali davolash usuli."
                                                 },
                                                 {
                                                     "term":  "Nebulayzer",
                                                     "def":  "Suyuq dori vositalarini mayda dispersli aerozol holatiga aylantirib, o\u0027pka alveolalarigacha yetkazib beruvchi apparat."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu12/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-13",
                                "number":  13,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Qon aylanish a\u0027zolari kasalliklari, tug\u0027ma yurak nuqsonlari, revmatizm va revmatik xoreyada hamshiralik parvarishi. Pulsni aniqlash. Biokimyoviy tahlil uchun qon olish.",
                                "shortDesc":  "Bronxial astma xurujida birinchi yordam, cho\u0027ntak ingalyatorlari, speyser va nebulayzerdan foydalanish texnikasi.",
                                "lecturePdf":  "Amaliyat/mavzu13/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Bronxial astma xuruji belgilari",
                                                   "text":  "Nafas chiqarishning qiyinlashishi (ekspirator hansirash), masofadan eshitiluvchi hushtaksimon xirillashlar va bezovtalik."
                                               },
                                               {
                                                   "title":  "2. Xuruj paytida birinchi shoshilinch yordam",
                                                   "text":  "Bolani deraza oldiga o\u0027tqazish, tor kiyimlarini yechish, toza havo oqimini ta\u0027minlash va psixologik tinchlantirish."
                                               },
                                               {
                                                   "title":  "3. Dozalangan cho\u0027ntak ingalyatori va speyser",
                                                   "text":  "Speyser kamerasi orqali tez ta\u0027sir qiluvchi bronxodilatatorni (salbutamol) 1-2 doza purkash va chuqur nafas oldirish."
                                               },
                                               {
                                                   "title":  "4. Nebulayzer orqali shoshilinch ingalyatsiya",
                                                   "text":  "Kuchli bronxospazmda nebulayzer orqali Berodual yoki Pulmikort eritmalarini fiziologik eritma bilan aralashtirib yuborish."
                                               },
                                               {
                                                   "title":  "5. Profilaktika va gipoallergen muhit",
                                                   "text":  "Bolaning xonasidan gilam, yumshoq o\u0027yinchoqlar, uy hayvonlarini olib tashlash va chang to\u0027planishining oldini olish."
                                               }
                                           ],
                                "pedTechPdf":  "Amaliyat/mavzu13/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu13/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Qon aylanish a\u0027zolari kasalliklari, tug\u0027ma yurak nuqsonlari, revmatizm va revmatik xoreyada hamshiralik parvarishi. Pulsni aniqlash. Biokimyoviy tahlil uchun qon olish. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Tug\u0027ma yurak nuqsoni (TYuN)",
                                                     "def":  "Homila rivojlanishida yurak va yirik tomirlar anatomik tuzilishining noto\u0027g\u0027ri shakllanishi."
                                                 },
                                                 {
                                                     "term":  "Revmatizm",
                                                     "def":  "A guruh beta-gemolitik streptokokk infeksiyasidan keyin yurak va bo\u0027g\u0027imlarni shikastlovchi autoimmun kasallik."
                                                 },
                                                 {
                                                     "term":  "Kardit",
                                                     "def":  "Yurak qavatlarining (miokard, endokard, perikard) yallig\u0027lanishi."
                                                 },
                                                 {
                                                     "term":  "Revmatik xoreya",
                                                     "def":  "Bosh miya po\u0027stloq osti tugunlarining shikastlanishi sababli qo\u0027l-oyoq va yuz mushaklarining ixtiyorsiz, tartibsiz qisqarishi."
                                                 },
                                                 {
                                                     "term":  "Sianoz",
                                                     "def":  "Qonda kislorod yetishmovchiligi (gipoksiya) sababli teri va shilliq qavatlarning ko\u0027kimtir tusga kirishi."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu13/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-14",
                                "number":  14,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Ovqat hazm qilish a\u0027zolari kasalliklari. Pilorostenoz va pilorospazm, diareya, gastrit va enterokolitda hamshiralik parvarishi. Qusganda va qorin og\u0027rig\u0027ida parvarish qilish. Og\u0027ir suvsizlanishda degidratsiya va suyuqlik yuborish.",
                                "shortDesc":  "O\u0027tkir gastrit va diareyada oshqozonni zond bilan yuvish, koprogrammaga tahlil olish va tejamkor parhez.",
                                "lecturePdf":  "Amaliyat/mavzu14/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. O\u0027tkir gastrit va diareya sabablari",
                                                   "text":  "Sifatsiz yoki yoshiga to\u0027g\u0027ri kelmaydigan oziq-ovqatlar iste\u0027mol qilish, bakterial va virusli infeksiyalar natijasida yuzaga kelishi."
                                               },
                                               {
                                                   "title":  "2. Qusish kuzatilganda hamshira harakati",
                                                   "text":  "Qusiq massalarining nafas yo\u0027llariga tushmasligi uchun bolaning boshini yonga burish, og\u0027iz bo\u0027shlig\u0027ini toza suvda chayish."
                                               },
                                               {
                                                   "title":  "3. Oshqozonni zond orqali yuvish",
                                                   "text":  "Zaharli yoki buzilgan ovqat qoldiqlarini chiqarish uchun bolaning bo\u0027yiga mos zond orqali iliq suv bilan toza chayindi hosil bo\u0027lguncha yuvish."
                                               },
                                               {
                                                   "title":  "4. Koprogramma va bakteriologik ekmaga tahlil",
                                                   "text":  "Najas namunalarini maxsus steril konteynerga yig\u0027ib, laboratoriyaga zudlik bilan yetkazish qoidalariga amal qilish."
                                               },
                                               {
                                                   "title":  "5. Parhez va tejamkor rejim",
                                                   "text":  "Oshqozon shilliq qavatini asrash uchun yog\u0027siz, qaynatilgan suyuq taomlar (shilimshiq sho\u0027rvalar, guruch qaynatmasi) berish."
                                               }
                                           ],
                                "pedTechPdf":  "Amaliyat/mavzu14/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu14/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Ovqat hazm qilish a\u0027zolari kasalliklari. Pilorostenoz va pilorospazm, diareya, gastrit va enterokolitda hamshiralik parvarishi. Qusganda va qorin og\u0027rig\u0027ida parvarish qilish. Og\u0027ir suvsizlanishda degidratsiya va suyuqlik yuborish. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Pilorostenoz",
                                                     "def":  "Oshqozonning o\u0027n ikki barmoqli ichakka o\u0027tish qismi (pilorus) mushaklarining tug\u0027ma qalinlashishi va torayishi, \u0027favvora\u0027dek qusish bilan kechishi."
                                                 },
                                                 {
                                                     "term":  "Pilorospazm",
                                                     "def":  "Oshqozon chiqish qismi mushaklarining funksional asabiy qisqarishi (spazmi), davriy qusish bilan namoyon bo\u0027lishi."
                                                 },
                                                 {
                                                     "term":  "Diareya (ich ketishi)",
                                                     "def":  "Najas chiqarish chastotasining ko\u0027payishi va uning suyuq holatga kelishi bilan kechuvchi hazm buzilishi."
                                                 },
                                                 {
                                                     "term":  "Eksikoz (degidratsiya)",
                                                     "def":  "Ich ketishi va qusish oqibatida organizmning suv va elektrolitlarni (kaliy, natriy) xavfli darajada yo\u0027qotishi."
                                                 },
                                                 {
                                                     "term":  "Oral regidratsiya",
                                                     "def":  "Suvsizlanishning oldini olish va davolash uchun bolaga maxsus tuzli eritmalarni (Regidron) ichirish muolajasi."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu14/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-15",
                                "number":  15,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Og\u0027iz shilliq qavati kasalliklari, stomatit va gelmintozlarda (askaridoz, enterobioz) hamshiralik parvarishi. Og\u0027iz shilliq qavatiga dori surtish. Perianal burmalardan qirma olish texnikasi.",
                                "shortDesc":  "Stomatitlarda og\u0027iz shilliq qavatiga dori surtish, enterobioz va askaridozda perianal qirma olish texnikasi.",
                                "lecturePdf":  "Amaliyat/mavzu15/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Stomatitlarning klinik ko\u0027rinishlari",
                                                   "text":  "Og\u0027iz shilliq qavatida oq karashlar (molochnitsa), yarachalar (aftalar), qizarish, kuchli og\u0027riq va so\u0027lak oqishi."
                                               },
                                               {
                                                   "title":  "2. Og\u0027iz bo\u0027shlig\u0027ini antiseptik bilan tozalash",
                                                   "text":  "Romashka damlamasi, furatsilin yoki nistatin suspenziyasi bilan og\u0027iz bo\u0027shlig\u0027ini ehtiyotkorlik bilan artib ishlov berish."
                                               },
                                               {
                                                   "title":  "3. Gelmintozlarning bolaga zarari",
                                                   "text":  "Askarida va ostritsalar bolaning ishtahasini pasaytiradi, vazn yo\u0027qotish, kechki payt tish g\u0027ijirlatish va orqa chiqaruv teshigi qichishishini keltirib chiqaradi."
                                               },
                                               {
                                                   "title":  "4. Enterobiozga qirma olish texnikasi",
                                                   "text":  "Ertalab yuvinmasdan oldin perianal burmalarga shaffof yopishqoq lentani yopishtirib olish va buyum oynasiga yopishtirish."
                                               },
                                               {
                                                   "title":  "5. Shaxsiy gigiyena qoidalarini o\u0027rgatish",
                                                   "text":  "Qo\u0027llarni hojatdan so\u0027ng va ovqatdan oldin sovunlab yuvish, tirnoqlarni qisqa olish va meva-sabzavotlarni toza yuvish."
                                               }
                                           ],
                                "pedTechPdf":  "Amaliyat/mavzu15/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu15/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Og\u0027iz shilliq qavati kasalliklari, stomatit va gelmintozlarda (askaridoz, enterobioz) hamshiralik parvarishi. Og\u0027iz shilliq qavatiga dori surtish. Perianal burmalardan qirma olish texnikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Stomatit",
                                                     "def":  "Og\u0027iz bo\u0027shlig\u0027i shilliq qavatining yallig\u0027lanishi, qizarishi, yaralar (aftalar) paydo bo\u0027lishi."
                                                 },
                                                 {
                                                     "term":  "Kandidoz (molochnitsa)",
                                                     "def":  "Candida zamburug\u0027lari keltirib chiqaradigan og\u0027iz shilliq qavatida oq tvorogsimon karash hosil qiluvchi yallig\u0027lanish."
                                                 },
                                                 {
                                                     "term":  "Askaridoz",
                                                     "def":  "Ascaris lumbricoides to\u0027garak chuvalchangi keltirib chiqaradigan, ichak va o\u0027pkani zararlaydigan invazion kasallik."
                                                 },
                                                 {
                                                     "term":  "Enterobioz",
                                                     "def":  "Ostritsa (Enterobius vermicularis) gijjasi sababli kechasi orqa chiqaruv teshigi qichishi bilan namoyon bo\u0027ladigan kasallik."
                                                 },
                                                 {
                                                     "term":  "Perianal qirma",
                                                     "def":  "Enterobioz tuxumlarini laboratoriyada aniqlash uchun orqa chiqaruv teshigi burmalaridan yopishqoq lenta yordamida olinadigan tahlil."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu15/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-16",
                                "number":  16,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Qon va qon yaratish a\u0027zolari kasalliklari, kamqonlik (anemiya) da hamshiralik parvarishi. Umumiy tahlil uchun kapillyar qon olish. Qon tahlili natijalarini o\u0027qish va baholash.",
                                "shortDesc":  "Temir tanqisligi anemiyasida kapillyar qon olish, gemoglobinni baholash va temir preparatlarini to\u0027g\u0027ri berish.",
                                "lecturePdf":  "Amaliyat/mavzu16/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Temir tanqisligi anemiyasining belgilari",
                                                   "text":  "Terining oqarishi, lanjlik, tez charchash, ishtaha pasayishi, tirnoqlarning sinuvchanligi va g\u0027alati narsalarni (bo\u0027r, tuproq) yeyishga moyillik."
                                               },
                                               {
                                                   "title":  "2. Kapillyar qon olish algoritmi",
                                                   "text":  "4-barmoq uchini spirt bilan zararsizlantirib, bir martalik skarifitsator bilan 2 mm chuqurlikda teshib, dastlabki tomchini artib tashlash."
                                               },
                                               {
                                                   "title":  "3. Gemoglobin va eritrotsitlar ko\u0027rsatkichlari",
                                                   "text":  "Qon tahlilida gemoglobin miqdorining 110 g/l dan pasayishi va rang ko\u0027rsatkichining kamayishi anemiya darajasini belgilaydi."
                                               },
                                               {
                                                   "title":  "4. Temir preparatlarini to\u0027g\u0027ri qabul qilish",
                                                   "text":  "Tomchi yoki sirop shaklidagi temir dorilarini ovqat oralig\u0027ida berish, tish emalini himoya qilish uchun somoncha orqali ichirish."
                                               },
                                               {
                                                   "title":  "5. Ratsionni oqsil va temirga boyitish",
                                                   "text":  "Bolaning taomnomasiga mol go\u0027shti, jigar, til, tuxum sarig\u0027i va C vitaminiga boy tabiiy sharbatlarni muntazam qo\u0027shish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu16/vedio/video_2023-10-15_17-18-36.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu16/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu16/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Qon va qon yaratish a\u0027zolari kasalliklari, kamqonlik (anemiya) da hamshiralik parvarishi. Umumiy tahlil uchun kapillyar qon olish. Qon tahlili natijalarini o\u0027qish va baholash. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Anemiya (kamqonlik)",
                                                     "def":  "Qon birligi hajmida gemoglobin miqdori va eritrotsitlar sonining kamayishi bilan xarakterlanuvchi klinik holat."
                                                 },
                                                 {
                                                     "term":  "Temir tanqisligi anemiyasi (TTA)",
                                                     "def":  "Organizmda temir moddasining yetishmovchiligi natijasida gemoglobin sintezining buzilishi."
                                                 },
                                                 {
                                                     "term":  "Gemoglobin (Hb)",
                                                     "def":  "Eritrotsitlar tarkibidagi temirli murakkab oqsil bo\u0027lib, o\u0027pkadan to\u0027qimalarga kislorod tashiydi."
                                                 },
                                                 {
                                                     "term":  "Sideropenik sindrom",
                                                     "def":  "To\u0027qimalarda temir yetishmasligi oqibatida tirnoqlar sinishi, soch to\u0027kilishi, ta\u0027m buzilishi (bo\u0027r, tuproq yeyish)."
                                                 },
                                                 {
                                                     "term":  "Kapillyar qon",
                                                     "def":  "Barmog\u0027i yoki chaqaloqlar tovonidan mayda kapillyarlardan laborator tahlil uchun olinadigan periferik qon."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu16/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-17",
                                "number":  17,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Gemorragik diatez kasalliklarida bola va uning oila a\u0027zolariga hamshiralik parvarishi. Burundan qon ketganda birinchi yordam ko\u0027rsatish. Muzli xaltachadan foydalanish texnikasi.",
                                "shortDesc":  "Gemorragik diatezlarda burundan qon ketganda birinchi yordam, tampon qo\u0027yish va muzli xaltachadan foydalanish.",
                                "lecturePdf":  "Amaliyat/mavzu17/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Gemorragik diatezlarning xususiyatlari",
                                                   "text":  "Trombotsitopenik purpura va gemofiliyada terida o\u0027z-o\u0027zidan paydo bo\u0027luvchi qontalashlar, qonashlar va bo\u0027g\u0027imlarda qon quyilishi."
                                               },
                                               {
                                                   "title":  "2. Burundan qon ketganda (epistaksis) yordam",
                                                   "text":  "Bolani o\u0027tqazib, boshini oldinga engashtirish (qon oshqozonga ketmasligi uchun) va burun qanotlarini 5-10 daqiqa siqib turish."
                                               },
                                               {
                                                   "title":  "3. Vodorod peroksidli tampon qo\u0027yish",
                                                   "text":  "Burun katagiga 3% li vodorod peroksid eritmasida namlangan steril paxta yoki doka pilikchani ehtiyotkorlik bilan kiritish."
                                               },
                                               {
                                                   "title":  "4. Sovuq kompress qo\u0027llash",
                                                   "text":  "Tomirlarni toraytirish maqsadida peshona va burun suyagi sohasiga muzli xaltacha yoki sovuq suvda ho\u0027llangan sochiq qo\u0027yish."
                                               },
                                               {
                                                   "title":  "5. Bemor bolaga ehtiyotkor parvarish",
                                                   "text":  "Mushak ichiga inyeksiyalar qilishni taqiqlash, o\u0027tkir o\u0027yinchoqlardan asrash va jarohatlanish xavfini bartaraf etish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu1/vedio/Антропометрия.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu1/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu1/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Gemorragik diatez kasalliklarida bola va uning oila a\u0027zolariga hamshiralik parvarishi. Burundan qon ketganda birinchi yordam ko\u0027rsatish. Muzli xaltachadan foydalanish texnikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Gemorragik diatez",
                                                     "def":  "Qon tomir, trombotsit yoki qon ivish tizimi patologiyasi oqibatida qon ketishga va teriga qon quyilishiga moyillik."
                                                 },
                                                 {
                                                     "term":  "Trombotsitopeniya",
                                                     "def":  "Qonda qon ivishida ishtirok etuvchi trombotsitlar sonining me\u0027yordan (150-400 x 10^9/l) kamayishi."
                                                 },
                                                 {
                                                     "term":  "Epistaksis",
                                                     "def":  "Burun bo\u0027shlig\u0027i qon tomirlarining (Kisselbax chigali) yorilishi oqibatida burundan qon ketish holati."
                                                 },
                                                 {
                                                     "term":  "Gemostaz",
                                                     "def":  "Qon ketishini to\u0027xtatishga va qonning tomirlar ichida suyuq holatda saqlanishiga qaratilgan murakkab biologik tizim."
                                                 },
                                                 {
                                                     "term":  "Gipotermiya muolajasi",
                                                     "def":  "Qon tomirlarni toraytirish va qon ketishini to\u0027xtatish maqsadida mahalliy muzli xaltacha qo\u0027llash."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu17/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-18",
                                "number":  18,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Endokrin kasalliklarida (1-tur qandli diabet) hamshiralik parvarishi. Insulin dozasini hisoblash. Shprits-ruchka yordamida insulinoterapiya texnikasi. Siydikdagi qand va atseton miqdorini ekspress-tekshirish.",
                                "shortDesc":  "1-tur qandli diabetda glyukometriya, insulin dozasini hisoblash, shprits-ruchkada yuborish va siydik ekspress-tahlili.",
                                "lecturePdf":  "Amaliyat/mavzu18/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. 1-tur qandli diabetning erta belgilari",
                                                   "text":  "Ko\u0027p chanqash (polidipsiya), tez-tez siyish (poliuriya), ko\u0027p ovqat yesa ham vazn yo\u0027qotish va umumiy zaiflik."
                                               },
                                               {
                                                   "title":  "2. Glyukometr bilan qondagi qandni aniqlash",
                                                   "text":  "Barmoqdan olingan bir tomchi qonni test-poloskaga tekkizib, bir necha soniyada qondagi glyukoza darajasini aniq belgilash."
                                               },
                                               {
                                                   "title":  "3. Shprits-ruchkada insulin inyeksiyasi",
                                                   "text":  "Insulin dozasini o\u0027lchash, qorin, yelka yoki son sohasida teri burmasini hosil qilib, 45-90 gradus burchak ostida teri ostiga yuborish."
                                               },
                                               {
                                                   "title":  "4. Siydikdagi atsetonni ekspress-tekshirish",
                                                   "text":  "Siydik tahliliga maxsus test-chiziqchasini botirib, keton tanachalari (ketoatsidoz xavfi) borligini rang o\u0027zgarishi orqali baholash."
                                               },
                                               {
                                                   "title":  "5. Gipoglikemiyada birinchi tezkor yordam",
                                                   "text":  "Qaltirash, sovuq ter bosishi va holsizlikda darhol qandli choy, sharbat yoki konfet berish, og\u0027ir hollarda 40% glyukoza yuborish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu2/vedio/Катетеризация.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu2/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu2/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Endokrin kasalliklarida (1-tur qandli diabet) hamshiralik parvarishi. Insulin dozasini hisoblash. Shprits-ruchka yordamida insulinoterapiya texnikasi. Siydikdagi qand va atseton miqdorini ekspress-tekshirish. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "1-tur qandli diabet",
                                                     "def":  "Me\u0027da osti bezi beta-hujayralarining autoimmun yemirilishi natijasida mutlaq insulin yetishmovchiligi kasalligi."
                                                 },
                                                 {
                                                     "term":  "Glikemiya",
                                                     "def":  "Qon zardobida glyukoza (qand) ning konsentratsiyasi miqdori."
                                                 },
                                                 {
                                                     "term":  "Glikozuriya",
                                                     "def":  "Qonda glyukoza buyrak bo\u0027sag\u0027asidan (9-10 mmol/l) oshib ketganda siydik bilan qand ajralishi."
                                                 },
                                                 {
                                                     "term":  "Insulinoterapiya",
                                                     "def":  "Organizmga yetishmayotgan insulin gormonini shprits-ruchka yoki nasos yordamida teri ostiga yuborish."
                                                 },
                                                 {
                                                     "term":  "Ketoatsidoz",
                                                     "def":  "Insulinsizlikda yog\u0027lar parchalanishi kuchayib, qonda atseton (keton tanachalari) ko\u0027payishi bilan kechuvchi xavfli holat."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu18/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-19",
                                "number":  19,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Buyrak va siydik ajratish a\u0027zolari kasalliklari: sistit, pielonefrit va glomerulonefritda hamshiralik parvarishi. Buyrak xastaligi bor bemorlarning qon bosimini o\u0027lchash va shishlarni baholash.",
                                "shortDesc":  "Sistit, pielonefrit va glomerulonefritda qon bosimini o\u0027lchash, shishlarni baholash va tuzsiz parhez nazorati.",
                                "lecturePdf":  "Amaliyat/mavzu19/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Buyrak kasalliklarining klinik belgilari",
                                                   "text":  "Pielonefritda isitma, bel og\u0027rig\u0027i, loyqa siydik; glomerulonefritda esa ertalabki yuzdagi shishlar va to\u0027q rangli siydik."
                                               },
                                               {
                                                   "title":  "2. Qon bosimini doimiy monitoring qilish",
                                                   "text":  "Bolaning yoshiga mos keluvchi manjetani tanlab, qon bosimini o\u0027lchash va gipertenziya rivojlanishining oldini olish."
                                               },
                                               {
                                                   "title":  "3. Shishlarni baholash va tana vaznini o\u0027lchash",
                                                   "text":  "Yashirin shishlarni aniqlash maqsadida bolani har kuni ertalab och qoringa bir vaqtda tarozida tortib, vazn o\u0027zgarishini kuzatish."
                                               },
                                               {
                                                   "title":  "4. Tuzsiz va oqsilni tejovchi parhez",
                                                   "text":  "Glomerulonefritning o\u0027tkir davrida osh tuzini qat\u0027iy cheklash, suyuqlik miqdorini ajralgan siydik hajmiga qarab belgilash."
                                               },
                                               {
                                                   "title":  "5. Surunkali infeksiya o\u0027choqlarini sanatsiya qilish",
                                                   "text":  "Karioz tishlarni davolash, surunkali tonzillitni bartaraf etish orqali buyraklarning qayta zararlanishiga yo\u0027l qo\u0027ymaslik."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu3/vedio/Пункция.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu3/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu3/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Buyrak va siydik ajratish a\u0027zolari kasalliklari: sistit, pielonefrit va glomerulonefritda hamshiralik parvarishi. Buyrak xastaligi bor bemorlarning qon bosimini o\u0027lchash va shishlarni baholash. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Pielonefrit",
                                                     "def":  "Buyrak jomi, kosachalari va interstitsial to\u0027qimasining nospetsifik bakterial yallig\u0027lanish kasalligi."
                                                 },
                                                 {
                                                     "term":  "Glomerulonefrit",
                                                     "def":  "Buyrak koptokchalarining (glomerula) infeksion-allergik yoki autoimmun zararlanishi bilan kechuvchi kasallik."
                                                 },
                                                 {
                                                     "term":  "Sistit",
                                                     "def":  "Qovuq shilliq qavatining o\u0027tkir yoki surunkali bakterial yallig\u0027lanishi."
                                                 },
                                                 {
                                                     "term":  "Dizuriya",
                                                     "def":  "Siydik chiqarish jarayonining buzilishi (tez-tez, og\u0027riqli va qiyinlashgan siyish)."
                                                 },
                                                 {
                                                     "term":  "Nefrotik shish",
                                                     "def":  "Qonda oqsil (albumin) kamayishi oqibatida onkotik bosim pasayishi tufayli qovoqlarda va yuzda ertalab paydo bo\u0027ladigan shishlar."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu19/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-20",
                                "number":  20,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Siydikni umumiy tahlil uchun to\u0027plash va baholash. Siydikni Zimnitskiy sinamasi va Nechiporenko usuli bo\u0027yicha yig\u0027ish hamda laboratoriya natijalarini baholash qoidalari.",
                                "shortDesc":  "Siydikni umumiy tahlil, Zimnitskiy va Nechiporenko usulida yig\u0027ish, kunduzgi va tungi diurezni hisoblash.",
                                "lecturePdf":  "Amaliyat/mavzu20/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Siydikning umumiy tahlili qoidalari",
                                                   "text":  "Tashqi jinsiy a\u0027zolarni toza yuvgach, ertalabki siydikning o\u0027rta porsiyasini quruq steril bankaga 50-100 ml hajmda to\u0027plash."
                                               },
                                               {
                                                   "title":  "2. Nechiporenko sinamasi mohiyati",
                                                   "text":  "1 millilitr siydik tarkibidagi shaklli elementlarni (leykotsitlar \u003c 2000, eritrotsitlar \u003c 1000) aniq mikroskopik hisoblash usuli."
                                               },
                                               {
                                                   "title":  "3. Zimnitskiy sinamasini to\u0027plash tartibi",
                                                   "text":  "Sutka davomida har 3 soatda jami 8 ta raqamlangan idishga siydik to\u0027plash, bolaning odatiy suv ichish rejimini saqlash."
                                               },
                                               {
                                                   "title":  "4. Buyrakning konsentratsiya faoliyatini baholash",
                                                   "text":  "Har bir idishdagi siydikning solishtirma og\u0027irligi (zichligi) va miqdorini urometr yordamida tekshirish (1008-1025 oraliqda)."
                                               },
                                               {
                                                   "title":  "5. Kunduzgi va tungi diurez nisbati",
                                                   "text":  "Me\u0027yorda kunduzgi diurez tungi diurezdan 2-3 baravar ko\u0027p bo\u0027lishi lozim; tungi siydikning ko\u0027payishi (nikturiya) patologiyadir."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu4/vedio/Гемотрансфузия.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu4/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu4/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Siydikni umumiy tahlil uchun to\u0027plash va baholash. Siydikni Zimnitskiy sinamasi va Nechiporenko usuli bo\u0027yicha yig\u0027ish hamda laboratoriya natijalarini baholash qoidalari. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Zimnitskiy sinamasi",
                                                     "def":  "Buyrakning siydikni konsentratsiyalash va ajratish funksiyasini sutka davomida har 3 soatda olingan 8 ta portsiyada tekshirish usuli."
                                                 },
                                                 {
                                                     "term":  "Nechiporenko usuli",
                                                     "def":  "1 ml siydik cho\u0027kmasidagi leykotsitlar, eritrotsitlar va silindrlar sonini aniq hisoblash laboratoriya usuli."
                                                 },
                                                 {
                                                     "term":  "Proteinuriya",
                                                     "def":  "Siydik bilan oqsil ajralishi (me\u0027yorda siydikda oqsil bo\u0027lmaydi yoki izi bo\u0027ladi)."
                                                 },
                                                 {
                                                     "term":  "Gematurgiya",
                                                     "def":  "Siydikda qon (eritrotsitlar) paydo bo\u0027lishi."
                                                 },
                                                 {
                                                     "term":  "Izostenuriya",
                                                     "def":  "Buyrakning konsentratsiya qobiliyati yo\u0027qolib, barcha porsiyalarda siydik solishtirma og\u0027irligining bir xil past (1010-1012) bo\u0027lib qolishi."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu20/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-21",
                                "number":  21,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Bolalarda yuqumli kasalliklarda hamshiralik parvarishi. Profilaktik emlashlar milliy taqvimi. Sil (tuberkulyoz) kasalligida balg\u0027am yig\u0027ish texnikasi. Mantu sinamasini o\u0027tkazish va baholash texnikasi.",
                                "shortDesc":  "Profilaktik emlashlar milliy taqvimi, sil kasalligida balg\u0027am yig\u0027ish, Mantu sinamasini qo\u0027yish va baholash.",
                                "lecturePdf":  "Amaliyat/mavzu21/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Emlashlar milliy taqvimi va muddatlari",
                                                   "text":  "Tug\u0027ruqxonada BSJ va Gepatit B, keyin 2, 3, 4 oylikda Pentavaksin, 1 yoshda KPK vaksinalari bilan rejaviy emlashni amalga oshirish."
                                               },
                                               {
                                                   "title":  "2. \u0027Sovuqlik zanjiri\u0027 tizimiga rioya qilish",
                                                   "text":  "Vaksinalarning biologik faolligini saqlash uchun ularni doimiy ravishda +2 dan +8 В°C gacha bo\u0027lgan haroratda saqlash va tashish."
                                               },
                                               {
                                                   "title":  "3. Sil kasalligida balg\u0027am yig\u0027ish",
                                                   "text":  "Bemor boladan ertalab och qoringa og\u0027izni chaygandan so\u0027ng steril keng og\u0027izli idishga balg\u0027am to\u0027plash va germetik yopish."
                                               },
                                               {
                                                   "title":  "4. Mantu sinamasini o\u0027tkazish texnikasi",
                                                   "text":  "Tuberkulin shpritsi bilan bilak sohasiga 2 TE tuberkulinni qat\u0027iy teri ichiga yuborib, \u0027limon po\u0027sti\u0027 ko\u0027rinishidagi oqish papula hosil qilish."
                                               },
                                               {
                                                   "title":  "5. Natijani 72 soatdan so\u0027ng baholash",
                                                   "text":  "Shpatel yoki shaffof millimetrli chizg\u0027ich yordamida faqat hosil bo\u0027lgan infiltrat (papula) ning ko\u0027ndalang o\u0027lchamini o\u0027lchash."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu5/vedio/Десмургия.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu5/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu5/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Bolalarda yuqumli kasalliklarda hamshiralik parvarishi. Profilaktik emlashlar milliy taqvimi. Sil (tuberkulyoz) kasalligida balg\u0027am yig\u0027ish texnikasi. Mantu sinamasini o\u0027tkazish va baholash texnikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Vaksina",
                                                     "def":  "Ma\u0027lum bir yuqumli kasallikka qarshi faol immunitet hosil qilish uchun yuboriladigan kuchsizlantirilgan yoki o\u0027ldirilgan mikroblar preparati."
                                                 },
                                                 {
                                                     "term":  "Mantu sinamasi",
                                                     "def":  "Organizmda sil tayoqchasi (Kox batsillasi) ga nisbatan o\u0027ta sezuvchanlik va immunitet borligini tuberkulin yordamida tekshirish usuli."
                                                 },
                                                 {
                                                     "term":  "Papula (infiltrat)",
                                                     "def":  "Mantu sinamasi o\u0027tkazilgandan 72 soat keyin teri yuzasida paydo bo\u0027ladigan zichlashgan tuguncha o\u0027lchami."
                                                 },
                                                 {
                                                     "term":  "BSJ (BCG) vaksinasi",
                                                     "def":  "Yangi tug\u0027ilgan chaqaloqlarga tug\u0027ruqxonada sil kasalligiga qarshi 3-4 kunligida yuboriladigan vaksina."
                                                 },
                                                 {
                                                     "term":  "Sovuqlik zanjiri",
                                                     "def":  "Vaksinalarni ishlab chiqarilgan joyidan bolaga yuborilguncha barcha bosqichlarda qat\u0027iy harorat (+2°C dan +8°C gacha) rejimida saqlash va tashish tizimi."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu21/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-22",
                                "number":  22,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "O\u0027tkir respirator virusli infeksiyalarda (O\u0027RVI, gripp) hamshiralik parvarishi. Burun-halqumdan bakterilogik tekshiruvga surtma olish texnikasi. Yuqori harorat va talvasa (sudorgi) holatlarida shoshilinch yordam.",
                                "shortDesc":  "O\u0027RVI va grippda burun-halqumdan surtma olish, gipertermiya va febril talvasada (sudorgi) shoshilinch yordam.",
                                "lecturePdf":  "Amaliyat/mavzu22/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. O\u0027RVI va grippning o\u0027tkir belgilari",
                                                   "text":  "Yuqori tana harorati, bosh og\u0027rig\u0027i, burun bitishi, aksirish, quruq yo\u0027tal va butun a\u0027zoyi badanning qaqshab og\u0027rishi."
                                               },
                                               {
                                                   "title":  "2. Burun va halqumdan surtma olish",
                                                   "text":  "Steril paxtali tampon bilan burun tubidan va halqum orqa devoridan shilliq qavatga tekkizib surtma olish va probirkaga solish."
                                               },
                                               {
                                                   "title":  "3. Yuqori haroratda jismoniy sovutish",
                                                   "text":  "Bolaning kiyimlarini yengillashtirish, peshonasiga sovuq mato qo\u0027yish va tanasini xona haroratidagi iliq suv bilan artish."
                                               },
                                               {
                                                   "title":  "4. Febril talvasada (sudorgi) birinchi yordam",
                                                   "text":  "Bolani qattiq tekis joyga yonbosh yotqizish, boshini ushlab turish, nafas yo\u0027llarini ochish va jarohatlanishdan himoyalash."
                                               },
                                               {
                                                   "title":  "5. Medikamentoz yordam va parvarish",
                                                   "text":  "Shifokor ko\u0027rsatmasiga binoan paratsetamol yoki ibuprofen shamchalarini kiritish hamda tinchlantiruvchi vositalarni qo\u0027llash."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu6/vedio/Жгут.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu6/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu6/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "O\u0027tkir respirator virusli infeksiyalarda (O\u0027RVI, gripp) hamshiralik parvarishi. Burun-halqumdan bakterilogik tekshiruvga surtma olish texnikasi. Yuqori harorat va talvasa (sudorgi) holatlarida shoshilinch yordam. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "O\u0027RVI",
                                                     "def":  "Nafas yo\u0027llarini zararlaydigan virusli infeksiyalar (gripp, adenovirus, rinositsitial) umumiy guruhi."
                                                 },
                                                 {
                                                     "term":  "Febril talvasa",
                                                     "def":  "Kichik yoshdagi bolalarda tana harorati 38.5-39°C dan yuqori ko\u0027tarilganda bosh miya qo\u0027zg\u0027alishi tufayli yuzaga keladigan tortishishlar."
                                                 },
                                                 {
                                                     "term":  "Antipiretiklar",
                                                     "def":  "Tana haroratini tushirish uchun qo\u0027llaniladigan dori vositalari (paratsetamol, ibuprofen)."
                                                 },
                                                 {
                                                     "term":  "Bakteriologik surtma",
                                                     "def":  "Burun va halqumdan steril paxtali tampon bilan mikroflora turini aniqlash uchun olinadigan tahlil."
                                                 },
                                                 {
                                                     "term":  "Kataral sindrom",
                                                     "def":  "Burun bitishi, ko\u0027z yoshlanishi, tomoq qizarishi va yo\u0027tal bilan ifodalanadigan shilliq qavatlarning o\u0027tkir yallig\u0027lanishi."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu22/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-23",
                                "number":  23,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Difteriya, ko\u0027kyo\u0027tal va epidemik parotit kasalliklarida hamshiralik parvarishi. Borde-Jangu tayoqchasiga tekshirish uchun material olish. Quloq oldi sohasiga kompress qo\u0027yish texnikasi.",
                                "shortDesc":  "Difteriya, ko\u0027kyo\u0027tal va epidemik parotitda Borde-Jangu tahlili, so\u0027lak bezlariga kompress va qat\u0027iy izolyatsiya.",
                                "lecturePdf":  "Amaliyat/mavzu23/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Difteriyaning xavfli jihatlari",
                                                   "text":  "Tomoqda kulrang, qalin, shpatel bilan qiyin ajraladigan fibroz karashlar va hiqildoq stenozi (krup) natijasida bo\u0027g\u0027ilish xavfi."
                                               },
                                               {
                                                   "title":  "2. Bakteriologik tekshiruvga material olish",
                                                   "text":  "Difteriya tayoqchasi (Loffler) va ko\u0027kyo\u0027tal tayoqchasiga och qoringa orqa halqum sohasidan surtma olib, darhol laboratoriyaga yuborish."
                                               },
                                               {
                                                   "title":  "3. Ko\u0027kyo\u0027tal xurujlarida yordam",
                                                   "text":  "Daqiqasiga ketma-ket takrorlanuvchi spastik yo\u0027tal reprizlarida bolani tik tutish, toza salqin nam havo bilan ta\u0027minlash."
                                               },
                                               {
                                                   "title":  "4. Epidemik parotitda quloq oldi bezi parvarishi",
                                                   "text":  "Kattalashgan quloq oldi so\u0027lak bezlariga quruq issiq doka yoki yarim spirtli isituvchi kompress qo\u0027yish va og\u0027izni chayish."
                                               },
                                               {
                                                   "title":  "5. Qat\u0027iy izolyatsiya va karantin choralari",
                                                   "text":  "Bemorlarni alohida xonaga izolyatsiyalash, idish-tovoqlarni qaynatib dezinfeksiyalash va muloqotdagilarni kuzatish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu7/vedio/Иммобилизация.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu7/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu7/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Difteriya, ko\u0027kyo\u0027tal va epidemik parotit kasalliklarida hamshiralik parvarishi. Borde-Jangu tayoqchasiga tekshirish uchun material olish. Quloq oldi sohasiga kompress qo\u0027yish texnikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Difteriya",
                                                     "def":  "Corynebacterium diphtheriae keltirib chiqaradigan, halqum va nafas yo\u0027llarida qiyin ko\u0027chuvchi kulrang fibrinli parda hosil qiluvchi og\u0027ir infeksiya."
                                                 },
                                                 {
                                                     "term":  "Ko\u0027kyo\u0027tal (pertussis)",
                                                     "def":  "Qaytalanuvchi talvasasimon xurujli yo\u0027tal va chuqur shovqinli nafas olish (reprise) bilan kechuvchi yuqumli kasallik."
                                                 },
                                                 {
                                                     "term":  "Epidemik parotit (tepki)",
                                                     "def":  "Paramyxovirus keltirib chiqaradigan, quloq oldi va jag\u0027 osti so\u0027lak bezlarining yallig\u0027lanishi bilan kechuvchi kasallik."
                                                 },
                                                 {
                                                     "term":  "Borde-Jangu tayoqchasi",
                                                     "def":  "Ko\u0027kyo\u0027tal qo\u0027zg\u0027atuvchisi (Bordetella pertussis) ning maxsus mikrobiologik nomi."
                                                 },
                                                 {
                                                     "term":  "Isituvchi kompress",
                                                     "def":  "Qon aylanishini yaxshilash va shishni kamaytirish uchun quloq oldi sohasiga spirtli yoki moyli mato qo\u0027yish muolajasi."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu23/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-24",
                                "number":  24,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Qizamiq, qizilcha, skarlatina va suvchechak kasalliklarida hamshiralik parvarishi. Teri va shilliq qavatlarga mahalliy ishlov berish. Konyunktivitda ko\u0027zlarni yuvish. Bemor bolaga parhez buyurish.",
                                "shortDesc":  "Qizamiq, qizilcha, skarlatina va suvchechakda teriga ishlov berish, konyunktivitda ko\u0027zni yuvish va parhez.",
                                "lecturePdf":  "Amaliyat/mavzu24/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Bolalar ekzantemali infeksiyalari",
                                                   "text":  "Qizamiq, qizilcha, skarlatina va suvchechak kasalliklarida toshmalarning shakli, tarqalish ketma-ketligi va o\u0027ziga xos xususiyatlari."
                                               },
                                               {
                                                   "title":  "2. Qizamiqda kataral davr va parvarish",
                                                   "text":  "Yorug\u0027likdan qo\u0027rqish (fotofobiya) kuzatilganda xonani qorong\u0027ilashtirish, ko\u0027zlarni furatsilin eritmasi bilan yuvish."
                                               },
                                               {
                                                   "title":  "3. Suvchechak pufakchalariga ishlov berish",
                                                   "text":  "Teridagi vezikulalarni 1% li brilliant yashili (\u0027zelyonka\u0027) eritmasi bilan nuqtali artib chiqish va ikkilamchi infeksiyadan asrash."
                                               },
                                               {
                                                   "title":  "4. Skarlatinada tomoq va til parvarishi",
                                                   "text":  "\u0027Malinasimon til\u0027 va tomoq og\u0027rig\u0027ida iliq antiseptik eritmalar bilan g\u0027arg\u0027ara qildirish, yumshoq yengil taomlar berish."
                                               },
                                               {
                                                   "title":  "5. Bemor parvarishidagi xavfsizlik choralari",
                                                   "text":  "Bemorning ichki kiyimlarini har kuni almashtirish, dazmollash va xonani doimiy ravishda namli tozalashdan o\u0027tkazish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu8/vedio/Клизма.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu8/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu8/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Qizamiq, qizilcha, skarlatina va suvchechak kasalliklarida hamshiralik parvarishi. Teri va shilliq qavatlarga mahalliy ishlov berish. Konyunktivitda ko\u0027zlarni yuvish. Bemor bolaga parhez buyurish. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Qizamiq",
                                                     "def":  "Yuqori tana harorati, ko\u0027z konyunktiviti va yuzdan boshlab bosqichma-bosqich butun tanaga toshuvchi dog\u0027-papulyoz toshmalar bilan kechuvchi infeksiya."
                                                 },
                                                 {
                                                     "term":  "Filatov-Koplik dog\u0027lari",
                                                     "def":  "Qizamiqning dastlabki davrida lunj shilliq qavatida, oziq tishlar qarshisida paydo bo\u0027ladigan mayda oqish dog\u0027lar."
                                                 },
                                                 {
                                                     "term":  "Skarlatina",
                                                     "def":  "A guruhi streptokokki chaqiradigan, angina, \u0027malinasimon til\u0027 va butun tanada mayda nuqtasimon qizil toshmalar bilan kechadigan kasallik."
                                                 },
                                                 {
                                                     "term":  "Suvchechak (vetryanka)",
                                                     "def":  "Varicella Zoster virusi chaqiradigan, terida to\u0027lqinsimon holda qichuvchi polimorf vezikula (suvli pufakchalar) toshishi."
                                                 },
                                                 {
                                                     "term":  "Konyunktivit",
                                                     "def":  "Ko\u0027z shilliq qavatining yallig\u0027lanishi, ko\u0027z qizarishi, yosh oqishi va yiringli ajralma hosil bo\u0027lishi."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu24/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-25",
                                "number":  25,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Yuqumli ichak kasalliklarida (dizenteriya, salmonellyoz, esxerixioz) hamshiralik parvarishi. Og\u0027iz orqali oral regidratsiya o\u0027tkazish (Regidron). Meteorizm va qusganda birinchi yordam. Bakteriologik tekshiruvga najas olish texnikasi.",
                                "shortDesc":  "Yuqumli ichak kasalliklarida oral regidratsiya (Regidron) o\u0027tkazish, degidratatsiyani baholash va najas olish.",
                                "lecturePdf":  "Amaliyat/mavzu25/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Yuqumli ichak kasalliklari belgilari",
                                                   "text":  "Dizenteriya, salmonellyoz va esxerixiozda tana harorati ko\u0027tarilishi, qorinda to\u0027lg\u0027oqsimon og\u0027riq, ko\u0027p marta suyuq axlat va qusish."
                                               },
                                               {
                                                   "title":  "2. Oral regidratsiya terapiyasi (Regidron)",
                                                   "text":  "Yo\u0027qotilgan suv va tuzlarni tiklash uchun 1 paket Regidronni 1 litr qaynatilgan suvda eritib, bolaga oz-ozdan ichirish."
                                               },
                                               {
                                                   "title":  "3. Ichirish texnikasi va sabr-toqat",
                                                   "text":  "Qusishni qo\u0027zg\u0027atmaslik maqsadida eritmani har 5-10 daqiqada 1 choy yoki desert qoshiqdan uzluksiz ichirib borish."
                                               },
                                               {
                                                   "title":  "4. Rektal qoshiqcha bilan najas olish",
                                                   "text":  "Bakteriologik ekma uchun bolaning orqa chiqaruv yo\u0027liga steril rektal qoshiqchani 3-4 sm kiritib, shilliqli najas namunasini olish."
                                               },
                                               {
                                                   "title":  "5. Degidratatsiya darajasini monitoring qilish",
                                                   "text":  "Terining turgori, katta liqildoqning cho\u0027kishi, ko\u0027z yoshi borligi va diurez miqdorini doimiy kuzatib borish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu9/vedio/Капли.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu9/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu9/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Yuqumli ichak kasalliklarida (dizenteriya, salmonellyoz, esxerixioz) hamshiralik parvarishi. Og\u0027iz orqali oral regidratsiya o\u0027tkazish (Regidron). Meteorizm va qusganda birinchi yordam. Bakteriologik tekshiruvga najas olish texnikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Dizenteriya (shigellyoz)",
                                                     "def":  "Shigella bakteriyalari chaqiradigan, yo\u0027g\u0027on ichakni zararlab, qorin pastida og\u0027riq va qon-shilliqli najas (tenezm) keltirib chiqaruvchi infeksiya."
                                                 },
                                                 {
                                                     "term":  "Salmonellyoz",
                                                     "def":  "Salmonella bakteriyalari tushgan oziq-ovqatlardan yuquvchi, ko\u0027ngil aynishi, qusish va \u0027botqoq balchig\u0027i\u0027 rangidagi najas bilan kechuvchi kasallik."
                                                 },
                                                 {
                                                     "term":  "Esxerixioz",
                                                     "def":  "Patogen ichak tayoqchalari keltirib chiqaradigan, go\u0027daklarda og\u0027ir suvsizlanish chaqiruvchi ichak infeksiyasi."
                                                 },
                                                 {
                                                     "term":  "Tenezm",
                                                     "def":  "Yo\u0027g\u0027on ichak yallig\u0027langanda najas kelmasdan turib soxta, og\u0027riqli kuchanish hissi."
                                                 },
                                                 {
                                                     "term":  "Koprologiya",
                                                     "def":  "Najasning fizik, kimyoviy va mikroskopik xususiyatlarini laboratoriyada tekshirish usuli."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu25/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-26",
                                "number":  26,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Bolalar virusli gepatitlari (A, B, C) va OIV-infeksiyasida hamshiralik parvarishi. Qonni serologik va immunologik tekshiruvga olish hamda laboratoriyaga yuborish. Tibbiy xavfsizlik qoidalari.",
                                "shortDesc":  "Virusli gepatitlar va OIV-infeksiyasida serologik tahlilga qon olish, shaxsiy himoya va tibbiy xavfsizlik.",
                                "lecturePdf":  "Amaliyat/mavzu26/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Gepatit va OIV ning yuqish yo\u0027llari",
                                                   "text":  "Gepatit A oziq-ovqat va suv orqali; Gepatit B, C va OIV parenteral muolajalar, nosteril tibbiy asboblar va qon orqali yuqishi."
                                               },
                                               {
                                                   "title":  "2. Sariqlik davridagi o\u0027zgarishlar",
                                                   "text":  "Ko\u0027z sklerasi va terining sarg\u0027ayishi, siydikning to\u0027q qo\u0027ng\u0027ir (\u0027pivo rangi\u0027) bo\u0027lishi va najasning oqarib ketishini aniqlash."
                                               },
                                               {
                                                   "title":  "3. Qon olishda shaxsiy himoyalanish",
                                                   "text":  "Har bir parenteral muolajada steril rezina qo\u0027lqop, niqob va himoya ko\u0027zoynaklaridan foydalanish hamda asboblarni to\u0027g\u0027ri tashlash."
                                               },
                                               {
                                                   "title":  "4. \u0027Avariya holati\u0027 bo\u0027yicha profilaktika",
                                                   "text":  "Tasodifiy nina sanchilganda qo\u0027lqopni yechish, qonni siqib chiqarish, sovunlab yuvish va 70% li spirt hamda yod bilan ishlov berish."
                                               },
                                               {
                                                   "title":  "5. Gepatobilinar tizimni asrovchi parhez",
                                                   "text":  "Qovurilgan, yog\u0027li, achchiq mahsulotlarni qat\u0027iy taqiqlab, yengil hazm bo\u0027luvchi parhez taomlar (stol в„–5) berish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu10/vedio/Педиатрия.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu10/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu10/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Bolalar virusli gepatitlari (A, B, C) va OIV-infeksiyasida hamshiralik parvarishi. Qonni serologik va immunologik tekshiruvga olish hamda laboratoriyaga yuborish. Tibbiy xavfsizlik qoidalari. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Virusli gepatit A",
                                                     "def":  "Enteral (og\u0027iz orqali, ifloslangan suv va ovqat) yo\u0027l bilan yuquvchi, jigarni zararlab sariqlik chaqiruvchi o\u0027tkir virusli kasallik."
                                                 },
                                                 {
                                                     "term":  "Virusli gepatit B va C",
                                                     "def":  "Parenteral (qon, tibbiy asboblar) va jinsiy yo\u0027l bilan yuquvchi, surunkali gepatit va sirrozga olib kelishi mumkin bo\u0027lgan og\u0027ir jigar kasalligi."
                                                 },
                                                 {
                                                     "term":  "OIV (Odam immunitet tanqisligi virusi)",
                                                     "def":  "Inson immun tizimini, xususan T-limfotsitlarni (CD4) zararlab, OITS kasalligini keltirib chiqaruvchi virus."
                                                 },
                                                 {
                                                     "term":  "Serologik tahlil",
                                                     "def":  "Qon zardobidagi o\u0027ziga xos antitelolar va antigenlarni (HBsAg, anti-HCV) immunologik usulda aniqlash."
                                                 },
                                                 {
                                                     "term":  "Aseptika va xavfsizlik standarti",
                                                     "def":  "Tibbiy xodim va bemorlarni qon orqali yuquvchi infeksiyalardan himoya qilish uchun bir martalik asboblar va shaxsiy himoya vositalaridan foydalanish qoidalari."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu26/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-27",
                                "number":  27,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Kechiktirib bo\u0027lmaydigan og\u0027ir holatlarda bola va uning oila a\u0027zolariga hamshiralik parvarishi. Shok va komatoz holatlarda bolaga shifokorgacha shoshilinch birinchi yordam ko\u0027rsatish algoritmi.",
                                "shortDesc":  "Shok va komalarda shifokorgacha tezkor yordam, periferik qon aylanishini va hush darajasini baholash.",
                                "lecturePdf":  "Amaliyat/mavzu27/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Kechiktirib bo\u0027lmaydigan holatlar tushunchasi",
                                                   "text":  "Shok, koma va kollaps bolaning hayotiy a\u0027zolari (yurak, miya, o\u0027pka) faoliyatining keskin buzilishi bo\u0027lib, zudlik bilan yordam talab etadi."
                                               },
                                               {
                                                   "title":  "2. Bemorning hayotiy belgilarini baholash",
                                                   "text":  "Hushning holati, qorachiqlarning yorug\u0027likka reaksiyasi, nafas chastotasi, pulsning to\u0027liqligi va arterial qon bosimini tekshirish."
                                               },
                                               {
                                                   "title":  "3. \u0027Oq dog\u0027\u0027 simptomini aniqlash",
                                                   "text":  "Tirnoq plastinkasini 5 soniya bosib qo\u0027yib yuborilganda pushti rangning 2 soniyadan kech tiklanishi mikrosirkulyatsiya falajidan dalolat beradi."
                                               },
                                               {
                                                   "title":  "4. Periferik venani zudlik bilan kateterlash",
                                                   "text":  "Shok holatida infuzion eritmalarni (fiziologik eritma, Ringer) tomir ichiga uzluksiz yuborish uchun ishonchli venoz yo\u0027l ochish."
                                               },
                                               {
                                                   "title":  "5. Shoshilinch reanimatsiya brigadasini chaqirish",
                                                   "text":  "Bemor yonidan ketmagan holda shifokor va reanimatologni chaqirish, buyurilgan preparatlarni tezkor tayyorlab turish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu11/vedio/Гинекология.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu11/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu11/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Kechiktirib bo\u0027lmaydigan og\u0027ir holatlarda bola va uning oila a\u0027zolariga hamshiralik parvarishi. Shok va komatoz holatlarda bolaga shifokorgacha shoshilinch birinchi yordam ko\u0027rsatish algoritmi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Shok",
                                                     "def":  "Qon aylanishining o\u0027tkir buzilishi natijasida to\u0027qima va a\u0027zolarning kislorod bilan ta\u0027minlanishi keskin pasayishi bilan kechuvchi hayot uchun xavfli holat."
                                                 },
                                                 {
                                                     "term":  "Koma",
                                                     "def":  "Bosh miya po\u0027stlog\u0027i faoliyatining chuqur tormozlanishi oqibatida hushning butunlay yo\u0027qolishi va tashqi ta\u0027sirlarga javob bermaslik holati."
                                                 },
                                                 {
                                                     "term":  "Glazgo shkalasi",
                                                     "def":  "Bemorning hushini (ko\u0027zni ochishi, nutqi, harakat reaksiyasi) ballar bo\u0027yicha tezkor ob\u0027ektiv baholash tizimi."
                                                 },
                                                 {
                                                     "term":  "Gipovolemiya",
                                                     "def":  "Qon tomirlar tizimidagi aylanib yuruvchi qon hajmining (suvsizlanish yoki qon yo\u0027qotish sababli) keskin kamayishi."
                                                 },
                                                 {
                                                     "term":  "Shoshilinch yordam algoritmi",
                                                     "def":  "Kritik vaziyatda nafas yo\u0027llarini ochish, nafas va qon aylanishini tiklash bo\u0027yicha ketma-ket standart tibbiy harakatlar rejasi."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu27/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-28",
                                "number":  28,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "O\u0027tkir nafas va yurak qon-tomir yetishmovchiligida bolaga shoshilinch reanimatsion yordam ko\u0027rsatish. Sun\u0027iy nafas berish (og\u0027izdan-og\u0027izga/Ambu qopi). Yurakni bilvosita (tashqi) massaj qilish texnikasi.",
                                "shortDesc":  "Klinik o\u0027limda reanimatsiya: havo yo\u0027llarini ochish, sun\u0027iy nafas (Ambu qopi) va yurakni yopiq massaj qilish.",
                                "lecturePdf":  "Amaliyat/mavzu28/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Klinik o\u0027lim belgilari va diagnostika",
                                                   "text":  "Hushning yo\u0027qligi, uyqu yoki son arteriyasida pulsning sezilmasligi va ko\u0027krak qafasining nafas harakatlari to\u0027xtashi."
                                               },
                                               {
                                                   "title":  "2. Nafas yo\u0027llari o\u0027tkazuvchanligini ta\u0027minlash",
                                                   "text":  "Safar uchligi: boshni orqaga engashtirish, pastki jag\u0027ni oldinga-yuqoriga surish va og\u0027iz bo\u0027shlig\u0027idagi yot suyuqliklarni tozalash."
                                               },
                                               {
                                                   "title":  "3. Yurakni bilvosita (yopiq) massaj qilish",
                                                   "text":  "Ko\u0027krak suyagining pastki uchligiga bolaning yoshiga qarab 1 yoki 2 qo\u0027l kafti bilan to\u0027sh suyagini 4-5 sm chuqurlikda ezish (1 daqiqada 100-120 marta)."
                                               },
                                               {
                                                   "title":  "4. Ambu qopi orqali sun\u0027iy shamollatish",
                                                   "text":  "Germetik niqobni yuzga \u0027C-E\u0027 usulida mahkamlab, har 30 ta ko\u0027krak kompressiyasidan so\u0027ng 2 marta o\u0027pkaga havo haydash (30:2 nisbat)."
                                               },
                                               {
                                                   "title":  "5. Reanimatsiya samaradorligini baholash",
                                                   "text":  "Qorachiqlarning torayishi, uyqu arteriyasida puls paydo bo\u0027lishi, terining pushtirang tusga kirishi va mustaqil nafasning tiklanishi."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu12/vedio/Предоперационная.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu12/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu12/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "O\u0027tkir nafas va yurak qon-tomir yetishmovchiligida bolaga shoshilinch reanimatsion yordam ko\u0027rsatish. Sun\u0027iy nafas berish (og\u0027izdan-og\u0027izga/Ambu qopi). Yurakni bilvosita (tashqi) massaj qilish texnikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Yurak-o\u0027pka reanimatsiyasi (Yo\u0027R)",
                                                     "def":  "Klinik o\u0027lim holatida hayotiy muhim funksiyalarni (nafas va qon aylanishi) tiklashga qaratilgan shoshilinch chora-tadbirlar."
                                                 },
                                                 {
                                                     "term":  "Ambu qopi",
                                                     "def":  "Sun\u0027iy nafas berish uchun mo\u0027ljallangan, qo\u0027lda siqiluvchi havo yuboruvchi xaltasimon tibbiy reanimatsiya asbobi."
                                                 },
                                                 {
                                                     "term":  "Bilvosita yurak massaji",
                                                     "def":  "To\u0027sh suyagini orqa umurtqa tomon ritmik bosish orqali yurakdan qonni tomirlarga majburiy haydash usuli."
                                                 },
                                                 {
                                                     "term":  "Nafas yo\u0027llari o\u0027tkazuvchanligi",
                                                     "def":  "Til orqaga ketib qolishining oldini olish uchun boshni orqaga tashlab, pastki jag\u0027ni oldinga chiqarish (Safarning uchlik usuli)."
                                                 },
                                                 {
                                                     "term":  "Klinik o\u0027lim",
                                                     "def":  "Nafas va yurak to\u0027xtaganidan keyin bosh miya hujayralari nobud bo\u0027lguniga qadar davom etadigan qaytar davr (bolalarda 3-5 daqiqa)."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu28/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-29",
                                "number":  29,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Gipo- va giperglikemik komada bolaga kechiktirib bo\u0027lmaydigan yordam ko\u0027rsatish. Uremik va jigar komasida bolaga shifokorgacha tezkor yordam ko\u0027rsatish.",
                                "shortDesc":  "Gipo- va giperglikemik, uremik va jigar komasida shifokorgacha kechiktirib bo\u0027lmaydigan tezkor parvarish.",
                                "lecturePdf":  "Amaliyat/mavzu29/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Gipoglikemik komada birinchi yordam",
                                                   "text":  "Qondagi qand keskin pasayganda hushsiz bolaga darhol venaga 20-40% li sterillangan glyukoza eritmasini oqim bilan yuborish."
                                               },
                                               {
                                                   "title":  "2. Giperglikemik (ketoatsidotik) koma",
                                                   "text":  "Nafasda atseton hidi, terining quruqligi, ko\u0027z soqqalarining yumshashida tomir ichiga qisqa ta\u0027sirli insulin va infuziya yuborish."
                                               },
                                               {
                                                   "title":  "3. Uremik komada shoshilinch taktika",
                                                   "text":  "Buyrak yetishmovchiligida siydik ajralishi to\u0027xtab, qonda mochevina oshganda oshqozonni yuvish va zudlik bilan gemodializga tayyorlash."
                                               },
                                               {
                                                   "title":  "4. Jigar komasida yordam ko\u0027rsatish",
                                                   "text":  "Jigar yetishmovchiligi intoksikatsiyasida tozalovchi klizmalar qilish, laktuloza berish va miya shishini oldini oluvchi dorilar qo\u0027llash."
                                               },
                                               {
                                                   "title":  "5. Bemorni uzluksiz nazorat qilish",
                                                   "text":  "Koma holatidagi bolani qat\u0027iy yonbosh yotqizish, qusiq aspiratsiyasiga yo\u0027l qo\u0027ymaslik va monitor orqali SpO2 va EKGni kuzatish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu13/vedio/Послеоперационная.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu13/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu13/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Gipo- va giperglikemik komada bolaga kechiktirib bo\u0027lmaydigan yordam ko\u0027rsatish. Uremik va jigar komasida bolaga shifokorgacha tezkor yordam ko\u0027rsatish. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Gipoglikemik koma",
                                                     "def":  "Qonda glyukoza miqdorining keskin pasayishi (2.8 mmol/l dan past) oqibatida bosh miya ochligi va hushdan ketish bilan kechuvchi holat."
                                                 },
                                                 {
                                                     "term":  "Giperglikemik koma",
                                                     "def":  "Qonda qand miqdorining haddan tashqari ko\u0027tarilib ketishi va ketoatsidoz tufayli rivojlanadigan komatoz holat."
                                                 },
                                                 {
                                                     "term":  "Uremik koma",
                                                     "def":  "O\u0027tkir yoki surunkali buyrak yetishmovchiligida azot qoldiqlari (mochevina, kreatinin) qonda to\u0027planib organizmni zaharlashi."
                                                 },
                                                 {
                                                     "term":  "Jigar komasi",
                                                     "def":  "Jigar yetishmovchiligida ammiak va boshqa toksinlar neyronlarni zaharlashi oqibatida yuzaga keladigan hush yo\u0027qolishi."
                                                 },
                                                 {
                                                     "term":  "Glyukometriya",
                                                     "def":  "Ekspress-glyukometr apparati yordamida kapillyar qondan glyukoza miqdorini bir necha soniyada aniqlash."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu29/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-30",
                                "number":  30,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Gipertermiya va talvasa (sudorgi) sindromida bola va oilasiga hamshiralik parvarishi. Harorat o\u0027lchash texnikasi. Tana haroratini tushirishning fizikaviy va medikamentoz algoritmlari.",
                                "shortDesc":  "Qizil va oq gipertermiya, talvasa (sudorgi) sindromida haroratni tushirishning fizik va dori vositalari.",
                                "lecturePdf":  "Amaliyat/mavzu30/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. \u0027Qizil\u0027 va \u0027oq\u0027 gipertermiya farqlari",
                                                   "text":  "Qizil gipertermiyada teri qizargan, issiq va nam; oq gipertermiyada esa yuqori haroratda ham qo\u0027l-oyoqlar muzdek, oqargan va qaltirash kuzatiladi."
                                               },
                                               {
                                                   "title":  "2. Qizil gipertermiyada fizik sovutish",
                                                   "text":  "Bolani yechintirish, peshona va bo\u0027yin sohasiga sovuq mato qo\u0027yish, butun tanasini 36-37 В°C li suv bilan namlangan dokada artish."
                                               },
                                               {
                                                   "title":  "3. Oq gipertermiyada shoshilinch yordam",
                                                   "text":  "Periferik tomirlar spazmini yechish uchun qo\u0027l-oyoqlarni uqalab isitish, paypoq kiygizish va no-shpa kabi spazmolitiklarni berish."
                                               },
                                               {
                                                   "title":  "4. Medikamentoz harorat tushirish",
                                                   "text":  "Tana harorati 38.5 В°C dan oshganda paratsetamol (15 mg/kg) yoki ibuprofen (10 mg/kg) dozasini yoshiga qarab to\u0027g\u0027ri berish."
                                               },
                                               {
                                                   "title":  "5. Talvasa (sudorgi) sindromida parvarish",
                                                   "text":  "Bolaning tishlari orasiga yumshoq mato qo\u0027yish (tilni tishlamaslik uchun), yonbosh yotqizish va antikonvulsant dorilar yuborish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu14/vedio/Реанимация.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu14/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu14/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Gipertermiya va talvasa (sudorgi) sindromida bola va oilasiga hamshiralik parvarishi. Harorat o\u0027lchash texnikasi. Tana haroratini tushirishning fizikaviy va medikamentoz algoritmlari. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Gipertermiya",
                                                     "def":  "Tana haroratining issiqlik ishlab chiqarish va chiqarish muvozanati buzilishi oqibatida me\u0027yordan ortiq ko\u0027tarilib ketishi."
                                                 },
                                                 {
                                                     "term":  "Fizikaviy sovitish",
                                                     "def":  "Qon tomirlari yuzada joylashgan sohalarga (peshona, bo\u0027yin, chov) iliq suv bilan namlangan sochiq qo\u0027yish orqali haroratni tushirish."
                                                 },
                                                 {
                                                     "term":  "Litik aralashma",
                                                     "def":  "Yuqori harorat va talvasada mushak ichiga yuboriladigan spazmolitik va antiallergik dorilar majmuasi."
                                                 },
                                                 {
                                                     "term":  "Oq gipertermiya",
                                                     "def":  "Qon tomirlar spazmi tufayli tana harorati yuqori bo\u0027lsa-da, qo\u0027l-oyoqlarning muzdek va rangpar bo\u0027lishi bilan kechuvchi xatarli holat."
                                                 },
                                                 {
                                                     "term":  "Qizil gipertermiya",
                                                     "def":  "Qon tomirlari kengaygan, terisi issiq, qizargan va tana issiqlikni tashqariga erkin ajrata oladigan qulayroq isitma shakli."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu30/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-31",
                                "number":  31,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Allergik kasalliklar: eshakem (krapivnitsa) va allergik atopik dermatitda bolaga hamshiralik parvarishi. Allergiyaga qarshi gipoallergen parhez va terini parvarishlash.",
                                "shortDesc":  "Eshakem (krapivnitsa) va atopik dermatitda terini emolyentlar bilan parvarishlash va gipoallergen parhez.",
                                "lecturePdf":  "Amaliyat/mavzu31/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Eshakem (krapivnitsa) klinik belgilari",
                                                   "text":  "Terida to\u0027satdan paydo bo\u0027luvchi qizil, shishgan, kuchli qichuvchi pufakchalar (chaqirtikan chaqqanga o\u0027xshash toshmalar)."
                                               },
                                               {
                                                   "title":  "2. Atopik dermatit va quruq teri parvarishi",
                                                   "text":  "Tirsak va tizza bukilmalarida terining quruqlashishi, qipiqlanishi va qichishishida maxsus namlantiruvchi emolyent kremlardan foydalanish."
                                               },
                                               {
                                                   "title":  "3. Qat\u0027iy gipoallergen parhez",
                                                   "text":  "Sitrus mevalar, shokolad, tuxum, yong\u0027oq, qulupnay, sun\u0027iy rang va konservantlar qo\u0027shilgan oziq-ovqatlarni taqiqlash."
                                               },
                                               {
                                                   "title":  "4. Antigistamin vositalarini qo\u0027llash",
                                                   "text":  "Qichishish va allergik yallig\u0027lanishni kamaytirish maqsadida shifokor tayinlagan zamonaviy antigistamin tomchilarini berish."
                                               },
                                               {
                                                   "title":  "5. Kiyim va gigiyenaga qo\u0027yiladigan talablar",
                                                   "text":  "Bolaga faqat tabiiy paxta matosidan kiyimlar kiydirish, kir yuvishda gipoallergen bolalar kukunlaridan foydalanish va tirnoqlarini olish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu15/vedio/СЛР.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu15/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu15/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Allergik kasalliklar: eshakem (krapivnitsa) va allergik atopik dermatitda bolaga hamshiralik parvarishi. Allergiyaga qarshi gipoallergen parhez va terini parvarishlash. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Eshakem (urtikariya)",
                                                     "def":  "Terida to\u0027satdan qichuvchi, qizil yoki oqish qavariqlar (daraxt qichitqisi chaqqandek) toshishi bilan kechuvchi allergik reaksiya."
                                                 },
                                                 {
                                                     "term":  "Atopik dermatit",
                                                     "def":  "Bolalarda irsiy moyillik zaminida rivojlanuvchi, kuchli qichish va terining quruqlashishi bilan kechuvchi surunkali allergik teri kasalligi."
                                                 },
                                                 {
                                                     "term":  "Gipoallergen parhez",
                                                     "def":  "Ratsiondan yuqori allergik faollikka ega mahsulotlarni (sitruslar, shokolad, tuxum, qulupnay, yong\u0027oq) butunlay chiqarib tashlash."
                                                 },
                                                 {
                                                     "term":  "Emoliyentlar",
                                                     "def":  "Quruq va atopik terini yumshatuvchi, namlovchi va uning himoya to\u0027sig\u0027ini tiklovchi maxsus tibbiy kremlar."
                                                 },
                                                 {
                                                     "term":  "Antigistamin preparatlar",
                                                     "def":  "Allergik reaksiyalarning asosiy mediatori bo\u0027lgan gistamin retseptorlarini bloklovchi dorilar guruhi."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu31/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-32",
                                "number":  32,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Travmalar, suyak sinishi, chiqishi, kuyish va sovuq urish holatlarida bolalarga shifokorgacha birinchi tibbiy yordam ko\u0027rsatish. Transport immobilizatsiyasi va steril bog\u0027lamlar qo\u0027yish texnikasi.",
                                "shortDesc":  "Travmalar, suyak sinishi, chiqishi, kuyish va sovuq urishda shinalash, steril bog\u0027lam va birinchi yordam.",
                                "lecturePdf":  "Amaliyat/mavzu32/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Suyak sinishi va chiqishini aniqlash",
                                                   "text":  "Shikastlangan sohada kuchli og\u0027riq, shish, patologik qiyshayish, a\u0027zodan foydalana olmaslik va suyak krepitatsiyasi."
                                               },
                                               {
                                                   "title":  "2. Kramer shinasi bilan transport immobilizatsiyasi",
                                                   "text":  "Sinish sohasiga qo\u0027shni kamida ikkita bo\u0027g\u0027imni qamragan holda shinani yumshoq paxta bilan o\u0027rab, oyoq yoki qo\u0027lga bog\u0027lab fiksatsiya qilish."
                                               },
                                               {
                                                   "title":  "3. Termik kuyishlarda shoshilinch yordam",
                                                   "text":  "Kuygan sohani darhol 15-20 daqiqa oqar sovuq suv ostida sovutish, pufakchalarni yormaslik va ustiga quruq steril bog\u0027lam qo\u0027yish."
                                               },
                                               {
                                                   "title":  "4. Sovuq urishda birinchi yordam",
                                                   "text":  "Bolani issiq xonaga kiritish, sovuq urgan sohani qor bilan ishqalamaslik, asta-sekin isituvchi quruq bog\u0027lam qo\u0027yish va issiq choy ichirish."
                                               },
                                               {
                                                   "title":  "5. Og\u0027riqsizlantirish va xavfsiz transportirovka",
                                                   "text":  "Travmatik shokning oldini olish uchun og\u0027riqsizlantiruvchi vosita berish va bolani zambilda ehtiyotkorlik bilan shifoxonaga yetkazish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu16/vedio/Констатация.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu16/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu16/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Travmalar, suyak sinishi, chiqishi, kuyish va sovuq urish holatlarida bolalarga shifokorgacha birinchi tibbiy yordam ko\u0027rsatish. Transport immobilizatsiyasi va steril bog\u0027lamlar qo\u0027yish texnikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Immobilizatsiya",
                                                     "def":  "Shikastlangan suyak, bo\u0027g\u0027im yoki yumshoq to\u0027qimalarni harakatsizlantirish orqali ikkilamchi jarohatlarning oldini olish."
                                                 },
                                                 {
                                                     "term":  "Kramer shinasi",
                                                     "def":  "Tananing shikastlangan qismini immobilizatsiya qilish uchun qo\u0027llaniladigan metall simli elastik tibbiy shina."
                                                 },
                                                 {
                                                     "term":  "Dislokatsiya (chiqish)",
                                                     "def":  "Bo\u0027g\u0027im yuzalarining bir-biriga nisbatan o\u0027zaro to\u0027liq yoki qisman siljishi natijasida harakatning yo\u0027qolishi."
                                                 },
                                                 {
                                                     "term":  "Termik kuyish",
                                                     "def":  "Yuqori harorat (olov, qaynoq suv, bug\u0027) ta\u0027sirida teri va uning ostidagi to\u0027qimalarning zararlanishi."
                                                 },
                                                 {
                                                     "term":  "Aseptik bog\u0027lam",
                                                     "def":  "Jarohat yoki kuygan yuzaga infeksiya tushishining oldini olish uchun qo\u0027yiladigan qat\u0027iy steril bint va doka qatlami."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu32/Glasssariy/glossariy.html"
                            },
                            {
                                "id":  "amaliy-33",
                                "number":  33,
                                "category":  "amaliy",
                                "categoryName":  "Amaliy mashg\u0027ulot",
                                "title":  "Bolalarda o\u0027tkir zaharlanishlar (dori vositalari, maishiy kimyo moddalari) da kechiktirib bo\u0027lmaydigan hamshiralik taktikasi. Zond yordamida oshqozonni yuvish texnikasi va enterosorbentlar qo\u0027llash.",
                                "shortDesc":  "O\u0027tkir zaharlanishlarda oshqozonni zond yordamida yuvish, enterosorbentlar qo\u0027llash va shoshilinch taktika.",
                                "lecturePdf":  "Amaliyat/mavzu33/maruza/maruza.html",
                                "slides":  [
                                               {
                                                   "title":  "1. Bolalarda o\u0027tkir zaharlanish sabablari",
                                                   "text":  "Uy sharoitida ochiq qoldirilgan dori vositalari, maishiy kimyo moddalari (sirka kislotasi, xlor), zaharli o\u0027simlik va zamburug\u0027larni yeb qo\u0027yish."
                                               },
                                               {
                                                   "title":  "2. Qabul qilingan zaharni aniqlash",
                                                   "text":  "Bolaning atrofiga qarash, bo\u0027shagan dori qadoqlarini yoki kimyoviy idishlarni topish va darhol shifokorga ko\u0027rsatish uchun saqlab qo\u0027yish."
                                               },
                                               {
                                                   "title":  "3. Oshqozonni zond orqali yuvish texnikasi",
                                                   "text":  "Koma holatida bo\u0027lmagan bolaga zond orqali xona haroratidagi toza suv yuborib, \u0027toza chayindi suvlari\u0027 hosil bo\u0027lguncha qayta-qayta yuvish."
                                               },
                                               {
                                                   "title":  "4. Enterosorbentlarni zudlik bilan qo\u0027llash",
                                                   "text":  "Oshqozon-ichakdagi qolgan zaharlarni o\u0027ziga bog\u0027lab olish uchun faollashtirilgan ko\u0027mir (1 g/kg), Polisorb yoki Smektani suvda ezib ichirish."
                                               },
                                               {
                                                   "title":  "5. Shoshilinch gospitalizatsiya va infuziya",
                                                   "text":  "Zahar organizmdan tezroq chiqib ketishi uchun venaga infuzion suyuqliklar yuborish va bolani toksikologiya bo\u0027limiga yetkazish."
                                               }
                                           ],
                                "videoUrl":  "Amaliyat/mavzu1/vedio/Антропометрия.mp4",
                                "pedTechPdf":  "Amaliyat/mavzu1/pedtex/ped  texnologiya.pdf",
                                "visualPdf":  "Amaliyat/mavzu1/vizual/vizual didaktik resurs.pdf",
                                "quiz":  [
                                             {
                                                 "question":  "Bolalarda o\u0027tkir zaharlanishlar (dori vositalari, maishiy kimyo moddalari) da kechiktirib bo\u0027lmaydigan hamshiralik taktikasi. Zond yordamida oshqozonni yuvish texnikasi va enterosorbentlar qo\u0027llash. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                 "options":  [
                                                                 "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                 "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                 "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                 "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                             },
                                             {
                                                 "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                 "options":  [
                                                                 "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                 "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                 "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                 "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                             },
                                             {
                                                 "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                 "options":  [
                                                                 "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                 "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                 "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                 "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                             },
                                             {
                                                 "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                 "options":  [
                                                                 "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                 "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                 "Xona haroratini 35 gradusgacha qizdirish",
                                                                 "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                             },
                                             {
                                                 "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                 "options":  [
                                                                 "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                 "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                 "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                 "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                             ],
                                                 "correct":  0,
                                                 "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                             }
                                         ],
                                "glossary":  [
                                                 {
                                                     "term":  "Zaharlanish (intoksikatsiya)",
                                                     "def":  "Toksik moddalarning (dori, kimyoviy vositalar) organizmga tushishi natijasida a\u0027zolar funksiyasining buzilishi."
                                                 },
                                                 {
                                                     "term":  "Oshqozonni yuvish",
                                                     "def":  "Zond yordamida oshqozonga toza suv yoki fiziologik eritma yuborib, toksinlarni so\u0027rilmasdan avval tashqariga chiqarib yuborish."
                                                 },
                                                 {
                                                     "term":  "Enterosorbentlar",
                                                     "def":  "Oshqozon-ichak yo\u0027llaridagi zaharli moddalar va toksinlarni o\u0027ziga yutib, organizmdan xavfsiz chiqarib yuboruvchi dorilar (faollashtirilgan ko\u0027mir, smekta)."
                                                 },
                                                 {
                                                     "term":  "Antidot",
                                                     "def":  "Muayyan zaharning organizmga ko\u0027rsatadigan salbiy ta\u0027sirini zararsizlantiruvchi yoki neytrallovchi maxsus dori moddasi."
                                                 },
                                                 {
                                                     "term":  "Forlangan diurez",
                                                     "def":  "Organizmga ko\u0027p miqdorda suyuqlik quyish va siydik haydovchi dorilar (furosemid) yordamida qondagi zaharli moddalarni tezkor chiqarish usuli."
                                                 }
                                             ],
                                "glossaryPdf":  "Amaliyat/mavzu33/Glasssariy/glossariy.html"
                            }
                        ],
    "theoreticalTopics":  [
                              {
                                  "id":  "nazariy-1",
                                  "number":  1,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Pediatriyaning rivojlanish tarixi. Bolalarning jismoniy rivojlanishini monitoring qilish va baholash mezonlari.",
                                  "shortDesc":  "Pediatriyaning rivojlanish tarixi, tibbiy ta\u0027limotlar, bolalik davrlari va jismoniy rivojlanish monitoringi nazariyasi.",
                                  "lecturePdf":  "Teoriya/mavzu1/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Pediatriya fanining predmeti va maqsadi",
                                                     "text":  "Pediatriya bolaning tug\u0027ilganidan to balog\u0027at yoshigacha bo\u0027lgan davrdagi sog\u0027lig\u0027i, o\u0027sishi, kasalliklari va parvarishini o\u0027rganuvchi fan."
                                                 },
                                                 {
                                                     "title":  "2. Tarixiy bosqichlar va allomalar ta\u0027limoti",
                                                     "text":  "Abu Ali ibn Sino va Florens Naytingeyl ta\u0027limotlari asosida shakllangan bolalarni gigiyenik parvarishlash va parhez tamoyillari."
                                                 },
                                                 {
                                                     "title":  "3. Bolalik davrlarining davriy tasnifi",
                                                     "text":  "Homila ichi davri, neonatal davr (0-28 kun), go\u0027daklik (1 yoshgacha), maktabgacha va maktab davrlarining o\u0027ziga xos xususiyatlari."
                                                 },
                                                 {
                                                     "title":  "4. Jismoniy rivojlanish monitoringi",
                                                     "text":  "Bo\u0027y, tana vazni va tana a\u0027zolari proporsiyalarini muntazam kuzatish orqali organizmning uyg\u0027un o\u0027sishini baholash."
                                                 },
                                                 {
                                                     "title":  "5. Profilaktik patronajning o\u0027rni",
                                                     "text":  "Birlamchi bo\u0027g\u0027in hamshirasining oilalarda o\u0027tkazadigan patronaj ko\u0027riklari sog\u0027lom avlodni voyaga yetkazishning poydevoridir."
                                                 }
                                             ],
                                  "videoUrl":  "Teoriya/mavzu1/vedio/video_2023-10-25_17-29-07.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu1/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu1/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Pediatriyaning rivojlanish tarixi. Bolalarning jismoniy rivojlanishini monitoring qilish va baholash mezonlari. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Pediatriya",
                                                       "def":  "Bolalar organizmining o\u0027sishi, rivojlanishi, kasalliklari hamda ularning profilaktikasi va davolashini o\u0027rganuvchi tibbiyot fani."
                                                   },
                                                   {
                                                       "term":  "Garmoniya indeksi",
                                                       "def":  "Bolaning vazni, bo\u0027yi va ko\u0027krak qafasi o\u0027lchamlari o\u0027rtasidagi mutanosiblik darajasi."
                                                   },
                                                   {
                                                       "term":  "Antropometrik indeks",
                                                       "def":  "Tana massasi va bo\u0027y nisbatini ifodalovchi ko\u0027rsatkichlar (Kete, Chulitskaya indekslari)."
                                                   },
                                                   {
                                                       "term":  "Akseleratsiya",
                                                       "def":  "Keyingi avlodlarda bolalarning jismoniy va jinsiy jihatdan oldingi avlodlarga qaraganda tezroq rivojlanishi hodisasi."
                                                   },
                                                   {
                                                       "term":  "Sog\u0027lom bola rivojlanishi",
                                                       "def":  "Bolaning yosh davrlariga mos holda biologik va psixomotor funksiyalarining to\u0027laqonli shakllanishi."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu1/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-2",
                                  "number":  2,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Bola organizmining anatomik-fiziologik xususiyatlari. Teri, suyak, mushak, nerv tizimi, sezgi a\u0027zolari va ichki sekretsiya bezlarining tuzilishi hamda yoshga doir o\u0027ziga xosliklari.",
                                  "shortDesc":  "Bola organizmining anatomik-fiziologik xususiyatlari: teri, suyak, nerv, mushak va endokrin tizimlarining o\u0027ziga xosligi.",
                                  "lecturePdf":  "Teoriya/mavzu2/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Teri va teri osti kletchatkasi",
                                                     "text":  "Chaqaloq terisining nozikligi, qon tomirlariga boyligi, tez nafas olish va tashqi moddalarni tez so\u0027rib olish xususiyati."
                                                 },
                                                 {
                                                     "title":  "2. Suyak to\u0027qimasi va liqildoqlar",
                                                     "text":  "Bolalar suyaklarining egiluvchanligi, kalsiyga boyish jarayoni va katta liqildoqning 12-18 oylikda to\u0027liq yopilishi."
                                                 },
                                                 {
                                                     "title":  "3. Mushak tizimi va harakat faolligi",
                                                     "text":  "Yangi tug\u0027ilgan davrda fiziologik mushak gipertonusi, keyinchalik boshni tutish, o\u0027tirish va yurish ko\u0027nikmalarining shakllanishi."
                                                 },
                                                 {
                                                     "title":  "4. Asab tizimining shakllanishi",
                                                     "text":  "Miya po\u0027stlog\u0027ining tez rivojlanishi, shartsiz tug\u0027ma reflekslar va tashqi muhit stimullariga nisbatan reaksiyalar."
                                                 },
                                                 {
                                                     "title":  "5. Endokrin bezlarning regulyatsiyasi",
                                                     "text":  "Gipofiz, qalqonsimon bez va buyrak usti bezlarining jismoniy o\u0027sish hamda moddalar almashinuvidagi yetakchi o\u0027rni."
                                                 }
                                             ],
                                  "pedTechPdf":  "Teoriya/mavzu2/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu2/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Bola organizmining anatomik-fiziologik xususiyatlari. Teri, suyak, mushak, nerv tizimi, sezgi a\u0027zolari va ichki sekretsiya bezlarining tuzilishi hamda yoshga doir o\u0027ziga xosliklari. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Bosh suyagi liqildog\u0027i (fontanelle)",
                                                       "def":  "Go\u0027dak kalla suyagining birikmagan, yumshoq biriktiruvchi to\u0027qimali qismi (katta liqildoq 1-1.5 yoshda berkiladi)."
                                                   },
                                                   {
                                                       "term":  "Mielinizatsiya",
                                                       "def":  "Nerv tolalarining mielin qobig\u0027i bilan qoplanishi va nerv impulslarini o\u0027tkazish tezligining ortishi jarayoni."
                                                   },
                                                   {
                                                       "term":  "Timus (ayrisimon bez)",
                                                       "def":  "Bolalik davrida T-limfotsitlarni yetishtirib beruvchi va birlamchi immunitetni ta\u0027minlovchi markaziy immun a\u0027zo."
                                                   },
                                                   {
                                                       "term":  "Suyaklanish nuqtalari",
                                                       "def":  "Bolalikda tog\u0027ay to\u0027qimasining suyak to\u0027qimasiga aylanishining rentgenologik ko\u0027rinadigan markazlari."
                                                   },
                                                   {
                                                       "term":  "Teri rezistentligi",
                                                       "def":  "Bolalar terisining yupqa, nozikligi va qon tomirlarga boyligi sababli uning himoya to\u0027sig\u0027ining zaifligi."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu2/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-3",
                                  "number":  3,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Nafas olish, yurak qon-tomir, qon yaratish, ovqat hazm qilish va siydik ajratish a\u0027zolarining anatomik-fiziologik xususiyatlari.",
                                  "shortDesc":  "Nafas olish, yurak qon-tomir, qon yaratish, oshqozon-ichak va buyrak tizimlarining morfologik va funksional yetilishi.",
                                  "lecturePdf":  "Teoriya/mavzu3/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Nafas olish tizimining o\u0027ziga xosligi",
                                                     "text":  "Nafas yo\u0027llarining torligi, shilliq qavatning tez shishishi va diafragmal nafas turining ustunligi."
                                                 },
                                                 {
                                                     "title":  "2. Yurak qon-tomir tizimi faoliyati",
                                                     "text":  "Yurak hajmining nisbatan kattaligi, tomirlar kengligi, qon bosimining pastligi va yuqori puls chastotasi."
                                                 },
                                                 {
                                                     "title":  "3. Qon yaratish a\u0027zolari dinamikasi",
                                                     "text":  "Qizil suyak iligining faol faoliyati, leykotsitar formulada neytrofillar va limfotsitlarning fiziologik kesishmalari."
                                                 },
                                                 {
                                                     "title":  "4. Ovqat hazm qilish tizimi anatomiyasi",
                                                     "text":  "Oshqozon sig\u0027imining kichikligi, fermentlar yetishmovchiligi va ichak devorining yuqori o\u0027tkazuvchanligi."
                                                 },
                                                 {
                                                     "title":  "5. Siydik ajratish a\u0027zolari xususiyatlari",
                                                     "text":  "Buyraklarning konsentratsion faoliyati pastligi, siydik chiqarish kanalining qisqaligi va infeksiyalarga moyillik."
                                                 }
                                             ],
                                  "pedTechPdf":  "Teoriya/mavzu3/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu3/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Nafas olish, yurak qon-tomir, qon yaratish, ovqat hazm qilish va siydik ajratish a\u0027zolarining anatomik-fiziologik xususiyatlari. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Diafragmal nafas",
                                                       "def":  "Go\u0027daklar ko\u0027krak qafasi mushaklari yaxshi rivojlanmaganligi sababli asosan qorin va diafragma orqali nafas olishi."
                                                   },
                                                   {
                                                       "term":  "Fiziologik taxikardiya",
                                                       "def":  "Bolalarda metabolizm yuqoriligi sababli yurak urishining kattalarga qaraganda ancha tez (chaqaloqda 120-140/daq) bo\u0027lishi."
                                                   },
                                                   {
                                                       "term":  "Fetal gemoglobin (HbF)",
                                                       "def":  "Homilalik davrida kislorodni o\u0027ziga oson biriktiruvchi va tug\u0027ilgandan keyin asta-sekin HbA ga almashinuvchi gemoglobin turi."
                                                   },
                                                   {
                                                       "term":  "Oshqozon sig\u0027imi",
                                                       "def":  "Chaqaloq oshqozoni tug\u0027ilganda atigi 30-35 ml bo\u0027lib, 1 yoshga borganda 250-300 ml gacha kengayishi."
                                                   },
                                                   {
                                                       "term":  "Koptokchalar filtratsiyasi",
                                                       "def":  "Buyrakda birlamchi siydik hosil bo\u0027lish jarayoni bo\u0027lib, go\u0027daklarda kattalarga nisbatan pastroq bo\u0027ladi."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu3/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-4",
                                  "number":  4,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Neonatologiya fani haqida tushuncha. Yetuk tug\u0027ilgan chaqaloqlarning anatomik-fiziologik xususiyatlari va ularga hamshiralik parvarishi ko\u0027rsatish.",
                                  "shortDesc":  "Neonatologiya asoslari, yetuk chaqaloqlarning belgilari, adaptatsiya davri, fiziologik holatlar va parvarishlash.",
                                  "lecturePdf":  "Teoriya/mavzu4/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Neonatologiya fani vazifalari",
                                                     "text":  "Hayotning birinchi 28 kunidagi chaqaloqlar organizmining tashqi muhitga moslashuvi (adaptatsiyasi) va sog\u0027lig\u0027ini muhofaza qilish."
                                                 },
                                                 {
                                                     "title":  "2. Yetuklik mezonlari va Apgar shkalasi",
                                                     "text":  "Tug\u0027ilganda bolaning yurak urishi, nafas olishi, mushak tonusi, reflektor qo\u0027zg\u0027aluvchanligi va terisining rangini 10 ballik shkalada baholash."
                                                 },
                                                 {
                                                     "title":  "3. Chaqaloqning tranzitor fiziologik holatlari",
                                                     "text":  "Fiziologik tana vazni yo\u0027qotishi, tranzitor sariqlik, jinsiy kriz va siydik kislotali infarkt jarayonlarining o\u0027z-o\u0027zidan o\u0027tib ketishi."
                                                 },
                                                 {
                                                     "title":  "4. Tug\u0027ma shartsiz reflekslar",
                                                     "text":  "So\u0027rish, yutish, qidirish, kaft-og\u0027iz (Babkin), tutib olish (Robenson) va Moro reflekslarining mavjudligi sog\u0027lomlik belgisidir."
                                                 },
                                                 {
                                                     "title":  "5. Neonatal xavfsizlik va aseptika",
                                                     "text":  "Chaqaloqlar xonasida xodimlar gigiyenasi, toza havo harorati va ona-bola birgalikda bo\u0027lishining (palata \u0027Ona va bola\u0027) afzalliklari."
                                                 }
                                             ],
                                  "videoUrl":  "Teoriya/mavzu4/vedio/Qolqap kiyiw.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu4/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu4/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Neonatologiya fani haqida tushuncha. Yetuk tug\u0027ilgan chaqaloqlarning anatomik-fiziologik xususiyatlari va ularga hamshiralik parvarishi ko\u0027rsatish. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Neonatologiya",
                                                       "def":  "Yangi tug\u0027ilgan chaqaloqlarning hayotining dastlabki 28 kunlik davridagi fiziologiyasi va patologiyasini o\u0027rganuvchi fan."
                                                   },
                                                   {
                                                       "term":  "Yetuklik belgilari",
                                                       "def":  "Homiladorlikning 38-42 haftasida tug\u0027ilgan, tana vazni 2500 g dan, bo\u0027yi 46 sm dan ortiq bo\u0027lgan chaqaloq holati."
                                                   },
                                                   {
                                                       "term":  "Fiziologik sariqlik",
                                                       "def":  "Tug\u0027ruqdan keyin 2-3 kunda qonda erkin bilirubin oshishi tufayli terining sarg\u0027ayishi va 7-10 kunda o\u0027z-o\u0027zidan yo\u0027qolishi."
                                                   },
                                                   {
                                                       "term":  "Fiziologik vazn yo\u0027qotishi",
                                                       "def":  "Dastlabki 3-4 kunda nafas va mekoniy ajralishi sababli vaznning 6-8% gacha vaqtincha kamayishi."
                                                   },
                                                   {
                                                       "term":  "Jinsiy kriz",
                                                       "def":  "Ona estrogenlari ta\u0027sirida chaqaloq sut bezlarining shishishi va jinsiy a\u0027zolardan ajralma kelishi holati."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu4/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-5",
                                  "number":  5,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Chala tug\u0027ilgan chaqaloqlarga hamshiralik parvarishi ko\u0027rsatish. Chala tug\u0027ilish sabablari, etilogiyasi, belgilari, darajalari va maxsus inkubator (kuvez) da parvarishlash tartibi.",
                                  "shortDesc":  "Chala tug\u0027ilganlik sabablari, mezonlari, harorat boshqaruvi, inkubator (kuvez) rejimlari va parvarishlash tamoyillari.",
                                  "lecturePdf":  "Teoriya/mavzu5/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Chala tug\u0027ilish sabablari va darajalari",
                                                     "text":  "Ona salomatligidagi patologiyalar, ko\u0027p homilalik va infeksiyalar oqibatida 37 haftagacha va 2500 g dan kam vaznda tug\u0027ilish."
                                                 },
                                                 {
                                                     "title":  "2. Chala tug\u0027ilgan chaqaloq morfologiyasi",
                                                     "text":  "Terisi qizil, ajinli, lanugo (mayin tuklar) bilan qoplangan, quloq supralari yumshoq, tirnoqlari barmoq uchiga yetmagan bo\u0027ladi."
                                                 },
                                                 {
                                                     "title":  "3. Fiziologik funksiyalarning yetilmaganligi",
                                                     "text":  "Termoregulyatsiya markazining nomukammalligi, nafasning davriy to\u0027xtab qolishi (apnoe) va so\u0027rish refleksining zaifligi."
                                                 },
                                                 {
                                                     "title":  "4. Kuvezda optimal mikroklimat yaratish",
                                                     "text":  "Avtomatlashtirilgan inkubatorlarda tana haroratiga mos 34-36 В°C issiqlik, namlik va kislorod konsentratsiyasini uzluksiz boshqarish."
                                                 },
                                                 {
                                                     "title":  "5. Oziqlantirish va parvarishlash strategiyasi",
                                                     "text":  "Ona suti bilan individual me\u0027yorda zond orqali oziqlantirish, tashqi shovqin va yorug\u0027likdan to\u0027liq asrash (himoya muhiti)."
                                                 }
                                             ],
                                  "videoUrl":  "Teoriya/mavzu5/vedio/video_2023-10-15_17-33-37.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu5/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu5/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Chala tug\u0027ilgan chaqaloqlarga hamshiralik parvarishi ko\u0027rsatish. Chala tug\u0027ilish sabablari, etilogiyasi, belgilari, darajalari va maxsus inkubator (kuvez) da parvarishlash tartibi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Chala tug\u0027ilish darajalari",
                                                       "def":  "Tana vazniga qarab I daraja (2001-2500 g), II (1501-2000 g), III (1001-1500 g) va IV daraja (1000 g dan kam - o\u0027ta kam vazn)."
                                                   },
                                                   {
                                                       "term":  "Surfaktant",
                                                       "def":  "Alveolalarning ichki yuzasini qoplab, birinchi nafasdan keyin ularning bir-biriga yopishib qolishiga yo\u0027l qo\u0027ymaydigan modda."
                                                   },
                                                   {
                                                       "term":  "Termolabilite",
                                                       "def":  "Chala chaqaloqlarda termoregulyatsiya markazi yetilmaganligi sababli tashqi muhit haroratiga qarab tez sovib yoki qizib ketishi."
                                                   },
                                                   {
                                                       "term":  "Kenguru usuli",
                                                       "def":  "Chala tug\u0027ilgan chaqaloqni onaning yalang\u0027och ko\u0027kragiga qo\u0027yib, \u0027teri-teriga\u0027 tutash holda tabiiy isitish va parvarishlash usuli."
                                                   },
                                                   {
                                                       "term":  "Botalov oqimi",
                                                       "def":  "Homilaning o\u0027pka arteriyasini aorta bilan bog\u0027lovchi va tug\u0027ilgandan keyin bekilishi kerak bo\u0027lgan tomir oqimi."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu5/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-6",
                                  "number":  6,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Bolalarni ratsional ovqatlantirish nazariyasi. Tabiiy, aralash va sun\u0027iy ovqatlantirish. Ona sutining biologik va immunologik afzalliklari.",
                                  "shortDesc":  "Bolalarni ratsional ovqatlantirish nazariyasi: ona suti afzalliklari, tabiiy, aralash va sun\u0027iy oziqlantirish qoidalari.",
                                  "lecturePdf":  "Teoriya/mavzu6/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Ratsional ovqatlantirishning mohiyati",
                                                     "text":  "Bolaning yoshiga, metabolizmiga mos keluvchi ozuqa moddalarini o\u0027z vaqtida va mutanosib miqdorda berish nazariyasi."
                                                 },
                                                 {
                                                     "title":  "2. Ona sutining biologik ustunligi",
                                                     "text":  "Ona suti tarkibida oson so\u0027riluvchi zardob oqsillari, taurin, to\u0027yinmagan yog\u0027 kislotalari va sekretor IgA mavjud bo\u0027lib, immunitetni ta\u0027minlaydi."
                                                 },
                                                 {
                                                     "title":  "3. Aralash oziqlantirish qoidalari",
                                                     "text":  "Ko\u0027krak suti kam bo\u0027lganda avval ko\u0027krakni emizish, so\u0027ngra yetishmagan miqdorni qoshiqcha bilan sutli aralashma orqali to\u0027ldirish."
                                                 },
                                                 {
                                                     "title":  "4. Sun\u0027iy oziqlantirish prinsiplari",
                                                     "text":  "Sun\u0027iy ovqatlantirishda go\u0027dakning yoshiga qat\u0027iy mos keladigan adaptatsiyalangan aralashmalarni sutkalik rejimda tayyorlab berish."
                                                 },
                                                 {
                                                     "title":  "5. Qo\u0027shimcha ovqatlarni (prikorm) kiritish",
                                                     "text":  "6 oylikdan boshlab ona suti bilan birga meva, sabzavot, bo\u0027tqa va go\u0027sht mahsulotlarini bosqichma-bosqich ratsionga qo\u0027shish."
                                                 }
                                             ],
                                  "videoUrl":  "Teoriya/mavzu6/vedio/\"Shaxsiy gigiyena\".mp4",
                                  "pedTechPdf":  "Teoriya/mavzu6/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu6/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Bolalarni ratsional ovqatlantirish nazariyasi. Tabiiy, aralash va sun\u0027iy ovqatlantirish. Ona sutining biologik va immunologik afzalliklari. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Ona suti immuniteti",
                                                       "def":  "Ona sutidagi sekretor IgA, lizotsim, laktoferrin va bifidus omillari bolani ichak infeksiyalaridan himoya qiladi."
                                                   },
                                                   {
                                                       "term":  "Aralash ovqatlantirish",
                                                       "def":  "Ona suti yetishmaganda bolaga ko\u0027krak suti bilan birga sun\u0027iy moslashtirilgan sutli aralashma (formula) berish."
                                                   },
                                                   {
                                                       "term":  "Sun\u0027iy ovqatlantirish",
                                                       "def":  "Go\u0027dakni turli sabablarga ko\u0027ra ona sutidan butunlay mahrum bo\u0027lib, faqat moslashtirilgan aralashmalar bilan boqish."
                                                   },
                                                   {
                                                       "term":  "Moslashtirilgan aralashma",
                                                       "def":  "Sigir yoki echki sutining oqsil va mineral tarkibi ona sutiga maksimal yaqinlashtirilgan bolalar ozuqasi."
                                                   },
                                                   {
                                                       "term":  "Kazein va albumin nisbati",
                                                       "def":  "Ona sutida nozik oqsil albuminlar ko\u0027p bo\u0027lib, oson hazm bo\u0027ladi va ichakda yumshoq ivindi hosil qiladi."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu6/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-7",
                                  "number":  7,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Chaqaloqlik davri kasalliklarida hamshiralik parvarishi. Chaqaloqlar asfiksiyasi, tug\u0027ruq jarohatlari, chaqaloqlar gemolitik kasalligining etiopatogenezi va klinikasi.",
                                  "shortDesc":  "Perinatal gipoksiya, chaqaloqlar asfiksiyasi, tug\u0027ruq jarohatlari va chaqaloqlar gemolitik kasalligi (ChGK) etiopatogenezi.",
                                  "lecturePdf":  "Teoriya/mavzu7/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Perinatal gipoksiya va asfiksiya",
                                                     "text":  "Homilaning kindik tizimchasi qisilib qolishi yoki yo\u0027ldosh ko\u0027chishi natijasida kislorod yetishmasligi va asfiksiya patogenezi."
                                                 },
                                                 {
                                                     "title":  "2. Tug\u0027ruq jarohatlarining turlari",
                                                     "text":  "Miya ichi qon quyilishlari, kefalogematoma, o\u0027mrov suyagi sinishi va yelka chigali falajliklari (Dyushen-Erb falaji)."
                                                 },
                                                 {
                                                     "title":  "3. Chaqaloqlar gemolitik kasalligi (ChGK)",
                                                     "text":  "Ona va homila qonining rezus-omil yoki qon guruhlari bo\u0027yicha mos kelmasligi sababli antitelolar hosil bo\u0027lishi va eritrotsitlar gemolizi."
                                                 },
                                                 {
                                                     "title":  "4. Bilirubin intoksikatsiyasi xavfi",
                                                     "text":  "Qonda erkin bilirubinning keskin ko\u0027payishi miyaning po\u0027stloq osti yadrolariga toksik ta\u0027sir ko\u0027rsatib, yadroviy sariqlik keltirib chiqaradi."
                                                 },
                                                 {
                                                     "title":  "5. Perinatal patologiyalarda hamshira roli",
                                                     "text":  "Chaqaloqning nevrologik holatini, terining rangi va hayotiy funksiyalarini doimiy baholash hamda davolash muolajalarini bajarish."
                                                 }
                                             ],
                                  "videoUrl":  "Teoriya/mavzu7/vedio/\"Shaxsiy gigiyena\".mp4",
                                  "pedTechPdf":  "Teoriya/mavzu7/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu7/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Chaqaloqlik davri kasalliklarida hamshiralik parvarishi. Chaqaloqlar asfiksiyasi, tug\u0027ruq jarohatlari, chaqaloqlar gemolitik kasalligining etiopatogenezi va klinikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Gipoksiya",
                                                       "def":  "To\u0027qima va a\u0027zolarga yetarli miqdorda kislorod yetib bormasligi natijasida rivojlanadigan kislorod ochligi."
                                                   },
                                                   {
                                                       "term":  "Yadroviy sariqlik (bilirubin ensefalopatiyasi)",
                                                       "def":  "Erkin bilirubin miqdori kritik darajadan oshganda (340 mkmol/l dan yuqori) miya to\u0027qimasini zararlashi."
                                                   },
                                                   {
                                                       "term":  "Rezus-konflikt",
                                                       "def":  "Manfiy rezusli onaning qonida musbat rezusli homilaning qizil qon tanachalariga qarshi antitelolar hosil bo\u0027lishi."
                                                   },
                                                   {
                                                       "term":  "Qon almashtirib quyish (OPK)",
                                                       "def":  "Gemolitik kasallikda toksik bilirubinni va ona antitelolarini chaqaloq qonidan tezkor chiqarish operatsiyasi."
                                                   },
                                                   {
                                                       "term":  "Bosh suyagi ichi tug\u0027ruq jarohati",
                                                       "def":  "Tug\u0027ruq mexanizmi buzilishi natijasida kalla suyagi ichiga qon quyilishi va asab tizimi zararlanishi."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu7/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-8",
                                  "number":  8,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Chaqaloqlarda teri va kindik kasalliklari (omfalit, piodermiya), chaqaloqlar sepsisi, pnevmopatiyasi hamda to\u0027satdan o\u0027lim sindromida hamshiralik parvarishi.",
                                  "shortDesc":  "Chaqaloqlarda omfalit, piodermiya, neonatal sepsis, pnevmopatiya va to\u0027satdan o\u0027lim sindromi xavf omillari.",
                                  "lecturePdf":  "Teoriya/mavzu8/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Kindik yarasi kasalliklari: omfalit",
                                                     "text":  "Stafilokokk va streptokokklar ta\u0027sirida kindik sohasining kataral, flegmonoz yoki nekrotik yallig\u0027lanishi va uning davosi."
                                                 },
                                                 {
                                                     "title":  "2. Teri kasalliklari: piodermiyalar",
                                                     "text":  "Vesikulopustulyoz, chaqaloqlar pufakchali toshmasi (pemfigus) va Ritter eksfoliativ dermatiti rivojlanish mexanizmi."
                                                 },
                                                 {
                                                     "title":  "3. Chaqaloqlar sepsisi etiopatogenezi",
                                                     "text":  "Infeksiya darvozalari (kindik, teri) orqali bakteriyalarning qon oqimiga tarqalishi va ko\u0027p a\u0027zoli yetishmovchilik yuzaga kelishi."
                                                 },
                                                 {
                                                     "title":  "4. Chaqaloqlar pnevmopatiyasi va RDS",
                                                     "text":  "O\u0027pkada surfaktant moddasining yetishmasligi oqibatida atelektazlar va gialin membranalar kasalligining paydo bo\u0027lishi."
                                                 },
                                                 {
                                                     "title":  "5. To\u0027satdan o\u0027lim sindromi (SIDS) profilaktikasi",
                                                     "text":  "Chaqaloqni qorni bilan yotqizmaslik, yumshoq yostiq qo\u0027ymaslik, xonani tamaki tutunidan tozalash va qizib ketishiga yo\u0027l qo\u0027ymaslik."
                                                 }
                                             ],
                                  "pedTechPdf":  "Teoriya/mavzu8/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu8/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Chaqaloqlarda teri va kindik kasalliklari (omfalit, piodermiya), chaqaloqlar sepsisi, pnevmopatiyasi hamda to\u0027satdan o\u0027lim sindromida hamshiralik parvarishi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Flegmonoz omfalit",
                                                       "def":  "Kindik jarohati atrofidagi to\u0027qimalarning chuqur yiringli nekrotik erishi bilan kechuvchi xavfli shakli."
                                                   },
                                                   {
                                                       "term":  "Bakterial sepsis",
                                                       "def":  "Organizmning infeksiyaga tizimli yallig\u0027lanish reaksiyasi (SIRS) va a\u0027zolar yetishmovchiligi bilan kechishi."
                                                   },
                                                   {
                                                       "term":  "To\u0027satdan bolalar o\u0027limi sindromi (SIDS)",
                                                       "def":  "Go\u0027dakning uyqu paytida ko\u0027rinadigan sabablarsiz to\u0027satdan nafas to\u0027xtashi natijasida vafot etishi."
                                                   },
                                                   {
                                                       "term":  "Ritter kasalligi (eksfoliativ dermatit)",
                                                       "def":  "Yangi tug\u0027ilgan chaqaloqlarda stafilokokk toksini ta\u0027sirida terining yuqori qatlami ko\u0027chib tushishi."
                                                   },
                                                   {
                                                       "term":  "Sklerema",
                                                       "def":  "Chala tug\u0027ilgan chaqaloqlarda teri va teri osti yog\u0027 qatlamining toshdek qattiqlashishi bilan kechuvchi sovuq qotish asorati."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu8/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-9",
                                  "number":  9,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Go\u0027dak va kichik yoshdagi bolalarda ovqat hazm qilishning surunkali buzilishlari, raxit, spazmofiliya va ekssudativ-kataral diatez kasalliklari.",
                                  "shortDesc":  "Surunkali ovqatlanish buzilishlari (gipotrofiya), D vitamini yetishmovchiligi, raxit, spazmofiliya va diatezlar nazariyasi.",
                                  "lecturePdf":  "Teoriya/mavzu9/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Surunkali ovqatlanish buzilishlari",
                                                     "text":  "Gipotrofiyaning 3 ta darajasi: tana vaznining bo\u0027yga nisbatan kamayishi, teri osti yog\u0027 qavatining yo\u0027qolishi va immunitet pasayishi."
                                                 },
                                                 {
                                                     "title":  "2. Raxitning klinik davrlari va belgilari",
                                                     "text":  "Boshlang\u0027ich davr (asabiylik, terlash), avj olgan davr (peshona va tepa do\u0027mboqlari, \u0027raxitik tasbehlar\u0027) va rekonvalessensiya davri."
                                                 },
                                                 {
                                                     "title":  "3. Spazmofiliya (tetaniya) patogenezi",
                                                     "text":  "Alkaloz va qonda ionlashgan kalsiyning keskin pasayishi fonida periferik nerv-mushak qo\u0027zg\u0027aluvchanligining oshishi va tortishishlar."
                                                 },
                                                 {
                                                     "title":  "4. Diatezlarning turlari va ahamiyati",
                                                     "text":  "Ekssudativ-kataral (allergik), limfatiko-gipoplastik (limfa tugunlari kattalashishi) va asab-artritik diatezlar konstitutsiyasi."
                                                 },
                                                 {
                                                     "title":  "5. Profilaktika va sog\u0027lomlashtirish choralari",
                                                     "text":  "To\u0027g\u0027ri balanslangan parhez, D vitamini qabuli, massaj, jismoniy tarbiya va chiniqtirish muolajalarining ahamiyati."
                                                 }
                                             ],
                                  "videoUrl":  "Teoriya/mavzu9/vedio/video_2023-10-17_20-01-08.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu9/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu9/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Go\u0027dak va kichik yoshdagi bolalarda ovqat hazm qilishning surunkali buzilishlari, raxit, spazmofiliya va ekssudativ-kataral diatez kasalliklari. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Distrofiya",
                                                       "def":  "Bolalarda to\u0027qimalarning oziqlanishi buzilishi natijasida tana vazni va to\u0027qimalar turgorining o\u0027zgarishi."
                                                   },
                                                   {
                                                       "term":  "Gipovitaminoz D",
                                                       "def":  "Organizmda quyosh nuri yoki oziq-ovqat orqali tushadigan D vitaminining surunkali yetishmovchiligi."
                                                   },
                                                   {
                                                       "term":  "Kalsiypenik tetaniya",
                                                       "def":  "Ionlashgan kalsiyning keskin kamayishi oqibatida qo\u0027l-oyoq mushaklarining qisqarib \u0027akusher qo\u0027li\u0027 holatiga kelishi."
                                                   },
                                                   {
                                                       "term":  "Osteomalyatsiya",
                                                       "def":  "Raxitda yangi hosil bo\u0027layotgan suyak to\u0027qimasining minerallashmasdan yumshoq bo\u0027lib qolishi."
                                                   },
                                                   {
                                                       "term":  "Gneys",
                                                       "def":  "Go\u0027daklar boshining sochli qismida va qoshlarida yog\u0027 bezlarining haddan tashqari ajralishi natijasida hosil bo\u0027ladigan tangasimon qora-sarg\u0027ish qobiqlar."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu9/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-10",
                                  "number":  10,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Nafas olish a\u0027zolari kasalliklari: o\u0027tkir rinit, angina va laringit kasalliklarida bolaga hamda oila a\u0027zolariga hamshiralik parvarishi.",
                                  "shortDesc":  "Nafas yo\u0027llari o\u0027tkir kasalliklari: o\u0027tkir rinit, kataral va yiringli angina hamda laringitda hamshiralik parvarishi nazariyasi.",
                                  "lecturePdf":  "Teoriya/mavzu10/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Yuqori nafas yo\u0027llari anatomik moyilligi",
                                                     "text":  "Nafas yo\u0027llari shilliq qavatining mayinligi va boy qon aylanishi har qanday virusli infeksiyada tezkor shish paydo bo\u0027lishiga olib keladi."
                                                 },
                                                 {
                                                     "title":  "2. O\u0027tkir rinitning chaqaloqlarga ta\u0027siri",
                                                     "text":  "Burun orqali nafas olish buzilganda chaqaloq ko\u0027krak emishdan bosh tortadi, bezovtalanadi va tana vazni tez yo\u0027qotiladi."
                                                 },
                                                 {
                                                     "title":  "3. Laringit va stenozlanuvchi krup sindromi",
                                                     "text":  "Ovoz boylamlari osti sohasining shishi natijasida \u0027huruvchi\u0027 yo\u0027tal, ovozning bo\u0027g\u0027ilishi va ilhomiy hansirash yuzaga kelishi."
                                                 },
                                                 {
                                                     "title":  "4. Bolalarda angina turlari va asoratlari",
                                                     "text":  "Lakunar va follikulyar anginalarning o\u0027tkir kechishi, limfa tugunlarining kattalashishi va revmatizm hamda nefrit xavfi."
                                                 },
                                                 {
                                                     "title":  "5. Hamshiralik parvarishi va ingalyatsiya rejimi",
                                                     "text":  "Xona namligini ta\u0027minlash, burun yo\u0027llarini tuzli eritmalar bilan yuvish va issiq ingalyatsiyalar orqali nafasni yengillatish."
                                                 }
                                             ],
                                  "videoUrl":  "Teoriya/mavzu10/vedio/video_2023-10-14_21-19-05.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu10/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu10/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Nafas olish a\u0027zolari kasalliklari: o\u0027tkir rinit, angina va laringit kasalliklarida bolaga hamda oila a\u0027zolariga hamshiralik parvarishi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "O\u0027tkir nazofaringit",
                                                       "def":  "Burun va halqum shilliq qavatining bir vaqtda virusli yoki bakterial yallig\u0027lanishi."
                                                   },
                                                   {
                                                       "term":  "Lakunar angina",
                                                       "def":  "Bodomsimon bezlar tirqishlarida (lakunalarda) sarg\u0027ish-oq yiringli karashlar to\u0027planishi bilan kechuvchi tomoq og\u0027rig\u0027i."
                                                   },
                                                   {
                                                       "term":  "Follikulyar angina",
                                                       "def":  "Bodomsimon bezlar yuzasida mayda sariq yiringli nuqtalar (follikulalar) paydo bo\u0027lishi."
                                                   },
                                                   {
                                                       "term":  "Stenoz",
                                                       "def":  "Hiqildoq bo\u0027shlig\u0027ining yallig\u0027lanishli shish natijasida torayishi va havoning o\u0027pkaga o\u0027tishining qiyinlashishi."
                                                   },
                                                   {
                                                       "term":  "Aspiratsiya",
                                                       "def":  "Burun yoki og\u0027izdagi begona jism, qusuq massalari yoki shilliqning nafas yo\u0027llariga tushib qolishi."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu10/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-11",
                                  "number":  11,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "O\u0027tkir va surunkali bronxit, bronxial astma hamda pnevmoniyada bola va oilasiga hamshiralik parvarishi nazariyasi.",
                                  "shortDesc":  "O\u0027tkir va surunkali bronxit, bronxial astma hamda pnevmoniyada klinik kechishi va nafas yetishmovchiligi darajalari.",
                                  "lecturePdf":  "Teoriya/mavzu11/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. O\u0027tkir va surunkali bronxit tasnifi",
                                                     "text":  "Oddiy bronxit, obstruktiv bronxit va bronxiolitning klinik kechishi, yo\u0027tal va o\u0027pkadagi xirillashlarning o\u0027ziga xosligi."
                                                 },
                                                 {
                                                     "title":  "2. Bolalar pnevmoniyasining patogenezi",
                                                     "text":  "O\u0027pka to\u0027qimasining o\u0027tkir yallig\u0027lanishi, alveolalarning ekssudat bilan to\u0027lishi va gaz almashinuvining buzilishi."
                                                 },
                                                 {
                                                     "title":  "3. Nafas yetishmovchiligi darajalari",
                                                     "text":  "1-daraja (jismoniy zo\u0027riqishda hansirash), 2-daraja (tinch holatda hansirash va sianoz), 3-daraja (og\u0027ir dekompensatsiya)."
                                                 },
                                                 {
                                                     "title":  "4. Bronxial astmaning allergik tabiati",
                                                     "text":  "Genetik moyillik va tashqi allergenlar ta\u0027sirida bronxlar giperreaktivligi, spazmi va qalin yopishqoq balg\u0027am ajralishi."
                                                 },
                                                 {
                                                     "title":  "5. Kompleks parvarish va reabilitatsiya",
                                                     "text":  "Antibakterial, bronxolitik dorilar berish, postural drenaj, kislorod terapiyasi va dispanser kuzatuvini tashkil qilish."
                                                 }
                                             ],
                                  "videoUrl":  "Teoriya/mavzu11/vedio/Yurak urishlar soni!.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu11/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu11/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "O\u0027tkir va surunkali bronxit, bronxial astma hamda pnevmoniyada bola va oilasiga hamshiralik parvarishi nazariyasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Bronxoobstruktsiya",
                                                       "def":  "Bronxlar shilliq qavatining shishi, bronxospazm va quyuq shilliq to\u0027planishi oqibatida havo yo\u0027llarining to\u0027silishi."
                                                   },
                                                   {
                                                       "term":  "Krepitatsiya",
                                                       "def":  "Pnevmoniyada nafas olganda alveolalarning bir-biridan ajralishi paytida eshitiladigan soch tolasining ishqalanishiga o\u0027xshash tovush."
                                                   },
                                                   {
                                                       "term":  "Ekspirator hansirash",
                                                       "def":  "Nafas olish oson, ammo toraygan bronxlar orqali havoni tashqariga chiqarishning (nafas chiqarish) qiyinlashishi."
                                                   },
                                                   {
                                                       "term":  "Atelektaz",
                                                       "def":  "Bronxning to\u0027liq berkilib qolishi sababli o\u0027pka ma\u0027lum bir bo\u0027lagining havosizlanib burishib qolishi."
                                                   },
                                                   {
                                                       "term":  "Plevrit",
                                                       "def":  "O\u0027pkani o\u0027rab turuvchi plevra pardalarining yallig\u0027lanishi, nafas olganda kuchli sanchuvchi og\u0027riq paydo bo\u0027lishi."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu11/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-12",
                                  "number":  12,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Qon aylanish a\u0027zolari kasalliklari, tug\u0027ma yurak nuqsonlari, revmatizm va revmatik xoreya kasalliklarida hamshiralik parvarishi.",
                                  "shortDesc":  "Tug\u0027ma yurak nuqsonlari, revmatizm, revmokardit va o\u0027tkir yurak yetishmovchiligida hamshiralik parvarishi asoslari.",
                                  "lecturePdf":  "Teoriya/mavzu12/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Tug\u0027ma yurak nuqsonlari (TYeN)",
                                                     "text":  "Homila rivojlanishida yurak to\u0027siqlari va qon tomirlarining to\u0027liq shakllanmasligi (oq va ko\u0027k nuqsonlar, Falo tetradasi)."
                                                 },
                                                 {
                                                     "title":  "2. Qon aylanish yetishmovchiligi belgilari",
                                                     "text":  "Emizish paytida bolaning charchab qolishi, perioral sianoz, taxikardiya, jigar kattalashishi va oyoqlardagi shishlar."
                                                 },
                                                 {
                                                     "title":  "3. O\u0027tkir revmatik isitma (revmatizm)",
                                                     "text":  "A guruhi beta-gemolitik streptokokki o\u0027tkazgandan keyin yurak klapanlari va bo\u0027g\u0027imlarning autoimmun yallig\u0027lanishi."
                                                 },
                                                 {
                                                     "title":  "4. Revmokardit va kichik xoreya klinikasi",
                                                     "text":  "Yurak chegaralarining kengayishi, tonlarning bo\u0027g\u0027iqligi hamda asab tizimi zararlanishida beixtiyor tartibsiz harakatlar."
                                                 },
                                                 {
                                                     "title":  "5. Kardio-rejim va hamshiralik kuzatuvi",
                                                     "text":  "Yurak faoliyatiga yuklamani kamaytirish uchun qat\u0027iy yotoq tartibi, puls va EKG dinamikasini sinchkovlik bilan qayd etish."
                                                 }
                                             ],
                                  "videoUrl":  "Teoriya/mavzu12/vedio/video_2023-10-15_05-38-18.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu12/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu12/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Qon aylanish a\u0027zolari kasalliklari, tug\u0027ma yurak nuqsonlari, revmatizm va revmatik xoreya kasalliklarida hamshiralik parvarishi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Miokardit",
                                                       "def":  "Yurakning asosiy qisqaruvchi mushak qavatining (miokard) infeksion yoki allergik yallig\u0027lanishi."
                                                   },
                                                   {
                                                       "term":  "Endokardit",
                                                       "def":  "Yurakning ichki pardasi va qopqoqlarining yallig\u0027lanishi, keyinchalik yurak nuqsoni shakllanishiga olib kelishi mumkin."
                                                   },
                                                   {
                                                       "term":  "Kichik xoreya (Sent-Vitt raqsi)",
                                                       "def":  "Revmatizmda markaziy asab tizimi zararlanib, bolaning harakatlari koordinatsiyasi buzilishi va emotsional beqarorlik."
                                                   },
                                                   {
                                                       "term":  "Arterial gipertenziya",
                                                       "def":  "Bolalarda qon bosimining o\u0027z yoshi, jinsi va bo\u0027yiga nisbatan 95-sentildan doimiy yuqori bo\u0027lishi."
                                                   },
                                                   {
                                                       "term":  "Yurak yetishmovchiligi",
                                                       "def":  "Yurak mushagining a\u0027zo va to\u0027qimalarni yetarli qon bilan ta\u0027minlay olmasligi, hansirash va shishlar bilan kechishi."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu12/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-13",
                                  "number":  13,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Ovqat hazm qilish a\u0027zolari kasalliklari: pilorostenoz va pilorospazm, o\u0027tkir gastrit, enterokolit va diareya kasalliklarida hamshiralik parvarishi.",
                                  "shortDesc":  "Pilorostenoz va pilorospazm diagnostikasi, o\u0027tkir gastrit, enterokolit, ichak disbakteriozi va diareya patogenezi.",
                                  "lecturePdf":  "Teoriya/mavzu13/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Pilorospazm va pilorostenoz farqi",
                                                     "text":  "Pilorospazm funksional bo\u0027lib o\u0027tkinchi; pilorostenoz esa me\u0027da chiqish qismi mushaklarining tug\u0027ma gipertrofiyasi bo\u0027lib jarrohlik talab qiladi."
                                                 },
                                                 {
                                                     "title":  "2. Pilorostenozning xarakterli belgilari",
                                                     "text":  "Hayotning 2-3 haftasidan boshlab \u0027favvora shaklida\u0027 achqimtir qusish, qusiqda o\u0027t suyuqligi bo\u0027lmasligi va qumsoat simptomi."
                                                 },
                                                 {
                                                     "title":  "3. O\u0027tkir gastrit va enterokolit",
                                                     "text":  "Oshqozon va ichak shilliq qavatining yallig\u0027lanishi, intoksikatsiya, epigastral og\u0027riqlar va dispeptik buzilishlar."
                                                 },
                                                 {
                                                     "title":  "4. Ichak disbakteriozi (disbioz)",
                                                     "text":  "Ichak normal mikroflorasi (bifido- va laktobakteriyalar) ning kamayib, shartli patogen bakteriyalar ko\u0027payishi va fermentativ buzilishlar."
                                                 },
                                                 {
                                                     "title":  "5. Oziqlantirish tartibi va regidratsiya",
                                                     "text":  "Bemor bolaga fraksion (kichik porsiyalarda) yengil taomlar berish, suv-elektrolit muvozanatini tiklash va probiotiklar berish."
                                                 }
                                             ],
                                  "videoUrl":  "Teoriya/mavzu13/vedio/video_2023-10-15_05-38-18.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu13/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu13/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Ovqat hazm qilish a\u0027zolari kasalliklari: pilorostenoz va pilorospazm, o\u0027tkir gastrit, enterokolit va diareya kasalliklarida hamshiralik parvarishi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Gipovolemik degidratsiya",
                                                       "def":  "Suyuqlik va qon zardobi hajmining kamayishi oqibatida qon bosimi tushishi va turgorning yo\u0027qolishi."
                                                   },
                                                   {
                                                       "term":  "Gastrit",
                                                       "def":  "Oshqozon shilliq qavatining o\u0027tkir yoki surunkali yallig\u0027lanishi, me\u0027dada og\u0027riq va dispeptik belgilar bilan kechishi."
                                                   },
                                                   {
                                                       "term":  "Enterokolit",
                                                       "def":  "Ingichka va yo\u0027g\u0027on ichak shilliq qavatining birgalikda yallig\u0027lanishi, ich ketishi va meteorizm."
                                                   },
                                                   {
                                                       "term":  "Malabsorbsiya sindromi",
                                                       "def":  "Ingichka ichakda oziq moddalarning (uglevod, yog\u0027, vitaminlar) so\u0027rilishining surunkali buzilishi."
                                                   },
                                                   {
                                                       "term":  "Gipoxloremiya",
                                                       "def":  "Ko\u0027p qusganda xlor ionlarining oshqozon shirasi bilan tashqariga chiqib ketishi natijasida elektrolitlar muvozanati buzilishi."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu13/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-14",
                                  "number":  14,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Og\u0027iz shilliq qavati kasalliklari, stomatitlar (aftoz, zamburug\u0027li) va gelmintozlarda (askaridoz, enterobioz) hamshiralik parvarishi.",
                                  "shortDesc":  "Stomatitlarning tasnifi, og\u0027iz shilliq qavati shikastlanishlari, askaridoz va enterobiozning biologik sikllari.",
                                  "lecturePdf":  "Teoriya/mavzu14/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Bolalar stomatitlarining turlari",
                                                     "text":  "Kataral, aftoz, gerpetik va zamburug\u0027li (kandidoz) stomatitlar bo\u0027lib, har biri o\u0027ziga xos klinik manzara va davolashga ega."
                                                 },
                                                 {
                                                     "title":  "2. Shilliq qavat shikastlanishining oqibatlari",
                                                     "text":  "Og\u0027izdagi qattiq og\u0027riq tufayli bola ovqat va suv ichishdan bosh tortadi, natijada intoksikatsiya va suvsizlanish kuchayadi."
                                                 },
                                                 {
                                                     "title":  "3. Gelmintozlarning epidemiologiyasi",
                                                     "text":  "Gelmint tuxumlarining ifloslangan qo\u0027l, o\u0027yinchoq va oziq-ovqatlar orqali og\u0027izga tushishi va ichakda parazitlik qilishi."
                                                 },
                                                 {
                                                     "title":  "4. Ostritsa va askaridalarning zarari",
                                                     "text":  "Parazitlar ichak shilliq qavatini jarohatlaydi, qon so\u0027rib anemiya keltirib chiqaradi va organizmni toksinlar bilan zaharlaydi."
                                                 },
                                                 {
                                                     "title":  "5. Profilaktika va davolash asoslari",
                                                     "text":  "Antiseptik mahalliy eritmalar bilan og\u0027izni tozalash, gelmintga qarshi dori vositalarini buyurish va qat\u0027iy gigiyena nazorati."
                                                 }
                                             ],
                                  "videoUrl":  "Teoriya/mavzu14/vedio/video_2023-10-22_14-48-42.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu14/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu14/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Og\u0027iz shilliq qavati kasalliklari, stomatitlar (aftoz, zamburug\u0027li) va gelmintozlarda (askaridoz, enterobioz) hamshiralik parvarishi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Aftoz stomatit",
                                                       "def":  "Og\u0027iz shilliq qavatida dumaloq shakldagi, qizil hoshiyali, oqish qoplamali juda og\u0027riqli yaralar (aftalar) toshishi."
                                                   },
                                                   {
                                                       "term":  "Gelmintoz",
                                                       "def":  "Odam organizmida parazit chuvalchanglar (gelmintlar) yashashi natijasida kelib chiqadigan kasalliklar guruhi."
                                                   },
                                                   {
                                                       "term":  "Avtoinvaziya",
                                                       "def":  "Bolaning gigiyena qoidalariga rioya qilmasligi (qo\u0027lni yuvmaslik, tirnoq tishlash) oqibatida o\u0027zini-o\u0027zi qayta zararlashi."
                                                   },
                                                   {
                                                       "term":  "Sensibilizatsiya",
                                                       "def":  "Parazitlar ajratgan toksinlar ta\u0027sirida bolaning immuniteti o\u0027ta sezgir bo\u0027lib qolishi va allergik toshmalar toshishi."
                                                   },
                                                   {
                                                       "term":  "Eozinofiliya",
                                                       "def":  "Qon tahlilida gelmintlar va allergiyaga javoban eozinofil leykotsitlar miqdorining sezilarli oshishi."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu14/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-15",
                                  "number":  15,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Qon va qon yaratish a\u0027zolari kasalliklari, temir tanqisligi anemiyasi va uning profilaktikasi.",
                                  "shortDesc":  "Temir tanqisligi anemiyasining etiopatogenezi, qon ko\u0027rsatkichlari dinamikasi va anemiyaning profilaktika nazariyasi.",
                                  "lecturePdf":  "Teoriya/mavzu15/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Temir tanqisligi anemiyasining mohiyati",
                                                     "text":  "Organizmda temir yetishmasligi oqibatida eritrotsitlarda gemoglobin sintezining buzilishi va to\u0027qimalar gipoksiyasi yuzaga kelishi."
                                                 },
                                                 {
                                                     "title":  "2. Anemiyaning etiologik sabablari",
                                                     "text":  "Tug\u0027ruqdan oldingi zaxiraning kamligi (chala tug\u0027ilish, egizaklar), noto\u0027g\u0027ri sun\u0027iy ovqatlantirish va ichakda temir so\u0027rilishining buzilishi."
                                                 },
                                                 {
                                                     "title":  "3. Sideropenik sindrom belgilari",
                                                     "text":  "Terining quruqlashishi, soch to\u0027kilishi, tirnoqlarning qoshiqsimon botiqligi (koylonixiya) va ta\u0027m bilishning buzilishi."
                                                 },
                                                 {
                                                     "title":  "4. Qon tahlilidagi patologik siljishlar",
                                                     "text":  "Gipoxrom mikrotsitar anemiya: gemoglobinning pasayishi, rang ko\u0027rsatkichining \u003c 0.85 bo\u0027lishi va zardob temirining kamayishi."
                                                 },
                                                 {
                                                     "title":  "5. Birlamchi profilaktika va davolash",
                                                     "text":  "Chaqaloqlarni 6 oygacha faqat ona suti bilan boqish, o\u0027z vaqtida go\u0027shtli qo\u0027shimcha ovqat kiritish va temir preparatlarini berish."
                                                 }
                                             ],
                                  "pedTechPdf":  "Teoriya/mavzu15/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu15/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Qon va qon yaratish a\u0027zolari kasalliklari, temir tanqisligi anemiyasi va uning profilaktikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Eritropoez",
                                                       "def":  "Suyak iligida qizil qon tanachalari (eritrotsitlar) hosil bo\u0027lishi va yetilishining murakkab fiziologik jarayoni."
                                                   },
                                                   {
                                                       "term":  "Ferritin",
                                                       "def":  "Inson organizmida, xususan jigar va taloqda temir zaxirasini saqlovchi asosiy oqsilli birikma."
                                                   },
                                                   {
                                                       "term":  "Gipoxromiya",
                                                       "def":  "Eritrotsitlarning gemoglobinga to\u0027yinishi kamayib, mikroskop ostida ularning markazi rangpar ko\u0027rinishi."
                                                   },
                                                   {
                                                       "term":  "Anemiya darajalari",
                                                       "def":  "Gemoglobin miqdoriga ko\u0027ra yengil (110-90 g/l), o\u0027rta (90-70 g/l) va og\u0027ir (70 g/l dan kam) darajalarga bo\u0027linishi."
                                                   },
                                                   {
                                                       "term":  "Transferrin",
                                                       "def":  "Qon zardobida temir ionlarini to\u0027qimalarga va suyak iligiga tashuvchi maxsus transport oqsili."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu15/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-16",
                                  "number":  16,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Gemorragik diatez kasalliklari (trombotsitopenik purpura, gemofiliya) da bola va uning oila a\u0027zolariga hamshiralik parvarishi nazariyasi.",
                                  "shortDesc":  "Gemostaz tizimi buzilishlari, trombotsitopenik purpura va gemofiliya kasalliklarida bolaga parvarish ko\u0027rsatish.",
                                  "lecturePdf":  "Teoriya/mavzu16/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Qon ivish (gemostaz) tizimi asoslari",
                                                     "text":  "Tomir devori butunligi, trombotsitlar miqdori va plazma ivish omillarining o\u0027zaro muvofiqligi qon ketishining oldini oladi."
                                                 },
                                                 {
                                                     "title":  "2. Trombotsitopenik purpura (Verlgof kasalligi)",
                                                     "text":  "Trombotsitlar sonining keskin kamayishi oqibatida terida polimorf, nosimmetrik qontalashlar va shilliq qavatlardan qon ketishi."
                                                 },
                                                 {
                                                     "title":  "3. Gemofiliya kasalligining genetik tabiati",
                                                     "text":  "Faqat o\u0027g\u0027il bolalarda uchraydigan, X xromosoma orqali irsiylanuvchi qon ivish omillari (VIII yoki IX) yetishmovchiligi kasalligi."
                                                 },
                                                 {
                                                     "title":  "4. Gemartrozlar va bo\u0027g\u0027imlar deformatsiyasi",
                                                     "text":  "Gemofiliyada tizza va tirsak bo\u0027g\u0027imlariga qon quyilishi kuchli og\u0027riq, shish keltirib chiqaradi va nogironlikka olib kelishi mumkin."
                                                 },
                                                 {
                                                     "title":  "5. Hamshiralik parvarishi va xavfsizlik",
                                                     "text":  "Bemor bolani jarohatlardan qat\u0027iy asrash, mushak ichiga dorilar yubormaslik va gemostatik preparatlarni tayyorlab qo\u0027yish."
                                                 }
                                             ],
                                  "videoUrl":  "Teoriya/mavzu16/vedio/video_2023-06-05_20-07-52.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu16/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu16/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Gemorragik diatez kasalliklari (trombotsitopenik purpura, gemofiliya) da bola va uning oila a\u0027zolariga hamshiralik parvarishi nazariyasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Gemofiliya",
                                                       "def":  "Qon ivish tizimining VIII (A turi) yoki IX (B turi) omillari yetishmasligi sababli irsiy qon oqishi kasalligi (asosan o\u0027g\u0027il bolalarda)."
                                                   },
                                                   {
                                                       "term":  "Gemorragik purpura (Verlgof kasalligi)",
                                                       "def":  "Trombotsitlarning autoimmun parchalanishi tufayli terida assimetrik mayda qon quyilishlari paydo bo\u0027lishi."
                                                   },
                                                   {
                                                       "term":  "Gemartroz",
                                                       "def":  "Gemofiliyada yengil jarohatdan keyin ham yirik bo\u0027g\u0027imlar (tizza, tirsak) ichiga qon quyilishi va harakatsizlanishi."
                                                   },
                                                   {
                                                       "term":  "Koagulopatiya",
                                                       "def":  "Qon ivish omillarining yetishmasligi oqibatida qon ivish vaqtining uzayib ketishi holati."
                                                   },
                                                   {
                                                       "term":  "Koagulyatsiya",
                                                       "def":  "Qon tomirlari jarohatlanganda qonning suyuq holatdan quyuq fibrin laxtasiga aylanish jarayoni."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu16/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-17",
                                  "number":  17,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Ichki sekretsiya bezlari kasalliklari: 1-tur qandli diabet, gipotireoz va endemik buqoq kasalliklarida bolalarga hamshiralik parvarishi.",
                                  "shortDesc":  "Endokrin kasalliklar: 1-tur qandli diabet metabolizmi, tug\u0027ma gipotireoz, kretinizm xavfi va endemik buqoq profilaktikasi.",
                                  "lecturePdf":  "Teoriya/mavzu17/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. 1-tur qandli diabetning patogenezi",
                                                     "text":  "Oshqozon osti bezi Langergans orolchalari beta-hujayralarining autoimmun yemirilishi natijasida mutlaq insulin tanqisligi paydo bo\u0027lishi."
                                                 },
                                                 {
                                                     "title":  "2. Diabetik ketoatsidoz rivojlanish mexanizmi",
                                                     "text":  "Insulin yetishmaganda glyukoza hujayraga kirmaydi, yog\u0027lar parchalanib qonda zaharli keton tanachalari (atseton) to\u0027planadi."
                                                 },
                                                 {
                                                     "title":  "3. Tug\u0027ma gipotireoz va uning oqibatlari",
                                                     "text":  "Qalqonsimon bez gormonlarining (T3, T4) yetishmovchiligi bolaning aqliy va jismoniy rivojlanishdan keskin orqada qolishiga (kretinizm) sabab bo\u0027ladi."
                                                 },
                                                 {
                                                     "title":  "4. Chaqaloqlar neonatal skriningi",
                                                     "text":  "Tug\u0027ruqxonada barcha chaqaloqlarning tovonidan maxsus qog\u0027ozga qon olib, gipotireoz va fenilketonuriyani erta aniqlash dasturi."
                                                 },
                                                 {
                                                     "title":  "5. Endemik buqoq profilaktikasi",
                                                     "text":  "Yod tanqisligi hududlarida bolalarga yodlangan osh tuzi, kaliy yodid preparatlari va dengiz mahsulotlarini muntazam iste\u0027mol qildirish."
                                                 }
                                             ],
                                  "videoUrl":  "Amaliyat/mavzu1/vedio/Антропометрия.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu1/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu1/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Ichki sekretsiya bezlari kasalliklari: 1-tur qandli diabet, gipotireoz va endemik buqoq kasalliklarida bolalarga hamshiralik parvarishi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Gipotireoz",
                                                       "def":  "Qalqonsimon bez gormonlari (T3, T4) ning yetarli ishlab chiqarilmasligi oqibatida bolaning aqliy va jismoniy rivojlanishdan orqada qolishi."
                                                   },
                                                   {
                                                       "term":  "Endemik buqoq",
                                                       "def":  "Atrof-muhitda, tuproq va ichimlik suvida yod yetishmasligi oqibatida qalqonsimon bez to\u0027qimasining kompensator kattalashishi."
                                                   },
                                                   {
                                                       "term":  "Kretinizm",
                                                       "def":  "Bolalikda tug\u0027ma davolanmagan gipotireoz natijasida aqliy zaiflik va tananing mitti bo\u0027lib qolishi."
                                                   },
                                                   {
                                                       "term":  "Poliuriya va polidipsiya",
                                                       "def":  "Qandli diabetda ko\u0027p siydik ajralishi (poliuriya) va doimiy kuchli chanqash hissi (polidipsiya)."
                                                   },
                                                   {
                                                       "term":  "Gipofizar mittilik (nanizm)",
                                                       "def":  "Gipofiz bezida o\u0027sish gormoni (somatotrop gormon) yetishmasligi oqibatida bo\u0027y o\u0027sishining keskin to\u0027xtashi."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu17/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-18",
                                  "number":  18,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Buyrak va siydik ajratish tizimi kasalliklari: o\u0027tkir va surunkali pielonefritda bolalarga hamshiralik parvarishi nazariyasi.",
                                  "shortDesc":  "Buyrak va siydik yo\u0027llari infeksiyalari: o\u0027tkir va surunkali pielonefritning mikrob-yallig\u0027lanish patogenezi.",
                                  "lecturePdf":  "Teoriya/mavzu18/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Siydik yo\u0027llari infeksiyalarining tarqalishi",
                                                     "text":  "Ichak tayoqchasi va boshqa mikroblarning siydik yo\u0027llari bo\u0027ylab yuqoriga ko\u0027tarilishi yoki qon orqali buyraklarga borib yallig\u0027lanish chaqirishi."
                                                 },
                                                 {
                                                     "title":  "2. O\u0027tkir pielonefritning klinik kechishi",
                                                     "text":  "Isitma (38-39 В°C), intoksikatsiya, bel sohasidagi og\u0027riqlar, siyishning og\u0027riqli va tez-tez bo\u0027lishi (dizuriya)."
                                                 },
                                                 {
                                                     "title":  "3. Laboratoriya diagnostika mezonlari",
                                                     "text":  "Siydik tahlilida ko\u0027p miqdorda leykotsitlar (leykotsituriya), bakteriyalar (bakteriuriya) va kam miqdorda oqsil paydo bo\u0027lishi."
                                                 },
                                                 {
                                                     "title":  "4. Surunkali shaklga o\u0027tish sabablari",
                                                     "text":  "Buyrak anatomik anomaliyalari, vezikoureteral reflyuks (siydikning orqaga qaytishi) va davolash kursining chala qolishi."
                                                 },
                                                 {
                                                     "title":  "5. Parhez va dori terapiyasi nazorati",
                                                     "text":  "Mo\u0027l-ko\u0027l suyuqlik ichirish (mors, kompot), achchiq va sho\u0027r ovqatlarni cheklash hamda antibakterial vositalarni soatiga amal qilib berish."
                                                 }
                                             ],
                                  "videoUrl":  "Amaliyat/mavzu2/vedio/Катетеризация.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu2/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu2/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Buyrak va siydik ajratish tizimi kasalliklari: o\u0027tkir va surunkali pielonefritda bolalarga hamshiralik parvarishi nazariyasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Pielonefrit etiopatogenezi",
                                                       "def":  "Infeksiyaning (asosan ichak tayoqchasi) siydik yo\u0027llari orqali yuqoriga (urologik) yoki qon orqali buyrakka yetib borishi."
                                                   },
                                                   {
                                                       "term":  "Leykotsituriya",
                                                       "def":  "Siydikda yallig\u0027lanish belgisi sifatida ko\u0027p miqdorda oq qon tanachalari (leykotsitlar) paydo bo\u0027lishi."
                                                   },
                                                   {
                                                       "term":  "Bakteriuriya",
                                                       "def":  "1 ml yangi olingan siydikda 100 000 dan ortiq mikrob tanachalari aniqlanishi (chin bakteriuriya)."
                                                   },
                                                   {
                                                       "term":  "Vezikoureteral reflyuks",
                                                       "def":  "Siydikning qovuqdan siydik yo\u0027li orqali teskari yuqoriga - buyrak jomiga qaytib quyilishi anomal holati."
                                                   },
                                                   {
                                                       "term":  "Uroseptiklar",
                                                       "def":  "Siydik yo\u0027llari infeksiyalarini davolash uchun qo\u0027llaniladigan va asosan siydik bilan filtrlanadigan antibakterial dorilar."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu18/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-19",
                                  "number":  19,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "O\u0027tkir va surunkali glomerulonefrit, sistit kasalliklarida bolalarga hamshiralik parvarishi, parhez va siydik ajralishini nazorat qilish.",
                                  "shortDesc":  "Glomerulonefrit triadasi (shish, gipertenziya, gematuriya), nefrotik sindrom, sistit va parhez nazariyasi.",
                                  "lecturePdf":  "Teoriya/mavzu19/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. O\u0027tkir glomerulonefrit etiopatogenezi",
                                                     "text":  "Streptokokkli angina yoki piodermiyadan 2-3 hafta o\u0027tgach buyrak koptokchalarining immun komplekslar bilan shikastlanishi."
                                                 },
                                                 {
                                                     "title":  "2. Glomerulonefritning klassik triadasi",
                                                     "text":  "1) Ertalabki yuz va ko\u0027z atrofi shishlari; 2) Qon bosimining oshishi (gipertenziya); 3) Siydikda qon bo\u0027lishi (\u0027go\u0027sht yuvindisi\u0027 rangidagi siydik)."
                                                 },
                                                 {
                                                     "title":  "3. Nefrotik sindromning xususiyatlari",
                                                     "text":  "Siydik bilan juda ko\u0027p oqsil yo\u0027qotilishi (massiv proteinuriya), qonda oqsil kamayishi va butun tanada tarqalgan og\u0027ir shishlar (anasarka)."
                                                 },
                                                 {
                                                     "title":  "4. O\u0027tkir sistitning klinik ko\u0027rinishi",
                                                     "text":  "Qovuq sohasida og\u0027riq, tez-tez va oz-ozdan siyishga qistovlar hamda siyish oxirida qon tomchilari paydo bo\u0027lishi."
                                                 },
                                                 {
                                                     "title":  "5. Hamshiralik parvarishi va qat\u0027iy rejim",
                                                     "text":  "O\u0027tkir davrda qat\u0027iy yotoq tartibi, osh tuzini cheklash (в„–7a parhez) va sutkalik suyuqlik balansini qat\u0027iy hisoblash."
                                                 }
                                             ],
                                  "videoUrl":  "Amaliyat/mavzu3/vedio/Пункция.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu3/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu3/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "O\u0027tkir va surunkali glomerulonefrit, sistit kasalliklarida bolalarga hamshiralik parvarishi, parhez va siydik ajralishini nazorat qilish. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Glomerulonefrit triadası",
                                                       "def":  "Kasallikning uchta asosiy klinik belgisi: shishlar, arterial gipertoniya va gematuriya (siydikda qon)."
                                                   },
                                                   {
                                                       "term":  "Siydik sindromi",
                                                       "def":  "Siydik tahlilida oqsil (proteinuriya), qon (gematuriya) va silindrlar (silindruriya) paydo bo\u0027lishi."
                                                   },
                                                   {
                                                       "term":  "Buyrak yetishmovchiligi",
                                                       "def":  "Buyrakning qonni tozalash, suv-tuz va kislota-ishqor muvozanatini saqlash qobiliyatining o\u0027tkir yoki surunkali buzilishi."
                                                   },
                                                   {
                                                       "term":  "7-raqamli parhez (Pevzner)",
                                                       "def":  "Buyrak kasalliklarida tuzni qat\u0027iy cheklash (kuniga 1-2 g) va oqsillar miqdorini nazorat qilishga asoslangan parhez."
                                                   },
                                                   {
                                                       "term":  "Pollakiuriya",
                                                       "def":  "Qovuq shilliq qavati ta\u0027sirlanishi oqibatida oz-ozdan tez-tez (har 15-20 daqiqada) siydik ajratish holati."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu19/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-20",
                                  "number":  20,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Bolalarda yuqumli kasalliklarda hamshiralik parvarishi. Profilaktik emlashlar. Bolalarda sil (tuberkulyoz) kasalligi. Xavfsiz emlashda \u0027sovuqlik zanjiri\u0027 tizimi.",
                                  "shortDesc":  "Yuqumli jarayon nazariyasi, Milliy emlash taqvimi, sovuqlik zanjiri qoidalari va bolalarda sil kasalligi profilaktikasi.",
                                  "lecturePdf":  "Teoriya/mavzu20/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Yuqumli jarayon va immunitet tushunchasi",
                                                     "text":  "Patogen mikroorganizmlarning organizmga kirishi, ko\u0027payishi va organizmning immun javob reaksiyalari mexanizmi."
                                                 },
                                                 {
                                                     "title":  "2. Milliy emlash taqvimining ahamiyati",
                                                     "text":  "Xavfli yuqumli kasalliklarga (sil, gepatit, poliomiyelit, difteriya, qizamiq) qarshi jamoaviy immunitetni shakllantirish davlat dasturi."
                                                 },
                                                 {
                                                     "title":  "3. \u0027Sovuqlik zanjiri\u0027 texnologiyasi",
                                                     "text":  "Vaksinalarning ishlab chiqarilganidan to bolaga yuborilguncha barcha bosqichlarda +2...+8 В°C haroratda saqlanishini ta\u0027minlovchi tizim."
                                                 },
                                                 {
                                                     "title":  "4. Bolalarda sil infeksiyasi xususiyatlari",
                                                     "text":  "Kox tayoqchasi chaqiruvchi infeksiya bo\u0027lib, birlamchi sil kompleksi, limfa tugunlari zararlanishi va tuberkulyoz intoksikatsiyasi beradi."
                                                 },
                                                 {
                                                     "title":  "5. BSJ vaksinatsiyasi va Mantu sinamasi",
                                                     "text":  "Tug\u0027ruqxonada chaqaloqqa BSJ vaksinasini qilish hamda keyinchalik Mantu sinamasi orqali organizmning silga sezgirligini nazorat qilish."
                                                 }
                                             ],
                                  "videoUrl":  "Amaliyat/mavzu4/vedio/Гемотрансфузия.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu4/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu4/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Bolalarda yuqumli kasalliklarda hamshiralik parvarishi. Profilaktik emlashlar. Bolalarda sil (tuberkulyoz) kasalligi. Xavfsiz emlashda \u0027sovuqlik zanjiri\u0027 tizimi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Tuberkulyoz (sil)",
                                                       "def":  "Mycobacterium tuberculosis (Kox tayoqchasi) keltirib chiqaradigan, ko\u0027pincha o\u0027pka va limfa tugunlarini zararlaydigan surunkali infeksiya."
                                                   },
                                                   {
                                                       "term":  "Tuberkulin",
                                                       "def":  "Sil mikrobining oqsilli parchalari bo\u0027lib, Mantu sinamasi orqali organizm infeksiya bilan to\u0027qnashganini aniqlashda qo\u0027llaniladi."
                                                   },
                                                   {
                                                       "term":  "Immunoprofilaktika",
                                                       "def":  "Aholini xavfli yuqumli kasalliklardan vaksina va zardoblar yordamida sun\u0027iy himoyalash chora-tadbirlari."
                                                   },
                                                   {
                                                       "term":  "Kollektiv immunitet",
                                                       "def":  "Jamiyatda emlangan bolalar ulushi 95% dan yuqori bo\u0027lganda yuqumli kasalliklar tarqalishining to\u0027xtashi."
                                                   },
                                                   {
                                                       "term":  "Sovuq elementlari",
                                                       "def":  "Vaksinalarni ko\u0027chma termokonteynerlarda tashish paytida haroratni bir me\u0027yorda saqlab turuvchi maxsus muzlatilgan idishlar."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu20/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-21",
                                  "number":  21,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "O\u0027tkir respirator virusli infeksiyalar (O\u0027RVI, gripp, paragripp, adenovirus) va meningokokk infeksiyasida hamshiralik parvarishi.",
                                  "shortDesc":  "O\u0027RVI viruslari (gripp, paragripp, adenovirus) va chaqaloqlarda og\u0027ir meningokokksemiyaning klinik xususiyatlari.",
                                  "lecturePdf":  "Teoriya/mavzu21/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Respirator viruslarning xilma-xilligi",
                                                     "text":  "Gripp (A, B), paragripp, respirator-sinsitsial (RS) va adenovirus infeksiyalarining nafas a\u0027zolariga tanlab ta\u0027sir qilishi."
                                                 },
                                                 {
                                                     "title":  "2. Grippning og\u0027ir asoratlari",
                                                     "text":  "Toksikoz, gipertermiya, miya shishi, neyrotoksikoz va gemorragik pnevmoniya rivojlanishi xavfining yuqoriligi."
                                                 },
                                                 {
                                                     "title":  "3. Adenovirusli infeksiya triadasi",
                                                     "text":  "Yuqori harorat, nafas yo\u0027llari kataral belgilari va konyunktivit hamda limfa bezlarining kattalashishi birga kelishi."
                                                 },
                                                 {
                                                     "title":  "4. Meningokokk infeksiyasi va meningokokksemiya",
                                                     "text":  "Qonda meningokokk ko\u0027payishi natijasida tanada teridan bo\u0027rtib turuvchi yulduzsimon gemorragik toshmalar va septik shok."
                                                 },
                                                 {
                                                     "title":  "5. Profilaktika va shoshilinch xabardor qilish",
                                                     "text":  "Yuqumli kasallik aniqlanganda darhol 058/u shaklli shoshilinch xabarnoma to\u0027ldirish va dezinfeksiya choralarini ko\u0027rish."
                                                 }
                                             ],
                                  "videoUrl":  "Amaliyat/mavzu5/vedio/Десмургия.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu5/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu5/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "O\u0027tkir respirator virusli infeksiyalar (O\u0027RVI, gripp, paragripp, adenovirus) va meningokokk infeksiyasida hamshiralik parvarishi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Meningokokktsemiya",
                                                       "def":  "Qonda meningokokk bakteriyalarining ko\u0027payishi oqibatida terida yulduzsimon qon quyilishlar toshishi bilan kechuvchi o\u0027ta xavfli holat."
                                                   },
                                                   {
                                                       "term":  "Meningial belgilar",
                                                       "def":  "Miya pardalari yallig\u0027langanda yuzaga keladigan alomatlar (ensa mushaklari rigidligi, Kernig va Bryudzinskiy belgilari)."
                                                   },
                                                   {
                                                       "term":  "Paragripp",
                                                       "def":  "O\u0027RVI turi bo\u0027lib, hiqildoqni zararlab, ko\u0027pincha bolalarda soxta krup sindromiga sabab bo\u0027ladi."
                                                   },
                                                   {
                                                       "term":  "Adenovirusli infeksiya",
                                                       "def":  "Nafas yo\u0027llari, ko\u0027z konyunktivasi va limfa bezlarining bir vaqtda zararlanishi bilan kechuvchi virusli kasallik."
                                                   },
                                                   {
                                                       "term":  "Neyrotoksikoz",
                                                       "def":  "Viruslar toksini bosh miya qon aylanishini buzishi oqibatida miya shishi, hushning buzilishi va talvasa rivojlanishi."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu21/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-22",
                                  "number":  22,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Difteriya, ko\u0027kyo\u0027tal va epidemik parotit kasalliklarining epidemiologiyasi, klinik belgilari va hamshiralik parvarishi.",
                                  "shortDesc":  "Difteriya ekzotoksini, krup bosqichlari, ko\u0027kyo\u0027tal yo\u0027tali va epidemik parotitning asoratlari nazariyasi.",
                                  "lecturePdf":  "Teoriya/mavzu22/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Difteriya toksinining xavfli ta\u0027siri",
                                                     "text":  "Difteriya tayoqchasi chiqaradigan kuchli ekzotoksin miokard, buyrak usti bezlari va periferik nervlarni og\u0027ir jarohatlaydi."
                                                 },
                                                 {
                                                     "title":  "2. Difterik krupning 3 ta bosqichi",
                                                     "text":  "1) Disfonik davr (ovoz bo\u0027g\u0027ilishi); 2) Stenotik davr (shovqinli nafas va sianoz); 3) Asfiktik davr (bo\u0027g\u0027ilish va hushsizlik)."
                                                 },
                                                 {
                                                     "title":  "3. Ko\u0027kyo\u0027talning davriy kechishi",
                                                     "text":  "Kataral davr, spastik yo\u0027tal davri (tilini chiqarib, reprizlar bilan yo\u0027talish, qusish) va tuzalish (rekonvalessensiya) davri."
                                                 },
                                                 {
                                                     "title":  "4. Epidemik parotit (\u0027tepki\u0027) xususiyatlari",
                                                     "text":  "So\u0027lak bezlarining shishishi, chaynaganda quloqda og\u0027riq bo\u0027lishi va o\u0027smir o\u0027g\u0027il bolalarda orxit (bepushtlik xavfi) asoratlari."
                                                 },
                                                 {
                                                     "title":  "5. DTP va KPK bilan o\u0027z vaqtida emlash",
                                                     "text":  "Difteriya, ko\u0027kyo\u0027tal va parotitga qarshi yagona samarali himoya bu taqvim bo\u0027yicha profilaktik emlashlarni to\u0027liq olishdir."
                                                 }
                                             ],
                                  "videoUrl":  "Amaliyat/mavzu7/vedio/Иммобилизация.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu6/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu6/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Difteriya, ko\u0027kyo\u0027tal va epidemik parotit kasalliklarining epidemiologiyasi, klinik belgilari va hamshiralik parvarishi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Difteriya toksini",
                                                       "def":  "Difteriya tayoqchasi ishlab chiqaradigan, asab tizimi, yurak mushagi va buyrakni og\u0027ir zararlaydigan kuchli ekzotoksin."
                                                   },
                                                   {
                                                       "term":  "Difteriyaga qarshi zardob (PDS)",
                                                       "def":  "Kasallikning dastlabki soatlarida qondagi erkin difteriya toksinini neytrallash uchun shoshilinch yuboriladigan antitelolar."
                                                   },
                                                   {
                                                       "term":  "Apnoe",
                                                       "def":  "Ko\u0027kyo\u0027tal xurujidan keyin yoki og\u0027ir kasalliklarda nafas olishning vaqtincha (10-15 soniyadan ortiq) to\u0027xtab qolishi."
                                                   },
                                                   {
                                                       "term":  "Orxit",
                                                       "def":  "Epidemik parotit virusining o\u0027smir o\u0027g\u0027il bolalarda urug\u0027don to\u0027qimasini zararlab, bepushtlik xavfini tug\u0027diruvchi yallig\u0027lanishi."
                                                   },
                                                   {
                                                       "term":  "Repriz",
                                                       "def":  "Ko\u0027kyo\u0027talli yo\u0027tal xuruji yakunida toraygan ovoz yorig\u0027i orqali shovqinli, xushtaksimon chuqur nafas olish."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu22/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-23",
                                  "number":  23,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Qizamiq, qizilcha, skarlatina va suvchechak kasalliklarida bola hamda uning oila a\u0027zolariga hamshiralik parvarishi.",
                                  "shortDesc":  "Bolalar toshmali infeksiyalari: qizamiq, qizilcha, skarlatina va suvchechak kasalliklarining epidemiologiyasi va klinikasi.",
                                  "lecturePdf":  "Teoriya/mavzu23/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Qizamiq kasalligining yuqumliligi",
                                                     "text":  "Havo-tomchi orqali o\u0027ta tez tarqaluvchi infeksiya bo\u0027lib, Filatov-Koplik dog\u0027lari va bosqichli makulo-papulyoz toshmalar beradi."
                                                 },
                                                 {
                                                     "title":  "2. Qizilcha va uning homilaga xavfi",
                                                     "text":  "Mayda pushti toshmalar, ensa limfa tugunlarining kattalashishi; homilador ayollarda homilaning og\u0027ir tug\u0027ma nuqsonlariga sabab bo\u0027ladi."
                                                 },
                                                 {
                                                     "title":  "3. Skarlatinaning etiologiyasi va belgilari",
                                                     "text":  "Streptokokk chaqiruvchi o\u0027tkir infeksiya bo\u0027lib, \u0027malinasimon til\u0027, mayda nuqtali toshma va oqargan burun-lab uchburchagi bilan kechadi."
                                                 },
                                                 {
                                                     "title":  "4. Suvchechak toshmalarining polimorfizmi",
                                                     "text":  "Boshning sochli qismi va tanada pufakchalar paydo bo\u0027lishi, qichishishi va qoraqo\u0027tir hosil qilib tuzalishi."
                                                 },
                                                 {
                                                     "title":  "5. Karantin muddatlari va parvarish",
                                                     "text":  "Har bir kasallik bo\u0027yicha muloqotda bo\u0027lgan bolalarni belgilangan muddat davomida bog\u0027cha va maktabdan chetlashtirish hamda kuzatish."
                                                 }
                                             ],
                                  "videoUrl":  "Amaliyat/mavzu6/vedio/Жгут.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu7/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu7/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Qizamiq, qizilcha, skarlatina va suvchechak kasalliklarida bola hamda uning oila a\u0027zolariga hamshiralik parvarishi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Qizilcha (rubeolla)",
                                                       "def":  "Yengil kataral belgilar, orqa bo\u0027yin limfa bezlarining kattalashishi va butun tanaga mayda pushti toshma toshishi bilan kechuvchi kasallik."
                                                   },
                                                   {
                                                       "term":  "Tug\u0027ma qizilcha sindromi",
                                                       "def":  "Homiladorlikning dastlabki 3 oyligida ona qizilcha bilan og\u0027riganda homilada yurak nuqsoni, ko\u0027rlik va karlik rivojlanishi."
                                                   },
                                                   {
                                                       "term":  "Malinasimon til",
                                                       "def":  "Skarlatinaning 3-4 kunida til karashdan tozalanib, yorqin qizil rangga kirishi va so\u0027rg\u0027ichlarining bo\u0027rtib chiqishi."
                                                   },
                                                   {
                                                       "term":  "Polimorfizm",
                                                       "def":  "Suvchechakda terida bir vaqtning o\u0027zida turli bosqichdagi toshmalar (dog\u0027, tuguncha, pufakcha, qoraqo\u0027tir) bo\u0027lishi."
                                                   },
                                                   {
                                                       "term":  "Pityriasis (kepaklanish)",
                                                       "def":  "Qizamiq va skarlatinada toshmalar qaytgandan so\u0027ng terining plastinkasimon yoki kepaksimon qipiqlanishi."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu23/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-24",
                                  "number":  24,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "O\u0027tkir yuqumli ichak kasalliklari (dizenteriya, salmonellyoz, rotavirus) epidemiologiyasi, klinik kechishi va parvarishlash.",
                                  "shortDesc":  "O\u0027tkir yuqumli ichak kasalliklari: dizenteriya, salmonellyoz va rotavirusda suvsizlanish darajalari patogenezi.",
                                  "lecturePdf":  "Teoriya/mavzu24/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. O\u0027tkir ichak infeksiyalari etiopatogenezi",
                                                     "text":  "Shigella, salmonella, ichak tayoqchalari va rotaviruslar ichak shilliq qavatini shikastlab, intoksikatsiya va diareya chaqiradi."
                                                 },
                                                 {
                                                     "title":  "2. Dizenteriyadagi kolit sindromi",
                                                     "text":  "To\u0027g\u0027ri va sigmasimon ichakning yallig\u0027lanishi, tenezmlar (soxta qistovlar) va najasda qon, shilliq paydo bo\u0027lishi."
                                                 },
                                                 {
                                                     "title":  "3. Salmonellyozning klinik shakllari",
                                                     "text":  "Gastroenterit shakli eng ko\u0027p uchraydi, harorat yuqori bo\u0027ladi, najas yashil \u0027botqoq balchig\u0027i\u0027 rangida ko\u0027p marta keladi."
                                                 },
                                                 {
                                                     "title":  "4. Suvsizlanish (degidratatsiya) darajalari",
                                                     "text":  "1-daraja (tana vaznining 5% gacha yo\u0027qotilishi), 2-daraja (6-9%), 3-daraja (10% dan ortiq yo\u0027qotilishi va gipovolemik shok)."
                                                 },
                                                 {
                                                     "title":  "5. Oral va parenteral regidratsiya asoslari",
                                                     "text":  "Yengil va o\u0027rta darajali suvsizlanishda og\u0027iz orqali glyukoza-tuzli eritmalar, og\u0027ir hollarda venaga tomchilab suyuqlik quyish."
                                                 }
                                             ],
                                  "videoUrl":  "Amaliyat/mavzu5/vedio/Десмургия.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu8/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu8/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "O\u0027tkir yuqumli ichak kasalliklari (dizenteriya, salmonellyoz, rotavirus) epidemiologiyasi, klinik kechishi va parvarishlash. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Rotavirusli gastroenterit",
                                                       "def":  "Go\u0027daklarda ko\u0027p uchraydigan, tana harorati ko\u0027tarilishi, qusish va o\u0027tkir suvli diareya bilan kechuvchi virusli infeksiya."
                                                   },
                                                   {
                                                       "term":  "Oral regidratsion tuzlar (ORT)",
                                                       "def":  "Natriy xlorid, kaliy xlorid, natriy sitrat va glyukozadan iborat suvsizlanishga qarshi maxsus kukun majmuasi."
                                                   },
                                                   {
                                                       "term":  "Sekretor diareya",
                                                       "def":  "Bakterial toksinlar ichak devorida suv va tuzlar ajralishini kuchaytirishi natijasida hosil bo\u0027ladigan ko\u0027p miqdordagi suvli najas."
                                                   },
                                                   {
                                                       "term":  "Invazion diareya",
                                                       "def":  "Bakteriyalarning ichak shilliq qavati hujayralari ichiga kirib, yiringli-qonli yallig\u0027lanish chaqirishi."
                                                   },
                                                   {
                                                       "term":  "Gipovolemik shok",
                                                       "def":  "Qusish va ich ketishi oqibatida suyuqlikning haddan tashqari ko\u0027p yo\u0027qotilishi tufayli tomirlarda qon bosimining halokatli pasayishi."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu24/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-25",
                                  "number":  25,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Bolalar virusli gepatitlari (A, B, C) va OIV-infeksiyasida hamshiralik parvarishi hamda kasalxona ichi infeksiyasi profilaktikasi.",
                                  "shortDesc":  "Virusli gepatitlar (A, B, C), OIV-infeksiyasining yuqish mexanizmlari va kasalxona ichi infeksiyalari profilaktikasi.",
                                  "lecturePdf":  "Teoriya/mavzu25/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Gepatit viruslarining turlari",
                                                     "text":  "Gepatit A (enteral, fekal-oral yo\u0027l), Gepatit B, C, D (parenteral, gemokontakt yo\u0027llar) va ularning jigarni zararlashi."
                                                 },
                                                 {
                                                     "title":  "2. Gepatitning bosqichma-bosqich kechishi",
                                                     "text":  "Sariqlikoldi (dispeptik, astenovegetativ) davr, sariqlik davri va rekonvalessensiya (tuzalish) davri."
                                                 },
                                                 {
                                                     "title":  "3. OIV-infeksiyasining klinik bosqichlari",
                                                     "text":  "Immun tizimi CD4 limfotsitlarining kamayishi, ikkilamchi opportunistik infeksiyalar va OITS (SPID) terminal bosqichi rivojlanishi."
                                                 },
                                                 {
                                                     "title":  "4. Kasalxona ichi infeksiyalari (KII/VBI)",
                                                     "text":  "Davolash muassasalarida nosteril asboblar, qon quyish va xodimlar qo\u0027llari orqali kasalliklar yuqishining oldini olish choralari."
                                                 },
                                                 {
                                                     "title":  "5. Dezinfeksiya va sterilizatsiya nazorati",
                                                     "text":  "Tibbiy asboblarni kimyoviy dezinfeksiyalash, PSO o\u0027tkazish, avtoklavda sterilizatsiyalash va azotepiram sinamasi bilan tekshirish."
                                                 }
                                             ],
                                  "videoUrl":  "Amaliyat/mavzu1/vedio/Антропометрия.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu9/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu9/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Bolalar virusli gepatitlari (A, B, C) va OIV-infeksiyasida hamshiralik parvarishi hamda kasalxona ichi infeksiyasi profilaktikasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Parenteral yuqish",
                                                       "def":  "Infeksiyaning terini teshuvchi muolajalar (ukol, qon quyish, jarrohlik) orqali to\u0027g\u0027ridan-to\u0027g\u0027ri qonga o\u0027tishi."
                                                   },
                                                   {
                                                       "term":  "Kasalxona ichi infeksiyasi",
                                                       "def":  "Bemorning shifoxonaga yotgandan kamida 48 soat o\u0027tgach muolajalar jarayonida yuqtirib olgan infeksiyasi."
                                                   },
                                                   {
                                                       "term":  "Avtoklavlash",
                                                       "def":  "Tibbiy asboblarni yuqori bosimli qizdirilgan bug\u0027 (120-132°C) yordamida to\u0027liq sterillash usuli."
                                                   },
                                                   {
                                                       "term":  "Sariqlik davri",
                                                       "def":  "Qonda bilirubin miqdori oshishi tufayli ko\u0027z oqi (sklera), teri va shilliq qavatlarning sarg\u0027ayishi hamda peshobning to\u0027q choy rangiga kirishi."
                                                   },
                                                   {
                                                       "term":  "Sterilizatsiya",
                                                       "def":  "Tibbiy asboblar va buyumlar yuzasidagi barcha tirik mikroorganizmlar hamda ularning sporalari to\u0027liq yo\u0027q qilinishi."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu25/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-26",
                                  "number":  26,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Kechiktirib bo\u0027lmaydigan og\u0027ir holatlarda hamshiralik parvarishi. Travmatik, gipovolemik, anafilaktik shok va komatoz holatlarda shifokorgacha tezkor yordam.",
                                  "shortDesc":  "Kechiktirib bo\u0027lmaydigan og\u0027ir holatlar patogenezi: gipovolemik, anafilaktik shok va komalarda shoshilinch yordam asoslari.",
                                  "lecturePdf":  "Teoriya/mavzu26/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Shok holatining patofiziologiyasi",
                                                     "text":  "To\u0027qimalarning yetarli qon bilan ta\u0027minlanmasligi (gipoperfuziya), kislorod tanqisligi va hujayralarda metabolik atsidoz rivojlanishi."
                                                 },
                                                 {
                                                     "title":  "2. Gipovolemik shok rivojlanishi",
                                                     "text":  "Ko\u0027p qon yo\u0027qotish, og\u0027ir kuyishlar yoki kuchli diareya va qusish natijasida aylanib yuruvchi qon hajmining keskin kamayishi."
                                                 },
                                                 {
                                                     "title":  "3. Anafilaktik shokning xavfliligi",
                                                     "text":  "Allergenga javoban gistaminning massiv ajralishi, tomirlarning keskin kengayishi va arterial qon bosimining nolga tushishi."
                                                 },
                                                 {
                                                     "title":  "4. Travmatik shokning erektil va torpid fazalari",
                                                     "text":  "Dastlabki qo\u0027zg\u0027alish va og\u0027riq fazasi, keyinchalik esa chuqur tormozlanish, apatiya va qon bosimi tushishi fazasi."
                                                 },
                                                 {
                                                     "title":  "5. Kechiktirib bo\u0027lmaydigan terapiya asoslari",
                                                     "text":  "O\u0027tkir nafas yo\u0027lini ta\u0027minlash, vena orqali kristalloid/kolloid infuziyalarni zudlik bilan boshlash va vazopressorni qo\u0027llash."
                                                 }
                                             ],
                                  "videoUrl":  "Amaliyat/mavzu12/vedio/Предоперационная.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu10/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu10/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Kechiktirib bo\u0027lmaydigan og\u0027ir holatlarda hamshiralik parvarishi. Travmatik, gipovolemik, anafilaktik shok va komatoz holatlarda shifokorgacha tezkor yordam. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Anafilaktik shok",
                                                       "def":  "Allergen organizmga tushganda yuzaga keladigan o\u0027ta xavfli, qon bosimining keskin tushishi va nafas qisishi bilan kechuvchi allergiya turi."
                                                   },
                                                   {
                                                       "term":  "Gipovolemik shok",
                                                       "def":  "Qon yo\u0027qotish yoki kuchli degidratsiya natijasida aylanib yuruvchi qon hajmining kritik darajada kamayishi."
                                                   },
                                                   {
                                                       "term":  "Kardiotrop dorilar",
                                                       "def":  "Yurak qisqarish kuchini va qon bosimini oshirish uchun shok holatlarida yuboriladigan vositalar (dofamin, adrenalin)."
                                                   },
                                                   {
                                                       "term":  "Miya shishi",
                                                       "def":  "Bosh miya to\u0027qimasida suyuqlik miqdorining normadan ortib ketishi oqibatida kalla ichi bosimining keskin ko\u0027tarilishi."
                                                   },
                                                   {
                                                       "term":  "Terminal holat",
                                                       "def":  "Organizmning hayot bilan o\u0027lim oralig\u0027idagi o\u0027ta og\u0027ir chegara davri (predagoniya, agoniya, klinik o\u0027lim)."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu26/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-27",
                                  "number":  27,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "O\u0027tkir nafas va yurak qon-tomir yetishmovchiligida bolaga shoshilinch reanimatsion yordam ko\u0027rsatish nazariyasi.",
                                  "shortDesc":  "O\u0027tkir nafas va yurak yetishmovchiligida zamonaviy yurak-o\u0027pka reanimatsiyasining xalqaro algoritmlari (CAB).",
                                  "lecturePdf":  "Teoriya/mavzu27/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. O\u0027tkir nafas yetishmovchiligi (O\u0027NYe)",
                                                     "text":  "Organizmda gazlar almashinuvining buzilishi: gipoksemiya (pO2 kamayishi) va giperkapniya (pCO2 ko\u0027payishi) holati."
                                                 },
                                                 {
                                                     "title":  "2. Asfiksiya va yot jism tiqilishida Geymlix usuli",
                                                     "text":  "Nafas yo\u0027liga yot jism tushganda bolaning orqasiga kuraklar orasiga urish yoki qorin sohasidan yuqoriga siltab bosish."
                                                 },
                                                 {
                                                     "title":  "3. O\u0027tkir yurak yetishmovchiligi mexanizmi",
                                                     "text":  "Yurak qisqarish kuchining keskin susayishi, o\u0027pka qon aylanish doirasida qon dimlanishi va o\u0027pka shishi xavfi."
                                                 },
                                                 {
                                                     "title":  "4. Yurak-o\u0027pka reanimatsiyasining xalqaro algoritmi",
                                                     "text":  "CAB tamoyili: C (Circulation - yurak massaji), A (Airway - nafas yo\u0027llari o\u0027tkazuvchanligi), B (Breathing - sun\u0027iy nafas)."
                                                 },
                                                 {
                                                     "title":  "5. Reanimatsiyada dori vositalarini qo\u0027llash",
                                                     "text":  "Yurak to\u0027xtaganda adrenalin (epinefrin) 0.01 mg/kg dozasida har 3-5 daqiqada tomir ichiga yoki suyak ichiga yuboriladi."
                                                 }
                                             ],
                                  "videoUrl":  "Amaliyat/mavzu1/vedio/Антропометрия.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu11/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu11/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "O\u0027tkir nafas va yurak qon-tomir yetishmovchiligida bolaga shoshilinch reanimatsion yordam ko\u0027rsatish nazariyasi. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "O\u0027tkir nafas yetishmovchiligi (O\u0027NYe)",
                                                       "def":  "O\u0027pkaning qonni yetarli kislorod bilan ta\u0027minlay olmasligi va karbonat angidridni chiqara olmasligi holati."
                                                   },
                                                   {
                                                       "term":  "O\u0027tkir qon-tomir kollapsi",
                                                       "def":  "Qon tomirlari tonusining to\u0027satdan pasayishi natijasida arterial bosimning keskin tushishi va miya gipoksiyasi."
                                                   },
                                                   {
                                                       "term":  "Kislorodoterapiya",
                                                       "def":  "Gipoksiyani bartaraf etish uchun burun kateterlari yoki niqob orqali namlangan kislorod yuborish."
                                                   },
                                                   {
                                                       "term":  "Traxeotomiya",
                                                       "def":  "Yuqori nafas yo\u0027llari o\u0027tkazuvchanligi to\u0027liq yopilganda hiqildoq ostidan traxeyaga havo kirishi uchun maxsus naycha qo\u0027yish jarrohlik amaliyoti."
                                                   },
                                                   {
                                                       "term":  "Defibrillyatsiya",
                                                       "def":  "Yurak qorinchalari xilpillashida (fibrillyatsiya) yurak faoliyatini tiklash uchun yuqori kuchlanishli elektr toki yuborish usuli."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu27/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-28",
                                  "number":  28,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Gipertermiya va talvasa (sudorgi) sindromida bolaga hamda oilasiga hamshiralik parvarishi, tana haroratini me\u0027yorlashtirish yo\u0027llari.",
                                  "shortDesc":  "Gipertermiya va febril talvasa sindromi, markaziy asab tizimi zararlanishi va antipiretik dorilar farmakoterapiyasi.",
                                  "lecturePdf":  "Teoriya/mavzu28/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Gipertermiyaning patogenezi",
                                                     "text":  "Pirogen moddalar ta\u0027sirida gipotalamusdagi termoregulyatsiya markazi qo\u0027zg\u0027alib, issiqlik ishlab chiqarishning issiqlik berishdan ustun bo\u0027lishi."
                                                 },
                                                 {
                                                     "title":  "2. Febril talvasa (sudorgi) mexanizmi",
                                                     "text":  "Bolalar bosh miyasi qo\u0027zg\u0027aluvchanligi yuqori bo\u0027lgani sababli tana harorati 38.5-39 В°C dan oshganda talvasa tutqanoqlari yuzaga keladi."
                                                 },
                                                 {
                                                     "title":  "3. Miyaning gipoksik zararlanish xavfi",
                                                     "text":  "Uzoq davom etgan talvasa miya hujayralarining kislorodga bo\u0027lgan ehtiyojini oshiradi va miya shishiga olib kelishi mumkin."
                                                 },
                                                 {
                                                     "title":  "4. Antipiretik vositalar farmakoterapiyasi",
                                                     "text":  "Bolalarda haroratni tushirish uchun faqat paratsetamol va ibuprofen qo\u0027llaniladi; aspirin va analgin qat\u0027iyan man etiladi."
                                                 },
                                                 {
                                                     "title":  "5. Kompleks sovutish va parvarish choralari",
                                                     "text":  "Dori vositalari bilan birga bolani yechintirish, iliq suvda artish va yetarli miqdorda iliq suyuqliklar ichirish shart."
                                                 }
                                             ],
                                  "videoUrl":  "Amaliyat/mavzu1/vedio/Антропометрия.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu12/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu12/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Gipertermiya va talvasa (sudorgi) sindromida bolaga hamda oilasiga hamshiralik parvarishi, tana haroratini me\u0027yorlashtirish yo\u0027llari. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Termoregulyatsiya markazi",
                                                       "def":  "Bosh miya gipotalamusida joylashgan, tana haroratining ishlab chiqarilishi va chiqarilishini boshqaruvchi markaz."
                                                   },
                                                   {
                                                       "term":  "Pirogenlar",
                                                       "def":  "Tana haroratini ko\u0027taruvchi moddalar (bakteriya endotoksinlari va immun hujayralar ajratadigan sitokinlar)."
                                                   },
                                                   {
                                                       "term":  "Miya krampusi (talvasasi)",
                                                       "def":  "Bosh miya neyronlarining ortiqcha elektr razryadlari hosil qilishi natijasida butun tana mushaklarining tortishishi."
                                                   },
                                                   {
                                                       "term":  "Klonik talvasa",
                                                       "def":  "Mushaklarning tez-tez qisqarishi va bo\u0027shashishi almashinib turishi bilan kechuvchi tortishishlar."
                                                   },
                                                   {
                                                       "term":  "Tonik talvasa",
                                                       "def":  "Mushaklarning uzoq muddat (bir necha soniya yoki daqiqa) qattiq taranglashib, qotib qolishi."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu28/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-29",
                                  "number":  29,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Tashqi muhit omillari ta\u0027sirida kelib chiquvchi holatlar: quyosh va issiq urishi, elektr jarohati, suvga cho\u0027kish, zaharli hasharotlar (ari, chayon, qoraqurt) va ilon chaqqanda birinchi tibbiy yordam.",
                                  "shortDesc":  "Tashqi muhit omillari: issiq urishi, elektr jarohati, suvga cho\u0027kish va zaharli hasharot/ilon chaqqanda tez tibbiy yordam.",
                                  "lecturePdf":  "Teoriya/mavzu29/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Quyosh va issiq urishi patologiyasi",
                                                     "text":  "Yuqori havo harorati va to\u0027g\u0027ridan-to\u0027g\u0027ri quyosh nuri ta\u0027sirida organizmning qizib ketishi, suvsizlanishi va termoregulyatsiya falaji."
                                                 },
                                                 {
                                                     "title":  "2. Elektr jarohatining o\u0027ziga xosligi",
                                                     "text":  "Elektr toki tana orqali o\u0027tganda chuqur termik kuyishlar chaqiradi va yurak ritmining to\u0027xtashiga (fibrillyatsiya) sabab bo\u0027ladi."
                                                 },
                                                 {
                                                     "title":  "3. Suvga cho\u0027kishdagi patologik turlar",
                                                     "text":  "Chin (ho\u0027l) cho\u0027kishda o\u0027pkaga suv kiradi; asfiktik (quruq) cho\u0027kishda esa laringospazm natijasida nafas yo\u0027li yopilib qoladi."
                                                 },
                                                 {
                                                     "title":  "4. Zaharli hasharot va ilon chaqishi",
                                                     "text":  "Chayon, qoraqurt va ilon zaharlari neyrotoksik va gemolitik ta\u0027sir ko\u0027rsatib, kuchli og\u0027riq, falajlik va shok chaqiradi."
                                                 },
                                                 {
                                                     "title":  "5. Kechiktirib bo\u0027lmaydigan yordam qoidalari",
                                                     "text":  "Jarohatlangan a\u0027zoni harakatsizlantirish, sovuq qo\u0027yish, zardoblarni yuborish va zudlik bilan ixtisoslashgan shifoxonaga yetkazish."
                                                 }
                                             ],
                                  "videoUrl":  "Amaliyat/mavzu15/vedio/СЛР.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu13/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu13/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Tashqi muhit omillari ta\u0027sirida kelib chiquvchi holatlar: quyosh va issiq urishi, elektr jarohati, suvga cho\u0027kish, zaharli hasharotlar (ari, chayon, qoraqurt) va ilon chaqqanda birinchi tibbiy yordam. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Quyosh urishi",
                                                       "def":  "Boshga quyosh nurlarining to\u0027g\u0027ridan-to\u0027g\u0027ri uzoq ta\u0027sir etishi natijasida miya qon tomirlarining kengayishi va miya shishi rivojlanishi."
                                                   },
                                                   {
                                                       "term":  "Asfiksiya bilan cho\u0027kish",
                                                       "def":  "Nafas yo\u0027llariga suv kirishi natijasida ovoz yorig\u0027ining spazmi tufayli havoning o\u0027pkaga o\u0027tmay qolishi."
                                                   },
                                                   {
                                                       "term":  "Elektr tamg\u0027asi",
                                                       "def":  "Elektr toki kirgan va chiqqan joyda terining kuyishi natijasida hosil bo\u0027ladigan kulrang-sariq qattiq qobiqli iz."
                                                   },
                                                   {
                                                       "term":  "Chayon va qoraqurt zahari",
                                                       "def":  "Asab tizimini falajlovchi va kuchli og\u0027riq chaqiruvchi neyrotoksik zaharli birikmalar."
                                                   },
                                                   {
                                                       "term":  "Zaharga qarshi zardob",
                                                       "def":  "Qoraqurt yoki ilon chaqqanda zaharni qonda tezkor bog\u0027lab zararsizlantirish uchun yuboriladigan maxsus monovalent zardob."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu29/Glasssariy/glossariy.html"
                              },
                              {
                                  "id":  "nazariy-30",
                                  "number":  30,
                                  "category":  "nazariy",
                                  "categoryName":  "Nazariy mashg\u0027ulot",
                                  "title":  "Anafilaktik shok va Kvinke shishida bolaga kechiktirib bo\u0027lmaydigan shoshilinch tibbiy yordam ko\u0027rsatish standartlari.",
                                  "shortDesc":  "Anafilaktik shok va Kvinke shishining allergik mexanizmlari, hiqildoq stenozi xavfi va adrenalin qo\u0027llash standarti.",
                                  "lecturePdf":  "Teoriya/mavzu30/maruza/maruza.html",
                                  "slides":  [
                                                 {
                                                     "title":  "1. Kvinke shishi (angionevrotik shish)",
                                                     "text":  "Allergen ta\u0027sirida yuz, lablar, ko\u0027z qovoqlari va eng xavflisi hiqildoq shilliq qavatining to\u0027satdan shishib ketishi."
                                                 },
                                                 {
                                                     "title":  "2. Hiqildoq stenozi va asfiksiya xavfi",
                                                     "text":  "Hiqildoq shishganda ovoz bo\u0027g\u0027iladi, nafas olish keskin qiyinlashadi va daqiqalar ichida bo\u0027g\u0027ilish yuz berishi mumkin."
                                                 },
                                                 {
                                                     "title":  "3. Anafilaktik shokning chaqmoqsimon shakli",
                                                     "text":  "Allergen kiritilgach bir necha soniyada hush yo\u0027qolishi, pulsning yo\u0027qolishi va qon bosimining keskin tushib ketishi."
                                                 },
                                                 {
                                                     "title":  "4. Birinchi navbatdagi dori: adrenalin (epinefrin)",
                                                     "text":  "Anafilaksiyada birinchi daqiqalardanoq sonning oldingi-yon sohasiga mushak ichiga 0.1% li adrenalin eritmasi yuboriladi."
                                                 },
                                                 {
                                                     "title":  "5. Shoshilinch reanimatsion yordam kompleksi",
                                                     "text":  "Prednizolon, deksametazon, antigistaminlar yuborish, toza kislorod berish va zarurat bo\u0027lganda intubatsiya yoki konikotomiya o\u0027tkazish."
                                                 }
                                             ],
                                  "videoUrl":  "Amaliyat/mavzu16/vedio/Констатация.mp4",
                                  "pedTechPdf":  "Teoriya/mavzu14/pedtex/Fanning talim texnologiyalari.pdf",
                                  "visualPdf":  "Teoriya/mavzu14/vizual/Vizual-didaktik resurslar.pdf",
                                  "quiz":  [
                                               {
                                                   "question":  "Anafilaktik shok va Kvinke shishida bolaga kechiktirib bo\u0027lmaydigan shoshilinch tibbiy yordam ko\u0027rsatish standartlari. mavzusida hamshiralik parvarishining eng asosiy maqsadi nima?",
                                                   "options":  [
                                                                   "Bemor bolaning umumiy holatini yaxshilash, asoratlarning oldini olish va parvarish talablariga rioya qilish",
                                                                   "Faqat laboratoriya tahlillarini yig\u0027ish bilan cheklanish",
                                                                   "Bolani oila a\u0027zolaridan ajratib qo\u0027yish",
                                                                   "Dori vositalarini shifokor ko\u0027rsatmasisiz qo\u0027llash"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Pediatriya amaliyotida hamshiralik parvarishining bosh maqsadi bolaning holatini yaxshilash va kasallik asoratlarining oldini olishdir."
                                               },
                                               {
                                                   "question":  "Mazkur mavzu doirasida xavfli klinik belgi (zudlik bilan shifokorga xabar beriladigan holat) qaysi?",
                                                   "options":  [
                                                                   "Tana haroratining keskin ko\u0027tarilishi, talvasa (sudorgi), nafas qisishi va hushning buzilishi",
                                                                   "Bolaning xotirjam uxlashi va qorin to\u0027yishi",
                                                                   "Teri rangining tabiiy pushti bo\u0027lishi",
                                                                   "Nafas va pulsning yosh me\u0027yorida bo\u0027lishi"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Gipertermiya, talvasa, hushning yo\u0027qolishi va nafas yetishmovchiligi zudlik bilan reanimatsion va shifokorlik yordamini talab qiladi."
                                               },
                                               {
                                                   "question":  "Bemor bolani parvarishlashda dori vositalarini yuborish bo\u0027yicha qat\u0027iy qoida qaysi?",
                                                   "options":  [
                                                                   "Dori dozasini bolaning tana vazniga qarab hisoblash va shifokor varaqasiga qat\u0027iy rioya qilish",
                                                                   "Kattalar dozasining yarmini barcha bolalarga bir xil berish",
                                                                   "Dorilarni faqat ota-ona xohishiga qarab o\u0027zgartirish",
                                                                   "In\u0027eksiya vaqtiga e\u0027tibor bermaslik"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Bolalarga dori vositalari faqat ularning tana vazni va yoshiga qat\u0027iy mutanosib hisoblangan holda shifokor ko\u0027rsatmasi bilan kiritiladi."
                                               },
                                               {
                                                   "question":  "Ushbu holatda bemor bola xonasida qanday sanitariya-gigiyenik sharoit yaratilishi kerak?",
                                                   "options":  [
                                                                   "Xonani muntazam shamollatish, namli tozalash, qulay harorat (20-22 gradus) va xotirjamlikni ta\u0027minlash",
                                                                   "Xona derazalarini ochmaslik va havoni dim saqlash",
                                                                   "Xona haroratini 35 gradusgacha qizdirish",
                                                                   "Bolaga ortiqcha jismoniy zo\u0027riqish berish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Toza, namlangan havo (20-22В°C) va xotirjam muhit bemor bolaning nafas olishi va sog\u0027ayishi uchun birlamchi omildir."
                                               },
                                               {
                                                   "question":  "Hamshiraning ota-onalar bilan ishlashdagi asosiy vazifasi nimadan iborat?",
                                                   "options":  [
                                                                   "Uyda parvarishlash, to\u0027g\u0027ri ovqatlantirish va gigiyena qoidalarini sabr bilan tushuntirish",
                                                                   "Faqat kasallik varaqasini to\u0027ldirib ketish",
                                                                   "Ota-onaga tibbiy ma\u0027lumot bermaslik",
                                                                   "Parvarish mas\u0027uliyatini butunlay chetga surish"
                                                               ],
                                                   "correct":  0,
                                                   "explanation":  "Hamshira ota-onani bolaning eng yaqin parvarishlovchisi sifatida o\u0027qitishi, parhez va dori ichirish tartibini to\u0027g\u0027ri o\u0027rgatishi lozim."
                                               }
                                           ],
                                  "glossary":  [
                                                   {
                                                       "term":  "Kvinke shishi (angionevrotik shish)",
                                                       "def":  "Teri osti yog\u0027 qatlami va shilliq qavatlarning (ayniqsa lablar, ko\u0027z qovoqlari, hiqildoq) to\u0027satdan massiv shishishi."
                                                   },
                                                   {
                                                       "term":  "Adrenalin (epinefrin)",
                                                       "def":  "Anafilaktik shokda qon bosimini tezda ko\u0027tarish, bronxospazmni bartaraf etish uchun sonning old-yon qismiga zudlik bilan yuboriladigan birinchi tanlov dorisi."
                                                   },
                                                   {
                                                       "term":  "Gormonoterapiya",
                                                       "def":  "Kuchli allergik yallig\u0027lanish va shishni to\u0027xtatish uchun yuboriladigan glyukokortikoid gormonlar (prednizolon, deksametazon)."
                                                   },
                                                   {
                                                       "term":  "Gistamin",
                                                       "def":  "Semiz hujayralardan ajralib, qon tomirlarni kengaytiruvchi, o\u0027tkazuvchanligini oshiruvchi va bronxlarni qisuvchi asosiy allergiya moddasi."
                                                   },
                                                   {
                                                       "term":  "Tredelenburg holati",
                                                       "def":  "Anafilaktik shokda miya qon aylanishini yaxshilash uchun bemorning oyoq tomonini 30 gradusga ko\u0027tarib yotqizish."
                                                   }
                                               ],
                                  "glossaryPdf":  "Teoriya/mavzu30/Glasssariy/glossariy.html"
                              }
                          ]
};
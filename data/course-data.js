/**
 * =====================================================================
 * O'QUV KURSI VA DARSLIKLAR BAZASI (KONFIGURATSIYA FAYLI)
 * =====================================================================
 * Barcha 33 ta amaliy va 30 ta nazariy mavzular uchun mavzuga 100% mos
 * video darsliklar, slaydlar va test savollari to'liq ulandi!
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
            "videoUrl": "https://www.youtube.com/watch?v=HRctNW9Nj2E",
            "pedTechPdf": "Amaliyat/mavzu1/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu1/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Antropometriya",
                    "def": "Inson tanasi o'lchamlari va jismoniy rivojlanish ko'rsatkichlarini (bo'y, vazn, aylanalar) maxsus asboblar yordamida o'lchash usuli."
                },
                {
                    "term": "Sentil jadvallari",
                    "def": "Bolaning yoshi va jinsiga qarab vazn hamda bo'y ko'rsatkichlarini xalqaro me'yoriy chegaralar bo'yicha baholash uchun maxsus statistik jadvallar."
                },
                {
                    "term": "Monitoring",
                    "def": "Bolaning o'sish va rivojlanish dinamikasini vaqt davomida muntazam va uzluksiz kuzatib borish tizimi."
                },
                {
                    "term": "Gipotrofiya",
                    "def": "Bolaning tana vazni o'z yoshiga nisbatan sezilarli darajada kam bo'lishi bilan kechuvchi surunkali oziqlanish buzilishi."
                },
                {
                    "term": "Fizik rivojlanish",
                    "def": "Bolaning suyak, mushak va a'zolarining yoshga mos ravishda mutanosib o'sishi va yetilishi jarayoni."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu1/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=CGzYQ8Y05PA",
            "pedTechPdf": "Amaliyat/mavzu2/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu2/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Taxipnoe",
                    "def": "Bolalarda nafas olish sonining yosh me'yoridan ortiq tezlashishi (nafas qisishi)."
                },
                {
                    "term": "Bradipnoe",
                    "def": "Nafas harakatlari sonining yoshga xos me'yordan kamayishi, nafas markazi tormozlanishi belgisi."
                },
                {
                    "term": "Taxikardiya",
                    "def": "Yurak qisqarishlari sonining (puls) yoshga xos me'yordan ortiq tezlashishi."
                },
                {
                    "term": "Bradikardiya",
                    "def": "Yurak qisqarishlar sonining belgilangan me'yordan kamayishi."
                },
                {
                    "term": "Auskultatsiya",
                    "def": "Ichki a'zolarda (o'pka, yurak) hosil bo'ladigan tovushlarni stetoskop yoki fonendoskop yordamida eshitib tekshirish usuli."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu2/Glasssariy/glossariy.html"
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
            ],
            "glossary": [
                {
                    "term": "Tonometriya",
                    "def": "Arterial qon bosimini sfigmomanometr (tonometr) va fonendoskop yordamida o'lchash usuli."
                },
                {
                    "term": "Sistolik bosim",
                    "def": "Yurak qorinchalari qisqarganda (sistola paytida) tomirlardagi maksimal qon bosimi ko'rsatkichi."
                },
                {
                    "term": "Diastolik bosim",
                    "def": "Yurak mushaklari bo'shashgan (diastola paytidagi) minimal qon bosimi ko'rsatkichi."
                },
                {
                    "term": "Diurez",
                    "def": "Ma'lum vaqt oralig'ida (odatda 24 soat davomida) organizmdan ajralgan siydikning umumiy miqdori."
                },
                {
                    "term": "Peristaltika",
                    "def": "Qizilo'ngach, oshqozon va ichak devorlarining to'lqinsimon qisqarib, ovqat luqmasini oldinga siljitish harakati."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu3/Glasssariy/glossariy.html",
            "videoUrl": "https://www.youtube.com/watch?v=QY-2B8j8-H8"
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
            "videoUrl": "https://www.youtube.com/watch?v=kYJjZ_L4z4I",
            "pedTechPdf": "Amaliyat/mavzu4/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu4/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Gonoblennoreya",
                    "def": "Chaqaloqlarning ko'z shilliq qavatining (konyunktiva) gonokokk bakteriyalari bilan o'tkir yiringli yallig'lanishi."
                },
                {
                    "term": "Albrext usuli",
                    "def": "Chaqaloq tug'ilishi bilanoq ko'zlariga gonoblennoreyaning oldini olish uchun 20% li natriy sulfatsil (albucid) tomizish muolajasi."
                },
                {
                    "term": "Chala tug'ilganlik",
                    "def": "Homiladorlikning 22-haftasidan 37-haftasigacha bo'lgan muddatda, tana vazni 2500 grammdan kam tug'ilgan bola holati."
                },
                {
                    "term": "Kuvez (inkubator)",
                    "def": "Chala tug'ilgan chaqaloqlar uchun tana harorati, namlik va kislorod miqdorini doimiy ushlab turuvchi maxsus tibbiy apparat."
                },
                {
                    "term": "Lanugo",
                    "def": "Chala yoki yangi tug'ilgan chaqaloqlar tanasida (yag'rin, yelkalar) mavjud bo'lgan mayin, nozik homila tuklari."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu4/Glasssariy/glossariy.html"
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
            ],
            "glossary": [
                {
                    "term": "Patronaj",
                    "def": "Homiladorlar, yangi tug'ilgan chaqaloqlar va 1 yoshgacha bolalarni xonadonida muntazam tibbiy ko'rikdan o'tkazish va gigiyenik tavsiyalar berish tizimi."
                },
                {
                    "term": "Universal-progressiv model",
                    "def": "Har bir oilaning xavf darajasiga qarab patronaj ko'riklari soni va mazmunini individual belgilash tizimi."
                },
                {
                    "term": "Dispanserizatsiya",
                    "def": "Aholining ma'lum guruhlarini (bolalar, surunkali bemorlar) hisobga olib, doimiy dinamik nazorat qilish usuli."
                },
                {
                    "term": "Sanitariya-maorif ishi",
                    "def": "Ota-onalar o'rtasida sog'lom turmush tarzi, gigiyena va bolani to'g'ri o'stirish bo'yicha tushuntirish va o'rgatish ishlari."
                },
                {
                    "term": "Anamnez",
                    "def": "Bolaning kasallik tarixi, rivojlanishi, oziqlanishi va yashash sharoitlari haqida ota-onasidan so'rab-surishtirib to'plangan ma'lumotlar."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu5/Glasssariy/glossariy.html",
            "videoUrl": "https://www.youtube.com/watch?v=GjYqg5yP2u4"
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
            "videoUrl": "https://www.youtube.com/watch?v=wjt-Ashodl8",
            "pedTechPdf": "Amaliyat/mavzu6/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu6/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Tabiiy ovqatlantirish",
                    "def": "Go'dakni dastlabki 6 oyligida faqat ona suti bilan boqish, unga hech qanday qo'shimcha ovqat yoki suv bermaslik."
                },
                {
                    "term": "Og'iz suti (kolostrum)",
                    "def": "Tug'ruqdan keyingi dastlabki 3-5 kun davomida ajraladigan, oqsillar, immunoglobulinlar va vitaminlarga o'ta boy bo'lgan quyuq dastlabki sut."
                },
                {
                    "term": "Gipogalaktiya",
                    "def": "Emizikli onada sut bezlarining yetarli miqdorda sut ajratmasligi holati."
                },
                {
                    "term": "Shkaff formulasi",
                    "def": "Yangi tug'ilgan chaqaloqning bir kunlik sut miqdorini tana vazni va yashagan kunlariga qarab aniqlash usuli."
                },
                {
                    "term": "Laktatsiya",
                    "def": "Emizikli ona sut bezlarida sut hosil bo'lishi va ajralishining murakkab neyro-gumoral fiziologik jarayoni."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu6/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=4YmI-36wVvQ",
            "pedTechPdf": "Amaliyat/mavzu7/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu7/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Qo'shimcha ovqat (prikorm)",
                    "def": "Bolaga 6 oyligidan boshlab ona sutiga qo'shimcha ravishda beriladigan quyuq va yarim quyuq taomlar (pyure, bo'tqa)."
                },
                {
                    "term": "Monokomponentli ovqat",
                    "def": "Dastlab kiritiladigan, faqat bir turdagi sabzavot yoki yormadan (guruch, grechka) tayyorlangan allergiya chaqirmaydigan taom."
                },
                {
                    "term": "Ovqatlanish kundaligi",
                    "def": "Bolaga yangi taom kiritilganda uning qabul qilishi, terisidagi toshmalar va najas holatini qayd etib boruvchi yozuv."
                },
                {
                    "term": "Gluten",
                    "def": "Ba'zi donli ekinlarda (bug'doy, arpa, suli) uchraydigan, go'daklarda erta berilganda hazm buzilishiga sabab bo'lishi mumkin bo'lgan oqsil."
                },
                {
                    "term": "Ratsional taomnoma",
                    "def": "Bolaning yoshiga, metabolizmiga va ehtiyojiga moslashtirilgan muvozanatli oqsillar, yog'lar, uglevodlar va vitaminlar majmuasi."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu7/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=GmfvB1P3Zk0",
            "pedTechPdf": "Amaliyat/mavzu8/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu8/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Asfiksiya",
                    "def": "Chaqaloq tug'ilganda nafas olmasligi yoki yuzaki, tartibsiz nafas olishi natijasida gipoksiya va giperkapniya rivojlanishi."
                },
                {
                    "term": "Apgar shkalasi",
                    "def": "Yangi tug'ilgan chaqaloqning hayotiy belgilarini (yurak urishi, nafas, mushak tonusi, reflekslar, teri rangi) 1- va 5-daqiqalarda 10 ballik tizimda baholash."
                },
                {
                    "term": "Gemolitik kasallik",
                    "def": "Ona va homila qonining rezus-omil yoki qon guruhlari bo'yicha mos kelmasligi sababli eritrotsitlarning ommaviy parchalanishi."
                },
                {
                    "term": "Fototerapiya",
                    "def": "Chaqaloqlar sarg'ayganda bilirubinni eruvchan shaklga o'tkazish uchun ko'k spektrli maxsus yorug'lik nurlari bilan davolash usuli."
                },
                {
                    "term": "Kefalogematoma",
                    "def": "Tug'ruq paytida mexanik bosim tufayli kalla suyagi ustparda ostiga qon quyilishi natijasida hosil bo'lgan shish."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu8/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=cM5G5vT7Wro",
            "pedTechPdf": "Amaliyat/mavzu9/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu9/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Omfalit",
                    "def": "Chaqaloq kindik jarohati, kindik qoldig'i va uning atrofidagi teri hamda teri osti to'qimalarining bakterial yallig'lanishi."
                },
                {
                    "term": "Sepsis",
                    "def": "Infeksiyaning birlamchi o'choqdan (masalan, kindikdan) qonga tarqalishi natijasida yuzaga keladigan og'ir umumiy infeksion jarayon."
                },
                {
                    "term": "Piodermiya",
                    "def": "Chaqaloqlar terisining stafilokokk yoki streptokokklar ta'sirida yiringli shikastlanishi (pufakchalar, chipqonlar)."
                },
                {
                    "term": "Vezikulopustulyoz",
                    "def": "Teridagi ter bezlari teshiklarining yiringlab, mayda pufakchalar hosil bo'lishi bilan kechuvchi kasallik."
                },
                {
                    "term": "Kindik qoldig'i mumifikatsiyasi",
                    "def": "Yangi tug'ilgan chaqaloq kindik qoldig'ining qisqich ostida asta-sekin qurib, o'z-o'zidan tushib ketish jarayoni."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu9/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=GovE0JFdbcg",
            "pedTechPdf": "Amaliyat/mavzu10/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu10/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Raxit",
                    "def": "D vitamini va fosfor-kalsiy almashinuvining buzilishi oqibatida suyak to'qimasi shakllanishi izdan chiqadigan bolalik kasalligi."
                },
                {
                    "term": "Kraniotabes",
                    "def": "Raxitning erta belgisi bo'lib, chaqaloq kalla suyagi ensa va tepa suyaklarining yumshab qolishi holati."
                },
                {
                    "term": "Spazmofiliya (tetaniya)",
                    "def": "Qonda erkin kalsiy miqdorining keskin kamayishi oqibatida mushaklarda talvasa va tortishishlar rivojlanishi."
                },
                {
                    "term": "Laringospazm",
                    "def": "Spazmofiliyada ovoz yorig'ining to'satdan spazmga uchrashi, ovozning bo'g'ilishi va nafas to'xtashi xavfi."
                },
                {
                    "term": "Atopik diatez",
                    "def": "Bolaning tashqi muhit allergenlariga nisbatan tug'ma moyilligi va allergik yallig'lanishlarga moyillik holati."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu10/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=Q6z4k9kY7xM",
            "pedTechPdf": "Amaliyat/mavzu11/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu11/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Rinit",
                    "def": "Burun bo'shlig'i shilliq qavatining yallig'lanishi, burundan shilliq oqishi va nafas qiyinlashishi."
                },
                {
                    "term": "Angina (tonzillit)",
                    "def": "Tanglay murtaklarining (bodomsimon bezlar) streptokokk yoki boshqa mikroblar ta'sirida o'tkir yallig'lanishi."
                },
                {
                    "term": "Laringit",
                    "def": "Hiqildoq shilliq qavatining yallig'lanishi, ovozning bo'g'ilishi va quruq yo'tal bilan namoyon bo'lishi."
                },
                {
                    "term": "Soxta krup (stenozlovchi laringit)",
                    "def": "Hiqildoq osti sohasining shishi natijasida ovoz bo'g'ilishi, xirillagan 'huruvchi' yo'tal va bo'g'ilish xuruji."
                },
                {
                    "term": "Instillyatsiya",
                    "def": "Ko'z, burun yoki quloq bo'shlig'iga shifobaxsh tomchilarni to'g'ri texnika bilan tomizish muolajasi."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu11/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=bkQIWkMdHbo",
            "pedTechPdf": "Amaliyat/mavzu12/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu12/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Bronxial astma",
                    "def": "Nafas yo'llarining surunkali allergik yallig'lanishi, bronxlar spazmi va nafas chiqarishning (ekspirator) qiyinlashishi xuruji."
                },
                {
                    "term": "Pnevmoniya",
                    "def": "O'pka to'qimasining o'tkir infeksion yallig'lanishi, isitma, yo'tal, hansirash va mayda pufakchali xirillashlar bilan kechishi."
                },
                {
                    "term": "Bronxit",
                    "def": "Bronxlar shilliq qavatining diffuz yallig'lanishi, ko'krak qafasida og'riq va balg'amli yo'tal bilan kechishi."
                },
                {
                    "term": "Ingalyatsiya",
                    "def": "Dorivor moddalarni aerozol yoki bug' holatida nafas yo'llariga yuborish orqali davolash usuli."
                },
                {
                    "term": "Nebulayzer",
                    "def": "Suyuq dori vositalarini mayda dispersli aerozol holatiga aylantirib, o'pka alveolalarigacha yetkazib beruvchi apparat."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu12/Glasssariy/glossariy.html"
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
            ],
            "glossary": [
                {
                    "term": "Tug'ma yurak nuqsoni (TYuN)",
                    "def": "Homila rivojlanishida yurak va yirik tomirlar anatomik tuzilishining noto'g'ri shakllanishi."
                },
                {
                    "term": "Revmatizm",
                    "def": "A guruh beta-gemolitik streptokokk infeksiyasidan keyin yurak va bo'g'imlarni shikastlovchi autoimmun kasallik."
                },
                {
                    "term": "Kardit",
                    "def": "Yurak qavatlarining (miokard, endokard, perikard) yallig'lanishi."
                },
                {
                    "term": "Revmatik xoreya",
                    "def": "Bosh miya po'stloq osti tugunlarining shikastlanishi sababli qo'l-oyoq va yuz mushaklarining ixtiyorsiz, tartibsiz qisqarishi."
                },
                {
                    "term": "Sianoz",
                    "def": "Qonda kislorod yetishmovchiligi (gipoksiya) sababli teri va shilliq qavatlarning ko'kimtir tusga kirishi."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu13/Glasssariy/glossariy.html",
            "videoUrl": "https://www.youtube.com/watch?v=kZ1tqf9y0xM"
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
            ],
            "glossary": [
                {
                    "term": "Pilorostenoz",
                    "def": "Oshqozonning o'n ikki barmoqli ichakka o'tish qismi (pilorus) mushaklarining tug'ma qalinlashishi va torayishi, 'favvora'dek qusish bilan kechishi."
                },
                {
                    "term": "Pilorospazm",
                    "def": "Oshqozon chiqish qismi mushaklarining funksional asabiy qisqarishi (spazmi), davriy qusish bilan namoyon bo'lishi."
                },
                {
                    "term": "Diareya (ich ketishi)",
                    "def": "Najas chiqarish chastotasining ko'payishi va uning suyuq holatga kelishi bilan kechuvchi hazm buzilishi."
                },
                {
                    "term": "Eksikoz (degidratsiya)",
                    "def": "Ich ketishi va qusish oqibatida organizmning suv va elektrolitlarni (kaliy, natriy) xavfli darajada yo'qotishi."
                },
                {
                    "term": "Oral regidratsiya",
                    "def": "Suvsizlanishning oldini olish va davolash uchun bolaga maxsus tuzli eritmalarni (Regidron) ichirish muolajasi."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu14/Glasssariy/glossariy.html",
            "videoUrl": "https://www.youtube.com/watch?v=uK48_lK3p6k"
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
            ],
            "glossary": [
                {
                    "term": "Stomatit",
                    "def": "Og'iz bo'shlig'i shilliq qavatining yallig'lanishi, qizarishi, yaralar (aftalar) paydo bo'lishi."
                },
                {
                    "term": "Kandidoz (molochnitsa)",
                    "def": "Candida zamburug'lari keltirib chiqaradigan og'iz shilliq qavatida oq tvorogsimon karash hosil qiluvchi yallig'lanish."
                },
                {
                    "term": "Askaridoz",
                    "def": "Ascaris lumbricoides to'garak chuvalchangi keltirib chiqaradigan, ichak va o'pkani zararlaydigan invazion kasallik."
                },
                {
                    "term": "Enterobioz",
                    "def": "Ostritsa (Enterobius vermicularis) gijjasi sababli kechasi orqa chiqaruv teshigi qichishi bilan namoyon bo'ladigan kasallik."
                },
                {
                    "term": "Perianal qirma",
                    "def": "Enterobioz tuxumlarini laboratoriyada aniqlash uchun orqa chiqaruv teshigi burmalaridan yopishqoq lenta yordamida olinadigan tahlil."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu15/Glasssariy/glossariy.html",
            "videoUrl": "https://www.youtube.com/watch?v=uF97j8W8X7E"
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
            "videoUrl": "https://www.youtube.com/watch?v=Jm9n_l9T7bI",
            "pedTechPdf": "Amaliyat/mavzu16/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu16/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Anemiya (kamqonlik)",
                    "def": "Qon birligi hajmida gemoglobin miqdori va eritrotsitlar sonining kamayishi bilan xarakterlanuvchi klinik holat."
                },
                {
                    "term": "Temir tanqisligi anemiyasi (TTA)",
                    "def": "Organizmda temir moddasining yetishmovchiligi natijasida gemoglobin sintezining buzilishi."
                },
                {
                    "term": "Gemoglobin (Hb)",
                    "def": "Eritrotsitlar tarkibidagi temirli murakkab oqsil bo'lib, o'pkadan to'qimalarga kislorod tashiydi."
                },
                {
                    "term": "Sideropenik sindrom",
                    "def": "To'qimalarda temir yetishmasligi oqibatida tirnoqlar sinishi, soch to'kilishi, ta'm buzilishi (bo'r, tuproq yeyish)."
                },
                {
                    "term": "Kapillyar qon",
                    "def": "Barmog'i yoki chaqaloqlar tovonidan mayda kapillyarlardan laborator tahlil uchun olinadigan periferik qon."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu16/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=r0kL8Gq6f9M",
            "pedTechPdf": "Amaliyat/mavzu1/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu1/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Gemorragik diatez",
                    "def": "Qon tomir, trombotsit yoki qon ivish tizimi patologiyasi oqibatida qon ketishga va teriga qon quyilishiga moyillik."
                },
                {
                    "term": "Trombotsitopeniya",
                    "def": "Qonda qon ivishida ishtirok etuvchi trombotsitlar sonining me'yordan (150-400 x 10^9/l) kamayishi."
                },
                {
                    "term": "Epistaksis",
                    "def": "Burun bo'shlig'i qon tomirlarining (Kisselbax chigali) yorilishi oqibatida burundan qon ketish holati."
                },
                {
                    "term": "Gemostaz",
                    "def": "Qon ketishini to'xtatishga va qonning tomirlar ichida suyuq holatda saqlanishiga qaratilgan murakkab biologik tizim."
                },
                {
                    "term": "Gipotermiya muolajasi",
                    "def": "Qon tomirlarni toraytirish va qon ketishini to'xtatish maqsadida mahalliy muzli xaltacha qo'llash."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu17/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=aG3m9F8sV2E",
            "pedTechPdf": "Amaliyat/mavzu2/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu2/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "1-tur qandli diabet",
                    "def": "Me'da osti bezi beta-hujayralarining autoimmun yemirilishi natijasida mutlaq insulin yetishmovchiligi kasalligi."
                },
                {
                    "term": "Glikemiya",
                    "def": "Qon zardobida glyukoza (qand) ning konsentratsiyasi miqdori."
                },
                {
                    "term": "Glikozuriya",
                    "def": "Qonda glyukoza buyrak bo'sag'asidan (9-10 mmol/l) oshib ketganda siydik bilan qand ajralishi."
                },
                {
                    "term": "Insulinoterapiya",
                    "def": "Organizmga yetishmayotgan insulin gormonini shprits-ruchka yoki nasos yordamida teri ostiga yuborish."
                },
                {
                    "term": "Ketoatsidoz",
                    "def": "Insulinsizlikda yog'lar parchalanishi kuchayib, qonda atseton (keton tanachalari) ko'payishi bilan kechuvchi xavfli holat."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu18/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=D-Xn8k6m_aM",
            "pedTechPdf": "Amaliyat/mavzu3/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu3/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Pielonefrit",
                    "def": "Buyrak jomi, kosachalari va interstitsial to'qimasining nospetsifik bakterial yallig'lanish kasalligi."
                },
                {
                    "term": "Glomerulonefrit",
                    "def": "Buyrak koptokchalarining (glomerula) infeksion-allergik yoki autoimmun zararlanishi bilan kechuvchi kasallik."
                },
                {
                    "term": "Sistit",
                    "def": "Qovuq shilliq qavatining o'tkir yoki surunkali bakterial yallig'lanishi."
                },
                {
                    "term": "Dizuriya",
                    "def": "Siydik chiqarish jarayonining buzilishi (tez-tez, og'riqli va qiyinlashgan siyish)."
                },
                {
                    "term": "Nefrotik shish",
                    "def": "Qonda oqsil (albumin) kamayishi oqibatida onkotik bosim pasayishi tufayli qovoqlarda va yuzda ertalab paydo bo'ladigan shishlar."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu19/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=e4rK1b7Z9wQ",
            "pedTechPdf": "Amaliyat/mavzu4/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu4/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Zimnitskiy sinamasi",
                    "def": "Buyrakning siydikni konsentratsiyalash va ajratish funksiyasini sutka davomida har 3 soatda olingan 8 ta portsiyada tekshirish usuli."
                },
                {
                    "term": "Nechiporenko usuli",
                    "def": "1 ml siydik cho'kmasidagi leykotsitlar, eritrotsitlar va silindrlar sonini aniq hisoblash laboratoriya usuli."
                },
                {
                    "term": "Proteinuriya",
                    "def": "Siydik bilan oqsil ajralishi (me'yorda siydikda oqsil bo'lmaydi yoki izi bo'ladi)."
                },
                {
                    "term": "Gematurgiya",
                    "def": "Siydikda qon (eritrotsitlar) paydo bo'lishi."
                },
                {
                    "term": "Izostenuriya",
                    "def": "Buyrakning konsentratsiya qobiliyati yo'qolib, barcha porsiyalarda siydik solishtirma og'irligining bir xil past (1010-1012) bo'lib qolishi."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu20/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=Q0n8Z8m7oXc",
            "pedTechPdf": "Amaliyat/mavzu5/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu5/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Vaksina",
                    "def": "Ma'lum bir yuqumli kasallikka qarshi faol immunitet hosil qilish uchun yuboriladigan kuchsizlantirilgan yoki o'ldirilgan mikroblar preparati."
                },
                {
                    "term": "Mantu sinamasi",
                    "def": "Organizmda sil tayoqchasi (Kox batsillasi) ga nisbatan o'ta sezuvchanlik va immunitet borligini tuberkulin yordamida tekshirish usuli."
                },
                {
                    "term": "Papula (infiltrat)",
                    "def": "Mantu sinamasi o'tkazilgandan 72 soat keyin teri yuzasida paydo bo'ladigan zichlashgan tuguncha o'lchami."
                },
                {
                    "term": "BSJ (BCG) vaksinasi",
                    "def": "Yangi tug'ilgan chaqaloqlarga tug'ruqxonada sil kasalligiga qarshi 3-4 kunligida yuboriladigan vaksina."
                },
                {
                    "term": "Sovuqlik zanjiri",
                    "def": "Vaksinalarni ishlab chiqarilgan joyidan bolaga yuborilguncha barcha bosqichlarda qat'iy harorat (+2°C dan +8°C gacha) rejimida saqlash va tashish tizimi."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu21/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=Fj7n0n8K5XQ",
            "pedTechPdf": "Amaliyat/mavzu6/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu6/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "O'RVI",
                    "def": "Nafas yo'llarini zararlaydigan virusli infeksiyalar (gripp, adenovirus, rinositsitial) umumiy guruhi."
                },
                {
                    "term": "Febril talvasa",
                    "def": "Kichik yoshdagi bolalarda tana harorati 38.5-39°C dan yuqori ko'tarilganda bosh miya qo'zg'alishi tufayli yuzaga keladigan tortishishlar."
                },
                {
                    "term": "Antipiretiklar",
                    "def": "Tana haroratini tushirish uchun qo'llaniladigan dori vositalari (paratsetamol, ibuprofen)."
                },
                {
                    "term": "Bakteriologik surtma",
                    "def": "Burun va halqumdan steril paxtali tampon bilan mikroflora turini aniqlash uchun olinadigan tahlil."
                },
                {
                    "term": "Kataral sindrom",
                    "def": "Burun bitishi, ko'z yoshlanishi, tomoq qizarishi va yo'tal bilan ifodalanadigan shilliq qavatlarning o'tkir yallig'lanishi."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu22/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=k6h8V8X0y1A",
            "pedTechPdf": "Amaliyat/mavzu7/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu7/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Difteriya",
                    "def": "Corynebacterium diphtheriae keltirib chiqaradigan, halqum va nafas yo'llarida qiyin ko'chuvchi kulrang fibrinli parda hosil qiluvchi og'ir infeksiya."
                },
                {
                    "term": "Ko'kyo'tal (pertussis)",
                    "def": "Qaytalanuvchi talvasasimon xurujli yo'tal va chuqur shovqinli nafas olish (reprise) bilan kechuvchi yuqumli kasallik."
                },
                {
                    "term": "Epidemik parotit (tepki)",
                    "def": "Paramyxovirus keltirib chiqaradigan, quloq oldi va jag' osti so'lak bezlarining yallig'lanishi bilan kechuvchi kasallik."
                },
                {
                    "term": "Borde-Jangu tayoqchasi",
                    "def": "Ko'kyo'tal qo'zg'atuvchisi (Bordetella pertussis) ning maxsus mikrobiologik nomi."
                },
                {
                    "term": "Isituvchi kompress",
                    "def": "Qon aylanishini yaxshilash va shishni kamaytirish uchun quloq oldi sohasiga spirtli yoki moyli mato qo'yish muolajasi."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu23/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=W0Z6vR8a7vQ",
            "pedTechPdf": "Amaliyat/mavzu8/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu8/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Qizamiq",
                    "def": "Yuqori tana harorati, ko'z konyunktiviti va yuzdan boshlab bosqichma-bosqich butun tanaga toshuvchi dog'-papulyoz toshmalar bilan kechuvchi infeksiya."
                },
                {
                    "term": "Filatov-Koplik dog'lari",
                    "def": "Qizamiqning dastlabki davrida lunj shilliq qavatida, oziq tishlar qarshisida paydo bo'ladigan mayda oqish dog'lar."
                },
                {
                    "term": "Skarlatina",
                    "def": "A guruhi streptokokki chaqiradigan, angina, 'malinasimon til' va butun tanada mayda nuqtasimon qizil toshmalar bilan kechadigan kasallik."
                },
                {
                    "term": "Suvchechak (vetryanka)",
                    "def": "Varicella Zoster virusi chaqiradigan, terida to'lqinsimon holda qichuvchi polimorf vezikula (suvli pufakchalar) toshishi."
                },
                {
                    "term": "Konyunktivit",
                    "def": "Ko'z shilliq qavatining yallig'lanishi, ko'z qizarishi, yosh oqishi va yiringli ajralma hosil bo'lishi."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu24/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=4l_n4Y4m2oA",
            "pedTechPdf": "Amaliyat/mavzu9/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu9/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Dizenteriya (shigellyoz)",
                    "def": "Shigella bakteriyalari chaqiradigan, yo'g'on ichakni zararlab, qorin pastida og'riq va qon-shilliqli najas (tenezm) keltirib chiqaruvchi infeksiya."
                },
                {
                    "term": "Salmonellyoz",
                    "def": "Salmonella bakteriyalari tushgan oziq-ovqatlardan yuquvchi, ko'ngil aynishi, qusish va 'botqoq balchig'i' rangidagi najas bilan kechuvchi kasallik."
                },
                {
                    "term": "Esxerixioz",
                    "def": "Patogen ichak tayoqchalari keltirib chiqaradigan, go'daklarda og'ir suvsizlanish chaqiruvchi ichak infeksiyasi."
                },
                {
                    "term": "Tenezm",
                    "def": "Yo'g'on ichak yallig'langanda najas kelmasdan turib soxta, og'riqli kuchanish hissi."
                },
                {
                    "term": "Koprologiya",
                    "def": "Najasning fizik, kimyoviy va mikroskopik xususiyatlarini laboratoriyada tekshirish usuli."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu25/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=T_Xk5r2m6vQ",
            "pedTechPdf": "Amaliyat/mavzu10/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu10/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Virusli gepatit A",
                    "def": "Enteral (og'iz orqali, ifloslangan suv va ovqat) yo'l bilan yuquvchi, jigarni zararlab sariqlik chaqiruvchi o'tkir virusli kasallik."
                },
                {
                    "term": "Virusli gepatit B va C",
                    "def": "Parenteral (qon, tibbiy asboblar) va jinsiy yo'l bilan yuquvchi, surunkali gepatit va sirrozga olib kelishi mumkin bo'lgan og'ir jigar kasalligi."
                },
                {
                    "term": "OIV (Odam immunitet tanqisligi virusi)",
                    "def": "Inson immun tizimini, xususan T-limfotsitlarni (CD4) zararlab, OITS kasalligini keltirib chiqaruvchi virus."
                },
                {
                    "term": "Serologik tahlil",
                    "def": "Qon zardobidagi o'ziga xos antitelolar va antigenlarni (HBsAg, anti-HCV) immunologik usulda aniqlash."
                },
                {
                    "term": "Aseptika va xavfsizlik standarti",
                    "def": "Tibbiy xodim va bemorlarni qon orqali yuquvchi infeksiyalardan himoya qilish uchun bir martalik asboblar va shaxsiy himoya vositalaridan foydalanish qoidalari."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu26/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=Z8m-Zz4l4yA",
            "pedTechPdf": "Amaliyat/mavzu11/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu11/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Shok",
                    "def": "Qon aylanishining o'tkir buzilishi natijasida to'qima va a'zolarning kislorod bilan ta'minlanishi keskin pasayishi bilan kechuvchi hayot uchun xavfli holat."
                },
                {
                    "term": "Koma",
                    "def": "Bosh miya po'stlog'i faoliyatining chuqur tormozlanishi oqibatida hushning butunlay yo'qolishi va tashqi ta'sirlarga javob bermaslik holati."
                },
                {
                    "term": "Glazgo shkalasi",
                    "def": "Bemorning hushini (ko'zni ochishi, nutqi, harakat reaksiyasi) ballar bo'yicha tezkor ob'ektiv baholash tizimi."
                },
                {
                    "term": "Gipovolemiya",
                    "def": "Qon tomirlar tizimidagi aylanib yuruvchi qon hajmining (suvsizlanish yoki qon yo'qotish sababli) keskin kamayishi."
                },
                {
                    "term": "Shoshilinch yordam algoritmi",
                    "def": "Kritik vaziyatda nafas yo'llarini ochish, nafas va qon aylanishini tiklash bo'yicha ketma-ket standart tibbiy harakatlar rejasi."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu27/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=SDOmUywwjeA",
            "pedTechPdf": "Amaliyat/mavzu12/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu12/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Yurak-o'pka reanimatsiyasi (Yo'R)",
                    "def": "Klinik o'lim holatida hayotiy muhim funksiyalarni (nafas va qon aylanishi) tiklashga qaratilgan shoshilinch chora-tadbirlar."
                },
                {
                    "term": "Ambu qopi",
                    "def": "Sun'iy nafas berish uchun mo'ljallangan, qo'lda siqiluvchi havo yuboruvchi xaltasimon tibbiy reanimatsiya asbobi."
                },
                {
                    "term": "Bilvosita yurak massaji",
                    "def": "To'sh suyagini orqa umurtqa tomon ritmik bosish orqali yurakdan qonni tomirlarga majburiy haydash usuli."
                },
                {
                    "term": "Nafas yo'llari o'tkazuvchanligi",
                    "def": "Til orqaga ketib qolishining oldini olish uchun boshni orqaga tashlab, pastki jag'ni oldinga chiqarish (Safarning uchlik usuli)."
                },
                {
                    "term": "Klinik o'lim",
                    "def": "Nafas va yurak to'xtaganidan keyin bosh miya hujayralari nobud bo'lguniga qadar davom etadigan qaytar davr (bolalarda 3-5 daqiqa)."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu28/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=hB9y0oG1fQE",
            "pedTechPdf": "Amaliyat/mavzu13/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu13/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Gipoglikemik koma",
                    "def": "Qonda glyukoza miqdorining keskin pasayishi (2.8 mmol/l dan past) oqibatida bosh miya ochligi va hushdan ketish bilan kechuvchi holat."
                },
                {
                    "term": "Giperglikemik koma",
                    "def": "Qonda qand miqdorining haddan tashqari ko'tarilib ketishi va ketoatsidoz tufayli rivojlanadigan komatoz holat."
                },
                {
                    "term": "Uremik koma",
                    "def": "O'tkir yoki surunkali buyrak yetishmovchiligida azot qoldiqlari (mochevina, kreatinin) qonda to'planib organizmni zaharlashi."
                },
                {
                    "term": "Jigar komasi",
                    "def": "Jigar yetishmovchiligida ammiak va boshqa toksinlar neyronlarni zaharlashi oqibatida yuzaga keladigan hush yo'qolishi."
                },
                {
                    "term": "Glyukometriya",
                    "def": "Ekspress-glyukometr apparati yordamida kapillyar qondan glyukoza miqdorini bir necha soniyada aniqlash."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu29/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=c7Q1s7ppSwc",
            "pedTechPdf": "Amaliyat/mavzu14/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu14/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Gipertermiya",
                    "def": "Tana haroratining issiqlik ishlab chiqarish va chiqarish muvozanati buzilishi oqibatida me'yordan ortiq ko'tarilib ketishi."
                },
                {
                    "term": "Fizikaviy sovitish",
                    "def": "Qon tomirlari yuzada joylashgan sohalarga (peshona, bo'yin, chov) iliq suv bilan namlangan sochiq qo'yish orqali haroratni tushirish."
                },
                {
                    "term": "Litik aralashma",
                    "def": "Yuqori harorat va talvasada mushak ichiga yuboriladigan spazmolitik va antiallergik dorilar majmuasi."
                },
                {
                    "term": "Oq gipertermiya",
                    "def": "Qon tomirlar spazmi tufayli tana harorati yuqori bo'lsa-da, qo'l-oyoqlarning muzdek va rangpar bo'lishi bilan kechuvchi xatarli holat."
                },
                {
                    "term": "Qizil gipertermiya",
                    "def": "Qon tomirlari kengaygan, terisi issiq, qizargan va tana issiqlikni tashqariga erkin ajrata oladigan qulayroq isitma shakli."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu30/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=WP5TCUR9gxc",
            "pedTechPdf": "Amaliyat/mavzu15/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu15/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Eshakem (urtikariya)",
                    "def": "Terida to'satdan qichuvchi, qizil yoki oqish qavariqlar (daraxt qichitqisi chaqqandek) toshishi bilan kechuvchi allergik reaksiya."
                },
                {
                    "term": "Atopik dermatit",
                    "def": "Bolalarda irsiy moyillik zaminida rivojlanuvchi, kuchli qichish va terining quruqlashishi bilan kechuvchi surunkali allergik teri kasalligi."
                },
                {
                    "term": "Gipoallergen parhez",
                    "def": "Ratsiondan yuqori allergik faollikka ega mahsulotlarni (sitruslar, shokolad, tuxum, qulupnay, yong'oq) butunlay chiqarib tashlash."
                },
                {
                    "term": "Emoliyentlar",
                    "def": "Quruq va atopik terini yumshatuvchi, namlovchi va uning himoya to'sig'ini tiklovchi maxsus tibbiy kremlar."
                },
                {
                    "term": "Antigistamin preparatlar",
                    "def": "Allergik reaksiyalarning asosiy mediatori bo'lgan gistamin retseptorlarini bloklovchi dorilar guruhi."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu31/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=Kz6m9Y5f9pY",
            "pedTechPdf": "Amaliyat/mavzu16/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu16/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Immobilizatsiya",
                    "def": "Shikastlangan suyak, bo'g'im yoki yumshoq to'qimalarni harakatsizlantirish orqali ikkilamchi jarohatlarning oldini olish."
                },
                {
                    "term": "Kramer shinasi",
                    "def": "Tananing shikastlangan qismini immobilizatsiya qilish uchun qo'llaniladigan metall simli elastik tibbiy shina."
                },
                {
                    "term": "Dislokatsiya (chiqish)",
                    "def": "Bo'g'im yuzalarining bir-biriga nisbatan o'zaro to'liq yoki qisman siljishi natijasida harakatning yo'qolishi."
                },
                {
                    "term": "Termik kuyish",
                    "def": "Yuqori harorat (olov, qaynoq suv, bug') ta'sirida teri va uning ostidagi to'qimalarning zararlanishi."
                },
                {
                    "term": "Aseptik bog'lam",
                    "def": "Jarohat yoki kuygan yuzaga infeksiya tushishining oldini olish uchun qo'yiladigan qat'iy steril bint va doka qatlami."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu32/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=yY3e7f-mPxo",
            "pedTechPdf": "Amaliyat/mavzu1/pedtex/ped  texnologiya.pdf",
            "visualPdf": "Amaliyat/mavzu1/vizual/vizual didaktik resurs.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Zaharlanish (intoksikatsiya)",
                    "def": "Toksik moddalarning (dori, kimyoviy vositalar) organizmga tushishi natijasida a'zolar funksiyasining buzilishi."
                },
                {
                    "term": "Oshqozonni yuvish",
                    "def": "Zond yordamida oshqozonga toza suv yoki fiziologik eritma yuborib, toksinlarni so'rilmasdan avval tashqariga chiqarib yuborish."
                },
                {
                    "term": "Enterosorbentlar",
                    "def": "Oshqozon-ichak yo'llaridagi zaharli moddalar va toksinlarni o'ziga yutib, organizmdan xavfsiz chiqarib yuboruvchi dorilar (faollashtirilgan ko'mir, smekta)."
                },
                {
                    "term": "Antidot",
                    "def": "Muayyan zaharning organizmga ko'rsatadigan salbiy ta'sirini zararsizlantiruvchi yoki neytrallovchi maxsus dori moddasi."
                },
                {
                    "term": "Forlangan diurez",
                    "def": "Organizmga ko'p miqdorda suyuqlik quyish va siydik haydovchi dorilar (furosemid) yordamida qondagi zaharli moddalarni tezkor chiqarish usuli."
                }
            ],
            "glossaryPdf": "Amaliyat/mavzu33/Glasssariy/glossariy.html"
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
            "videoUrl": "Teoriya/mavzu1/vedio/video.mp4",
            "pedTechPdf": "Teoriya/mavzu1/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu1/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Pediatriya",
                    "def": "Bolalar organizmining o'sishi, rivojlanishi, kasalliklari hamda ularning profilaktikasi va davolashini o'rganuvchi tibbiyot fani."
                },
                {
                    "term": "Garmoniya indeksi",
                    "def": "Bolaning vazni, bo'yi va ko'krak qafasi o'lchamlari o'rtasidagi mutanosiblik darajasi."
                },
                {
                    "term": "Antropometrik indeks",
                    "def": "Tana massasi va bo'y nisbatini ifodalovchi ko'rsatkichlar (Kete, Chulitskaya indekslari)."
                },
                {
                    "term": "Akseleratsiya",
                    "def": "Keyingi avlodlarda bolalarning jismoniy va jinsiy jihatdan oldingi avlodlarga qaraganda tezroq rivojlanishi hodisasi."
                },
                {
                    "term": "Sog'lom bola rivojlanishi",
                    "def": "Bolaning yosh davrlariga mos holda biologik va psixomotor funksiyalarining to'laqonli shakllanishi."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu1/Glasssariy/glossariy.html"
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
            ],
            "glossary": [
                {
                    "term": "Bosh suyagi liqildog'i (fontanelle)",
                    "def": "Go'dak kalla suyagining birikmagan, yumshoq biriktiruvchi to'qimali qismi (katta liqildoq 1-1.5 yoshda berkiladi)."
                },
                {
                    "term": "Mielinizatsiya",
                    "def": "Nerv tolalarining mielin qobig'i bilan qoplanishi va nerv impulslarini o'tkazish tezligining ortishi jarayoni."
                },
                {
                    "term": "Timus (ayrisimon bez)",
                    "def": "Bolalik davrida T-limfotsitlarni yetishtirib beruvchi va birlamchi immunitetni ta'minlovchi markaziy immun a'zo."
                },
                {
                    "term": "Suyaklanish nuqtalari",
                    "def": "Bolalikda tog'ay to'qimasining suyak to'qimasiga aylanishining rentgenologik ko'rinadigan markazlari."
                },
                {
                    "term": "Teri rezistentligi",
                    "def": "Bolalar terisining yupqa, nozikligi va qon tomirlarga boyligi sababli uning himoya to'sig'ining zaifligi."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu2/Glasssariy/glossariy.html",
            "videoUrl": "https://www.youtube.com/watch?v=huZkI2PQ4rM"
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
            ],
            "glossary": [
                {
                    "term": "Diafragmal nafas",
                    "def": "Go'daklar ko'krak qafasi mushaklari yaxshi rivojlanmaganligi sababli asosan qorin va diafragma orqali nafas olishi."
                },
                {
                    "term": "Fiziologik taxikardiya",
                    "def": "Bolalarda metabolizm yuqoriligi sababli yurak urishining kattalarga qaraganda ancha tez (chaqaloqda 120-140/daq) bo'lishi."
                },
                {
                    "term": "Fetal gemoglobin (HbF)",
                    "def": "Homilalik davrida kislorodni o'ziga oson biriktiruvchi va tug'ilgandan keyin asta-sekin HbA ga almashinuvchi gemoglobin turi."
                },
                {
                    "term": "Oshqozon sig'imi",
                    "def": "Chaqaloq oshqozoni tug'ilganda atigi 30-35 ml bo'lib, 1 yoshga borganda 250-300 ml gacha kengayishi."
                },
                {
                    "term": "Koptokchalar filtratsiyasi",
                    "def": "Buyrakda birlamchi siydik hosil bo'lish jarayoni bo'lib, go'daklarda kattalarga nisbatan pastroq bo'ladi."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu3/Glasssariy/glossariy.html",
            "videoUrl": "https://www.youtube.com/watch?v=GovE0JFdbcg"
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
            "videoUrl": "https://www.youtube.com/watch?v=xT0G8nE2VVo",
            "pedTechPdf": "Teoriya/mavzu4/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu4/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Neonatologiya",
                    "def": "Yangi tug'ilgan chaqaloqlarning hayotining dastlabki 28 kunlik davridagi fiziologiyasi va patologiyasini o'rganuvchi fan."
                },
                {
                    "term": "Yetuklik belgilari",
                    "def": "Homiladorlikning 38-42 haftasida tug'ilgan, tana vazni 2500 g dan, bo'yi 46 sm dan ortiq bo'lgan chaqaloq holati."
                },
                {
                    "term": "Fiziologik sariqlik",
                    "def": "Tug'ruqdan keyin 2-3 kunda qonda erkin bilirubin oshishi tufayli terining sarg'ayishi va 7-10 kunda o'z-o'zidan yo'qolishi."
                },
                {
                    "term": "Fiziologik vazn yo'qotishi",
                    "def": "Dastlabki 3-4 kunda nafas va mekoniy ajralishi sababli vaznning 6-8% gacha vaqtincha kamayishi."
                },
                {
                    "term": "Jinsiy kriz",
                    "def": "Ona estrogenlari ta'sirida chaqaloq sut bezlarining shishishi va jinsiy a'zolardan ajralma kelishi holati."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu4/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=m7L1l7Xb1wQ",
            "pedTechPdf": "Teoriya/mavzu5/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu5/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Chala tug'ilish darajalari",
                    "def": "Tana vazniga qarab I daraja (2001-2500 g), II (1501-2000 g), III (1001-1500 g) va IV daraja (1000 g dan kam - o'ta kam vazn)."
                },
                {
                    "term": "Surfaktant",
                    "def": "Alveolalarning ichki yuzasini qoplab, birinchi nafasdan keyin ularning bir-biriga yopishib qolishiga yo'l qo'ymaydigan modda."
                },
                {
                    "term": "Termolabilite",
                    "def": "Chala chaqaloqlarda termoregulyatsiya markazi yetilmaganligi sababli tashqi muhit haroratiga qarab tez sovib yoki qizib ketishi."
                },
                {
                    "term": "Kenguru usuli",
                    "def": "Chala tug'ilgan chaqaloqni onaning yalang'och ko'kragiga qo'yib, 'teri-teriga' tutash holda tabiiy isitish va parvarishlash usuli."
                },
                {
                    "term": "Botalov oqimi",
                    "def": "Homilaning o'pka arteriyasini aorta bilan bog'lovchi va tug'ilgandan keyin bekilishi kerak bo'lgan tomir oqimi."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu5/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=S1qGqqorGeo",
            "pedTechPdf": "Teoriya/mavzu6/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu6/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Ona suti immuniteti",
                    "def": "Ona sutidagi sekretor IgA, lizotsim, laktoferrin va bifidus omillari bolani ichak infeksiyalaridan himoya qiladi."
                },
                {
                    "term": "Aralash ovqatlantirish",
                    "def": "Ona suti yetishmaganda bolaga ko'krak suti bilan birga sun'iy moslashtirilgan sutli aralashma (formula) berish."
                },
                {
                    "term": "Sun'iy ovqatlantirish",
                    "def": "Go'dakni turli sabablarga ko'ra ona sutidan butunlay mahrum bo'lib, faqat moslashtirilgan aralashmalar bilan boqish."
                },
                {
                    "term": "Moslashtirilgan aralashma",
                    "def": "Sigir yoki echki sutining oqsil va mineral tarkibi ona sutiga maksimal yaqinlashtirilgan bolalar ozuqasi."
                },
                {
                    "term": "Kazein va albumin nisbati",
                    "def": "Ona sutida nozik oqsil albuminlar ko'p bo'lib, oson hazm bo'ladi va ichakda yumshoq ivindi hosil qiladi."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu6/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=nN4M7V9jE2w",
            "pedTechPdf": "Teoriya/mavzu7/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu7/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Gipoksiya",
                    "def": "To'qima va a'zolarga yetarli miqdorda kislorod yetib bormasligi natijasida rivojlanadigan kislorod ochligi."
                },
                {
                    "term": "Yadroviy sariqlik (bilirubin ensefalopatiyasi)",
                    "def": "Erkin bilirubin miqdori kritik darajadan oshganda (340 mkmol/l dan yuqori) miya to'qimasini zararlashi."
                },
                {
                    "term": "Rezus-konflikt",
                    "def": "Manfiy rezusli onaning qonida musbat rezusli homilaning qizil qon tanachalariga qarshi antitelolar hosil bo'lishi."
                },
                {
                    "term": "Qon almashtirib quyish (OPK)",
                    "def": "Gemolitik kasallikda toksik bilirubinni va ona antitelolarini chaqaloq qonidan tezkor chiqarish operatsiyasi."
                },
                {
                    "term": "Bosh suyagi ichi tug'ruq jarohati",
                    "def": "Tug'ruq mexanizmi buzilishi natijasida kalla suyagi ichiga qon quyilishi va asab tizimi zararlanishi."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu7/Glasssariy/glossariy.html"
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
            ],
            "glossary": [
                {
                    "term": "Flegmonoz omfalit",
                    "def": "Kindik jarohati atrofidagi to'qimalarning chuqur yiringli nekrotik erishi bilan kechuvchi xavfli shakli."
                },
                {
                    "term": "Bakterial sepsis",
                    "def": "Organizmning infeksiyaga tizimli yallig'lanish reaksiyasi (SIRS) va a'zolar yetishmovchiligi bilan kechishi."
                },
                {
                    "term": "To'satdan bolalar o'limi sindromi (SIDS)",
                    "def": "Go'dakning uyqu paytida ko'rinadigan sabablarsiz to'satdan nafas to'xtashi natijasida vafot etishi."
                },
                {
                    "term": "Ritter kasalligi (eksfoliativ dermatit)",
                    "def": "Yangi tug'ilgan chaqaloqlarda stafilokokk toksini ta'sirida terining yuqori qatlami ko'chib tushishi."
                },
                {
                    "term": "Sklerema",
                    "def": "Chala tug'ilgan chaqaloqlarda teri va teri osti yog' qatlamining toshdek qattiqlashishi bilan kechuvchi sovuq qotish asorati."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu8/Glasssariy/glossariy.html",
            "videoUrl": "https://www.youtube.com/watch?v=1rA8g3s4nCo"
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
            "videoUrl": "https://www.youtube.com/watch?v=v0_6s2H1RKo",
            "pedTechPdf": "Teoriya/mavzu9/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu9/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Distrofiya",
                    "def": "Bolalarda to'qimalarning oziqlanishi buzilishi natijasida tana vazni va to'qimalar turgorining o'zgarishi."
                },
                {
                    "term": "Gipovitaminoz D",
                    "def": "Organizmda quyosh nuri yoki oziq-ovqat orqali tushadigan D vitaminining surunkali yetishmovchiligi."
                },
                {
                    "term": "Kalsiypenik tetaniya",
                    "def": "Ionlashgan kalsiyning keskin kamayishi oqibatida qo'l-oyoq mushaklarining qisqarib 'akusher qo'li' holatiga kelishi."
                },
                {
                    "term": "Osteomalyatsiya",
                    "def": "Raxitda yangi hosil bo'layotgan suyak to'qimasining minerallashmasdan yumshoq bo'lib qolishi."
                },
                {
                    "term": "Gneys",
                    "def": "Go'daklar boshining sochli qismida va qoshlarida yog' bezlarining haddan tashqari ajralishi natijasida hosil bo'ladigan tangasimon qora-sarg'ish qobiqlar."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu9/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=5rT8Zp3b3qA",
            "pedTechPdf": "Teoriya/mavzu10/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu10/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "O'tkir nazofaringit",
                    "def": "Burun va halqum shilliq qavatining bir vaqtda virusli yoki bakterial yallig'lanishi."
                },
                {
                    "term": "Lakunar angina",
                    "def": "Bodomsimon bezlar tirqishlarida (lakunalarda) sarg'ish-oq yiringli karashlar to'planishi bilan kechuvchi tomoq og'rig'i."
                },
                {
                    "term": "Follikulyar angina",
                    "def": "Bodomsimon bezlar yuzasida mayda sariq yiringli nuqtalar (follikulalar) paydo bo'lishi."
                },
                {
                    "term": "Stenoz",
                    "def": "Hiqildoq bo'shlig'ining yallig'lanishli shish natijasida torayishi va havoning o'pkaga o'tishining qiyinlashishi."
                },
                {
                    "term": "Aspiratsiya",
                    "def": "Burun yoki og'izdagi begona jism, qusuq massalari yoki shilliqning nafas yo'llariga tushib qolishi."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu10/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=y3Vl_rF2XzI",
            "pedTechPdf": "Teoriya/mavzu11/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu11/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Bronxoobstruktsiya",
                    "def": "Bronxlar shilliq qavatining shishi, bronxospazm va quyuq shilliq to'planishi oqibatida havo yo'llarining to'silishi."
                },
                {
                    "term": "Krepitatsiya",
                    "def": "Pnevmoniyada nafas olganda alveolalarning bir-biridan ajralishi paytida eshitiladigan soch tolasining ishqalanishiga o'xshash tovush."
                },
                {
                    "term": "Ekspirator hansirash",
                    "def": "Nafas olish oson, ammo toraygan bronxlar orqali havoni tashqariga chiqarishning (nafas chiqarish) qiyinlashishi."
                },
                {
                    "term": "Atelektaz",
                    "def": "Bronxning to'liq berkilib qolishi sababli o'pka ma'lum bir bo'lagining havosizlanib burishib qolishi."
                },
                {
                    "term": "Plevrit",
                    "def": "O'pkani o'rab turuvchi plevra pardalarining yallig'lanishi, nafas olganda kuchli sanchuvchi og'riq paydo bo'lishi."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu11/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=x0b6T2cR5oQ",
            "pedTechPdf": "Teoriya/mavzu12/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu12/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Miokardit",
                    "def": "Yurakning asosiy qisqaruvchi mushak qavatining (miokard) infeksion yoki allergik yallig'lanishi."
                },
                {
                    "term": "Endokardit",
                    "def": "Yurakning ichki pardasi va qopqoqlarining yallig'lanishi, keyinchalik yurak nuqsoni shakllanishiga olib kelishi mumkin."
                },
                {
                    "term": "Kichik xoreya (Sent-Vitt raqsi)",
                    "def": "Revmatizmda markaziy asab tizimi zararlanib, bolaning harakatlari koordinatsiyasi buzilishi va emotsional beqarorlik."
                },
                {
                    "term": "Arterial gipertenziya",
                    "def": "Bolalarda qon bosimining o'z yoshi, jinsi va bo'yiga nisbatan 95-sentildan doimiy yuqori bo'lishi."
                },
                {
                    "term": "Yurak yetishmovchiligi",
                    "def": "Yurak mushagining a'zo va to'qimalarni yetarli qon bilan ta'minlay olmasligi, hansirash va shishlar bilan kechishi."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu12/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=q6E0aH1qG9Q",
            "pedTechPdf": "Teoriya/mavzu13/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu13/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Gipovolemik degidratsiya",
                    "def": "Suyuqlik va qon zardobi hajmining kamayishi oqibatida qon bosimi tushishi va turgorning yo'qolishi."
                },
                {
                    "term": "Gastrit",
                    "def": "Oshqozon shilliq qavatining o'tkir yoki surunkali yallig'lanishi, me'dada og'riq va dispeptik belgilar bilan kechishi."
                },
                {
                    "term": "Enterokolit",
                    "def": "Ingichka va yo'g'on ichak shilliq qavatining birgalikda yallig'lanishi, ich ketishi va meteorizm."
                },
                {
                    "term": "Malabsorbsiya sindromi",
                    "def": "Ingichka ichakda oziq moddalarning (uglevod, yog', vitaminlar) so'rilishining surunkali buzilishi."
                },
                {
                    "term": "Gipoxloremiya",
                    "def": "Ko'p qusganda xlor ionlarining oshqozon shirasi bilan tashqariga chiqib ketishi natijasida elektrolitlar muvozanati buzilishi."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu13/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=w2W7Jb8a5nU",
            "pedTechPdf": "Teoriya/mavzu14/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu14/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Aftoz stomatit",
                    "def": "Og'iz shilliq qavatida dumaloq shakldagi, qizil hoshiyali, oqish qoplamali juda og'riqli yaralar (aftalar) toshishi."
                },
                {
                    "term": "Gelmintoz",
                    "def": "Odam organizmida parazit chuvalchanglar (gelmintlar) yashashi natijasida kelib chiqadigan kasalliklar guruhi."
                },
                {
                    "term": "Avtoinvaziya",
                    "def": "Bolaning gigiyena qoidalariga rioya qilmasligi (qo'lni yuvmaslik, tirnoq tishlash) oqibatida o'zini-o'zi qayta zararlashi."
                },
                {
                    "term": "Sensibilizatsiya",
                    "def": "Parazitlar ajratgan toksinlar ta'sirida bolaning immuniteti o'ta sezgir bo'lib qolishi va allergik toshmalar toshishi."
                },
                {
                    "term": "Eozinofiliya",
                    "def": "Qon tahlilida gelmintlar va allergiyaga javoban eozinofil leykotsitlar miqdorining sezilarli oshishi."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu14/Glasssariy/glossariy.html"
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
            ],
            "glossary": [
                {
                    "term": "Eritropoez",
                    "def": "Suyak iligida qizil qon tanachalari (eritrotsitlar) hosil bo'lishi va yetilishining murakkab fiziologik jarayoni."
                },
                {
                    "term": "Ferritin",
                    "def": "Inson organizmida, xususan jigar va taloqda temir zaxirasini saqlovchi asosiy oqsilli birikma."
                },
                {
                    "term": "Gipoxromiya",
                    "def": "Eritrotsitlarning gemoglobinga to'yinishi kamayib, mikroskop ostida ularning markazi rangpar ko'rinishi."
                },
                {
                    "term": "Anemiya darajalari",
                    "def": "Gemoglobin miqdoriga ko'ra yengil (110-90 g/l), o'rta (90-70 g/l) va og'ir (70 g/l dan kam) darajalarga bo'linishi."
                },
                {
                    "term": "Transferrin",
                    "def": "Qon zardobida temir ionlarini to'qimalarga va suyak iligiga tashuvchi maxsus transport oqsili."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu15/Glasssariy/glossariy.html",
            "videoUrl": "https://www.youtube.com/watch?v=6rT1x4v8m5g"
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
            "videoUrl": "https://www.youtube.com/watch?v=p4M2_z1uR4A",
            "pedTechPdf": "Teoriya/mavzu16/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu16/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Gemofiliya",
                    "def": "Qon ivish tizimining VIII (A turi) yoki IX (B turi) omillari yetishmasligi sababli irsiy qon oqishi kasalligi (asosan o'g'il bolalarda)."
                },
                {
                    "term": "Gemorragik purpura (Verlgof kasalligi)",
                    "def": "Trombotsitlarning autoimmun parchalanishi tufayli terida assimetrik mayda qon quyilishlari paydo bo'lishi."
                },
                {
                    "term": "Gemartroz",
                    "def": "Gemofiliyada yengil jarohatdan keyin ham yirik bo'g'imlar (tizza, tirsak) ichiga qon quyilishi va harakatsizlanishi."
                },
                {
                    "term": "Koagulopatiya",
                    "def": "Qon ivish omillarining yetishmasligi oqibatida qon ivish vaqtining uzayib ketishi holati."
                },
                {
                    "term": "Koagulyatsiya",
                    "def": "Qon tomirlari jarohatlanganda qonning suyuq holatdan quyuq fibrin laxtasiga aylanish jarayoni."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu16/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=iB-a9H0vC7E",
            "pedTechPdf": "Teoriya/mavzu1/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu1/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Gipotireoz",
                    "def": "Qalqonsimon bez gormonlari (T3, T4) ning yetarli ishlab chiqarilmasligi oqibatida bolaning aqliy va jismoniy rivojlanishdan orqada qolishi."
                },
                {
                    "term": "Endemik buqoq",
                    "def": "Atrof-muhitda, tuproq va ichimlik suvida yod yetishmasligi oqibatida qalqonsimon bez to'qimasining kompensator kattalashishi."
                },
                {
                    "term": "Kretinizm",
                    "def": "Bolalikda tug'ma davolanmagan gipotireoz natijasida aqliy zaiflik va tananing mitti bo'lib qolishi."
                },
                {
                    "term": "Poliuriya va polidipsiya",
                    "def": "Qandli diabetda ko'p siydik ajralishi (poliuriya) va doimiy kuchli chanqash hissi (polidipsiya)."
                },
                {
                    "term": "Gipofizar mittilik (nanizm)",
                    "def": "Gipofiz bezida o'sish gormoni (somatotrop gormon) yetishmasligi oqibatida bo'y o'sishining keskin to'xtashi."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu17/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=gT8v9M0L3tY",
            "pedTechPdf": "Teoriya/mavzu2/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu2/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Pielonefrit etiopatogenezi",
                    "def": "Infeksiyaning (asosan ichak tayoqchasi) siydik yo'llari orqali yuqoriga (urologik) yoki qon orqali buyrakka yetib borishi."
                },
                {
                    "term": "Leykotsituriya",
                    "def": "Siydikda yallig'lanish belgisi sifatida ko'p miqdorda oq qon tanachalari (leykotsitlar) paydo bo'lishi."
                },
                {
                    "term": "Bakteriuriya",
                    "def": "1 ml yangi olingan siydikda 100 000 dan ortiq mikrob tanachalari aniqlanishi (chin bakteriuriya)."
                },
                {
                    "term": "Vezikoureteral reflyuks",
                    "def": "Siydikning qovuqdan siydik yo'li orqali teskari yuqoriga - buyrak jomiga qaytib quyilishi anomal holati."
                },
                {
                    "term": "Uroseptiklar",
                    "def": "Siydik yo'llari infeksiyalarini davolash uchun qo'llaniladigan va asosan siydik bilan filtrlanadigan antibakterial dorilar."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu18/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=uT3w8x9pG5k",
            "pedTechPdf": "Teoriya/mavzu3/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu3/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Glomerulonefrit triadası",
                    "def": "Kasallikning uchta asosiy klinik belgisi: shishlar, arterial gipertoniya va gematuriya (siydikda qon)."
                },
                {
                    "term": "Siydik sindromi",
                    "def": "Siydik tahlilida oqsil (proteinuriya), qon (gematuriya) va silindrlar (silindruriya) paydo bo'lishi."
                },
                {
                    "term": "Buyrak yetishmovchiligi",
                    "def": "Buyrakning qonni tozalash, suv-tuz va kislota-ishqor muvozanatini saqlash qobiliyatining o'tkir yoki surunkali buzilishi."
                },
                {
                    "term": "7-raqamli parhez (Pevzner)",
                    "def": "Buyrak kasalliklarida tuzni qat'iy cheklash (kuniga 1-2 g) va oqsillar miqdorini nazorat qilishga asoslangan parhez."
                },
                {
                    "term": "Pollakiuriya",
                    "def": "Qovuq shilliq qavati ta'sirlanishi oqibatida oz-ozdan tez-tez (har 15-20 daqiqada) siydik ajratish holati."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu19/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=yM6w8v0_X_w",
            "pedTechPdf": "Teoriya/mavzu4/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu4/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Tuberkulyoz (sil)",
                    "def": "Mycobacterium tuberculosis (Kox tayoqchasi) keltirib chiqaradigan, ko'pincha o'pka va limfa tugunlarini zararlaydigan surunkali infeksiya."
                },
                {
                    "term": "Tuberkulin",
                    "def": "Sil mikrobining oqsilli parchalari bo'lib, Mantu sinamasi orqali organizm infeksiya bilan to'qnashganini aniqlashda qo'llaniladi."
                },
                {
                    "term": "Immunoprofilaktika",
                    "def": "Aholini xavfli yuqumli kasalliklardan vaksina va zardoblar yordamida sun'iy himoyalash chora-tadbirlari."
                },
                {
                    "term": "Kollektiv immunitet",
                    "def": "Jamiyatda emlangan bolalar ulushi 95% dan yuqori bo'lganda yuqumli kasalliklar tarqalishining to'xtashi."
                },
                {
                    "term": "Sovuq elementlari",
                    "def": "Vaksinalarni ko'chma termokonteynerlarda tashish paytida haroratni bir me'yorda saqlab turuvchi maxsus muzlatilgan idishlar."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu20/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=n5h7qK3r7Z8",
            "pedTechPdf": "Teoriya/mavzu5/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu5/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Meningokokktsemiya",
                    "def": "Qonda meningokokk bakteriyalarining ko'payishi oqibatida terida yulduzsimon qon quyilishlar toshishi bilan kechuvchi o'ta xavfli holat."
                },
                {
                    "term": "Meningial belgilar",
                    "def": "Miya pardalari yallig'langanda yuzaga keladigan alomatlar (ensa mushaklari rigidligi, Kernig va Bryudzinskiy belgilari)."
                },
                {
                    "term": "Paragripp",
                    "def": "O'RVI turi bo'lib, hiqildoqni zararlab, ko'pincha bolalarda soxta krup sindromiga sabab bo'ladi."
                },
                {
                    "term": "Adenovirusli infeksiya",
                    "def": "Nafas yo'llari, ko'z konyunktivasi va limfa bezlarining bir vaqtda zararlanishi bilan kechuvchi virusli kasallik."
                },
                {
                    "term": "Neyrotoksikoz",
                    "def": "Viruslar toksini bosh miya qon aylanishini buzishi oqibatida miya shishi, hushning buzilishi va talvasa rivojlanishi."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu21/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=Z2c5V8m1u6w",
            "pedTechPdf": "Teoriya/mavzu6/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu6/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Difteriya toksini",
                    "def": "Difteriya tayoqchasi ishlab chiqaradigan, asab tizimi, yurak mushagi va buyrakni og'ir zararlaydigan kuchli ekzotoksin."
                },
                {
                    "term": "Difteriyaga qarshi zardob (PDS)",
                    "def": "Kasallikning dastlabki soatlarida qondagi erkin difteriya toksinini neytrallash uchun shoshilinch yuboriladigan antitelolar."
                },
                {
                    "term": "Apnoe",
                    "def": "Ko'kyo'tal xurujidan keyin yoki og'ir kasalliklarda nafas olishning vaqtincha (10-15 soniyadan ortiq) to'xtab qolishi."
                },
                {
                    "term": "Orxit",
                    "def": "Epidemik parotit virusining o'smir o'g'il bolalarda urug'don to'qimasini zararlab, bepushtlik xavfini tug'diruvchi yallig'lanishi."
                },
                {
                    "term": "Repriz",
                    "def": "Ko'kyo'talli yo'tal xuruji yakunida toraygan ovoz yorig'i orqali shovqinli, xushtaksimon chuqur nafas olish."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu22/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=jW9yT2f4B20",
            "pedTechPdf": "Teoriya/mavzu7/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu7/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Qizilcha (rubeolla)",
                    "def": "Yengil kataral belgilar, orqa bo'yin limfa bezlarining kattalashishi va butun tanaga mayda pushti toshma toshishi bilan kechuvchi kasallik."
                },
                {
                    "term": "Tug'ma qizilcha sindromi",
                    "def": "Homiladorlikning dastlabki 3 oyligida ona qizilcha bilan og'riganda homilada yurak nuqsoni, ko'rlik va karlik rivojlanishi."
                },
                {
                    "term": "Malinasimon til",
                    "def": "Skarlatinaning 3-4 kunida til karashdan tozalanib, yorqin qizil rangga kirishi va so'rg'ichlarining bo'rtib chiqishi."
                },
                {
                    "term": "Polimorfizm",
                    "def": "Suvchechakda terida bir vaqtning o'zida turli bosqichdagi toshmalar (dog', tuguncha, pufakcha, qoraqo'tir) bo'lishi."
                },
                {
                    "term": "Pityriasis (kepaklanish)",
                    "def": "Qizamiq va skarlatinada toshmalar qaytgandan so'ng terining plastinkasimon yoki kepaksimon qipiqlanishi."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu23/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=tY8m2A4l0vU",
            "pedTechPdf": "Teoriya/mavzu8/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu8/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Rotavirusli gastroenterit",
                    "def": "Go'daklarda ko'p uchraydigan, tana harorati ko'tarilishi, qusish va o'tkir suvli diareya bilan kechuvchi virusli infeksiya."
                },
                {
                    "term": "Oral regidratsion tuzlar (ORT)",
                    "def": "Natriy xlorid, kaliy xlorid, natriy sitrat va glyukozadan iborat suvsizlanishga qarshi maxsus kukun majmuasi."
                },
                {
                    "term": "Sekretor diareya",
                    "def": "Bakterial toksinlar ichak devorida suv va tuzlar ajralishini kuchaytirishi natijasida hosil bo'ladigan ko'p miqdordagi suvli najas."
                },
                {
                    "term": "Invazion diareya",
                    "def": "Bakteriyalarning ichak shilliq qavati hujayralari ichiga kirib, yiringli-qonli yallig'lanish chaqirishi."
                },
                {
                    "term": "Gipovolemik shok",
                    "def": "Qusish va ich ketishi oqibatida suyuqlikning haddan tashqari ko'p yo'qotilishi tufayli tomirlarda qon bosimining halokatli pasayishi."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu24/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=9_J9q2B6nF0",
            "pedTechPdf": "Teoriya/mavzu9/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu9/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Parenteral yuqish",
                    "def": "Infeksiyaning terini teshuvchi muolajalar (ukol, qon quyish, jarrohlik) orqali to'g'ridan-to'g'ri qonga o'tishi."
                },
                {
                    "term": "Kasalxona ichi infeksiyasi",
                    "def": "Bemorning shifoxonaga yotgandan kamida 48 soat o'tgach muolajalar jarayonida yuqtirib olgan infeksiyasi."
                },
                {
                    "term": "Avtoklavlash",
                    "def": "Tibbiy asboblarni yuqori bosimli qizdirilgan bug' (120-132°C) yordamida to'liq sterillash usuli."
                },
                {
                    "term": "Sariqlik davri",
                    "def": "Qonda bilirubin miqdori oshishi tufayli ko'z oqi (sklera), teri va shilliq qavatlarning sarg'ayishi hamda peshobning to'q choy rangiga kirishi."
                },
                {
                    "term": "Sterilizatsiya",
                    "def": "Tibbiy asboblar va buyumlar yuzasidagi barcha tirik mikroorganizmlar hamda ularning sporalari to'liq yo'q qilinishi."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu25/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=cM0Z9l_3v6E",
            "pedTechPdf": "Teoriya/mavzu10/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu10/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Anafilaktik shok",
                    "def": "Allergen organizmga tushganda yuzaga keladigan o'ta xavfli, qon bosimining keskin tushishi va nafas qisishi bilan kechuvchi allergiya turi."
                },
                {
                    "term": "Gipovolemik shok",
                    "def": "Qon yo'qotish yoki kuchli degidratsiya natijasida aylanib yuruvchi qon hajmining kritik darajada kamayishi."
                },
                {
                    "term": "Kardiotrop dorilar",
                    "def": "Yurak qisqarish kuchini va qon bosimini oshirish uchun shok holatlarida yuboriladigan vositalar (dofamin, adrenalin)."
                },
                {
                    "term": "Miya shishi",
                    "def": "Bosh miya to'qimasida suyuqlik miqdorining normadan ortib ketishi oqibatida kalla ichi bosimining keskin ko'tarilishi."
                },
                {
                    "term": "Terminal holat",
                    "def": "Organizmning hayot bilan o'lim oralig'idagi o'ta og'ir chegara davri (predagoniya, agoniya, klinik o'lim)."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu26/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=W0n5n2b5kMo",
            "pedTechPdf": "Teoriya/mavzu11/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu11/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "O'tkir nafas yetishmovchiligi (O'NYe)",
                    "def": "O'pkaning qonni yetarli kislorod bilan ta'minlay olmasligi va karbonat angidridni chiqara olmasligi holati."
                },
                {
                    "term": "O'tkir qon-tomir kollapsi",
                    "def": "Qon tomirlari tonusining to'satdan pasayishi natijasida arterial bosimning keskin tushishi va miya gipoksiyasi."
                },
                {
                    "term": "Kislorodoterapiya",
                    "def": "Gipoksiyani bartaraf etish uchun burun kateterlari yoki niqob orqali namlangan kislorod yuborish."
                },
                {
                    "term": "Traxeotomiya",
                    "def": "Yuqori nafas yo'llari o'tkazuvchanligi to'liq yopilganda hiqildoq ostidan traxeyaga havo kirishi uchun maxsus naycha qo'yish jarrohlik amaliyoti."
                },
                {
                    "term": "Defibrillyatsiya",
                    "def": "Yurak qorinchalari xilpillashida (fibrillyatsiya) yurak faoliyatini tiklash uchun yuqori kuchlanishli elektr toki yuborish usuli."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu27/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=X6m3Y5v9b1U",
            "pedTechPdf": "Teoriya/mavzu12/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu12/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Termoregulyatsiya markazi",
                    "def": "Bosh miya gipotalamusida joylashgan, tana haroratining ishlab chiqarilishi va chiqarilishini boshqaruvchi markaz."
                },
                {
                    "term": "Pirogenlar",
                    "def": "Tana haroratini ko'taruvchi moddalar (bakteriya endotoksinlari va immun hujayralar ajratadigan sitokinlar)."
                },
                {
                    "term": "Miya krampusi (talvasasi)",
                    "def": "Bosh miya neyronlarining ortiqcha elektr razryadlari hosil qilishi natijasida butun tana mushaklarining tortishishi."
                },
                {
                    "term": "Klonik talvasa",
                    "def": "Mushaklarning tez-tez qisqarishi va bo'shashishi almashinib turishi bilan kechuvchi tortishishlar."
                },
                {
                    "term": "Tonik talvasa",
                    "def": "Mushaklarning uzoq muddat (bir necha soniya yoki daqiqa) qattiq taranglashib, qotib qolishi."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu28/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=P6k9W2y8sZ0",
            "pedTechPdf": "Teoriya/mavzu13/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu13/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Quyosh urishi",
                    "def": "Boshga quyosh nurlarining to'g'ridan-to'g'ri uzoq ta'sir etishi natijasida miya qon tomirlarining kengayishi va miya shishi rivojlanishi."
                },
                {
                    "term": "Asfiksiya bilan cho'kish",
                    "def": "Nafas yo'llariga suv kirishi natijasida ovoz yorig'ining spazmi tufayli havoning o'pkaga o'tmay qolishi."
                },
                {
                    "term": "Elektr tamg'asi",
                    "def": "Elektr toki kirgan va chiqqan joyda terining kuyishi natijasida hosil bo'ladigan kulrang-sariq qattiq qobiqli iz."
                },
                {
                    "term": "Chayon va qoraqurt zahari",
                    "def": "Asab tizimini falajlovchi va kuchli og'riq chaqiruvchi neyrotoksik zaharli birikmalar."
                },
                {
                    "term": "Zaharga qarshi zardob",
                    "def": "Qoraqurt yoki ilon chaqqanda zaharni qonda tezkor bog'lab zararsizlantirish uchun yuboriladigan maxsus monovalent zardob."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu29/Glasssariy/glossariy.html"
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
            "videoUrl": "https://www.youtube.com/watch?v=7_W0vP3r1zQ",
            "pedTechPdf": "Teoriya/mavzu14/pedtex/Fanning talim texnologiyalari.pdf",
            "visualPdf": "Teoriya/mavzu14/vizual/Vizual-didaktik resurslar.pdf",
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
            ],
            "glossary": [
                {
                    "term": "Kvinke shishi (angionevrotik shish)",
                    "def": "Teri osti yog' qatlami va shilliq qavatlarning (ayniqsa lablar, ko'z qovoqlari, hiqildoq) to'satdan massiv shishishi."
                },
                {
                    "term": "Adrenalin (epinefrin)",
                    "def": "Anafilaktik shokda qon bosimini tezda ko'tarish, bronxospazmni bartaraf etish uchun sonning old-yon qismiga zudlik bilan yuboriladigan birinchi tanlov dorisi."
                },
                {
                    "term": "Gormonoterapiya",
                    "def": "Kuchli allergik yallig'lanish va shishni to'xtatish uchun yuboriladigan glyukokortikoid gormonlar (prednizolon, deksametazon)."
                },
                {
                    "term": "Gistamin",
                    "def": "Semiz hujayralardan ajralib, qon tomirlarni kengaytiruvchi, o'tkazuvchanligini oshiruvchi va bronxlarni qisuvchi asosiy allergiya moddasi."
                },
                {
                    "term": "Tredelenburg holati",
                    "def": "Anafilaktik shokda miya qon aylanishini yaxshilash uchun bemorning oyoq tomonini 30 gradusga ko'tarib yotqizish."
                }
            ],
            "glossaryPdf": "Teoriya/mavzu30/Glasssariy/glossariy.html"
        }
    ]
};

# 📘 Elektron O'quv-Metodik Majmuasi (EOMM) — Foydalanish Qo'llanmasi

Ushbu loyiha **"Hamshiralik ishi texnikasi"** fani uchun zamonaviy tibbiy-akademik uslubda yaratilgan professional elektron ta'lim portalidir.

---

## 📁 1. Loyiha Tuzilishi

```text
ASEM taza proekt/
│
├── index.html               # Asosiy portal (Bosh sahifa, Darsliklar, O'qituvchi, Qidiruv)
├── mavzu-template.html      # Mustaqil mavzu shabloni (alohida fayl kerak bo'lsa)
├── QOLLANMA.md              # Ushbu qo'llanma
│
├── data/
│   └── course-data.js       # ASOSIY BAZA: barcha mavzular, testlar, PDF va video yo'llari
│
├── assets/
│   ├── css/
│   │   ├── style.css        # Asosiy dizayn tizimi, Light/Dark rejim, kartochkalar
│   │   └── topic.css        # Mavzu darchasi, slayd va test tizimi stillari
│   ├── js/
│   │   ├── main.js          # Qidiruv, toifalar, sertifikat, tema almashtirish
│   │   └── topic-viewer.js  # Interaktiv dars oynasi, test pleyeri
│   └── images/              # Suratlar, avatarlar, ikonlar
│
├── Amaliyat/                # Amaliy darslar fayllari (maruza, slayd, video, test, pedtex)
├── Teoriya/                 # Nazariy darslar fayllari (maruza, slayd, video, test, pedtex)
└── archive_old/             # Eski fayllaringizning to'liq xavfsiz zaxirasi
```

---

## ⚡ 2. Mavzular va Fayllarni Qanday Kiritish / O'zgartirish Kerak?

Siz HTML kodlarini o'rganishingiz yoki o'zgartirishingiz shart emas! Barcha ma'lumotlar **`data/course-data.js`** faylida bitta joyda joylashgan.

Faylni oching: `data/course-data.js`

### 2.1. Mavzu ma'lumotlarini o'zgartirish:
Masalan, 1-mavzuning nomi yoki PDF yo'lini o'zgartirmoqchi bo'lsangiz:

```javascript
{
  id: "amaliy-1",
  number: 1,
  category: "amaliy",
  categoryName: "Amaliy mashg'ulot",
  title: "Yangi mavzu nomi...",                     // <-- Mavzu nomi
  shortDesc: "Mavzu haqida qisqacha ma'lumot...",    // <-- Tavsif
  lecturePdf: "Amaliyat/mavzu1/maruza/maruza.pdf",   // <-- Ma'ruza PDF fayli
  videoUrl: "Amaliyat/mavzu1/vedio/video.mp4",       // <-- Video fayli
  pedTechPdf: "Amaliyat/mavzu1/pedtex/pedtex.pdf",   // <-- Pedagogik texnologiya
  visualPdf: "Amaliyat/mavzu1/vizual/vizual.pdf",    // <-- Vizual resurs
  glossaryPdf: "Amaliyat/mavzu1/Glasssariy/glossariy.pdf"
}
```

### 2.2. Test savollarini kiritish:
Har bir mavzuning ichidagi `quiz` bo'limiga istalgancha savollar qo'shishingiz mumkin:

```javascript
quiz: [
  {
    question: "Sterilizatsiya nima?",
    options: [
      "Barcha mikroorganizmlarni to'liq yo'qotish",  // 0-variant (To'g'ri)
      "Faqat changni artish",                        // 1-variant
      "Dori ichirish",                               // 2-variant
      "Bemor haroratini o'lchash"                    // 3-variant
    ],
    correct: 0, // To'g'ri javob indeksi (0 = birinchi variant)
    explanation: "Sterilizatsiya barcha patogen va spora hosil qiluvchi mikroblarni 100% yo'q qiladi."
  }
]
```

### 2.3. Yangi mavzu qo'shish:
Shunchaki `practicalTopics` (amaliy darslar) yoki `theoreticalTopics` (nazariy darslar) ro'yxatiga yangi blok qo'shib qo'ying. Sayt avtomatik ravishda:
- Yangi mavzuni katalogga joylaydi;
- Bosh sahifadagi hisoblagichlarni (statistika) avtomatik yangilaydi;
- Qidiruv tizimiga kiritadi!

---

## 🌟 3. Asosiy Imkoniyatlar

1. **Zamonaviy Tibbiy Dizayn**: Sapphire ko'k va tibbiy cyan ranglar palitrasi.
2. **Dark / Light Mode**: Foydalanuvchi xohishiga ko'ra tungi va kunduzgi rejim (xotirada saqlanadi).
3. **Jonli Qidiruv (Live Search)**: Talabalar mavzu raqamini yoki kalit so'zlarni kiritishi bilan natijalar zumda filtrlanadi.
4. **To'liq Ekran Darslik Darchasi**: Talaba "Mavzuni ochish" tugmasini bossa, 6 ta alohida tab ochiladi:
   - 📄 **Ma'ruza matni**: To'g'ridan-to'g'ri PDF o'qish va yuklab olish.
   - 🖥️ **Taqdimot / Slayd**: Interaktiv slayd ko'ruvchi.
   - 📝 **Interaktiv Test**: Variantlarni belgilash, to'g'ri/noto'g'ri javobni ko'rsatish va foizli baholash.
   - 🎬 **Video darslik**: Video rolikni tomosha qilish.
   - 🔬 **Didaktik resurslar**: Qo'shimcha PDF materiallar.
   - 📚 **Tibbiy Glossariy**: Mavzuga oid terminlar lug'ati.
5. **Malaka Guvohnomasi Modali**: O'qituvchining sertifikatini asl sifatda ko'rish va yuklab olish imkoniyati.
6. **Mundarija**: O'quv dasturi (mundarija1.pdf va mundarija2.pdf) to'liq ulangan.

---

## 🚀 4. Saytni Ishga Tushirish

Saytni ko'rish uchun `index.html` faylini istalgan brauzerda (Chrome, Edge, Firefox, Opera) ikki marta bosib ochishingiz kifoya. Internetga ehtiyoj yo'q, 100% oflayn rejimda ham to'liq ishlaydi!

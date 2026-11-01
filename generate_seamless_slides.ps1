# Seamless Executive Medical Illustrations Generator
# Transparent background, zero black boxes, 100% harmonized with presentation slide canvas

$dataPath = "data\course-data.js"
$slidesDir = "assets\images\slides"
if (-not (Test-Path $slidesDir)) {
    New-Item -ItemType Directory -Path $slidesDir -Force | Out-Null
}

$content = Get-Content -Raw $dataPath -Encoding utf8
$jsonStart = $content.IndexOf('{')
$jsonText = $content.Substring($jsonStart).TrimEnd(";", "`r", "`n", " ")
$parsed = $jsonText | ConvertFrom-Json

# Mavzular bo'yicha toifalar va ranglar
$themeStyles = @{
    "scale"     = @{ c1 = "#0284c7"; c2 = "#00f2fe"; label = "O'SISH MONITORINGI" }
    "lungs"     = @{ c1 = "#0ea5e9"; c2 = "#38bdf8"; label = "NAFAS SISTEMASI" }
    "heart"     = @{ c1 = "#e11d48"; c2 = "#fb7185"; label = "KARDIOLOGIYA" }
    "baby"      = @{ c1 = "#0d9488"; c2 = "#2dd4bf"; label = "NEONATOLOGIYA" }
    "stomach"   = @{ c1 = "#0284c7"; c2 = "#38bdf8"; label = "HAZM A'ZOLARI" }
    "kidney"    = @{ c1 = "#7c3aed"; c2 = "#a78bfa"; label = "NEFROLOGIYA" }
    "insulin"   = @{ c1 = "#0369a1"; c2 = "#38bdf8"; label = "ENDOKRINOLOGIYA" }
    "vaccine"   = @{ c1 = "#059669"; c2 = "#34d399"; label = "IMMUNIZATSIYA" }
    "cpr"       = @{ c1 = "#dc2626"; c2 = "#f87171"; label = "REANIMATSIYA" }
    "trauma"    = @{ c1 = "#2563eb"; c2 = "#60a5fa"; label = "TRAVMATOLOGIYA" }
    "blood"     = @{ c1 = "#be123c"; c2 = "#f43f5e"; label = "GEMATOLOGIYA" }
    "general"   = @{ c1 = "#0284c7"; c2 = "#38bdf8"; label = "HAMSHIRALIK ISHI" }
}

function Get-TopicCategory($topicNum, $cat) {
    if ($topicNum -eq 1) { return "scale" }
    if ($topicNum -eq 2) { return "lungs" }
    if ($topicNum -eq 3) { return "stomach" }
    if ($topicNum -in 4, 8, 9) { return "baby" }
    if ($topicNum -in 6, 7) { return "baby" }
    if ($topicNum -in 11, 12) { return "lungs" }
    if ($topicNum -eq 13) { return "heart" }
    if ($topicNum -in 14, 15) { return "stomach" }
    if ($topicNum -eq 16) { return "blood" }
    if ($topicNum -eq 17) { return "blood" }
    if ($topicNum -eq 18) { return "insulin" }
    if ($topicNum -in 19, 20) { return "kidney" }
    if ($topicNum -in 21, 22, 23, 24, 25, 26) { return "vaccine" }
    if ($topicNum -in 27, 28, 29, 30) { return "cpr" }
    if ($topicNum -in 31, 32, 33) { return "trauma" }
    return "general"
}

# 100% SHAFFOF (TRANSPARENT) VIZUAL KOMPOZITSIYALAR
function Build-SeamlessArt($catKey, $stepIdx) {
    $info = $themeStyles[$catKey]
    $c1 = $info.c1
    $c2 = $info.c2
    $lbl = $info.label

    # Asosiy grafik element (Har xil mavzular uchun aniq tibbiy 3D/vektor ob'ektlar)
    $artContent = ""
    switch ($catKey) {
        "scale" {
            # O'sish shkalasi, santimetr va elektron tarozi
            $artContent = @"
        <!-- Antropometriya kompozitsiyasi -->
        <g transform="translate(190, 140)">
          <!-- Fon nurlari -->
          <circle cx="60" cy="60" r="110" fill="$c1" opacity="0.12" filter="url(#glowF)"/>
          
          <!-- Bo'y o'lchash vertikal shkalasi -->
          <rect x="-80" y="-70" width="28" height="250" rx="8" fill="url(#grad1)" opacity="0.85"/>
          <line x1="-80" y1="-40" x2="-62" y2="-40" stroke="#ffffff" stroke-width="3"/>
          <line x1="-80" y1="-10" x2="-68" y2="-10" stroke="#ffffff" stroke-width="2"/>
          <line x1="-80" y1="20" x2="-62" y2="20" stroke="#ffffff" stroke-width="3"/>
          <line x1="-80" y1="50" x2="-68" y2="50" stroke="#ffffff" stroke-width="2"/>
          <line x1="-80" y1="80" x2="-62" y2="80" stroke="#ffffff" stroke-width="3"/>
          <line x1="-80" y1="110" x2="-68" y2="110" stroke="#ffffff" stroke-width="2"/>
          <line x1="-80" y1="140" x2="-62" y2="140" stroke="#ffffff" stroke-width="3"/>

          <!-- Dumaloq tarozi diski -->
          <circle cx="80" cy="50" r="75" fill="url(#grad2)" stroke="$c2" stroke-width="4"/>
          <circle cx="80" cy="50" r="62" fill="rgba(15,23,42,0.85)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
          
          <!-- Tarozi raqamlari va ko'rsatkichi -->
          <text x="80" y="38" fill="$c2" font-family="'Outfit', sans-serif" font-size="24" font-weight="800" text-anchor="middle">kg</text>
          <text x="80" y="68" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="800" text-anchor="middle">0.00</text>
          <path d="M80 50 L110 32" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round"/>
          <circle cx="80" cy="50" r="5" fill="#ffffff"/>

          <!-- Sentil egri chizig'i miniatyurasi -->
          <path d="M-30 140 Q 40 100, 160 50" fill="none" stroke="$c2" stroke-width="4" stroke-linecap="round"/>
          <circle cx="160" cy="50" r="7" fill="$c2" stroke="#ffffff" stroke-width="2"/>
        </g>
"@
        }
        "lungs" {
            # O'pka, bronxlar va stetoskop
            $artContent = @"
        <g transform="translate(200, 140)">
          <circle cx="50" cy="60" r="115" fill="$c1" opacity="0.14" filter="url(#glowF)"/>
          
          <!-- O'pka traxeyasi va bronxlar -->
          <path d="M50 -50 L50 15 M50 -10 L15 35 M50 -10 L85 35" stroke="#ffffff" stroke-width="7" stroke-linecap="round"/>
          
          <!-- Chap o'pka bo'lagi -->
          <path d="M35 25 C-5 25 -30 65 -30 115 C-30 160 10 180 40 155 C40 110 40 70 45 40 Z" fill="url(#grad1)" opacity="0.9" stroke="$c2" stroke-width="2"/>
          
          <!-- O'ng o'pka bo'lagi -->
          <path d="M65 25 C105 25 130 65 130 115 C130 160 90 180 60 155 C60 110 60 70 55 40 Z" fill="url(#grad2)" opacity="0.9" stroke="$c2" stroke-width="2"/>
          
          <!-- Alveolalar va nafas to'lqini -->
          <circle cx="-5" cy="100" r="12" fill="rgba(255,255,255,0.2)"/>
          <circle cx="105" cy="100" r="12" fill="rgba(255,255,255,0.2)"/>
          
          <!-- Nafas ritmi badge -->
          <g transform="translate(-10, 165)">
            <rect width="120" height="32" rx="16" fill="rgba(15,23,42,0.9)" stroke="$c2" stroke-width="1.5"/>
            <text x="60" y="21" fill="$c2" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" text-anchor="middle">40-45 ta/daq</text>
          </g>
        </g>
"@
        }
        "heart" {
            # Yurak, EKG kardiogramma va qon aylanish
            $artContent = @"
        <g transform="translate(200, 140)">
          <circle cx="50" cy="50" r="115" fill="$c1" opacity="0.15" filter="url(#glowF)"/>
          
          <!-- Katta 3D Yurak konturi -->
          <path d="M50 0 C15 -45 -55 -15 -55 45 C-55 110 50 165 50 165 C50 165 155 110 155 45 C155 -15 85 -45 50 0 Z" fill="url(#grad1)" stroke="#ffffff" stroke-width="3" opacity="0.92"/>
          
          <!-- EKG kardiogramma zarbi -->
          <path d="M-65 60 L-10 60 L5 25 L25 95 L45 35 L60 75 L75 60 L165 60" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="25" cy="95" r="5" fill="#ffffff"/>

          <!-- Puls me'yori nishoni -->
          <g transform="translate(-10, 175)">
            <rect width="120" height="32" rx="16" fill="rgba(15,23,42,0.9)" stroke="$c2" stroke-width="1.5"/>
            <text x="60" y="21" fill="$c2" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" text-anchor="middle">120-140 ur/daq</text>
          </g>
        </g>
"@
        }
        "baby" {
            # Chaqaloq, beshik / kuvez va neonatal parvarish
            $artContent = @"
        <g transform="translate(190, 130)">
          <circle cx="60" cy="60" r="115" fill="$c1" opacity="0.14" filter="url(#glowF)"/>
          
          <!-- Chaqaloq kuvez/beshik shisha gumbazi -->
          <path d="M-40 130 C-40 20 160 20 160 130 Z" fill="url(#grad1)" opacity="0.25" stroke="$c2" stroke-width="3"/>
          <rect x="-50" y="125" width="220" height="25" rx="10" fill="url(#grad2)"/>
          
          <!-- Chaqaloq silueti -->
          <circle cx="60" cy="65" r="32" fill="url(#grad1)"/>
          <circle cx="50" cy="62" r="4" fill="#ffffff"/>
          <circle cx="70" cy="62" r="4" fill="#ffffff"/>
          <path d="M52 75 Q60 84 68 75" stroke="#ffffff" stroke-width="3" fill="none" stroke-linecap="round"/>
          <path d="M25 115 C25 90 95 90 95 115 Z" fill="#ffffff" opacity="0.9"/>

          <!-- T harorat va kislorod ko'rsatkichi -->
          <g transform="translate(5, 160)">
            <rect width="110" height="30" rx="15" fill="rgba(15,23,42,0.9)" stroke="$c2" stroke-width="1.5"/>
            <text x="55" y="20" fill="$c2" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" text-anchor="middle">+36.5 ... +37°C</text>
          </g>
        </g>
"@
        }
        "vaccine" {
            # Steril vaksina flakoni va shprits
            $artContent = @"
        <g transform="translate(190, 130)">
          <circle cx="60" cy="60" r="115" fill="$c1" opacity="0.14" filter="url(#glowF)"/>
          
          <!-- Himoya qalqoni (Immunitet) -->
          <path d="M60 -30 L150 15 C150 110 95 155 60 175 C25 155 -30 110 -30 15 Z" fill="url(#grad1)" opacity="0.25" stroke="$c2" stroke-width="3"/>
          
          <!-- Shprits -->
          <rect x="48" y="-10" width="24" height="110" rx="8" fill="url(#grad2)" stroke="#ffffff" stroke-width="3"/>
          <line x1="60" y1="100" x2="60" y2="155" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
          <path d="M40 -10 L80 -10 M50 -25 L70 -25 M60 -25 L60 -10" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
          
          <!-- O'lchov chiziqchalari -->
          <line x1="53" y1="20" x2="65" y2="20" stroke="#ffffff" stroke-width="2.5"/>
          <line x1="53" y1="45" x2="65" y2="45" stroke="#ffffff" stroke-width="2.5"/>
          <line x1="53" y1="70" x2="65" y2="70" stroke="#ffffff" stroke-width="2.5"/>

          <!-- Aseptika nishoni -->
          <g transform="translate(10, 165)">
            <rect width="100" height="30" rx="15" fill="rgba(15,23,42,0.9)" stroke="$c2" stroke-width="1.5"/>
            <text x="50" y="20" fill="$c2" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" text-anchor="middle">&#10003; STERIL 100%</text>
          </g>
        </g>
"@
        }
        "cpr" {
            # Ambu qopi va Reanimatsiya
            $artContent = @"
        <g transform="translate(190, 130)">
          <circle cx="60" cy="60" r="115" fill="$c1" opacity="0.15" filter="url(#glowF)"/>
          
          <!-- Ambu qopi sferasi -->
          <ellipse cx="60" cy="50" rx="75" ry="50" fill="url(#grad1)" stroke="#ffffff" stroke-width="3"/>
          <rect x="-30" y="38" width="40" height="24" rx="6" fill="url(#grad2)"/>
          <rect x="110" y="38" width="40" height="24" rx="6" fill="url(#grad2)"/>
          
          <!-- Nafas niqobi -->
          <path d="M140 20 C185 30 185 70 140 80 Z" fill="rgba(255,255,255,0.3)" stroke="$c2" stroke-width="2.5"/>

          <!-- 30:2 reanimatsiya nisbati -->
          <g transform="translate(0, 160)">
            <rect width="120" height="32" rx="16" fill="rgba(15,23,42,0.9)" stroke="$c2" stroke-width="1.5"/>
            <text x="60" y="22" fill="$c2" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" text-anchor="middle">30 : 2 ALGORITM</text>
          </g>
        </g>
"@
        }
        default {
            # Universal tibbiy stetoskop va shifo nuri
            $artContent = @"
        <g transform="translate(190, 130)">
          <circle cx="60" cy="60" r="115" fill="$c1" opacity="0.14" filter="url(#glowF)"/>
          
          <!-- Tibbiy emblema (Katta geraldik xoch) -->
          <rect x="42" y="-10" width="36" height="130" rx="16" fill="url(#grad1)"/>
          <rect x="-5" y="37" width="130" height="36" rx="16" fill="url(#grad1)"/>
          <circle cx="60" cy="55" r="28" fill="url(#grad2)" stroke="#ffffff" stroke-width="3"/>
          
          <!-- Stetoskop olivi -->
          <circle cx="60" cy="55" r="14" fill="#ffffff"/>

          <!-- Klinik protokol nishoni -->
          <g transform="translate(0, 165)">
            <rect width="120" height="30" rx="15" fill="rgba(15,23,42,0.9)" stroke="$c2" stroke-width="1.5"/>
            <text x="60" y="20" fill="$c2" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" text-anchor="middle">&#9733; KLINIK STANDART</text>
          </g>
        </g>
"@
        }
    }

    $svg = @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 420" width="520" height="420">
  <defs>
    <!-- Shaffof fonga mos gradientlar -->
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="$c1"/>
      <stop offset="100%" stop-color="$c2"/>
    </linearGradient>
    <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="$c2"/>
      <stop offset="100%" stop-color="$c1"/>
    </linearGradient>
    <filter id="glowF" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="16" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- 100% SHAFFOF FON: HECH QANDAY TO'RTBURCHAK QORA FON YO'Q! -->
  
  <!-- Yorituvchi nafis ambient nur -->
  <circle cx="260" cy="210" r="150" fill="$c1" opacity="0.12" filter="url(#glowF)"/>

  <!-- Asosiy 3D Vektor Tibbiy Kompozitsiya -->
  $artContent

  <!-- Yuqori qismdagi nafis tibbiy yorliq -->
  <g transform="translate(260, 30)">
    <rect x="-80" y="0" width="160" height="28" rx="14" fill="rgba(56,189,248,0.12)" stroke="$c2" stroke-width="1.2"/>
    <text x="0" y="19" fill="$c2" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" letter-spacing="1" text-anchor="middle">$lbl</text>
  </g>
</svg>
"@
    return $svg
}

# 315 ta yangi shaffof va uyg'unlashgan SVG rasmlarni yaratish
$allTopics = @($parsed.practicalTopics) + @($parsed.theoreticalTopics)
$total = 0

foreach ($topic in $allTopics) {
    $tId = $topic.id
    $tNum = $topic.number
    $catKey = Get-TopicCategory -topicNum $tNum -cat $topic.category

    $slideIdx = 1
    foreach ($slide in $topic.slides) {
        $fileName = "$tId-slayd-$slideIdx.svg"
        $filePath = Join-Path $slidesDir $fileName
        $svgData = Build-SeamlessArt -catKey $catKey -stepIdx $slideIdx
        [System.IO.File]::WriteAllText($filePath, $svgData, [System.Text.Encoding]::UTF8)
        $total++
        $slideIdx++
    }
}

Write-Host "Muvaffaqiyatli yakunlandi! Jami $total ta slayd rasmlari 100% shaffof va slaydga to'liq uyg'unlashgan holatga keltirildi!"

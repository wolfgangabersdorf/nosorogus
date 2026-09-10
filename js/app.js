/**
 * Nosorogus Android Developer Landing Page
 * Interactive Client Logic & Bilingual Engine (RU / EN)
 */

document.addEventListener("DOMContentLoaded", () => {
  // Translations Dictionary
  const translations = {
    ru: {
      site_title: "Nosorogus — Разработчик Android приложений и игр",
      brand_name: "Nosorogus",
      nav_apps: "Игры и приложения",
      nav_craft: "О разработке",
      nav_about: "Студия",
      btn_playstore: "Google Play",
      
      hero_badge: "Официальный разработчик Google Play",
      hero_title: "Игры и полезные приложения с характером для Android",
      hero_lead: "Создаем отзывчивые мобильные игры и познавательные приложения. Интуитивное сенсорное управление, продуманная динамика и чистый визуальный стиль.",
      hero_cta_explore: "Смотреть каталог",
      hero_cta_store: "Профиль на Google Play",
      
      meta_platform: "Платформа",
      meta_platform_val: "Android OS",
      meta_titles: "Релизы",
      meta_titles_val: "2 проекта в Google Play",
      meta_category: "Категории",
      meta_category_val: "Игры & Семья",

      catalog_title: "Опубликованные проекты",
      filter_all: "Все проекты",
      filter_games: "Игры",
      filter_family: "Образование и семья",

      // Chef Challenge Game
      tag_featured_game: "Флагманская игра",
      tag_time_mgmt: "Тайм-менеджмент",
      tag_gesture: "Управление жестами",
      game_title: "Chef's Challenge: Meal Prep Sprint",
      game_subtitle: "Сможете ли вы выдержать неумолимую жару кухонного часа пик?",
      game_desc: "Динамичная кулинарная игра на время, где скорость, точность и стратегия определяют судьбу каждого заказа. Встаньте на линию, освойте приготовление пищи с помощью жестов, контролируйте температуру на нескольких конфорках и накормите голодных клиентов, прежде чем истечет время.",
      
      game_feat_1: "Интуитивное управление жестами: нарезайте, чистите, натирайте кубиками и взбивайте соусы",
      game_feat_2: "Контроль нескольких конфорок и духовок: готовьте одновременно, не допуская пригорания",
      game_feat_3: "Износ и модернизация посуды: обновляйте сковородки и переходите на 6-конфорочные профессиональные плиты",
      game_feat_4: "VIP-клиенты и неожиданные события: перебои со светом, счастливые часы и особые награды шефа",
      
      btn_get_game: "Установить из Google Play",
      btn_watch_trailer: "Смотреть трейлер",
      play_trailer_label: "Трейлер геймплея",

      // Solar System App
      tag_edu_app: "Познавательное приложение",
      tag_astronomy: "Астрономия",
      tag_interactive: "Интерактивный атлас",
      solar_title: "Our Solar System (Солнечная система)",
      solar_subtitle: "Простой и наглядный путеводитель по планетам нашего космического окружения",
      solar_desc: "Наглядное космическое приложение, помогающее исследовать планеты и спутники нашей Солнечной системы. Получайте ключевые научные факты с первого взгляда, сравнивайте масштабы миров и узнавайте законы космоса в легкой для восприятия форме.",
      
      solar_feat_1: "Полный атлас планет: от раскаленного Меркурия до ледяного Нептуна",
      solar_feat_2: "Ключевые астрономические параметры: диаметр, масса, расстояние от Солнца, периоды обращения и атмосфера",
      solar_feat_3: "Сравнительный анализ планет для понимания реальных масштабов космических объектов",
      solar_feat_4: "Чистый интерфейс без перегрузки, оптимизированный для комфортного изучения всей семьей",

      btn_get_solar: "Открыть в Google Play",
      btn_view_screens: "Смотреть скриншоты",

      // Craft Section
      craft_title: "Принципы нашей разработки",
      craft_1_title: "Тактильный отклик и жесты",
      craft_1_desc: "В играх мы уделяем особое внимание физике касаний: нарезка, перетаскивание и управление плитой ощущаются естественно и отзывчиво.",
      craft_2_title: "Оптимизация под экраны Android",
      craft_2_desc: "Плавная работа на смартфонах и планшетах различных диагоналей, поддержка современных соотношений сторон и стабильный фреймрейт.",
      craft_3_title: "Безопасность и семейный доступ",
      craft_3_desc: "Наши приложения создаются в соответствии с высокими стандартами Google Play Families: понятный интерфейс и уважение к приватности.",

      // CTA Box
      cta_title: "Следите за новыми релизами в Google Play",
      cta_lead: "Подписывайтесь на страницу разработчика Nosorogus, чтобы первыми получать обновления кулинарных баттлов и космических открытий.",
      cta_visit_store: "Перейти на страницу разработчика",

      // Lightbox & Footer Links
      lightbox_prev: "← Предыдущий",
      lightbox_next: "Следующий →",
      footer_top: "В начало",
      meta_desc: "Официальная страница разработчика Android приложений и мобильных игр Nosorogus на Google Play. Интерактивные кулинарные битвы и познавательные путеводители.",
      
      // Footer
      footer_desc: "Независимая студия разработки приложений и мобильных игр для экосистемы Android.",
      footer_nav_title: "Навигация",
      footer_legal_title: "Политика и контакты",
      footer_contact: "Поддержка разработчика",
      footer_privacy: "Политика конфиденциальности",
      footer_terms: "Условия использования",
      footer_rights: "Все права защищены."
    },
    en: {
      site_title: "Nosorogus — Android Apps & Games Developer",
      brand_name: "Nosorogus",
      nav_apps: "Apps & Games",
      nav_craft: "Craft & Philosophy",
      nav_about: "About Studio",
      btn_playstore: "Google Play",
      
      hero_badge: "Official Google Play Developer",
      hero_title: "Distinctive Android Games & Apps for Inquisitive Minds",
      hero_lead: "Crafting engaging mobile games and educational experiences. Intuitive gesture-based controls, crisp responsiveness, and refined visual craft.",
      hero_cta_explore: "Explore Releases",
      hero_cta_store: "Google Play Profile",

      meta_platform: "Platform",
      meta_platform_val: "Android OS",
      meta_titles: "Releases",
      meta_titles_val: "2 Active Google Play Titles",
      meta_category: "Genres",
      meta_category_val: "Simulation & Family",

      catalog_title: "Featured Releases",
      filter_all: "All Projects",
      filter_games: "Games",
      filter_family: "Education & Family",

      // Chef Challenge Game
      tag_featured_game: "Featured Game",
      tag_time_mgmt: "Time-Management",
      tag_gesture: "Gesture Mechanics",
      game_title: "Chef's Challenge: Meal Prep Sprint",
      game_subtitle: "Can you withstand the relentless heat of a kitchen rush hour?",
      game_desc: "A fast-paced time-management culinary battle where speed, precision, and station strategy determine each order's fate. Step onto the line, master intuitive gesture cooking, monitor multiple burner temps, and feed hungry guests before the clock expires.",
      
      game_feat_1: "Intuitive gesture cooking: slice, peel, dice, and whisk with natural tactile strokes",
      game_feat_2: "Multi-burner & oven management: balance pots and pans simultaneously without burning",
      game_feat_3: "Cookware wear & upgrades: clean stations, replace worn pans, and unlock 6-burner ranges",
      game_feat_4: "VIP rush orders & dynamic kitchen events: power outages, heat waves, and chef perk bonuses",
      
      btn_get_game: "Get on Google Play",
      btn_watch_trailer: "Watch Trailer",
      play_trailer_label: "Gameplay Trailer",

      // Solar System App
      tag_edu_app: "Educational App",
      tag_astronomy: "Astronomy",
      tag_interactive: "Interactive Guide",
      solar_title: "Our Solar System",
      solar_subtitle: "An accessible, visual handbook for exploring the planets of our cosmic neighborhood",
      solar_desc: "An intuitive astronomy companion designed to help explore planets and major celestial bodies. Access essential scientific facts at a glance, compare planetary scales, and grasp cosmic dynamics with clarity.",
      
      solar_feat_1: "Complete planetary atlas: from scorching Mercury to distant Neptune",
      solar_feat_2: "Key astronomical facts: size, mass, orbital distance, atmospheric composition, and moons",
      solar_feat_3: "Side-by-side comparative views to understand the true diversity of cosmic worlds",
      solar_feat_4: "Clean, uncluttered layout designed for enjoyable discovery by curious minds of all ages",

      btn_get_solar: "View on Google Play",
      btn_view_screens: "Explore Screenshots",

      // Craft Section
      craft_title: "Our Engineering & Design Pillars",
      craft_1_title: "Tactile & Gesture First",
      craft_1_desc: "We prioritize touch feel and responsiveness: chopping, stirring, and temperature adjustments feel immediate and natural.",
      craft_2_title: "Android Form-Factor Tuning",
      craft_2_desc: "Optimized performance across phones and tablets, handling variable screen aspect ratios with consistent 60+ FPS stability.",
      craft_3_title: "Family Standards & Safety",
      craft_3_desc: "Designed following Google Play Family standards: clear accessible interfaces, intuitive navigation, and respect for user privacy.",

      // CTA Box
      cta_title: "Follow New Releases on Google Play",
      cta_lead: "Stay tuned with Nosorogus on Google Play for new content updates, culinary challenges, and astronomy additions.",
      cta_visit_store: "Visit Developer Profile",

      // Lightbox & Footer Links
      lightbox_prev: "← Previous",
      lightbox_next: "Next →",
      footer_top: "Back to top",
      meta_desc: "Official Google Play developer page for Nosorogus Android apps and mobile games. Interactive culinary battles and educational astronomy guides.",

      // Footer
      footer_desc: "Indie game and app development studio built for the Android ecosystem.",
      footer_nav_title: "Navigation",
      footer_legal_title: "Legal & Inquiries",
      footer_contact: "Developer Contact",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms of Service",
      footer_rights: "All rights reserved."
    }
  };

  // Browser Language Detection Engine
  // Default is "en". If browser language is Russian ("ru", "ru-RU", etc.), select "ru".
  function detectBrowserLanguage() {
    var browserLangs = [];
    if (Array.isArray(navigator.languages)) {
      browserLangs.push.apply(browserLangs, navigator.languages);
    }
    if (navigator.language) {
      browserLangs.push(navigator.language);
    }
    if (navigator.userLanguage) {
      browserLangs.push(navigator.userLanguage);
    }

    var primary = browserLangs.length > 0 ? (browserLangs[0] || "").toLowerCase() : "";
    if (primary.indexOf("ru") === 0) {
      return "ru";
    }
    return "en";
  }

  function getInitialLanguage() {
    // Clear old legacy key from prior versions if present
    try {
      localStorage.removeItem("nosorogus_lang");
    } catch (e) {}

    // Check if user explicitly clicked a language button previously
    var userChoice = null;
    try {
      userChoice = localStorage.getItem("nosorogus_user_lang");
    } catch (e) {}

    if (userChoice === "ru" || userChoice === "en") {
      return userChoice;
    }

    return detectBrowserLanguage();
  }

  // State
  let currentLang = window.__initialLang || getInitialLanguage();

  // Elements
  const langBtns = document.querySelectorAll(".lang-btn");
  const i18nElements = document.querySelectorAll("[data-i18n]");
  const header = document.querySelector(".site-header");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-detail-card");

  // Modals
  const videoModal = document.getElementById("videoModal");
  const videoIframe = document.getElementById("videoIframe");
  const openTrailerBtns = document.querySelectorAll("[data-action='open-trailer']");
  const closeModalBtns = document.querySelectorAll(".modal-close-btn");

  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");

  // Screenshot Datasets for Lightbox
  const galleries = {
    kitchen: [
      {
        src: "https://play-lh.googleusercontent.com/-l5jb1qYa9L5R-wte5-qO3NkgxeoNcTKwvvzeikJghMP3q7ywrLA0n2DogERaCaWCA2mi20N1dUxJBRksZwwEw=w1200",
        caption: "Chef's Challenge: Meal Prep Sprint — Heat Management"
      },
      {
        src: "https://play-lh.googleusercontent.com/ZQTFDZg0wnFUINxkgqgSKH4jJZXCcxTao9QMz7tFGIU3ws2aMy2vLg_PzZIiMylhwB9dTwGalNgeB2VT5XAANQ=w1200",
        caption: "Chef's Challenge: Meal Prep Sprint — Multi-pot Cooking"
      },
      {
        src: "https://play-lh.googleusercontent.com/99C0Y0EUQDWsssT5qIOcctkIO3sghNTBR19XrVzAKpV6V6aI0rWkF4np0_XZiKJ3_fDEttWw-VNeV9j_M_MoLQ=w1200",
        caption: "Chef's Challenge: Meal Prep Sprint — Gesture Chopping"
      },
      {
        src: "https://play-lh.googleusercontent.com/E0F2nkF7a2VTii6-B6T2zRHaaAf5ANntlmnWhLiNQQXeX_j99NKdPLY9hjVHQkB91U_RUpvyuQK065oyenkluQ=w1200",
        caption: "Chef's Challenge: Meal Prep Sprint — Station Upgrades"
      },
      {
        src: "https://play-lh.googleusercontent.com/SGcZKuOoPICi6R8z7pJu3H_1Zc5a9HxyHHZkt4jkrkvV-iItL-IPrLlc93eoSdB9_fsk1aqgU--yf1Uwws9s-g=w1200",
        caption: "Chef's Challenge: Meal Prep Sprint — VIP Orders"
      },
      {
        src: "https://play-lh.googleusercontent.com/Slria2JqF65TE4OxD_mhYWu2Cfo9gfH9kOMzfVENk7n7ZtVL5H-5mmK1pvZ9HL_hdNq2Ue5E-35lzCujawcd=w1200",
        caption: "Chef's Challenge: Meal Prep Sprint — Wave Rush"
      }
    ],
    solar: [
      {
        src: "https://play-lh.googleusercontent.com/GHreWg9Y1E0jDkt6nU7h54cvNn60-coFVgLcMCffuuWs-PHa8eKhOMT9rZYp2P3cDQ0Z3GvTa7UCJQsXiaIslg=w1200",
        caption: "Our Solar System — Orbit & Planet Atlas"
      }
    ]
  };

  let activeGallery = [];
  let currentGalleryIndex = 0;

  // Language Switching Handler
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;

    i18nElements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    langBtns.forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    document.title = translations[lang].site_title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations[lang].meta_desc) {
      metaDesc.setAttribute("content", translations[lang].meta_desc);
    }
  }

  langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const chosen = btn.getAttribute("data-lang");
      try {
        localStorage.setItem("nosorogus_user_lang", chosen);
      } catch (e) {}
      setLanguage(chosen);
    });
  });

  // Apply initial detected or saved language
  setLanguage(currentLang);

  // Scroll Header Shadow
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });

  // Catalog Filters
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      productCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "grid";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Video Trailer Modal
  openTrailerBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const videoId = btn.getAttribute("data-video-id") || "Pl12tZ_HwWY";
      videoIframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
      videoModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  function closeAllModals() {
    videoModal.classList.remove("active");
    videoIframe.src = "";
    lightboxModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  closeModalBtns.forEach(btn => {
    btn.addEventListener("click", closeAllModals);
  });

  [videoModal, lightboxModal].forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    } else if (lightboxModal.classList.contains("active")) {
      if (e.key === "ArrowLeft") {
        navigateLightbox(-1);
      } else if (e.key === "ArrowRight") {
        navigateLightbox(1);
      }
    }
  });

  // Lightbox Functionality
  function openLightbox(galleryKey, index = 0) {
    activeGallery = galleries[galleryKey] || [];
    if (!activeGallery.length) return;
    currentGalleryIndex = index;
    updateLightbox();
    lightboxModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function updateLightbox() {
    const item = activeGallery[currentGalleryIndex];
    if (!item) return;
    lightboxImg.src = item.src;
    const hasMultiple = activeGallery.length > 1;
    lightboxCaption.textContent = hasMultiple
      ? `${item.caption} (${currentGalleryIndex + 1}/${activeGallery.length})`
      : item.caption;

    lightboxPrev.style.display = hasMultiple ? "flex" : "none";
    lightboxNext.style.display = hasMultiple ? "flex" : "none";
  }

  function navigateLightbox(direction) {
    if (!activeGallery.length) return;
    currentGalleryIndex = (currentGalleryIndex + direction + activeGallery.length) % activeGallery.length;
    updateLightbox();
  }

  lightboxPrev.addEventListener("click", () => navigateLightbox(-1));
  lightboxNext.addEventListener("click", () => navigateLightbox(1));

  // Thumbnail buttons click triggers
  document.querySelectorAll("[data-gallery]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const galleryKey = btn.getAttribute("data-gallery");
      const index = parseInt(btn.getAttribute("data-index") || "0", 10);
      openLightbox(galleryKey, index);
    });
  });
});

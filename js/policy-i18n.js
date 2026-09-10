/**
 * Nosorogus Subpages Bilingual Engine (RU / EN)
 * Handles full translations for Privacy Policy & Support pages
 */
(function() {
  const docTranslations = {
    ru: {
      crumb_home: "Главная",
      crumb_privacy: "Политика конфиденциальности",
      crumb_support: "Поддержка разработчика",

      // Privacy Page
      privacy_badge: "Официальный регламент разработчика",
      privacy_title: "Политика конфиденциальности",
      privacy_lead: "Настоящая Политика конфиденциальности описывает порядок обработки и защиты информации при использовании мобильных игр и приложений, опубликованных студией Nosorogus в магазине Google Play.",
      
      priv_sec1_title: "Общие положения и принципы",
      priv_sec1_p1: "Студия Nosorogus с уважением относится к праву пользователей на неприкосновенность частной жизни. Мы создаем мобильные игры с тактильным управлением и познавательные приложения, доступные и безопасные для всей семьи.",
      priv_sec1_p2: "Наш главный принцип: мы не собираем, не передаем, не продаем и не распространяем персональные данные пользователей. Вы можете свободно пользоваться нашими играми и приложениями без регистрации учетных записей или ввода личной информации.",

      priv_sec2_title: "Сбор данных и локальное хранилище устройства",
      priv_sec2_p1: "Персональные данные: ни одно из наших приложений (включая Chef's Challenge: Meal Prep Sprint и Our Solar System) не запрашивает и не отслеживает имена, телефонные номера, email, адреса проживания или точную геолокацию GPS.",
      priv_sec2_p2: "Игровой прогресс и локальные данные: все результаты уровней, рекорды, открытые рецепты, улучшения оборудования и настройки атласа сохраняются исключительно локально на вашем устройстве через стандартное защищенное хранилище Android. Эти данные не передаются на сторонние серверы.",
      priv_sec2_callout: "Полный локальный контроль: поскольку прогресс сохраняется локально на вашем устройстве, очистка данных приложения или его удаление в настройках Android сбросит локальные сохранения.",

      priv_sec3_title: "Безопасность детей (Google Play Families)",
      priv_sec3_p1: "Наш астрономический атлас Our Solar System и кулинарная аркада Chef's Challenge разработаны с учетом стандартов безопасности для пользователей всех возрастов.",
      priv_sec3_p2: "Мы строго следуем требованиям COPPA и регламенту Google Play Families. Мы сознательно не собираем никаких персональных данных детей младше 13 лет (или иного возраста, установленного местным законодательством). При любых вопросах родители могут незамедлительно обратиться к разработчику.",

      priv_sec4_title: "Диагностика и сторонние платформы",
      priv_sec4_p1: "Google Play Services: приложения распространяются через магазин Google Play. Сервисы Google могут собирать агрегированную обезличенную техническую информацию (модель устройства, версия OS, параметры производительности и обезличенные отчеты об ошибках) через Google Play Console для устранения неполадок.",
      priv_sec4_p2: "Встроенные медиа: на веб-сайте могут отображаться официальные видеоролики трейлеров с видеохостинга YouTube. Их просмотр доброволен и регулируется политикой конфиденциальности сервисов Google / YouTube.",

      priv_sec5_title: "Разрешения приложений Android",
      priv_sec5_p1: "Наши приложения запрашивают исключительно минимально необходимые системные разрешения Android:",
      priv_perm_1: "Интернет и состояние сети: используется исключительно для перехода на страницу приложения в магазине Google Play и проверки официальных обновлений.",
      priv_perm_2: "Тактильный отклик / Вибрация: используется в Chef's Challenge для реалистичной отдачи при нарезке продуктов, взбивании и контроле конфорок.",

      priv_sec6_title: "Управление данными и удаление",
      priv_sec6_p1: "Поскольку мы не храним персональную информацию на удаленных серверах, пользователь сохраняет полный контроль над данными прямо на своем смартфоне или планшете.",
      priv_sec6_p2: "Для удаления всех локальных данных приложения в любое время:",
      priv_del_1: "Откройте Настройки Android на вашем устройстве.",
      priv_del_2: "Перейдите в раздел Приложения и уведомления → выберите соответствующее приложение Nosorogus.",
      priv_del_3: "Нажмите Хранилище и кэш → выберите Очистить хранилище / Стереть данные.",

      priv_sec7_title: "Обновления регламента и контакты",
      priv_sec7_p1: "Политика конфиденциальности может обновляться при выходе новых версий или изменении требований регуляторов. Все изменения публикуются на этой странице с указанием даты ревизии.",
      priv_sec7_p2: "По любым вопросам конфиденциальности вы можете связаться с нами:",
      priv_contact_label: "Поддержка разработчика:",
      priv_contact_link: "Перейти на страницу поддержки",

      // Support Page
      support_badge: "Прямая связь со студией",
      support_title: "Поддержка разработчика и контакты",
      support_lead: "Возникли вопросы по механике игр, нужна помощь в работе приложения на вашем устройстве или хотите предложить идею? Мы на связи и готовы помочь.",
      
      contact_card1_label: "Служба поддержки",
      contact_card1_sub: "Прямой почтовый ящик разработчика для сообщений об ошибках, вопросов и идей",
      contact_card2_label: "Официальный магазин",
      contact_card2_sub: "Следите за обновлениями, оценками и описанием релизов",
      contact_card3_label: "Охват",
      contact_card3_val: "Глобальная поддержка",
      contact_card3_sub: "Консультации на русском и английском языках",

      supp_sec1_title: "Помощь по приложениям и частые вопросы",
      supp_sec1_p1: "Ответы на популярные вопросы по нашим играм и приложениям:",
      faq1_q: "Chef's Challenge: как работает управление жестами?",
      faq1_a: "Игра использует сенсорные жесты Android: быстрые короткие свайпы по разделочной доске шинкуют ингредиенты, круговые движения перемешивают соусы, а касания переключают мощность конфорок. Убедитесь, что экран чист и сторонние приложения не перехватывают мультитач.",
      faq2_q: "Как сохраняется игровой прогресс?",
      faq2_a: "Ваши достижения, открытая посуда, прокачанные кухонные станции и рекорды сохраняются автоматически в защищенном локальном хранилище устройства после каждой кулинарной смены.",
      faq3_q: "Our Solar System: откуда берутся астрономические данные?",
      faq3_a: "Все научные параметры — диаметры планет, периоды обращения, расстояния, параметры атмосферы и количество спутников — собраны из проверенных астрономических баз данных и бюллетеней космических агентств (NASA / JPL).",
      faq4_q: "Поддерживаются ли планшеты и игра без интернета?",
      faq4_a: "Да! И Chef's Challenge, и Our Solar System полностью адаптированы под экраны планшетов и складных устройств, и полноценно работают в автономном режиме без подключения к сети.",

      supp_sec2_title: "Как отправить отчет об ошибке",
      supp_sec2_p1: "Если вы столкнулись со сбоем или графической ошибкой, краткое описание поможет выпустить исправление быстрее:",
      supp_step_1: "Название и версия приложения: укажите приложение и версию из Google Play.",
      supp_step_2: "Модель устройства и версия Android: например, Samsung Galaxy S23 или Xiaomi Pad на Android 13/14.",
      supp_step_3: "Шаги для воспроизведения: какие действия привели к ошибке (например, «во время 4-й волны заказов»).",
      supp_step_4: "Скриншот (по возможности): снимок экрана ускоряет диагностику.",

      supp_sec3_title: "Предложения и отзывы",
      supp_sec3_p1: "Мы открыты для предложений игроков и любителей космоса! Новые рецепты, механики готовки, космические объекты — присылайте ваши идеи на наш email.",
      supp_sec3_callout: "Мы читаем каждое письмо и учитываем пожелания игроков при планировании обновлений.",

      supp_sec4_title: "Поддержка разработчиков",
      supp_sec4_p1: "Вы можете поддержать разработчиков и дальнейшее развитие независимых мобильных игр и образовательных проектов через криптовалюту Monero (XMR). Все средства идут на разработку новых механик, контента и поддержание приложений без агрессивной рекламы.",
      supp_crypto_network: "Официальный кошелек XMR",
      btn_copy_address: "Копировать адрес",
      supp_crypto_footer: "Прямая поддержка разработчиков без платформенных комиссий и посредников. Спасибо за ваш вклад в развитие независимых проектов!"
    },
    en: {
      crumb_home: "Home",
      crumb_privacy: "Privacy Policy",
      crumb_support: "Developer Support",

      // Privacy Page
      privacy_badge: "Official Developer Policy",
      privacy_title: "Privacy Policy",
      privacy_lead: "This Privacy Policy describes our practices regarding the collection, use, and disclosure of information when you use mobile games and applications published by Nosorogus on Google Play.",
      
      priv_sec1_title: "Overview & Philosophy",
      priv_sec1_p1: "At Nosorogus, we are committed to respecting and protecting the privacy of our players and users. We develop engaging, tactile mobile games and educational experiences designed to be accessible, safe, and family-friendly.",
      priv_sec1_p2: "Our guiding principle is simple: we do not collect, harvest, sell, or trade your personal information. You can enjoy our games and applications without creating an account, registering personal profiles, or disclosing private data.",

      priv_sec2_title: "Information Collection & Device Storage",
      priv_sec2_p1: "Personal Data: None of our applications (including Chef's Challenge: Meal Prep Sprint and Our Solar System) request, track, or transmit personal data such as names, phone numbers, email addresses, physical addresses, or precise GPS locations.",
      priv_sec2_p2: "Gameplay and Local Data: All game states, high scores, kitchen upgrades, and atlas view settings are stored locally on your device via standard Android internal storage. This data never leaves your device and is not sent to external proprietary servers.",
      priv_sec2_callout: "Local Control: Because your gameplay progress is saved locally, clearing app data or uninstalling the app from your Android settings will remove locally stored progress.",

      priv_sec3_title: "Children's Privacy (Google Play Families Compliance)",
      priv_sec3_p1: "Our educational guide Our Solar System and our culinary arcade Chef's Challenge are designed to be safe for family members and curious minds of all ages.",
      priv_sec3_p2: "We strictly comply with the Children's Online Privacy Protection Act (COPPA) and Google Play Families Policy standards. We do not knowingly collect or solicit any personal information from children under the age of 13 (or higher as required by applicable national law). If a parent or guardian believes their child has somehow provided information, please contact us immediately for prompt deletion.",

      priv_sec4_title: "Diagnostics, Telemetry & Third-Party Platforms",
      priv_sec4_p1: "Google Play Services: Our apps are distributed through the Google Play Store. Google may collect standard aggregated, anonymized technical telemetry (such as device model, OS version, performance benchmarks, and anonymized stack traces when a crash occurs) via Google Play Console to help us identify software bugs and improve stability. This telemetry is governed by Google's Privacy Policy.",
      priv_sec4_p2: "Embedded Media: On our website, we may embed video gameplay trailers hosted on YouTube. Viewing these trailers is optional and subject to YouTube / Google's privacy terms.",

      priv_sec5_title: "Android App Permissions",
      priv_sec5_p1: "Our applications request only the minimum system permissions necessary to operate:",
      priv_perm_1: "Internet & Network State: Used exclusively to check connectivity for opening the official Google Play store listing or loading optional update notices.",
      priv_perm_2: "Haptic Feedback / Vibration: Used in Chef's Challenge to provide tactile physical response when chopping ingredients, flipping pans, or reaching critical cooking temperatures.",

      priv_sec6_title: "Data Retention, User Rights & Deletion",
      priv_sec6_p1: "Because we do not maintain remote databases containing personal user records, you retain complete physical control over your data directly on your device.",
      priv_sec6_p2: "To delete all local data associated with any of our apps at any time:",
      priv_del_1: "Open your device's Android Settings.",
      priv_del_2: "Navigate to Apps & Notifications → select the respective Nosorogus app.",
      priv_del_3: "Tap Storage & Cache → choose Clear Storage / Clear Data.",

      priv_sec7_title: "Changes to This Policy & Contact Information",
      priv_sec7_p1: "We may periodically update our Privacy Policy to reflect app updates, new releases, or regulatory changes. Any modifications will be posted directly to this page with an updated revision date.",
      priv_sec7_p2: "If you have questions, feedback, or inquiries regarding our privacy standards, please reach out through our official support channel:",
      priv_contact_label: "Developer Support:",
      priv_contact_link: "Visit Developer Support Page",

      // Support Page
      support_badge: "Direct Studio Assistance",
      support_title: "Developer Support & Contact",
      support_lead: "Have questions regarding our gameplay mechanics, need assistance with your device, or want to suggest an improvement? We are here to help you get the most out of our releases.",
      
      contact_card1_label: "Support Inquiry",
      contact_card1_sub: "Direct developer mailbox for bugs, questions, and ideas",
      contact_card2_label: "Official Store",
      contact_card2_sub: "Check store updates, release notes, and ratings",
      contact_card3_label: "Coverage",
      contact_card3_val: "Global Support",
      contact_card3_sub: "Bilingual support in English and Russian",

      supp_sec1_title: "App Assistance & Quick Help",
      supp_sec1_p1: "Find answers to commonly asked questions about our titles:",
      faq1_q: "Chef's Challenge: How does gesture cooking work?",
      faq1_a: "Chef's Challenge uses tactile gesture swipes. Rapid short swipes on the cutting board slice ingredients, circular motions stir pots, and taps adjust flame burner levels. Ensure your screen is clean and multi-touch gestures aren't blocked by third-party navigation overlays.",
      faq2_q: "How is my game progress saved?",
      faq2_a: "Your kitchen progression, unlocked stoves, cookware upgrades, and high scores are saved locally in internal Android storage automatically after each prep shift or stage completion.",
      faq3_q: "Our Solar System: What sources are used for planetary data?",
      faq3_a: "All celestial data — including planetary diameters, orbital periods, semi-major axes, atmospheric compositions, and moon counts — are curated from verified astronomical repositories and space agency reference catalogs (NASA / JPL planetary factsheets).",
      faq4_q: "Do your apps support tablets, foldables, and offline play?",
      faq4_a: "Yes! Both Chef's Challenge and Our Solar System are optimized to adapt smoothly to tablet aspect ratios and foldable displays, and both function completely offline without requiring an active internet connection.",

      supp_sec2_title: "How to Report a Bug or Issue",
      supp_sec2_p1: "If you encounter an unexpected crash, visual glitch, or performance stutter, sending us a brief report helps us release an update swiftly:",
      supp_step_1: "App Name & Version: State which app and the installed version (visible in Google Play or Android App Info).",
      supp_step_2: "Device Model & OS: E.g., Samsung Galaxy S23, Google Pixel 8, or Xiaomi Pad running Android 13/14.",
      supp_step_3: "Steps to Reproduce: What actions were taken right before the issue occurred (e.g., \"during rush hour wave 4\", \"when tapping Neptune comparison view\").",
      supp_step_4: "Screenshots or Screen Recording (Optional): If visual, attaching a quick screenshot helps diagnose issues immediately.",

      supp_sec3_title: "Feature Requests & Suggestions",
      supp_sec3_p1: "We love hearing from passionate cooks and space enthusiasts! Whether you want new recipes, custom kitchen stations, deeper planetary atmosphere layers, or new astronomical objects, send your ideas to our mailbox.",
      supp_sec3_callout: "We review every piece of feedback and prioritize upcoming features and balance tweaks based on player suggestions.",

      supp_sec4_title: "Support the Developers",
      supp_sec4_p1: "You can support the developers and the future development of our indie games and apps via Monero (XMR). All contributions directly fund new game content, physics optimizations, and ad-free educational tools.",
      supp_crypto_network: "Official XMR Donation Wallet",
      btn_copy_address: "Copy Address",
      supp_crypto_footer: "Direct peer-to-peer developer support without platform intermediaries. Thank you for keeping indie apps alive!"
    }
  };

  function applyDocTranslations(lang) {
    if (!docTranslations[lang]) return;
    const dict = docTranslations[lang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update page title
    if (document.querySelector(".doc-title")) {
      const titleKey = document.querySelector(".doc-title").getAttribute("data-i18n");
      if (titleKey && dict[titleKey]) {
        document.title = `${dict[titleKey]} — Nosorogus`;
      }
    }
  }

  // Hook into language switcher buttons
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      applyDocTranslations(lang);
    });
  });

  // Setup copy address button
  function initCopyButton() {
    const copyBtn = document.getElementById("btnCopyXmr");
    const addrField = document.getElementById("xmrAddressText");
    if (!copyBtn || !addrField) return;

    copyBtn.addEventListener("click", async () => {
      const textToCopy = addrField.textContent.trim();
      let copied = false;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(textToCopy);
          copied = true;
        }
      } catch (e) {
        // Fallback below
      }

      if (!copied) {
        try {
          const textarea = document.createElement("textarea");
          textarea.value = textToCopy;
          textarea.style.position = "fixed";
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
          copied = true;
        } catch (err) {
          console.error("Copy failed:", err);
        }
      }

      if (copied) {
        const currentLang = document.documentElement.lang || "en";
        copyBtn.textContent = currentLang === "ru" ? "Скопировано! ✓" : "Copied! ✓";
        copyBtn.classList.add("copied");
        setTimeout(() => {
          const dict = docTranslations[document.documentElement.lang] || docTranslations.en;
          copyBtn.textContent = dict.btn_copy_address || "Copy Address";
          copyBtn.classList.remove("copied");
        }, 2200);
      }
    });
  }

  // Apply on load based on document lang or initial detection
  document.addEventListener("DOMContentLoaded", () => {
    const activeLang = document.documentElement.lang || (window.__initialLang || "en");
    applyDocTranslations(activeLang);
    initCopyButton();
  });
})();

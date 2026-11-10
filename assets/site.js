(() => {
  "use strict";

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const language = new URLSearchParams(window.location.search).get("lang");
  if (["fr", "de", "es"].includes(language)) {
    document.querySelectorAll("[data-localized-link]").forEach((link) => {
      const url = new URL(link.href);
      url.searchParams.set("lang", language);
      link.href = url.href;
    });
  }

  const languagePicker = document.querySelector("[data-language-picker]");
  if (languagePicker) {
    const currentLanguage = document.documentElement.lang === "ja" ? "ja" : (language || "en");
    languagePicker.value = ["ja", "en", "fr", "de", "es"].includes(currentLanguage) ? currentLanguage : "en";
    languagePicker.addEventListener("change", () => {
      const language = languagePicker.value;
      const page = languagePicker.dataset.page;
      const paths = { product: "/handball-analyzer/", support: "/handball-analyzer/support/" };
      const path = paths[page] || "/";
      if (language === "ja") {
        window.location.href = path;
        return;
      }
      const destination = `/en${path}`;
      window.location.href = language === "en" ? destination : `${destination}?lang=${language}`;
    });
  }

})();

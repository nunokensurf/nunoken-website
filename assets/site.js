(() => {
  "use strict";

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const languagePicker = document.querySelector("[data-language-picker]");
  if (languagePicker) {
    const params = new URLSearchParams(window.location.search);
    const currentLanguage = document.documentElement.lang === "ja" ? "ja" : (params.get("lang") || "en");
    languagePicker.value = ["ja", "en", "fr", "de", "es"].includes(currentLanguage) ? currentLanguage : "en";
    languagePicker.addEventListener("change", () => {
      const language = languagePicker.value;
      const page = languagePicker.dataset.page;
      if (language === "ja") {
        window.location.href = page === "product" ? "/handball-analyzer/" : "/";
        return;
      }
      const destination = page === "product" ? "/en/handball-analyzer/" : "/en/";
      window.location.href = language === "en" ? destination : `${destination}?lang=${language}`;
    });
  }

})();

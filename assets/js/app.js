(function () {
  const config = window.KFPM_SITE_CONFIG || {};
  const modules = window.KFPM_MODULES || [];
  const moduleGrid = document.getElementById("moduleGrid");
  const moduleCount = document.getElementById("moduleCount");
  const accessForm = document.getElementById("accessForm");
  const emailInput = document.getElementById("email");
  const accessMessage = document.getElementById("accessMessage");
  const participantDriveLink = document.getElementById("participantDriveLink");
  const filters = Array.from(document.querySelectorAll("[data-filter]"));

  if (participantDriveLink && config.participantDriveUrl) {
    participantDriveLink.href = config.participantDriveUrl;
  }

  function normalizeEmail(value) {
    return String(value || "").trim().toLowerCase();
  }

  function renderModules(filter) {
    const selected = filter || "all";
    const visibleModules = modules.filter((module) => selected === "all" || module.category === selected);

    moduleGrid.innerHTML = visibleModules.map((module) => {
      const pending = module.status !== "disponible";
      return `
        <article class="module-card">
          <h3>${module.title}</h3>
          <p>${module.summary}</p>
          <div class="module-meta">
            <span class="pill">${module.category}</span>
            <span class="pill">${module.duration}</span>
            <span class="pill ${pending ? "pending" : ""}">${module.status}</span>
          </div>
        </article>
      `;
    }).join("");

    moduleCount.textContent = modules.length + " modules references";
  }

  accessForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = normalizeEmail(emailInput.value);
    const requestEmail = config.requestAccessEmail || "";
    const subject = encodeURIComponent("Demande d'acces Formation IA KFPM");
    const body = encodeURIComponent("Bonjour,\n\nJe souhaite demander l'acces aux supports reserves de la Formation IA KFPM.\n\nEmail : " + email + "\nNom : \nRole : \nNom d'utilisateur GitHub : \n\nMerci.");
    accessMessage.innerHTML = "<a href=\"mailto:" + requestEmail + "?subject=" + subject + "&body=" + body + "\">Ouvrir la demande d'acces</a>. Votre adresse n'est pas stockee par ce site.";
  });

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((filter) => filter.classList.remove("active"));
      button.classList.add("active");
      renderModules(button.dataset.filter);
    });
  });

  renderModules("all");
}());

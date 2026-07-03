(function () {
  const config = window.KFPM_SITE_CONFIG || {};
  const modules = window.KFPM_MODULES || [];
  const accessKey = "kfpmFormationAccess";

  const moduleGrid = document.getElementById("moduleGrid");
  const moduleCount = document.getElementById("moduleCount");
  const accessForm = document.getElementById("accessForm");
  const emailInput = document.getElementById("email");
  const accessMessage = document.getElementById("accessMessage");
  const resetAccess = document.getElementById("resetAccess");
  const filters = Array.from(document.querySelectorAll("[data-filter]"));
  const protectedSections = Array.from(document.querySelectorAll("[data-protected]"));

  function normalizeEmail(value) {
    return String(value || "").trim().toLowerCase();
  }

  function getDomain(email) {
    return email.includes("@") ? email.split("@").pop() : "";
  }

  function isAuthorized(email) {
    const normalized = normalizeEmail(email);
    const domain = getDomain(normalized);
    return (config.allowedEmails || []).includes(normalized) ||
      (config.allowedDomains || []).includes(domain);
  }

  function setAccess(email) {
    localStorage.setItem(accessKey, JSON.stringify({
      email,
      date: new Date().toISOString()
    }));
  }

  function clearAccess() {
    localStorage.removeItem(accessKey);
  }

  function currentAccess() {
    try {
      return JSON.parse(localStorage.getItem(accessKey) || "null");
    } catch (error) {
      return null;
    }
  }

  function updateAccessState() {
    const access = currentAccess();
    const authorized = Boolean(access && isAuthorized(access.email));

    protectedSections.forEach((section) => {
      section.classList.toggle("locked", !authorized);
    });

    if (authorized) {
      accessMessage.textContent = "Acces actif pour " + access.email + ".";
      emailInput.value = access.email;
    }

    return authorized;
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

    if (isAuthorized(email)) {
      setAccess(email);
      updateAccessState();
      accessMessage.textContent = "Acces autorise. Les contenus sont maintenant visibles.";
      document.getElementById("formation").scrollIntoView({ behavior: "smooth" });
      return;
    }

    const requestEmail = config.requestAccessEmail || "";
    const subject = encodeURIComponent("Demande d'acces Formation IA KFPM");
    const body = encodeURIComponent("Bonjour,\n\nJe souhaite demander l'acces au mini site Formation IA KFPM.\n\nEmail : " + email + "\nNom : \nRole : \n\nMerci.");
    accessMessage.innerHTML = "Email non reconnu. <a href=\"mailto:" + requestEmail + "?subject=" + subject + "&body=" + body + "\">Demander l'autorisation</a>.";
  });

  resetAccess.addEventListener("click", () => {
    clearAccess();
    emailInput.value = "";
    accessMessage.textContent = "Acces reinitialise. Entrez un nouvel email.";
    updateAccessState();
  });

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((filter) => filter.classList.remove("active"));
      button.classList.add("active");
      renderModules(button.dataset.filter);
    });
  });

  renderModules("all");
  updateAccessState();
}());

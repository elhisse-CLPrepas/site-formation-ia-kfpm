(function () {
  "use strict";

  const phases = window.CHALLENGE_PHASES || [];
  const missions = window.CHALLENGE_MISSIONS || [];
  const phaseList = document.getElementById("phaseList");
  const missionGrid = document.getElementById("missionGrid");
  const missionCount = document.getElementById("missionCount");
  const showMore = document.getElementById("showMore");
  const filters = Array.from(document.querySelectorAll("[data-phase]"));
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.getElementById("navigation");
  let selectedPhase = "all";
  let expanded = false;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function renderPhases() {
    const fragment = document.createDocumentFragment();
    phases.forEach((phase) => {
      const article = element("article", "phase-card " + phase.color);
      article.append(element("span", "phase-number", String(phase.id).padStart(2, "0")));
      const body = element("div", "phase-body");
      body.append(element("p", "phase-meta", phase.days + " · " + phase.missions));
      body.append(element("h3", "", phase.title));
      body.append(element("p", "", phase.text));
      article.append(body);
      fragment.append(article);
    });
    phaseList.replaceChildren(fragment);
  }

  function renderMissions() {
    const filtered = missions.filter((mission) => selectedPhase === "all" || String(mission.phase) === selectedPhase);
    const visible = expanded || selectedPhase !== "all" ? filtered : filtered.slice(0, 9);
    const fragment = document.createDocumentFragment();

    visible.forEach((mission) => {
      const article = element("article", "mission-card");
      const top = element("div", "mission-top");
      top.append(element("span", "mission-id", mission.id));
      top.append(element("span", "mission-phase", "Phase " + mission.phase));
      article.append(top);
      article.append(element("h3", "", mission.title));
      const label = element("p", "deliverable");
      label.append(element("span", "", "Livrable"));
      label.append(document.createTextNode(mission.deliverable));
      article.append(label);
      fragment.append(article);
    });

    missionGrid.replaceChildren(fragment);
    missionCount.textContent = filtered.length + (filtered.length > 1 ? " missions" : " mission") + " dans cette sélection";
    showMore.hidden = selectedPhase !== "all" || missions.length <= 9;
    showMore.textContent = expanded ? "Réduire la liste" : "Voir les 42 missions";
  }

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      selectedPhase = button.dataset.phase;
      expanded = false;
      filters.forEach((item) => item.classList.toggle("active", item === button));
      renderMissions();
    });
  });

  showMore.addEventListener("click", () => {
    expanded = !expanded;
    renderMissions();
  });

  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    navigation.classList.toggle("open", !open);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("open");
    }
  });

  renderPhases();
  renderMissions();
}());

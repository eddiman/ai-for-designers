const scenarios = {
  confirmed: {
    name: "High confidence",
    status: "Confirmed tracking",
    className: "confirmed",
    detail: "Two fixed demonstration sources agree. GPS sees Bus 37 two stops away, with no disruption reported.",
    context: "This is static demonstration data, not live transit information.",
  },
  uncertain: {
    name: "Information uncertain",
    status: "Information uncertain",
    className: "uncertain",
    detail: "The fixed examples differ: app example 3 min, schedule example 11 min, and no stop-display data.",
    context: "This is static demonstration data, not live transit information.",
  },
  untrackable: {
    name: "Usual bus untrackable",
    status: "Untrackable",
    className: "untrackable",
    detail: "Bus 37 has no fixed demonstration data for 9 minutes. Bus 15 at Kongens gate is the fixed confirmed alternative.",
    context: "This is static demonstration data, not live transit information.",
  },
};

const scenarioButtons = document.querySelectorAll("[data-scenario]");
const scenarioName = document.querySelector("#scenario-name");
const scenarioStatus = document.querySelector("#scenario-status");
const scenarioDetail = document.querySelector("#scenario-detail");
const scenarioContext = document.querySelector("#scenario-context");

function selectScenario(scenarioKey) {
  const scenario = scenarios[scenarioKey];

  scenarioName.textContent = scenario.name;
  scenarioStatus.textContent = scenario.status;
  scenarioStatus.className = `status status--${scenario.className}`;
  scenarioDetail.textContent = scenario.detail;
  scenarioContext.textContent = scenario.context;

  scenarioButtons.forEach((button) => {
    const isSelected = button.dataset.scenario === scenarioKey;
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

scenarioButtons.forEach((button) => {
  button.addEventListener("click", () => selectScenario(button.dataset.scenario));
});

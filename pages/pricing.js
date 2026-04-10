export default function renderPricing() {
  return `
    <main class="sh-main">

      <div class="sh-hero">
        <h1>Shipping Rates & Calculator</h1>
        <p>
          Transparent and competitive pricing
          from China to Mongolia.
        </p>
      </div>

      <div class="sh-layout">

        <!-- LEFT -->
        <section class="sh-calc">

          <h2>Price Calculator</h2>

          <form id="calc-form" class="sh-calc__form">

            <div class="field">
              <label>Weight (kg)</label>
              <input id="sh-weight" type="number" min="0" step="0.1" />
            </div>

            <div class="sh-dims">

              <div class="field">
                <label>Length (cm)</label>
                <input id="sh-length" type="number" min="0" />
              </div>

              <div class="field">
                <label>Width (cm)</label>
                <input id="sh-width" type="number" min="0" />
              </div>

              <div class="field">
                <label>Height (cm)</label>
                <input id="sh-height" type="number" min="0" />
              </div>

            </div>

            <button type="submit" class="btn big">
              Calculate Shipping →
            </button>

          </form>

          <div id="calc-result" class="calc-result"></div>

        </section>

        <!-- RIGHT -->
        <div class="sh-right">

          <!-- METHODS -->
          <section class="sh-methods">

            <h2>Available Shipping Methods</h2>

            <div class="sh-table">
              <div class="sh-table__head">
                <span>Method</span>
                <span>Time</span>
                <span>Price</span>
                <span>Action</span>
              </div>

              <div id="methods-body"></div>
            </div>

          </section>

          <!-- PROHIBITED -->
          <section class="sh-prohibited">

            <h2 class="sh-section-title">
              ⚠ Prohibited Items
            </h2>

            <div id="prohibited-grid" class="sh-prohibited__grid"></div>

          </section>

        </div>

      </div>

    </main>
  `;
}



export function initPricing() {

  // =========================
  // SAFE DOM CHECK
  // =========================

  const methodsBody = document.getElementById("methods-body");
  const grid = document.getElementById("prohibited-grid");
  const form = document.getElementById("calc-form");
  const resultEl = document.getElementById("calc-result");

  if (!methodsBody || !grid || !form || !resultEl) return;



  // =========================
  // SHIPPING METHODS
  // =========================

  const METHODS = [
    {
      icon: "✈️",
      name: "Air Express",
      time: "3–5 Business Days",
      price: "$12.50",
    },
    {
      icon: "🚚",
      name: "Standard Cargo",
      time: "7–10 Business Days",
      price: "$8.00",
    },
  ];

  methodsBody.innerHTML = "";

  METHODS.forEach(function (m) {

    const row = document.createElement("div");

    row.className = "sh-row";

    row.innerHTML =
      '<span class="sh-row__name">' +
        '<span class="sh-row__icon">' + m.icon + '</span>' +
        m.name +
      '</span>' +
      '<span class="sh-row__time">' + m.time + '</span>' +
      '<span class="sh-row__price">' + m.price + '</span>' +
      '<span class="sh-row__action">' +
        '<button class="btn" type="button">Select</button>' +
      '</span>';

    methodsBody.appendChild(row);

  });



  // =========================
  // PROHIBITED ITEMS
  // =========================

  const PROHIBITED = [
    { label: "Explosives & Flammables", sub: "Fireworks, fuel, lighter fluid, matches." },
    { label: "Dangerous Chemicals", sub: "Corrosives, poisons, radioactive material." },
    { label: "Live Animals & Plants", sub: "Pets, livestock, restricted seeds, soil." },
    { label: "Illegal Substances", sub: "Narcotics, counterfeit goods, weapons." },
    { label: "Valuable Assets", sub: "Cash, bullion, precious stones, bonds." },
    { label: "Lithium Batteries", sub: "Certain standalone power banks and cells." },
  ];

  grid.innerHTML = "";

  PROHIBITED.forEach(function (p) {

    const card = document.createElement("div");

    card.className = "prohibited-card";

    card.innerHTML =
      '<div class="prohibited-card__header">' +
        '<span class="prohibited-label">' +
          p.label +
        '</span>' +
      '</div>' +
      '<p class="prohibited-sub">' +
        p.sub +
      '</p>';

    grid.appendChild(card);

  });



  // =========================
  // CALCULATOR
  // =========================

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    const w = parseFloat(document.getElementById("sh-weight").value) || 0;
    const l = parseFloat(document.getElementById("sh-length").value) || 0;
    const wd = parseFloat(document.getElementById("sh-width").value) || 0;
    const h = parseFloat(document.getElementById("sh-height").value) || 0;

    const volumetric = (l * wd * h) / 5000;
    const chargeable = Math.max(w, volumetric);
    const rate = 8;

    const total = (chargeable * rate).toFixed(2);

    if (chargeable === 0) {
      resultEl.innerHTML = "";
      return;
    }

    resultEl.innerHTML =
      '<div class="calc-result-inner">' +

        '<h3>Estimated Cost</h3>' +

        '<div class="calc-rows">' +

          '<div class="calc-row">' +
            '<span>Actual weight</span>' +
            '<span>' + w.toFixed(1) + ' kg</span>' +
          '</div>' +

          '<div class="calc-row">' +
            '<span>Volumetric weight</span>' +
            '<span>' + volumetric.toFixed(2) + ' kg</span>' +
          '</div>' +

          '<div class="calc-row total">' +
            '<span>Total</span>' +
            '<span>$' + total + '</span>' +
          '</div>' +

        '</div>' +

      '</div>';

  });

}
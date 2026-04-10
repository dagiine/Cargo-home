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
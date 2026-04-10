export default function createOrder() {
  return `
  <section class="form-wrapper">
    <h1>Захиалга үүсгэх</h1>
    <p>Хятад Улсаас Монгол Улс руу захиалсан илгээмжийн мэдээллийг оруулна уу.</p>

    <form>

      <label>
        Утасны дугаар
        <span class="material-symbols-outlined">phone</span>
        <input type="tel" placeholder="+976 XXXX XXXX"
          required pattern="^[9876]\d{7}$" title="Утасны дугаар буруу байна."
        />
      </label>

      <label>
        Хяналтын код
        <span class="material-symbols-outlined">tag</span>
        <input type="text" placeholder="Хяналтын код оруулна уу" />
      </label>

      <label>
        Барааны тайлбар
        <span class="material-symbols-outlined">inventory_2</span>
        <textarea placeholder="Барааны талаар тайлбар оруулна уу..."></textarea>
      </label>

      <button type="submit">
        <span class="material-symbols-outlined">add_shopping_cart</span>
        Захиалга үүсгэх
      </button>

      <small>
        Захиалга үүсгэсний дараа таны мэдээллийг шалгаж баталгаажуулна.
        Та SMS-ээр хяналтын код хүлээн авах болно.
      </small>

    </form>
  </section>
  `;
}
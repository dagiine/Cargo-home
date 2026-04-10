const contactItems = [
  { icon: "call", html: `<a href="tel:+97699447176">99447176</a>` },
  { icon: "schedule", html: `Даваа–Баасан: 09:00–18:00<br>Бямба: 10:00–15:00<br>Ням: Амарна` },
  { icon: "language", html: `<a href="https://www.kingcargo.mn" target="_blank">www.kingcargo.mn</a>` },
  { icon: "thumb_up", html: `<a href="https://facebook.com/kingcargo" target="_blank">kingcargo</a>` },
];

function buildContactItems(items) {
  let html = "";

  for (let i = 0; i < items.length; i = i + 1) {
    html = html + `
      <li class="footer-contact-item">
        <span class="material-symbols-outlined">${items[i].icon}</span>
        <p>${items[i].html}</p>
      </li>
    `;
  }

  return html;
}

function renderFooter() {
  return `
    <footer>
      <section class="footer-top">

        <section class="footer-brand">
          <a href="#/" class="logo">
            <span class="logo-icon">
              <img src="./pics/logo.png" alt="Cash 4 Cargo Logo" />
            </span>
            Cash 4 Cargo
          </a>
          <p>Хятадаас Монгол руу найдвартай, хурдан мэргэжлийн үйлчилгээ.</p>
        </section>

        <address class="footer-contact">
          <ul>
            ${buildContactItems(contactItems)}
          </ul>
        </address>

      </section>

      <div class="footer-bottom">
        <small>© 2026 Cash 4 Cargo. Бүх эрх хуулиар хамгаалагдсан.</small>
      </div>
    </footer>
  `;
}

export { renderFooter };
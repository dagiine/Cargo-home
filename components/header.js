function buildNav(routes, currentHash) {
  let html = "";

  for (let i = 0; i < routes.length; i = i + 1) {
    // Одоогийн hash-тай тохирвол class = "active"
    const isActive = routes[i].lnk === currentHash;
    const activeClass = isActive ? ' class="active"' : "";

    html = html + 
      `<li>
        <a href="${routes[i].lnk}"${activeClass}>${routes[i].item}</a>
      </li>`;
  }

  return html;
}

function renderHeader(routes, currentHash) {
  return `
    <header>
      <a href="#/" class="logo">
        <span class="logo-icon">
          <img src="./pics/logo.png" alt="Cash 4 Cargo Logo" />
        </span>
        Cash 4 Cargo
      </a>

      <nav>
        <ul>
          ${buildNav(routes, currentHash)}
        </ul>
      </nav>

      <label for="signin-toggle" class="btn">Нэвтрэх</label>
    </header>
  `;
}

function renderSignin() {
  return `
    <div class="signin-panel">
      <label for="signin-toggle" class="signin-close">
        <span class="material-symbols-outlined">close</span>
      </label>

      <h2>Нэвтрэх</h2>

      <form>
        <input type="email" placeholder="Имэйл хаяг эсвэл утасны дугаар" />
        <input type="password" placeholder="Нууц үг" />
        <button type="submit" class="btn signin-btn">Нэвтрэх</button>
        <a href="#" class="signin-forgot">Нууц үгээ мартсан?</a>
        <hr />
        <button type="button" class="btn signin-create">Шинэ хаяг үүсгэх</button>
      </form>
    </div>
  `;
}

export { renderHeader, renderSignin };
import { renderHeader, renderSignin } from "./components/header.js";
import { renderFooter } from "./components/footer.js";

const routes = [
  { item: "Нүүр", lnk: "#/", component: "home", mainClass: "" },

  {
    item: "Захиалга хянах",
    lnk: "#/track",
    component: "track",
    mainClass: "track-main"
  },

  {
    item: "Захиалга үүсгэх",
    lnk: "#/create-order",
    component: "create-order",
    mainClass: ""
  },

  {
    item: "Үнэ",
    lnk: "#/pricing",
    component: "pricing",
    mainClass: ""
  },

  {
    item: "Тусламж",
    lnk: "#/support",
    component: "support",
    mainClass: "support-main"
  }
];

function loadCSS(pageName) {
  const oldCSS = document.querySelector("#page-css");
  if (oldCSS) oldCSS.remove();

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `./css/${pageName}.css`;
  link.id = "page-css";
  document.head.appendChild(link);
}

function loadExtraCSS(pageName) {
  const oldExtraCSS = document.querySelector("#page-extra-css");
  if (oldExtraCSS) oldExtraCSS.remove();

  if (pageName === "track") {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./css/track-results.css";
    link.id = "page-extra-css";
    document.head.appendChild(link);
  }
}

async function loadPageJS(pageName) {
  try {
    if (pageName === "support") {
      const module = await import("./js/support.js");
      module.initSupportSearch?.();
    }

    if (pageName === "pricing") {
      const module = await import("./js/pricing.js");
      new module.PricingUI().init();
    }

    if (pageName === "track") {
      const module = await import("./js/track.js");
      await new module.TrackUI().init();
    }

    // create-order page дээр одоохондоо js файл байхгүй тул import хийхгүй
  } catch (err) {
    console.error(`${pageName} page JS ачаалахад алдаа:`, err);
  }
}

async function render() {
  const currentHash = document.location.hash || "#/";
  const currentRoute = routes.find((r) => r.lnk === currentHash) || routes[0];

  const mainClass = currentRoute.mainClass
    ? `class="${currentRoute.mainClass}"`
    : "";

  const layout = `
    <input type="checkbox" id="signin-toggle" hidden />

    ${renderHeader(routes, currentHash)}
    ${renderSignin()}

    <label for="signin-toggle" class="signin-backdrop"></label>

    <main ${mainClass}></main>

    ${renderFooter()}
  `;

  document.querySelector("#app").innerHTML = layout;

  try {
    const pageModule = await import(`./pages/${currentRoute.component}.js`);
    document.querySelector("main").innerHTML = pageModule.default();

    loadCSS(currentRoute.component);
    loadExtraCSS(currentRoute.component);

    await loadPageJS(currentRoute.component);
  } catch (err) {
    console.error("Хуудас ачаалахад алдаа гарлаа:", err);
    document.querySelector("main").innerHTML =
      "<p>Хуудас ачаалахад алдаа гарлаа.</p>";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  render();
});

window.addEventListener("hashchange", () => {
  render();
});
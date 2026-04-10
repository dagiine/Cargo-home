import { renderHeader, renderSignin } from "./components/header.js";
import { renderFooter } from "./components/footer.js";

const routes = [
  { item: "Нүүр", lnk: "#/", component: "home", mainClass: "" },

  { item: "Захиалга хянах",
    lnk: "#/track",
    component: "track",
    mainClass: "track-main"
  },

  { item: "Захиалга үүсгэх",
    lnk: "#/create-order",
    component: "create-order",
    mainClass: ""
  },

  { item: "Үнэ",
    lnk: "#/pricing",
    component: "pricing",
    mainClass: ""
  },

  { item: "Тусламж",
    lnk: "#/support",
    component: "support",
    mainClass: "support-main"
  }
];

function loadCSS(pageName) {
  const oldCSS = document.querySelector("#page-css");

  if (oldCSS) {
    oldCSS.remove();
  }

  const link = document.createElement("link");

  link.rel = "stylesheet";
  link.href = `./css/${pageName}.css`;
  link.id = "page-css";

  document.head.appendChild(link);
}

function loadPageJS(pageName) {

  if (pageName === "support") {

    import("./pages/support.js")
      .then(module => {
        module.initSupportSearch();
      });

  }

  if (pageName === "pricing") {

    import("./pages/pricing.js")
      .then(module => {
        module.initPricing();
      });

  }

  if (pageName === "create-order") {

    import("./pages/create-order.js")
      .then(module => {
        module.initCreateOrder?.();
      });

  }

}

function render() {
  const currentHash = document.location.hash || "#/";
  const currentRoute = routes.find(r => r.lnk === currentHash) || routes[0];

  const mainClass =
    currentRoute.mainClass
      ? `class="${currentRoute.mainClass}"`
      : "";

  const layout = `<input type="checkbox" id="signin-toggle" hidden />

    ${renderHeader(routes, currentHash)}
    ${renderSignin()}

    <label for="signin-toggle" class="signin-backdrop"> </label>
    <main ${mainClass}></main>

    ${renderFooter()}
  `;

  document.querySelector("#app").innerHTML = layout;

  import(`./pages/${currentRoute.component}.js`)
    .then(module => {
      document.querySelector("main").innerHTML =
        module.default();

      loadCSS(currentRoute.component);
      loadPageJS(currentRoute.component);
    })
    .catch(err => {
      console.error(
        "Хуудас ачаалахад алдаа гарлаа:",
        err
      );
      document.querySelector("main").innerHTML =
        "<p>Хуудас ачаалахад алдаа гарлаа.</p>";

    });

}

render();

window.addEventListener("hashchange", () => {
  render();
});
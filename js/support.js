export function initSupportSearch() {
  const searchInput = document.getElementById("faq-search");
  const categoryTabs = document.getElementById("faq-categories");
  const sectionTitle = document.getElementById("faq-section-title");
  const noResultsMessage = document.getElementById("faq-no-results");

  const faqCards = Array.from(
    document.querySelectorAll(".faq-group > article")
  );

  const faqGroups = Array.from(
    document.querySelectorAll(".faq-group")
  );

  searchInput.addEventListener("input", function () {
    let query = searchInput.value.trim().toLowerCase();

    if (query === "") {
      categoryTabs.style.display = "";
      sectionTitle.textContent = "Түгээмэл асуултууд";
      noResultsMessage.style.display = "none";

      faqGroups.forEach(function (group) {
        group.style.removeProperty("display");
      });

      faqCards.forEach(function (card) {
        card.style.display = "";
        let details = card.querySelector("details");
        details.removeAttribute("open");
      });

      return;
    }

    categoryTabs.style.display = "none";
    sectionTitle.textContent = "Хайлтын үр дүн";

    faqGroups.forEach(function (group) {
      group.style.display = "flex";
    });

    let foundMatch = false;

    faqCards.forEach(function (card) {
      let questionText =
        card.querySelector("summary")
            .textContent
            .toLowerCase();

      let answerText =
        card.querySelector("p")
            .textContent
            .toLowerCase();

      let matches =
        questionText.includes(query) ||
        answerText.includes(query);

      if (matches) {
        card.style.display = "";

        card.querySelector("details")
            .setAttribute("open", "");

        foundMatch = true;

      }
      else {

        card.style.display = "none";
        card.querySelector("details")
            .removeAttribute("open");
      }
    });

    if (foundMatch) {
      noResultsMessage.style.display = "none";
    }
    else {
      noResultsMessage.style.display = "block";
    }
  });
}
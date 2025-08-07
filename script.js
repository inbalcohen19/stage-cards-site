document.addEventListener("DOMContentLoaded", () => {
      const cards = {
        level1: document.querySelector("a[href*='lesson1']"),
        level2: document.querySelector("a[href*='lesson2']"),
        level3: document.querySelector("h2:contains('Level 3')")?.closest(".card"),
        level4: document.querySelector("h2:contains('Level 4')")?.closest(".card"),
        level5: document.querySelector("h2:contains('Level 5')")?.closest(".card"),
      };

      function unlock(levelKey, card, completedKey) {
        if (card) {
          card.classList.remove("locked");
          card.style.pointerEvents = "auto";
          card.style.cursor = "pointer";
          card.style.background = "linear-gradient(90deg, #B28DE1 6.38%, #FF176B 128.01%)";
          card.style.color = "white";

          if (localStorage.getItem(completedKey) === "true") {
            const icon = document.createElement("div");
            icon.className = "icon";
            icon.textContent = "✓";
            card.appendChild(icon);
          }
        }
      }

      if (localStorage.getItem("level1-done") === "true") unlock("level2", cards.level2, "level2-done");
      if (localStorage.getItem("level2-done") === "true") unlock("level3", cards.level3, "level3-done");
      if (localStorage.getItem("level3-done") === "true") unlock("level4", cards.level4, "level4-done");
      if (localStorage.getItem("level4-done") === "true") unlock("level5", cards.level5, "level5-done");

      function markComplete(card, levelKey) {
        localStorage.setItem(levelKey, "true");
      }

      if (cards.level1) {
        cards.level1.addEventListener("click", () => markComplete(cards.level1, "level1-done"));
      }
      if (cards.level2) {
        cards.level2.addEventListener("click", () => markComplete(cards.level2, "level2-done"));
      }
      if (cards.level3) {
        cards.level3.addEventListener("click", () => markComplete(cards.level3, "level3-done"));
      }
      if (cards.level4) {
        cards.level4.addEventListener("click", () => markComplete(cards.level4, "level4-done"));
      }
    });
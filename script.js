// Loaded in <head> so the saved theme is applied before the page is drawn.
(function () {
  var root = document.documentElement;
  var THEME_KEY = "course-theme";

  function readTheme() {
    try {
      return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
    } catch (e) {
      return "light";
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      // Storage blocked: the theme still works, it just isn't remembered.
    }
  }

  root.setAttribute("data-theme", readTheme());
  root.classList.add("js");

  document.addEventListener("DOMContentLoaded", function () {
    setUpThemeToggle();
    setUpSections();
    setUpQuizzes();
  });

  function setUpThemeToggle() {
    var button = document.getElementById("theme-toggle");

    function render() {
      var isDark = root.getAttribute("data-theme") === "dark";
      button.textContent = isDark ? "Light theme" : "Dark theme";
      button.setAttribute("aria-pressed", String(isDark));
    }

    button.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      saveTheme(next);
      render();
    });

    render();
  }

  // Shows one section at a time; the URL hash (#lesson-3) keeps your place on reload.
  function setUpSections() {
    var sections = Array.prototype.slice.call(document.querySelectorAll(".lesson"));
    var prevBtn = document.getElementById("prev-btn");
    var nextBtn = document.getElementById("next-btn");
    var stepLabel = document.getElementById("step-label");
    var progressBar = document.getElementById("progress-bar");
    var current = 0;

    function indexFromHash() {
      var id = window.location.hash.slice(1);
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].id === id) return i;
      }
      return 0;
    }

    function show(index, moveFocus) {
      current = index;
      sections.forEach(function (section, i) {
        section.classList.toggle("is-active", i === index);
      });

      prevBtn.disabled = index === 0;
      nextBtn.disabled = index === sections.length - 1;
      stepLabel.textContent = (index + 1) + " of " + sections.length;
      progressBar.style.width = ((index + 1) / sections.length) * 100 + "%";

      if (moveFocus) {
        window.scrollTo(0, 0);
        sections[index].querySelector("h2").focus();
      }
    }

    function go(index) {
      // Updating the hash triggers the hashchange handler, which shows the section.
      window.location.hash = sections[index].id;
    }

    prevBtn.addEventListener("click", function () {
      if (current > 0) go(current - 1);
    });

    nextBtn.addEventListener("click", function () {
      if (current < sections.length - 1) go(current + 1);
    });

    window.addEventListener("hashchange", function () {
      show(indexFromHash(), true);
    });

    show(indexFromHash(), false);
  }

  function setUpQuizzes() {
    var questions = document.querySelectorAll(".question");

    Array.prototype.forEach.call(questions, function (question) {
      var correct = question.getAttribute("data-correct");
      var options = question.querySelectorAll("button[data-option]");
      var feedback = question.querySelector(".feedback");
      var explanation = question.querySelector(".explanation");
      var retry = question.querySelector(".retry");

      Array.prototype.forEach.call(options, function (option) {
        option.addEventListener("click", function () {
          var isRight = option.getAttribute("data-option") === correct;

          Array.prototype.forEach.call(options, function (o) {
            o.disabled = true;
          });
          option.classList.add(isRight ? "is-correct" : "is-wrong");

          feedback.textContent = isRight ? "Correct!" : "Not quite.";
          feedback.className = "feedback " + (isRight ? "correct" : "wrong");
          explanation.hidden = false;
          retry.hidden = false;
        });
      });

      retry.addEventListener("click", function () {
        Array.prototype.forEach.call(options, function (o) {
          o.disabled = false;
          o.classList.remove("is-correct", "is-wrong");
        });
        feedback.textContent = "";
        feedback.className = "feedback";
        explanation.hidden = true;
        retry.hidden = true;
        options[0].focus();
      });
    });
  }
})();

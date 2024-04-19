document.addEventListener("DOMContentLoaded", function() {
    const knowMoreButton = document.getElementById("know_more");
    const aboutSection = document.getElementById("about");

    knowMoreButton.addEventListener("click", function() {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const skill_Button = document.getElementById("skills_button");
  const skillSection = document.getElementById("skills");

  skill_Button.addEventListener("click", function() {
      skillSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const about_Button = document.querySelector("[name='about_button']");
  const aboutSection = document.getElementById("about");

  about_Button.addEventListener("click", function() {
      event.preventDefault();
      aboutSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const skill_Button = document.querySelector("[name='skill_button']");
  const skillSection = document.getElementById("skills");

  skill_Button.addEventListener("click", function() {
      event.preventDefault();
      skillSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const skill_Button = document.querySelector("[name='project_button']");
  const skillSection = document.getElementById("project");

  skill_Button.addEventListener("click", function() {
      event.preventDefault();
      skillSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const skill_Button = document.querySelector("[name='achievement_button']");
  const skillSection = document.getElementById("achievement");

  skill_Button.addEventListener("click", function() {
      event.preventDefault();
      skillSection.scrollIntoView({ behavior: "smooth" });
  });
});


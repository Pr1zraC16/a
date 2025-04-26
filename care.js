
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach(function(section) {
      section.addEventListener("click", function() {
        section.style.backgroundColor = "#e0e0e0"; 
      });
    });
  });
  
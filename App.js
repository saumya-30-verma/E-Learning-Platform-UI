// Interactive progress bar
// JS to toggle login modal
const modal = document.getElementById("auth-modal");
const nav = document.querySelector("nav");
const closeBtn = document.querySelector(".close");
const progressBars = document.querySelectorAll('.progress-bar');
const filterButtons = document.querySelectorAll(".filter-btn");
const courseCards = document.querySelectorAll(".course-card");
const allProgress = document.querySelectorAll(".progress-text");
const darkToggle = document.getElementById("dark-mode-toggle");

nav.addEventListener("dblclick", () => modal.classList.remove("hidden"));
closeBtn.addEventListener("click", () => modal.classList.add("hidden"));

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");

    courseCards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
allProgress.forEach(text => {
  if (parseInt(text.textContent) === 100) {
    const badge = document.createElement("span");
    badge.textContent = "Completed";
    badge.classList.add("badge");
    text.parentElement.appendChild(badge);
  }
});

progressBars.forEach(bar => {
  const progress = bar.querySelector('.progress');
  const text = bar.parentElement.querySelector('.progress-text');

  bar.addEventListener('click', () => {
    let currentProgress = parseInt(progress.style.width);
    currentProgress = Math.min(currentProgress + 10, 100);
    progress.style.width = `${currentProgress}%`;
    text.textContent = `${currentProgress}%`;
  });
});



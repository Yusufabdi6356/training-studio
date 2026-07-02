const menuTrigger = document.getElementById("menuTrigger");
const nav = document.getElementById("nav");

menuTrigger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("active"));
});

const tabLinks = document.querySelectorAll(".tab-link");
const tabPanels = document.querySelectorAll(".tab-panel");

tabLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    tabLinks.forEach((l) => l.classList.remove("active"));
    tabPanels.forEach((p) => p.classList.remove("active"));
    link.classList.add("active");
    document.querySelector(link.getAttribute("href")).classList.add("active");
  });
});

const filterItems = document.querySelectorAll("#scheduleFilter li");
const scheduleCells = document.querySelectorAll(".ts-item");

function showDay(day) {
  scheduleCells.forEach((cell) => {
    cell.classList.toggle("show", cell.dataset.days.split(" ").includes(day));
  });
}

filterItems.forEach((item) => {
  item.addEventListener("click", () => {
    filterItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
    showDay(item.dataset.day);
  });
});

showDay("monday");

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("background-header", window.scrollY > 80);
});

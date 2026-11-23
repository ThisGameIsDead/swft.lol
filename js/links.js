window.SWIFT_LINKS = {
  discord: "https://discord.gg/MGkfwJkPg",
  tiktok: "https://www.tiktok.com/@swift.mod",
  download: "https://discord.gg/MGkfwJkPg",
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-link]").forEach(a => {
    a.href = window.SWIFT_LINKS[a.dataset.link] || "#";
    a.target = "_blank";
    a.rel = "noopener";
  });
});

window.SWIFT_LINKS = {
  discord: "/discord",
  tiktok: "https://www.tiktok.com/@swift.mod",
  download: "https://github.com/ThisGameIsDead/swift/releases/latest/download/Swift.exe",
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-link]").forEach(a => {
    a.href = window.SWIFT_LINKS[a.dataset.link] || "#";
    a.target = "_blank";
    a.rel = "noopener";
  });
});

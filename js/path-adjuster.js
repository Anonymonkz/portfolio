// Adjust resource paths based on whether the site is served from GitHub Pages
const isGithubPages = window.location.hostname === "anonymonkz.github.io";

if (isGithubPages) {
  // Adjust CSS paths
  document.querySelectorAll('link[rel="stylesheet"]').forEach((el) => {
    if (el.href) {
      el.href = el.href.replace(/^\/css\//, "/portfolio/css/");
      el.href = el.href.replace(/^\/pages\//, "/portfolio/pages/");
    }
  });

  // Adjust JavaScript paths
  document.querySelectorAll("script[src]").forEach((el) => {
    if (el.src) {
      el.src = el.src.replace(/^\/js\//, "/portfolio/js/");
      el.src = el.src.replace(/^\/pages\//, "/portfolio/pages/");
    }
  });

  // Adjust page paths
  document.querySelectorAll("a[href]").forEach((el) => {
    if (el.href) {
      el.href = el.href.replace(/^\/pages\//, "/portfolio/pages/");
    }
  });
}

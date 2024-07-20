document.addEventListener("DOMContentLoaded", () => {
  const isGithubPages = window.location.hostname === "anonymonkz.github.io";

  if (isGithubPages) {
    console.log("On GitHub Pages");

    // Adjust CSS paths
    document.querySelectorAll('link[rel="stylesheet"]').forEach((el) => {
      if (el.href) {
        console.log("Original CSS path:", el.href);
        el.href = el.href.replace(/^\/css\//, "/portfolio/css/");
        el.href = el.href.replace(/^\/assets\//, "/portfolio/assets/");
        console.log("Adjusted CSS path:", el.href);
      }
    });

    // Adjust JavaScript paths
    document.querySelectorAll("script[src]").forEach((el) => {
      if (el.src) {
        console.log("Original JS path:", el.src);
        el.src = el.src.replace(/^\/js\//, "/portfolio/js/");
        el.src = el.src.replace(/^\/assets\//, "/portfolio/assets/");
        console.log("Adjusted JS path:", el.src);
      }
    });

    // Adjust page links
    document.querySelectorAll("a[href]").forEach((el) => {
      if (el.href) {
        console.log("Original link path:", el.href);
        el.href = el.href.replace(/^\/pages\//, "/portfolio/pages/");
        el.href = el.href.replace(/^\/assets\//, "/portfolio/assets/");
        console.log("Adjusted link path:", el.href);
      }
    });
  } else {
    console.log("Not on GitHub Pages");
  }
});

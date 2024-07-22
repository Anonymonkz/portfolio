function adjustPaths(basePath, repoName) {
  const isGithubPages = window.location.hostname === `${repoName}.github.io`;
  const isLocalhost = window.location.hostname === 'localhost';

  if (isGithubPages) {
    console.log("On GitHub Pages");

    // Helper function to replace path
    function replacePath(element, attribute, regex, replacement) {
      const path = element.getAttribute(attribute);
      if (path) {
        console.log(`Original ${attribute} path:`, path);
        element.setAttribute(attribute, path.replace(regex, replacement));
        console.log(
          `Adjusted ${attribute} path:`,
          element.getAttribute(attribute)
        );
      }
    }

    // Adjust Icon Paths
    document.querySelectorAll('link[rel="icon"]').forEach((el) => {
      replacePath(el, "href", /^\/css\//, `${basePath}/css/`);
      replacePath(el, "href", /^\/assets\//, `${basePath}/assets/`);
      replacePath(el, "src", /^\/pages\//, `${basePath}/pages/`);
      replacePath(el, "href", /^\/pages\//, `${basePath}/pages/`);
    });

    // Adjust CSS paths
    document.querySelectorAll('link[rel="stylesheet"]').forEach((el) => {
      replacePath(el, "href", /^\/css\//, `${basePath}/css/`);
      replacePath(el, "href", /^\/assets\//, `${basePath}/assets/`);
      replacePath(el, "src", /^\/pages\//, `${basePath}/pages/`);
      replacePath(el, "href", /^\/pages\//, `${basePath}/pages/`);
    });

    // Adjust JavaScript paths
    document.querySelectorAll("script[src]").forEach((el) => {
      replacePath(el, "src", /^\/js\//, `${basePath}/js/`);
      replacePath(el, "src", /^\/assets\//, `${basePath}/assets/`);
      replacePath(el, "src", /^\/pages\//, `${basePath}/pages/`);
    });

    // Adjust images and other resources paths
    document
      .querySelectorAll("img[src], video[src], audio[src], source[src]")
      .forEach((el) => {
        replacePath(el, "src", /^\/assets\//, `${basePath}/assets/`);
        replacePath(el, "src", /^\/pages\//, `${basePath}/pages/`);
        replacePath(el, "href", /^\/assets\//, `${basePath}/assets/`);
        replacePath(el, "href", /^\/pages\//, `${basePath}/pages/`);
      });

    // Adjust page links
    document.querySelectorAll("a[href]").forEach((el) => {
      replacePath(el, "href", /^\/pages\//, `${basePath}/pages/`);
      replacePath(el, "href", /^\/assets\//, `${basePath}/assets/`);
    });
  } else if (isLocalhost) {
    console.log("On Localhost");

    // Helper function to replace path
    function replacePath(element, attribute, regex, replacement) {
      const path = element.getAttribute(attribute);
      if (path) {
        console.log(`Original ${attribute} path:`, path);
        element.setAttribute(attribute, path.replace(regex, replacement));
        console.log(
          `Adjusted ${attribute} path:`,
          element.getAttribute(attribute)
        );
      }
    }

    // Adjust Icon Paths
    document.querySelectorAll('link[rel="icon"]').forEach((el) => {
      replacePath(el, "href", /^\/css\//, `/Proj/css/`);
      replacePath(el, "href", /^\/assets\//, `/Proj/assets/`);
      replacePath(el, "src", /^\/pages\//, `/Proj/pages/`);
      replacePath(el, "href", /^\/pages\//, `/Proj/pages/`);
    });

    // Adjust CSS paths
    document.querySelectorAll('link[rel="stylesheet"]').forEach((el) => {
      replacePath(el, "href", /^\/css\//, `/Proj/css/`);
      replacePath(el, "href", /^\/assets\//, `/Proj/assets/`);
      replacePath(el, "src", /^\/pages\//, `/Proj/pages/`);
      replacePath(el, "href", /^\/pages\//, `/Proj/pages/`);
    });

    // Adjust JavaScript paths
    document.querySelectorAll("script[src]").forEach((el) => {
      replacePath(el, "src", /^\/js\//, `/Proj/js/`);
      replacePath(el, "src", /^\/assets\//, `/Proj/assets/`);
      replacePath(el, "src", /^\/pages\//, `/Proj/pages/`);
    });

    // Adjust images and other resources paths
    document
      .querySelectorAll("img[src], video[src], audio[src], source[src]")
      .forEach((el) => {
        replacePath(el, "src", /^\/assets\//, `/Proj/assets/`);
        replacePath(el, "src", /^\/pages\//, `/Proj/pages/`);
        replacePath(el, "href", /^\/assets\//, `/Proj/assets/`);
        replacePath(el, "href", /^\/pages\//, `/Proj/pages/`);
      });

    // Adjust page links
    document.querySelectorAll("a[href]").forEach((el) => {
      replacePath(el, "href", /^\/pages\//, `/Proj/pages/`);
      replacePath(el, "href", /^\/assets\//, `/Proj/assets/`);
    });
  } else {
    console.log("Not on GitHub Pages or Localhost");
  }
}

// Call the function with the appropriate parameters
document.addEventListener("DOMContentLoaded", () => {
  adjustPaths("/portfolio", "anonymonkz");
});

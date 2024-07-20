function adjustPaths(basePath, repoName) {
  const isGithubPages = window.location.hostname === `${repoName}.github.io`;

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

    // Adjust CSS paths
    document.querySelectorAll('link[rel="stylesheet"]').forEach((el) => {
      replacePath(el, "href", /^\/css\//, `${basePath}/css/`);
      replacePath(el, "href", /^\/assets\//, `${basePath}/assets/`);
    });

    // Adjust JavaScript paths
    document.querySelectorAll("script[src]").forEach((el) => {
      replacePath(el, "src", /^\/js\//, `${basePath}/js/`);
      replacePath(el, "src", /^\/assets\//, `${basePath}/assets/`);
    });

    // Adjust page links
    document.querySelectorAll("a[href]").forEach((el) => {
      replacePath(el, "href", /^\/pages\//, `${basePath}/pages/`);
      replacePath(el, "href", /^\/assets\//, `${basePath}/assets/`);
    });
  } else {
    console.log("Not on GitHub Pages");
  }
}

// Call the function with the appropriate parameters
document.addEventListener("DOMContentLoaded", () => {
  adjustPaths("/portfolio", "anonymonkz");
});

function adjustPaths(basePath) {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Adjusting paths...");

    // Helper function to replace path
    function replacePath(element, attribute, regex, replacement) {
      const path = element.getAttribute(attribute);
      if (path) {
        console.log(`Original ${attribute} path:`, path);
        const newPath = path.replace(regex, replacement);
        element.setAttribute(attribute, newPath);
        console.log(`Adjusted ${attribute} path:`, newPath);
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

    console.log("Paths adjusted.");
  });
}

// Call the function with the appropriate base path
adjustPaths("/portfolio");

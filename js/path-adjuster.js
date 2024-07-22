function adjustPaths(basePath, repoName) {
  const isGithubPages = window.location.hostname === `${repoName}.github.io`;
  const isLocalhost =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";

  function replacePath(element, attribute, regex, replacement) {
    const path = element.getAttribute(attribute);
    if (path) {
      element.setAttribute(attribute, path.replace(regex, replacement));
    }
  }

  function adjustCSSBackgroundImages() {
    // Loop through all stylesheets
    for (const sheet of document.styleSheets) {
      try {
        const rules = sheet.cssRules || sheet.rules;
        for (const rule of rules) {
          if (rule.style && rule.style.backgroundImage) {
            const originalURL = rule.style.backgroundImage;
            // Extract the URL from `backgroundImage`
            const urlRegex = /url\(["']?([^"')]+)["']?\)/g;
            rule.style.backgroundImage = originalURL.replace(
              urlRegex,
              (match, url) => {
                // Adjust URL based on basePath and folder structure
                return `url(${url.replace(
                  /^(\/|\.\/|\.\.\/|)(css|assets|pages|sub-pages|js)\/?/,
                  `${basePath}/$2/$3`
                )})`;
              }
            );
          }
        }
      } catch (error) {
        console.warn("Could not access stylesheet:", sheet, error);
      }
    }
  }

  if (isGithubPages) {
    // Regex to match paths that may start with `/`, `./`, `../`, or no prefix
    const regex =
      /^(\/|\.\/|\.\.\/|)(css|assets|pages|sub-pages|js)\/?([a-zA-Z0-9\-\/]*)/;

    // Adjust paths for various elements
    document
      .querySelectorAll('link[rel="icon"], link[rel="stylesheet"]')
      .forEach((el) => {
        replacePath(el, "href", regex, `${basePath}/$2/$3`);
      });

    document.querySelectorAll("script[src]").forEach((el) => {
      replacePath(el, "src", regex, `${basePath}/$2/$3`);
    });

    document
      .querySelectorAll("img[src], video[src], audio[src], source[src]")
      .forEach((el) => {
        replacePath(el, "src", regex, `${basePath}/$2/$3`);
      });

    document.querySelectorAll("a[href]").forEach((el) => {
      replacePath(el, "href", regex, `${basePath}/$2/$3`);
    });

    // Adjust background-image URLs in CSS
    adjustCSSBackgroundImages();
  } else {
    console.log("Not on GitHub Pages; no path adjustments made.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  adjustPaths("/portfolio", "anonymonkz");
});

// const rssPlugin = require("@11ty/eleventy-plugin-rss");
const util = require("util");

// Filters
const dateFilter = require("./src/filters/date-filter.js");
const w3DateFilter = require("./src/filters/w3-date-filter.js");

// Transforms
const htmlMinTransform = require("./src/transforms/html-min-transform.js");

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === "production";

module.exports = (config) => {
  // Trouble shooting fucntion
  config.addFilter("dump", (obj) => {
    return util.inspect(obj);
  });

  // Add filters
  config.addFilter("dateFilter", dateFilter);
  config.addFilter("w3DateFilter", w3DateFilter);

  // Only minify HTML if we are in production because it slows builds _right_ down
  if (isProduction) {
    config.addTransform("htmlmin", htmlMinTransform);
  }

  // Passthrough fonts
  config.addPassthroughCopy("./src/fonts/");

  // Returns work items, sorted by display order
  config.addCollection("projects", (collection) => {
    return collection
      .getFilteredByGlob("./src/projects/*.md")
      .sort((a, b) =>
        Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1
      );
  });

  // Returns a collection of blog posts in reverse date order
  config.addCollection("posts", (collection) => {
    return [...collection.getFilteredByGlob("./src/posts/*.md")].reverse();
  });

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};

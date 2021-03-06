const { src, dest } = require("gulp");
const sassProcessor = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");

// Flags whether we compress the output etc
const isProduction = process.env.NODE_ENV === "production";

// An array of outputs that should be sent over to includes
const criticalStyles = new Set([
  "critical.scss",
  "home.scss",
  "projects.scss",
  "project.scss",
  "contact.scss",
  "posts.scss",
  "post.scss",
]);

// Takes the arguments passed by `dest` and determines where the output file goes
const calculateOutput = ({ history }) => {
  // By default, we want a CSS file in our dist directory, so the HTML can grab it with a <link />
  let response = "./dist/css";

  // Get everything after the last slash
  const sourceFileName = /[^/]*$/.exec(history[0])[0];

  // If critical CSS go to the _includes directory, so nunjucks can include directly in a <style>
  if (criticalStyles.has(sourceFileName)) {
    response = "./src/_includes/css";
  }

  return response;
};

// Processes sass files, then sends them to the output calculator
const sass = () => {
  return src("./src/scss/*.scss")
    .pipe(sassProcessor().on("error", sassProcessor.logError))
    .pipe(
      cleanCSS(
        isProduction
          ? {
              level: 2,
            }
          : {}
      )
    )
    .pipe(dest(calculateOutput, { sourceMaps: !isProduction }));
};

module.exports = sass;

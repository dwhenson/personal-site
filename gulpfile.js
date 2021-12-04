const { parallel, watch } = require("gulp");

// Pull in each task
const images = require("./gulp-tasks/images.js");
const sass = require("./gulp-tasks/sass.js");
const esbuild = require("./gulp-tasks/esbuild.js");

// Set each directory and contents that we want to watch and assign the relevant task.
const watcher = () => {
  watch("./src/scss/**/*.scss", { ignoreInitial: true }, sass);
  watch("./src/images/**/*", { ignoreInitial: true }, images);
  watch("./src/js/**/*.js", esbuild);
};

// The default (if only run `gulp`) is to run each task in parallel
exports.default = parallel(images, sass, esbuild);

// This is our watcher task that instructs gulp to watch directories and act accordingly
exports.watch = watcher;

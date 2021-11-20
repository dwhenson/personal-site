const { src, dest } = require("gulp");
const gulpEsbuild = require("gulp-esbuild");

// Combine modules and minify code
const esbuild = async () => {
  return src("./src/js/*.js")
    .pipe(
      gulpEsbuild({
        bundle: true,
        minify: true,
      })
    )
    .pipe(dest("./dist/js"));
};

module.exports = esbuild;

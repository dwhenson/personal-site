const { dest, src } = require("gulp");
const imagemin = require("gulp-imagemin");

// Grabs all images, runs them through imagemin and add to folder
const images = () => {
  return src("./src/images/**/*")
    .pipe(
      imagemin(
        [
          imagemin.mozjpeg({ quality: 60, progressive: true }),
          imagemin.optipng({ optimizationLevel: 5, interlaced: null }),
        ],
        {
          silent: true,
        }
      )
    )
    .pipe(dest("./dist/images"));
};

module.exports = images;

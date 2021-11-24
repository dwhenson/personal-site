const GetGoogleFonts = require("get-google-fonts");

const fonts = async () => {
  // Setup of the library instance by setting where we want
  // the output to go. CSS is relative to output font directory
  const instance = new GetGoogleFonts({
    outputDir: "./dist/fonts",
    cssFile: "./fonts.css",
  });

  // Grabs fonts and CSS from google and puts in the dist folder
  const result = await instance.download(
    // "https://fonts.googleapis.com/css2?family=Literata:ital,wght@0,400;0,700;1,400&family=Red+Hat+Display:wght@400;900"
    // "https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Inria+Serif:wght@400;700"
    // "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,700;1,400;1,700"
    "https://fonts.googleapis.com/css2?family=BioRhyme:wght@400;700&family=Work+Sans:ital,wght@0,500;0,700;1,500;1,700"
  );
  return result;
};

module.exports = fonts;

const { src, dest, watch, parallel, series } = require("gulp");

const limpiarCSS = require("gulp-clean-css");
const limpiarJs = require("gulp-uglify");
const concat = require("gulp-concat");


function minimizaCSS() {
    return src("css/*.css").pipe(limpiarCSS()).pipe(dest("dist/css/"));
  }



  function minimizaJS() {
    return src("js/*.js").pipe(limpiarJs()).pipe(dest("dist/js/"));
  }

  function concatCSS() {
    return src("dist/css/*css")
      .pipe(concat("all.css"))
      .pipe(dest("dist/css/all.css"));
  }

  function concatJS() {
    return src("dist/js/*js").pipe(concat("all.js")).pipe(dest("dist/js/all.js"));
  }
  

  exports.minimizaCSS = minimizaCSS;
  exports.minimizaJS = minimizaJS;
  exports.concatCSS = concatCSS;
  exports.concatJS = concatJS;

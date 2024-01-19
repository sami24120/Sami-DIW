const { src, dest, watch} = require("gulp");

const scss = require("gulp-sass")(require("sass"));

function compilaSCSS() {
    return src("src/main.scss").pipe(scss()).pipe(dest("dist/"));
  }



  
  function watcher() {
    watch("src/sass/**/*.scss", compilaSCSS);
  }

  exports.compilaSCSS = compilaSCSS;
exports.watcher = watcher;
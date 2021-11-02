var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var cleanCSS = require("gulp-clean-css");

gulp.task("compile", function () {
  return gulp.src("SCSS/main.scss").pipe(sass()).pipe(gulp.dest("CSS"));
});

gulp.task("watch-scss", function () {
  gulp.watch("SCSS/main.scss", gulp.series("compile"));
});

gulp.task("minify-css", () => {
  return gulp.src("CSS/main.css").pipe(cleanCSS()).pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.series("compile", "watch-scss"), function () {});

var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var less = require("gulp-less");
var path = require("path");
var del = require("del");

gulp.task("clean", function() {
  return del(["build"]);
});

gulp.task("styles", ["clean"], function() {
  return gulp
    .src("./less/styles.less")
    .pipe(
      less({
        paths: [path.join("./less", "styles", "variables")]
      })
    )
    .pipe(gulp.dest("./css/"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("serve", ["clean"], function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("./less/*.less", ["styles"]);
  gulp.watch("./**/*.html").on("change", browserSync.reload);
});

gulp.task("default", ["styles", "serve"]);

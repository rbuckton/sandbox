const gulp = require("gulp");
const tsc = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");
const del = require("del");

gulp.task("clean", () => del("dist"));
gulp.task("build", () => {
    const project = tsc.createProject("src/tsconfig.json", { typescript: require("typescript") });
    return project.src()
        .pipe(sourcemaps.init())
        .pipe(project())
        .pipe(sourcemaps.write(".", { includeContent: false, destPath: "dist" }))
        .pipe(gulp.dest("dist"));
});
gulp.task("default", ["build"]);
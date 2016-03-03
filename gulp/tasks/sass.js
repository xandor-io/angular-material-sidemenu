import gulp from 'gulp';
import sass from 'gulp-sass';
import importCss from 'gulp-import-css';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import browserSync from './browser-sync';
import config from '../config';

gulp.task('sass', () => {
  return gulp
    .src(config.joinPath(config.srcFolder, 'stylesheets', 'main.scss'))
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'expanded',
        indentWidth: 2
      })
      .on('error', sass.logError)
    )
    .pipe(importCss())
    .pipe(sourcemaps.write())
    .pipe(rename(config.mainStylesheet))
    .pipe(gulp.dest(config.destFolder))
    .pipe(browserSync.stream());
});

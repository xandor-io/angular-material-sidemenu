import gulp from 'gulp';
import eslint from 'gulp-eslint';
import changed from 'gulp-changed-in-place';
import config from '../config';

gulp.task('eslint', () => {
  return gulp
    .src(config.gulpScripts.concat(config.srcScripts))
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('eslint-all', () => {
  return gulp
    .src(config.gulpScripts.concat(config.srcScripts))
    .pipe(changed())
    .pipe(eslint())
    .pipe(eslint.format());
});

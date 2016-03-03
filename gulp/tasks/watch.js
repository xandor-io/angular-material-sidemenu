import gulp from 'gulp';
import watch from 'gulp-watch';
import runSequence from 'run-sequence';
import config from '../config';
import browserSync from './browser-sync';

let watchConfig = {
  verbose: true
};

gulp.task('watch', ['browserSync'], () => {
  watch(config.srcScripts, watchConfig, () => {
    runSequence('webpack', browserSync.reload);
  });

  watch(config.gulpScripts.concat(config.srcScripts), watchConfig, () => {
    runSequence('eslint');
  });

  watch(config.srcStylesheets, watchConfig, () => {
    runSequence('sass');
  });

  watch(config.joinPath(config.demoFolder, config.demoFiles), watchConfig, () => {
    browserSync.reload();
  });
});

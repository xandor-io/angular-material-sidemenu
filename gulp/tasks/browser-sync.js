import _browsersync from 'browser-sync';
import gulp from 'gulp';
import config from '../config';

let browserSync = _browsersync.create();

gulp.task('browserSync', () => {
  return browserSync.init({
    notify: false,
    logLevel: 'silent',
    port: 9000,
    ghostMode: {
      clicks: true,
      scroll: true,
      links: true,
      forms: true
    },
    server: {
      baseDir: [
        'node_modules',
        config.demoFolder,
        config.destFolder
      ]
    },
    ui: {
      port: 9001,
      weinre: {
        port: 9002
      }
    },
    watchTask: true
  });
});

export default browserSync;

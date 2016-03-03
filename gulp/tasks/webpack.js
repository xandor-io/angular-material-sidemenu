import gulp from 'gulp';
import gulpWebpack from 'webpack-stream';
import webpack from 'webpack';
import config from '../config';

gulp.task('webpack', () => {
  return gulp.src('./src/main.js')
    .pipe(gulpWebpack({
      output: {
        filename: config.mainScript
      },
      devtool: 'inline-source-map',
      plugins: [
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.DedupePlugin()
      ],
      module: {
        loaders: [
          {
            loaders: ['ng-annotate', 'babel-loader']
          }
        ]
      }
    }, webpack, () => 'done'))
    .pipe(gulp.dest(config.destFolder));
});

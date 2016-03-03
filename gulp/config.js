import path from 'path';

let joinPath = (...paths) => path.normalize(path.join.apply(this, paths));

let srcFolder = 'src';
let destFolder = 'dest';
let gulpFolder = 'gulp';
let demoFolder = 'demos';
let demoFiles = '**/*.{html,css,js}';
let mainFile = 'angular-material-sidemenu';
let mainScript = mainFile + '.js';
let mainStylesheet = mainFile + '.css';

export default {
  joinPath,
  srcFolder,
  destFolder,
  demoFolder,
  demoFiles,
  gulpScripts: [
    joinPath(gulpFolder, '**/*.js'),
    'gulpfile.babel.js'
  ],
  srcScripts: [
    joinPath(srcFolder, '**/*.js'),
    'index.js'
  ],
  srcStylesheets: joinPath(srcFolder, '**/*.scss'),
  mainFile,
  mainScript,
  mainStylesheet
};

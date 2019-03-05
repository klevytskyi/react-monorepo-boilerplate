const path = require('path');

const paths = {};

paths.root = path.resolve(__dirname, '..');
paths.nodeModules = path.join(paths.root, 'node_modules');
paths.src = path.join(paths.root, 'src');
paths.outputPath = path.join(paths.root, 'dist');
paths.entryPoint = path.join(paths.src, 'index.jsx');
paths.appConfig = path.join(paths.src, 'config', `${process.env.PROJECT_ENV || 'development'}.js`);
paths.scss = path.join(paths.src, 'styles');
paths.publicFiles = path.join(paths.root, 'public');

module.exports = paths;

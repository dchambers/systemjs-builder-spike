var Builder = require('systemjs-builder');
var builder = new Builder();

builder.buildSFX('index.js', 'dist/index.js').then(function() {
  console.log('Build complete');
  // require('../dist/index');
}).catch(function(err) {
  console.error('Build error', err);
});

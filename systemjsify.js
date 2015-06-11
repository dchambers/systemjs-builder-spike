var Builder = require('systemjs-builder');
var builder = new Builder({
  map: {
    "css": "node_modules/system-css/css.js"
  }
});

builder.buildSFX('index.js').then(function(output) {
  eval(output.source);
}).catch(function(err) {
  console.error('Build error', err);
});

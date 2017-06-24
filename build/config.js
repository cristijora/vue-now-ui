var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');


/*Object.keys(Components).forEach(function(key) {
  externals[`element-ui/packages/${key}`] = `element-ui/lib/${key}`;
});*/


externals = [Object.assign({
  vue: 'vue'
}), nodeExternals()];

exports.externals = externals;

exports.alias = {
  src: path.resolve(__dirname, '../src'),
  main: path.resolve(__dirname, '../src'),
  '@': path.resolve(__dirname,'../src'),
  '@sass': path.resolve(__dirname, '../src/assets/sass'),
  'now-ui': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

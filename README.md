# find-imports [![build status](https://travis-ci.org/cheton/find-imports.svg?branch=master)](https://travis-ci.org/cheton/find-imports) [![Coverage Status](https://coveralls.io/repos/github/cheton/find-imports/badge.svg?branch=master)](https://coveralls.io/github/cheton/find-imports?branch=master)

[![NPM](https://nodei.co/npm/find-imports.png?downloads=true&stars=true)](https://www.npmjs.com/package/find-imports)

Addons for the html-webpack-plugin to alter the html in your webpack config.

## Installation

```bash
npm install --save-dev html-webpack-plugin-addons

## Usage

```js
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginAddons = require('html-webpack-plugin-addons');

var webpackConfig = {
    entry: 'index.js',
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin(),
        // Events (https://github.com/ampedandwired/html-webpack-plugin#events)
        // * html-webpack-plugin-before-html-generation
        // * html-webpack-plugin-before-html-processing
        // * html-webpack-plugin-alter-asset-tags
        // * html-webpack-plugin-after-html-processing
        // * html-webpack-plugin-after-emit
        new HtmlWebpackPluginAddons({
            beforeHTMLGeneration: function(pluginData, next) {
                // html-webpack-plugin-before-html-generation');
                next(null, pluginData);
            },
            beforeHTMLProcessing: function(pluginData, next) {
                // html-webpack-plugin-before-html-processing
                next(null, pluginData);
            },
            alterAssetTags: function(pluginData, next) {
                // html-webpack-plugin-alter-asset-tags
                next(null, pluginData);
            },
            afterHTMLProcessing: function(pluginData, next) {
                // html-webpack-plugin-after-html-processing
                next(null, pluginData);
            },
            afterEmit: function(pluginData, next) {
                // html-webpack-plugin-after-emit
                next(null, pluginData);
            }
        })
    ]
};

module.exports = webpackConfig;
```

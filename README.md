# html-webpack-plugin-addons

[![NPM](https://nodei.co/npm/html-webpack-plugin-addons.png?downloads=true&stars=true)](https://www.npmjs.com/package/html-webpack-plugin-addons)

Addons for the [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) to alter the html in your webpack config.

## Installation

```bash
npm install --save-dev html-webpack-plugin-addons
```

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
        new HtmlWebpackPluginAddons({
            beforeHTMLGeneration: function(pluginData, next) {
                // html-webpack-plugin-before-html-generation
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

# License

This project is licensed under [MIT](https://github.com/cheton/html-webpack-plugin-addons/blob/master/LICENSE).

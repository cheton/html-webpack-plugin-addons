function HtmlWebpackPluginAddons(options) {
    this.options = options || {};
}

HtmlWebpackPluginAddons.prototype.apply = function(compiler) {
    var options = this.options;

    compiler.plugin('compilation', function(compilation) {
        Object.keys(options).forEach(function(key) {
            var cb = options[key];
            var asyncEvent = {
                beforeHTMLGeneration: 'html-webpack-plugin-before-html-generation',
                beforeHTMLProcessing: 'html-webpack-plugin-before-html-processing',
                alterAssetTags: 'html-webpack-plugin-alter-asset-tags',
                afterHTMLProcessing: 'html-webpack-plugin-after-html-processing',
                afterEmit: 'html-webpack-plugin-after-emit'
            }[key];

            if ((typeof cb !== 'function') || !asyncEvent) {
                return;
            }

            compilation.plugin(asyncEvent, function(pluginData, next) {
                cb(pluginData, next);
            });
        });
    });
};

module.exports = HtmlWebpackPluginAddons;

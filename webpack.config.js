var webpack = require("webpack");
var path = require("path");

module.exports = {
    context: __dirname,
    entry: "./src/app.js",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    },
    output: {
        path: __dirname + "/public/javascripts",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: false
            },
            mangle: false,
            sourcemap: false
        })
    ]
};
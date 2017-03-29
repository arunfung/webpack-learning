module.exports = {
    devtool: "sourcemap",
    entry: "./js/entry.js",
    output: {
        filename:"bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
  }
};
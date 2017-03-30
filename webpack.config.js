module.exports = {
    devtool: "sourcemap",
    entry: "./js/entry.js",
    output: {
        filename:"bundle.js"
    },
    module: {
       rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader", // Do not use "use" here
                exclude: /node_modules/,
                options: {
                    presets: ['es2015','stage-0'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    }
    // plugins: [
    //     new webpack.LoaderOptionsPlugin({
    //         // test: /\.xxx$/, // may apply this only for some modules
    //         options: {
    //             babel: {
    //                 presets: ['es2015','stage-0'],
    //                 plugins: ['transform-runtime']
    //             }
    //         }
    //     })
    // ]
};
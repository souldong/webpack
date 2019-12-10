const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    // mode: "development", //development 或 production
    // devServer: {
        // port: 3000,
        // progress: true, // 是否显示进度条
        // open: true
    // },
    entry: {
        app: "./src/index.js",
        vendors: "./src/index2.js"
    },
    output: {
        filename: 'bundle.[contentHash:8].js',
        path: path.resolve(__dirname, "dist")
    },
    module:{
        rules: [
            { test: /\.css$/, use: [
                {
                    loader: 'style-loader',
                    options: {
                        insertAt: 'top'
                    }
                },
                'css-loader',
            ]},
            // { test: /\.less$/, use: [
            //     {
            //         loader: 'style-loader',
            //         options: {
            //             insertAt: 'top'
            //         }
            //     },
            //     'css-loader',
            //     'less-loader'
            // ]}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            { 
                template: './src/index.html', 
                filename: 'index.html' ,
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true
                },
                hash: true
            })
    ]

}
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')

// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
    context: __dirname + "/dist",
    output: {
        publicPath: ASSET_PATH
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false,
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        // This makes it possible for us to safely use env vars on our code
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
        }),
        new VueLoaderPlugin()
    ]
}

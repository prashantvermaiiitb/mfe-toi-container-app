const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
module.exports = {
    //from which file webpack should start the bundling process.
    entry: './index.js',
    output: {
        filename: 'toi.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(png|jpg)/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        // cleaning webpack plugin to clear the dist folder during each build
        new CleanWebpackPlugin(),
        new ModuleFederationPlugin({
            // specify the name for the app which will be used to import in the container app
            name: 'containerApp',
            // remotes property where in we will be mentioning key-value pair
            remotes :{
                'Home': 'homeApp@http://localhost:9001/remoteEntry.js'
            },
            shared: {
                'react': {
                    singleton: true,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: "^18.2.0"
                },
                'styled-components': {
                    singleton: true
                }
            }
        })
    ],
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components')
        },
        extensions: ['.jsx', '.js', '.mobile.js']
    }
}
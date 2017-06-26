var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './client.js',
    output: {
        filename: 'bundle.js',
        path: 'public'
    },
        plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                BROWSER: JSON.stringify('browser')
            }
        }), 
        new ExtractTextPlugin("styles.css")],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
                {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            { 
                test: /\.css$/, 
                loader: ExtractTextPlugin.extract("style-loader", 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') 
            },   
            ]
    }
};

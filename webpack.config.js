const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],

    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
      }


}
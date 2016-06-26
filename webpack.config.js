var webpack = require('webpack');

module.exports = {
    
    entry: './dev/js/main.js',
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    module: {
        loaders : [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: 'src',
        filename: 'js/main.min.js'
    }

};

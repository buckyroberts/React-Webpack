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
    // Allows to check exact errors for a line of source code
    // Instead of it pointing you to the error in the bundle file
    devtool: 'cheap-module-eval-source-map',
    plugins: [
      // Optional: Minify you bundle code.
     new webpack.optimize.UglifyJsPlugin({
         compress: {
             warnings: false,
         },
         output: {
             comments: false,
         }
       })
    ],
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    }
};

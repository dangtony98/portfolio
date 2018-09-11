const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/, use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {}  
              }
            ]
          }
        ]
    },
<<<<<<< HEAD
    mode: 'production',
    devtool: 'source-map',
=======
    devtool: 'cheap-module-eval-source-map',
>>>>>>> ec991fc8b918f86679f4a85574db146206482c30
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}

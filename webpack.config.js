const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: './src/app.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            { from: 'src/assets', to: 'assets' }
        ]),

    ],
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development'
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");


const htmlConfig = {
    title: "Webpack 5",
    chunks: ["main"],
    filename: "index.html",
    inject: "body",
    favicon: "favicon.ico",
    meta: { viewport: "width=device-width,initial-scale=1" },
    template: "./src/template.html"
};

module.exports = {
        entry: './src/index.js',
        output: {
            publicPath: 'http://localhost:5200/',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: {
                        loader: "babel-loader",
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[name].[ext]'
                    }
                }
            ],
        },
        plugins: [
            new ModuleFederationPlugin({
                library: { type: "var", name: "FormApp" },
                name: "FormApp",
                filename: "remoteEntry.js",
                exposes: {
                    "./Form": "./src/Form"
                },
                remotes: {
                    App: "App",
                },
                shared: {
                    "@material-ui/core": {
                        eager: true,
                        singleton: true,
                    },
                    "react": {
                        eager: true,
                        singleton: true,
                    },
                    "react-dom": {
                        eager: true,
                        singleton: true,
                    },
                },
            }),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin(htmlConfig)
        ]
    };

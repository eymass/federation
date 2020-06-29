const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");


const htmlConfig = {
    template: "./src/template.html"
};

module.exports = {
        entry: './src/index.js',
        output: {
            publicPath: 'http://localhost:5000/'
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
                library: {type: "var", name: "app"},
                name: "app",
                remotes: {
                    RemoteForm: "FormApp",
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

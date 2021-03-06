const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    entry: ["@babel/polyfill", ENTRY_FILE],
    mode: MODE,
    module: {
        rules: [
            //Js를 위한 룰
            //js파일을 만났을때
            {
                test: /\.(js)$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
            {
                //scss를 위한 룰
                //scss파일을 만났을때
                test: /\.(scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [autoprefixer({ overrideBrowserlist: "cover 99.5%" })],
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },
    output: {
        path: OUTPUT_DIR,
        filename: "[name].js",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
    ],
};
module.exports = config;

// const CopyPlugin = require("copy-webpack-plugin");

/** @type {import('@rspack/cli').Configuration} */
const config = {
    entry: {
        main: "./src/index.tsx", // 配置项目入口文件
    },
    module: {
        rules: [
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                // type: 'asset/resource',
                use: [
                    {
                        loader: "@svgr/webpack",
                        options: {
                            prettier: false,
                            svgo: false,
                            svgoConfig: {
                                plugins: [{ removeViewBox: false }],
                            },
                            titleProp: true,
                            ref: true,
                        },
                    },
                ],
            },
        ],
    },
    builtins: {
        html: [
            {
                template: "./public/index.html", // 对齐 CRA 生成index.html
                filename: "index.html",
            },
        ],
        copy: {
            patterns: [
                {
                    from: "public",
                    globOptions: {
                        ignore: ["**/index.html"],
                    },
                },
            ],
        },
    },
};
module.exports = config;

/** @type {import('@rspack/cli').Configuration} */
const { merge } = require("webpack-merge");
const baseConfig = require("./config/rspack.config");

const config = merge(baseConfig, {
    // 这里添加自定义配置
});

// 这里可以打印 config
// console.log(config);

module.exports = config;

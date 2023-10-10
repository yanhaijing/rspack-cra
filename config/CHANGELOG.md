# 变更记录

## 1.1.1 (2023-11-15)
- fix: rspack 降级到 0.3.11，0.3.12 有 [bug](https://github.com/web-infra-dev/rspack/issues/4643)

## 1.1.0 (2023-11-14)

-   feat: 支持 rspack 和 webpack 并存，从而实现渐进式升级
-   feat: 升级 @rspack/cli，从 0.3.6 -> 0.3.12
-   feat: builtins.html 替换为 rspack.HtmlRspackPlugin
-   feat: builtins.copy 替换为 rspack.CopyRspackPlugin
-   fix: 模板中 REACT_APP_IS_PRODUCTION 属性的值错误
-   fix: 修复不支持 output.pathinfo 参数的警告
-   fix: 修复不支持 output.devtoolModuleFilenameTemplate 参数的警告

## 1.0.0 (2023-11-10)

-   100% 兼容 cra 的内置能力
-   修复 cra env 文件不支持测试环境部署的问题

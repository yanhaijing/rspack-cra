# Create React App 迁移 rspack示例

本示例使用 yarn 1.22.19 安装依赖

使用 2023-10-19 号的create-react-app脚手架创建的项目，然后按照官网示例迁移：
https://www.rspack.dev/zh/guide/migrate-from-cra.html

## 迁移步骤如下

```bash
$ npx create-react-app cra-demo3 --template typescript
$ npm i @rspack/cli
```

修改package.json

```json
{
  "scripts": {
    "start": "rspack serve",
    "build": "rspack build"
  }
}
```
 
然后添加 rspack.config.js，内容见本项目的 rspack.config.js。

## 迁移遇到的问题

https://github.com/web-infra-dev/rspack/issues/4295
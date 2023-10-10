# Create React App 迁移 rspack 示例

本示例使用 yarn 1.22.19 安装依赖。

使用 2023-10-19 号的 create-react-app@5.0.1 脚手架创建的项目，接入了rspack@0.3.11，同时给 create-react-app 添加了测试环境的构建(build:test)。

## 你的项目如何接入 rspack

第 1 步，将模板里面的如下文件复制到你的项目中：

-   config
-   rspack.config.js

第 2 步，修改 package.json 添加如下字段

```json
{
    "scripts": {
        "start": "rspack serve",
        "build": "rspack build",
        "build:test": "ENV=test rspack build"
    },
    "dependencies": {
        "core-js": "3.30.1"
    },
    "devDependencies": {
        "@rspack/cli": "^0.3.11",
        "webpack-merge": "^5.10.0",
        "eslint-rspack-plugin": "4.0.0-alpha",
        "less": "4.1.3",
        "less-loader": "7.3",
        "postcss-loader": "6.2.1",
        "resolve-url-loader": "4.0.0",
        "sass-loader": "12.6.0"
    }
}
```

现在可以运行如下命令，进行验证：

```bash
yarn start
yarn build
```

## 这个项目搭建步骤如下

```bash
$ npx create-react-app@5.0.1 rspack-cra --template typescript
```

## 迁移遇到的问题

https://github.com/web-infra-dev/rspack/issues/4295

# my-project

## 运行环境 ##
>  
>  Node.js(10.15.0) —— JavaScript 运行环境  
>  npm(6.1.4) —— Nodejs 下的包管理器  
>  vue-cli(3.3.0) —— Vue脚手架
>  本项目推荐使用yarn，生成yarn.lock版本锁定文件
>  1. 全局安装 yarn  
> `$ npm install yarn -g`

>  2. 全局安装 @vue/cli  
> `$ npm install @vue/cli -g`或
> `$ yarn global @vue/cli`

>  3. yarn全局安装 @vue/cli 需要配置环境变量(yarn global bin),修改bin 下面的`*cmd`

>  4.项目中的less为全局的时候，当用到ant-design的ui库的时候，将less将为2.7.3版本
>  `yarn remove less`,`yarn add less@~2.7`

>  5.babel-plugin-import按需加载ui插件
 
## 依赖库 ##
>
> 项目目前用到
> 1.vue+vuex+vue-route
> 2.lodash
> 3.axios
## Project setup
```
yarn install或者npm install
```

### Compiles and hot-reloads for development
```
yarn run serve或者npm run serve
```

### Compiles and minifies for production
```
yarn run build或者npm run build
```
### Compiles and minifies for development
```
yarn run build --mode development或者npm run build --mode development
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

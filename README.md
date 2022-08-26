# taro-vue3-starter
this is taro vue3 template

vue3 + unocss + auto-import + vue-components

base on [taro.3.5.x](https://taro-docs.jd.com/taro/docs/)

## Test

目前仅测试了微信小程序平台，其他平台需要自行测试

## support

* html tag
* vue3
* unocss
* auto-import（不支持H5平台）
* vue-components-unplugin (插件目前热更不生效，需要手动重启，不支持H5平台)
* eslint-vue
* 宏函数(taro3.4.x起)

## usage


```shell

# use degit

npm i -g degit

degit mistjs/taro-vue3-starter myApp

```

## install

```shell

yarn

```

## serve

### weapp

```shell
yarn dev:weapp
```

## unocss

关于转换unocss：

目前仅支持`class`内去编写unocss的样式，尽量不要使用attribute的方式去编写样式，经测试，小程序不能完全兼容。

例如：

### 不推荐用法

```html

<div m-10></div>

<div flex="~ items-center"></div>

```


### 推荐写法

```html

<div class="m-10"></div>

<div class="flex items-center"></div>

```


更多使用方式请查看[unocss官网](https://uno.antfu.me/)

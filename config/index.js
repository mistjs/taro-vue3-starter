import AutoImport from 'unplugin-auto-import/webpack'
import Components from 'unplugin-vue-components/webpack'
const config = {
  projectName: 'taro-unocss',
  date: '2022-5-15',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    'taro-plugin-pinia',
    ['taro-plugin-unocss', {
      preset: {
        remToRpx: {
          baseFontSize: 4,
        },
      },
    }],
    [
      '@tarojs/plugin-framework-vue3',
      {
        vueLoaderOption: {
          // 添加 vue-macros 支持
          reactivityTransform: true, // 开启vue3响应性语法糖
        },
      },
    ],
  ],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    },
  },
  framework: 'vue3',
  mini: {
    webpackChain(chain) {
      // https://github.com/antfu/unplugin-auto-import
      chain.plugin('unplugin-auto-import').use(AutoImport({
        imports: [
          'vue',
          // https://vuejs.org/guide/extras/reactivity-transform.html#refs-vs-reactive-variables
          'vue/macros',
        ],
        dts: 'src/auto-imports.d.ts',
        dirs: [
          'src/composables',
          'src/stores',
        ],
        vueTemplate: true,
      }))
      // 添加组件按需引入, 自动引入 `src/components` 目录下的组件
      // https://github.com/antfu/unplugin-vue-components
      chain.plugin('unplugin-vue-components').use(Components({
        dts: 'src/components.d.ts',
        dirs: ['src/components', 'src/layouts'],
      }))
      chain.merge({
        module: {
          rule: {
            mjsScript: {
              test: /\.mjs$/,
              include: [/pinia/],
              use: {
                babelLoader: {
                  loader: require.resolve('babel-loader'),
                },
              },
            },
          },
        },
        plugins: [
        ],
      })
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        },
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
}

module.exports = function(merge) {
  if (process.env.NODE_ENV === 'development')
    return merge({}, config, require('./dev'))

  return merge({}, config, require('./prod'))
}

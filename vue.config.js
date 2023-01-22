module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  productionSourceMap: false,
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/vars.scss";`,
      },
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: 'raw-loader',
        },
      ],
    },
  },
};

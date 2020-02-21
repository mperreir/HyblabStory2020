module.exports = {

  // build: {
  // assetsPublicPath: ''
  // }

  publicPath: '',

  lintOnSave: true,
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  }

  // chainWebpack: config => {
  //       config.module
  //           .rule("vue")
  //           .use("vue-svg-inline-loader")
  //               .loader("vue-svg-inline-loader")
  //               .options({ /* ... */ });
  //   }
};

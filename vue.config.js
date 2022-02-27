module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "华为手机销售大屏";
      return args;
    });
  },
};

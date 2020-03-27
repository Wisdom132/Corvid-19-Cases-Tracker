module.exports = {
  devServer: {
    proxy: "https://www.bing.com/covid/data"
  },
  chainWebpack: config => {
    config.module.rules.delete("eslint");
  }
};

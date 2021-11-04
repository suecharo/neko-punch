module.exports = {
  lintOnSave: false,

  devServer: {
    port: process.env.VUE_PORT || 3000,
  },

  transpileDependencies: ["vuetify"],
};

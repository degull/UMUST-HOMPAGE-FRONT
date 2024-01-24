const { createProxyMiddleware } = require("http-proxy-middleware");

const url = "https://eb-umust.umust302.shop";

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/quotes", {
      target: url,
      changeOrigin: true,
    })
  )
   };
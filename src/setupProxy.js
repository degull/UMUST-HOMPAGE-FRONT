import { createProxyMiddleware } from "http-proxy-middleware";

const url = "https://eb-umust.umust302.shop";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: url,
      changeOrigin: true,
    })
  )
   };
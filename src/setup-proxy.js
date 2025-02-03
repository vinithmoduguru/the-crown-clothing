require("dotenv").config();
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  const proxy = createProxyMiddleware("/api/**", {
    target: process.env.BACKEND_URL,
    xfwd: true,
    changeOrigin: true,
    secure: true,
    headers: {
      Host: require("url").parse(process.env.BACKEND_URL).host,
    //   Cookie: `grafana_session=${process.env.GRAFANA_SESSION}`,
      Accept: "*/*",
      "User-Agent": "js_apps_devbox/1.0",
    },
  });

  app.use("/rai/api/**", proxy);
};

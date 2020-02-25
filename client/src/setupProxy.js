const { createProxyMiddleware } = require("http-proxy-middleware");
console.log(typeof proxy);
module.exports = function(app) {
  app.use(
    createProxyMiddleware("/api/login", {
      target: "http://localhost:3001/",
      changeOrigin: true
    })
  );
  app.use(
    createProxyMiddleware("/api/logout", {
      target: "http://localhost:3001/",
      changeOrigin: true
    })
  );
};

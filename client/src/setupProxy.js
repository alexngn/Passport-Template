const { createProxyMiddleware } = require("http-proxy-middleware");
console.log(typeof proxy);
module.exports = function(app) {
	app.use(
		createProxyMiddleware("/login", { target: "http://localhost:3001/" })
	);
};

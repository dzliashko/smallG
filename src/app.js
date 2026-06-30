import health from "./routes/health.js";
import index from "./routes/index.js";

export default function app(req, res) {
	if (req.method === "GET" && req.url === "/") {
		index(req, res);
	} else if (req.method === "GET" && req.url === "/health") {
		health(req, res);
	} else {
		res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
		res.end("Not Found");
	}
}

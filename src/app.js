import health from "./routes/health.js";
import index from "./routes/index.js";
import notFound from "./routes/notFound.js";

export default function app(req, res) {
	if (req.method !== "GET") {
		notFound(res);
		return;
	}
	switch (req.url) {
		case "/":
			index(req, res);
			break;
		case "/health":
			health(req, res);
			break;
		default:
			notFound(res);
	}
}

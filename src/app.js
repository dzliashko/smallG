export default function app(req, res) {
	if (req.method === "GET" && req.url === "/") {
		res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
		res.end("My Inoreader API");
		return;
	}

	if (req.method === "GET" && req.url === "/health") {
		res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
		res.end(JSON.stringify({ status: "ok" }));
		return;
	}

	res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
	res.end("Not Found");
}

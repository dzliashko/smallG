export default function index(req, res) {
	res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
	res.end("My Inoreader API");
}

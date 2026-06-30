export default function health(req, res) {
	res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
	res.end(JSON.stringify({ status: "ok" }));
	return;
}

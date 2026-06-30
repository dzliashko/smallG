export default function notFound(res) {
	res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
	res.end("Not Found");
}

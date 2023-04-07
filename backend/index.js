import app from './app.js'

const port = process.env.PORT || 3001

app.listen(port, (err) => {
	if(err) {
		return console.log(err);
		
	}
	console.log(`Server has been started http://localhost:${port}...`)

// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

// app.use(cors({
// 	exposedHeaders: '*'
// }))

// app.use("/", createProxyMiddleware({
// 	target: API_SERVICE_URL,
// 	changeOrigin: true,
// 	ws: true,
// 	logLevel: "debug"
// }))

// app.get('/codewars', (req, res) => {
// 	console.log(res);
// });

})

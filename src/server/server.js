import express from "express"
import { router } from "../routes/index.route"
import bodyParser from "body-parser"
import { env, db } from "../db/db"

try {
	await db.init()

	if (env === "development") {
		const { seed } = await import("../db/seed")
		seed()
	}

	const server = express()
	server.use(bodyParser.json())

	server.use("/", router)

	server.get('/', function(req, res) {
		res.send({
			"Output": "Hello Worldzz!"
		});
	});
	
	server.post('/', function(req, res) {
		res.send({
			"Output": "Hello Worldzz!"
		});
	});

} catch (error) {
	console.error("Error: Failed to start server.", error)
}

module.exports = server

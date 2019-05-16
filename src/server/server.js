import express from "express"
import { router } from "../routes/index.route"
import bodyParser from "body-parser"
import { env, db } from "../db/db"
import { seed } from "../db/seed"

db.init()

// if (env === "development") {
	// 	const { seed } = await import("../db/seed")
	// 	seed()
	// }

// assume prod === development for now
seed()

export const app = express()
app.use(bodyParser.json())

app.use("/", router)

// module.exports = app


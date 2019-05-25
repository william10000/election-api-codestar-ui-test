import express from "express"
import { router } from "../routes/index.route"
import bodyParser from "body-parser"

export const app = express()
app.use(bodyParser.json())

app.use("/", router)

// module.exports = app


import { app } from "./server"

const start = async () => {
	try {
		const port = 3000
		app.listen(port, () => console.log(`App listening on port ${port}!`))
	} catch (error) {
		console.error("Error: Failed to start app.", error)
	}
}

start()

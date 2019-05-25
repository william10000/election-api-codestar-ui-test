/* Returns all candidates, with limit and offset. */
export function getAllCandidates(req, res) {
	try {
		const results = "getAllCandidates called"
		res.status(200).json(results)
		return
	} catch (error) {
		console.error(error)
		res.status(500).send("Error getting candidates.")
		return
	}
}

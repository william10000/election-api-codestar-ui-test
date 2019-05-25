/* Returns all contributions. */
export function getAllContributions(req, res) {
  try {
    const results = "getAllContributions called"
    res.status(200).json(results)
    return
  } catch (error) {
    console.error(error)
    res.status(500).send("Error getting contributions.")
    return
  }
}

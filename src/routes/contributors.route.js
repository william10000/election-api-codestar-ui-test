/* Returns all contributors */
export function getAllContributors(req, res) {
  try {
    const results = "getAllContributors called"
    res.status(200).json(results)
    return
  } catch (error) {
    console.error(error)
    res.status(500).send("Error getting contributors.")
    return
  }
}

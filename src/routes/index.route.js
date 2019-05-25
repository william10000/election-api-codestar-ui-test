import express from "express"
import {
  getAllCandidates,
} from "./candidates.route"
import {
  getAllContributors,
} from "./contributors.route"
import {
  getAllContributions,
} from "./contributions.route"

export const router = express.Router()

/* Get all. */
router.get("/candidates", getAllCandidates)
router.get("/contributors", getAllContributors)
router.get("/contributions", getAllContributions)

router.get('/', function(req, res) {
  res.send({
    "Output": "Hello Worldzz Get!"
  });
});

router.post('/', function(req, res) {
  res.send({
    "Output": "Hello Worldzz Post!"
  });
});

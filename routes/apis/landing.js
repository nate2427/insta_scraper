const router = require("express").Router();
const { instagram } = require("instagram-scraper-api");

router.post("/api/get-user-data", async (req, res) => {
  // return if the username is empty
  const username = req.body.username;

  // get the username passed from da front end
  try {
    const data = await instagram.user(username);
    console.log(data);
    res.json(data);
  } catch (e) {
    res
      .status(404)
      .json({ message: `couldnt find user: ${username}`, error: e });
    // get the username passed from da front end
  }
});

module.exports = router;

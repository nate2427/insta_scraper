const router = require("express").Router();
const path = require("path");

// configure a simple get request on the router
router.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

module.exports = router;

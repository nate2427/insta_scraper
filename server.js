const express = require("express");
const routes = require("./routes/landing");
const api_routes = require("./routes/apis/landing");
const bodyParser = require("body-parser");
// To load env vars so that i dont have to put creds into the code
require("dotenv").config();
const path = require("path");

// create the app
const app = express();
const PORT = process.env.PORT || 54321;

// tell the app to check the routes on each connection
app.use(bodyParser.json());
app.use(routes);
app.use(api_routes);
app.use(express.static(path.join(__dirname, "frontend/build")));

// connect to the mongo client and after connecting, print message and start the webserver

// start the webserver
app.listen(PORT, () => {
  console.log(
    `\nServer started and listening on port ${PORT} --> http://localhost:${PORT}\n`
  );
});

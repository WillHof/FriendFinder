const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let PORT = 8080
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, () => console.log("Application listening on port " + PORT))
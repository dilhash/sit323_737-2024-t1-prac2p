const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    console.log("Server is running"); // Display message in the console for server activity tracking
    res.render("index"); // Render the 'index.ejs' file located in the 'views' folder
});

app.listen(3000); // Start the server on port 3000

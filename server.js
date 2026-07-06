const express = require("express");
const app = express();
const resturaunts = require("./data");
app.use(express.static("public"));

app.get(`/`, (req, res) => {
  res.render(`homepage.ejs`);
});

app.get(`/resturaunts`, (req, res) => {
  res.render(`all-resturaunts.ejs`, { allResturants: resturaunts });
});

app.get("/resturaunts/:id", (req, res) => {
  const foundresturaunt = resturaunts.find((oneResturant) => {
    return oneResturant.id === Number(req.params.id);
  });

  res.render(`resturaunts-details.ejs`, { foundresturaunt: foundresturaunt });
});

// Routes go here
app.listen(3000, () => {
  console.log("App is Running");
}); // listen on port 3000

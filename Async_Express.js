const express = require('express');
const app = express();

const A = (req, res, next) => {
  console.log("Hello from A");
  next();
}

const B = (req, res, next) => {
  console.log("Hello from B");
  next();
}

const C = (req, res) => {
  res.send("Hello world");
}


//This only executes after you load the page
app.get('/', [A, B, C]);


//This gives an output before the app.get line
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const apiRoutes = (require("./routes"))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "HEAD, PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
app.use(apiRoutes)

app.listen(8080, function(err){
  if(!err)
  console.log("Site is live"); else console.log(err)

});

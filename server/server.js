require("dotenv").config();

const express = require("express");
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env
const massive = require("massive");
const houseCtrl = require('./controllers/houseCtrl')

app.use(express.json());


//endpoints
app.get('/api/house', houseCtrl.getAll)









massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("connected to the database!");
  app.listen(SERVER_PORT, () => {
    console.log(`listening on port ${SERVER_PORT}!`);
  });
});

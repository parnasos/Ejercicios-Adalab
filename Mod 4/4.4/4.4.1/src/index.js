const express = require("express");
const cors = require("cors");

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// const order = orders.find((order) => (order.Id = 456));
// console.log("Found order :", order);

// endpoints, more info about express response: https://expressjs.com/es/api.html#res

// const users.id="123";
// const orders.id="456";

app.get("/users/123/orders/456 ", (req, res) => {
  console.log("Url params:", req.params);
  console.log("Url param ordersId:", req.params.promoId);
  console.log("Url param usersId:", req.params.usersId);
  res.json({ result: "ok" });
});

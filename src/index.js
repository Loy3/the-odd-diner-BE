const express = require("express");

const paymentRoutes = require("./router/paymentRoutes");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/payments", paymentRoutes);


app.listen(PORT, () => {
    console.log("Api is listening on port", PORT);
})
const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./drivers/conect-db");

const app = express();

//setters
app.set("PORT", process.env.PORT);

//middelware (use)
app.use(cors());
app.use(express.json());
app.use("/client", require("./routes/clients"));
app.use("/reservation", require("./routes/reservations"));
app.use("/login", require("./routes/login"));
app.use("/", (req, res) =>
  res.send("Back del proyecto de creación y consumo de APIs")
);

app.listen(app.get("PORT"), () =>
  console.log(`server listen on ${app.get("PORT")}`)
);

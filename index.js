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
app.use("/affiliate", require("./routes/affiliate"));
app.use("/discipline", require("./routes/discipline"));
app.use("/event", require("./routes/events"));
app.use("/result", require("./routes/result"));
app.use("/", (req, res) =>
  res.send("Back del proyecto de creación y consumo de APIs")
);

app.listen(app.get("PORT"), () =>
  console.log(`server listen on ${app.get("PORT")}`)
);

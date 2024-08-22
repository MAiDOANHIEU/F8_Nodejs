const express = require("express");
const app = express();
const port = 3000;

app.get("/doanhieu", (req, res) => {
  return res.send("Chào mừng bạn đến với server của Doãn Hiếu!!!!!");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}}`)
);

const express = require("express");

const app = express();
const port = 4000;
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Content-Length,Content-Range");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.get("/blogs", (req, res) => {
  res.json([
    {
      id: 1,
      heading: "High-End Luxury Auto Sales with Bitcoin are Here to Stay.",
      desc: "Dolores consequatur iusto cupiditate dicta eum culpa. Debitis rerum rerum",
    },
    {
      id: 2,
      heading: "High-End Luxury Auto Sales with Bitcoin are Here to Stay. 2",
      desc: "Dolores consequatur iusto cupiditate dicta eum culpa. Debitis rerum rerum",
    },
    {
      id: 3,
      heading: "High-End Luxury Auto Sales with Bitcoin are Here to Stay. 3",
      desc: "Dolores consequatur iusto cupiditate dicta eum culpa. Debitis rerum rerum",
    },
    {
      id: 4,
      heading: "High-End Luxury Auto Sales with Bitcoin are Here to Stay. 4",
      desc: "Dolores consequatur iusto cupiditate dicta eum culpa. Debitis rerum rerum",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

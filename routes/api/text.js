const { Router } = require("express");
const Text = require("../../models/text");

const router = Router();

router.get("/", async (req, res) => {
  const texts = await Text.find({
    $or: [{ title: { $regex: "T" } }, { author: { $regex: /J/i } }],
  })
    .limit(3)
    .skip(3);
  res.json(texts);
});

router.post("/", async (req, res) => {
  const data = [
    {
      title: "Lorem ipsum dolor sit amet",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "John Doe",
    },
    {
      title: "Nulla gravida felis vitae",
      body: "Nulla gravida felis vitae consectetur pellentesque.",
      author: "Jane Smith",
    },
    {
      title: "Suspendisse consequat magna",
      body: "Suspendisse consequat magna non turpis sagittis, et congue sapien eleifend.",
      author: "David Johnson",
    },
    {
      title: "Pellentesque habitant morbi tristique",
      body: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      author: "Michael Wilson",
    },
  ];
  //   for (let i = 1; i <= 10; i++) {
  //     const record = {
  //       title: `Title ${i}`,
  //       body: `Body ${i}`,
  //       author: `Author ${i}`,
  //     };
  //     data.push(record);
  //   }
  const text = await Text.insertMany(data);
  res.json(text);
});

router.delete("/", async (req, res) => {
  const { title } = req.query;
  const text = await Text.deleteOne({ title });
  res.json(text);
});

module.exports = router;

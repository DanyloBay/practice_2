const { model, Schema } = require("mongoose");

const textSchema = new Schema({
  title: String,
  body: String,
  author: {
    type: String,
    required: [true, "Please enter a author name!"],
  },
});

const Text = model("text", textSchema);

module.exports = Text;

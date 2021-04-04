const mongoose = require("mongoose");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const authorSchema = new schema({
  name: String,
  author: String,
  genre: String,
});

module.exports = mongoose.model("Author", authorSchema);
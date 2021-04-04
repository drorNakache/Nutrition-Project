const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  name: String,
  age: Number,
  height: String,
  weightreport:{weekNumber:String,weightMeasure:String}

});

module.exports = mongoose.model('User', userSchema);
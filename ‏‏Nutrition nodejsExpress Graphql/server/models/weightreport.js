const mongoose = require("mongoose");
const schema = mongoose.Schema;

const WeightReportSchema = new schema({
    weekNumber: String,
   weightMeasure: String,
   userId: String,
 
});

module.exports= mongoose.model("WeightReport",WeightReportSchema)

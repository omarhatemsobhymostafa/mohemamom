const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
mongoose.connect(process.env.MONGO_URI).then(()=>
    {
        console.log("DB CONNECTED SUCCESSFULLY");
    }).catch((err)=>{
        console.log("exit with errors" , err);
    })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const weeksSchema = new mongoose.Schema({
    weekNumber:String,
    babySize:String,
    WhappenInBody:String,
    sympotyms:String,
    babyLooks:String,
    option1:String,
    option2:String,
})

const WeeksModel = mongoose.model("Weeks" , weeksSchema)

app.get("/weeksdata" , async(req,res)=>{
    const WeeksData = await WeeksModel.find().limit(20)

    const normalizedWeeks = WeeksData
      .map((item) => {
        const weekNumber = String(item.weekNumber || "")
        const numericWeek = Number(weekNumber.replace(/^week_/, ""))

        return {
          ...item.toObject(),
          numericWeek: Number.isNaN(numericWeek) ? null : numericWeek,
        }
      })
      .filter((item) => item.numericWeek !== null)
      .filter((item) => item.numericWeek >= 1 && item.numericWeek <= 41)
      .sort((a, b) => a.numericWeek - b.numericWeek)
      .filter((item, index, array) => array.findIndex((entry) => entry.numericWeek === item.numericWeek) === index)
      .map(({ numericWeek, ...rest }) => rest)

    res.json(normalizedWeeks)
})
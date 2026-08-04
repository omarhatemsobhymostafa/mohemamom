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
    const WeeksData = await WeeksModel.find()
    res.json(weeksData)
})

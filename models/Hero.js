const mongoose = require("mongoose")


const HeroSchema = new mongoose.Schema ({
    superHero : {
        type: String,
        required:[true,"please enter a name"],
        unique:true,
        trim:true

    },
    realName : {
        type: String,
        required:true,
        maxlength:[200,"please keep the name short"]
    }
}) 

module.exports = mongoose.models.Hero || mongoose.model("Hero" , HeroSchema)


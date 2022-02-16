/* eslint-disable import/no-anonymous-default-export */
import dbConnect from "../../../db/dbConnection";

import Hero from "../../../models/Hero";

dbConnect()

//get all records and post all records

export default async (req,res) => {
    const {method} = req 
    switch (method) {
        case "GET":
            try {
                const heros = await Hero.find({})
                res.status(200).json({success:true,heros})
            } catch (err) {
                res.status(400).json({success:false})
            }
            break;
            case "POST":
            try {
                const heros = await Hero.create(req.body)
                res.status(200).json({success:true,heros})
            } catch (err) {
                res.status(400).json({success:false})
            }

    
        default:
            res.status(400).json({success:false})
            break;
    }
}
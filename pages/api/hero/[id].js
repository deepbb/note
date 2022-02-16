import dbConnect from "../../../db/dbConnection";

import Hero from "../../../models/Hero";

dbConnect()

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req,res) => {
    const {
        query:{id},
        method} = req 

        switch (method) {
            case "GET":
                try {
                    const hero = await Hero.findById(id)
                    if(!hero) {
                        res.status(400).json({success:false})
                    }
                    res.status(200).json({success:true,hero})
                } catch(err) {
                    res.status(400).json({success:false})
                }
                break;
                case "PUT":
                    try {
                        const hero = await Hero.findByIdAndUpdate(id,req.body, {
                            new:true,
                            runValidators:true
                        })
                        if(!hero) {
                            res.status(400).json({success:false})
                        }
                        res.status(200).json({success:true,hero})
                    } catch(err) {
                        res.status(400).json({success:false})
                    }
                    break;
                    case "DELETE":
                    try {
                        const hero = await Hero.findByIdAndDelete({_id:id})
                        res.status(200).json({success:true,hero})
                    } catch(err) {
                        res.status(400).json({success:false})
                    }
                    break;
            default:
                res.status(400).json({success:false})
                break;
        }
}
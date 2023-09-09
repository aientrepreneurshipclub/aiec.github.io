const express = require('express')
const app = express()
const router = express.Router()
const {createMember, getAllMembers} = require("../models/members")

router.post("/create",async(req,res)=>{
    const {attendeeId, position, community}=req.body
    const createMember= await createMember(attendeeId, position, community)
    res.json({message:"done"})
})
router.get("/getAll",async(req,res)=>{
    const members= await getAllMembers()
    res.json({members})
})
module.exports = router
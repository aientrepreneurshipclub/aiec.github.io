const express = require('express')
const app = express()
const router = express.Router()
const {getAttendeeIdsByEmails,updateTeam} = require("../models/attendees")
const {
    createTeam
} = require("../models/teams")
router.post("/create",async(req,res)=>{
    const {eventId, teamName, teamProposal, attendeeEmails}=req.body
    const attendeeIds= await getAttendeeIdsByEmails(attendeeEmails)
    const {success}=await createTeam(eventId, teamName, teamProposal, attendeeIds);
    res.json(success)
})
router.post("/update",async(req,res)=>{
    const {teamId, teamName, teamProposal, attendeeEmails}=req.body
    const attendeeIds= await getAttendeeIdsByEmails(attendeeEmails)
    const {success}=await updateTeam(teamId, teamName, teamProposal, attendeeIds);
    res.json(success)
})
module.exports = router
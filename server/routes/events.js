const express = require('express')
const app = express()
const router = express.Router()
const {
    createEvent,
    getEvents,
    getEvent,
    getUpcomingEvents,
    addAttendeeToEvent,
    updateEvent,
    updateSpeakers,
    deleteEvent,
    createHearAboutUs,
    cleanup,
  }= require("../models/events")

router.get("/",async(req,res)=>{
    const events= await getEvents();
    await cleanup();
    res.json({events})
})
router.get("/upcoming",async(req,res)=>{
    const events= await getUpcomingEvents(true);
    if(events)
        res.json({events})
    else
        res.json({events:[]})
    await cleanup();
})
router.get("/past",async(req,res)=>{
    const events= await getUpcomingEvents(false);
    if(events)
        res.json({events})
    else
        res.json({events:[]})
    await cleanup();
})
router.post("/create-event",async(req,res)=>{
    await createEvent(req.body);
    await cleanup();
    res.sendStatus(200)
})
router.get("/add/:eventId/:attendeeId",async(req,res)=>{
    const {eventId,attendeeId}=req.params
    const {message,error}=await addAttendeeToEvent(eventId, attendeeId);
    if(error)
        res.json({error})
    res.json({message})
    await cleanup();
})
router.get("/answer/:eventId/:attendeeId/:answer",async(req,res)=>{
    const {eventId,attendeeId,answer}=req.params
    await createHearAboutUs(eventId,attendeeId,answer);
    res.json({message:"done"})
    await cleanup();
})
// router.post("/update/:id",async(req,res)=>{
//     await updateEvent(req.params.id, req.body);
//     await cleanup();
//     res.sendStatus(200)
// })
// router.post("/update/:eventId/speakers",async(req,res)=>{
//     await updateSpeakers(req.params.eventId, req.body);
//     await cleanup();
//     res.sendStatus(200)
// })
// router.delete("/delete/:id",async(req,res)=>{
//     await deleteEvent(req.params.id);
//     await cleanup();
//     res.sendStatus(200)
// })
// router.get("/:id",async(req,res)=>{
//     const event= await getEvent(req.params.id);
//     await cleanup();
//     res.json({event})
// })

module.exports= router
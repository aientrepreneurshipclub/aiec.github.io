const express = require('express')
const app = express()
const router = express.Router()
const jwt = require('jsonwebtoken');
const {
    createAttendee,
    activateAttendee,
    getAttendees,
    getAttendee,
    getAttendeeById,
    getEmails,
    updateAttendee,
    deleteAttendee,
    addAttendeeToEvent,
    removeAttendeeFromEvent,
    cleanup,
} = require("../models/attendees")
const destroyImage = require("../utils/destroyImage")
const sendMail = require("../utils/sendMail")
const { encrypt, decrypt } = require("../utils/crypto")

router.get("/", async (req, res) => {
    const attendees = await getAttendees();
    await cleanup();
    res.json({ attendees })
})
router.post("/get",
    async (req, res) => {
        const {id} = jwt.verify(req.body.token, process.env.JWT_SECRET)
        const attendee = await getAttendeeById(id)
        res.json({ attendee })
    }
)
router.get("/get/:email/:password", async (req, res) => {
    const { email, password } = req.params;
    const {error,success,attendee} = await getAttendee(email, password);
    if (error) {
        res.json({ error })
    }
    else {
        const token = jwt.sign({ id: attendee.id }, process.env.JWT_SECRET, { expiresIn: '356d' })
        res.json({ success, token })
    }
    await cleanup();
}
)
router.post("/create", async (req, res) => {
    const { error, success, attendee } = await createAttendee(req.body);
    if (error) {
        destroyImage(req.body.image.public_id)
        res.json({ error })
    }
    else {
        sendMail(
            "mostafadragonx@gmail.com", encrypt(attendee.id))
        res.json({ success })
    }
    await cleanup();
})
router.post("/activate", async (req, res) => {
    const { activateCode } = req.body
    const id = decrypt(activateCode)
    const { error, success, attendee } = await activateAttendee(id);
    if (error) {
        res.json({ error })
    }
    else {
        const token = jwt.sign({ id: attendee.id }, process.env.JWT_SECRET, { expiresIn: '356d' })
        res.json({ success, token })
    }
    await cleanup();
})
router.get("/getEmails", async (req, res) => {
    const response = await getEmails();
    const emails=[]
    for(let row of response)
      emails.push(row.email)
    res.json({ emails })
    await cleanup();
})
// router.post("/update/:id",async(req,res)=>{
//     await updateAttendee(req.params.id, req.body);
//     await cleanup();
//     const token = jwt.sign(req.body, process.env.JWT_SECRET,{expiresIn: '356d'});
//     res.cookie('token', 'Bearer '+token, { expires: new Date(Date.now() + 1000*60*60*24*30*12)})
//     res.sendStatus(200)
// })

// router.delete("/delete/:id",async(req,res)=>{
//     await deleteAttendee(req.params.id);
//     await cleanup();
//     res.sendStatus(200)
// })
// router.post("/enroll/:id",expressjwt({ secret:process.env.JWT_SECRET, algorithms: ["HS256"] }),
//     async(req,res)=> {
//         await addAttendeeToEvent(req.params.id, req.auth.id);
//         await cleanup();
//         res.sendStatus(200)
//     }
// )
// router.delete("/unenroll/:id",expressjwt({ secret:process.env.JWT_SECRET, algorithms: ["HS256"] }),
//     async(req,res)=> {
//         await removeAttendeeFromEvent(req.params.id, req.auth.id);
//         await cleanup();
//         res.sendStatus(200)
//     }
// )
// router.get("/:id",async(req,res)=>async(req,res)=>{
//     const event= await getAttendeeById(req.params.id);
//     await cleanup();
//     res.json({event})
// })

module.exports = router
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const eventRouter = require("./routes/events");
const attendeRouter = require("./routes/attendees");
const teamsRouter = require("./routes/teams");
const membersRouter = require("./routes/members");
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use((req, res, next) => {
  const accessKey = req.headers["x-access-key"];
  if (accessKey == process.env.ACCESS_KEY) next();
  else
    res.json({
      error: "access key is requried to send request to this server",
    });
});
app.get("/", (req, res) => {
  res.json({ message: "play with fire" });
});
app.use("/events", eventRouter);
app.use("/attendees", attendeRouter);
app.use("/teams", teamsRouter);
app.use("/members", membersRouter);
app.listen(3000, () => {
  console.log(`app running at ${process.env.APP_URL}`);
});

import { Fragment, useEffect, useState } from "react";
import Slider from "../components/Slider";
import styles from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setUpcomingEvents, setPastEvents } from "../store/eventsSlice";
import Map from "../components/Map";
import translator from "/translator.js";
import { getTime } from "../api/helpers";
import Collaborators from "../components/Collaborators";
import { useParams, useNavigate } from "react-router-dom";
import { registration,hearAboutUs } from "../api/events"
import { toast } from 'react-toastify';
import { switchSign } from "../store/signSlice";
import { setSign, setSignAndEvent } from "../store/signSlice"
const Event = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const lang = useSelector((state) => state.lang.value);
  const attendee = useSelector((state) => state.attendee.value);
  const isRegisted = useSelector((state) => state.isRegisted.value);
  const { eventsType, eventId } = useParams();
  const [show, setShow] = useState(false);
  const [hear, setHear] = useState("");

  const events = useSelector((state) => state.events[eventsType]);
  const emtyEvent = {
    address: { arabic: "", english: "" },
    collaborators: [],
    date: "2000-00-00T00:00:00.000Z",
    description: { arabic: "", english: "" },
    id: "+",
    images: [],
    location: { lat: 0, lng: 0 },
    name: { arabic: "", english: "" },
    timeline: "",
    withTeams: false,
    upcoming: true,
    locationImage: "",
    teams: [],
    teamsMembers: [],
  };
  const event = events.find((event) => event.id == eventId);
  const {
    id,
    name,
    description,
    images,
    date,
    timeline,
    collaborators,
    location,
    address,
    upcoming,
    locationImage,
    withTeams,
    teams,
  } = event || emtyEvent;
  const handelRegister = async () => {
    if (isRegisted[id])
      toast.info(translator.alreadyRegisted[lang])
    else if (attendee?.id) {
      setShow(true);
      if(!show){
        const { message } = await registration(attendee.id, id)
        toast.success(message[lang])
      }
    }
    else {
      dispatch(switchSign())
    }
  }
  const handelQuestion = async (e) => {
    e.preventDefault()
    await hearAboutUs(event.id,attendee.id,e.target.question.value)
    setShow(false)
  }
  const handelTeamRegister = async () => {
    setShow(true);
    if(!show){
      dispatch(setSignAndEvent({ team: "sign-team", event }))
    }
  }
  useEffect(() => {
    if (eventsType == "upcoming") dispatch(setUpcomingEvents());
    else dispatch(setPastEvents());
    if (!event && events.length)
      navigate("/events/upcoming")
  }, [eventsType, dispatch, navigate, event, events]);
  useEffect(() => {
    const desc=document.querySelector(`.${styles.description}`)
    desc.innerHTML=description?.english ? description[lang] : "loading...."
  }, [description,lang]);
  return (
    <div className={styles.container}>
      {
        show &&
        <div className={styles.question}>
          <form onSubmit={handelQuestion}>
            <label htmlFor="question">
              {translator.question[lang]}
            </label>
            <select id="question" name="question" required>
              {
                collaborators
                  .filter((collaborator) => collaborator?.type?.english == "Partners")
                  .map((sponsor, index) =>
                    <option value={sponsor?.type?.english} key={index}>
                      {sponsor?.type[lang]}
                    </option>
                  )
              }
            </select>
            <input type="submit" value={translator.confirm[lang]} />
          </form>
        </div>
      }
      <img src={images[0]} className={styles.image} />
      <div className={styles.title}>
        <div className={styles.date}>{getTime(date, lang)?.date}</div>
        <div style={lang == "arabic" ? { right: "0px" } : { left: "0px" }} className={styles.name}>{name?.english ? name[lang] : "loading...."}</div>
        {
          withTeams ?
            <div className={styles.withTeams}>
              <button className={styles.individual} onClick={handelRegister}>
                {translator.individual[lang]}
              </button>
              <button className={styles.team} onClick={handelTeamRegister}>
                {translator.team[lang]}
              </button>
            </div>
            :
            <button className={styles.register} onClick={handelRegister}>
              {isRegisted[id] ? translator.registed[lang] : upcoming ? translator.register[lang] : translator.close[lang]}
            </button>
        }
      </div>
      <div className={styles.description}></div>
      <img src={timeline} className={styles.timeline} />
      {
        collaborators.length &&
        <Fragment>
          <Collaborators color="var(--blue)" collaborators={collaborators.filter((collaborator) => collaborator.type.english == "Speakers")} />
          <Collaborators color="var(--green)" collaborators={collaborators.filter((collaborator) => collaborator.type.english == "Mentors")} />
          <Collaborators color="var(--turbo)" collaborators={collaborators.filter((collaborator) => collaborator.type.english == "Instructors")} />
          <Collaborators color="var(--dark-green)" collaborators={collaborators.filter((collaborator) => collaborator.type.english == "Judgers")} />
        </Fragment>
      }
      {images.slice(1).length ? <Slider data={images.slice(1)} /> : ""}
      <div className={styles.mapContainer} style={{ backgroundImage: `url(${locationImage})` }}>
        <div className={styles.address}>
          <div>{address?.english ? address[lang] : "loading...."}</div>
          <Map location={location} />
        </div>
      </div>
      <div className={styles.sponsors}>
        <div className={styles.sponsorsTitle}>{lang == "arabic" ? "الرعاة" : "Sponsors"}</div>
        {
          collaborators
            .filter((collaborator) => collaborator.type.english == "Sponsors")
            .map((sponsor, index) =>
              <div className={styles.sponsor} key={index} onClick={() => window.location.replace(sponsor.linkedin)}>
                <img src={sponsor.image} className={styles.sponsorImage} />
              </div>
            )
        }
      </div>
      <div className={styles.sponsors}>
        <div className={styles.sponsorsTitle}>{lang == "arabic" ? "الشركاء" : "Partners"}</div>
        {
          collaborators
            .filter((collaborator) => collaborator.type.english == "Partners")
            .map((sponsor, index) =>
              <div className={styles.sponsor} key={index} onClick={() => window.location.replace(sponsor.linkedin)}>
                <img src={sponsor.image} className={styles.sponsorImage} />
              </div>
            )
        }
      </div>

    </div>
  );
};

export default Event;

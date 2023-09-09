import { useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import {setUpcomingEvents, setPastEvents} from "../store/eventsSlice"
import EventCard from "../components/EventCard";
import styles from "./styles.module.css"
import { useSelector, useDispatch } from "react-redux";
const Events = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const { eventsType } = useParams();
  if(eventsType!=="upcoming" && eventsType!=="past")
    navigate("/events/upcoming")
  useEffect(()=>{
    if(eventsType=="upcoming")
      dispatch(setUpcomingEvents())
    else if(eventsType=="past")
      dispatch(setPastEvents())
  },[eventsType,dispatch])
  const events = useSelector((state) => state.events[eventsType]);
  return (
    <div className={styles.eventsContainer}>
      {
        events?.map((event) => <EventCard key={event.id} {...event}/>)
      }
    </div>
  );
};

export default Events;

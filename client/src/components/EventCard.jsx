// import React from 'react'
import styles from "./eventCard.module.css"
import {getTime} from "../api/helpers"
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
const EventCard = (props) => {
    // console.log(props)
    const {id,name, images, date, upcoming }=props
    const lang = useSelector((state) => state.lang.value);
  return (
    <div className={styles.card}>
      <Link to={id} className={styles.link}>
          <img src={images?images[0]:""} alt={name} className={styles.image}/>
          <div className={styles.info}>
              <div className={styles.name}>{name[lang]}</div>
              <div className={styles.date}>{getTime(date,lang).date}</div>
          </div>
      </Link>
    </div>
  )
}

export default EventCard

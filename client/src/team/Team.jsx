import { Fragment, useEffect, useState } from "react";
import styles from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getMembers } from "../store/membersSlice.js";
import translator from "/translator.js";
const Team = () => {
    const dispatch = useDispatch();
    const lang = useSelector((state) => state.lang.value);
    const members = useSelector((state) => state.members.value);
    useEffect(()=>{
        dispatch(getMembers());
    },[dispatch])
  return (
    <div className={styles.members}>
      {
        members.map(({position,community,attendee:{name,image}},index) =>{
            return (
                <div key={index} className={styles.member}>
                    <img src={image} className={styles.image}/>
                    <div className={styles.info}>
                        <div className={styles.name}>{`${name.frist} ${name.last}`}</div>
                        <div className={styles.position}>{position[lang]}</div>
                        <div className={styles.community}>{community}</div>
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default Team

// import React from 'react'
import styles from "./collaborator.module.css"
import { useSelector} from "react-redux"
const Collaborator = ({ name, image, bio,linkedin }) => {
  const lang = useSelector((state) => state.lang.value)
  return (
    <div className={styles.collaborator} onClick={()=>window.location.replace(linkedin)}>
      <img className={styles.image} src={image} />
      <div className={styles.collaboratorInfo} >
        <div style={{justifyContent: `${lang=="arabic"?"right":"left"}`}}>{name?.english ? name[lang]:"loading...."}</div>
        <div style={{justifyContent: `${lang=="arabic"?"right":"left"}`}}>{bio?.english ? bio[lang].split("@")[0]:"loading...."}</div>
        <div style={{justifyContent: `${lang=="arabic"?"right":"left"}`}}>{bio?.english ? bio[lang].split("@")[1]:"loading...."}</div>
      </div>
    </div>
  )
}

export default Collaborator

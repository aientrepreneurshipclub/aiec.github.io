// import React from 'react'
import styles from "./loader.module.css"
const Loader = () => {
  return (
    <div className={styles.loader}>
        <div className={styles.imageContainer}>
            <img src='/logo2.png' className={styles.image}/>
            <div className={styles.circleA}></div>
            <div className={styles.circleI}></div>
            <div className={styles.circleE}></div>
            <div className={styles.circleC}></div>
        </div>
    </div>
  )
}

export default Loader

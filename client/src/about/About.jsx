// import React from 'react'
import {useSelector} from "react-redux"
import translator from "/translator.js";
import styles from "./style.module.css";
import { Fragment } from "react";
const About = () => {
  const lang = useSelector((state) => state.lang.value)
  return (
    <div className={styles.aboutUs}>
      <div className={styles.title}>{translator.aboutUs.title[lang]}</div>
      <div className={styles.boxs}>
      {
        translator.aboutUs.boxs.map(({image,title,description}, index) => {
          return (
            <div className={styles.box} key={index}>
              {
                index%2==0?
                <Fragment>
                  <img src={image} alt={title} className={styles.image}/>
                  <div className={styles.text}>
                    <div className={styles.title}>{title[lang]}</div>
                    <div className={styles.description}>{description[lang]}</div>
                  </div>
                </Fragment>
                :
                <Fragment>
                  <div className={styles.text}>
                    <div className={styles.title}>{title[lang]}</div>
                    <div className={styles.description}>{description[lang]}</div>
                  </div>
                  <img src={image} alt={title} className={styles.image}/>
                </Fragment>
              }
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default About

// import { useEffect, useState } from "react"
import {useSelector} from "react-redux"
import translator from "/translator.js";
import styles from "./style.module.css";
const Home = () => {
  const lang = useSelector((state) => state.lang.value)
  
  return (
    <div className={styles.home}>
      <div className={styles.interface}>
        <img src="https://res.cloudinary.com/dalbdnw4j/image/upload/v1693871296/snapedit_1693871072207_efdpb0.png" className={styles.image}/>
        <div className={styles.subtitle}>{translator.home.subtitle[lang]}</div>
        <div className={styles.title}>{translator.home.title[lang]}</div>
        <div className={styles.description}>{translator.home.description[lang]}</div>
        <a href="#target">
          <span className="material-symbols-rounded">keyboard_double_arrow_down</span>
        </a>
      </div>
      <div className={styles.box} id="target">
        <img src="https://res.cloudinary.com/dalbdnw4j/image/upload/v1693873806/Py%20Session.jpg" className={styles.image}/>
        <div className={styles.text}>
          <div className={styles.title}>{translator.home.boxs.one.title[lang]}</div>
          <div className={styles.description}>{translator.home.boxs.one.description[lang]}</div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.text}>
          <div className={styles.title}>{translator.home.boxs.two.title[lang]}</div>
          <div className={styles.description}>{translator.home.boxs.two.description[lang]}</div>
        </div>
        <img src="https://res.cloudinary.com/dalbdnw4j/image/upload/v1694107957/WhatsApp_Image_2023-09-07_at_20.31.08_fnhwtn.jpg" className={styles.image}/>
      </div>
      <div className={styles.boxs}>
        <div className={styles.minibox}>
          <img src="https://res.cloudinary.com/dalbdnw4j/image/upload/v1693908606/7_wy6bfl.svg" className={styles.image}/>
          <div className={styles.description}>{translator.home.boxs.minibox[0][lang]}</div>
        </div>
        <div className={styles.minibox}>
          <img src="https://res.cloudinary.com/dalbdnw4j/image/upload/v1693908606/5_o3zqnv.svg" className={styles.image}/>
          <div className={styles.description}>{translator.home.boxs.minibox[1][lang]}</div>
        </div>
        <div className={styles.minibox}>
          <img src="https://res.cloudinary.com/dalbdnw4j/image/upload/v1693908600/6_hektaa.svg" className={styles.image}/>
          <div className={styles.description}>{translator.home.boxs.minibox[2][lang]}</div>
        </div>
        
      </div>
      <div className={styles.box}>
        <img src="https://res.cloudinary.com/dalbdnw4j/image/upload/v1693877477/photo_2023-09-05_04-30-33_rzxydj.jpg" className={styles.image}/>
        <div className={styles.text}>
          <div className={styles.title}>{translator.home.boxs.three.title[lang]}</div>
          <div className={styles.description}>{translator.home.boxs.three.description[lang]}</div>
        </div>
      </div>
      <div className={styles.dataBoxs}>
        <div className={styles.dataBox}>
          <div className={styles.number}>{translator.home.dataBoxs[0].number[lang]}</div>
          <div className={styles.description}>{translator.home.dataBoxs[0].description[lang]}</div>
        </div>
        <div className={styles.dataBox}>
          <div className={styles.number}>{translator.home.dataBoxs[1].number[lang]}</div>
          <div className={styles.description}>{translator.home.dataBoxs[1].description[lang]}</div>
        </div>
        <div className={styles.dataBox}>
          <div className={styles.number}>{translator.home.dataBoxs[2].number[lang]}</div>
          <div className={styles.description}>{translator.home.dataBoxs[2].description[lang]}</div>
        </div>
        <div className={styles.dataBox}>
          <div className={styles.number}>{translator.home.dataBoxs[3].number[lang]}</div>
          <div className={styles.description}>{translator.home.dataBoxs[3].description[lang]}</div>
        </div>
      </div>
      <div className={styles.joinUs}>
        <div className={styles.title}>{translator.home.joinUs.title[lang]}</div>
        <div className={styles.data}>
        {
          translator.home.joinUs.data.map(({image,title,description},index)=>
            <div className={styles.section} key={index}>
              <img className={styles.image} src={image}/> 
              <div className={styles.title}>{title[lang]}</div>
              <div className={styles.description}>{description[lang]}</div>
            </div>
          )
        }
        </div>
      </div>
    </div>
  )
}

export default Home

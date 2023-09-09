import {Fragment} from 'react'
import {useSelector} from "react-redux"
import translator from "/translator.js";
import styles from "./style.module.css";
import Slider from "../components/Slider";
const Path = () => {
    const lang = useSelector((state) => state.lang.value)
  return (
    <div className={styles.path}>
        <div className={styles.title}>{translator.path.title[lang]}</div>
      {
        translator.path.boxs.map(({images,title,description},index)=>{
            return(
                <div className={styles.box} key={index}>
                    {
                        index%2 == 0 ?
                        <Fragment>
                            <div className={styles.text}>
                                <div className={styles.title}>{title[lang]}</div>
                                <div className={styles.description}>{description[lang]}</div>
                            </div>
                            <Slider data={images} className={styles.images}/>
                        </Fragment>
                        :
                        <Fragment>
                            <Slider data={images} className={styles.images}/>
                            <div className={styles.text}>
                                <div className={styles.title}>{title[lang]}</div>
                                <div className={styles.description}>{description[lang]}</div>
                            </div>
                        </Fragment>
                    }
                </div>
            )
        })
      }
    </div>
  )
}

export default Path

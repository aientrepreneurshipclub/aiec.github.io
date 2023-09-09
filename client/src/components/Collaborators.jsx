// import React from "react";
import Collaborator from "./Collaborator";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./collaborator.module.css";
import { Fragment } from "react";
import { useSelector } from "react-redux";
const Collaborators = ({ collaborators, color }) => {
  const lang = useSelector((state) => state.lang.value);
  const responsive = {
    x0: {
      breakpoint: { max: 3000, min: 1400 },
      items: 7,
    },
    x1: {
      breakpoint: { max: 1400, min: 1200 },
      items: 6,
    },
    x2: {
      breakpoint: { max: 1200, min: 1000 },
      items: 5,
    },
    x3: {
      breakpoint: { max: 1000, min: 800 },
      items: 4,
    },
    x4: {
      breakpoint: { max: 800, min: 600 },
      items: 3,
    },
    x5: {
      breakpoint: { max: 600, min: 400 },
      items: 2
    },
    x6: {
      breakpoint: { max: 400, min: 0 },
      items: 1
    }
  };
  if(!collaborators.length)
    return <Fragment></Fragment>
  return (
    <div className={styles.collaborators} style={{backgroundColor:color}}>
      <div className={styles.title}>{collaborators[0].type[lang]}</div>
      <Carousel
        responsive={responsive}
        autoPlaySpeed={1200}
        customRightArrow={<span className={`material-symbols-rounded ${styles.arrow}  ${styles.arrowRight}`}>arrow_forward</span>}
        customLeftArrow={<span className={`material-symbols-rounded ${styles.arrow} ${styles.arrowLeft}`}>arrow_back</span>}
        infinite
        autoPlay
        itemClass={styles.self}
      >
        {collaborators?.map((collaborator, index) => (
          <Collaborator key={index} {...collaborator} />
        )) || <div>loading...</div>}
      </Carousel>
    </div>
  );
};

export default Collaborators;

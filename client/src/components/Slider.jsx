import { useState, useEffect, useCallback } from "react";

import styles from "./slider.module.css";

const Slider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setSlide(slide === data?.length - 1 ? 0 : slide + 1);
  },[slide,data]);

  const prevSlide = () => {
    setSlide(slide === 0 ? data?.length - 1 : slide - 1);
  };
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);
  return (
    <div className={styles.slider}>
      <span
        onClick={prevSlide}
        className={`material-symbols-rounded ${styles.arrow} ${styles.arrowLeft}`}
      >
        arrow_back
      </span>
      {data?.map((item, idx) => {
        return (
          <img
            src={item}
            key={idx}
            className={
              slide === idx
                ? styles.slide
                : `${styles.slide} ${styles.slideHidden}`
            }
          />
        );
      })}
      <span
        onClick={nextSlide}
        className={`material-symbols-rounded ${styles.arrow} ${styles.arrowRight}`}
      >
        arrow_forward
      </span>
      <span className={styles.indicators}>
        {data?.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx
                  ? styles.indicator
                  : `${styles.indicator} ${styles.indicatorInactive}`
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
export default Slider;

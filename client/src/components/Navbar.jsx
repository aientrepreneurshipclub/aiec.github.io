import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLang } from "../store/langSlice";
import { changeMode } from "../store/modeSlice";
import styles from "./navbar.module.css";
import translator from "/translator.js";
import { NavLink, Link } from "react-router-dom";
import { switchSign } from "../store/signSlice";
const Navbar = () => {
  const mode = useSelector((state) => state.mode.value);
  const lang = useSelector((state) => state.lang.value);
  const attendee = useSelector((state) => state.attendee.value);
  const userImage = attendee?.image || "/placeholder.png";
  const dispatch = useDispatch();
  const ref = useRef(null);
  const iconRef = useRef(null);
  const show = (e) => {
    if (e.target.innerHTML == "menu") {
      e.target.innerHTML = "close";
      ref.current.classList.add(`${styles.show}`);
      document.querySelector("active").classList.remove(`active`);
    } else {
      e.target.innerHTML = "menu";
      ref.current.classList.remove(`${styles.show}`);
    }
  };
  const hover=()=>{
    setShowList(true)
    iconRef.current.innerHTML="arrow_drop_up"
  }
  const normalize=()=>{
    setShowList(false)
    iconRef.current.innerHTML="arrow_drop_down"
  }
  const [showList,setShowList]=useState(false)
  return (
    <div className={styles.navbar}>
      <span
        className={`material-symbols-rounded ${styles.menu}`}
        onClick={show}
      >
        menu
      </span>
      <img src="/logo2.png" className={styles.logo} />
      <div
        className={styles.links}
        ref={ref}
        style={lang == "arabic" ? { flexDirection: "row-reverse" } : {}}
      >
        <NavLink end="true" to="/home" className={styles.link}>
          {translator.sections[0][lang]}
        </NavLink>
        <NavLink end="true" to="/about-us" className={styles.link}>
          {translator.sections[2][lang]}
        </NavLink>
        {/*<NavLink end="true" to="/path" className={styles.link}>
          {translator.sections[3][lang]}
          </NavLink>*/}
        <NavLink end="true" to="/team" className={styles.link}>
          {translator.sections[4][lang]}
        </NavLink>
        <NavLink to="/events" className={styles.link} onMouseOver={hover} onMouseOut={normalize}>
          {translator.sections[1][lang]}
          <span className="material-symbols-rounded" ref={iconRef}>arrow_drop_down</span>
          { 
            showList &&
              <div className={styles.list}>
                <Link end="true" to="/events/upcoming">{translator.upcoming[lang]}</Link>
                <Link end="true" to="/events/past">{translator.past[lang]}</Link>
              </div>
          }
        </NavLink>
      </div>
      <div className={styles.icons}>
        <img
          src={userImage}
          className={styles.userImage}
          onClick={() => dispatch(switchSign())}
        />
        <span
          className={`material-symbols-rounded ${styles.icon}`}
          onClick={() => dispatch(changeLang())}
        >
          g_translate
        </span>
        <span
          className={`material-symbols-rounded ${styles.icon}`}
          onClick={() => dispatch(changeMode())}
        >
          {mode}_mode
        </span>
      </div>
    </div>
  );
};

export default Navbar;

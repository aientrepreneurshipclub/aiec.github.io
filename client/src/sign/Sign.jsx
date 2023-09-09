import { Fragment } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setSign } from "../store/signSlice";
import SignTeam from "./SignTeam";
const Sign = () => {
  const sign = useSelector((state) => state.sign.value);
  const event = useSelector((state) => state.sign.event);
  const dispatch = useDispatch();
  return (
    <Fragment>
    {sign == "sign-team" ? <SignTeam event={event}/>:
      sign !== "hidde" && (
        <div className={styles.container}>
          <div className={styles.sign}>
            <span
              className={`material-symbols-rounded ${styles.close}`}
              onClick={() => dispatch(setSign("hidde"))}
            >
              close
            </span>
            {sign == "sign-up" && <SignUp />}
            {sign == "sign-in" && <SignIn />}
          </div>
        </div>
      )
    }
    </Fragment>
  );
};

export default Sign;

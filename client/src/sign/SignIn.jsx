import { Fragment } from "react";
import styles from "./styles.module.css";
import translator from "/translator.js";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {setSign} from "../store/signSlice"
import {logIn} from "../api/attendee"
import {setToken} from "../store/tokenSlice.js"
const SignIn = () => {
  const lang = useSelector((state) => state.lang.value);
  const dispatch=useDispatch()
  const handleSubmit=async (e)=>{
    e.preventDefault()
    let {email, password}=e.target.elements
    email=email.value
    password=password.value
    const {success, token,error}=await logIn(email, password)
    if(error)
      toast.error(error[lang]);
    else{
      toast.success(success[lang]);
      dispatch(setToken(token))
    }
  }
  return (
    <Fragment>
      <header>{translator.login[lang]}</header>
      <form className={styles.signUp} onSubmit={handleSubmit} method="post">
        <img src="/logo.png" alt="logo"/>
        <div className={styles.inputBox}>
          <label htmlFor="email">{translator.gmail.label[lang]}</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="password">{translator.password.label[lang]}</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className={styles.buttons}>
          <button onClick={() => dispatch(setSign("sign-up"))}>
            {translator.signup[lang]}
          </button>
          <input type="submit" value={`${translator.login[lang]}`} />
        </div>
      </form>
    </Fragment>
  );
};

export default SignIn;

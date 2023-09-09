import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import ImageDisplay from "../components/ImageDisplay";
import styles from "./styles.module.css";
import translator from "/translator.js";
import {prepare} from "../api/helpers.js"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import {creatAttendee} from "../store/attendeeSlice"
import {setSign} from "../store/signSlice"
const SignUp = () => {
  const lang = useSelector((state) => state.lang.value);
  const dispatch=useDispatch()
  const handleSubmit=async (e)=>{
    const message=await prepare(e)
    if(message?.error){
      toast.error(message.error[lang]);
    }
    else
      dispatch(creatAttendee(message))
  }
  return (
    <Fragment>
      <header>{translator.registration[lang]}</header>
      <form className={styles.signIn} onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        <ImageDisplay />
        <div className={styles.column}>
          <div className={styles.inputBox}>
            <label htmlFor="fname">{translator.name.frist[lang]}</label>
            <input type="text" id="fname" name="fname" minLength="5" maxLength="50" required/>
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="lname">{translator.name.last[lang]}</label>
            <input type="text" id="lname" name="lname" minLength="5" maxLength="50" required/>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.inputBox}>
            <label htmlFor="email">{translator.gmail.label[lang]}</label>
            <input type="email" id="email" name="email"  required/>
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="phone">{translator.phone.label[lang]}</label>
            <input type="text" id="phone" name="phone" required/>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.inputBox}>
            <label htmlFor="password">{translator.password.label[lang]}</label>
            <input type="password" id="password" name="password" required/>
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="confirmPassword">{translator.password.confirm[lang]}</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required/>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.genderBox}>
            <h3>{translator.gender[lang]}</h3>
            <div className={styles.genderOption}>
              <div className={styles.gender}>
                <input type="radio" id="male" name="gender" defaultChecked />
                <label htmlFor="male">{translator.gender.male[lang]}</label>
              </div>
              <div className={styles.gender}>
                <input type="radio" id="female" name="gender" />
                <label htmlFor="female">{translator.gender.female[lang]}</label>
              </div>
            </div>
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="education">
              {translator.education.label[lang]}
            </label>
            <input type="text" id="education" name="education" required/>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.selectBox}>
            <label htmlFor="governorate">
              {translator.governorate.label[lang]}
            </label>
            <select id="governorate" required>
              {translator.governorates.map((governorate, index) => (
                <option value={governorate.english} key={index}>
                  {governorate[lang]}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="birthday">{translator.birthday.label[lang]}</label>
            <input type="date" id="birthday" name="birthday" value="2000-01-01" required/>
          </div>
        </div>
        <div className={styles.buttons}>
          <input type="submit" value={`${translator.signup[lang]}`} />
          <button onClick={()=>dispatch(setSign("sign-in"))}>{translator.login[lang]}</button>
        </div>
      </form>
    </Fragment>
  );
};

export default SignUp;

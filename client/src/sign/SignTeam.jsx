import { useState, useRef, useEffect} from "react";
import styles from "./styles.module.css";
import translator from "/translator.js";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setSign } from "../store/signSlice";
import {createTeam,updateTeam} from "../api/teams.js"
import {intersection} from "../api/helpers.js";
const SignTeam = ({ event }) => {
  const lang = useSelector((state) => state.lang.value);
  const attendee = useSelector((state) => state.attendee.value);
  const emails = useSelector((state) => state.emails.value);
  const ref = useRef("");
  const dispatch = useDispatch();
  const [members, setMembers] = useState([attendee.email]);
  const [isRegisted,setIsRegisted] = useState({});
  useEffect(()=>{
    setIsRegisted(intersection(attendee.teamIDs,event.teams));
  },[attendee,event,isRegisted])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name=e.target.name.value
    const proposal=e.target.proposal.value
    if(members.length<3)
      toast.error(translator.minMember[lang])
    else if(members.length>5)
      toast.error(translator.maxMember[lang])
    else {
      const success=await createTeam(event.id, name, proposal, members)
      toast.success(success[lang])
    }
  };
  const handelUpdate = async (e) => {
    e.preventDefault();
    const name=e.target.name.value
    const proposal=e.target.proposal.value
    if(members.length<3)
      toast.error(translator.minMember[lang])
    else if(members.length>5)
      toast.error(translator.maxMember[lang])
    else {
      const success=await updateTeam(event.id, name, proposal, members)
      toast.success(success[lang])
    }
  };
  const handelKeyUp = (e) => {
    e.preventDefault();
    const email = ref.current.value.trim();
    if (e.code === "Enter" || e.code === "Space") {
      if (email in emails) {
        if (email in event.teamsMembers){
          toast.error(
            lang == "english"
              ? "this email already registered"
              :  "البريد مسجل بالفعل"
            );}
        else if (members.find(member => member==email)){
          console.log(email , members)
          toast.error(
            lang == "english"
              ? "this email already exists"
              : "البريد موجود بالفعل "             
            );}
        else {
          setMembers([...members,email]);
          ref.current.value = "";
        }
      } 
      else
        toast.error(
          lang == "english"
            ? "this email does not exist"
            : "هذا البريد غير موجود"
        );
    }
  };
  const handelDelete = (x) => {
    setMembers((members)=>members.filter((member)=> member!=x));
  };
  return (
    <div className={styles.teamContainer}>
      <form method="POST" onSubmit={handleSubmit} className={styles.team}>
        <span
          className={`material-symbols-rounded ${
            lang == "arabic" ? styles.Aclose : styles.close
          }`}
          onClick={() => dispatch(setSign("hidde"))}
        >
          close
        </span>
        <div className={styles.inputBox}>
          <label htmlFor="name">{translator.name.team[lang]}</label>
          <input type="text" id="name" name="name" defaultValue={isRegisted?.name} required />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="proposal">{translator.proposal[lang]}</label>
          <input type="url" id="proposal" name="proposal" defaultValue={isRegisted?.proposal} required />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="members">{translator.members[lang]}</label>
          <div className={styles.members}>
            {members.map((member, index) => (
              <div key={index} className={styles.member}>
                <div className={styles.text}>
                  {member}
                </div>
                <span
                  className={`material-symbols-rounded ${styles.delete}`}
                  onClick={()=>index>0?handelDelete(member):""}
                >
                close
                </span>
              </div>
            ))}
          </div>
          <input
            type="email"
            id="members"
            name="members"
            placeholder={translator.teamEmails[lang]}
            ref={ref}
            onKeyUp={handelKeyUp}
          />
        </div>
        {
          isRegisted?
          <button onClick={handelUpdate} className={styles.update}>{translator.update[lang]}</button>
          :
          <input type="submit" value="Submit" />
        }
        
      </form>
    </div>
  );
};

export default SignTeam;

import {useEffect} from 'react'
import { toast } from 'react-toastify';
import {useParams,useNavigate} from "react-router-dom"
import {activateAttendee} from "../api/attendee"
import Loader from '../components/Loader'
import { useSelector, useDispatch } from "react-redux";
import {setToken} from "../store/tokenSlice"
const Activation = () => {
    let {activateCode} = useParams();
    const lang = useSelector((state) => state.lang.value);
    const navigate = useNavigate();
    const dispatch=useDispatch()
    useEffect(()=>{
        (async()=>{
            const {success,error,token} =await activateAttendee(activateCode)
            if(error)
                toast.error(error[lang])
            if(success){
                toast.success(success[lang])
                dispatch(setToken(token))
                setTimeout(()=>{
                    navigate("/home")
                    window.location.reload(false);
                },5000)
            }
        })()
    },[])
    
  return (
    <div>
        <Loader/>
    </div>
  )
}

export default Activation

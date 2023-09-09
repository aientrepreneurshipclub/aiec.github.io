import {useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const Redirct = () => {
    const navigate=useNavigate()
    const {eventsType}=useParams()
    useEffect(()=>{
      if(!eventsType)
        navigate("/events/upcoming")
    },[eventsType,navigate])
  return (
    <div>
      play with fire
    </div>
  )
}

export default Redirct

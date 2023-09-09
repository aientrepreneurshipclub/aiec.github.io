import { toast } from "react-toastify";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import translator from "/translator.js";
import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
    const lang = useSelector((state) => state.lang.value);
    const notFound=useCallback(()=>toast.error(translator.notFound[lang]),[lang])
    const redirctHome=useCallback(()=>setTimeout(()=>toast.info(translator.redirctHome[lang]),4000),[lang])
    const navigate=useNavigate()
    useEffect(()=>{ 
        notFound()
        redirctHome()
        setTimeout(()=>navigate("/home"),10000)
    },[notFound,redirctHome,navigate])
  return (
    <div>
        <Loader/>
    </div>
  )
}

export default NotFound

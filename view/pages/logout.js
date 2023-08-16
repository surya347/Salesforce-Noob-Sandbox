import {useEffect} from 'react';
import { useRouter } from "next/router";
import { servers } from "../config";



const logout = () => {
  const history = useRouter();

   /**--calling backend for logout-- */
   useEffect(() => {
    fetch(`https://salesforcenoob.onrender.com/logouts`,{
        method :"GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'User-Agent': '*',
        },
    }).then((res)=>{
        localStorage.clear();
       history.push('/login');
      
    }).catch((err)=>{ 
    })
})


  return (
    <div>

    </div>
  )
}

export default logout
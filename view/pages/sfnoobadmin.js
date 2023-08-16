import { useState, useEffect } from "react";
import AppBars from "../components/AdminPanel/AppBars";
import { useRouter } from "next/router";
import { servers } from '../config/index'; 


const Admin = () => {
  const history = useRouter();
  const [userData, setUserData] = useState([]);

  //fetching details of user from DB and showing on profile Dashboard
  const callAdminPage = async () => {
    try {
      const res = await fetch(`${servers}/admin_for_surya_10`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': 'https://salesforcenoob.onrender.com',
            'Access-Control-Allow-Credentials': 'true'
          },
          credentials: 'include'
      });

      const data = await res.json();
      setUserData(data);

      if (res.status === 401 || !res) {
        history.push("/login");

      } else if (res.status === 200) {

            if(data[0].email === 'noobsalesforce@gmail.com'){
              console.log('logged');
            }else{
              console.log('logged out');
            // cookies.remove("user");
            localStorage.removeItem('user');

            localStorage.removeItem('jwts');
           history.push('/');
      }
    }} catch (error) {
      console.log('logged outs:'+JSON.stringify(error));
     
      history.push("/login");
    }
  };

  useEffect(() => {
    callAdminPage();
  }, []);
 
  return (
    <>
      <div className="containers ">
        <AppBars data={userData}/>
      </div>
    </>
  );
};

export default Admin;

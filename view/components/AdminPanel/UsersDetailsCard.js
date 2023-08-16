import  { useEffect, useState }from "react";
import HashLoader from "react-spinners/HashLoader";
import { useRouter } from "next/router";
import { servers } from '../../config/index'; 
import userDetailCardStyle from '../../styles/UserDetailsCard.module.css'

 

const UsersDetailsCard = () => {

    const history = useRouter();
    const [usersInfo, setUsersInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#3f51b5");
  
      //fetching details of user from DB and showing on profile Dashboard
      const callUsersInfoPage = async () => {
        try { 
          const res = await fetch(`${servers}/allusers`, { 
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
          },
          });
    
          const data = await res.json();
          if(data){
            setLoading(false);
            setUsersInfo(data);
          }else{
            setLoading(true);
          }

          if (res.status === 401 || !res) {

          } else {
            
          }
        } catch (error) {
        }
      };
    
      useEffect(() => {
        callUsersInfoPage();
      }, []);
 
  return (
    <>
    { loading ? 
      <div className={userDetailCardStyle.cliploader}>
        <HashLoader  color={color} loading={loading}  size={100} />
      </div>
                        :
        <div>
        { usersInfo ? usersInfo.map((usersInformation) => (
     
        <div className={userDetailCardStyle.user_card_div} key={usersInformation.id}>
            <div class="row " >
                <div className={userDetailCardStyle.user_row_div}>
                    <div className="col-4">
                    <img src='/messi.jpg' className={userDetailCardStyle.user_pic}/>
                    </div>
                    <div className="col-8">
                    <p>Name : {usersInformation.name} </p>
                    <p>Mobile : {usersInformation.phone}</p>
                    <p>email : {usersInformation.email}</p> 
                    </div>    
            </div>
            </div>
            
        </div>
        
 )): null} 
        </div>
}
   </>
  )
} 

export default UsersDetailsCard;
 
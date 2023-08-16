import Navbar from "../../components/Navbar";
import SliderCard from "../../components/SliderCard";
import  { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HashLoader from "react-spinners/HashLoader";
import { servers } from '../../config/index';
import Footer from "../../components/Footer";
import Head from 'next/head';

const index = () => {

  const history = useRouter();
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#3f51b5");

    //fetching details of user from DB and showing on interview question page
    const callCodePage = async () => {
      try {
        const res = await fetch(`https://salesforcenoob.onrender.com/interviewquestionss_10`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'User-Agent': '*',
          },
        });
  
        const data = await res.json();
        if(data){
            setLoading(false);
            setUserData(data); 
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
     callCodePage();
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
     <Head>
      <title>Interview Questions</title>
      <meta name="description" content="Free Salesforce Youtube tutorials" />
      <meta name="keywords" content="HTML, CSS, JavaScript, Salesforce Interview Questions,Salesforce Apex ,Salesforce Apex Interview Questions,Salesforce LWC Interview Questions, Salesforce Blogs,Salesforce Tutorials,salesforce Interview question and answers,Salesforce Noob" />
      <meta name="author" content="Salesforce Noob" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Navbar/>
    { loading ? 
      <div className="sweet-loading">
         <HashLoader color={color} loading={loading}  size={100} />
        </div>
        :
    <div className="menu-items container-fluid mt-1">
          <div className="row"> 
            <div className="col-12 ">
              <div className="row code_card_div_source">
                <SliderCard questionData={userData}/>
              </div>
            </div>
          </div>
        </div>
      }
        <style jsx>
            {`
            
            .code_card_div_source{
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction:row;
            }
            
            .sweet-loading{
              position: fixed;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
                 
             }
            `}
        </style>
    </>
  )
}

export default index;
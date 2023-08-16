import Navbar from "../../components/Navbar";
import  { useEffect, useState,useLayoutEffect } from "react";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import { servers } from '../../config/index'; 
import { useRouter } from "next/router";
import Link from "next/link";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaYoutube,FaInstagram,FaLinkedinIn,FaCode,FaRegFileCode } from "react-icons/fa";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import RecommendationList from '../../components/RecommendationList';
import Footer from "../../components/Footer";
import Head from 'next/head';


const questions = () => {
  const router = useRouter();
    
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#3f51b5");
   
  
    //fetching details of user from DB and showing on profile Dashboard
    const callCodePage = async (api) => {

    try {
      const res = await axios.get(`https://salesforcenoob.onrender.com/interviewquestionss_Filter`, { 
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'User-Agent': '*',
          },
          params: {
            filter: api,
          },
      });

      const data = await res.data;  

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
      let path = window.location.href;
      const after_ = path.substring(path.indexOf('_') + 1);
    callCodePage(after_);
  }, []);



  return (
    <>
    <Head>
      <title>Interview QnA</title>
      <meta name="description" content="Free Salesforce Youtube tutorials" />
      <meta name="keywords" content="HTML, CSS, JavaScript, Salesforce Interview Questions,Salesforce Apex ,Salesforce Apex Interview Questions,Salesforce,Salesforce Apex,Salesforce LWC , Salesforce Blogs,Salesforce Tutorials,salesforce Interview question and answers,Salesforce Noob" />
      <meta name="author" content="Salesforce Noob" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Navbar/>
    { loading ? 
      <div className="sweet-loading">
         <HashLoader color={color} loading={loading}  size={100} />
        </div>
        :
    <div>
    <div className='question_component'>
    <h1 className="mt-5 text-center">Questions</h1>
        <hr />
    <div className="container-fluid">
    <div className="row">
      <div className="col-12 col-md-9">

      
    { userData ? userData.map((questionSchema) => (
    <Accordion key={questionSchema._id} style={{backgroundColor:"#f6f6f6"}}>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={questionSchema._id}
        >
          <Typography variant="h7" style={{ color: "#16325c", fontWeight: 600 }}>{questionSchema.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Container maxWidth="sm" style={{ whiteSpace: "break-spaces" }}>
          
          <Typography variant="h7" style={{ color: "#333", fontWeight: 500 }}>
          {questionSchema.answer}
          </Typography>
        </Container>
        </AccordionDetails> 
      </Accordion>
      )): null}
      </div>
      <div className="col-12 col-md-3 recommedatio_section">
        <RecommendationList/>
      </div>
    </div>
    </div>
    </div>
   
    <Footer/>
    </div>
  }
    <style jsx>
      {`
       .sweet-loading{
        position: fixed;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
           
       }
       
      .question_component{
        margin-top:80px;
        margin-bottom:40px;
      }

      .recommedatio_section{
        margin-top:80px;
      }

      .follow_socialMedia{
        padding-top: 3rem;
    }
    
    .follow_socialMedia li{
        list-style: none !important;
    
    }
    
    .social_list{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        
    }
    
    .social_list li a:hover{
        opacity: 0.7;
    }

    .youtube_clas{
      background: #bb0000;
       color: white;
       font-size: 30px;
       padding: 20px;
         width: 50px;
         text-align: center;
         text-decoration: none;
         margin: 5px 2px;
         border-radius: 50%;
     }
     
     .linkedin_clas{
         background: #007bb5;
         color: white;
         padding: 20px;
         font-size: 30px;
         width: 50px;
         text-align: center;
         text-decoration: none;
         margin: 5px 2px;
         border-radius: 50%;
     }
     
     .insta_clas{
        background: #125688;
       color: white;
         padding: 20px;
         font-size: 30px;
         width: 50px;
         text-align: center;
         text-decoration: none;
         margin: 5px 2px;
         border-radius: 50%;
     }
    
    
      `}
    </style>
    </>
  )
}

export default questions;
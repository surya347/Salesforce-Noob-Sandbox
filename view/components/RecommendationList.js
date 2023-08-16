import React,{ useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaYoutube,FaInstagram,FaLinkedinIn,FaCode,FaRegFileCode } from "react-icons/fa";
import { servers } from '../config';
import Link from 'next/link';


const RecommendationList = () => {

  const history = useRouter();
  const [recommedDatas, setRecommedDatas] = useState([]);

  
  //fetching details of recommendations from DB and showing on code details page
  const callRecommendPage = async () => {
    try {
      const res = await fetch(`https://salesforcenoob.onrender.com/recommends`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'User-Agent': '*',
          },
      });

      const data = await res.json();
      setRecommedDatas(data);

      if (res.status === 401 || !res) {
     
      } else {
      
      }
    } catch (error) {
      
    }
  };

  useEffect(() => {
    callRecommendPage();
  }, []);


  
  return (
    <>
    <div className='recommendation'>
    <h5>Top Labels</h5>
    { recommedDatas ? recommedDatas.map((recommendSchemas) => (
    <Accordion key={recommendSchemas._id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={recommendSchemas._id}
        >
          <Typography variant="h7" style={{ color: "brown" }}>{recommendSchemas.heading}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h7">
            <ul className='lwcList'>

              { recommendSchemas.topic1 ? recommendSchemas.icon1 == "Youtube"? 
              <li><a href={recommendSchemas.link1} target="_blank" >{recommendSchemas.topic1} &nbsp; <i className='yt_clas'><FaYoutube/></i></a></li>
              :
              <li><a href={recommendSchemas.link1} target="_blank" >{recommendSchemas.topic1} &nbsp; <i className='yt_clas'><FaCode/></i></a></li>
              :null}

              { recommendSchemas.topic2 ? recommendSchemas.icon2 == "Youtube"? 
              <li><a href={recommendSchemas.link2} target="_blank" >{recommendSchemas.topic2} &nbsp; <i className='yt_clas'><FaYoutube/></i></a></li>
              :
              <li><a href={recommendSchemas.link2} target="_blank" >{recommendSchemas.topic2} &nbsp; <i className='yt_clas'><FaCode/></i></a></li>
              :null}

              { recommendSchemas.topic3 ? recommendSchemas.icon3 == "Youtube"? 
              <li><a href={recommendSchemas.link3} target="_blank" >{recommendSchemas.topic3} &nbsp; <i className='yt_clas'><FaYoutube/></i></a></li>
              :
              <li><a href={recommendSchemas.link3} target="_blank" >{recommendSchemas.topic3} &nbsp; <i className='yt_clas'><FaCode/></i></a></li>
              :null}

              { recommendSchemas.topic4 ? recommendSchemas.icon4 == "Youtube"? 
              <li><a href={recommendSchemas.link4} target="_blank" >{recommendSchemas.topic4} &nbsp; <i className='yt_clas'><FaYoutube/></i></a></li>
              :
              <li><a href={recommendSchemas.link4} target="_blank" >{recommendSchemas.topic4} &nbsp; <i className='yt_clas'><FaCode/></i></a></li>
              :null}

              { recommendSchemas.topic5 ? recommendSchemas.icon5 == "Youtube"? 
              <li><a href={recommendSchemas.link5} target="_blank" >{recommendSchemas.topic5} &nbsp; <i className='yt_clas'><FaYoutube/></i></a></li>
              :
              <li><a href={recommendSchemas.link5} target="_blank" >{recommendSchemas.topic5} &nbsp; <i className='yt_clas'><FaCode/></i></a></li>
              :null}

              { recommendSchemas.topic6 ? recommendSchemas.icon6 == "Youtube"? 
              <li><a href={recommendSchemas.link6} target="_blank" >{recommendSchemas.topic6} &nbsp; <i className='yt_clas'><FaYoutube/></i></a></li>
              :
              <li><a href={recommendSchemas.link6} target="_blank" >{recommendSchemas.topic6} &nbsp; <i className='yt_clas'><FaCode/></i></a></li>
              :null}
              
            
            </ul>
          </Typography>
        </AccordionDetails> 
      </Accordion>
      )): null}
    </div>
    <div className='follow_socialMedia'>
      <h3>Follow Us:-</h3><br/>
      <ul className='social_list'>
        <li><a href="https://www.youtube.com/channel/UCvgE8SgvQTpBK5BzdOyAAQw"><i className='youtube_clas'><FaYoutube/></i></a></li>
        <li><a href="https://www.linkedin.com/in/salesforce-noob-315990221/" ><i className='linkedin_clas'><FaLinkedinIn/></i></a></li>
        <li><a href="https://www.instagram.com/sfnoob10/"><i className='insta_clas'><FaInstagram/></i></a></li>
      </ul>
      
    </div>
    <style jsx>
        {`
        
        .lwcList{
            padding-left: 10px;
            }
            
            .lwcList li{
                padding-bottom: 10px;
            }
            .lwcList li a{
                font-style: italic;
                font-size: 14px;
                font-weight: 600;
                text-decoration:none;
                /* padding-bottom:10px ; */
                color: black;
            }
            
            .yt_clas{
                color: red;
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
            
            @media only screen and (max-width:820px){
            
                .recommendation{
                    width: 25vw !important;
                }
            
                .social_list{
                    width: 25vw !important;
                }
            }
            
            @media only screen and (max-width:508px){
            
                .recommendation{
                    width: 100% !important;
                }
            
                .social_list{
                    width:100% !important;
                }
            }
        `}
    </style>
    </>
  )
}

export default RecommendationList;

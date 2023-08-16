import Navbar from "../../components/Navbar";
import Link from "next/link";
import { useLocation } from "react-router-dom";
import  { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import BlogsFlipCard from "../../components/BlogsFlipCard";
import HashLoader from "react-spinners/HashLoader";
import { servers } from '../../config/index';
import Footer from '../../components/Footer';
import Head from 'next/head';

const blogs = () => {
     // const location = useLocation();
  const history = useRouter();
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#3f51b5");

  //fetching details of user from DB and showing on profile Dashboard
  const callCodePage = async () => {
    try {
      const res = await fetch(`https://salesforcenoob.onrender.com/allblogs_10`, {
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
      <title>Blogs</title>
      <meta name="description" content="Free Salesforce Development Youtube tutorials" />
      <meta name="keywords" content="HTML, CSS, JavaScript, Salesforce,Salesforce Apex,Salesforce LWC,Salesforce Blogs,Salesforce Tutorials,Salesforce Noob" />
      <meta name="author" content="Salesforce Noob" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Navbar /> 
    { loading ? 
      <div className="sweet-loading">
         <HashLoader color={color} loading={loading}  size={100} />
        </div>
        :
      <div>
      <div className="container-fluid code_div">
        <h1 className="mt-5 text-center main_heading">Welcome To Blogs Page!</h1>
        <hr />

        {/* main code section */}
        <div className="menu-items container-fluid mt-5">
          <div className="row">
            <div className="col-12 ">
              <div className="row code_card_div_source">
                <BlogsFlipCard blogsData={userData} />
              </div> 
            </div>  
          </div>
        </div>
        
      </div>
      <Footer/>
      </div>
     
      }
      

      <style jsx>
        {`
        .code_topic {
          color: black !important;
          text-decoration: none;
          text-decoration-line: none;
          list-style: none;
      
      }
      .code_div{
          margin-top: 80px;         
      }
      
      
      .code_card_col{
          display: contents !important;
      }
      
      
      .menu-tab{
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 20px;
      }
      
      
      
      .items{
          display: flex !important;
          justify-content: center !important;
          align-items: center;
          margin-bottom: 20px;
      }
      
      .sweet-loading{
       position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
          
      }
      
      
      .btn:hover{
          color: aliceblue;
          background: black;
      }
      
      .code_card_div_source{
          display: flex;
          align-items: center;
          justify-content: center;
      }
      
      
      @media screen and (max-width:500px) {
      
          .menu-tab{
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 20px;
          }
      
          .code_card_col{
              
          }
      
      }
        `}
      </style>
    </>
  )
}

export default blogs
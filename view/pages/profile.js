import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NavLink } from '../src/NavLink';
import {
  FaUserGraduate,
  FaBlackTie,
  FaAppStore,
  FaHandHoldingUsd, 
  FaMailBulk,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@mui/material";
import HashLoader from "react-spinners/HashLoader";
import FadeLoader from "react-spinners/FadeLoader";
import { servers } from "../config";
import { useRouter } from "next/router";
import navStyle  from '../styles/Navbar.module.css';
import Head from 'next/head';

const profile = () => {
  const history = useRouter();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#3f51b5");

  //fetching details of user from DB and showing on profile Dashboard
  const callProfilePage = async () => {
    try {
      const res = await fetch(`https://salesforcenoob.onrender.com/profiles`, {
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
        history.push("/login");
      } else {
      }
    } catch (error) {
      history.push("/login");
    }
  };

  useEffect(() => {
    callProfilePage();
  }, []);

  //storing user id in local store for image update
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    localStorage.setItem("profileId", userData._id);
  }
   
   setTimeout(() => {
    localStorage.removeItem('profileId')
  }, "7200000");

  return (
    <>
     <Head>
      <title>Profile</title>
      <meta name="description" content="Free Salesforce Youtube tutorials" />
      <meta name="keywords" content="HTML, CSS, JavaScript, Salesforce,Apex,LWC , Salesforce Blogs,Salesforce Noob Profile Page" />
      <meta name="author" content="Salesforce Noob" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
      <ToastContainer />
      <Navbar />
      { loading ? 
      <div className="sweet-loading">
         <HashLoader color={color} loading={loading}  size={100} />
        </div>
        :
      <div className="main">
        <form method="GET">
          <div className="main__container"> 
            <div className="main__title">
              <Image className="profile_dash_image"
                src={
                  userData.contentType
                    ? `data:${userData.contentType};base64,${userData.imageBase64}`
                    : "/pic.png"
                }
                alt="hello" width="150" height="120"
              ></Image>
              <div className="main__greeting">
                <h1><strong>{userData.name}</strong></h1>
                <p>Welcome to your dashboard</p>
              </div>
            </div>
            {/* <div className="profiel_btn">
              <Button variant="contained" color="primary" className="upload_pic_btn">
                <NavLink  className={navStyle.nav_link} href="/uploadprofileimage">
                  Upload Image
                </NavLink>
              </Button>
            </div> */}

            <div className="main__cards">
              <div className="card">
                <i className="fa fa-user-o fa-2x text-lightblue">
                  <FaBlackTie />
                </i>
                <div className="card_inner">
                  <p className="text-primary-p">User Id:</p>
                  <span className="font-bold text-title">{userData._id}</span>
                </div>
              </div>
              <div className="card">
                <i>
                  <FaUserGraduate />
                </i>
                <div className="card_inner">
                  <p className="text-primary-p">Name:</p>
                  <span className="font-bold text-title">{userData.name}</span>
                </div>
              </div>

              <div className="card">
                <i className="fa fa-calendar fa-2x text-red">
                  <FaMailBulk />
                </i>
                <div className="card_inner">
                  <p className="text-primary-p">Email:</p>
                  <span className="font-bold text-title">{userData.email}</span>
                </div>
              </div>

              <div className="card">
                <i className="fa fa-video-camera fa-2x text-yellow">
                  <FaAppStore />
                </i>
                <div className="card_inner">
                  <p className="text-primary-p">Phone:</p>
                  <span className="font-bold text-title">{userData.phone}</span>
                </div>
              </div>
            </div>

            <div className="charts">
              <div className="charts__left">
                <div className="charts__left__title">
                  <div>
                    <h1>Completed Courses</h1>
                    <p>{userData.email}</p>
                  </div>
                  <i className="fa fa-usd">
                    <FaHandHoldingUsd />
                  </i>
                </div>
                {/* <Chart/> */}
              </div>

              <div className="charts__right">
                <div className="charts__right__title">
                  <div>
                    <h1>Technical Skills</h1>
                    <p>{userData.phone}</p>
                  </div>
                  <i className="fa fa-usd">
                    <FaHandHoldingUsd />
                  </i>
                </div>

                <div className="charts__right__cards">
                  <div className="card1">
                    <h1>LWC</h1>
                    {/* <p>$75,300</p> */}
                  </div>

                  <div className="card2">
                    <h1>Apex</h1>
                    {/* <p>300</p> */}
                  </div>

                  <div className="card3">
                    <h1>React</h1>
                    {/* <p>75</p> */}
                  </div>

                  <div className="card4">
                    <h1>Node</h1>
                    {/* <p>750</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
}
<style jsx>
        {`

        main{
          background: #f3f4f6;
          grid-area: main;
          overflow-y: auto;
          
      }
      
      .main__container{
          padding: 20px 35px;
      }
      
      .sweet-loading{
          position: fixed;
           top: 50%;
           left: 50%;
           transform: translate(-50%, -50%);
             
         }
      
      .main__title{
          display: flex;
          align-items: center;
      }
      
      .main__title img{
      max-height: 100px;
      object-fit: contain;
      margin-right: 20px;
      padding-top: 5px;
      border-radius:50%;
        
      }

      .profile_dash_image Image{
        border-radius:50% !important;
      }
      
      .main__greeting{
        padding-left:20px;
      }

      .upload_pic_btn{
        background-color: #16325c;
      }

      .upload_pic_btn a{
        text-decoration: none !important;
        color: #fff;
      }

      upload_pic_btn_link {
        text-decoration: none !important;
        color: #fff;
      }

      upload_pic_btn_link a{
        text-decoration: none !important;
        color: #fff;
      }
      
      .main__greeting >h1 {
          font-size: 24px;
          color: #2e4a66;
          margin-bottom: 5px;
      }
      
      .main__greeting > p{
          font-size: 14px;
          font-weight: 700;
          color: #a5aaad;
      
      }
      .profiel_btn{
          padding-top: 5px;
      }

      a{
        color:#fff !important;
      }
      
      .main__cards{
          display: grid;
          grid-template-columns: 1fr 1fr ;
          gap: 30px;
          margin: 20px 0;
      }
      
      .card{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 70px;
          padding: 25px;
          border-radius: 5px;
          background: #ffffff;
          box-shadow: 5px 5px 13px #ededed , -5px -5px 13px #ffffff;
      }
      
      .card >i{
          height: 30px;
          font-size: 20px;
      }
      
      .card_inner{
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
      
      .card_inner>span {
              font-size: 15px;
      
      }
      
      .charts{
          display: grid;
          grid-template-columns: 1fr 1fr ;
          gap: 30px;
          margin-top: 50px;
      }
      
      .charts__left{
          padding: 25px;
      border-radius: 5px;
      background: #ffffff;
      box-shadow: 5px 5px 13px #ededed , -5px -5px 13px #ffffff;
      }
      
      .charts__left__title{
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
      
      .charts__left__title>div >h1{
          font-size: 24px;
          color: #2e4a66;
          margin-bottom: 5px;
      }
      
      .charts__left__title>div >p{
          font-size: 14px;
          font-weight: 700;
          color: #a5aaad;
      }
      
      .charts__left__title> i {
          color: #ffffff;
          font-size: 20px;
          background: #ffc100;
          border-radius: 200px 0px 200px 200px;
          -moz-border-radius:200px 0px 200px 200px;
          -webkit-border-radius:200px 0px 200px 200px;
          border: 0px solid #000000;
          padding: 15px;
      }
      
      .charts__right{
          padding: 25px;
          border-radius: 5px;
          background: #ffffff;
          box-shadow: 5px 5px 13px #ededed , -5px -5px 13px #ffffff;
      }
      
      .charts__right__title{
      display: flex;
          align-items: center;
          justify-content: space-between;
      }
      
      
      .charts__right__title>div >h1{
          font-size: 24px;
          color: #2e4a66;
          margin-bottom: 5px;
      }
      
      .charts__right__title>div >p{
          font-size: 14px;
          font-weight: 700;
          color: #a5aaad;
      }
      
      .charts__right__title> i {
          color: #ffffff;
          font-size: 20px;
          background: #39447a;
          border-radius: 200px 0px 200px 200px;
          border: 0px solid #000000;
          padding: 15px;
      }
      
      .charts__right__cards{
          display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
              margin-top: 30px;
      }
      
      .card1{
          background: #d1ecf1;
          color: #35a4ba;
          text-align: center;
          padding: 25px;
          border-radius: 5px;
          font-size: 14px;
      }
      
      .card2{
          background: #d2f9ee;
          color: #38e1b0;
          text-align: center;
          padding: 25px;
          border-radius: 5px;
          font-size: 14px;
      }
      
      .card3{
          background: #d6d8d9;
          color: #3a3e41;
          text-align: center;
          padding: 25px;
          border-radius: 5px;
          font-size: 14px;
      }
      
      .card4{
          background: #fddcdf;
          color: #f65a6f;
          text-align: center;
          padding: 25px;
          border-radius: 5px;
          font-size: 14px;
      }
      
      @media only screen and (max-width:978px){
          .main__cards{
              grid-template-columns: 1fr;
              gap: 10px;
              margin-bottom: 0;
          }
      
          .charts{
              grid-template-columns: 1fr;
              margin-top: 30px;
          }
          
      }
        `}
      </style>
    </>
  )
}

export default profile
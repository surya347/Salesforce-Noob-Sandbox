import { FaTelegram,FaTelegramPlane,FaYoutube,FaLinkedin,FaLinkedinIn,FaInstagram,FaInstagramSquare } from "react-icons/fa";

const ProfileCard = (props) => {

  return (
    <>
    <div className='profile_card_box'>
      
    <div className="container">
  <div className="card">

    <div className="pic-container">
      <img className="pic" src="/Sf_noob_logo.png" alt="Profile Picture" />
    </div>
    <p>Written By :-</p>
    <div className="name">
      <span>Salesforce Noob</span>
    </div>
  
    <div className="description">
      <p> Salesforce Developer || YouTuber</p>
    </div>
    <div className="links">
      <a href="https://www.linkedin.com/in/salesforce-noob-315990221/" target="_blank" className="fb">
        <i className=""><FaLinkedinIn/></i>
      </a>
      <a href="https://www.youtube.com/channel/UCvgE8SgvQTpBK5BzdOyAAQw" target="_blank" className="yt">
        <i className=""><FaYoutube/></i>
      </a>
      <a href="https://www.instagram.com/sfnoob10/" target="_blank" className="cp">
        <i className=""><FaInstagram/></i>
      </a>
      <a href="https://t.me/salesforcenoobcommunity/" target="_blank" className="fb">
        <i className=""><FaTelegramPlane/></i>
      </a>
     
    </div>
  </div>
</div>

    </div>
    <style jsx>
      {`
      

      .container {
        display: flex;
        align-items: start;
        justify-content: center;
      }
      .card {
        width: 300px;
        max-width: 300px;
        min-height: 370px;
        position: relative;
        text-align: center;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      }
      .pic-container {
        width: 110px;
        height: 110px;
        border-radius: 100%;
        margin: 20px auto 20px;
      }
      .pic {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        margin: auto;
        position: relative;
        top: 5px;
        box-shadow: 0 13px 26px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.2);
      }
      .name {
        color: #16325c;
        font-size: 18px;
        text-transform:capatalize;
        font-weight:600;
      }
      .title {
        color: #3d77c2;
        font-size: 14px;
        padding: 8px;
      }
      .description {
        font-size: 14px;
        font-weight: 300;
        padding: 10px 22px;
      }
      .message {
        font-size: 22px;
        background: #0088ff;
        background: -webkit-linear-gradient(to right, #1da1f2, #0088ff);
        background: linear-gradient(to right, #1da1f2, #0088ff);
        box-shadow: 0 0 20px 4px #ffffff, 0 0 20px 0px #0088ff;
        border-radius: 32px;
        padding: 10px;
        margin: 16px 28px;
      }
      .message:hover {
        box-shadow: 0 0 20px 0px #ffffff, 0 4px 20px 0px #0088ff;
        transition: 0.3s;
      }
   
      a {
        text-decoration: none;
        color: #fff;
      }
      .fb,
      .yt,
      .cp,
      .bg {
        background: red;
        display: inline-block;
        border-radius: 100%;
        width: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0px 4px;
      }
      .fb {
        background: linear-gradient(45deg, #3b5998, #0078d7);
        box-shadow: 0px 4px 30px rgba(43, 98, 169, 0.5);
      }
      .cp {
        background: linear-gradient(38deg,#2FF,#33E);
        box-shadow: 0px 4px 30px rgba(55, 75, 90, 0.6);
      }
      .yt {
        background: linear-gradient(45deg, #d5135a, #ff0000);
        box-shadow: 0px 4px 30px rgba(223, 45, 70, 0.6);
      }
      .bg {
        background: linear-gradient(45deg, #d5135a, #f05924);
        box-shadow: 0px 4px 30px rgba(223, 45, 70, 0.6);
      }
      .fb:hover {
        transition: 0.3s;
        box-shadow: 0px 8px 30px rgb(43, 98, 169);
      }
      .cp:hover {
        transition: 0.3s;
        box-shadow: 0px 8px 30px rgb(55, 75, 90);
      }
      .yt:hover {
        transition: 0.3s;
        box-shadow: 0px 8px 30px rgb(223, 45, 70);
      }
      .bg:hover {
        transition: 0.3s;
        box-shadow: 0px 8px 30px rgb(223, 45, 70);
      }
      
      `}
    </style>
    </>
  )
}

export default ProfileCard
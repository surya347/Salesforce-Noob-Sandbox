import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import Typical from "react-typical";
import Link from "next/link";
// import SfNoobImage from "../../../assets/HOME/Sf_noob_logo.png";
import portStyles from '../../styles/PortfolioContainer.module.css'



export const PortfolioContainer = () => {
  return (
    <>
    <div className={portStyles.profile_container}>
      <div className={portStyles.profile_parent}>
        <div className={portStyles.profile_details}>
          <div className={portStyles.colz}>
            <div className={portStyles.colz_icon}>
              
              <a href="https://www.instagram.com/sfnoob10/?hl=en" target="_blank">
                <i className={portStyles.icons_div}>
                  <FaInstagram />
                </i>
              </a> 
              <a href="https://www.youtube.com/channel/UCvgE8SgvQTpBK5BzdOyAAQw" target="_blank">
                <i className={portStyles.icons_div}>
                  <FaYoutube />
                </i>
              </a>
              <a href="https://www.linkedin.com/in/salesforce-dev-315990221/" target="_blank">
                <i className={portStyles.icons_div}>
                  <FaLinkedin />
                </i>
              </a>
            </div>
          </div>
          <div className={portStyles.profile_detail_name}>
            <span className={portStyles.primary_text}>
              Hello, I'M <span className={portStyles.highlighted_text}>Salesforce Noob</span>
            </span>
          </div>
          <div className={portStyles.profile_detail_role}>
            <span className={portStyles.primary_text}>
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Salesforce Dev",
                    1000,
                    "MERN Dev",
                    1000,
                    "YouTube/Blogs",
                    1000,
                  ]}
                />
              </h1>
              <span className={portStyles.profile_role_tagline}>Welcome !</span>
            </span>
          </div>
          <div className={portStyles.profile_options}>
           <Link href="/blogs">
            <button className="btn primary-btn">Blogs</button>
           </Link>
            <Link href="/codes">
              <button className="btn highlighted-btn">Codes</button>
            </Link>
          </div>
        </div>
        <div className={portStyles.profile_picture}>
          <div className={portStyles.profile_pic_background}></div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
      
     
      `}
    </style>
    </>
  );
};
 
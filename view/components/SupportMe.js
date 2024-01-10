import React from "react";
import {
  FaTelegramPlane,
  FaYoutube,
  FaLinkedin,
  FaLinkedinIn,
  FaInstagram,
  FaInstagramSquare,
} from "react-icons/fa";
import { SiPhonepe, SiGooglepay, SiPaytm } from "react-icons/si";

const SupportMe = () => {
  return (
    <>
      <div className="profile_card_box">
        <div className="container">
          <div className="card">
            <div className="menu-items container-fluid mt-5 ">
            <div className="links">
            <div className="row payment_text">
                <div className="col-12 col-md-12 col-lg-12">
                <a className="pay_text">Scan & Pay Using &nbsp;</a>
                </div>
                <div className="col-12 col-md-12 col-lg-12 mt-2">
              <a className="fb">
                <i className="">
                  <SiPhonepe />
                </i>
              </a>
              <a className="fb">
                <i className="">
                  <SiGooglepay />
                </i>
              </a>
              <a className="fb">
                <i className="">
                  <SiPaytm />
                </i>
              </a>
              </div>
            </div>
            </div>
            
              <div className="row">
              <div className="col-12 mt-4">
                  <div className="">
                    <img className="qr_image" src="/paymentQR.jpg" alt="QR Code" />
                  </div>
                  <div className="upi_id">
                    <p>UPI Id : <span className="id_for_upi">salesforcenoob@axl</span></p>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="support_text">Thanks For Your Support</h1>
          
          </div>
        </div>
      </div>
      <style jsx>
        {`
        .support_text{
          font-size:2rem;
          
        }
        .upi_id{
          margin-top:1rem;
        }
        .upi_id p{
          font-weight:700;
        }
        .id_for_upi{
          color: red;
          box-shadow: 0px 4px 30px rgba(43, 98, 169, 0.5);
        }
        .profile_card_box{
          margin-bottom:4rem;
        }
        .qr_image{
            height: 35vh;
        }
          .pay_text {
            color: #16325c;
            font-size: 1.2rem;
            font-weight: 700;
          }
          .container {
            display: flex;
            align-items: start;
            justify-content: center;
          }
          .card {
            padding-bottom: 2rem;
            margin-top: 4rem;
            width: 100vw;
            max-width: 700px;
            min-height: 370px;
            position: relative;
            text-align: center;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
              0 6px 6px rgba(0, 0, 0, 0.23);
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
            box-shadow: 0 13px 26px rgba(0, 0, 0, 0.2),
              0 3px 6px rgba(0, 0, 0, 0.2);
          }
          .name {
            color: #16325c;
            font-size: 18px;
            text-transform: capatalize;
            font-weight: 600;
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
            font-size: 2rem;
          }
          .fb {
            background: linear-gradient(45deg, #3b5998, #0078d7);
            box-shadow: 0px 4px 30px rgba(43, 98, 169, 0.5);
          }
          .cp {
            background: linear-gradient(38deg, #2ff, #33e);
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
  );
};

export default SupportMe;

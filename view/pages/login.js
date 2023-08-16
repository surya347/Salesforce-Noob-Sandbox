import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import  { useEffect,useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PuffLoader from "react-spinners/PuffLoader";
import loginStyles from '../styles/Login.module.css';
import { servers } from "../config/index";
import Head from 'next/head';




// To Set From Loacal Storage
const getLocalItems = () =>{ 
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    var username = localStorage.getItem('user');
  }
 

  if(username){
    return JSON.parse(localStorage.getItem('user'));
  }else{
    return [];
  }
}


const login = () => {
  const history = useRouter();

  const [email, setEmail] = useState(getLocalItems());
  // const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#09569B");
  

  //error toast function
  const diffToast = () => {
    toast.error("Invalid credentials", {
      position: "top-center",
    });
  };

  //sending form data to backend for login
  const loginUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, "5000")

    const res = await fetch(`${servers}/logins`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent': '*',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    

    if (res.status === 500 || res.status === 400 || !data) {
      console.log('logged');
      diffToast();
    } else {
      if (data.email === "noobsalesforce@gmail.com") {
        console.log('logged');
        history.push("/sfnoobadmin");
      } else {
        console.log('logged o');
        history.push("/profile");
      }
      // Storing user email in local storage for login/Logout toggle
      localStorage.setItem('user',JSON.stringify(email));

      setTimeout(() => {
        history.push("/logout");
        // localStorage.removeItem('user')
      }, "7200000");
    }
  
   
  };


  return (
    <>
     <Head>
      <title>Login</title>
      <meta name="description" content="Free Salesforce development tutorials" />
      <meta name="keywords" content="HTML, CSS, JavaScript, Salesforce,Apex,LWC , Salesforce Blogs,Salesforce Tutorials,salesforce Noob login" />
      <meta name="author" content="Salesforce Noob" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
      <ToastContainer />
      <Navbar />
      <div className="limiter" id="login">
        <div className="container-login100">
          <div className="container login_div">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-5 col-md-offset-1">
                <div className="login_topimg"> </div>
                <div className="wrap-login100">
                  <form className="login100-form " method="POST">
                    {" "}
                    <span className="login100-form-title "> Login </span>{" "}
                    <span className="login100-form-subtitle m-b-16">
                      {" "} to your account{" "}
                    </span>
                    <div
                      className="wrap-input100 m-b-16"
                    >
                      {" "}
                      <input
                        className="input100"
                        type="email"
                        placeholder="Username/Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />{" "}
                      <span className="focus-input100"></span>{" "}
                      <span className="symbol-input100">
                        {" "}
                        <span className="glyphicon glyphicon-user"></span>{" "}
                      </span>{" "}
                    </div>
                    <div
                      className="wrap-input100 m-b-16"
                   >
                      {" "}
                      <input
                        className="input100"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />{" "}
                      <span className="focus-input100"></span>{" "}
                      <span className="symbol-input100">
                        {" "}
                        <span className="glyphicon glyphicon-lock"></span>{" "}
                      </span>{" "}
                    </div>
                    {/* <div className="flex-sb-m w-full p-b-30">
                      <div className="contact100-form-checkbox">
                        <input
                          className="input-checkbox100"
                          type="checkbox"
                          name="remember-me"
                        />{" "}
                        <label className="label-checkbox100" >
                          {" "}
                          Remember me{" "}
                        </label>{" "}
                      </div>
                    
                    </div> */}
                    <div className="container-login100-form-btn p-t-25">
                      {" "}
                      { loading ? 
                      <div className="cliploader">
                        <PuffLoader color={color} loading={loading}  size={35} />
                        </div>
                        :
                      <button className="login100-form-btn" onClick={loginUser}>
                        {" "}
                        Login{" "}
                      </button>
                      }
                      {" "}                 
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
        @charset "utf-8";

        * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box
        }
        
        .limiter {
            width: 100%;
            margin: 0 auto
        }
        
        .container-login100 {
            width: 100%;
            min-height: 100vh;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            padding: 15px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: relative;
            z-index: 1;
            background-image: url("https://image.freepik.com/free-photo/happy-woman-doing-online-shopping-home_329181-4301.jpg");
            /* background-color: aqua; */
        
        }

        .cliploader{
            display: flex;
            flex-wrap: wrap;
            justify-content:center;
            align-items: center;
            padding: 15px;
            width: 100%;
        }
        
        .container-login100::before {
            content: "";
            display: block;
            position: absolute;
            z-index: -1;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.80)
        }
        
        .login_topimg {
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            width: 90%;
            min-height: 185px;
            position: relative;
            background: #91B3D1 url(https://image.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37330.jpg) no-repeat;
            background-size: auto;
            background-position: center
        }
        
        .login_topimg img {
            width: 100%;
            height: auto
        }
        
        .login_topimg .logo_wrap {
            border-radius: 5px;
            background: #fff;
            padding: 13px 55px;
            position: relative;
            top: -21px;
            margin: 10px auto;
            max-width: 255px
        }
        
        #login .wrap-login100 {
            background-color: #fff;
            padding: 20px 45px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            width: 90%
        }
        
        .login100-form {
            width: 100%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap
        }
        
        .login100-form-title {
            font-size: 25px;
            color: #243762;
            line-height: 1.2;
            text-transform: uppercase;
            text-align: center;
            width: 100%;
            display: block
        }
        
        .login100-form-subtitle {
            font-size: 16px;
            color: #243762;
            line-height: 1.2;
            text-align: center;
            width: 100%;
            display: block
        }
        
        .wrap-input100 {
            position: relative;
            width: 100%;
            z-index: 1
        }
        
        #login input {
            outline: none;
            border: none
        }
        
        #login label {
            display: inline-block;
            margin-bottom: .5rem
        }
        
        .input-checkbox100 {
            display: none
        }
        
        input {
            outline: none;
            border: none
        }
        
        .wrap-input100 {
            position: relative;
            width: 100%;
            z-index: 1
        }
        
        .input100 {
            font-size: 15px;
            line-height: 1.2;
            color: #686868;
            display: block;
            width: 100%;
            background: #e6e6e6;
            height: 45px;
            border-radius: 3px;
            padding: 0 30px 0 55px
        }
        
        .focus-input100 {
            display: block;
            position: absolute;
            border-radius: 3px;
            bottom: 0;
            left: 0;
            z-index: -1;
            width: 100%;
            height: 100%;
            box-shadow: 0px 0px 0px 0px;
            color: rgba(211, 63, 141, 0.6)
        }
        
        .symbol-input100 {
            font-size: 15px;
            color: #999999;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            align-items: center;
            position: absolute;
            border-radius: 25px;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding-left: 23px;
            padding-bottom: 5px;
            pointer-events: none;
            -webkit-transition: all 0.4s;
            -o-transition: all 0.4s;
            -moz-transition: all 0.4s;
            transition: all 0.4s
        }
        
        ::-webkit-input-placeholder {
            opacity: 1;
            -webkit-transition: opacity .5s;
            transition: opacity .5s
        }
        
        :-moz-placeholder {
            opacity: 1;
            -moz-transition: opacity .5s;
            transition: opacity .5s
        }
        
        ::-moz-placeholder {
            opacity: 1;
            -moz-transition: opacity .5s;
            transition: opacity .5s
        }
        
        :-ms-input-placeholder {
            opacity: 1;
            -ms-transition: opacity .5s;
            transition: opacity .5s
        }
        
        ::placeholder {
            opacity: 1;
            transition: opacity .5s
        }
        
        *:focus::-webkit-input-placeholder {
            opacity: 0
        }
        
        *:focus:-moz-placeholder {
            opacity: 0
        }
        
        *:focus::-moz-placeholder {
            opacity: 0
        }
        
        *:focus:-ms-input-placeholder {
            opacity: 0
        }
        
        *:focus::placeholder {
            opacity: 0
        }
        
        .lnr {
            speak: none;
            font-style: normal;
            font-weight: 400;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }
        
        .flex-sb-m {
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            justify-content: space-between;
            -ms-align-items: center;
            align-items: center
        }
        
        .w-full {
            width: 100%
        }
        
        .p-b-30 {
            padding-bottom: 30px
        }
        
        .input-checkbox100:checked+.label-checkbox100::before {
            color: #09569B
        }
        
        .label-checkbox100::before {
            content: "\f00c";
            font-family: FontAwesome;
            font-size: 13px;
            color: transparent;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            width: 18px;
            height: 18px;
            border-radius: 2px;
            background: #fff;
            border: 1px solid #e6e6e6;
            left: 0;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -moz-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            -o-transform: translateY(-50%);
            transform: translateY(-50%)
        }
        
        .label-checkbox100 {
            font-size: 14px;
            font-weight: normal;
            color: #999999;
            line-height: 1.2;
            display: block;
            position: relative;
            padding-left: 26px;
            cursor: pointer
        }
        
        .m-b-16 {
            margin-bottom: 16px
        }
        
        .p-b-55 {
            padding-bottom: 55px
        }
         
        .container-login100-form-btn {
            width: 100%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            flex-wrap: wrap;
            justify-content: center
            margin-bottom:40px;
        }
        
        .login100-form-btn:hover {
            background: #333333
        }
        
        .label-checkbox100::before {
            content: "\f00c";
            font-family: FontAwesome;
            font-size: 13px;
            color: transparent;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            width: 18px;
            height: 18px;
            border-radius: 3px;
            background: #fff;
            border: 2px solid #09569B;
            left: 0;
            top: 48%;
            -webkit-transform: translateY(-50%);
            -moz-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            -o-transform: translateY(-50%);
            transform: translateY(-50%)
        }
        
        #login button:hover {
            cursor: pointer
        }
        
        .login100-form-btn {
            font-size: 16px;
            line-height: 1.5;
            color: #fff;
            text-transform: uppercase;
            width: 100%;
            height: 45px;
            border-radius: 3px;
            background: #09569B;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 25px;
            -webkit-transition: all 0.4s;
            -o-transition: all 0.4s;
            -moz-transition: all 0.4s;
            transition: all 0.4s
        }
        
        #login button {
            outline: none !important;
            border: none
        }
        
        @media (max-width: 768px) {
            .login_div {
                width: 750px
            }
        
            #login .wrap-login100 {
                padding: 27px
            }
        
            .login_topimg .logo_wrap {
                padding: 5px 55px
            }

            .login_topimg{
              width:100% !important;
            }

            #login .wrap-login100{
              width:100% !important;
            }
        }
        
        `}
      </style>
    </>
  );

}

export default login
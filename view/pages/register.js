import Navbar from "../components/Navbar";
import { useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PuffLoader from "react-spinners/PuffLoader";
import Link from "next/link";
import registerStyle from '../styles/Register.module.css';
import { servers } from "../config/index";
import Head from 'next/head';

const register = () => {
  const history = useRouter();
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "", 
    password: "",
    cpassword: "",
    filename: "",
    contentType: "",
    imageBase64: "",
  });
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#28a745");

  //declaring variable to get the name & value of the input field in signup form
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    //using spread operator to get all user date filled in form
    setUser({ ...user, [name]: value });
  };

  const PostDataToBackend = async (e) => {
    e.preventDefault();

    

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, "5000")
    
    const { name, email, phone, password, cpassword } = user;

    const res = await fetch(`${servers}/registers`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent': '*',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
        filename: "",
        contentType: "",
        imageBase64: "",
      }),
    });

    //error toast function
    const diffToast = () => {
      toast.error("Incomplete data", {
        position: "top-center",
      });
    };

    //error toast function
    const diffPasswordToast = () => {
      toast.dark("Password not matching", {
        position: "top-center",
      });
    };

    //error toast function
    const emailExistToast = () => {
      toast.dark("Email already exists", {
        position: "top-center",
      });
    };

    //checking response from the server after calling POST
    const data = await res.json();

    if (res.status === 500 || res.status === 404 || !res) {
      diffToast();
    } else if (res.status === 400) {
      diffPasswordToast();
    } else if (res.status === 422) {
      emailExistToast();
    } else {
      history.push("/login"); //after successful registeration user will be redirected to login page
    }
  };

  return (
    <>
     <Head>
      <title>Register</title>
      <meta name="description" content="Free Salesforce Youtube tutorials" />
      <meta name="keywords" content="HTML, CSS, JavaScript, Salesforce,Apex,LWC , Salesforce Blogs,Salesforce Tutorials,Salesforce Noob Registeration Page" />
      <meta name="author" content="Salesforce Noob" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
      <ToastContainer />
      <Navbar />
     
      <div className={registerStyle.register_photo}>
        <div className={registerStyle.form_container}>
          <div className={registerStyle.image_holder}></div>
          <form method="POST">
            <h2 className="text-center">
              <strong>Create</strong> an account.
            </h2>
            <div className="form_group">
              <input
                className={registerStyle.form_control}
                type="name"
                name="name"
                placeholder="Name"
                autoComplete="off"
                value={user.name}
                onChange={handleInputs}
              />
            </div>

            <div className="form_group">
              <input
                className={registerStyle.form_control}
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
              
                    value={user.email}
                    onChange={handleInputs}
              />
            </div>
            <div className="form_group">
              <input
                className={registerStyle.form_control}
                name="phone"
                placeholder="Phone"

                    type="number"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
              />
            </div>

            <div className="form_group">
              <input
                className={registerStyle.form_control}
                name="password"
                    type="password"
                    data-type="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                placeholder="Password"
              />
            </div>
            <div className="form_group">
              <input
                className={registerStyle.form_control}
                name="cpassword"
                    type="password"
                    data-type="password"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                placeholder="Password (repeat)"
              />
            </div>

            <div className={registerStyle.sign_button}>
            { loading ? 
              <div className={registerStyle.cliploader}>
                <PuffLoader color={color} loading={loading}  size={35} />
                </div>
                :
              <button className="btn btn-success btn-block" type="submit" onClick={PostDataToBackend}>
                Sign Up
              </button>
              } 
              
            </div>
            <div className={registerStyle.already}>
            <Link  href="/login">
              <a className={registerStyle.already}>
               You already have an account? <strong>Login here.</strong>
               </a>
            </Link>
            </div>

          </form>
        </div>
      </div>
    </>
  );

}

export default register
import React from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const courses = () => {
  return (
    <>
      <Head>
        <title>Courses</title>
        <meta name="description" content="Free Salesforce Youtube tutorials" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Salesforce,Apex,LWC , Salesforce Blogs,Salesforce Tutorials"
        />
        <meta name="author" content="Salesforce Noob" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Navbar />
      <div className="container-fluid code_div">
        <h1 className="mt-5 text-center main_heading">
          Welcome To Course Page!
        </h1>
        <hr />
      </div>
      <Footer />

      <style jsx>
        {`
            .code_div{
                margin-top: 80px;         
            }

            .code_topic {
                color: black !important;
                text-decoration: none;
                text-decoration-line: none;
                list-style: none;
            
            }
        `}
        </style>
    </>
  );
};

export default courses;

import React from 'react';
import Head from 'next/head';
import SupportMe from '../components/SupportMe';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const support = () => {
  return (
    <>
    <Head>
      <title>Support</title>
      <meta name="description" content="Free Salesforce development tutorials" />
      <meta name="keywords" content="Salesforce Noob Support page,HTML, CSS, JavaScript, Salesforce,Apex,LWC , Salesforce Blogs,Salesforce Tutorials,salesforce Noob login" />
      <meta name="author" content="Salesforce Noob" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Navbar/>
    <SupportMe />
    <Footer/>
    </>
  )
}

export default support;
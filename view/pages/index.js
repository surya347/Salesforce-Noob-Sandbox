import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Link from '../src/Link';
import Navbar from '../components/Navbar';
import Link from "next/link";
import { Button,Card} from 'semantic-ui-react';
import { Header } from '../components/Home/Header';
import Footers from '../components/Footer';
import { PopularCards } from '../components/Home/PopularCards';
import SourceCodeCard from '../components/Home/SourceCodeCard';
import Head from 'next/head';
import PopularBlogsCard from '../components/Home/PopularBlogsCard';
import SupportIcon from '../components/supportIcon';

export default function Index() {
  return (
    <>
    <Head>
      <title>Home</title>
      <meta name="description" content="Free Salesforce Youtube tutorials" />
      <meta name="keywords" content="HTML, CSS, JavaScript, Salesforce,Apex,LWC , Salesforce Blogs,Salesforce Tutorials" />
      <meta name="author" content="Salesforce Noob" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Navbar/>
    <Header/>
    <SupportIcon/>
    <PopularCards/>
    <PopularBlogsCard/>
    <SourceCodeCard/>
    <Footers />

    </>
  );
}




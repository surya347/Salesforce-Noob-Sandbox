import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import RelatedPost from "../../components/RelatedPost";
import RecommendationList from "../../components/RecommendationList";
import  { useEffect, useState,useLayoutEffect } from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import HashLoader from "react-spinners/HashLoader";
import { servers } from '../../config/index'; 
import Footers from "../../components/Footer";
import Head from 'next/head';
import ProfileCard from "../../components/ProfileCard";
import RelatedBlogs from "../../components/RelatedBlogs";

const blogsdetails = () => {
  
  const router = useRouter();
    
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#3f51b5");
 
 
  //fetching details of user from DB and showing on profile Dashboard
  const callCodePage = async (id) => {

    try {
      const res = await axios.get(`https://salesforcenoob.onrender.com/blogsdetails_10`, { 
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'User-Agent': '*',
          },
        params: {
          filter: id,
        },
      });

      const data = await res.data;  

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
      let path = window.location.href;
      const after_ = path.substring(path.indexOf('_') + 1);
    callCodePage(after_);
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  var link = userData.youtubeLink;
  // console.log("link:"+JSON.stringify(link))   

  let address = "https://youtube.com/embed/" + link;

  return (
    <>
    <Head>
      <title>Blogs Details</title>
      <meta name="description" content="Free Salesforce Youtube tutorials and Salesforce blogs" />
      <meta name="keywords" content={`${userData.writtenByImageLink},Salesforce,Salesforce Apex,Salesforce LWC,Salesforce Blogs,Salesforce Tutorials,Salesforce Noob`} />
      <meta name="author" content="Salesforce Noob" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Navbar />
    { loading ? 
        <div className="sweet-loading">
           <HashLoader color={color} loading={loading}  size={100} />
          </div>
          :
          <div className="code_details">
          <div className="container-fluid">
          <div className="code_info">
           <h1>{userData.header} :-</h1>
           </div>
               
               <div className="imgae_section">
                <div className="code_details_img_screen">
                 <img src={userData.imageLink} alt="" />
                </div> 
                <div className="profile_cards">
                
                <ProfileCard />
                </div>
                </div>

               
                <h1 className="business_logic">Business Logic :-</h1>
                <Container  maxWidth="lg" style={{ whiteSpace: "break-spaces" }}>
                <Typography  variant="h6" component="h5" style={{ color: "#000000",fontSize:"18px"}}>{userData.summary}</Typography>
                </Container>
  
            <div className="row">
                
            <div className="col-12 col-md-9">  
        
             <div className="container big_card_code">     
                <h1>Implementation:- </h1>        
                <div className="code_details_card">
                  <br />
                  
                  {/* Step 1 */}
                  <Typography variant="h6" gutterBottom style={{ color: "brown",paddingBottom:20 }}>
                    Step 1 - <span style={{ color: "black",fontSize:"18px" }}>{userData.step1}</span>
                  </Typography>

                  {userData.stepMessage1 ?
                  <Typography variant="h7" gutterBottom style={{ color: "brown",fontWeight:600}}>
                    {userData.stepMessage1}
                  </Typography>
                  :null}
  
                  {userData.stepCode1 ?
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces",paddingTop:10,paddingBottom:20 }}>
                    <Box sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}>
                      <Typography  variant="h7" component="h7">
                        {userData.stepCode1}
                      </Typography>
                    </Box>
                  </Container>
                  :null}

                  {userData.stepImageLink1 ?
                  <div className="blogs_step_images">
                    <img src={userData.stepImageLink1} alt="stepImageLink1" />
                  </div>
                  :null}
  
                  <hr />
                  <br />
         
                {/* Step 2 */}
                <Typography variant="h6" gutterBottom style={{ color: "brown",paddingBottom:20 }}>
                    Step 2 - <span style={{ color: "black",fontSize:"18px" }}>{userData.step2}</span>
                  </Typography>

                  {userData.stepMessage2 ?
                  <Typography variant="h7" gutterBottom style={{ color: "brown",fontWeight:600}}>
                    {userData.stepMessage2}
                  </Typography>
                  :null}
  
                  {userData.stepCode2 ?
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces",paddingTop:10,paddingBottom:20 }}>
                    <Box sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}>
                      <Typography  variant="h7" component="h7">
                        {userData.stepCode2}
                      </Typography>
                    </Box>
                  </Container>
                  :null} 

                  {userData.stepImageLink2 ?
                  <div className="blogs_step_images">
                    <img src={userData.stepImageLink2} alt="stepImageLink1" />
                  </div>
                  :null}
  
                  <hr />
                  <br />
         
                {/* Step 3 */}
                {userData.step3 ?
                <div>
                {userData.step3 ?
                <Typography variant="h6" gutterBottom style={{ color: "brown",paddingBottom:20 }}>
                        Step 3 - <span style={{ color: "black",fontSize:"18px" }}>{userData.step3}</span>
                  </Typography>
                  :null}

                  {userData.stepMessage3 ?
                  <Typography variant="h7" gutterBottom style={{ color: "brown",fontWeight:600}}>
                    {userData.stepMessage3}
                  </Typography>
                  :null}
  
                  {userData.stepCode3 ?
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces",paddingTop:10,paddingBottom:20 }}>
                    <Box sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}>
                      <Typography  variant="h7" component="h7">
                        {userData.stepCode3}
                      </Typography>
                    </Box>
                  </Container>
                  :null} 

                  {userData.stepImageLink3 ?
                  <div className="blogs_step_images">
                    <img src={userData.stepImageLink3} alt="stepImageLink1" />
                  </div>
                  :null}
  
                  <hr />
                  <br />
                  </div>
                  :null}

                {/* Step 4 */}
                {userData.step4 ?
                <div>
                {userData.step4 ?
                <Typography variant="h6" gutterBottom style={{ color: "brown",paddingBottom:20 }}>
                        Step 4 - <span style={{ color: "black",fontSize:"18px" }}>{userData.step4}</span>
                  </Typography>
                  :null}

                  {userData.stepMessage4 ?
                  <Typography variant="h7" gutterBottom style={{ color: "brown",fontWeight:600}}>
                    {userData.stepMessage4}
                  </Typography>
                  :null}
  
                  {userData.stepCode4 ?
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces",paddingTop:10,paddingBottom:20 }}>
                    <Box sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}>
                      <Typography  variant="h7" component="h7">
                        {userData.stepCode4}
                      </Typography>
                    </Box>
                  </Container>
                  :null} 

                  {userData.stepImageLink4 ?
                  <div className="blogs_step_images">
                    <img src={userData.stepImageLink4} alt="stepImageLink1" />
                  </div>
                  :null}
  
                  <hr />
                  <br />
                  </div>
                  :null}


                {/* Step 5 */}
                {userData.step5 ?
                <div>
                {userData.step5 ?
                <Typography variant="h6" gutterBottom style={{ color: "brown",paddingBottom:20 }}>
                        Step 5 - <span style={{ color: "black",fontSize:"18px" }}>{userData.step5}</span>
                  </Typography>
                  :null}

                  {userData.stepMessage5 ?
                  <Typography variant="h7" gutterBottom style={{ color: "brown",fontWeight:600}}>
                    {userData.stepMessage5}
                  </Typography>
                  :null}
  
                  {userData.stepCode5 ?
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces",paddingTop:10,paddingBottom:20 }}>
                    <Box sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}>
                      <Typography  variant="h7" component="h7">
                        {userData.stepCode5}
                      </Typography>
                    </Box>
                  </Container>
                  :null} 

                  {userData.stepImageLink5 ?
                  <div className="blogs_step_images">
                    <img src={userData.stepImageLink5} alt="stepImageLink1" />
                  </div>
                  :null}
  
                  <hr />
                  <br />
                  </div>
                  :null}

                {/* Step 6 */}
                {userData.step6 ?
                <div>
                {userData.step6 ?
                <Typography variant="h6" gutterBottom style={{ color: "brown",paddingBottom:20 }}>
                        Step 6 - <span style={{ color: "black",fontSize:"18px" }}>{userData.step6}</span>
                  </Typography>
                  :null}

                  {userData.stepMessage6 ?
                  <Typography variant="h7" gutterBottom style={{ color: "brown",fontWeight:600}}>
                    {userData.stepMessage6}
                  </Typography>
                  :null}
  
                  {userData.stepCode6 ?
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces",paddingTop:10,paddingBottom:20 }}>
                    <Box sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}>
                      <Typography  variant="h7" component="h7">
                        {userData.stepCode6}
                      </Typography>
                    </Box>
                  </Container>
                  :null} 

                  {userData.stepImageLink6 ?
                  <div className="blogs_step_images">
                    <img src={userData.stepImageLink6} alt="stepImageLink1" />
                  </div>
                  :null}
  
                  <hr />
                  <br />
                  </div>
                  :null}

                {/* Step 7 */}
                {userData.step7 ?
                <div>
                {userData.step7 ?
                <Typography variant="h6" gutterBottom style={{ color: "brown",paddingBottom:20 }}>
                        Step 7 - <span style={{ color: "black",fontSize:"18px" }}>{userData.step7}</span>
                  </Typography>
                  :null}

                  {userData.stepMessage7 ?
                  <Typography variant="h7" gutterBottom style={{ color: "brown",fontWeight:600}}>
                    {userData.stepMessage7}
                  </Typography>
                  :null}
  
                  {userData.stepCode7 ?
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces",paddingTop:10,paddingBottom:20 }}>
                    <Box sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}>
                      <Typography  variant="h7" component="h7">
                        {userData.stepCode7}
                      </Typography>
                    </Box>
                  </Container>
                  :null} 

                  {userData.stepImageLink7 ?
                  <div className="blogs_step_images">
                    <img src={userData.stepImageLink7} alt="stepImageLink1" />
                  </div>
                  :null}
  
                  <hr />
                  <br />
                  </div>
                  :null}

                {/* Step 8 */}
                {userData.step8 ?
                <div>
                {userData.step8 ?
                <Typography variant="h6" gutterBottom style={{ color: "brown",paddingBottom:20 }}>
                        Step 8 - <span style={{ color: "black",fontSize:"18px" }}>{userData.step8}</span>
                  </Typography>
                  :null}

                  {userData.stepMessage8 ?
                  <Typography variant="h7" gutterBottom style={{ color: "brown",fontWeight:600}}>
                    {userData.stepMessage8}
                  </Typography>
                  :null}
  
                  {userData.stepCode8 ?
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces",paddingTop:10,paddingBottom:20 }}>
                    <Box sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}>
                      <Typography  variant="h7" component="h7">
                        {userData.stepCode8}
                      </Typography>
                    </Box>
                  </Container>
                  :null} 

                  {userData.stepImageLink8 ?
                  <div className="blogs_step_images">
                    <img src={userData.stepImageLink8} alt="stepImageLink1" />
                  </div>
                  :null}
  
                  <hr />
                  <br />
                  </div>
                  :null}

                {/* Step 9 */}
                {userData.step9 ?
                <div>
                {userData.step9 ?
                <Typography variant="h6" gutterBottom style={{ color: "brown",paddingBottom:20 }}>
                        Step 9 - <span style={{ color: "black",fontSize:"18px" }}>{userData.step9}</span>
                  </Typography>
                  :null}

                  {userData.stepMessage9 ?
                  <Typography variant="h7" gutterBottom style={{ color: "brown",fontWeight:600}}>
                    {userData.stepMessage9}
                  </Typography>
                  :null}
  
                  {userData.stepCode9 ?
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces",paddingTop:10,paddingBottom:20 }}>
                    <Box sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}>
                      <Typography  variant="h7" component="h7">
                        {userData.stepCode9}
                      </Typography>
                    </Box>
                  </Container>
                  :null} 

                  {userData.stepImageLink9 ?
                  <div className="blogs_step_images">
                    <img src={userData.stepImageLink9} alt="stepImageLink1" />
                  </div>
                  :null}
  
                  <hr />
                  <br />
                  </div>
                  :null}

                {/* Step 10 */}
                {userData.step10 ?
                <div>
                {userData.step10 ?
                <Typography variant="h6" gutterBottom style={{ color: "brown",paddingBottom:20 }}>
                        Step 10 - <span style={{ color: "black",fontSize:"18px" }}>{userData.step10}</span>
                  </Typography>
                  :null}

                  {userData.stepMessage10 ?
                  <Typography variant="h7" gutterBottom style={{ color: "brown",fontWeight:600}}>
                    {userData.stepMessage10}
                  </Typography>
                  :null}
  
                  {userData.stepCode10 ?
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces",paddingTop:10,paddingBottom:20 }}>
                    <Box sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}>
                      <Typography  variant="h7" component="h7">
                        {userData.stepCode10}
                      </Typography>
                    </Box>
                  </Container>
                  :null} 

                  {userData.stepImageLink10 ?
                  <div className="blogs_step_images">
                    <img src={userData.stepImageLink10} alt="stepImageLink1" />
                  </div>
                  :null}
  
                  <hr />
                  <br />
                  </div>
                  :null}


                 {/* Step 11 */}
                {userData.step11 ?
                <div>
                {userData.step11 ?
                <Typography variant="h6" gutterBottom style={{ color: "brown",paddingBottom:20 }}>
                        Step 11 - <span style={{ color: "black",fontSize:"18px" }}>{userData.step11}</span>
                  </Typography>
                  :null}

                  {userData.stepMessage11 ?
                  <Typography variant="h7" gutterBottom style={{ color: "brown",fontWeight:600}}>
                    {userData.stepMessage11}
                  </Typography>
                  :null}
  
                  {userData.stepCode11 ?
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces",paddingTop:10,paddingBottom:20 }}>
                    <Box sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}>
                      <Typography  variant="h7" component="h7">
                        {userData.stepCode11}
                      </Typography>
                    </Box>
                  </Container>
                  :null} 

                  {userData.stepImageLink11 ?
                  <div className="blogs_step_images">
                    <img src={userData.stepImageLink11} alt="stepImageLink1" />
                  </div>
                  :null}
  
                  <hr />
                  <br />
                  </div>
                  :null}


                {/* Step 12 */}
                {userData.step12 ?
                <div>
                {userData.step12 ?
                <Typography variant="h6" gutterBottom style={{ color: "brown",paddingBottom:20 }}>
                        Step 12 - <span style={{ color: "black",fontSize:"18px" }}>{userData.step12}</span>
                  </Typography>
                  :null}

                  {userData.stepMessage12 ?
                  <Typography variant="h7" gutterBottom style={{ color: "brown",fontWeight:600}}>
                    {userData.stepMessage12}
                  </Typography>
                  :null}
  
                  {userData.stepCode12 ?
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces",paddingTop:10,paddingBottom:20 }}>
                    <Box sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}>
                      <Typography  variant="h7" component="h7">
                        {userData.stepCode12}
                      </Typography>
                    </Box>
                  </Container>
                  :null} 

                  {userData.stepImageLink12 ?
                  <div className="blogs_step_images">
                    <img src={userData.stepImageLink12} alt="stepImageLink1" />
                  </div>
                  :null}
  
                  <hr />
                  <br />
                  </div>
                  :null}


                {/* Step 13 */}
                {userData.step13 ?
                <div>
                {userData.step13 ?
                <Typography variant="h6" gutterBottom style={{ color: "brown",paddingBottom:20 }}>
                        Step 13 - <span style={{ color: "black",fontSize:"18px" }}>{userData.step13}</span>
                  </Typography>
                  :null}

                  {userData.stepMessage13 ?
                  <Typography variant="h7" gutterBottom style={{ color: "brown",fontWeight:600}}>
                    {userData.stepMessage13}
                  </Typography>
                  :null}
  
                  {userData.stepCode13 ?
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces",paddingTop:10,paddingBottom:20 }}>
                    <Box sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}>
                      <Typography  variant="h7" component="h7">
                        {userData.stepCode13}
                      </Typography>
                    </Box>
                  </Container>
                  :null} 

                  {userData.stepImageLink13 ?
                  <div className="blogs_step_images">
                    <img src={userData.stepImageLink13} alt="stepImageLink1" />
                  </div>
                  :null}
  
                  <hr />
                  <br />
                  </div>
                  :null}


                 {/* Step 14 */}
                {userData.step14 ?
                <div>
                {userData.step14 ?
                <Typography variant="h6" gutterBottom style={{ color: "brown",paddingBottom:20 }}>
                        Step 14 - <span style={{ color: "black",fontSize:"18px" }}>{userData.step14}</span>
                  </Typography>
                  :null}

                  {userData.stepMessage14 ?
                  <Typography variant="h7" gutterBottom style={{ color: "brown",fontWeight:600}}>
                    {userData.stepMessage14}
                  </Typography>
                  :null}
  
                  {userData.stepCode14 ?
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces",paddingTop:10,paddingBottom:20 }}>
                    <Box sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}>
                      <Typography  variant="h7" component="h7">
                        {userData.stepCode14}
                      </Typography>
                    </Box>
                  </Container>
                  :null} 

                  {userData.stepImageLink14 ?
                  <div className="blogs_step_images">
                    <img src={userData.stepImageLink14} alt="stepImageLink1" />
                  </div>
                  :null}
  
                  <hr />
                  <br />
                  </div>
                  :null}

                {/* Step 15 */}
                {userData.step15 ?
                <div>
                {userData.step15 ?
                <Typography variant="h6" gutterBottom style={{ color: "brown",paddingBottom:20 }}>
                        Step 15 - <span style={{ color: "black",fontSize:"18px" }}>{userData.step15}</span>
                  </Typography>
                  :null}

                  {userData.stepMessage15 ?
                  <Typography variant="h7" gutterBottom style={{ color: "brown",fontWeight:600}}>
                    {userData.stepMessage15}
                  </Typography>
                  :null}
  
                  {userData.stepCode15 ?
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces",paddingTop:10,paddingBottom:20 }}>
                    <Box sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}>
                      <Typography  variant="h7" component="h7">
                        {userData.stepCode15}
                      </Typography>
                    </Box>
                  </Container>
                  :null} 

                  {userData.stepImageLink15 ?
                  <div className="blogs_step_images">
                    <img src={userData.stepImageLink15} alt="stepImageLink1" />
                  </div>
                  :null}
  
                  <hr />
                  <br />
                  </div>
                  :null}


                {/* Step 16 */}
                {userData.step16 ?
                <div>
                {userData.step16 ?
                <Typography variant="h6" gutterBottom style={{ color: "brown",paddingBottom:20 }}>
                        Step 16 - <span style={{ color: "black",fontSize:"18px" }}>{userData.step16}</span>
                  </Typography>
                  :null}

                  {userData.stepMessage16 ?
                  <Typography variant="h7" gutterBottom style={{ color: "brown",fontWeight:600}}>
                    {userData.stepMessage16}
                  </Typography>
                  :null}
  
                  {userData.stepCode16 ?
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces",paddingTop:10,paddingBottom:20 }}>
                    <Box sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}>
                      <Typography  variant="h7" component="h7">
                        {userData.stepCode16}
                      </Typography>
                    </Box>
                  </Container>
                  :null} 

                  {userData.stepImageLink16 ?
                  <div className="blogs_step_images">
                    <img src={userData.stepImageLink16} alt="stepImageLink1" />
                  </div>
                  :null}
  
                  <hr />
                  <br />
                  </div>
                  :null}


                {/* Step 17 */}
                {userData.step17 ?
                <div>
                {userData.step17 ?
                <Typography variant="h6" gutterBottom style={{ color: "brown",paddingBottom:20 }}>
                        Step 17 - <span style={{ color: "black",fontSize:"18px" }}>{userData.step17}</span>
                  </Typography>
                  :null}

                  {userData.stepMessage17 ?
                  <Typography variant="h7" gutterBottom style={{ color: "brown",fontWeight:600}}>
                    {userData.stepMessage17}
                  </Typography>
                  :null}
  
                  {userData.stepCode17 ?
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces",paddingTop:10,paddingBottom:20 }}>
                    <Box sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}>
                      <Typography  variant="h7" component="h7">
                        {userData.stepCode17}
                      </Typography>
                    </Box>
                  </Container>
                  :null} 

                  {userData.stepImageLink17 ?
                  <div className="blogs_step_images">
                    <img src={userData.stepImageLink17} alt="stepImageLink1" />
                  </div>
                  :null}
  
                  <hr />
                  <br />
                  </div>
                  :null}


               {/* Step 18 */}
                {userData.step18 ?
                <div>
                {userData.step18 ?
                <Typography variant="h6" gutterBottom style={{ color: "brown",paddingBottom:20 }}>
                        Step 18 - <span style={{ color: "black",fontSize:"18px" }}>{userData.step18}</span>
                  </Typography>
                  :null}

                  {userData.stepMessage18 ?
                  <Typography variant="h7" gutterBottom style={{ color: "brown",fontWeight:600}}>
                    {userData.stepMessage18}
                  </Typography>
                  :null}
  
                  {userData.stepCode18 ?
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces",paddingTop:10,paddingBottom:20 }}>
                    <Box sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}>
                      <Typography  variant="h7" component="h7">
                        {userData.stepCode18}
                      </Typography>
                    </Box>
                  </Container>
                  :null} 

                  {userData.stepImageLink18 ?
                  <div className="blogs_step_images">
                    <img src={userData.stepImageLink18} alt="stepImageLink1" />
                  </div>
                  :null}
  
                  <hr />
                  <br />
                  </div>
                  :null}


                {/* Step 19 */}
                {userData.step19 ?
                <div>
                {userData.step19 ?
                <Typography variant="h6" gutterBottom style={{ color: "brown",paddingBottom:20 }}>
                        Step 19 - <span style={{ color: "black",fontSize:"18px" }}>{userData.step19}</span>
                  </Typography>
                  :null}

                  {userData.stepMessage19 ?
                  <Typography variant="h7" gutterBottom style={{ color: "brown",fontWeight:600}}>
                    {userData.stepMessage19}
                  </Typography>
                  :null}
  
                  {userData.stepCode19 ?
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces",paddingTop:10,paddingBottom:20 }}>
                    <Box sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}>
                      <Typography  variant="h7" component="h7">
                        {userData.stepCode19}
                      </Typography>
                    </Box>
                  </Container>
                  :null} 

                  {userData.stepImageLink19 ?
                  <div className="blogs_step_images">
                    <img src={userData.stepImageLink19} alt="stepImageLink1" />
                  </div>
                  :null}
  
                  <hr />
                  <br />
                  </div>
                  :null}

                {/* Step 20 */}
                {userData.step20 ?
                <div>
                {userData.step20 ?
                <Typography variant="h6" gutterBottom style={{ color: "brown",paddingBottom:20 }}>
                        Step 20 - <span style={{ color: "black",fontSize:"18px" }}>{userData.step20}</span>
                  </Typography>
                  :null}

                  {userData.stepMessage20 ?
                  <Typography variant="h7" gutterBottom style={{ color: "brown",fontWeight:600}}>
                    {userData.stepMessage20}
                  </Typography>
                  :null}
  
                  {userData.stepCode20 ?
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces",paddingTop:10,paddingBottom:20 }}>
                    <Box sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}>
                      <Typography  variant="h7" component="h7">
                        {userData.stepCode20}
                      </Typography>
                    </Box>
                  </Container>
                  :null} 

                  {userData.stepImageLink20 ?
                  <div className="blogs_step_images">
                    <img src={userData.stepImageLink20} alt="stepImageLink1" />
                  </div>
                  :null}
  
                  <hr />
                  <br />
                  </div>
                  :null}




              </div>
              </div>
              </div>
              <div className="col-12 col-md-3 recommendation_div">
                <RecommendationList/>
              </div>
            </div>
          </div>
  
          {/* embedding youtube video */}
          {userData.youtubeLink ?
          <div className="container youtube_sect">
          <h1>YouTube Tutorial</h1>
          <div className="youtubve_video">
            <iframe
              allowFullScreen="allowfullscreen"
              id="search"
              width="560"
              height="315"
              src={address}
              frameBorder="0"
             
            />
          </div>
          </div>
          :null}

          <div className="youtubve_video">
          <RelatedBlogs relatedCategory={[userData.category ,userData._id ]}/>
          </div>
          <div className="footer_section">
            <Footers/>
          </div>
        </div>
    }
 
    <style jsx>
            {`

            .normal_text{
              font-size:medium !important;
            }

            .youtube_sect{
              margin-top: 40px;
              background-color:#f6f6f6;
              padding:20px;
            }

            .youtube_sect h1{
              text-align:center;
              font-weight: 500;
            }

            .blogs_step_images img{
              width: -webkit-fill-available;
              max-height: 400px;
            }

            .business_logic{
              font-weight:600;
            }

            .youtubve_video{
              display: flex;
              justify-content: center;
              margin-top: 10px;
              margin-bottom: 30px;
            }

            .sweet-loading{
              position: fixed;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
                 
             }

             .imgae_section{
              display: flex;
              justify-content: center;
              align-items: center;
             }

          .recommendation_div{
              padding-top: 8rem;
          }

           .code_details_img_mobile{
              display: none;
          }
          
          .code_details_img_screen{
              padding-bottom: 100px;
          
          }
          
          .code_details_img_screen img{
              width: 70vw;
              height: 80vh;
          }
          
          .big_card_code{
              background-color: #fff;
              margin-top: 40px;
              padding-bottom: 40px;
              padding-left: 30px;
              width: 100%;
              /* max-width: 600; */
              border-radius: 10px;
              box-shadow: 0 5px 10px grey;
          }

          .big_card_code h1{
            font-weight:600;
          }
          
          .codeDetail_div{
              margin-bottom: 50px;
          }
          
          .code_info{
              margin-bottom: 50px;
          }

          .code_info h1{
            text-transform: capitalize;
            font-weight: 600;
          }
          
          .code_details{
              margin-top: 80px;
              
          }
          
          .code_details_card{
              width: 100%;
              // max-width: 400px;
          }
          
          
          /* mobile view */
          @media only screen and (max-width:508px){
             
            .profile_cards{
              display:none !important;
            }
              
              iframe{
                  width: 430px;
                  height: 250px;
              }
          
              .code_details_img_screen img{
                  width: 100vw !important;
                  height: 50vh;
                  padding:20px;

              }
          
              
              // .big_card_code{
              //     width: 500px !important;
              // } 
          
              .code_details_card{
                  width: 100%;
                  // max-width: 250px;
              }
          
              .codeDetail_div{
                  padding-left: 22px;
              }
          
              .youtubve_video{
                  width: 100% !important;
              }
          
              .footer_section{
                  width: 100% !important;
                  position:none !important;
              }
  
              .footer_section footer{
                position:none !important;
              }
          
          }
          
          @media only screen and (max-width:820px){
          
              .code_details_img_screen img{
                  width: 65vw;
                  height: 40vh;
              }   
          
              // .big_card_code{
              //     width: 650px !important;
              // } 
          
              .code_details_card{
                  width: 100%;
                  // max-width: 250px;
              }
          
              .codeDetail_div{
                  padding-left: 22px;
              }
          
          }
            `}
    </style>
    </>
  )
}

export default blogsdetails;
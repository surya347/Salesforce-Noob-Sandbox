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


// import codeDetailStyle from '../../styles/CodeDetails.module.'



const codeDetails = () => {

    const router = useRouter();
    
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#3f51b5");
   
  
    //fetching details of user from DB and showing on profile Dashboard
    const callCodePage = async (id) => {

      try {
        const res = await axios.get(`https://salesforcenoob.onrender.com/codedetailss`, { 
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              'User-Agent': '*',
            },
          params: {
            userId: id,
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
  
    var link = userData.youtube;
    let address = "https://youtube.com/embed/" + link;
  
    return (
      <>
      <Head>
      <title>Source Codes</title>
      <meta name="description" content="Free Salesforce Youtube tutorials" />
      <meta name="keywords" content="HTML, CSS, JavaScript, Salesforce Interview Questions,Salesforce Apex ,Salesforce Apex Interview Questions,Salesforce,Salesforce Apex,Salesforce LWC , Salesforce Blogs,Salesforce Tutorials,salesforce Interview question and answers,Salesforce Noob" />
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
          <div className="container-fluid codeDetail_div">
          <div className="code_info">
                  <h1>{userData.topic} :-</h1>
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
                  <Typography  variant="h6" component="h6" style={{ color: "#000000" }}>{userData.summary}</Typography>
                </Container>
  
            <div className="row">
               
              <div className=" col-12 col-md-9">  
        
             <div className="container big_card_code">     
                <h1>Source Code :- </h1>        
                <div className="code_details_card">
                  <br />
                  {/* HTML code */}
                  <Typography variant="h6" gutterBottom style={{ color: "brown" }}>
                    {userData.code1}
                  </Typography>
  
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces" }}>
                    <Box
                      sx={{ bgcolor: "#F0F0F0", height: "100%", paddingLeft:"2%",overflowX:"scroll" }}
                    >
                      <Typography  variant="h7" component="h7">
                        {userData.message1}
                      </Typography>
                    </Box>
                  </Container>
  
                  <hr />
                  <br />
                  {/* javaScript code */}
                  <Typography variant="h6" gutterBottom style={{ color: "brown" }}>
                    {userData.code2}
                  </Typography>
  
                  <Container maxWidth="sm" style={{ whiteSpace: "break-spaces" }}>
                    <Box
                      sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll"}}
                    >
                      <Typography variant="h7" component="h7">
                        {userData.message2}
                      </Typography>
                    </Box>
                  </Container>
                  <hr />
                  <br />
  
                  {/* XML code */}
                  <Typography variant="h6" gutterBottom style={{ color: "brown" }}>
                    {userData.code3}
                  </Typography>
  
                  <Container maxWidth="sm" style={{ whiteSpace: "break-spaces" }}>
                    <Box
                      sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll"}}
                    >
                      <Typography variant="h7" component="h7">
                        {userData.message3}
                      </Typography>
                    </Box>
                  </Container>
  
                  <hr />
                  <br />
  
                  {/* CSS File */}
                  <Typography variant="h6" gutterBottom style={{ color: "brown" }}>
                    {userData.code4}
                  </Typography>
  
                  <Container maxWidth="sm" style={{ whiteSpace: "break-spaces" }}>
                    <Box
                      sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll"}}
                    >
                      <Typography variant="h7" component="h7">
                        {userData.message4}
                      </Typography>
                    </Box>
                  </Container>

                  <hr />
                  <br />
  
  
                  {/* HTML code */}
                  {userData.message5 ? 
                  <div>
                  <Typography variant="h6" gutterBottom style={{ color: "brown" }}>
                    {userData.code5}
                  </Typography>
  
                  <Container  maxWidth="sm" style={{ whiteSpace: "break-spaces" }}>
                    <Box
                      sx={{ bgcolor: "#F0F0F0", height: "100%", paddingLeft:"2%",overflowX:"scroll" }}
                    >
                      <Typography  variant="h7" component="h7">
                        {userData.message5}
                      </Typography>
                    </Box>
                  </Container>
  
                  <hr />
                  <br />
                  </div>
                  :null}

                  {/* javaScript code */}
                  {userData.message6 ? 
                  <div>
                  <Typography variant="h6" gutterBottom style={{ color: "brown" }}>
                    {userData.code6}
                  </Typography>
  
                  <Container maxWidth="sm" style={{ whiteSpace: "break-spaces" }}>
                    <Box
                      sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll" }}
                    >
                      <Typography variant="h7" component="h7">
                        {userData.message6}
                      </Typography>
                    </Box>
                  </Container>
                  <hr />
                  <br />
                  </div>
                  :null}
  
                  {/* XML code */}
                  {userData.message7 ? 
                  <div>
                  <Typography variant="h6" gutterBottom style={{ color: "brown" }}>
                    {userData.code7}
                  </Typography>
  
                  <Container maxWidth="sm" style={{ whiteSpace: "break-spaces" }}>
                    <Box
                      sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll"}}
                    >
                      <Typography variant="h7" component="h7">
                        {userData.message7}
                      </Typography>
                    </Box>
                  </Container>
  
                  <hr />
                  <br />
                  </div>
                  :null}

  
                  {/* CSS File */}
                  {userData.message8 ? 
                  <div>
                  <Typography variant="h6" gutterBottom style={{ color: "brown" }}>
                    {userData.code8}
                  </Typography>
  
                  <Container maxWidth="sm" style={{ whiteSpace: "break-spaces" }}>
                    <Box
                      sx={{ bgcolor: "#F0F0F0", height: "100%",paddingLeft:"2%",overflowX:"scroll"}}
                    >
                      <Typography variant="h7" component="h7">
                        {userData.message8}
                      </Typography>
                    </Box>
                  </Container>
                  </div>
                  :null}

                </div>
                </div>
              </div>
              <div className="col-10 col-md-3 recommendation_div">
                <RecommendationList/>
              </div>
            </div>
          </div>
  
          {/* embedding youtube video */}
          {address ?
          <div className="container youtube_sect">
          <h1>YouTube Tutorial :-</h1>
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
          </div>:null}

          <div className="youtubve_video">
          <RelatedPost relatedCategory={[userData.category ,userData._id ]}/>
          </div>
          <div className="footer_section">
            <Footers/>
          </div>
        </div>
      }
      
      <style jsx>
        {`

        .youtube_sect{
          margin-top: 40px;
          background-color:#f6f6f6;
          padding:20px;
        }

        .youtube_sect h1{
          text-align:center;
          font-weight: 500;
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
            width: 72vw;
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
        
        .codeDetail_div{
            margin-bottom: 50px;
        }
        
        .code_info{
            margin-bottom: 50px;
        }

        .code_info h1{
          text-transform: capitalize;
          font-weight: 500;
        }

        .business_logic{
          font-weight:500;
        }

        .big_card_code h1{
          font-weight:500;

        }


        
        .code_details{
            margin-top: 80px;
            
        }
        
        .code_details_card{
            width: 100%;
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
              padding: 20px;
              width: 90vw!important;
            }
        
            .code_details_card{
                width: 100%;
                max-width: 250px;
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
        
            
        
            .code_details_card{
                width: 100%;
                max-width: 250px;
            }
        
            .codeDetail_div{
                padding-left: 22px;
            }
        
        }
        `}
      </style>
        
      </>
      
    );
  
}

export default codeDetails;
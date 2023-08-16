import { useEffect, useState }from "react";
import HoverCard from "../HoverCard";
import PuffLoader from "react-spinners/PuffLoader";
import { useRouter } from "next/router";
import { servers } from '../../config/index';
import Image from "next/image";
import Link from "next/link";





export const PopularCards = () => {

  const history = useRouter();
  const [popularDocumentation, setPopularDocumentation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#3f51b5");

    //fetching details of user from DB and showing on profile Dashboard
    const callCodePage = async () => {
      try { 
        const res = await fetch(`https://salesforcenoob.onrender.com/codess_all_10`, { 
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'User-Agent': '*',
          },
        });
  
        const data = await res.json();
        if(data){
          setLoading(false);
          setPopularDocumentation(data);
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
      callCodePage();
    }, []);


  return (
    <>
      <div className="container big_card">
        <div className="row home_card_row">
          <div className="col-10 ">
            <div className="row row_div">
              <div className="col-6 col-md-4">
                <div className="sorce_code_div">
                  <img src="/Sf_noob_logo.png" className="source_code_icon" />
                </div>
              </div>
              <div className="col-6 col-md-8 doc_text"> 
              <div>
                <h2>Popular Documentation</h2>
                <p>Popular Documentation</p>
                </div>
                <div>
                <Link href="/code">    
                <button className="card_btn">View All</button>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        { loading ? 
      <div className="cliploader">
         <PuffLoader color={color} loading={loading}  size={35} />
        </div>
        :
        <div className="row ">
          <div className="col-12 col-md-12 col-lg-12">
              <div className="row doc_card_div">
                <HoverCard codeData={popularDocumentation.filter(function(item) { return  item.isPopular === "Yes" })}/>
                {/* <DocumentationCard codeData={popularDocumentation}/> */}
              </div>
          </div>
        </div>
}
      </div>
      <style jsx>
        {`
          .card_btn{
            background: linear-gradient(
      140deg,
      #42c3ca 0%,
      #42c3ca 50%,
      #42c3cac7 75%
    ) !important
            color: aliceblue;
            font-weight: 500;
            border: 2px solid white;
            padding-left: 25px;
            padding-right: 25px;
            padding-top: 5px;
            padding-bottom: 5px;
            border-radius: 2rem;
          }

          .card_btn:hover{
            font-weight: 600;
          }
        .big_card{
            background-color: #fff;
            margin-top: 40px;
            margin-bottom: 40px;
            /* background: #16325c; */
            width: 100%;
            height: 100%;
            border-radius: 20px;
            box-shadow: 0 5px 10px rgba(244, 67, 54, 0.5);
        
        }
        
        .doc_card_div{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row !important;
            margin-left: 0px;
            margin-right: 0px;
            /* background: #ff5823; */
        }
        
        .cliploader{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        /* .sweet-loading{
            position: fixed;
             top: 50%;
             left: 50%;
             transform: translate(-50%, -50%);
               
           } */
           
        
        
        /* .home_card_col{
            display: flex;
            align-items: center;
            justify-content: center;
        } */
        
        .row_div{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        
        
        .source_code_icon{
            width: 150px;
            border-radius: 50%;
            background: #fff;
            padding: 6px;
            margin-top:10px ;
        }
        
        .sorce_code_div h2{
            font-size: 22px;
            margin-top: 20px;
            font-weight: 500;
        
        }
        
        
        /* for tablet view */
        @media (max-width: 820px){
            /* .doc_divs {
                width: 372px;
            } */

           
        
            .doc_text h2{
                font-size: 32px !important;
                font-weight: 600;
            }
        
            .doc_text p{
                font-size: 22px !important;
                font-weight: 400;
            }
        
            .doc_card_div{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column !important;
                width: 100%;
               
            }
        }
        
        @media screen and (max-width:500px) {
        
            .doc_text h2{
                font-size: 22px !important;
                font-weight: 600;
            }
        
            .doc_card_div{
                display: flex;
                align-items: center;
                justify-content: center;
        
                flex-direction: row !important;
                /* margin-left: 0px;
                margin-right: 0px; */
                /* background: #ff5823; */
            }
        
        }
        
        
        
        `}
      </style>
    </>
  );
};

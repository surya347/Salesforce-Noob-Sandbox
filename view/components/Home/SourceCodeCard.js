import  { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { servers } from '../../config/index';
import FlipCard from "../FlipCard";
import MoonLoader from "react-spinners/MoonLoader";



const SourceCodeCard = () => {

  const history = useRouter();
  const [popularSourceCodeData, setPopularSourceCodeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffff");

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
          setPopularSourceCodeData(data);
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
    
    <div className='container-fluid source_home_div'>
        <h2>Source Code</h2>
        { loading ? 
      <div className="bounceloader">
         <MoonLoader color={color} loading={loading}  size={100} />
        </div>
        :
      <div className="row ">
          <div className="col-12">
              <div className="row doc_card_div_source">
                {/* <DocumentationCard codeData={popularSourceCodeData.filter(function(item) { return  item.isPopular === "Yes" })}/> */}
                <FlipCard codeData={popularSourceCodeData.filter(function(item) { return  item.docOrCode === "Code" })} />
              </div>
          </div> 
        </div>
      }
    </div>
    <style jsx>
        {`
        
        .source_home_div h2{
            text-align: center;
            color:black;
        }

        .source_home_div{
          background: #f6f6f6;
            padding-top: 4rem;
            padding-bottom: 3.25rem;
            /* margin-bottom: 3rem; */
        }

        .bounceloader{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .source_home_div h2{
          font-weight: 600;
          color: #153369;
        }

        .doc_card_div_source{
            display: flex;
            align-items: center;
            justify-content: center;
            
        }

        @media (max-width: 768px){
            
        }
        `}
    </style>
    </> 
  )
}

export default SourceCodeCard;

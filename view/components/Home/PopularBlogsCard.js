import  { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { servers } from '../../config/index';
import MoonLoader from "react-spinners/MoonLoader";
import BlogsFlipCard from "../BlogsFlipCard";



const PopularBlogsCard = () => {

  const history = useRouter();
  const [popularSourceCodeData, setPopularSourceCodeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffff");

    //fetching details of user from DB and showing on profile Dashboard
    const callCodePage = async () => {
      try {
        const res = await fetch(`https://salesforcenoob.onrender.com/allblogs_10`, {
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
        <h2>Blogs</h2>
       

        { loading ? 
      <div className="bounceloader">
         <MoonLoader color={color} loading={loading}  size={100} />
        </div>
        :
      <div className="row ">
          <div className="col-12">
              <div className="row doc_card_div_source">
                {/* <DocumentationCard codeData={popularSourceCodeData.filter(function(item) { return  item.isPopular === "Yes" })}/> */}
                <BlogsFlipCard blogsData={popularSourceCodeData.filter(function(item) { return  item.isPopular === "Yes" })} />
              </div>
          </div> 
          <div className="card_bt_div">
          <Link href="/blogs">
          <button className="card_btn" >View All</button>
          </Link>
          </div>
        </div>
         
      }
    </div> 
    <style jsx>
        {`

        .card_bt_div{
          display: flex;
          justify-content: center;
        }

.card_btn{
  background: #16325c;
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
        
        .source_home_div h2{
            text-align: center;
        }

        .source_home_div{
            background: #153369;
            padding-top: 3rem;
            padding-bottom: 3rem;
            /* margin-bottom: 3rem; */
        }

        .bounceloader{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .source_home_div h2{
            color: white;

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

export default PopularBlogsCard;

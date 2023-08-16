import  { useEffect, useState } from 'react';
import RelatedBlogCard from './RelatedBlogCards';
import { useRouter } from "next/router";
import Link from "next/link";
import { servers } from '../config/index'; 



const RelatedBlogs = (props) => {

  const history = useRouter();
  const [userData, setUserData] = useState([]);

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
        setUserData(data);

    } catch (error) {

    }
  };


  useEffect(() => {
    callCodePage();
    window.scrollTo(0, 0);
  }, []);

  let categories = props.relatedCategory[0];
  let currentId = props.relatedCategory[1];


  return (
    <>

    {/* main code section */}
    <div className="menu-items container-fluid mt-1">
          <div className="row"> 
            <div className="col-12 ">
              <div className="row code_card_div_source">
                <RelatedBlogCard relatedData={userData.filter(function(item) { return item.category === categories && item._id !== currentId })}/>
              </div>
            </div>
          </div> 
        </div>
        <style jsx>
            {`
            
            .code_card_div_source{
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction:row;
            }
            `}
        </style>
    </>
  )
}

export default RelatedBlogs
import Link from "next/link";
import { FaYoutube,FaInstagram,FaLinkedinIn } from "react-icons/fa";


const BlogsFlipCard = (props) => {

  let popularCode = props.blogsData;

  return (
    <>
    { popularCode ? popularCode.map((codeSchemas) => (  

         <div className="column source_code_col col-10 col-md-4" key={codeSchemas._id}>
           <Link href={`/blogs/_${codeSchemas.headerApi}`} className="sorce_nav">
          <div className="source_code_card">
            <div className="content">
              <div className="front"> 
                <img className="profile" width="100%" src={codeSchemas.imageLink} alt="Neymar"/>
              </div>
              <div className="back from-left">
                <h4>{codeSchemas.header}</h4>
                <h3>Category : {codeSchemas.category}</h3> 
                <h3>Author : {codeSchemas.writtenByName}</h3> 
                <p className="des">
                {codeSchemas.description}
                </p>
                <ul className="social-icon">
                  <li><a href="https://www.youtube.com/channel/UCvgE8SgvQTpBK5BzdOyAAQw"><i className='youtube_class'><FaYoutube/></i></a></li>
                  <li><a href="https://www.linkedin.com/in/salesforce-noob-315990221/"><i className='youtube_class'><FaLinkedinIn/></i></a></li>
                  <li><a href="https://www.instagram.com/sfnoob10/"><i className='youtube_class'><FaInstagram/></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </Link>
        </div>
)): null} 
      <style jsx>
        {`
        
        
   .sourc_card_container .container{
    width:900px;
    margin:0px auto;
  }

  /* Float three columns side by side */
  .source_code_col .column {
    float: left;
    width: 33.33%;
    padding: 0 10px;
   
  }
  
  .source_code_col a{
      color: black ;
  }
  
  .source_code_col{
      padding-bottom:  2rem;
      padding-top: 2rem;
  }
  /* Remove extra left and right margins, due to padding */
  .source_card .row {margin: 0 -5px;}
  
  /* Clear floats after the columns */
  .source_card .row:after {
    content: "";
    display: table;
    clear: both;
  }
  
  /* Responsive columns */
  @media screen and (max-width: 700px) {
    
   .sourc_card_container .container{
    width: 100%;
  }
    
  .source_code_col .column {
      width: 100%;
      display: block;
      margin-bottom: 20px;
    }
  }
  
  /* Style the counter cards */
  .source_code_card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 5px;
    text-align: center;
    background-color: #fff;
    border-radius:10px;
    cursor:pointer;
  }
  .source_code_card .profile{
     border-radius:10px;
     transition: 0.4s;
  }

  .front h2{
    color: black !important;
  }

  .back h2{
      color: black !important;
  }

  .youtube_class{
      padding-left: 4px !important;
      padding-right: 4px !important;

  }

  .source_code_card:hover .profile{
    transform:scale(1.4);
    border-top-right-radius:50px;
    border-top-left-radius:50px;
  }
  
  .source_code_card .content{
    width:100%;
    height:100%;
    position:relative;
    overflow:hidden;
  }
  .source_code_card .content .back{
    position:absolute;
    width:100%;
    height:100%;
    background-color: #f1f1f1e6;
    transition:1s;
    
    z-index:1;
    padding:10px;
  }
  
  .from-left{
    top:0;
    left:-100%;
  }
  .source_code_card:hover .content .from-left {
     left:0%;
  }
  
  .from-bottom{
    top:100%;
    left:0;
  }
  .source_code_card:hover .content .from-bottom {
     top:0%;
  }
  
  .from-right{
    top:0%;
    right:-100%;
  }
  .source_code_card:hover .content .from-right {
     right:0;
  }
  
  .source_code_card .content .back h3{
    font-size:15px;
    letter-spacing:2px;
  }
  .source_code_card .content .back .tem-img{
    border-radius:100%;
  }
  
  .source_code_card .content .back .des{
    font-size:15px;
    padding:20px 0px;
  }
  .source_code_card .content .back .social-icon{
    list-style:none;
    margin:0px;
    padding:0px;
  }
  .source_code_card .content .back .social-icon li{
    display:inline-block;
  }
  
  .source_code_card .content .back .social-icon li a{
    display:block;
    background:#333;
    color:#fff;
    width:40px;
    height:40px;
    text-align:center;
    line-height:40px;
    border-radius:100%;
  }
  
  
        `}
      </style>
    </>
  )
}

export default BlogsFlipCard;
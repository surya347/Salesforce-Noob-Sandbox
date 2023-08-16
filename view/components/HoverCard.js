import Link from "next/link";
import Image from "next/image";
import hovercardStyle from '../styles/HoverCard.module.css'


const HoverCard = (props) => {

  let popularCode = props.codeData;

  return (
    <>
     { popularCode ? popularCode.map((codeSchemas) => (
          <div className="col-12 col-md-4 col-lg-4 " key={codeSchemas.id}>  
          <div className={hovercardStyle.solu_titles}>
            <Link href={"/codedetails/_" + codeSchemas.topicApi}>
                <div className={hovercardStyle.solution_card} >
                    <div className={hovercardStyle.hover_color_bubble}></div>
                    {/* Top so_top_icon */}

                    <div className="row ">
                      <div className={hovercardStyle.doc_row_div}>
                        <div className="col-6">
                          { codeSchemas.category === 'Lwc' ? <img src="/Lwc_logo.png" className={hovercardStyle.doc_code_icon}></img> : 
                            codeSchemas.category === 'Apex' ? <img src="/Apex_logo.png" className={hovercardStyle.doc_code_icon}/> :
                            codeSchemas.category === 'Integration' ? <img src="Integration_logo.png" className={hovercardStyle.doc_code_icon}/>:
                            codeSchemas.category === 'Admin' ? <img src="/Admin_logo.png" className={hovercardStyle.doc_code_icon}/>:
                            <img src="/Sf_noob_logo.png" className={hovercardStyle.doc_code_icon}/>}
                          
                        </div>
                        <div className="col-6">
                          <div className={hovercardStyle.solu_description}>
                          <button type="button" className={hovercardStyle.read_more_btn}>Read More</button>
                          </div>
                        </div>
                    </div></div>

                    <div className={hovercardStyle.solu_title}>
                    <Link href={"/codedetails/_" + codeSchemas.topicApi}>
                       <h5>{codeSchemas.topic}</h5>
                    </Link>
                    </div>
                    <div className={hovercardStyle.solu_description}>
                    <p >
                    {codeSchemas.description}
                    </p>
                    </div>
                </div>
                </Link>
                </div>  
                </div>
          
       )): null} 
      
    </>
  );
};

export default HoverCard;

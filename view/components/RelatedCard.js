import Link from "next/link";
import relatedCardStyle from '../styles/RelatedCard.module.css'

const RelatedCard = (props) => {

    let relatedCode = props.relatedData;

  return ( 
    <>
    <div className="column source_code_col col-12" >
      <div className={relatedCardStyle.source_code_col}>
     <div class={relatedCardStyle.realated_card_wrapper} >
     <div class={relatedCardStyle.related_post} id={relatedCardStyle.related_post}>
         <h4><i class="fa fa-bookmark"></i> Related Post</h4>
         { relatedCode ? relatedCode.map((codeSchemas) => (
         <ul class={relatedCardStyle.related_post_style_3} key={codeSchemas._id}>
             <a href={"/codedetails/_" + codeSchemas.topicApi}>
             <li class={relatedCardStyle.related_post_item} tabindex="0">
                 <a class={relatedCardStyle.related_post_item_title} >
                     <img alt="thumbnail" class={relatedCardStyle.related_post_item_thumbnail} src={codeSchemas.imageLink} width="300" height="300" title={codeSchemas.topic}/>
                  </a>
                  <div class={relatedCardStyle.related_post_item_tooltip}>
                      <h6 class={relatedCardStyle.related_post_item_title} title={codeSchemas.topic} >{codeSchemas.topic}</h6>
                      <p>Category : {codeSchemas.category}</p>
                  </div>
             </li>
             </a>
          </ul>
     )): null} 
     </div>
     </div>
     </div>
     </div>
     
     
    </>
  );
};

export default RelatedCard;

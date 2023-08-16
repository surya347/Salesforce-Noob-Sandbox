import relatedCardStyle from '../styles/RelatedCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const SliderCard = (props) => {
    let questionsCode = props.questionData;

    const allCategoryQuestions = [
      ...new Set(questionsCode.map((currentItems) => currentItems.category))
    ];

    if(allCategoryQuestions)

  return (
    <>
   <div className="column source_code_col col-12" >
      <div className={relatedCardStyle.source_code_col}>
     <div class={relatedCardStyle.realated_card_wrapper} >
     <div class={relatedCardStyle.related_post} id={relatedCardStyle.related_post}>
         <h4><i class="fa fa-bookmark"></i> Interview Questions</h4>
         { allCategoryQuestions ? allCategoryQuestions.map((codeSchemas) => (
         <ul class={relatedCardStyle.related_post_style_3}>
             <Link href={"/interviewquestions/_" + codeSchemas+"-interview-questions"}>
             <li class={relatedCardStyle.related_post_item} tabindex="0">
                 <a class={relatedCardStyle.related_post_item_title} >
                     <img alt="thumbnail" class={relatedCardStyle.related_post_item_thumbnail_question} src={`/${codeSchemas}_logo.png`}  title={codeSchemas}/>
                  </a>
                  <div class={relatedCardStyle.related_post_item_tooltip_question}>
                      <h5 class={relatedCardStyle.related_post_item_title} title={codeSchemas} >{codeSchemas} Interview Questions</h5>
                      <p>Category : {codeSchemas}</p>
                  </div>
             </li>
             </Link>
          </ul>
     )): null} 
     </div>
     </div>
     </div>
     </div>

    </>
  )
}

export default SliderCard
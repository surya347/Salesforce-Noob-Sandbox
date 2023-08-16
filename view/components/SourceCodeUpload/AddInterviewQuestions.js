import { useState } from "react";
import { useRouter } from "next/router";
import { servers } from '../../config/index';

const AddInterviewQuestions = () => {

    const history = useRouter();

  const [questions, setQuestions] = useState({
    filterApi:"",
    category:"", 
    question:"",
    answer:"",
    imagelink:"",
  }); 

  //declaring variable to get the name & value of the input field in recommendation form
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    //using spread operator to get all user date filled in form
    setQuestions({ ...questions, [name]: value });
  };

  const PostDataToBackend = async (e) => {
    e.preventDefault();
    const {
        filterApi,
        category, 
        question,
        answer,
        imagelink,
    } = questions;

    const res = await fetch(`${servers}/addquestions_for_noobade`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': '*',
        },
        body: JSON.stringify({
            filterApi,
            category, 
            question,
            answer,
            imagelink,
        }),
      });

      const data = await res.json();

      if (res.status === 500 || res.status === 404 || !res) {
      } else if (res.status === 400) {
      } else if (res.status === 422) {
      } else {
        history.push("/interviewquestions"); //after successful recommendation add user will be redirected to code details page
      }
    };
  


  return (
    <>
        <div className="container mb-5">
          <div className="contact-wrapper">
            {/* <!-- Left contact page -->  */}

            <form id="contact-form" className="form-horizontal" method="POST">

            <h1 >Add Questions</h1>

            <div className="form-group ">
                    <div className="col-sm-12">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Category : Lwc/Apex/Flows/Salesforce"
                        name="category"
                        value={questions.category}
                        onChange={handleInputs}
                        required
                    /> 
                    </div>
              </div>

              <div className="form-group ">
                    <div className="col-sm-12">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="filterApi : Append '-interview-questions' after 'category' (For eg: Category-interview-questions)"
                        name="filterApi"
                        value={questions.filterApi}
                        onChange={handleInputs}
                        required
                    /> 
                    </div>
              </div>

              

                <br />
                <hr />

              {/* 1st code structure starts here */}
              <div className="form-group ">
                    <div className="col-sm-12">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Questions"
                        name="question"
                        value={questions.question}
                        onChange={handleInputs}
                        required
                    /> 
                    </div>
              </div>

              <div className="form-group ">
                    <div className="col-sm-12">
                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Answers"
                      name="answer"
                      value={questions.answer}
                      onChange={handleInputs}
                    ></textarea>
               
                    </div>
              </div>

              <div className="form-group ">
                    <div className="col-sm-12">
                    <input
                        type="text"
                        className="form-control" 
                        id="name"
                        placeholder="Image link (Optional)"
                        name="imagelink"
                        value={questions.imagelink}
                        onChange={handleInputs}
                    /> 
                    </div>
              </div>


              
                <br />
                <hr />

                {/* submit button */}
                <button
                    className="btn btn-primary send-button mb-5"
                    id="submit"
                    type="submit"
                    value="SEND"
                    onClick={PostDataToBackend}
                >
                    <div className="alt-send-button">
                    <i className="fa fa-paper-plane"></i>
                    <span className="send-text">Upload</span>
                    </div>
                </button>

            </form>
            </div>
      </div>
      <style jsx>
        {`

        .form-group{
          padding-top:10px;
          padding-bottom:10px;
        }
     
        
        `}
      </style>

    </>
  )
}

export default AddInterviewQuestions;
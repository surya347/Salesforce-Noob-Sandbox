import { useState } from "react";
import { useRouter } from "next/router";
import { servers } from '../../config/index';

const AddCode = () => {
  const history = useRouter();

  const [code, setCode] = useState({
    topic: "",
    topicApi:"",
    imageLink:"", 
    youtube:"",
    category: "",
    isPopular:"",
    docOrCode:"",
    description:"",
    summary:"",
    code1: "",  
    message1: "",
    code2: "",   
    message2: "",
    code3: "",
    message3: "",
    code4: "",
    message4: "",
    code5: "",
    message5: "",
    code6: "",
    message6: "",
    code7: "",
    message7: "",
    code8: "",
    message8: "",
  }); 

  //declaring variable to get the name & value of the input field in signup form
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    //using spread operator to get all user date filled in form
    setCode({ ...code, [name]: value });
  };

  const PostDataToBackend = async (e) => {
    e.preventDefault();
    const {
      topic,
      topicApi,
      imageLink,
      youtube,
      category,
      isPopular,
      docOrCode,
      description,
      summary,
      code1,
      message1,
      code2,
      message2,
      code3,
      message3,
      code4,
      message4,
      code5,
      message5,
      code6,
      message6,
      code7,
      message7,
      code8 ,
      message8,
    } = code;

    const res = await fetch(`${servers}/addcode_for_noobade`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': '*',
      },
      body: JSON.stringify({
        topic,
        topicApi,
        imageLink,
        youtube,
        category,
        isPopular,
        docOrCode,
        description,
        summary,
        code1,
        message1,
        code2,
        message2,
        code3,
        message3,
        code4,
        message4,
        code5,
        message5,
        code6,
        message6,
        code7,
        message7,
        code8 ,
        message8,
      }),
    });

    const data = await res.json();

    if (res.status === 500 || res.status === 404 || !res) {

    } else if (res.status === 400) {

    } else if (res.status === 422) {

    } else {
      history.push("/code"); //after successful registeration user will be redirected to login page
    }
  };

  return (
    <div>
     
      <div className="container mb-5">
          <div className="contact-wrapper">
            {/* <!-- Left contact page -->  */}

            <form id="contact-form" className="form-horizontal" method="POST">
               <h1 >Add Source Code</h1>
               <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="TOPIC"
                    name="topic"
                    value={code.topic}
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
                    placeholder="TOPIC-API"
                    name="topicApi"
                    value={code.topicApi}
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
                    placeholder="IMAGE LINK"
                    name="imageLink"
                    value={code.imageLink}
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
                    placeholder="YOUTUBE LINK"
                    name="youtube"
                    value={code.youtube}
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
                    placeholder=" - Lwc/Apex/Integration/Admin"
                    name="category"
                    value={code.category}
                    onChange={handleInputs}
                    required
                  />
                </div>
                </div>
                
                <div className="form-group ">
                 <div className="col-sm-12">
                 <input type="text"
                         id="email" 
                         className="form-control"
                         placeholder="isPopular : Yes/No"
                         name="isPopular" 
                         value={code.isPopular} 
                         onChange={handleInputs}
                  />                      
                </div>
                </div>

                <div className="form-group ">
                 <div className="col-sm-12">
                 <input type="text"
                         id="email" 
                         className="form-control"
                         placeholder="Doc/Code"
                         name="docOrCode" 
                         value={code.docOrCode} 
                         onChange={handleInputs}
                  />                      
                </div>
                </div>

                {/* Description file */}
                <textarea
                    className="form-control"
                    rows="6"
                    placeholder="Decsription for card"
                    name="description"
                    value={code.description}
                    onChange={handleInputs}
                  ></textarea>

                  <br />
                  <hr />

                 {/* Summmary file */}
                <textarea
                    className="form-control"
                    rows="10"
                    placeholder="Business Logic Summary"
                    name="summary"
                    value={code.summary}
                    onChange={handleInputs}
                  ></textarea>

                  <br />
                  <hr />

              {/* 1st code structure starts here */}
          

                <div className="row">
                  <div className="col-md-3">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="HTML file"
                          name="code1"
                          value={code.code1}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-md-3">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="JavaScript file"
                          name="code2"
                          value={code.code2}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div class="col-md-3">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="XML file"
                          name="code3"
                          value={code.code3}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-md-3">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="CSS file"
                          name="code4"
                          value={code.code4}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>
              </div>
              
            {/* HTML file */}
               <textarea
                className="form-control"
                rows="10"
                placeholder="HTML file"
                name="message1"
                value={code.message1}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />


              {/* JS file */}
             <textarea
                className="form-control"
                rows="10"
                placeholder="JS file"
                name="message2"
                value={code.message2}
                onChange={handleInputs}
              ></textarea>

              <br />
              <hr />


              {/* XML file */}
              
              <textarea
                className="form-control"
                rows="10"
                placeholder="XML file"
                name="message3"
                value={code.message3}
                onChange={handleInputs}
              ></textarea>

              <br />
              <hr />


              {/* CSS file */}

              <textarea
                className="form-control"
                rows="10"
                placeholder="CSS file"
                name="message4"
                value={code.message4}
                onChange={handleInputs}
              ></textarea>

              <br />
              <hr />

              {/* 2nd code structure starts here */}

              <div className="row">
                  <div className="col-md-3">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="HTML file 2"
                          name="code5"
                          value={code.code5}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-md-3">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="JavaScript file 2"
                          name="code6"
                          value={code.code6}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-md-3">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="XML file 2"
                          name="code7"
                          value={code.code7}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-md-3">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="CSS file 2"
                          name="code8"
                          value={code.code8}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>
              </div>

              {/* HTML file */}
              <textarea
                className="form-control"
                rows="10"
                placeholder="HTML file 2"
                name="message5"
                value={code.message5}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />


              {/* JS file */}
             <textarea
                className="form-control"
                rows="10"
                placeholder="JS file 2"
                name="message6"
                value={code.message6}
                onChange={handleInputs}
              ></textarea>

              <br />
              <hr />


              {/* XML file */}
              
              <textarea
                className="form-control"
                rows="10"
                placeholder="XML file 2"
                name="message7"
                value={code.message7}
                onChange={handleInputs}
              ></textarea>

              <br />
              <hr />


              {/* CSS file */}

              <textarea
                className="form-control"
                rows="10"
                placeholder="CSS file 2"
                name="message8"
                value={code.message8}
                onChange={handleInputs}
              ></textarea>



              <br />
              <hr />

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

            {/* <!-- Left contact page -->  */}
          </div>
      </div>
      <style jsx>
        {`

        .form-group{
          padding-top:10px;
          padding-bottom:10px;
        }
        .form-control{
          padding-top:15px;
        }
        .contact-wrapper{
          display: flex;
          justify-content: flex-start !important;
          margin-bottom: 30px !important;  
      }
        
        `}
      </style>
    </div>
 
  );
};
 
export default AddCode;

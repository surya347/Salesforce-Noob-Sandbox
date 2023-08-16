import { useState } from "react";
import { useRouter } from "next/router";
import { servers } from '../../config/index';

const AddBlogs = () => {

  const history = useRouter();
    const [blogs, setBlogs] = useState({
        header:"", 
        headerApi:"",
        imageLink:"",
        writtenByName:"",
        writtenByDetails:"",
        writtenByImageLink:"",
        youtubeLink:"",
        category:"",
        isPopular:"",
        description:"",
        summary:"",

      step1:"",
      stepCode1:"",
      stepMessage1:"",
      stepImageLink1:"",

      step2:"",
      stepCode2:"",
      stepMessage2:"",
      stepImageLink2:"",

      step3:"",
      stepCode3:"",
      stepMessage3:"",
      stepImageLink3:"",

      step4:"",
      stepCode4:"",
      stepMessage4:"",
      stepImageLink4:"",

      step5:"",
      stepCode5:"",
      stepMessage5:"",
      stepImageLink5:"",

      step6:"",
      stepCode6:"",
      stepMessage6:"",
      stepImageLink6:"",

      step7:"",
      stepCode7:"",
      stepMessage7:"",
      stepImageLink7:"",

      step8:"",
      stepCode8:"",
      stepMessage8:"",
      stepImageLink8:"",

      step9:"",
      stepCode9:"",
      stepMessage9:"",
      stepImageLink9:"",

      step10:"",
      stepCode10:"",
      stepMessage10:"",
      stepImageLink10:"",

      step11:"",
      stepCode11:"",
      stepMessage11:"",
      stepImageLink11:"",

      step12:"",
      stepCode12:"",
      stepMessage12:"",
      stepImageLink12:"",

      step13:"",
      stepCode13:"",
      stepMessage13:"",
      stepImageLink13:"",

      step14:"",
      stepCode14:"",
      stepMessage14:"",
      stepImageLink14:"",

      step15:"",
      stepCode15:"",
      stepMessage15:"",
      stepImageLink15:"",

      step16:"",
      stepCode16:"",
      stepMessage16:"",
      stepImageLink16:"",

      step17:"",
      stepCode17:"",
      stepMessage17:"",
      stepImageLink17:"",

      step18:"",
      stepCode18:"",
      stepMessage18:"",
      stepImageLink18:"",

      step19:"",
      stepCode19:"",
      stepMessage19:"",
      stepImageLink19:"",

      step20:"",
      stepCode20:"",
      stepMessage20:"",
      stepImageLink20:"",
    });

    //declaring variable to get the name & value of the input field in signup form
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    //using spread operator to get all user date filled in form
    setBlogs({ ...blogs, [name]: value });
  };

  const PostDataToBackend = async (e) => {
    e.preventDefault();
    const {
      header, 
        headerApi,
        imageLink,
        writtenByName,
        writtenByDetails,
        writtenByImageLink,
        youtubeLink,
        category,
        isPopular,
        description,
        summary,

      step1,
      stepCode1,
      stepMessage1,
      stepImageLink1,

      step2,
      stepCode2,
      stepMessage2,
      stepImageLink2,

      step3,
      stepCode3,
      stepMessage3,
      stepImageLink3,

      step4,
      stepCode4,
      stepMessage4,
      stepImageLink4,

      step5,
      stepCode5,
      stepMessage5,
      stepImageLink5,

      step6,
      stepCode6,
      stepMessage6,
      stepImageLink6,

      step7,
      stepCode7,
      stepMessage7,
      stepImageLink7,

      step8,
      stepCode8,
      stepMessage8,
      stepImageLink8,

      step9,
      stepCode9,
      stepMessage9,
      stepImageLink9,

      step10,
      stepCode10,
      stepMessage10,
      stepImageLink10,

      step11,
      stepCode11,
      stepMessage11,
      stepImageLink11,

      step12,
      stepCode12,
      stepMessage12,
      stepImageLink12,

      step13,
      stepCode13,
      stepMessage13,
      stepImageLink13,

      step14,
      stepCode14,
      stepMessage14,
      stepImageLink14,

      step15,
      stepCode15,
      stepMessage15,
      stepImageLink15,

      step16,
      stepCode16,
      stepMessage16,
      stepImageLink16,

      step17,
      stepCode17,
      stepMessage17,
      stepImageLink17,

      step18,
      stepCode18,
      stepMessage18,
      stepImageLink18,

      step19,
      stepCode19,
      stepMessage19,
      stepImageLink19,

      step20,
      stepCode20,
      stepMessage20,
      stepImageLink20,
    } = blogs;

    const res = await fetch(`${servers}/addblogs_for_noobade`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': '*',
      },
      body: JSON.stringify({
        header, 
        headerApi,
        imageLink,
        writtenByName,
        writtenByDetails,
        writtenByImageLink,
        youtubeLink,
        category,
        isPopular,
        description,
        summary,

      step1,
      stepCode1,
      stepMessage1,
      stepImageLink1,

      step2,
      stepCode2,
      stepMessage2,
      stepImageLink2,

      step3,
      stepCode3,
      stepMessage3,
      stepImageLink3,

      step4,
      stepCode4,
      stepMessage4,
      stepImageLink4,

      step5,
      stepCode5,
      stepMessage5,
      stepImageLink5,

      step6,
      stepCode6,
      stepMessage6,
      stepImageLink6,

      step7,
      stepCode7,
      stepMessage7,
      stepImageLink7,

      step8,
      stepCode8,
      stepMessage8,
      stepImageLink8,

      step9,
      stepCode9,
      stepMessage9,
      stepImageLink9,

      step10,
      stepCode10,
      stepMessage10,
      stepImageLink10,

      step11,
      stepCode11,
      stepMessage11,
      stepImageLink11,

      step12,
      stepCode12,
      stepMessage12,
      stepImageLink12,

      step13,
      stepCode13,
      stepMessage13,
      stepImageLink13,

      step14,
      stepCode14,
      stepMessage14,
      stepImageLink14,

      step15,
      stepCode15,
      stepMessage15,
      stepImageLink15,

      step16,
      stepCode16,
      stepMessage16,
      stepImageLink16,

      step17,
      stepCode17,
      stepMessage17,
      stepImageLink17,

      step18,
      stepCode18,
      stepMessage18,
      stepImageLink18,

      step19,
      stepCode19,
      stepMessage19,
      stepImageLink19,

      step20,
      stepCode20,
      stepMessage20,
      stepImageLink20,
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
               <h1 >Add Blogs</h1>
               <div className="form-group">
                <div className="col-sm-12 ">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Header"
                    name="header"
                    value={blogs.header}
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
                    placeholder="Header-API"
                    name="headerApi"
                    value={blogs.headerApi}
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
                    placeholder="BLOG IMAGE LINK"
                    name="imageLink"
                    value={blogs.imageLink}
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
                    name="youtubeLink"
                    value={blogs.youtubeLink}
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
                    placeholder="Written By"
                    name="writtenByName"
                    value={blogs.writtenByName}
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
                    placeholder="Written By Details"
                    name="writtenByDetails"
                    value={blogs.writtenByDetails}
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
                    placeholder="Keywords for SEO"
                    name="writtenByImageLink"
                    value={blogs.writtenByImageLink}
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
                    placeholder="Category - Lwc/Apex/Integration/Admin"
                    name="category"
                    value={blogs.category}
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
                         value={blogs.isPopular} 
                         onChange={handleInputs}
                  />                      
                </div>
                </div>


                {/* Description file */}
                <textarea
                    className="form-control"
                    rows="6"
                    placeholder="Description For Blog"
                    name="description"
                    value={blogs.description}
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
                    value={blogs.summary}
                    onChange={handleInputs}
                  ></textarea>

                  <br />
                  <hr />

              {/* 1st blogs structure starts here */}
          
          
                  <div className="col-12">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Step1 title"
                          name="step1"
                          value={blogs.step1}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepMessage1"
                          name="stepMessage1"
                          value={blogs.stepMessage1}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepImageLink1"
                          name="stepImageLink1"
                          value={blogs.stepImageLink1}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>


              <textarea
                className="form-control"
                rows="10"
                placeholder="stepCode1"
                name="stepCode1"
                value={blogs.stepCode1}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />

              {/* 2nd blogs structure starts here */}
                        
                        
                  <div className="col-12">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Step2 title"
                          name="step2"
                          value={blogs.step2}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepMessage2"
                          name="stepMessage2"
                          value={blogs.stepMessage2}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepImageLink2"
                          name="stepImageLink2"
                          value={blogs.stepImageLink2}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>


              <textarea
                className="form-control"
                rows="10"
                placeholder="stepCode2"
                name="stepCode2"
                value={blogs.stepCode2}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />

              {/* 3rd blogs structure starts here */}
                                      
                                      
                <div className="row">
                  <div className="col-12">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Step3 title"
                          name="step3"
                          value={blogs.step3}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepMessage3"
                          name="stepMessage3"
                          value={blogs.stepMessage3}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepImageLink3"
                          name="stepImageLink3"
                          value={blogs.stepImageLink3}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="stepCode3"
                name="stepCode3"
                value={blogs.stepCode3}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />

              {/* 4th blogs structure starts here */}
                                      
                                      
              <div className="row">
                  <div className="col-12">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Step4 title"
                          name="step4"
                          value={blogs.step4}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepMessage4"
                          name="stepMessage4"
                          value={blogs.stepMessage4}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepImageLink4"
                          name="stepImageLink4"
                          value={blogs.stepImageLink4}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="stepCode4"
                name="stepCode4"
                value={blogs.stepCode4}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />

              {/* 5th blogs structure starts here */}
                                      
                                      
              <div className="row">
                  <div className="col-12">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Step5 title"
                          name="step5"
                          value={blogs.step5}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepMessage5"
                          name="stepMessage5"
                          value={blogs.stepMessage5}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepImageLink5"
                          name="stepImageLink5"
                          value={blogs.stepImageLink5}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="stepCode5"
                name="stepCode5"
                value={blogs.stepCode5}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />

              {/* 6th blogs structure starts here */}
                                      
                                      
              <div className="row">
                  <div className="col-12">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Step6 title"
                          name="step6"
                          value={blogs.step6}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepMessage6"
                          name="stepMessage6"
                          value={blogs.stepMessage6}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepImageLink6"
                          name="stepImageLink6"
                          value={blogs.stepImageLink6}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="stepCode6"
                name="stepCode6"
                value={blogs.stepCode6}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />

              {/* 7th blogs structure starts here */}
                                      
                                      
              <div className="row">
                  <div className="col-12">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Step7 title"
                          name="step7"
                          value={blogs.step7}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepMessage7"
                          name="stepMessage7"
                          value={blogs.stepMessage7}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepImageLink7"
                          name="stepImageLink7"
                          value={blogs.stepImageLink7}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="stepCode7"
                name="stepCode7"
                value={blogs.stepCode7}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />


              {/* 8th blogs structure starts here */}
                                      
                                      
              <div className="row">
                  <div className="col-12">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Step8 title"
                          name="step8"
                          value={blogs.step8}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepMessage8"
                          name="stepMessage8"
                          value={blogs.stepMessage8}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepImageLink8"
                          name="stepImageLink8"
                          value={blogs.stepImageLink8}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="stepCode8"
                name="stepCode8"
                value={blogs.stepCode8}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />

              {/* 9th blogs structure starts here */}
                                      
                                      
              <div className="row">
                  <div className="col-12">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Step9 title"
                          name="step9"
                          value={blogs.step9}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepMessage9"
                          name="stepMessage9"
                          value={blogs.stepMessage9}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepImageLink9"
                          name="stepImageLink9"
                          value={blogs.stepImageLink9}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="stepCode9"
                name="stepCode9"
                value={blogs.stepCode9}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />

              {/* 10th blogs structure starts here */}
                                      
                                      
              <div className="row">
                  <div className="col-12">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Step10 title"
                          name="step10"
                          value={blogs.step10}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepMessage10"
                          name="stepMessage10"
                          value={blogs.stepMessage10}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepImageLink10"
                          name="stepImageLink10"
                          value={blogs.stepImageLink10}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="stepCode10"
                name="stepCode10"
                value={blogs.stepCode10}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />

              {/* 11th blogs structure starts here */}
                                      
                                      
              <div className="row">
                  <div className="col-12">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Step11 title"
                          name="step11"
                          value={blogs.step11}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepMessage11"
                          name="stepMessage11"
                          value={blogs.stepMessage11}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepImageLink11"
                          name="stepImageLink11"
                          value={blogs.stepImageLink11}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="stepCode11"
                name="stepCode11"
                value={blogs.stepCode11}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />


              {/* 12th blogs structure starts here */}
                                      
                                      
              <div className="row">
                  <div className="col-12">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Step12 title"
                          name="step12"
                          value={blogs.step12}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepMessage12"
                          name="stepMessage12"
                          value={blogs.stepMessage12}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepImageLink12"
                          name="stepImageLink12"
                          value={blogs.stepImageLink12}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="stepCode12"
                name="stepCode12"
                value={blogs.stepCode12}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />

              {/* 13th blogs structure starts here */}
                                      
                                      
              <div className="row">
                  <div className="col-12">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Step13 title"
                          name="step13"
                          value={blogs.step13}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepMessage13"
                          name="stepMessage13"
                          value={blogs.stepMessage13}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepImageLink13"
                          name="stepImageLink13"
                          value={blogs.stepImageLink13}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="stepCode13"
                name="stepCode13"
                value={blogs.stepCode13}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />


              {/* 14th blogs structure starts here */}
                                      
                                      
              <div className="row">
                  <div className="col-12">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Step14 title"
                          name="step14"
                          value={blogs.step14}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepMessage14"
                          name="stepMessage14"
                          value={blogs.stepMessage14}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepImageLink14"
                          name="stepImageLink14"
                          value={blogs.stepImageLink14}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="stepCode14"
                name="stepCode14"
                value={blogs.stepCode14}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />

              {/* 15th blogs structure starts here */}
                                      
                                      
              <div className="row">
                  <div className="col-12">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Step15 title"
                          name="step15"
                          value={blogs.step15}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepMessage15"
                          name="stepMessage15"
                          value={blogs.stepMessage15}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepImageLink15"
                          name="stepImageLink15"
                          value={blogs.stepImageLink15}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="stepCode15"
                name="stepCode15"
                value={blogs.stepCode15}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />

              {/* 16th blogs structure starts here */}
                                      
                                      
              <div className="row">
                  <div className="col-12">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Step16 title"
                          name="step16"
                          value={blogs.step16}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepMessage16"
                          name="stepMessage16"
                          value={blogs.stepMessage16}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepImageLink16"
                          name="stepImageLink16"
                          value={blogs.stepImageLink16}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="stepCode16"
                name="stepCode16"
                value={blogs.stepCode16}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />


              {/* 17th blogs structure starts here */}
                                      
                                      
              <div className="row">
                  <div className="col-12">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Step17 title"
                          name="step17"
                          value={blogs.step17}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepMessage17"
                          name="stepMessage17"
                          value={blogs.stepMessage17}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepImageLink17"
                          name="stepImageLink17"
                          value={blogs.stepImageLink17}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="stepCode17"
                name="stepCode17"
                value={blogs.stepCode17}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />


              {/* 18th blogs structure starts here */}
                                      
                                      
              <div className="row">
                  <div className="col-12">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Step18 title"
                          name="step18"
                          value={blogs.step18}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepMessage18"
                          name="stepMessage18"
                          value={blogs.stepMessage18}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepImageLink18"
                          name="stepImageLink18"
                          value={blogs.stepImageLink18}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="stepCode18"
                name="stepCode18"
                value={blogs.stepCode18}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />


              {/* 20th blogs structure starts here */}
                                      
                                      
              <div className="row">
                  <div className="col-12">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Step19 title"
                          name="step19"
                          value={blogs.step19}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepMessage19"
                          name="stepMessage19"
                          value={blogs.stepMessage19}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepImageLink19"
                          name="stepImageLink19"
                          value={blogs.stepImageLink19}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="stepCode19"
                name="stepCode19"
                value={blogs.stepCode19}
                onChange={handleInputs}
              ></textarea>
              <br />
              <hr />


              {/* 20th blogs structure starts here */}
                                      
                                      
              <div className="row">
                  <div className="col-12">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Step20 title"
                          name="step20"
                          value={blogs.step20}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepMessage20"
                          name="stepMessage20"
                          value={blogs.stepMessage20}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-12">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="stepImageLink20"
                          name="stepImageLink20"
                          value={blogs.stepImageLink20}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="stepCode20"
                name="stepCode20"
                value={blogs.stepCode20}
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
        
        
        `}
      </style>
    </div>

  )
}

export default AddBlogs;
import { useState } from "react";
import { useRouter } from "next/router";
import { servers } from '../../config/index';

const AddRecommend = () => {

    const history = useRouter();

  const [recommedation, setRecommedation] = useState({
    heading:"",
     category:"",
     type:"",
     topic1 :"",
     link1:"",
     icon1:"",
     topic2:"",
     link2:"",
     icon2:"",
     topic3:"",
     link3:"",
     icon3:"",
     topic4:"",
     link4:"",
     icon4:"",
     topic5:"",
     link5:"",
     icon5:"",
     topic6:"",
     link6:"",
     icon6:"",
  }); 

  //declaring variable to get the name & value of the input field in recommendation form
  let name, value;
  const handleInputs = (e) => {

    name = e.target.name;
    value = e.target.value;

    //using spread operator to get all user date filled in form
    setRecommedation({ ...recommedation, [name]: value });
  };

  const PostDataToBackend = async (e) => {
    e.preventDefault();
    const {
        heading,
        category,
        type,
        topic1 ,
        link1,
        icon1,
        topic2,
        link2,
        icon2,
        topic3,
        link3,
        icon3,
        topic4,
        link4,
        icon4,
        topic5,
        link5,
        icon5,
        topic6,
        link6,
        icon6,
    } = recommedation;

    const res = await fetch(`${servers}/addrecommend_for_noobade`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': '*',
        },
        body: JSON.stringify({
            heading,
            category,
            type,
            topic1 ,
            link1,
            icon1,
            topic2,
            link2,
            icon2,
            topic3,
            link3,
            icon3,
            topic4,
            link4,
            icon4,
            topic5,
            link5,
            icon5,
            topic6,
            link6,
            icon6,
        }),
      });

      const data = await res.json();

      if (res.status === 500 || res.status === 404 || !res) {

      } else if (res.status === 400) {
      } else if (res.status === 422) {
      } else {
        history.push("/codes"); //after successful recommendation add user will be redirected to code details page
      }
    };
  


  return (
    <>
        <div className="container mb-5">
          <div className="contact-wrapper">
            {/* <!-- Left contact page -->  */}

            <form id="contact-form" className="form-horizontal" method="POST">

            <h1 >Add Recommendations</h1>
               <div className="form-group ">
                    <div className="col-sm-12">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Heading"
                        name="heading"
                        value={recommedation.heading}
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
                        placeholder="Category : Lwc/Apex/Flows/Salesforce"
                        name="category"
                        value={recommedation.category}
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
                        placeholder="Ranking"
                        name="type"
                        value={recommedation.type}
                        onChange={handleInputs}
                        required
                    /> 
                    </div>
              </div>

                <br />
                <hr />

              {/* 1st code structure starts here */}

              <div className="row">
                  <div className="col-md-4">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="topic1"
                          name="topic1"
                          value={recommedation.topic1}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-md-4">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="link1"
                          name="link1"
                          value={recommedation.link1}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-md-4">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="icon1 : Code/Youtube"
                          name="icon1"
                          value={recommedation.icon1}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                 </div>

              </div>

              <br />
                <hr />

              {/* 2nd code structure starts here */}

              <div className="row">
                  <div className="col-md-4">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="topic2"
                          name="topic2"
                          value={recommedation.topic2}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-md-4">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="link2"
                          name="link2"
                          value={recommedation.link2}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-md-4">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="icon2 : Code/Youtube"
                          name="icon2"
                          value={recommedation.icon2}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                 </div>

              </div>

              <br />
              <hr />

                {/* 3rd code structure starts here */}

              <div className="row">
                  <div className="col-md-4">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="topic3"
                          name="topic3"
                          value={recommedation.topic3}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-md-4">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="link3"
                          name="link3"
                          value={recommedation.link3}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-md-4">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="icon3 : Code/Youtube"
                          name="icon3"
                          value={recommedation.icon3}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                 </div>

              </div>

              <br />
              <hr />

              {/* 4th code structure starts here */}

              <div className="row">
                  <div className="col-md-4">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="topic4"
                          name="topic4"
                          value={recommedation.topic4}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-md-4">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="link4"
                          name="link4"
                          value={recommedation.link4}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-md-4">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="icon4 : Code/Youtube"
                          name="icon4"
                          value={recommedation.icon4}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                 </div>

              </div>

              <br />
              <hr />

              {/* 5th code structure starts here */}

              <div className="row">
                  <div className="col-md-4">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="topic5"
                          name="topic5"
                          value={recommedation.topic5}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-md-4">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="link5"
                          name="link5"
                          value={recommedation.link5}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-md-4">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="icon5 : Code/Youtube"
                          name="icon5"
                          value={recommedation.icon5}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                 </div>

              </div>

              <br />
              <hr />


              {/* 6th code structure starts here */}

              <div className="row">
                  <div className="col-md-4">
                  <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="topic6"
                          name="topic6"
                          value={recommedation.topic6}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-md-4">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="link6"
                          name="link6"
                          value={recommedation.link6}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
              </div>

              <div className="col-md-4">
              <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="icon6 : Code/Youtube"
                          name="icon6"
                          value={recommedation.icon6}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
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

export default AddRecommend;
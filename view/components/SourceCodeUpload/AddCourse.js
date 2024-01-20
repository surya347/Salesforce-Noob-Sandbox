import React, { useState } from "react";
import { useRouter } from "next/router";
import { servers } from "../../config/index";

const AddCourse = () => {
  const history = useRouter();

  const [course, setCourse] = useState({
    playlistHeader: "",
    playlistImageLink: "",
    playlistYoutubeLink: "",
    playlistHeader: "",
    header: "",
    headerApi: "",
    imageLink: "",
    videoLink: "",
    otherLink: "",
    writtenByName: "",
    writtenByDetails: "",
    seoKeywords: "",
    videoOrder: "",
  });

  //declaring variable to get the name & value of the input field in signup form
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    //using spread operator to get all user date filled in form
    setCourse({ ...course, [name]: value });
  };

  const PostDataToBackend = async (e) => {
    e.preventDefault();
    const {
      playlistHeader,
      playlistImageLink,
      playlistYoutubeLink,
      header,
      headerApi,
      imageLink,
      videoLink,
      otherLink,
      writtenByName,
      writtenByDetails,
      seoKeywords,
      videoOrder,
    } = course;

    const res = await fetch(`${servers}/addcourses_for_noobade`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "*",
      },
      body: JSON.stringify({
        playlistHeader,
        playlistImageLink,
        playlistYoutubeLink,
        header,
        headerApi,
        imageLink,
        videoLink,
        otherLink,
        writtenByName,
        writtenByDetails,
        seoKeywords,
        videoOrder,
      }),
    });

    const data = await res.json();

    if (res.status === 500 || res.status === 404 || !res) {
    } else if (res.status === 400) {
    } else if (res.status === 422) {
    } else {
      history.push("/courses"); //after successful course addition user will be redirected to course page
    }
  };

  return (
        <>
         <div className="container mb-5">
          <div className="contact-wrapper">
            {/* <!-- Left contact page -->  */}

            <form id="contact-form" className="form-horizontal" method="POST">
               <h1 >Add course</h1>

               <div className="form-group">
                <div className="col-sm-12 ">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Playlist Header"
                    name="playlistHeader"
                    value={course.playlistHeader}
                    onChange={handleInputs}
                    required
                  /> 
                </div>
                </div>

                <div className="form-group">
                <div className="col-sm-12 ">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Playlist ImageLink"
                    name="playlistImageLink"
                    value={course.playlistImageLink}
                    onChange={handleInputs}
                    required
                  /> 
                </div>
                </div>

                <div className="form-group">
                <div className="col-sm-12 ">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Playlist Youtube Link"
                    name="playlistYoutubeLink"
                    value={course.playlistYoutubeLink}
                    onChange={handleInputs}
                    required
                  /> 
                </div>
                </div>

               <div className="form-group">
                <div className="col-sm-12 ">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Header"
                    name="header"
                    value={course.header}
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
                    value={course.headerApi}
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
                    placeholder="COURSE IMAGE LINK"
                    name="imageLink"
                    value={course.imageLink}
                    onChange={handleInputs}
                  /> 
                </div>
              </div>

              <div className="form-group ">
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="COURSE VIDEO LINK"
                    name="videoLink"
                    value={course.videoLink}
                    onChange={handleInputs}
                  /> 
                </div>
              </div>

              <div className="form-group ">
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="COURSE OTHER LINK"
                    name="otherLink"
                    value={course.otherLink}
                    onChange={handleInputs}
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
                    value={course.writtenByName}
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
                    value={course.writtenByDetails}
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
                    name="seoKeywords"
                    value={course.seoKeywords}
                    onChange={handleInputs}
                  /> 
                </div>
              </div>

              <div className="form-group ">
              <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Video Order Number"
                    name="videoOrder"
                    value={course.videoOrder}
                    onChange={handleInputs}
                    required
                  />
                </div>
                </div>
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
        </>
    );
};

export default AddCourse;

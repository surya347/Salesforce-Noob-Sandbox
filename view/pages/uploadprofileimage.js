import  { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { servers } from "../config";


const uploadprofileimage = () => {
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        var profileIdForImage = localStorage.getItem("profileId");
      }
    
    const history = useRouter();
  
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
   
    const saveFile = (e) => {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    };
  
    const uploadFile = async (e) => {
      e.preventDefault();
      const formData = new FormData();

    //   const config = { headers: { 'Content-Type': 'multipart/form-data ; boundary=------WebKitFormBoundaryg7okV37G7Gfll2hf--' } };
  
      formData.append("images", file);
  
      formData.append("id", profileIdForImage);

      const options = {
        method: 'POST',
        body: formData,
      }
  
      try {
        const res = await fetch(`https://salesforcenoob.onrender.com/uploadmultiples`, options);
        if (res) {
            // const data = await res.json();
          history.push("/profile");
        }
        // window.location.reload();
      } catch (ex) {

      }
    };
  
    return (
      <>
        <div className="center">
          <div className="App">
            <form method="POST" encType="multipart/form-data">
              <input type="file" name="file" onChange={saveFile} />
              <button type="submit" onClick={uploadFile}>
                Upload
              </button>
            </form>
          </div>
        </div>
        <style jsx>
            {`
            .center {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                border: 5px solid #FFFF00;
                padding: 10px;
                }
            `}
        </style>
      </>
    );
}

export default uploadprofileimage
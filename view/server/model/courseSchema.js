const mongoose = require("mongoose");


const courseSchema = new mongoose.Schema({
    playlistHeader: {
        type: String,
        trim :true, 
      },
    playlistImageLink: {
        type: String,
        trim :true, 
      },
    playlistYoutubeLink:{
        type: String,
        trim :true, 
    },
    header: {
        type: String,
        trim :true, 
      },
      headerApi:{
        type: String,
        trim :true,
      },
      imageLink:{
        type: String,
        trim :true,
      },
      videoLink:{
        type: String,
        trim :true,
      },
      otherLink:{
        type: String,
        trim :true,
      },
      writtenByName:{
        type: String,
        trim :true,
      },
      writtenByDetails:{
        type: String,
        trim :true,
      },
      seoKeywords:{
        type: String,
        trim :true,
      },
      videoOrder:{
        type: String,
        trim :true,
      },
});


/**--Creating Collections/Models-- */
const CoursesCode = mongoose.model.courseSchema ||mongoose.model("COURSES", courseSchema);

module.exports = CoursesCode;
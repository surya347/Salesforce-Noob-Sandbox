const express = require('express')
const next = require('next')
const dotenv = require('dotenv');

const PORT = process.env.PORT || 3000 
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev})
const handle = app.getRequestHandler()
var cookieParser = require('cookie-parser');
const fileupload = require("express-fileupload");
const cors = require("cors");
const path = require('path');
 
//Database import
const RecommendationCode = require('./model/recommendationSchema');
require('./model/conn')

const recommendCodeAuthenticate = require("./middleware/recommendAuthenticate");
const authenticate = require('./middleware/authenticate');
const sourceCodeAuthenticate = require("./middleware/sourceCodeAuthenticate");
const codeDetailAuthenticate = require("./middleware/codeDetailsAuthenticate");
const adminAuthenticate = require("./middleware/adminAuthenticate");
const interviewQuestionsAuthenticate = require('./middleware/interviewQuestionsAuthenticate');
const interviewQuestionsAuthenticateFilter  = require('./middleware/interviewQuestionsAuthenticateFilter')
const blogsAuthenticate = require('./middleware/blogsAuthenticate')
const blogsAuthenticateFilter = require('./middleware/blogsAuthenticateFilter')




app.prepare().then(() => {
  const server = express()
 const showRoutes = require('./routes/index.js')

//  var bodyParser = require('body-parser');
// server.use(bodyParser.json({limit: '50mb'}));
// server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//  server.use(express.json({limit: '50mb'}));
// server.use(express.urlencoded({limit: '50mb', extended: true}));
 server.use(express.json());
 server.use(cookieParser());

server.use(cors());
server.use(fileupload());
server.use(express.static("files"));
server.use(express.static(path.join(__dirname,'public')));

//calling routing paths
 server.use('/',showRoutes);
  

 server.get('/codess_all_10',sourceCodeAuthenticate, (req, res) => {
  return res.json(req.codeUser);
})

server.get('/codedetailss',codeDetailAuthenticate, (req,res)=>{

  //geting recordID from react in param for query 
  let param = req.query.userId;
  return res.send(req.codeUser);  
  
}); 

//Recommends routing with middleware
server.get('/recommends',recommendCodeAuthenticate, (req,res)=>{
  return res.send(req.recommendData); 
});

server.get('/allblogs_10',blogsAuthenticate, (req,res)=>{
  return res.send(req.allBlogsData); 
});

server.get('/blogsdetails_10',blogsAuthenticateFilter, (req,res)=>{
  return res.send(req.allBlogsDataFilter); 
});

//Recommends routing with middleware
server.get('/interviewquestionss_10',interviewQuestionsAuthenticate, (req,res)=>{
  return res.send(req.interviewQuestionData); 
});

server.get('/interviewquestionss_Filter',interviewQuestionsAuthenticateFilter, (req,res)=>{
  return res.send(req.interviewQuestionDataFilter); 
});

server.get('/profiles',authenticate, (req,res)=>{
 return res.json(req.rootUsers); 
});

server.get('/allusers',adminAuthenticate, (req,res)=>{
 return res.send(req.allUsers); 
});

 //admin profile routing with middleware authentication
 server.get('/admin_for_surya_10',adminAuthenticate, (req,res)=>{
  res.send([req.adminUsers,req.rootUsersNumbers,req.rootCodeNumbers,req.rootRecommendationNumbers,req.rootQuestionNumbers]);
  }); 
  

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, err => {
    if(err) throw err;
    console.log(`> Ready on ${PORT}`)
  })
})
.catch(ex =>{
    console.error("error from server.js:"+ex.stack);
    process.exit(1);
})
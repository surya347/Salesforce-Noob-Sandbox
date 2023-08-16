const mongoose = require('mongoose');

const DB = process.env.DATABASE;
const customDB = require('../../next.config')

//mongoDb connection
mongoose.connect(DB || customDB.env.DATABASE,{ 
    useNewUrlParser:true,
    useUnifiedTopology:true,
  }).then(()=>{
    console.log("db connection successful");
  }).catch((err)=>{
    console.log(`db connection unsuccessful ${err}`);
  });
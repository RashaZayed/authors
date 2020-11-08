const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/authors" , {useNewUrlParser:true , useUnifiedTopology:true})
.then(()=> console.log("Established connection with the database"))
.catch((err)=> console.log("There is an error, No connection with the database", err))
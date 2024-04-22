const mongoose = require('mongoose');
const dotenv = require("dotenv");


url="mongodb://localhost:27017/DomConnect"
;


mongoose.connect(url , (err)=>{
if (err)
{
    console.log(err)
}
else
{
    console.log("connected Success")
}

} )

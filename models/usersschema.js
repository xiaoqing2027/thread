var mongoose    =   require("mongoose");
mongoose.connect('mongodb://ankit:ankit123@ds023105.mlab.com:23105/heroku_r9jpvqf0/threads');
var mongoSchema =   mongoose.Schema;
var userSchema  = {
    "usr_img" : String,
    "usr_email" : String,
    "usr_pwd" : String,
    "usr_fname" : String,
    "usr_lname" : String,
    "usr_dob" : String,
    "usr_created" : String,
    "usr_passion" : [],
    "usr_projs" : [
    {
    		
    		"proj_id" : String
    		
    }],
    "usr_school" : [{
            "sch_id" : String,
            "sch_type" : String,
            "sch_grad_date" : String
    
    }],
  
   
};
module.exports = mongoose.model('users',userSchema);;

//importing student model
const Student = require('../models/student');
const cookiePraser= require('cookie-parser')
const alert = require('alert')
const student_login_get = (req, res) => {
       res.render("student/login");
    };

const student_login_post = async (req, res) => {

        const Sturoll = req.body.roll; 
        const Studob = req.body.dob;  
        const individualStudent = await Student.findOne({roll : Sturoll,dob : Studob});    
        if(!individualStudent){
          alert("Login with correct roll number and DOB")
          res.render("student/login", {
            error : "Login with correct roll number"
          })
        }
        else{
          res.cookie("studentLogedIn","True")
          res.render("student/view",{ one : individualStudent});
          
        }   
    };

//exporting student controller functions
module.exports={
    student_login_get,
    student_login_post
}
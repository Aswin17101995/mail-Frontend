import React, { useState } from "react";
import axios from "axios"
import { Register } from "./api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Local from "./localstorage";
function Signup(){
    
    let email = Local('')
    let name = Local('')
    let dob = Local('')
    let password = Local('')



    // let [dob,setdob] = useState("")
    // let [name,setname] =useState("")
    // let [email,setemail] =useState("")
    // let [password,setpassword] = useState("")
    let subform ={}
    let navigate = useNavigate();
   return  <div class="sup_content">
   <div class="sup_form">
       <div class="sup_heading">
           SignUp Form
       </div>
       <div class="sup_input">
           <form onSubmit={async (e)=>{
               e.preventDefault();
                subform.name = name.val;
                subform.dob = dob.val;
                subform.email = email.val;
                subform.password = password.val;
                console.log(subform)
                var ans=await Register(subform)
                console.log(ans)
                toast("Registration success")
                document.getElementById("in1").value=""
                document.getElementById("in2").value=""
                document.getElementById("in3").value=""
                document.getElementById("in4").value=""
                navigate('/');
           }}>
               <input id="in1" size="25" type="text" name="name" placeholder="Name" onChange={(e)=>{
                   name.onChange(e)
               }}/>
               <input id="in2" size="25" type="text" name="emailid" placeholder="emailid" onChange={(e)=>{
                   email.onChange(e)
               }}/>
               <input id="in3" size="35" type="date" name="dob" onChange={(e)=>{
                   dob.onChange(e)
               }}/>
               <input id="in4" size="25" type="text" name="password" placeholder="password" onChange={(e)=>{
                  password.onChange(e)
               }}/>
               <input id="in5" size="25" type="submit" />
           </form>
       </div>
       <ToastContainer />
   </div>
</div>
}

export default Signup
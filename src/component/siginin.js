import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Register } from "./api"
import { useNavigate } from "react-router-dom"
import { Login } from "./api"
import UserContext from "./context"
import { useContext } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signin(){
    let [email,setemail] =useState("")
    let [password,setpassword] = useState("")
    let sigin_data = {}
    let sto = useContext(UserContext)
    //sto.ssu("")

    let navigate = useNavigate();
    return <>
         <div class="sin_content">
        <div class="empty_space"> .</div>
        <div class="sin_form">
            <div class="text">
               Signin
            </div>
            <div class="inputs">
                <form onSubmit={async(e)=>{
                    e.preventDefault();
                  
                    sigin_data.email = email;
                    sigin_data.password = password;
                    //console.log(sigin_data)
                  
                    var a = await Login(sigin_data);
                   
                   console.log(typeof(a.data))
                   if(a.data)
                   {    
                    sto.ssu(email)
                    console.log(sto)
                       navigate("/mailpage")
                   }
                   else{
                    toast("Failed")
                   }
                  
                    setpassword("")
                    setemail("")
                    document.getElementById("input_name1").value=""
                    document.getElementById("input_name2").value=""
                    //navigate("/mailpage")
                }}>
                    <input type="text" required id="input_name1" size="27"name="email" placeholder="email" onChange={(e)=>{
                        
                        setemail(e.target.value)
                    }}/>
                    <input type="text" required id="input_name2" size="27" name="password" placeholder="password"onChange={(e)=>{
                        
                        setpassword(e.target.value)
                    }}/>
                    <input type="submit" id="input_name3"/>
                </form>
                <div class="signup_Link">
                    <Link to="/signup">
                        Not a User Click here to sign up
                    </Link>
                </div>   
            </div>
        </div>
        <ToastContainer />
    </div>
    </>
}

export default Signin
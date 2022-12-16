import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
  
    const navigate = useNavigate();
  
    const login = async (e) => {
      e.preventDefault();
      let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      try {
          if(regEmail.test(userName) && password.length > 4 ){
              const body={username:userName,password:password}
              const response = await fetch("http://127.0.0.1:5000/auth", {
                  method: "POST",
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({username:userName,password:password})
            });
            const res=await response.json();
            localStorage.setItem("Token", res.access_token)
            navigate("/")

          }
          else {
              alert("Please enter a correct email and password ")
          }
      } catch (error) {
          alert(error)
      }
    };
  
    return (

      <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 mt-5">
          <div className="card">
            
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
      </div>
      
    );
}

export default Login

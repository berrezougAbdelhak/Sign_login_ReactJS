import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const createAccount = async (e) => {
    e.preventDefault();
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    try {
        if(regEmail.test(userName) && password.length > 4 ){
            const body={username:userName,password:password}
            const response = await fetch("http://127.0.0.1:5000/register", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({username:userName,password:password})
          });
          const res=await response.json();
          alert(res.message)
        }
        else {
            alert("Please enter a correct email and password ")
        }
    } catch (error) {
        alert(error)
    }
  };

  return (
    <form
      style={{ display: "flex", alignItem: "center", justifyContent: "center" }}
      onSubmit={createAccount}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>

        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          required
          style={{ marginBottom: "1rem", height: "20px" }}
          onChange={(e)=>{setUserName(e.target.value)}}
        />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          required
          style={{ marginBottom: "1rem", height: "20px" }}
          onChange={(e)=>{setPassword(e.target.value)}}
        />

        <div>
          <button type="submit" class="registerbtn">
            Register
          </button>
        </div>

        <div class="container signin">
          <p>
            Already have an account? <a href="#" onClick={()=>{navigate("/login")}}>Login </a>.
          </p>
        </div>
      </div>
    </form>
  );
};

export default Register;

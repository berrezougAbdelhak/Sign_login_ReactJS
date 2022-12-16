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
    // <ThemeProvider theme={theme}>
    //   <Container component="main" maxWidth="xs">
    //     <CssBaseline />
    //     <Box
    //       sx={{
    //         marginTop: 8,
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //       }}
    //     >
    //       <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    //         <LockOutlinedIcon />
    //       </Avatar>
    //       <Typography component="h1" variant="h5">
    //         Sign in
    //       </Typography>
    //       <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    //         <TextField
    //           margin="normal"
    //           required
    //           fullWidth
    //           id="email"
    //           label="Email Address"
    //           name="email"
    //           autoComplete="email"
    //           autoFocus
    //         />
    //         <TextField
    //           margin="normal"
    //           required
    //           fullWidth
    //           name="password"
    //           label="Password"
    //           type="password"
    //           id="password"
    //           autoComplete="current-password"
    //         />
    //         <FormControlLabel
    //           control={<Checkbox value="remember" color="primary" />}
    //           label="Remember me"
    //         />
    //         <Button
    //           type="submit"
    //           fullWidth
    //           variant="contained"
    //           sx={{ mt: 3, mb: 2 }}
    //         >
    //           Sign In
    //         </Button>
    //         <Grid container>
    //           <Grid item xs>
    //             <Link href="#" variant="body2">
    //               Forgot password?
    //             </Link>
    //           </Grid>
    //           <Grid item>
    //             <Link href="#" variant="body2">
    //               {"Don't have an account? Sign Up"}
    //             </Link>
    //           </Grid>
    //         </Grid>
    //       </Box>
    //     </Box>
    //     <Copyright sx={{ mt: 8, mb: 4 }} />
    //   </Container>
    // </ThemeProvider>
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 mt-5">
          <div className="card">
            <div className="container">
        <form
      onSubmit={createAccount}
    >
      <div className="mt-3 p-2">
        <h1 className="text-center">Register</h1>
        <p className="text-center">Please fill in this form to create an account.</p>

      <div className="form-group">
        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Email"
          name="email"
          id="email"
          required
          onChange={(e)=>{setUserName(e.target.value)}}
        />
        </div>
      <div className="form-group mt-3">

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          className="form-control"
          name="psw"
          id="psw"
          required
          onChange={(e)=>{setPassword(e.target.value)}}
        />
        </div>

        <div className="text-center mt-3">
          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </div>

        <div class="container signin text-center mt-4">
          <p>
            Already have an account? <a href="#" onClick={()=>{navigate("/login")}}>Login </a>
          </p>
        </div>
      </div>
    </form>
    </div>
    </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    
    </div>
  );
};

export default Register;

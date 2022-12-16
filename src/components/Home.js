import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [token, setToken] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("Token");
    setToken(token);
  });

  if (!token)
    return (
      <div>
        <h1>
          {" "}
          Your are not connected please{" "}
          <a
            onClick={() => {
              navigate("/register");
            }}
          >
            {" "}
            connect{" "}
          </a>
        </h1>
      </div>
    );
  return (
    <div>
      <h1>Home </h1>
    </div>
  );
};

export default Home;

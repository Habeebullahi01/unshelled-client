import { useContext, useEffect, useState } from "react";
// import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useContext(AuthContext);
  const [authState, setAuthState] = useState(false);
  //   console.log(auth);
  const handleUser = (e) => {
    setUsername(e.target.value);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     await setAuth({ username: username, password: password });
  //     console.log(auth);
  //     // return <Navigate to={"/order"} replace={true} />;
  //     return redirect("/order");
  //   };
  //   const getAuth = ({ username, password }) => {};
  useEffect(() => {
    console.log(auth);
    if (auth !== null && auth.username !== null && auth.password !== null) {
      //   console.log("I");
      //   redirect("/order");
      setAuthState(true);
    }
  }, [auth]);
  if (!authState) {
    return (
      <form
        //   method="post"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(username, password);
          setAuth({ username: username, password: password });

          // const authset = new Promise((resolve, reject) => {
          //   setAuth({ username: username, password: password });
          //   resolve();
          // });
          // authset.then(() => {
          //   console.log(auth);
          // });
          // return <Navigate to={"/order"} replace={true} />;
          // return redirect("/order");
        }}
      >
        <input
          type={"text"}
          required
          value={username}
          placeholder={"Username"}
          onChange={handleUser}
        />
        <input
          type={"password"}
          required
          value={password}
          placeholder={"Password"}
          onChange={handlePass}
        />
        <input type={"submit"} value={"Submit"} />
      </form>
    );
  } else {
    console.log(auth);
    return <Navigate to={"/"} />;
  }
};

export default Login;

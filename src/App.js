// import "./App.css";
import { useEffect, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Link } from "react-router-dom";

function App() {
  // const [auth, setAuth] = useState({ username: null, password: null });
  const { auth } = useContext(AuthContext);
  useEffect(() => {
    if (auth === null) {
      console.log("Auth is null");
    } else {
      console.log("Auth is not null");
    }
  }, [auth]);
  return (
    // <AuthContextProvider>
    <div className="App">
      <h1>Unshelled</h1>
      <Link to={"/order"}>Go to order page</Link>
    </div>
    // </AuthContextProvider>
  );
}

export default App;

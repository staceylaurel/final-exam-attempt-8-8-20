import * as React from "react";
import api, { setStorage } from "../utils/api-services";
import { Link, useHistory } from "react-router-dom";
import apiServices from "../utils/api-services";
import { isThrowStatement } from "typescript";

const Login: React.FC<LoginProps> = props => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const history = useHistory();

  const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const token = await apiServices("/auth/login/", "POST", { email, password });
    setStorage(token);
    history.push("/");
  };

  return (
    <div className="col-md-7 p-3 border bg-light">
      <h1>Did you want to update this book?</h1>
      <div className="card bg-success text-info shadow">
        <label> Email: </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type= "text"></input>

        <label> Password: </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type= "text"></input>
      </div>
      <button onClick={login}>Login</button>
      <Link to={"/"}>Bookstore Home </Link>
    </div>
  );
};

interface LoginProps {}

export default Login;



///Notes on what went wrong
// So what had happen was that api-services.ts did not have localStoraged save from the get-go. 
// I added it and then came to this page and had to update const token. 
// Adding api(Services) and line 17 setStorage(token).
import * as React from "react";
import api from "../utils/api-services";
import { Link, useHistory } from "react-router-dom";

const Register: React.FC<RegisterProps> = (props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const history = useHistory();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await api("/auth/register/", "POST", { name, email, password });
    history.push("/");
  };

  return (
    <div className="col-md-7 p-3 border bg-light">
      <h1>Did you want to update this book?</h1>
      <div className="card bg-success text-info shadow">
      <label> Name: </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        ></input>

        <label> Email: </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        ></input>

        <label> Password: </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
        ></input>
      </div>
      <button onClick={handleSubmit}>Register Yo Self</button>
      <Link to={"/"}>Bookstore Home </Link>
    </div>
  );
};

interface RegisterProps {}

export default Register;

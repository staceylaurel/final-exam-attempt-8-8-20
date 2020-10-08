import * as React from "react";
import api from "../utils/api-services";
import { Link, useHistory } from "react-router-dom";

const NewBook: React.FC<NewBookProps> = (props) => {
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [categoryid, setCategoryid] = React.useState('');
    const [price, setPrice] = React.useState('');

  const history = useHistory();


  const handleSubmit = async(e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await api('/api/books/', "POST", {title, author, categoryid, price}) 
    history.push('/');
}
 

  return (
    <div className="col-md-7 p-3 border bg-light">
        <h1>Did you want to update this book?</h1>
           <div className="card bg-success text-info shadow">
               <label> Title: </label>
               <input
             value={title}
             onChange={(e) => setTitle(e.target.value)}
           ></input>

             <label> Author: </label>
             <input
             value={author}
             onChange={(e) => setAuthor(e.target.value)}
           ></input>

               <label> Category Id: </label>
               <input
             value={categoryid}
             onChange={(e) => setCategoryid(e.target.value)}
           ></input>

               <label> Price: </label>
               <input
             value={price}
             onChange={(e) => setPrice(e.target.value)}
           ></input>

             </div>
             <button onClick={handleSubmit}>Save Update?</button>
      <Link to= {'/'}>Bookstore Home </Link>
    </div>
  );
};

interface NewBookProps {}

export default NewBook;

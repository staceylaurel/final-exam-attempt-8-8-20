import * as React from "react";
import api from "../utils/api-services";
import { Link, useParams, useHistory } from "react-router-dom";
import { IBook } from "../types";

const Admin: React.FC<AdminProps> = (props) => {
    const [book, setBook] = React.useState<IBook>(null);
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [categoryid, setCategoryid] = React.useState('');
    const [price, setPrice] = React.useState('');

  const {id} = useParams<{id: string}>();
  const history = useHistory();

  const handleDelete = async(e:React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      await api(`/api/books/${id}`, "DELETE")
      history.push('/');
  }

  const handleSubmit = async(e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await api(`/api/books/${id}`, "PUT", {title, author, categoryid, price}) 
    history.push('/');
}
  
  React.useEffect(() => {
    (async () => {
      const book = await api(`/api/books/${id}`).then((book) => {
        setTitle(book.title);
        setAuthor(book.author);
        setCategoryid(book.categoryid);
        setPrice(book.price);
      });
      
    }) ();
  }, []);

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
             <button onClick={handleDelete}>DELETE</button>
      <Link to= {'/'}>Bookstore Home </Link>
    </div>
  );
};

interface AdminProps {}

export default Admin;

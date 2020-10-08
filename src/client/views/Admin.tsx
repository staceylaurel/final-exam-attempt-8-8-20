import * as React from "react";
import api from "../utils/api-services";
import { Link, useParams, useHistory } from "react-router-dom";
import { IBook } from "../types";

const Details: React.FC<DetailsProps> = props => {
  const {id} = useParams<{id: string}>();
  const [book, setBook] = React.useState<IBook>(null);

  React.useEffect(() => {
    (async () => {
      const book = await api(`/api/books/${id}`);
      setBook(book);
    }) ();
  }, []);

  return (
    <div className="col-md-7 p-3 border bg-light">
        <h1>Details about this book.</h1>
           <div className="card bg-success text-info shadow">
             <div className="card-header text-danger badge badge-primary text-wrap">{book?.title}</div>
             <div className="card-body">
               <p className="card-title text-warning-center">{book?.author}</p>
               <p className="card-title text-warning-center">{book?.categoryid}</p>
               <p className="card-title text-warning-center">{book?.price}</p>
             </div>
      <Link to= {'/'}>Bookstore Home </Link>
      <Link to= {`/${book?.id}/admin`}> Admin</Link>
    </div>
    </div>
  );
};

interface DetailsProps {}

export default Details;

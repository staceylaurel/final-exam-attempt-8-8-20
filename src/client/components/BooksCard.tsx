import * as React from "react";
import { Link } from "react-router-dom";
import { IBook } from "../types";

const BooksCard: React.FC<BooksCardProps> = ({ book }) => {
  
  return (
    <div className="card-body col-md-7 p-3 border bg-light">
      <div className="card bg-success text-info shadow">
        <div className="card-header text-danger badge badge-primary text-wrap">
          {book.title}
        </div>
        <div className="card-body">
          <p className="card-title text-warning-center">{book.author}</p>
          {/* <p className="card-title text-warning-center">{book.name}</p> */}
          <p className="card-title text-warning-center">{book.price}</p> 
          <Link to={`/${book.id}/bookdetails`}>Go To Details</Link>
        </div>
      </div>
    </div>
  );
};

interface BooksCardProps {
  book: IBook;
}

export default BooksCard;

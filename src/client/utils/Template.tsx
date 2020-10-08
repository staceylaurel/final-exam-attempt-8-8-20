// import * as React from "react";
// import api from "../utils/api-service";
// import { Link } from "react-router-dom";
// import { IBook } from "../types";

// const Template: React.FC<TemplateProps> = ({ book }) => {

//   const [placeholder, setPlaceholder] = React.useState(null);

//   React.useEffect(() => {}, []);
  
//   return (
//     <div className="col-md-7 p-3 border bg-light">
//       <div className="card bg-success text-info shadow">
//         <div className="card-header text-danger badge badge-primary text-wrap">{book.title}</div>
//         <div className="card-body">
//           <p className="card-title text-warning-center">{book.author}</p>

//           <Link to= {`/${book.id}/bookdetails`} >Go To Details</Link>
//         </div>
    
// <div>
// <h1 className="d-flex col-md-7 p-3 border bg-light justify-content-center text-warning">
// <div className="card bg-sucess text-info shadow">
//         <form>
//           <p className="card-header text-danger badge badge-primary text-wrap row justify-content-center mt-3">
//           </p>
//           <label>Title: </label>
//           <input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           ></input>
// </div>
//      <div>
//      <h1 className="d-flex justify-content-center text-warning">It's a bookstore!</h1>
//      <main className="container background-color">
//         <section className="row justify-content-center mt-3">
//          {books.map((book) => {
//           return <BookCard book={book} key={book.id} />;
//         })}
//       </section> 
//     </main>
//   </div>

//   </div>
//     </div>
//   );
// };

// interface TemplateProps {
// book: IBook
// }

// export default Template;

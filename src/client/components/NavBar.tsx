import * as React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC<NavBarProps> = (props) => {
  
  return (
   <ul className= 'nav nav-tabs'>
       <li className= 'nav-items'>
           <Link to= '/' className= 'nav-link active'>Bookstore Home</Link>
           </li>
           <li className= 'nav-items'>   
           <Link to= '/login' className= 'nav-link active'>Log in</Link>
           </li>
           <li className= 'nav-items'>  
           <Link to= '/register' className= 'nav-link active'>Register</Link>
           </li>
           <li className= 'nav-items'>  
           <Link to= '/newbook' className= 'nav-link active'>Add a New Book</Link>
       </li>
   </ul>
   
  );
};

interface NavBarProps {}

export default NavBar;

// // //@ts-nocheck
// // //library imports
import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// // //component imports
// import NavBar from "./components/NavBar";
// import Home from "./views/Home";
// import Details from "./views/Details";
// import NewBook from "./views/NewBook";
// import Admin from "./views/Admin";
// import Login from "./views/Login";
// import Register from "./views/Register";

// import PrivateRoute from './utils/PrivateRoute';

const App: React.FC<AppProps> = (props) => {
  return (
    <BrowserRouter>
{/* //       <NavBar />
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route exact path="/:id/bookdetails">
          
//           <Details />
//         </Route>
        
//         <PrivateRoute exact path="/newbook">
//           <NewBook />
//         </PrivateRoute>
//         <PrivateRoute exact path="/:id/admin">
//           <Admin />
//         </PrivateRoute>
        
//         <Route exact path="/login">
          
//           <Login />
//         </Route>
//         <Route exact path="/register">
//           <Register />
//         </Route> 
        
//         <Route path="*">{() => <h1>Not Found!</h1>}</Route>
      
//       </Switch> */}
//     </BrowserRouter>
  );
};

interface AppProps {}

export default App;

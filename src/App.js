import React from "react";
import { Route, Switch } from "react-router";
import classes from "./App.module.css";
import Header from "./Components/Header/Header";
import Stories from "./Components/Stories/Stories";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Switch>
        <Route path={["/", "/best", "/top", "/ask", "/shows", "/jobs"]} exact>
          <Stories />
        </Route>
        <Route path="/">
          <div>404 error</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// import React from 'react';
// import  classes from './App.module.css';

// function App() {
//   return (
//     <div className={classes.App}>
//       hello
//     </div>
//   );
// }

// export default App;

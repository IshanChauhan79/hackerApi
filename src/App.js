import React from "react";
import classes from "./App.module.css";
import Header from "./Components/Header/Header";
import Stories from "./Components/Stories/Stories";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Stories />
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

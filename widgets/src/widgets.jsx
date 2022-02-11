import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './root';
// import Clock from './clock';

import Clock from "./clock";

const Root = function(props) {
    console.log(props)
    return (
        <div>
            Inside of root component
            <Clock/>
        </div>
    );
};

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  ReactDOM.render( <Root/>, main);
});

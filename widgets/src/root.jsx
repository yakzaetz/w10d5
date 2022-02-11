import React from "react";
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

export default Root;
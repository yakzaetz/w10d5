import React from 'react';
// import { render } from 'react-dom';

 class Clock extends React.Component {

    render() {
        console.log("in render");
        return(
            <h1>Clock</h1>
        );
    }
}

// const Clock = function() {
//     console.log("in render");
//         return(
//             <h1>Clock</h1>
//         );
// }

export default Clock;
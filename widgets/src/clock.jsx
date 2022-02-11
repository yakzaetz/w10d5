import React from 'react';

 export default class Clock extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        console.log("in render");
        return(
            <><h1>Clock</h1></>
        );
    }
}

// const Clock = function() {
//     console.log("in render");
//         return(
//             <h1>Clock</h1>
//         );
// }

// export default Clock;
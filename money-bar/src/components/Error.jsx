import React from 'react';

const Error = (props) => {
    let { errorPresent } = props;

    if (errorPresent) {
        return(<div className="error-container">
            <div className="error-message">
                Please enter an amount between $10,000 and $30,000
            </div>
        </div>)
    } else {
        return(
            <div className="noerror-container">
        </div>
        )
    }

}

export default Error;
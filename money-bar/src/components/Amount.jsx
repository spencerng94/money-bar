import React from 'react';

const Amount = (props) => {

    const { amount } = props;

    return (
        <div className="amount-container">
            <div className="amount">
                ${amount}
            </div>
        </div>
    )
}

export default Amount;
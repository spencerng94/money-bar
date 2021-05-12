import React from 'react';

function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

const Amount = (props) => {

    const { amount } = props;
    
    let newAmount = separator(amount);

    return (
        <div className="amount-container">
            <div className="amount">
                ${newAmount}
            </div>
        </div>
    )
}

export default Amount;
import React, { useState } from 'react';

function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

const Amount = (props) => {

    const { amount } = props;
    const [ isEditable, toggleEditable ] = useState(false);
    const [ userText, editText ] = useState({amount});
    const [ isHovered, toggleHover ] = useState(false);
    const [ isSelected, toggleSelected ] = useState(false);
    
    let newAmount = separator(amount);

    let borderStyle = {
        border: ''
    };

    if (isHovered) {
        borderStyle = {
            border: '1px solid #E0E0E3'
        }
    }

    return (
        <div style={borderStyle} onMouseEnter={() => toggleHover(true)}
        onMouseLeave={() => toggleHover(false)} className="amount-container">
            <div className="amount">
                { isEditable ? <input type="text" value={amount}/>
                    :
                    <div>
                        ${newAmount}
                    </div>
                }
            </div>
        </div>
    )
}

export default Amount;
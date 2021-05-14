import React, { useState } from 'react';

function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

const Amount = (props) => {

    const { amount, setAmount } = props;
    const [ isHovered, toggleHover ] = useState(false);
    const [ isSelected, toggleSelected ] = useState(false);

    let newAmount = separator(amount);

    let borderStyle = {
        border: ''
    };

    const handleChange = (event) => {
        console.log(event.target.value, 'line 23')
        setAmount(event.target.value)
    }

    if (isHovered) {
        borderStyle = {
            border: '1px solid #E0E0E3'
        }
    }

    if (isSelected) {
        borderStyle = {
            border: '1px solid #707072'
        }
    }

    return (
        <div style={borderStyle} onMouseEnter={() => toggleHover(true)}
        onMouseLeave={() => toggleHover(false)} onDoubleClick={() => toggleSelected(!isSelected)} className="amount-container">
            <div className="amount">
                { isSelected ? 
                    <input 
                        type="text" 
                        onChange={handleChange} 
                        defaultValue={amount}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                              toggleSelected(!isSelected)
                            }
                          }}
                    />
                    :
                    <div className="new-amount">
                        ${newAmount}
                    </div>
                }
            </div>
        </div>
    )
}

export default Amount;
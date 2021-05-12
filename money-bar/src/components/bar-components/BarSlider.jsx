import React, { useState} from 'react';
import Amount from '../Amount.jsx';
import Error from '../Error.jsx';

const BarSlider = ({
    initialAmount, 
    minAmount, 
    maxAmount
}) => {

    const [ amount, setAmount ] = useState(initialAmount)
    const step = 2000;
    const handleChange = event => {
        setAmount(event.target.value)
        console.log(event.target.value, 'line 13')
    }

    return (
        <div>
            <Amount amount={amount}></Amount>
            <Error ></Error>
            <div className="bar-slider-container">
                <div className="bar-slider">
                    <input 
                        type="range"
                        className="slider"
                        min={minAmount}
                        max={maxAmount}
                        step={step}
                        value={amount}
                        onChange={handleChange}
                    />
                </div>
                <div className="limits-container">
                    <div className="minimum">$10000</div>
                    <div className="maximum">$30000</div>
                </div>
            </div>
        </div>
    )
}

export default BarSlider;
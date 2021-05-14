import React, { useState } from 'react';

const BarSlider = ({
    initialAmount, 
    minAmount, 
    maxAmount,
    amount,
    setAmount
}) => {
    // let { amount, setAmount } = props;
    console.log(amount, 'line 9')
    const step = 2000;

    const handleChange = event => {
        setAmount(event.target.value)
        console.log(event.target.value, 'line 13')
    }
    return (
        <div>
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
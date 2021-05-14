import React from 'react';
import BarSlider from './bar-components/BarSlider.jsx';

const Bar = (props) => {
    let { amount, setAmount } = props;

    console.log(amount, 'line 7')

    return(
        <div className="bar">
            <div>
                <BarSlider amount={amount} setAmount={setAmount} initialAmount={25000} minAmount={10000} maxAmount={30000}></BarSlider>
            </div>
        </div>
    )
}

export default Bar;
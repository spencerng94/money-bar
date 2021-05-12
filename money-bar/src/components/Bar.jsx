import React from 'react';
import BarSlider from './bar-components/BarSlider.jsx';

const Bar = () => {
    return(
        <div className="bar">
            <div>
                <BarSlider initialAmount={25000} minAmount={10000} maxAmount={30000}></BarSlider>
            </div>
        </div>
    )
}

export default Bar;
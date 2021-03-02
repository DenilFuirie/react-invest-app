import React from 'react';
import './StatsRow.css';
import StockSVG from './stock.svg';

const StatsRow = ( {key, name, openPrice, price, shares } ) => {

    const percentage = ((price - openPrice)/openPrice) * 100;
    return (
        <div>
            <div className="row">
                <div className="row__intro">
                    <h1>{name}</h1>
                    <p> {shares && shares + " shares"} </p>
                </div>
                <div className="row__chart">
                    <img src={StockSVG} height={16} />
                </div>
                <div className="row__numbers">
                    <p className="row__price">{price}</p>
                    <p className="row__percentage"> +{Number(percentage).toFixed(2)}%</p>
                </div>

            </div>
        </div>
    )
};

export default StatsRow;
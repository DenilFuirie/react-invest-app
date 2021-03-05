import React from 'react';
import './StatsRow.css';
import StockSVG from './stock.svg';
import {db} from "./firebase";

const StatsRow = ( {key, name, openPrice, price, shares } ) => {

    const percentage = ((price - openPrice)/openPrice) * 100;

    const buyStock = () => {
        db
            .collection('myStocks')
            .where( "ticker", "==", name)
            .get()
            .then((querySnapshot) => {
                if(!querySnapshot.empty) {
                    querySnapshot.forEach((doc) => {
                        db.collection('myStocks')
                            .doc(doc.id)
                            .update({
                                shares: doc.data().shares += 1
                            })
                    })
                } else {
                    db.collection('myStocks')
                        .add({
                            ticker: name,
                            shares: 1
                        })
                }

            })
    }

    return (
        <div>
            <div onClick={buyStock} className="row">
                <div className="row__intro">
                    <h1>{name}</h1>
                    <p> {shares && shares + " shares"} </p>
                </div>
                <div className="row__chart">
                    <img src={StockSVG} height={16} />
                </div>
                <div className="row__numbers">
                    <p className="row__price">{price}</p>
                    <p className="row__percentage"> {Number(percentage).toFixed(2)}%</p>
                </div>

            </div>
        </div>
    )
};

export default StatsRow;
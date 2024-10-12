import React, { useState } from 'react'
import '../css/currency.css';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_vdac9jzi89vMxpCRZ2WJG7LClJatkxb5R4F8G8rI";




function Currency() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);


    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);    /*data objesinin içine girip seçmiş olduğumuz para birimini çekmek için [toCurrency] kullandık */
    }
    return (
        <div className='currency-div'>
            <div style={{ marginTop: "-20px", fontFamily: "arial", backgroundColor: "black ", color: "#fff", width: "100%", textAlign: "center" }}>
                <h3>DÖVİZ KURU UYGULAMASI</h3>
            </div>
            <div style={{ marginTop: "25px" }}>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type='number' className='amount'></input>
                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                    <option>GBP</option>
                </select>
                <FaRegArrowAltCircleRight style={{ fontSize: "25px", marginRight: "10px" }} />
                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>

                </select>
                <input value={result} onChange={(e) => setResult(e.target.value)} type='number' className='result'>
                </input>

            </div>
            <div>
                <button
                    onClick={exchange}
                    className='exchange-button'>Çevir

                </button>
            </div>


        </div>
    )
}

export default Currency
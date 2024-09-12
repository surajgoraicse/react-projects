import React, { useEffect, useState } from 'react'

function ConvertCurrency(toCurrency, fromCurrency, amount) {

    const [convertedAmount, setConvertedAmount] = useState(null);

    useEffect(() => {

        fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
            .then((res) => (res.json()))
            .then((res) => {
                setConvertedAmount(res.rates[toCurrency] + " " + toCurrency)
            })
        
        console.log("converted amount : ", convertedAmount);
        
        return convertedAmount;


    }, [
        toCurrency, fromCurrency, amount
    ])

}

export default ConvertCurrency
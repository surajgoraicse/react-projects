import React, { useEffect, useState } from 'react'

function FetchCurrency() {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch("https://api.frankfurter.app/currencies")
            .then((res) => (res.json()))
            .then((res) => { setData(Object.keys(res))})

        console.log(data);
    }, [])

    return data;



}

export default FetchCurrency

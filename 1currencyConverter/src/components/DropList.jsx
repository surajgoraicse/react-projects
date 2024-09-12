import React, { useState } from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi2";


function DropList({ title, currencies, currency, setCurrency , favourite , setFavourite }) {
    

    // favourite funcion
    
    const handleFav = () => {
        let update = []
        if (favourite.includes(currency)) {
            update = favourite.filter((val)=>(val !== currency))
            setFavourite(update);

        }
        else {
            update = [...favourite , currency]
            setFavourite(update)
        }
        localStorage.setItem('currencyList' , JSON.stringify(update))
    }

	return (
		<div className="flex flex-col gap-y-1 relative ">
			<label className="font-semibold" htmlFor={title}>{title}</label>
            <select
                value={currency}
                onChange={(e)=>(setCurrency(e.target.value))}

                className="border border-gray-300 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600  shadow-sm " id={title}>
                
                {favourite.map((val) => (
					<option className="bg-gray-200" value={val} key={val}>
						{val}
					</option>
                ))}
                
                    <hr />
                {currencies
                    .filter((val)=>(!favourite.includes(val)))
                    .map((val) => (
					<option value={val} key={val}>
						{val}
					</option>
                ))}
                
            </select>
            <button
            onClick={handleFav}
                className="absolute top-10 right-6">
                {/* conditional rendering  */}
                {
                    (favourite.includes(currency)) ? <HiStar /> : <HiOutlineStar />
                }
            </button>
		</div>
	);
}

export default DropList;

{/* <HiOutlineStar /> */ }

{/* <HiStar /> */}

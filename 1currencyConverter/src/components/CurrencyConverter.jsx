import React, { useEffect, useState } from "react";
import DropList from "./DropList";
import FetchCurrency from "./Hooks/FetchCurrency";
import { IoIosSwap } from "react-icons/io";
import { HiOutlineStar } from "react-icons/hi2";

function CurrencyConverter() {
	const currencies = FetchCurrency();
	const [fromCurrency, setFromCurrency] = useState("USD");
	const [toCurrency, setToCurrency] = useState("INR");
	const [amount, setAmount] = useState(1);
	const [convertedAmount, setConvertedAmount] = useState(null);
	const [favourite, setFavourite] = useState(
		JSON.parse(localStorage.getItem("currencyList"))
			? JSON.parse(localStorage.getItem("currencyList"))
			: []
	);
	const [loading, setLoading] = useState(false);

	// swap currencies function
	const swapCurrencies = () => {
		setFromCurrency(toCurrency);
		setToCurrency(fromCurrency);
	};

	// convert currencies function
	const convertCurrency = (fromCurrency, toCurrency, amount) => {
		if (!amount) return;
		setLoading(true);

		fetch(
			`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
		)
			.then((res) => res.json())
			.then((res) =>
				setConvertedAmount(res.rates[toCurrency] + " " + toCurrency)
			)
			.catch((error) => ("error ", error))
			.finally(() => {
				setLoading(false);
			});

		console.log(convertedAmount);
	};

	// favourite list

	return (
		<div className="max-w-xl shadow-lg mx-auto bg-white p-5 rounded-lg flex flex-col gap-y-7 ">
			<h1 className="text-3xl font-semibold font-sans text-gray-700 ">
				Currency Converter{" "}
			</h1>
			<div className="grid sm:grid-cols-3 grid-cols-1 justify-between">
				{/* dropdown list                  */}

				<DropList
					title="from:"
					currencies={currencies}
					currency={fromCurrency}
					setCurrency={setFromCurrency}
					favourite={favourite}
					setFavourite={setFavourite}
				/>

				{/* swap button */}
				<div className="flex flex-col items-center justify-end pt-5  ">
					<button
						onClick={swapCurrencies}
						className=" bg-gray-200 border border-solid border-gray-300  rounded-full p-1 hover:bg-slate-300 active:bg-slate-400 "
					>
						<IoIosSwap className="  text-3xl " />
					</button>
				</div>

				{/* dropdown list                  */}

				<DropList
					title="to:"
					currencies={currencies}
					currency={toCurrency}
					setCurrency={setToCurrency}
					favourite={favourite}
					setFavourite={setFavourite}
				/>
			</div>
			<div className="flex flex-col ">
				<label className="font-semibold " htmlFor="amount">
					Amount:
				</label>

				{/* amount input field */}
				<input
					value={amount}
					onChange={(e) => {
						setAmount(e.target.value);
					}}
					className="w-full shadow-sm border border-solid border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600 "
					type="number"
					id="amount"
				/>
			</div>
			<div className="flex flex-col items-end gap-y-1">
				{/* convert button */}
				<button
					onClick={() => convertCurrency(fromCurrency, toCurrency, amount)}
					className={` ${
						loading ? "animate-pulse" : ""
					} px-5 py-2 bg-purple-600 text-white rounded-md active:outline-none active:ring-2 active:ring-purple-800 active:ring-offset-2  duration-200`}
				>
					Convert
				</button>

				<div className="text-lg text-orange-800 font-semibold">
					Converted Amount : {convertedAmount}
				</div>
			</div>
		</div>
	);
}

export default CurrencyConverter;

import React from "react";
import CurrencyConverter from "./components";

function App() {
	return (
		<div className="min-h-screen flex justify-center items-center bg-gray-100">
			<div className="container">
				<CurrencyConverter />
			</div>
		</div>
	);
}

export default App;

// currencies => https://api.frankfurter.app/currencies
// convert => https://api.frankfurter.app/latest?amount=1&from=USD&to=INR

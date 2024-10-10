import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";

function App() {
	const [data, setData] = useState("");
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(false);
	const genAi = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API);
	const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

	const generateContent = async (prompt) => {
		const result = await model.generateContent(prompt);
		return result;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setData("");
		console.log("hi");
		if (!input) {
			setData("Please enter a prompt");
			return;
		}
		const response = generateContent(
			input +
				" generate in less than 300 words and the output produced should be a markdown format"
		);
		response
			.then((res) => {
				console.log("response initiated");
				setData(res.response.text());
				console.log("value of data", res.response.text());
			})
			.catch((error) => {
				console.log("api fetch error", error);
			})
			.finally(() => {
				setLoading(false);
				console.log("set loading to false", loading);
			});
	};

	return (
		<div className="w-full h-screen  flex mt-10 items-center flex-col">
			<h1 className="text-5xl font-bold text-white p-4 rounded-lg">Gemini</h1>
			<form
				onSubmit={handleSubmit}
				className="w-full flex justify-center items-center flex-col gap-y-4"
			>
					<input
					className="w-full max-w-72 sm:max-w-lg lg:max-w-2xl pl-4 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					type="text"
					value={input}
					placeholder="Enter your prompt"
					onChange={(e) => setInput(e.target.value)}
					/>
				
				<input
					type="submit"
					disabled={loading}
					className={`px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
						loading ? "animate-pulse" : ""
					}`}
				/>
			</form>
			<div className="flex items-center justify-center mt-10">
				<h1
					className={`text-yellow-200  text-3xl mx-5 ${
						loading ? "animate-bounce" : ""
					} ${data ? "animate-pulse" : ""} `}
				>
					{loading ? "Fetching result " : "Result"}
				</h1>
				<button
					onClick={() => {
						setData("");
					}}
					className="px-4 py-2 text-1xl font-bold bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-150 ease-in-out"
				>
					Clear
				</button>
			</div>

			{data && (
				<p className="text-lg md:text-xl px-5 py-2 rounded-xl  text-white border border-gray-500 mt-4 mx-5 md:mx-20 lg:mx40">
					<ReactMarkdown>{data}</ReactMarkdown>
				</p>
			)}
		</div>
	);
}

export default App;

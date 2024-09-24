import React, { useState } from "react";
import { TodoContextProvider } from "./context/TodoContext";
import { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		setTodos([todo, ...todos]);
	};
	const updateTodo = (todo, id) => {
		setTodos((todos) => todos.map((val) => (val.id === id ? todo : val)));
	};
	const deleteTodo = (id) => {
		setTodos((todos) => todos.filter((val) => val.id !== id));
	};
	const toggleComplete = (id) => {
		setTodos((todos) =>
			todos.map((val) =>
				val.id === id ? { ...val, completed: !val.completed } : val
			)
		);
	};

	// local storage implementation

	useEffect(() => {
		const todoList = JSON.parse(localStorage.getItem("todos"));
		if (todoList && todoList.length > 0) setTodos(todoList);
	}, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<TodoContextProvider
			value={{ todos, updateTodo, deleteTodo, toggleComplete, addTodo }}
		>
			<div className="bg-[#172842] min-h-screen py-8">
				<div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
					<h1 className="text-2xl font-bold text-center mb-8 mt-2">
						Manage Your Todos
					</h1>
					<div className="mb-4">
						<TodoForm />
					</div>
					<div className="flex flex-wrap gap-y-3">
						{todos.map((val) => (
							<div className="w-full" key={val.id}>
								<TodoItem todo={val} />
							</div>
						))}
					</div>
				</div>
			</div>
		</TodoContextProvider>
	);
}

export default App;

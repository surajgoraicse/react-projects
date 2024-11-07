import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
	return (
		<div>
			<div className="grid-background"></div>
			<main className="min-h-screen container">
				<Header />
				<Outlet />
      </main>
      
      {/* footer */}
			<div className="p-10 text-center bg-gray-800 mt-10">
				Made with ❤️ by Suraj
			</div>
		</div>
	);
}

export default AppLayout;

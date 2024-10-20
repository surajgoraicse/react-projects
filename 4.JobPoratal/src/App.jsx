import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import JobListing from "./pages/Job-Listing";
import JobPage from "./pages/JobPage";
import PostJob from "./pages/PostJob";
import SavedJob from "./pages/SavedJob";
import MyJobs from "./pages/MyJobs";
import { ThemeProvider } from "./components/theme-provider";
import "./App.css";
import ProtectedRoutes from "./components/ProtectedRoutes";

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: (
						<LandingPage />
				),
			},
			{
				path: "/onboarding",
				element: (
					<ProtectedRoutes>
						<Onboarding />
					</ProtectedRoutes>
				),
			},
			{
				path: "/jobs",
				element: (
					<ProtectedRoutes>
						<JobListing />
					</ProtectedRoutes>
				),
			},
			{
				path: "/job/:id",
				element: (
					<ProtectedRoutes>
						<JobPage />
					</ProtectedRoutes>
				),
			},
			{
				path: "/post-job",
				element: (
					<ProtectedRoutes>
						<PostJob />
					</ProtectedRoutes>
				),
			},
			{
				path: "/saved-job",
				element: (
					<ProtectedRoutes>
						<SavedJob />
					</ProtectedRoutes>
				),
			},
			{
				path: "/my-jobs",
				element: (
					<ProtectedRoutes>
						<MyJobs />
					</ProtectedRoutes>
				),
			},
		],
	},
]);

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;

import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import LandingPage from './pages/LandingPage'
import Onboarding from './pages/Onboarding'
import JobListing from './pages/Job-Listing'
import JobPage from './pages/JobPage'
import PostJob from './pages/PostJob'
import SavedJob from './pages/SavedJob'
import MyJobs from './pages/MyJobs'
import { ThemeProvider } from './components/theme-provider'
import './App.css'

const router = createBrowserRouter([
  {
    element: <AppLayout /> ,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/onboarding",
        element: <Onboarding />
      },
      {
        path: "/jobs",
        element: <JobListing />
      },
      {
        path: "/job/:id",
        element: <JobPage />
      },
      {
        path: "/post-job",
        element: <PostJob />
      },
      {
        path: "/saved-job",
        element: <SavedJob/>
      },
      {
        path: "/my-jobs",
        element: <MyJobs/>
      },
    ]
  }
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
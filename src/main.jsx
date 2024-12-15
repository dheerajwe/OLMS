import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import DashboardCards from "./components/DashboardCards.jsx";
import LeaveForm from "./components/LeaveForm.jsx";
import IssueForm from "./components/IssueForm.jsx";
import OutingForm from "./components/OutingForm.jsx";
import OutingList from "./components/OutingList.jsx";
import ComplaintForm from "./components/ComplaintForm.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Profile from "./components/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Base layout
    children: [
      { path: "/", element: <DashboardCards /> },
      { path: "/dashboard", element: <DashboardCards /> },
      {
        path: "/leave",
        children: [
          { path: "apply", element: <LeaveForm /> },
          { path: "all", element: <IssueForm /> },
        ],
      },
      {
        path: "/outing",
        children: [
          { path: "apply", element: <OutingForm /> },
          { path: "all", element: <OutingList /> },
        ],
      },
      { path: "/complaints", element: <ComplaintForm /> },
      { path: "/contact", element: <ContactSection /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

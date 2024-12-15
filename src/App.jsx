import React, { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";
import PageTitle from "./components/PageTitle";
import ScrollToTop from "./components/ScrollToTop"; // Import the ScrollToTop component

function App() {
  const [breadcrumb, setBreadcrumb] = useState("Dashboard");
  const [subBreadcrumb, setSubBreadcrumb] = useState("Home");
  const [isSidebarActive, setSidebarActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const sidebarRef = useRef(null);
  const togglerRef = useRef(null);
  const location = useLocation(); // Get current location

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 768;
      setIsMobile(mobileView);
      setSidebarActive(!mobileView); // Sidebar active on desktop by default
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleClickOutside = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        !togglerRef.current.contains(e.target)
      ) {
        setSidebarActive(false); // Close sidebar on outside click
      }
    };

    if (isMobile) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    const path = location.pathname;
    // Update breadcrumb and subbreadcrumb based on the route
    if (path.includes("leave")) {
      if (path.includes("apply")) {
        setBreadcrumb("Apply Leave");
        setSubBreadcrumb("Leaves / Apply Leave");
      } else if (path.includes("all")) {
        setBreadcrumb("All Leaves");
        setSubBreadcrumb("Leaves / All Leaves");
      } else {
        setBreadcrumb("Leaves");
        setSubBreadcrumb("Leaves");
      }
    } else if (path.includes("outing")) {
      if (path.includes("apply")) {
        setBreadcrumb("Apply Outing");
        setSubBreadcrumb("Outings / Apply Outing");
      } else if (path.includes("all")) {
        setBreadcrumb("All Outings");
        setSubBreadcrumb("Outings / All Outings");
      } else {
        setBreadcrumb("Outings");
        setSubBreadcrumb("Outings");
      }
    } else if (path.includes("complaints")) {
      setBreadcrumb("Complaints");
      setSubBreadcrumb("Complaints");
    } else if (path.includes("contact")) {
      setBreadcrumb("Contact");
      setSubBreadcrumb("Contact");
    } else if (path.includes("profile")) {
      setBreadcrumb("Profile");
      setSubBreadcrumb("Profile");
    } else {
      setBreadcrumb("Dashboard");
      setSubBreadcrumb("Dashboard"); // Default breadcrumb
    }
  }, [location]);

  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };

  const handleHomeClick = () => {
    // Navigate to the home/dashboard page
  };

  return (
    <div className={`App ${isSidebarActive ? "sidebar-active" : "sidebar-inactive"}`}>
      <Header toggleSidebar={toggleSidebar} togglerRef={togglerRef} />

      <div className="d-flex flex-grow-1">
        <Sidebar
          isOpen={isSidebarActive}
          toggleSidebar={toggleSidebar}
          isMobile={isMobile}
          sidebarRef={sidebarRef}
        />

        <main className="main-content flex-grow-1">
          {/* Pass breadcrumb and subBreadcrumb to PageTitle */}
          <PageTitle 
            title={breadcrumb} 
            subTitle={subBreadcrumb} 
            onHomeClick={handleHomeClick} 
          />
          <Outlet /> {/* Render nested routes here */}
        </main>
      </div>

      <Footer />

      {/* Include ScrollToTop component to reset scroll position on route change */}
      <ScrollToTop />
    </div>
  );
}

export default App;

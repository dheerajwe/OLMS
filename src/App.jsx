import { useState, useEffect, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import Footer from './components/Footer';
import PageTitle from './components/PageTitle';
import Profile from './components/Profile';
import ContactSection from './components/ContactSection';
import LeaveForm from './components/LeaveForm';
import IssueForm from './components/IssueForm';
import ComplaintForm from './components/ComplaintForm';
import OutingForm from './components/OutingForm';
import OutingList from './components/OutingList';
import DashboardCards from './components/DashboardCards';

function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard');
  const [breadcrumb, setBreadcrumb] = useState('Dashboard');
  const [isSidebarActive, setSidebarActive] = useState(false); // Sidebar inactive by default for mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const sidebarRef = useRef(null); // Reference for the sidebar
  const togglerRef = useRef(null); // Reference for the sidebar toggler button

  // Handle screen resizing for mobile/desktop detection
  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 768;
      setIsMobile(mobileView);

      if (!mobileView) {
        setSidebarActive(true); // Sidebar always active on desktop
      } else {
        setSidebarActive(false); // Sidebar inactive on mobile
      }
    };

    handleResize(); // Initialize state on load
    window.addEventListener('resize', handleResize);

    // Close sidebar if clicked outside on mobile
    const handleClickOutside = (e) => {
      // Ignore click if it's on the sidebar toggler
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        !togglerRef.current.contains(e.target)
      ) {
        setSidebarActive(false); // Close the sidebar
      }
    };

    if (isMobile) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  const updatePage = (page, breadcrumbText) => {
    setCurrentPage(page);
    setBreadcrumb(breadcrumbText);
    if (isMobile) setSidebarActive(false); // Close sidebar automatically on mobile
  };

  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'Profile':
        return <Profile />;
      case 'Contact':
        return <ContactSection />;
      case 'Apply Leave':
        return <LeaveForm />;
      case 'All Leaves':
        return <IssueForm />;
      case 'Complaints':
        return <ComplaintForm />;
      case 'Apply Outing':
        return <OutingForm />;
      case 'All Outings':
        return <OutingList />;
      case 'Dashboard':
        return <DashboardCards />;
      default:
        return <div>No Content Found</div>;
    }
  };

  return (
    <div className={`App ${isSidebarActive ? 'sidebar-active' : 'sidebar-inactive'}`}>
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} togglerRef={togglerRef} /> {/* Pass ref to Header */}

      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <Sidebar
          setCurrentPage={updatePage}
          isOpen={isSidebarActive}
          toggleSidebar={toggleSidebar}
          isMobile={isMobile}
          sidebarRef={sidebarRef} // Pass ref to Sidebar
        />

        {/* Main Content */}
        <main className="main-content flex-grow-1">
          <PageTitle title={currentPage} breadcrumb={breadcrumb} />
          {renderContent()}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

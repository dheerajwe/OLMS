import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar'; // Correct import
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
  const [isSidebarActive, setSidebarActive] = useState(false); // Initially inactive for mobile

  const updatePage = (page, breadcrumbText) => {
    setCurrentPage(page);
    setBreadcrumb(breadcrumbText);
  };

  const handleHomeClick = () => {
    updatePage('Dashboard', 'Dashboard');
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
      <Header toggleSidebar={toggleSidebar} />

      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <Sidebar setCurrentPage={updatePage} isSidebarActive={isSidebarActive} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <main className={`main-content flex-grow-1`}>
          <PageTitle title={currentPage} breadcrumb={breadcrumb} onHomeClick={handleHomeClick} />
          {renderContent()}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

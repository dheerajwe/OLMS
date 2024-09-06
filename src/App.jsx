import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import PageTitle from './components/PageTitle';
import Profile from './components/Profile';
import ContactSection from './components/ContactSection';
import LeaveForm from './components/LeaveForm';
import IssueForm from './components/IssueForm';
import ComplaintForm from './components/ComplaintForm';
import OutingForm from './components/OutingForm';
import OutingList from './components/OutingList';
import DashboardCards from './components/DashboardCards'; // Import the new DashboardCards component

function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard');
  const [breadcrumb, setBreadcrumb] = useState('');

  const updatePage = (page, breadcrumbText) => {
    setCurrentPage(page);
    setBreadcrumb(breadcrumbText);
  };

  const handleHomeClick = () => {
    updatePage('Dashboard', 'Dashboard');
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
        return <DashboardCards />; // Render the new DashboardCards component
      default:
        return <div>{/* Default content */}</div>;
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar setCurrentPage={updatePage} />
        <main className="main-content flex-grow-1">
          <PageTitle title={currentPage} breadcrumb={breadcrumb} onHomeClick={handleHomeClick} />
          {renderContent()} {/* Render the content based on the current page */}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;

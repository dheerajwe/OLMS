import React, { useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Sidebar({ setCurrentPage, isOpen, toggleSidebar, isMobile, sidebarRef }) {
  useEffect(() => {
    if (isOpen) {
      document.getElementById('sidebar').classList.add('active');
    } else {
      document.getElementById('sidebar').classList.remove('active');
    }
  }, [isOpen]);

  const handleItemClick = (page, breadcrumb) => {
    setCurrentPage(page, breadcrumb);
    if (isMobile) toggleSidebar(); // Automatically close sidebar on mobile
  };

  return (
    <aside
      id="sidebar"
      ref={sidebarRef} // Attach the ref here
      className={`sidebar ${isOpen ? 'active' : ''}`}
    >
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => handleItemClick('Dashboard', 'Dashboard')}>
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#leaves-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-calendar"></i>
            <span>Leaves</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="leaves-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li>
              <a href="#" onClick={() => handleItemClick('Apply Leave', 'Leaves / Apply Leave')}>
                <i className="bi bi-circle"></i>
                <span>Apply Leave</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleItemClick('All Leaves', 'Leaves / All Leaves')}>
                <i className="bi bi-circle"></i>
                <span>All Leaves</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#outings-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-signpost"></i>
            <span>Outings</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="outings-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li>
              <a href="#" onClick={() => handleItemClick('Apply Outing', 'Outings / Apply Outing')}>
                <i className="bi bi-circle"></i>
                <span>Apply Outing</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleItemClick('All Outings', 'Outings / All Outings')}>
                <i className="bi bi-circle"></i>
                <span>All Outings</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => handleItemClick('Complaints', 'Complaints')}>
            <i className="bi bi-flag"></i>
            <span>Complaints</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => handleItemClick('Contact', 'Contact')}>
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => handleItemClick('Profile', 'Profile')}>
            <i className="bi bi-person"></i>
            <span>Profile</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

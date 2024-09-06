// OutingList.jsx
import React from 'react';
import './OutingList.css'; // Import the CSS file for styling

const OutingList = () => {
  return (
    <div className="outing-list-wrapper">
      <div className="card">
        <div className="card-body">
          <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
            <div className="dataTable-top">
              <div className="dataTable-dropdown">
                <label>
                  <select className="dataTable-selector">
                    <option value="5">5</option>
                    <option value="10" selected="">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                  </select>
                  entries per page
                </label>
              </div>
              <div className="dataTable-search">
                <input
                  className="dataTable-input"
                  placeholder="Search..."
                  type="text"
                />
              </div>
            </div>
            <div className="dataTable-container">
              <table className="table table-borderless dataTable-table">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: '12.8458%' }}>
                      <a href="#" className="dataTable-sorter">S.NO</a>
                    </th>
                    <th scope="col" style={{ width: '23.3202%' }}>
                      <a href="#" className="dataTable-sorter">DATE</a>
                    </th>
                    <th scope="col" style={{ width: '50%' }}>
                      <a href="#" className="dataTable-sorter">REASON</a>
                    </th>
                    <th scope="col" style={{ width: '13.8340%' }}>
                      <a href="#" className="dataTable-sorter">STATUS</a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <a href="#">1</a>
                    </th>
                    <td>1-1-2000</td>
                    <td>Personal</td>
                    <td><span className="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <a href="#">2</a>
                    </th>
                    <td>3-3-2000</td>
                    <td>Medical</td>
                    <td><span className="badge bg-warning">Pending</span></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <a href="#">3</a>
                    </th>
                    <td>12-12-2000</td>
                    <td>Family Event</td>
                    <td><span className="badge bg-danger">Rejected</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="dataTable-bottom">
              <div className="dataTable-info">Showing 1 to 3 of 3 entries</div>
              <nav className="dataTable-pagination">
                <ul className="dataTable-pagination-list"></ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutingList;

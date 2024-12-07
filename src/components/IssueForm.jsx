
import './IssueForm.css'; // Import the CSS file for styling

const IssueForm = () => {
  return (
    <div className="issue-form-wrapper">
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
                    <th scope="col" style={{ width: '21.9368%' }}>
                      <a href="#" className="dataTable-sorter">FROM</a>
                    </th>
                    <th scope="col" style={{ width: '21.9368%' }}>
                      <a href="#" className="dataTable-sorter">TO</a>
                    </th>
                    <th scope="col" style={{ width: '23.3202%' }}>
                      <a href="#" className="dataTable-sorter">LEAVE TYPE</a>
                    </th>
                    <th scope="col" style={{ width: '19.9605%' }}>
                      <a href="#" className="dataTable-sorter">Status</a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <a href="#">1</a>
                    </th>
                    <td>1-1-2000</td>
                    <td><a href="#" className="text-primary">2-2-2002</a></td>
                    <td>Sick Leave</td>
                    <td><span className="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <a href="#">2</a>
                    </th>
                    <td>3-3-2000</td>
                    <td><a href="#" className="text-primary">21-21-2002</a></td>
                    <td>Sick Leave</td>
                    <td><span className="badge bg-warning">Pending</span></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <a href="#">3</a>
                    </th>
                    <td>121-1-2000</td>
                    <td><a href="#" className="text-primary">2-32-2002</a></td>
                    <td>Function</td>
                    <td><span className="badge bg-danger">Rejected</span></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <a href="#">4</a>
                    </th>
                    <td>1-1-2000</td>
                    <td><a href="#" className="text-primary">2-2-2002</a></td>
                    <td>Sick Leave</td>
                    <td><span className="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <a href="#">5</a>
                    </th>
                    <td>3-3-2000</td>
                    <td><a href="#" className="text-primary">21-21-2002</a></td>
                    <td>Sick Leave</td>
                    <td><span className="badge bg-warning">Pending</span></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <a href="#">6</a>
                    </th>
                    <td>121-1-2000</td>
                    <td><a href="#" className="text-primary">2-32-2002</a></td>
                    <td>Function</td>
                    <td><span className="badge bg-danger">Rejected</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="dataTable-bottom">
              <div className="dataTable-info">Showing 1 to 6 of 6 entries</div>
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

export default IssueForm;

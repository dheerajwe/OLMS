import styles from './OutingList.module.css'; // Import CSS module

const OutingList = () => {
  return (
    <div className={styles.outingListWrapper}>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <div className={`${styles.dataTableWrapper} dataTable-loading no-footer sortable searchable fixed-columns`}>
            <div className={styles.dataTableTop}>
              <div className={styles.dataTableDropdown}>
                <label>
                  <select className={styles.dataTableSelector}>
                    <option value="5">5</option>
                    <option value="10" selected="">
                      10
                    </option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                  </select>
                  entries per page
                </label>
              </div>
              <div className={styles.dataTableSearch}>
                <input
                  className={styles.dataTableInput}
                  placeholder="Search..."
                  type="text"
                />
              </div>
            </div>
            <div className={styles.dataTableContainer}>
              <table className={`${styles.table} ${styles.tableBorderless} dataTable-table`}>
                <thead>
                  <tr>
                    <th scope="col" style={{ width: '12.8458%' }}>
                      <a href="#" className={styles.dataTableSorter}>
                        S.NO
                      </a>
                    </th>
                    <th scope="col" style={{ width: '23.3202%' }}>
                      <a href="#" className={styles.dataTableSorter}>
                        DATE
                      </a>
                    </th>
                    <th scope="col" style={{ width: '50%' }}>
                      <a href="#" className={styles.dataTableSorter}>
                        REASON
                      </a>
                    </th>
                    <th scope="col" style={{ width: '13.8340%' }}>
                      <a href="#" className={styles.dataTableSorter}>
                        STATUS
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <a href="#" className={styles.hi}>1</a>
                    </th>
                    <td>1-1-2000</td>
                    <td>Personal</td>
                    <td>
                      <span className={`${styles.badge} ${styles.bgSuccess}`}>Approved</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <a href="#" className={styles.hi}>2</a>
                    </th>
                    <td>3-3-2000</td>
                    <td>Medical</td>
                    <td>
                      <span className={`${styles.badge} ${styles.bgWarning}`}>Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <a href="#" className={styles.hi}>3</a>
                    </th>
                    <td>12-12-2000</td>
                    <td>Family Event</td>
                    <td>
                      <span className={`${styles.badge} ${styles.bgDanger}`}>Rejected</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.dataTableBottom}>
              <div className={styles.dataTableInfo}>Showing 1 to 3 of 3 entries</div>
              <nav className={styles.dataTablePagination}>
                <ul className={styles.dataTablePaginationList}></ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutingList;
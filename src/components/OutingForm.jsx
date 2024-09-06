// OutingForm.jsx
import React from 'react';
import './OutingForm.css'; // Import the CSS file for styling

const OutingForm = () => {
  return (
    <div className="outing-form-wrapper">
      <div className="card">
        <div className="card-body">
          <form action="#">
            <div className="row">
              <div className="col-12">
                <label htmlFor="outing-date" className="form-label">
                  Outing Date
                </label>
                <input
                  type="date"
                  id="outing-date"
                  name="outingDate"
                  className="form-control mb-3"
                />
              </div>
              <div className="col-12">
                <label htmlFor="outing-reason" className="form-label">
                  Reason
                </label>
                <textarea
                  id="outing-reason"
                  name="outingReason"
                  rows="3"
                  className="form-control mb-3"
                  placeholder="Type the reason for the outing here"
                ></textarea>
              </div>
            </div>
            <div className="w-100">
              <input
                type="submit"
                value="Submit Outing Request"
                className="btn btn-primary w-50"
                style={{ margin: '5px 25%' }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OutingForm;

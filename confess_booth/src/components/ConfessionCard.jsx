import React from 'react'

const ConfessionCard = () => {
  return (
    <div className="col-12 col-sm-6 col-md-4 mt-2">
      <div className="card">
        <div className="card-header">
        <h4 className="card-title"> Sample card </h4>
        </div>
        <div className="card-body">
          <h6 className="card-text"> Sample description </h6>
        </div>
        <div className="card-footer">
          <button className="btn btn-dark"> Read more </button>
        </div>
      </div>
    </div>
  )
}

export default ConfessionCard
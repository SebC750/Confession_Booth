import React from 'react'
import API from "../api/api"
const api = new API(import.meta.env.VITE_API)
const ConfessionCard = ({data}) => {
  const handleAddLike = async () => {
    try{
        //const response = await api.
    }catch(e){
      console.log(e)
    }
  }
  return (
    <div className="col-12 col-sm-6 col-md-4 mt-2">
      <div className="card">
        <div className="card-header">
        <h4 className="card-title"> {data.title} </h4>
        </div>
        <div className="card-body">
          <h6 className="card-text"> {data.content} </h6>
        </div>
        <div className="card-footer">
          <button className="btn btn-success" onClick={() => handle}> <i class="bi bi-hand-thumbs-up-fill"></i> </button>
          <button className="btn btn-danger"> <i class="bi bi-hand-thumbs-up-fill"></i> </button>
        </div>
      </div>
    </div>
  )
}

export default ConfessionCard
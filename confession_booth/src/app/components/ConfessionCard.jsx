'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const ConfessionCard = ({id, title, content}) => {
  const router = useRouter()
  const handleOpenConfession = () => {
    router.push(`/confessions/${id}`)
  }
  return (
    <div className="card bg-slate-800 shadow-lg">
      <div className="card-body">
        <h5 className="card-title text-2xl text-yellow-500"> {title} </h5>
        <p className="text-yellow-500"> {content}</p>
        <div className="card-actions rounded-2xl justify-end">
          
          <button className="btn bg-yellow-500 text-black rounded-2xl" onClick={() => handleOpenConfession()}> <i className="bi bi-book-half"></i> Read more </button>
        </div>
      </div>
    </div>
  )
}

export default ConfessionCard
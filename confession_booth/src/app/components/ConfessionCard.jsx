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
        <div className="card-actions rounded-2xl justify-between items-center">
          <div className="flex items-center">
            <button className="btn btn-sm bg-transparent rounded-full border-0 shadow-none no-underline underline-offset-2 hover:underline"> <i className="bi bi-hand-thumbs-up-fill text-2xl text-success"></i> </button>
            <button className="btn btn-sm bg-transparent rounded-full border-0 shadow-none"> <i className="bi bi-hand-thumbs-down-fill text-2xl text-error"></i> </button>
          </div>
          <button className="btn bg-yellow-500 text-black rounded-2xl" onClick={() => handleOpenConfession()}> <i className="bi bi-book-half"></i> Read more </button>
        </div>
      </div>
    </div>
  )
}

export default ConfessionCard
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center text-base-content p-4">
      <aside>
        <p className="text-xs opacity-30">Father Joe's Booth, {new Date().getFullYear()} - All right reserved by Sebastian Chalarca</p>
      </aside>
    </footer>
  )
}

export default Footer
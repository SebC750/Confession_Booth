import React from 'react'
import Image from "next/image"
import Link from "next/link"
const Navbar = () => {
  return (
   <nav className="navbar bg-slate-800 justify-center gap-4"> 
      <Image src={"/cross.png"} height={50} width={50} alt="A cross icon for the website"/>
      <h1 className="text-yellow-500 font-bold text-5xl"> Father Joe's Booth</h1>
      <Link href="/" className="btn bg-yellow-500 rounded-2xl text-black border-0"> <i className="bi bi-archive-fill text-xl"></i> <span className="hidden lg:block"> Confession hub </span> </Link>
      <Link href="/new" className="btn bg-yellow-500 rounded-2xl text-black border-0"> <i className="bi bi-plus-circle-fill text-xl"></i> <span className="hidden lg:block"> Confess sin </span>  </Link>
   </nav>
  )
}

export default Navbar
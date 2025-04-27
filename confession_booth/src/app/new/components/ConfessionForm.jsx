import React from 'react'
import { useState } from 'react'
import Link from "next/link"
import { useRouter } from 'next/navigation';
const ConfessionForm = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
            title: '',
            content: '',
        })
    const handleSubmitConfession = async () => {
         try{
            await fetch(`${process.env.NEXT_PUBLIC_URL}/api/confessions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
         router.push("/");
         }catch(e){
            console.log("Error: ",e)
         }
    }
    return (
        <div>
            <Link href="/" className="font-bold text-yellow-500 text-3xl transition-all duration-200 hover:pl-3"> <i className="bi bi-arrow-left font-bold text-3xl"></i> Back </Link>
            <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="col-span-2">
                </div>
                <div className="col-span-2">
                    <div className="p-4 rounded-xl fade-in-animation">
                        <h3 className="text-4xl text-yellow-500 font-bold border-0 border-b-2 border-yellow-500"> What's on your mind? </h3>
                        <fieldset className="fieldset">
                            <label className="fieldset-label font-bold text-yellow-500 text-lg"> Title </label>
                            <input className="p-2 bg-slate-800 rounded-xl" type="text" value={formData.title} placeholder="Give this sin a name." onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))} required={true}/>
                            <label className="fieldset-label font-bold text-yellow-500 text-lg"> What is on your mind? </label>
                            <textarea className="textarea w-auto" value={formData.content} onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))} required={true} />
                        </fieldset>
                        <button className="btn mt-5 w-auto bg-yellow-500 text-black" onClick={() => handleSubmitConfession()}> Submit </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfessionForm
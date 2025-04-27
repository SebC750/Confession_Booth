'use client'
import React from 'react'
import { useState, useEffect } from "react"
import ConfessionCard from './ConfessionCard'
const ConfessionBoard = () => {
    const [confessions, setConfessions] = useState(null)
    const getConfessions = async () => {
        try {
            console.log("Now executing")
            const confessions = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/confessions`);
            const data = await confessions.json();
            console.log(data.data)
            setConfessions(data.data)
        } catch (e) {
            console.log("ERROR: ", e)
        }
    }
    useEffect(() => {
        console.log(process.env.NEXT_PUBLIC_URL)
        async function getData() { getConfessions() }
        getData()
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {confessions ? (<>
                {confessions.length > 0 ? (<>
                    {confessions.map((confession) => (
                        <div key={confession.id}>
                            <ConfessionCard id={confession.id} title={confession.title} content={confession.content} />
                        </div>
                    ))}
                </>) : <p className="text-yellow-500 text-xl"> No confessions for today! </p>}
            </>) : <span className="loading loading-dots loading-xl text-yellow-500"> </span>}

        </div>
    )
}

export default ConfessionBoard
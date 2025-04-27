import React from 'react'
import Link from "next/link"

export const dynamic = "force-dynamic";

async function getConfession(id) {
    try {
        const confession = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/confessions/${id}`)
        if (!confession.ok) {
            throw new Error(`Failed to fetch confession. Status: ${confession.status}`);
        }
        const data = await confession.json();
        return data.data
    } catch (e) {
        console.log("Error: ", e)
    }
}
export default async function Confession({ params }) {
    const id = params.id
    const data = await getConfession(id);
    return (
        <div className="m-20 h-[600px]">
            {data ? (<>
                <h3 className="text-yellow-500 text-4xl border-0 border-b-2 border-yellow-500"> {data.title} </h3>
                <p className="p-5"> {data.content} </p>
                <Link href="/" className="btn bg-yellow-500 text-black rounded-2xl"> <i className="bi bi-arrow-left font-bold text-3xl"></i> Back to confession board </Link>
            </>) : <span className="loading loading-dots loading-xl"> </span>}
        </div>
    )
}

export async function generateStaticParams() {
    return [];
}
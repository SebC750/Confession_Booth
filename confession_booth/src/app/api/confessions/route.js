import db from "./db"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const docs = await db.collection("confessions").get()
        const results = await docs.docs.map((confession) => ({
            id: confession.id,
            ...confession.data()
        }))
        return NextResponse.json({ data: results }, { status: 200 })
    } catch (e) {
        console.log("Error: ", e)
        return NextResponse.json({ message: "SERVER ERROR: " + e }, { status: 500 })
    }
}

export async function POST(req) {
    try {
        const { title, content } = await req.json()
        await db.collection("confessions").doc().set({
            title: title,
            content: content
        })
        return NextResponse.json({ message: "Successfully submitted" }, { status: 200 })
    } catch (e) {
        console.log("Error: ", e)
        return NextResponse.json({ message: "SERVER ERROR: " + e }, { status: 500 })
    }
}
import db from "../db"
import { NextResponse } from "next/server"

export async function GET(request, {params}) {
    try {
        const id = params.id;
        const doc = await db.collection("confessions").doc(id).get()
        return NextResponse.json({ data: doc.data() }, { status: 200 })
    } catch (e) {
        return NextResponse.json({ message: "SERVER ERROR: " + e }, { status: 500 })
    }
}
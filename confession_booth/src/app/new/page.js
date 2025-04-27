'use client'
import React from 'react'
import ConfessionForm from "./components/ConfessionForm"
import { useState } from 'react'
export default function New() {
    return (
        <div className="h-[680px]">
            <div className="m-20">
                <ConfessionForm />
            </div>
        </div>
    )
}
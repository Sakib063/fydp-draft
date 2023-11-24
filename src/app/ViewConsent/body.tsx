"use client";

import React from 'react';
import { useState } from "react";

export default function Main() {
    const [doctor,setDoctor]=useState('');
    return (
        <main>
            <div className="w-1/2 border-blue-700 border-2 rounded-md mx-auto my-20">
                <div className="flex items-center justify-center py-10 flex-col">
                    <div className="mb-4">
                        <form action="">
                            <label htmlFor="patientId" className="text-sm text-black float-left w-32">Patient ID</label>
                            <input type="text" id="patientId" className="border border-blue-700 rounded p-1 text-sm flex-1" required />
                            <br />
                            <button type="submit" className="bg-blue-500 text-white rounded-full p-2 my-6 mx-10 w-40">Ok</button>
                        </form>
                    </div>
                    <div className="w-1/2 border-blue-700 border-2 rounded-md p-4 mx-auto my-20">
                        <p>Doctor ID</p>
                        <br />
                        <p>Doctor Name</p>
                        <br />
                        <button type="submit" className="bg-red-500 text-white rounded-full p-2 w-40 hover:bg-red-700">Remove Access</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

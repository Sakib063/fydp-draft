import React from 'react';

export default function Main() {
    return (
        <main>
            <div className="text-4xl text-center font-bold pt-20">
                <h1>EHR Sharing Consent Form</h1>
                <p className="text-blue-500 dark:text-blue-400"></p>
                <hr className="w-48 h-1 mx-auto my-4 bg-blue-100 border-0 rounded md:my-10 dark:bg-blue-700" />
                <p className="text-blue-500 dark:text-blue-400"></p>
            </div>
            <div className="w-1/2 border-blue-700 border-2 rounded-md mx-auto my-20">
                <div className="flex items-center justify-center">
                    <form className="py-10 flex-col">
                        <div className="mb-4">
                            <label htmlFor="patientId" className="text-sm text-black float-left w-32">Patient ID</label>
                            <input type="text" id="patientId" className="border border-blue-700 rounded p-1 text-sm flex-1" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="doctorId" className="text-sm text-black float-left w-32">Doctor ID</label>
                            <input type="text" id="doctorId" className="border border-blue-700 rounded p-1 text-sm flex-1" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="doctorName" className="text-sm text-black float-left w-32">Doctor's Name</label>
                            <input type="text" id="doctorName" className="border border-blue-700 rounded p-1 text-sm flex-1" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="text-sm text-black float-left w-32">Phone</label>
                            <input type="text" id="phone" className="border border-blue-700 rounded p-1 text-sm flex-1" required />
                        </div>
                        <div className="flex items-center justify-center mb-4 pt-4">
                            <button type="submit" className="bg-blue-500 text-white rounded-full p-2 w-40 hover:bg-blue-700">Consent</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
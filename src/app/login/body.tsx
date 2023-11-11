import React from 'react'

function body() {
  return (
    <main>
        <div className="text-4xl text-center font-bold pt-20">
            <h1>Login Here</h1>
            <p className="text-blue-500 dark:text-blue-400"></p>
            <hr className="w-48 h-1 mx-auto my-4 bg-blue-100 border-0 rounded md:my-10 dark:bg-blue-700" />
            <p className="text-blue-500 dark:text-blue-400"></p>
        </div>
        <div className="w-1/2 border-blue-700 border-2 rounded-md mx-auto my-20">
            <div className="flex items-center justify-center py-10 flex-col">
            <form className="py-10 flex-col">
                <div className="mb-4">
                    <label htmlFor="nid" className="text-sm text-black float-left w-32">National ID</label>
                    <input type="text" id="nid" className="border border-blue-700 rounded p-1 text-sm flex-1" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="text-sm text-black float-left w-32">Password</label>
                    <input type="password" id="password" className="border border-blue-700 rounded p-1 text-sm flex-1" required />
                </div>
                <div className="flex items-center justify-center mb-4 pt-4">
                    <button type="submit" className="bg-blue-500 text-white rounded-full p-2 w-40 hover:bg-blue-700">Login</button>
                </div>
            </form>
            <p>Don't have an account? <a className="text-blue-700" href="/registration">Click Here</a> to sign up!</p>
            <p><a className="text-blue-700" href="">Forgot Password?</a></p>
            </div>
        </div>
    </main>
  )
}

export default body
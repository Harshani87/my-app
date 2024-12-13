"use client";

import { useState } from "react";

// client component for CSR
export default function LoginForm({title}) {
  const [email, setEmaill] = useState("");
  const [password, setpassword] =useState("");
  const handlesubmit = (e)=>{
    e.preventDefault();
console.log ("Form Data:",{email:email,password:password});
  }
  return (
    <div className="w-[400px] mx-auto bg-blue-200">
    <div className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
      <form action="#" onSubmit={handlesubmit}     className="space-y-5">
        {/*title*/}
        <h3 className="text-center text-xl font-semibold text-gray-900 font-mono">
          {title}
        </h3>
        {/*email*/}
        <div>
          <label
            htmlFor="email"
            className="text-3m font-medium text-gray-900 block mb-1"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmaill(e.target.value)}
            placeholder="enter your email"
            className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-offset-2 to-blue-800 focus:border-blue-900 block w-full p-2.5"
          />
        </div>
        {/*password*/}
        <div>
          <label
            htmlFor="password"
            className="text-4m font-medium text-gray-900 block mb-1"
          >
            Password
          </label>
          <input
            type="password"
            name="Password"
            id="Password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            placeholder="**********"
            className="bg-gray-50  border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-offset-2 to-blue-800 focus block w-full p-2.5"
          />
        </div>
        {/* remember me */}
        <div className="flex justify-between">
          <div className="flex flex-row">
            <div className="flex items-center h-5">
              <input
                id="Remember"
                type="checkbox"
                className="bg-gray-50 border border-gray-300 focus:ring 3 focus:ring-blue-300 h-4 w-4 round"
              />
            </div>
            <div className="text-mediam ml-3">
              <label
                htmlFor="Remenber"
                className="font-medium text-gray-900"
              >
                Remeber Me
              </label>
            </div>
          </div>
          <a
            href="/forget-password"
            className="text-sm to-blue-900 hover:underline ml-auto"
          >
            Forget Password?
          </a>
        </div>
        {/* submit button */}
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:rign-4 focus:rign-blue-300 rounded-r-lg font-medium px-5"
        >
          SIGN IN
        </button>

        <div className=" flex justify-center text-sm font-medium text-gray-500 space-x-2">
          Not Registered? {""}
          <a href="/register" className="text-blue-700 hover:underline">
            Create an account
          </a>
        </div>
      </form>
    </div>
  </div>
  )
}

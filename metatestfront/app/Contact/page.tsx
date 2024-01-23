'use client'

import React from 'react'

const page = () => {
  return (
    <div className=" mt-32  h-[calc(100vh-523px)]   max-w-[1000px] mx-auto">
        <form className="flex flex-col items-start  px-20  justify-start ">

    <label className="mb-2 text-white  font-bold">Full name</label>
    <input
        type="text"
        placeholder="Full name"
        className="w-full px-4 py-2 mb-4 bg-[#1E2E5C] border border-white rounded-[10px] focus:outline-none"
    />

    <label className="mb-2 text-white  font-bold">Email</label>
    <input
        type="email"
        placeholder="Johnmayer@gmail.com"
        className="w-full px-4 py-2  bg-[#1E2E5C] border border-white mb-4  rounded-[10px] focus:outline-none"
    />

    <label className="mb-2 text-white   font-bold">Message</label>
    <textarea
        placeholder="..."

        className="w-full px-4  h-36 py-2 mb-4 bg-[#1E2E5C] border border-white rounded-[10px]  focus:outline-none resize-none"
    ></textarea>
    <button className='bg-[#2E8544] text-white ml-auto mr-0 px-8 py-1 rounded-[13px]'>
        Save
    </button>
    </form>
    </div>

  )
}

export default page;
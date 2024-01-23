import React from 'react'

export default function Contact() {
  return (
    <div className='pt-20 '>
        <h2 className='text-white text-3xl pb-4'>
            Contact Us
        </h2>
        <div className='flex gap-4'>
            <div className='flex flex-col gap-4'>
                <input className=' rounded-[11px] p-2' type='text' placeholder='Your Name'>
                </input>
                <input className=' rounded-[11px] p-2' type='text' placeholder='Your Email'>
                </input>
                
            </div>
            <div className='h-[97px] '>
                <textarea className='h-full rounded-[11px] resize-none p-4' name="enter" id="" cols={30} placeholder='Your Message'></textarea>
            </div>

        </div>
        <div className='flex justify-end my-5'>
            <button className='bg-[#1E2E5C] p-1 px-5 mb-2 text-white rounded-[10px]'>
                Send
            </button>
        </div>
    </div>
  )
}

"use client"
import Image from 'next/image'
import React from 'react'
import Contact from './Contact'

export default function Footer() {
  return (
       <div  style={{ backgroundImage: `url("./contactbg.svg")`, backgroundSize: 'cover' }}>

        <div className='flex items-end justify-between max-w-[1440px] mx-auto  px-6'>
            <div className='flex gap-4 pt-20 py-10'>
                <Image src="./Google_black.svg" alt='#' height={42} width={41} />
                <Image src="./Facebook_black.svg" alt='#' height={42} width={41} />
                <Image src="./LinkedIN_black.svg" alt='#' height={42} width={41} />
                <Image src="./Instagram_black.svg" alt='#' height={42} width={41} />
                <Image src="./Skype_black.svg" alt='#' height={42} width={41} />
                <Image src="./Twitter.svg" alt='#' height={42} width={41} />
            </div>
            <div className='flex gap-4'>
                <Contact/>
            </div>
        </div>
       </div>
  )
}

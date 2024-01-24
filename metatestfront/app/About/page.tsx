'use client'

import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <main className='text-white'>
       <section  className='relative '>
        <div className='flex   items-end justify-between max-w-[1300px] mx-auto'>   
          <div  >
        <div  className="flex justify-evenly mt-10 py-24 px-10  ">
          <div className="flex items-center gap-12">
            <h1 className="text-8xl mt-20 ">
            Who <br/> are <br/> we?
            </h1>
            <p className='flex text-2xl text-justify leading-loose mt-20'>
            At Test, we are a mental health services provider dedicated to supporting individuals during challenging times. Founded in 2021, in the wake of the post-COVID-19 pandemic, we recognized the increasing prevalence of depression and the importance of accessible mental health care. We are committed to offering convenient and personalized services in the comfort of your home.
            </p>
          </div>
        </div> 
        <p className='text-2xl mt-20 mx-auto leading-loose text-justify'>
        Our mission is to empower individuals to prioritize their mental well-being by providing accessible and high-quality mental health services. We envision a world where everyone has the opportunity to achieve mental wellness and lead fulfilling lives.
        </p>
        </div>
        <Image  className = '' src="./aboutMale.svg" alt = "#" width={300} height={500}>

        </Image>
        
        </div> 
        <div className=' w-screen h-[600px]  top-[100px] absolute -z-40 left-0 right-0    'style={{ backgroundImage: `url("./bggg.svg")`, backgroundSize: "cover" }}>  
        </div>
     
      </section>

      <section className=' max-w-[1300px] mt-10 text-2xl mx-auto leading-loose text-justify'>
        <p>
        Test offers a comprehensive suite of mental health services tailored to meet your individual needs. Our team of experienced and compassionate mental health professionals provides therapy, counseling, and support for a variety of concerns, including depression, anxiety, and substance abuse. We combine evidence-based practices with a client-centered approach to ensure personalized care that promotes growth, healing, and resilience.
        </p>
      </section>

      <section className='mt-20 flex justify-between max-w-[1300px] mx-auto'>
        <div>
        <Image  className = '' src="./aboutMiddleFemale.svg" alt = "#" width={800} height={500}>

        </Image>
        </div>
        <div className='text-2xl flex flex-col gap-8 mx-auto leading-loose '>
          <p className='text-justify'>
          Our team consists of licensed therapists and counselors who are passionate about mental health and have extensive experience in their respective fields. They possess diverse backgrounds and specialized training in various therapeutic modalities. Our professionals are committed to providing a safe and supportive environment where you can explore your thoughts and emotions, and work towards positive change.          </p>
          <p>
          We understand the importance of privacy and confidentiality in the therapeutic process. At Bimo Health, we adhere to strict privacy standards and follow legal and ethical guidelines to safeguard 
          your personal information. Your privacy is our utmost priority, ensuring a safe and confidential     
          space for you to share and grow.
          </p>
        </div>
      </section>
            
      <section  className='relative mb-40 '>
        <div className='flex   items-end justify-between max-w-[1300px] mx-auto'>   
          <div  >
        <div className="flex justify-evenly mt-10 py-24 px-10  ">
          <div className="flex flex-col items-center gap-12">
            <h1 className="text-8xl mt-8 ">
            Our Purpose
            </h1>
            <p className='flex text-2xl leading-loose'>
            At Test, we are a mental health services provider dedicated to supporting individuals during challenging times. Founded in 2021, in the wake of the post-COVID-19 pandemic, we recognized the increasing prevalence of depression and the importance of accessible mental health care. We are committed to offering convenient and personalized services in the comfort of your home.
            </p>
          </div>
        </div> 
        </div>
        <Image  className = 'mb-[-100px]' src="./aboutFemalLast.svg" alt = "#" width={250} height={400}>

        </Image>
        
        </div> 
        <div className=' w-screen h-[600px]  top-[100px] absolute -z-40 left-0 right-0    'style={{ backgroundImage: `url("./bggg.svg")`, backgroundSize: "cover" }}>  
        </div>
     
      </section>
      <section className='flex text-2xl max-w-[1300px] mx-auto text-justify leading-loose'>
        <p>
        We understand that seeking care for mental health concerns can be challenging, with various barriers that can prevent individuals from receiving the support they need. That's why we are dedicated to removing those barriers and making mental health care more accessible to all. Whether it's geographical limitations, financial constraints, or stigmas surrounding mental health, we strive to bridge the gaps and create a safe and inclusive space where individuals can seek help without hesitation or obstacles.<br/>
Equally important to us is easing the burdens for those delivering care. We recognize the immense dedication and compassion required from mental health professionals who work tirelessly to support individuals on their journey to recovery. By leveraging technology and innovative solutions, we aim to streamline and enhance the mental health care delivery process, empowering our dedicated professionals to focus on what they do best: helping individuals find their way back to themselves.<br/>
We firmly believe that the right technology can transform lives. By harnessing the power of digital tools, we can extend our reach and impact, ensuring that individuals can access mental health resources anytime, anywhere. Whether through online counseling, teletherapy options, or user-friendly platforms, we embrace technology as a means to enhance the lives of people who are seeking a way back to themselves.<br/>
Our purpose is to create a harmonious connection between compassionate care, cutting-edge technology, and the individuals we serve. We are driven by the conviction that everyone deserves the opportunity to prioritize their mental well-being and discover a path to inner peace and fulfillment. At Bimo Health, we are dedicated to making a meaningful difference in the lives of those who need it most, one step at a time.
        </p>
      </section>
    </main>
  )
}

export default page;
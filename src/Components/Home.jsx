import React from 'react'
import student from '/srudent_img.webp'
import map from '/map.webp'

function Home() {
  return (
    <div className='flex w-full  justify-between relative h-[700px]' >
      <div className="bg absolute top-0 w-full h-[90%] ">
        <img src={map} alt="" className='w-full h-[90%] object-cover' />
      </div>
      <div className="left w-[50%] z-10 flex flex-col gap-5 justify-center items-center h-[550px] ">
        <h1 className='text-5xl text-[#2c3a43] mx-auto font-extrabold '>Get Right Career  Options<br /> With   Scientific Career <br />Counselling</h1>
        <div className="line w-full border-b-2 border-[#2c3a43] "></div>
        <div className="animation text-3xl font-bold text-violet-900 ">
          Get Started
        </div>
        <a href="/career-guidance">
          <div className="btn bg-red-300 px-5 py-2 text-xl font-semibold rounded-3xl hover:scale-[1.1] hover:bg-orange-400 hover:tedxt-[#2c3a42] transition-all duration-200">Choose Your Career</div>
        </a>
      </div>
      <div className="right z-10">
        <img src={student} alt="" />
      </div>
    </div>
  )
}

export default Home

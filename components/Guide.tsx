import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/parklink-logo.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Parking made simple
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Navigate to Your Spot</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">With Parklink, you'll find your way to the best parking spots without hassle. Our app provides real-time availability and directions, even without an internet connection. Share the convenience with friends and family for a smooth experience, from downtown to event venues.</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/car.png"
          alt="parking"
          width={1440}
          height={500}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="navigation"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">5 min</p>
              </div>
              <p className="bold-20 mt-2">Downtown Plaza</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Current Location</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Your Position</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide

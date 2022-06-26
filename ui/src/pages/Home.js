import React from 'react'
// import { VideoCameraIcon } from '@heroicons/react/solid'

export default function Home () {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
              Hello world!
      </h1>
      <a
        className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center">
        <span className='ml-2 h-10 w-10 text-3xl'>
              &#x1F37A;
        </span>
        <p className="mt-2 text-gray-500 tracking-wide">Click to record you first drink!</p>
      </a>
      <a
        className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center">
        <span className='ml-2 h-10 w-10 text-3xl'>
            &#x1F37B;
        </span>
        <p className="mt-2 text-gray-500 tracking-wide">Click to record you last drink!</p>
      </a>
    </>
  )
}

'use client'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Image from 'next/image'

export default function Home() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/courses')
      .then((res) => res.json())
      .then(({ ok, data }) => {
        if (ok) {
          setCourses(data)
        } else {
          Swal.fire({ title: 'Ups', html: 'You are retarded', icon: 'error' })
        }
      })
      .catch((err) => console.log(err))
  }, [])

  console.log(courses)

  return (
    <div>
      <h1 className='text-amber-600 font-bold text-5xl p-3'>
        Mis imagenes de gatitos 😿
      </h1>
      {courses.map((c) => (
        <div
          className='p-3 mt-5 ml-3 bg-gray-500 flex justify-between w-200 rounded-xs'
          key={c._id}
        >
          <div>
            <Image
              src={c.thumbnail}
              alt='Picture of the author'
              width='200'
              height='100'
              className='rounded-xl mt-35'
            />
          </div>
          <div className='w-140 flex flex-col'>
            <h3 className='text-4xl m-2 font-bold'>{c.name}</h3>
            <p className='m-2 text-white font-bold text-wrap'>
              Esta es una foto de un gatito totalmente anonadado por la porción
              de pizza que yace frente a él.
            </p>
            <video src={c.videos[0].videoUrl} controls></video>
          </div>
        </div>
      ))}
    </div>
  )
}

// className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'

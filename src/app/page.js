'use client'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import CardCourse from '../componentes/CardCourse'
import Header from '../componentes/Header'
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

  return (
    <div className='flex flex-col items-center'>
      <Header />
      {courses.map((c) => (
        <CardCourse course={c} key={c._id} />
      ))}
    </div>
  )
}

// className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'

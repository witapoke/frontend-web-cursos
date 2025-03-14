import { useRouter } from 'next/navigation'
import React from 'react'

export default function Header() {
  const router = useRouter()

  return (
    <div className='flex bg-gray-800 w-full justify-between px-6 py-1'>
      <h1
        className='text-amber-600 font-bold text-5xl p-3 cursor-pointer'
        onClick={() => router.back()}
      >
        Tu primer web de cursos 🧠
      </h1>
      <button className='text-white cursor-pointer'>Iniciar sesión</button>
    </div>
  )
}

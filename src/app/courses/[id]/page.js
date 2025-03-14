'use client'
import CardCourse from '@/componentes/CardCourse'
import Header from '../../../componentes/Header'
import { useEffect, useState } from 'react'

export default function CourseDetail({ params }) {
  const [courseID, setCourseID] = useState()
  const [cursoEntero, setCursoEntero] = useState({})

  async function getParams() {
    const parametros = await params
    const { id } = parametros
    setCourseID(id)
  }

  useEffect(() => {
    getParams()
    const courseFromLocalStorage = JSON.parse(localStorage.getItem('Curso'))
    setCursoEntero(courseFromLocalStorage)
  }, [])

  return (
    <div>
      <Header />
      <CardCourse course={cursoEntero} />
    </div>
  )
}

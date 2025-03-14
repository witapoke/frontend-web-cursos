import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function CardCourse({ course }) {
  const { thumbnail, _id, description, name } = course

  const router = useRouter()
  const handleClick = () => {
    router.push(`/courses/${_id}`)
    localStorage.setItem('Curso', JSON.stringify(course))
  }
  return (
    <div
      onClick={handleClick}
      className='bg-white flex w-250 mt-9 h-50 p-3 gap-2 max-sm:w-80 max-sm:h-120
    max-lg:flex-col max-lg:w-105 max-lg:h-102 max-lg:items-center transform  hover:scale-110 transition duration-300 shadow-red-900 shadow-mine'
    >
      <img
        src={thumbnail}
        alt='Image taken from my DB'
        className='h-44 w-72 max-lg:w-full max-lg:h-40'
      />
      <section className='flex flex-col bg-amber-400 text-center max-sm:h-70 max-sm:w-70'>
        <h3 className='font-bold text-2xl mx-2 mt-4'>{name}</h3>
        <p className='text-wrap text-xl m-2 font-medium max-sm:text-sm max-sm:mt-4'>
          {description}
        </p>
      </section>
    </div>
  )
}

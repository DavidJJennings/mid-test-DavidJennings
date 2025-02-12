import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar/Navbar'

const Root = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center relative'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Root

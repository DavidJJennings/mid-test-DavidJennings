import { NavbarRouteName } from '@/constants/RouteName'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <div className='flex flex-col bg-base-100 fixed top-0 px-24 pt-6'>
      <div role='tablist' className='tabs tabs-boxed'>
        {Object.entries(NavbarRouteName).map(([key, path]) => (
          <Link
            key={key}
            to={path}
            role='tab'
            className={`tab ${pathname === path ? 'tab-active' : ''}`}
          >
            <p className='font-medium capitalize'>{key.toLowerCase()}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar

import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className='text-card font-medium text-lg w-full flex flex-row justify-around items-center align-middle'>
      {/* Link 1 */}
      <div>
        <Link
          href=''
        >
          Home
        </Link>
      </div>

      {/* Link 2 */}
      <div>
        <Link
          href=''
        >
          About Us
        </Link>
      </div>

      {/* Link 3 */}
      <div>
        <Link
          href=''
        >
          Services
        </Link>
      </div>

      {/* Link 4 */}
      <div>
        <Link
          href=''
        >
          Portfolio
        </Link>
      </div>
    </div>
  )
}

export default Menu

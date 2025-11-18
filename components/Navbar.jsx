
const Navbar = () => {
  function HamburgerIcon({ color }){
    return(
      <svg 
        className={`w-10 h-9/10 ${color}`}
        viewBox='0 0 24 24' 
        fill='none' 
        stroke='currentColor'
      >
        <line x1='3' y1='6' x2='21' y2='6' strokeWidth='2' />
        <line x1='3' y1='12' x2='21' y2='12' strokeWidth='2' />
        <line x1='3' y1='18' x2='21' y2='18' strokeWidth='2' />
      </svg>
    )
  }

  function Profile({color}){
    return(
      <svg 
        className={`w-10 h-9/10 ${color}`}
        viewBox='0 0 24 24' 
        fill='none' 
        stroke='currentColor'
        strokeWidth='1.5'
      >
        <circle cx='12' cy='12' r='10' />
        <circle cx='12' cy='9' r='3' />
        <path d='M6.5 18.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5' />
      </svg>
    )
  }

  return (
    <nav className='flex flex-row justify-between'>
      <HamburgerIcon color='text-gray-300'/>

      <h1 className='text-3xl font-serif text-gray-100'>News Pro</h1>

      <Profile color='text-gray-300' />
    </nav>
  )
}

export default Navbar
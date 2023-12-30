import { Link } from 'react-router-dom'
import companyLogo from '../../assets/main.logo.png'




const NavBar = () => {
  const navoption = <>
   <li>
        <Link>Home</Link>
    </li>
    <li>
        <Link>Contuct Us</Link>
    </li>
    <li>
        <Link>Appoinment</Link>
      </li>
  </>
  return (
    <div className="navbar bg-base-300 text-base-content">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navoption}
      </ul>
    </div>
    <img src={companyLogo} className='w-[35px] h-[35px] rounded' />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navoption}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
  )
}

export default NavBar
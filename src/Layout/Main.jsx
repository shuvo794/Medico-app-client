
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
import NavBar from '../Shared/Navbar/NavBar'

function Main() {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
    

  )
}

export default Main
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { Outlet, useLocation } from 'react-router-dom';
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Main = () => {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('signin') || location.pathname.includes('signUp')
    return (
        <div>
            {
                noHeaderFooter || <NavBar></NavBar>
            }

            <Outlet></Outlet>
            {
                noHeaderFooter || <Footer></Footer>
            }
            <ScrollToTop></ScrollToTop>
        </div>
    );
};

export default Main;
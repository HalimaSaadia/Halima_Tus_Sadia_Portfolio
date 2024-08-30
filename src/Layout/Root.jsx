
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';





const Root = () => {
  
    return (
        <div className='text-[#d6d6d6f1]'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
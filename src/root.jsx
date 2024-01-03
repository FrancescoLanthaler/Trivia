import { Outlet, Link } from "react-router-dom";
import { Navbar, Footer } from './layout.jsx';
import './css/layout.css';


function Root() {
    return (
        <div>
            <Navbar />
            <div className="body">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Root;
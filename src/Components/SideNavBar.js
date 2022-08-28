import { NavLink } from 'react-router-dom';
import "../Assets/styles/global.css"
import "../Assets/styles/SideNavBar.css"
import '../Assets/js/SideBtn'
import AuthContext from '../Auth/AuthContect';
import { useContext } from 'react';
export default function SideNavBar() {

    const { logoutUser } = useContext(AuthContext);
    return (
        <>

            <div class="sidebar">

                <div class="logo-details">
                    <i class='bx bxl-c-plus-plus'></i>
                    <span class="logo_name">super link</span>
                </div>
                <ul class="nav-links">

                    <li>

                        <NavLink to='/' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i class='bx bxs-home-smile'></i><span class="links_name">home</span></NavLink>

                    </li>
                    <li>

                        <NavLink to='/Producer' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i class='bx bx-box'></i><span class="links_name">Producer List</span></NavLink>
                    </li>
                    <li>

                        <NavLink to='/OrderList' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i class='bx bx-list-ul'></i><span class="links_name">Order list</span></NavLink>
                    </li>
                    <li>

                        <NavLink to='/EmployeeList' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i class='bx bx-book-alt'></i><span class="links_name">Employee list</span></NavLink>
                    </li>

                    <li>

                        <NavLink to='/Delivery' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i class="fa-solid fa-truck-pickup"></i><span class="links_name">Delivery </span></NavLink>

                    </li>
                    {/* <li>

                        <NavLink to='/carts' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i class='bx bxs-cart-alt'></i><span class="links_name">Cart</span></NavLink>
                    </li> */}

                    <li>

                        <NavLink to='/Supplier' className={({ isActive }) => (isActive ? 'links_name' : 'links_name')}><i class="fa-solid fa-boxes-stacked"></i><span class="links_name">Supplier</span></NavLink>
                    </li>

                    <li>



                        <button className="links_name" type="button" onClick={logoutUser}><i class='bx bx-log-in-circle'></i><span class="links_name">Log out</span> </button>

                    </li>
                </ul>

            </div>

        </>
    )
}
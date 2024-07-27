import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

function Header() {
    return (
        <>
            <div id="header">
                <nav className="navbar justify-content-between p-0">
                    <div className="ps-3">
                        <Link to="/customers">
                            <Logo />
                            {/* <img src="./assets/sample-logo" width="30" height="30" className="d-inline-block align-top" alt="" />*/}
                        </Link>
                    </div>

                    <div className="d-flex flex-row mt-2">
                        <Link className="p-2 nav-button" to="/customers">All Customers</Link>
                        <Link className="p-2 pe-3 nav-button" to="/customers/new/details">Add Customer</Link>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;

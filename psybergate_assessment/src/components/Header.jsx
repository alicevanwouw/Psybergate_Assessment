import Logo from './Logo';
function Header() {
    return (
        <>
            <div id="header">
                <nav className="navbar justify-content-between p-0">
                    <div className="ps-3">
                        <a className="" href="./customers">
                            <Logo />
                           {/* <img src="./assets/sample-logo" width="30" height="30" className="d-inline-block align-top" alt="" />*/}
                        </a>
                    </div>
                    
                    <div className="d-flex flex-row mt-2">
                        <a className="p-2 nav-button" href="..">All Customers</a>
                       <a className="p-2 pe-3 nav-button" href="../customers/new/details">Add Customer</a>
                    </div>
                </nav>
            </div>
        </>
        
    )
}

export default Header;
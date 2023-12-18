import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    {/* <!-- Spinner Start --> */}
        {/* <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" role="status"></div>
        </div> */}
        {/* <!-- Spinner End --> */}

        {/* <!-- Topbar Start --> */}
        <div className="container-fluid topbar-top bg-primary">
            <div className="container">
                <div className="d-flex justify-content-between topbar py-2">
                    <div className="d-flex align-items-center flex-shrink-0 topbar-info">
                        <Link to="#" className="me-4 text-secondary"><i className="fas fa-map-marker-alt me-2 text-dark"></i>123 Street, CA, USA</Link>
                        <Link to="#" className="me-4 text-secondary"><i className="fas fa-phone-alt me-2 text-dark"></i>+01234567890</Link>
                        <Link to="#" className="text-secondary"><i className="fas fa-envelope me-2 text-dark"></i>Example@gmail.com</Link>
                    </div>
                    <div className="text-end pe-4 me-4 border-end border-dark search-btn">
                        <div className="search-form">
                            <form method="post" action="index.html">
                                <div className="form-group">
                                    <div className="d-flex">
                                        <input type="search" className="form-control border-0 rounded-pill" name="search-input" value="" placeholder="Search Here" required=""/>
                                        <button type="submit" value="Search Now!" className="btn"><i className="fa fa-search text-dark"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center topbar-icon">
                        <Link to="#" className="me-4"><i className="fab fa-facebook-f text-dark"></i></Link>
                        <Link to="#" className="me-4"><i className="fab fa-twitter text-dark"></i></Link>
                        <Link to="#" className="me-4"><i className="fab fa-instagram text-dark"></i></Link>
                        <Link to="#" className=""><i className="fab fa-linkedin-in text-dark"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Topbar End --> */}


        {/* <!-- Navbar Start --> */}
        <div className="container-fluid bg-dark">
            <div className="container">
                <nav className="navbar navbar-dark navbar-expand-lg py-lg-0">
                    <Link to="/" className="navbar-brand">
                        <h1 className="text-primary mb-0 display-5">Pest<span className="text-white">Kit</span><i className="fa fa-spider text-primary ms-2"></i></h1>
                    </Link>
                    <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-dark"></span>
                    </button>
                    <div className="collapse navbar-collapse me-n3" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/About" className="nav-item nav-link">About</Link>
                            <Link to="/Services" className="nav-item nav-link">Services</Link>
                            <Link to="/Projects" className="nav-item nav-link">Projects</Link>
                            <Link to="/Users" className="nav-item nav-link">Users</Link>
                            <div className="nav-item dropdown">
                                <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                <div className="dropdown-menu m-0 bg-primary">
                                    <Link to="/Price" className="dropdown-item">Pricing Plan</Link>
                                    <Link to="/blog" className="dropdown-item">Blog Post</Link>
                                    <Link to="/group" className="dropdown-item">Team Members</Link>
                                    <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                                    <Link to="/PageNotFound" className="dropdown-item">404 Page</Link>
                                </div>
                            </div>
                            <Link to="/Contact" className="nav-item nav-link">Contact</Link>
                            <Link to="/cart" className="nav-item nav-link"><span className='bi bi-cart'>Cart</span></Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        {/* <!-- Navbar End --> */}
    </>
  )
}

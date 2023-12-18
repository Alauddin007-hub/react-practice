import React from 'react'

export default function Projects() {
  return (
    <>
        {/* <!-- Page Header Start --> */}
        <div className="container-fluid page-header py-5">
            <div className="container text-center py-5">
                <h1 className="display-2 text-white mb-4 animated slideInDown">projects</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-white" aria-current="page">projects</li>
                    </ol>
                </nav>
            </div>
        </div>
        {/* <!-- Page Header End --> */}


        {/* <!-- Project Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Project</h5>
                    <h1 className="display-5">Our recently completed projects</h1>
                </div>
                <div className="row g-5">
                    <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="project-item">
                            <div className="project-left bg-dark"></div>
                            <div className="project-right bg-dark"></div>
                            <img src="assets/img/project-1.jpg" className="img-fluid h-100" alt="img" />
                            <a href="" className="fs-4 fw-bold text-center">Whole Home Sanitizing</a>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                        <div className="project-item">
                            <div className="project-left bg-dark"></div>
                            <div className="project-right bg-dark"></div>
                            <img src="assets/img/project-2.jpg" className="img-fluid h-100" alt="img" />
                            <a href="" className="fs-4 fw-bold text-center">Education center Cleaning</a>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                        <div className="project-item">
                            <div className="project-left bg-dark"></div>
                            <div className="project-right bg-dark"></div>
                            <img src="assets/img/project-3.jpg" className="img-fluid h-100" alt="img" />
                            <a href="" className="fs-4 fw-bold text-center">Warehouse Cleaning</a>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="project-item">
                            <div className="project-left bg-dark"></div>
                            <div className="project-right bg-dark"></div>
                            <img src="assets/img/project-4.jpg" className="img-fluid h-100" alt="img" />
                            <a href="" className="fs-4 fw-bold text-center">Hospital Cleaning</a>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                        <div className="project-item">
                            <div className="project-left bg-dark"></div>
                            <div className="project-right bg-dark"></div>
                            <img src="assets/img/project-5.jpg" className="img-fluid h-100" alt="img" />
                            <a href="" className="fs-4 fw-bold text-center">Factory Cleaning</a>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                        <div className="project-item">
                            <div className="project-left bg-dark"></div>
                            <div className="project-right bg-dark"></div>
                            <img src="assets/img/project-6.jpg" className="img-fluid h-100" alt="img" />
                            <a href="" className="fs-4 fw-bold text-center">Furniture Sanitizing</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Project End --> */}
    </>
  )
}

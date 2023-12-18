import React from 'react'

export default function Testimonial() {
  return (
    <>
        {/* <!-- Page Header Start --> */}
        <div className="container-fluid page-header py-5">
            <div className="container text-center py-5">
                <h1 className="display-2 text-white mb-4 animated slideInDown">Testimonial</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-white" aria-current="page">Testimonial</li>
                    </ol>
                </nav>
            </div>
        </div>
        {/* <!-- Page Header End --> */}


        {/* <!-- Testiminial Start --> */}
        <div className="container-fluid testimonial py-5">
            <div className="container py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Testimonial</h5>
                    <h1 className="display-5 w-50 mx-auto">What Clients Say About Our Services</h1>
                </div>
                <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay=".5s">
                    <div className="testimonial-item">
                        <div className="testimonial-content rounded mb-4 p-4">
                            <p className="fs-5 m-0">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam quis tempor.</p>
                        </div>
                        <div className="d-flex align-items-center  mb-4" style={{padding: "0 0 0 25px"}}>
                            <div className="position-relative">
                                <img src="assets/img/testimonial-1.jpg" className="img-fluid rounded-circle py-2" alt="" />
                                <div className="position-absolute" style={{top: "33px", left: "-25px"}}>
                                    <i className="fa fa-quote-left rounded-pill bg-primary text-dark p-3"></i>
                                </div>
                            </div>
                            <div className="ms-3">
                                <h4 className="mb-0">Client Name</h4>
                                <p className="mb-1">Profession</p>
                                <div className="d-flex">
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-content rounded mb-4 p-4">
                            <p className="fs-5 m-0">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam quis tempor.</p>
                        </div>
                        <div className="d-flex align-items-center  mb-4" style={{padding: "0 0 0 25px"}}>
                            <div className="position-relative">
                                <img src="assets/img/testimonial-2.jpg" className="img-fluid rounded-circle py-2" alt="" />
                                <div className="position-absolute" style={{top: "33px", left: "-25px"}}>
                                    <i className="fa fa-quote-left rounded-pill bg-primary text-dark p-3"></i>
                                </div>
                            </div>
                            <div className="ms-3">
                                <h4 className="mb-0">Client Name</h4>
                                <p className="mb-1">Profession</p>
                                <div className="d-flex">
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-content rounded mb-4 p-4">
                            <p className="fs-5 m-0">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam quis tempor.</p>
                        </div>
                        <div className="d-flex align-items-center  mb-4" style={{padding: "0 0 0 25px"}}>
                            <div className="position-relative">
                                <img src="assets/img/testimonial-3.jpg" className="img-fluid rounded-circle py-2" alt="" />
                                <div className="position-absolute" style={{top: "33px", left: "-25px"}}>
                                    <i className="fa fa-quote-left rounded-pill bg-primary text-dark p-3"></i>
                                </div>
                            </div>
                            <div className="ms-3">
                                <h4 className="mb-0">Client Name</h4>
                                <p className="mb-1">Profession</p>
                                <div className="d-flex">
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-content rounded mb-4 p-4">
                            <p className="fs-5 m-0">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam quis tempor.</p>
                        </div>
                        <div className="d-flex align-items-center  mb-4" style={{padding: "0 0 0 25px"}}>
                            <div className="position-relative">
                                <img src="assets/img/testimonial-4.jpg" className="img-fluid rounded-circle py-2" alt="" />
                                <div className="position-absolute" style={{top: "33px", left: "-25px"}}>
                                    <i className="fa fa-quote-left rounded-pill bg-primary text-dark p-3"></i>
                                </div>
                            </div>
                            <div className="ms-3">
                                <h4 className="mb-0">Client Name</h4>
                                <p className="mb-1">Profession</p>
                                <div className="d-flex">
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Testiminial End --> */}
    </>
  )
}

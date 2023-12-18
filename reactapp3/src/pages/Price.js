import React from 'react'

export default function Price() {
  return (
    <>
        {/* <!-- Page Header Start --> */}
        <div className="container-fluid page-header py-5">
            <div className="container text-center py-5">
                <h1 className="display-2 text-white mb-4 animated slideInDown">Pricing Plan</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-white" aria-current="page">Pricing Plan</li>
                    </ol>
                </nav>
            </div>
        </div>
        {/* <!-- Page Header End --> */}


        {/* <!-- pricing Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Pricing</h5>
                    <h1 className="display-5 w-50 mx-auto">Affordable Pricing Plan For Pest Control Services</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="rounded bg-light pricing-item">
                            <div className="bg-primary py-3 px-5 text-center rounded-top border-bottom border-dark">
                                <h2 className="m-0">Basic</h2>
                            </div>
                            <div className="px-4 py-5 text-center bg-primary pricing-label mb-2">
                                <h1 className="mb-0">$60<span className="text-secondary fs-5 fw-normal">/mo</span></h1>
                                <p className="mb-0">Basic Pest Control</p>
                            </div>
                            <div className="p-4 text-center fs-5">
                                <p><i className="fa fa-check text-success me-2"></i>Household pests Control</p>
                                <p><i className="fa fa-check text-success me-2"></i>Rodent Control</p>
                                <p><i className="fa fa-check text-success me-2"></i>Re-Service at No-Charge</p>
                                <p><i className="fa fa-times text-danger me-2"></i>Termite Control</p>
                                <p><i className="fa fa-times text-danger me-2"></i>Mosquito Reduction</p>
                                <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-3">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                        <div className="rounded bg-light pricing-item">
                            <div className="bg-dark py-3 px-5 text-center rounded-top border-bottom border-primary">
                                <h2 className="m-0 text-primary">Standerd</h2>
                            </div>
                            <div className="px-4 py-5 text-center bg-dark pricing-label pricing-featured mb-2">
                                <h1 className="mb-0 text-primary">$80<span className="fs-5 fw-normal">/mo</span></h1>
                                <p className="mb-0 text-white">Standard Pest Control</p>
                            </div>
                            <div className="p-4 text-center fs-5">
                                <p><i className="fa fa-check text-success me-2"></i>Household pests Control</p>
                                <p><i className="fa fa-check text-success me-2"></i>Rodent Control</p>
                                <p><i className="fa fa-check text-success me-2"></i>Re-Service at No-Charge</p>
                                <p><i className="fa fa-check text-success me-2"></i>Termite Control</p>
                                <p><i className="fa fa-times text-danger me-2"></i>Mosquito Reduction</p>
                                <button type="button" className="btn btn-dark border-0 text-primary rounded-pill px-4 py-3 mt-3">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                        <div className="rounded bg-light pricing-item">
                            <div className="bg-primary py-3 px-5 text-center rounded-top border-bottom border-dark">
                                <h2 className="m-0">Premium</h2>
                            </div>
                            <div className="px-4 py-5 text-center bg-primary pricing-label mb-2">
                                <h1 className="mb-0">$120<span className="text-secondary fs-5 fw-normal">/mo</span></h1>
                                <p className="mb-0">Premium Pest Control</p>
                            </div>
                            <div className="p-4 text-center fs-5">
                                <p><i className="fa fa-check text-success me-2"></i>Household pests Control</p>
                                <p><i className="fa fa-check text-success me-2"></i>Rodent Control</p>
                                <p><i className="fa fa-check text-success me-2"></i>Re-Service at No-Charge</p>
                                <p><i className="fa fa-check text-success me-2"></i>Termite Control</p>
                                <p><i className="fa fa-check text-success me-2"></i>Mosquito Reduction</p>
                                <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-3">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Pricing End --> */}
    </>
  )
}

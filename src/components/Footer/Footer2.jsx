import React from 'react'

export const Footer2 = () => {
    return (
        <div>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom "
                    style={{ backgroundColor: "#274E91", color: "white" }}
                >
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a
                            href="https://www.facebook.com/ssit.gandhinagar/"
                            className="me-4 text-reset"
                        >
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="https://www.ssit.co.in/" className="me-4 text-reset">
                            <i className="fab fa-google" />
                        </a>
                        <a
                            href="https://www.instagram.com/ssit.gandhinagar/"
                            className="me-4 text-reset"
                        >
                            <i className="fab fa-instagram" />
                        </a>
                    </div>
                </section>
                <section className="foot">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Shree Swaminarayan Institute of Technology (SSIT),
                                </h6>
                                <p>
                                    Near Agora Mall &amp; Indira Bridge, sardar patel ring road, bhat
                                    circle ahmedabad Airport-Gandhinagar Highway, Bhat, Gandhinagar -
                                    382428
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p>
                                    <i className="fas fa-envelope me-3" />
                                    info@ssit.co.in
                                </p>
                                <p>
                                    <i className="fas fa-phone me-3" />
                                    +91 9099063433
                                </p>
                                <p>
                                    <i className="fas fa-phone me-3" />
                                    +91 9408260607
                                </p>
                                <p>
                                    <i className="fas fa-phone me-3" />
                                    +91 7043609281
                                </p>
                            </div>
                        </div>
                        <hr />
                        <section className="team section-padding" id="team">
                            <div className="container">
                                <div className="section-header text-center pb-5">
                                    <h2>DEVELOPERS</h2>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="card text-center">
                                            <div className="card-body1">
                                                <h3 className="card-title py-2">Viral Modi</h3>
                                                <p className="socials">
                                                    <a href="viral.modi228@gmail.com">
                                                        <i className="sociaal-icon fa-solid fa-envelope" />
                                                    </a>
                                                    <a href="https://www.linkedin.com/in/viral-modi-89184b24b/">
                                                        <i className="sociaal-icon fa-brands fa-linkedin" />
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="card text-center">
                                            <div className="card-body1">
                                                <h3 className="card-title py-2">Vanshika Wadhwani</h3>
                                                <p className="socials">
                                                    <a href="wadhwanivanshika86@gmail.com">
                                                        <i className="sociaal-icon fa-solid fa-envelope" />
                                                    </a>
                                                    <a href="https://www.linkedin.com/in/vanshika-wadhwani-8a515224b/">
                                                        <i className="sociaal-icon fa-brands fa-linkedin" />
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="card text-center">
                                            <div className="card-body1">
                                                <h3 className="card-title py-2">Sneh Patel</h3>
                                                <p className="socials">
                                                    <a href="snehpatel110903@gmail.com">
                                                        <i className="sociaal-icon fa-solid fa-envelope" />
                                                    </a>
                                                    <a href="https://www.linkedin.com/in/patel-sneh-14ab22272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                                        <i className="sociaal-icon fa-brands fa-linkedin" />
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="card text-center">
                                            <div className="card-body1">
                                                <h3 className="card-title py-2">Krishna Kirpalani</h3>
                                                <p className="socials">
                                                    <a href="krishnakirpalani41@gmail.com">
                                                        <i className="sociaal-icon fa-solid fa-envelope" />
                                                    </a>
                                                    <a href="https://www.linkedin.com/in/krishna-kirpalani-7058ba253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                                        <i className="sociaal-icon fa-brands fa-linkedin" />
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                <div
                    className="text-center p-4"
                    style={{ backgroundColor: "#274E91", color: "white" }}
                >
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
                        SSIT
                    </a>
                </div>
            </footer>

        </div>
    )
}

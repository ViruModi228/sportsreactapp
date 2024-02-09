import React from 'react'
import img1 from '../../images/confirmbg.png'
import img2 from '../../images/2bg.png'

export const Carousel2 = () => {
    return (
        <div>
            <div className="cc">
                <div
                    id="carouselExampleCaptions"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src={img1}
                                className="d-block w-70 h-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={img2}
                                className="d-block w-70 h-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

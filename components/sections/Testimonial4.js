'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
 
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    speed: 1500,
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },
    breakpoints: {
        1199: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 1,
        },
 
        575: {
            slidesPerView: 1,
        },
 
        0: {
            slidesPerView: 1,
        },
    },
}
export default function Testimonial4() {
    return (
        <>
            <section className="testimonial-section-4 fix section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/section-bg.jpg")' }}>
                <div className="container">
                    <div className="testimonial-wrapper-2">
                        <div className="row">
                            <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
                                <div className="tesimonial-image">
                                    <img src="/assets/img/testimonial/04.jpg" alt="img" />
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className="tesimonial-area">
                                    <div className="section-title">
                                        {/* <span className="wow fadeInUp" data-wow-delay=".3s">Your digital transformation starts here</span> */}
                                        <h2 className="wow fadeInUp" data-wow-delay=".5s">
                                            Your Perfect Home Awaits
                                        </h2>
                                    </div>
                                    <div className="swiper testimonial-slider-3">
                                        <Swiper {...swiperOptions} className="swiper-wrapper">
                                            <SwiperSlide>
                                                <div className="tesimonial-card-items">
                                                    <div className="icon">
                                                        <img src="/assets/img/testimonial/quote.svg" alt="img" />
                                                    </div>
                                                    <div className="star">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    <p>
                                                        This app made finding my new home so easy!, and I could filter to find exactly what I was looking for!
                                                    </p>
                                                    <div className="client-info-items">
                                                        <div className="thumb">
                                                            <img src="/assets/img/testimonial/05.jpg" alt="img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Shikhon Haque</h4>
                                                            <p>Web Designer</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="tesimonial-card-items">
                                                    <div className="icon">
                                                        <img src="/assets/img/testimonial/quote.svg" alt="img" />
                                                    </div>
                                                    <div className="star">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    <p>
                                                    It saved me a lot of time and effort, and I found the perfect place without leaving my home.
                                                    </p>
                                                    <div className="client-info-items">
                                                        <div className="thumb">
                                                            <img src="/assets/img/testimonial/06.jpg" alt="img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Esther Howard</h4>
                                                            <p>President of Sales</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="tesimonial-card-items">
                                                    <div className="icon">
                                                        <img src="/assets/img/testimonial/quote.svg" alt="img" />
                                                    </div>
                                                    <div className="star">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    <p>
                                                    The customer service is top-notch. The app’s detailed filters also helped me find a home that matched all my preferences.
                                                    </p>
                                                    <div className="client-info-items">
                                                        <div className="thumb">
                                                            <img src="/assets/img/testimonial/07.jpg" alt="img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Brooklyn Simmons</h4>
                                                            <p>Nursing</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="tesimonial-card-items">
                                                    <div className="icon">
                                                        <img src="/assets/img/testimonial/quote.svg" alt="img" />
                                                    </div>
                                                    <div className="star">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    <p>
                                                    The app's detailed neighborhood information helped me choose a safe and convenient location for my family.
                                                    </p>
                                                    <div className="client-info-items">
                                                        <div className="thumb">
                                                            <img src="/assets/img/testimonial/07.jpg" alt="img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Brooklyn Simmons</h4>
                                                            <p>Nursing</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
 


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
            <section className="testimonial-section-4 fix section-padding bg-cover" style={{ backgroundImage: 'url("https://noblq.com/wp-content/themes/noblq/assets/img/home/technology/card-bg.png")' , marginTop:"50px",marginBottom:"50px" }}>
                <div className="container">
                    <div className="testimonial-wrapper-2">
                        <div className="row">
                            {/* <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
                                <div className="tesimonial-image">
                                    <img src="/assets/img/testimonial/04.jpg" alt="img" />
                                </div>
                            </div> */}
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className="tesimonial-area">
                                    <div className="section-title">
                                        {/* <span className="wow fadeInUp" data-wow-delay=".3s">Your digital transformation starts here</span> */}
                                        {/* <h2 className="wow fadeInUp" data-wow-delay=".5s" style={{color:"white"}}>
                                        Your digital transformation starts here
                                        </h2> */}
                                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                        Your digital transformation<br />
                                        starts here
                            </h2>
                                        <p style={{color:"white"}}>We bring our digital solutions and technology expertise to create value and help you drive business results.</p>
                                    </div>
                                    <div className="swiper testimonial-slider-3">
                                        <Swiper {...swiperOptions} className="swiper-wrapper">
                                            <SwiperSlide>
                                                <div className="tesimonial-card-items">
                                                    <div className="icon" >
                                                        <img src="https://noblq.com/wp-content/uploads/2024/01/Unwavering-customer-supportsandy-1.svg" alt="img" />
                                                       
                                                    </div>
                                                    <div className="star">
                                                       
                                                    </div>
                                                    <h4>Managed Services</h4>
                                                    <p>
                                                        when an unknown printer took away galley of type aawer awtnd there are scrambled it to make a type many  but also the leap into
                                                    </p>
                                                   
                                                </div>

                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="tesimonial-card-items">
                                                    <div className="icon">
                                                        <img src="https://noblq.com/wp-content/uploads/2024/01/rs.svg" alt="img" />
                                                    </div>
                                                    <div className="star">
                                                        {/* <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" /> */}
                                                    </div>
                                                    <h4>Remediation Services</h4>
                                                    <p>
                                                        when an unknown printer took away galley of type aawer awtnd there are scrambled it to make a type many  but also the leap into
                                                    </p>
                                                    {/* <div className="client-info-items">
                                                        <div className="thumb">
                                                            <img src="/assets/img/testimonial/06.jpg" alt="img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Esther Howard</h4>
                                                            <p>President of Sales</p>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="tesimonial-card-items">
                                                    <div className="icon">
                                                        <img src="https://noblq.com/wp-content/uploads/2024/01/sw4-1.svg" alt="img" />
                                                    </div>
                                                    <div className="star">
                                                        {/* <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" /> */}
                                                    </div>
                                                    <h4>Migration Services</h4>
                                                    <p>
                                                        when an unknown printer took away galley of type aawer awtnd there are scrambled it to make a type many  but also the leap into
                                                    </p>
                                                    {/* <div className="client-info-items">
                                                        <div className="thumb">
                                                            <img src="/assets/img/testimonial/07.jpg" alt="img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Brooklyn Simmons</h4>
                                                            <p>Nursing</p>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="tesimonial-card-items">
                                                    <div className="icon">
                                                        <img src="https://noblq.com/wp-content/uploads/2024/01/rs.svg" alt="img" />
                                                    </div>
                                                    <div className="star">
                                                        {/* <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" /> */}
                                                    </div>
                                                    <h4>Upgrade Services</h4>
                                                    <p>
                                                        when an unknown printer took away galley of type aawer awtnd there are scrambled it to make a type many  but also the leap into
                                                    </p>
                                                    {/* <div className="client-info-items">
                                                        <div className="thumb">
                                                            <img src="/assets/img/testimonial/07.jpg" alt="img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Brooklyn Simmons</h4>
                                                            <p>Nursing</p>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="tesimonial-card-items">
                                                    <div className="icon">
                                                        <img src="https://noblq.com/wp-content/uploads/2024/01/sw4-1.svg" alt="img" />
                                                    </div>
                                                    <div className="star">
                                                        {/* <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" /> */}
                                                    </div>
                                                    <h4>Consultation & Implementation</h4>
                                                    <p>
                                                        when an unknown printer took away galley of type aawer awtnd there are scrambled it to make a type many  but also the leap into
                                                    </p>
                                                    {/* <div className="client-info-items">
                                                        <div className="thumb">
                                                            <img src="/assets/img/testimonial/07.jpg" alt="img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Brooklyn Simmons</h4>
                                                            <p>Nursing</p>
                                                        </div>
                                                    </div> */}
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

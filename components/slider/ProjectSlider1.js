
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".dot-3",
        clickable: true,
    },
    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        },
        650: {
            slidesPerView: 2,
        },

        575: {
            slidesPerView: 1,
        },

        0: {
            slidesPerView: 1,
        },
    },
}
export default function ProjectSlider1({ showDots }) {
    return (
        <>
            <div className="swiper project-slider pt-5">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="project-items">
                            
                            <div className="project-image">
                                <img src="https://valoteam-ebon.vercel.app/_next/static/media/apartment1.f273f3fa.jpg" alt="project-img" />
                                
                                <div className="project-content">
                                    
                                    <p>30 Imrie Rd.</p>
                                    <h4>
                                        <Link href="">Allston, MA 02134</Link>
                                    </h4>
                                    {/* <div style={{display:"flex"}}>
                                    <h4>
                                        <Link href="">$200 / </Link>
                                    </h4>
                                <p> Rent</p>
                                   
                                </div> */}
                                    <Link href="/project-details" className="icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items">
                            <div className="project-image">
                                <img src="https://valoteam-ebon.vercel.app/_next/static/media/apartment2.a250b828.jpg" alt="project-img" />
                                <div className="project-content">
                                    <p>11 Bowdoin Ave</p>
                                    <h4>
                                        <Link href="/project-details">Allston, MA 02134</Link>
                                    </h4>
                                    <Link href="/project-details" className="icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items">
                            <div className="project-image">
                                <img src="https://valoteam-ebon.vercel.app/_next/static/media/apartment1.f273f3fa.jpg" alt="project-img" />
                                <div className="project-content">
                                    <p>35 Imrie Rd</p>
                                    <h4>
                                        <Link href="/project-details">Allston, MA 02134</Link>
                                    </h4>
                                    <Link href="/project-details" className="icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items">
                            <div className="project-image">
                                <img src="https://valoteam-ebon.vercel.app/_next/static/media/apartment2.a250b828.jpg" alt="project-img" />
                                <div className="project-content">
                                    <p>11 Bowdoin Ave</p>
                                    <h4>
                                        <Link href="/project-details">Allston, MA 02134</Link>
                                    </h4>
                                    <Link href="/project-details" className="icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items">
                            <div className="project-image">
                                <img src="https://valoteam-ebon.vercel.app/_next/static/media/apartment1.f273f3fa.jpg" alt="project-img" />
                                <div className="project-content">
                                    <p>76 Imrie Rd</p>
                                    <h4>
                                        <Link href="/project-details">Allston, MA 02134</Link>
                                    </h4>
                                    <Link href="/project-details" className="icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items">
                            <div className="project-image">
                                <img src="https://valoteam-ebon.vercel.app/_next/static/media/apartment2.a250b828.jpg" alt="project-img" />
                                <div className="project-content">
                                    <p>47 Imrie Rd</p>
                                    <h4>
                                        <Link href="/project-details">Allston, MA 02134</Link>
                                    </h4>
                                    <Link href="/project-details" className="icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                {showDots &&
                    <div className="swiper-dot-2">
                        <div className="dot-3" />
                    </div>
                }
               
            </div>
        </>
    )
}

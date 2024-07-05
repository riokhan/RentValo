
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1199: {
            slidesPerView: 5,
        },
        991: {
            slidesPerView: 4,
        },
        767: {
            slidesPerView: 3,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}
export default function BrandSlider2() {
    return (
        <>
            <div className="swiper brand-slider-2">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="brand-img">
                            <img src="https://noblq.com/wp-content/uploads/2024/02/1.png" alt="img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-img">
                            <img src="https://noblq.com/wp-content/uploads/2024/02/3.png" alt="img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-img">
                            <img src="https://noblq.com/wp-content/uploads/2024/02/9.png" alt="img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-img">
                            <img src="https://noblq.com/wp-content/uploads/2024/02/4.png" alt="img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-img">
                            <img src="https://noblq.com/wp-content/uploads/2024/02/8.png" alt="img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-img">
                            <img src="https://noblq.com/wp-content/uploads/2024/02/7.png" alt="img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-img">
                            <img src="https://noblq.com/wp-content/uploads/2024/02/5.png" alt="img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-img">
                            <img src="https://noblq.com/wp-content/uploads/2024/02/9.png" alt="img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-img">
                            <img src="https://noblq.com/wp-content/uploads/2024/02/6.png" alt="img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-img">
                            <img src="https://noblq.com/wp-content/uploads/2024/02/2.png" alt="img" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

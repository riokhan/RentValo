'use client'
import VideoPopup from '@/components/elements/VideoPopup'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Faqdetails() {
    const [activeItem, setActiveItem] = useState(1)
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = (index) => {
        setActiveItem(index)
    }
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>

            {/* <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Services Details"> */}
                <section className="service-details-section fix section-padding">
                    <div className="container">
                        <div className="service-details-wrapper">
                            <div className="row g-4">
                               
                                   
                                <div className="col-12 col-lg-12 order-1 order-md-2">
                                    <div className="service-details-items">
                                        {/*<< Map Section Start >>*/}
                                    



                                    
                                {/* </div> */}
                                        {/* <div className="details-image">
                                            <img src="/assets/img/service/map.png" style={{position: "-webkit-sticky",position: 'sticky', top: 0}} alt="img" />
                                        </div> */}
                                        <div className="details-content">
                                            
                                            
                                            <h3>Most Comment Question?</h3>
                                            <p className="mt-3">
                                                The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus malesuada.
                                            </p>
                                        </div>
                                        <div className="faq-content style-3">
                                            <div className="faq-accordion">
                                                <div className="accordion" id="accordion">
                                                    <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
                                                        <h5 className="accordion-header" onClick={() => handleClick(1)}>
                                                            <button className={activeItem == 1 ? "accordion-button" : "accordion-button collapsed"}>
                                                                What is the security deposit amount?
                                                            </button>
                                                        </h5>
                                                        <div id="faq1" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                                                            <div className="accordion-body">
                                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
                                                        <h5 className="accordion-header" onClick={() => handleClick(2)}>
                                                            <button className={activeItem == 2 ? "accordion-button" : "accordion-button collapsed"}>
                                                                How do i search for apartments on your website?
                                                            </button>
                                                        </h5>
                                                        <div id="faq2" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                            <div className="accordion-body">
                                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                                                        <h5 className="accordion-header" onClick={() => handleClick(3)}>
                                                            <button className={activeItem == 3 ? "accordion-button" : "accordion-button collapsed"}>
                                                                Are pets allowed?
                                                            </button>
                                                        </h5>
                                                        <div id="faq3" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                            <div className="accordion-body">
                                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item wow fadeInUp" data-wow-delay=".7s">
                                                        <h5 className="accordion-header" onClick={() => handleClick(4)}>
                                                            <button className={activeItem == 4 ? "accordion-button" : "accordion-button collapsed"}>
                                                                Can i make changes or decorate the apartment?
                                                            </button>
                                                        </h5>
                                                        <div id="faq4" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                            <div className="accordion-body">
                                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            {/* </Layout> */}
        </>
    )
}
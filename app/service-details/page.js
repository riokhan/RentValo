'use client'
import VideoPopup from '@/components/elements/VideoPopup'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function ServiceDetails() {
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
                    <div className="container-fluid">
                        <div className="service-details-wrapper">
                            <div className="row g-4">
                                <div className="col-12 col-lg-6 order-2 order-md-1">
                                    {/* <div className="main-sidebar">
                                        <div className="single-sidebar-widget">
                                            <div className="wid-title">
                                                <h3>All Services</h3>
                                            </div>
                                            <div className="widget-categories">
                                                <ul>
                                                    <li><Link href="/service-details">Database Security</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li><Link href="/service-details">IT Consultancy</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li className="active"><Link href="/service-details">App Development</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li><Link href="/service-details">UI/UX Design</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li><Link href="/service-details">Cyber Security</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="single-sidebar-widget">
                                            <div className="wid-title">
                                                <h3>Opening Hours</h3>
                                            </div>
                                            <div className="opening-category">
                                                <ul>
                                                    <li><i className="fa-regular fa-clock" />Mon - Sat: 10.00 AM - 4.00 PM</li>
                                                    <li><i className="fa-regular fa-clock" />Sun:  09.00 AM - 4.00 PM</li>
                                                    <li><i className="fa-regular fa-clock" />Friday: Closed</li>
                                                    <li><i className="fa-regular fa-clock" />Emergency: 24 hours</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="single-sidebar-image bg-cover" style={{ backgroundImage: 'url("assets/img/service/post.jpg")' }}>
                                            <div className="contact-text">
                                                <div className="icon">
                                                    <i className="fa-solid fa-phone" />
                                                </div>
                                                <h4>Need Help? Call Here</h4>
                                                <h5>
                                                    <Link href="/tel:+2085550112">+208-555-0112</Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="row g-4">
                                    {/* <div className="section-title-area">
                                    <div className="section-title">
                                        <h6 className="wow fadeInUp" data-wow-delay=".3s">
                                        Viewing 24 of 732,848 Homes for Sale in All locations
                                        </h6>
                                        <p>Showing listings marketed by all brokers in the searched area.</p>
                                        <br />
                                        <div className="dropdown" style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                        <span style={{color: "#002349 !important"}}>SORT: EXCLUSIVE (DEFAULT)</span>
                                        <div className="dropdown-content" style={{display: isHovered ? 'block' : 'none',
                                            position: "absolute",
                                            minWidth: "160px",
                                            boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                                            flexDirection: "column",
                                            padding: "24px 30px 31px",
                                            zIndex: "1",
                                            color: "whitesmoke",
                                            cursor: "pointer",
                                            backgroundColor: "#002349",
                                            borderRadius: "5px"
                                            }}>
                                        <p>Exclusive (Default)</p>
                                        <p>Price High-Low</p>
                                        <p>Price Low-High</p>
                                        <p>New Listings First</p>
                                        <p>Sq Foot High-Low</p>
                                        <p>Acreage High-Low</p>
                                        <p>Distance</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>     */}
                                    <div className="section-title-area">
                                    <div className="section-title">
                                        <span className="wow fadeInUp">Viewing 24 of 732,748 Homes for Sale in All locations</span>
                                        <h6 className="wow fadeInUp" style={{color:"#a19c9c"}} data-wow-delay=".3s">
                                        Showing listings marketed by all brokers in the searched area.
                                        </h6>
                                    </div>
                                    {/* <div className="array-button">
                                        <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                                        <button className="array-next"><i className="fal fa-arrow-left" /></button>
                                    </div> */}
                                    </div>
                                    <div className="dropdown" style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        
                                    <span style={{color: "#002349 !important"}}>SORT: EXCLUSIVE (DEFAULT)
                                        <i className="fas fa-angle-down ps-1" />
                                    </span>
                                    
                                        <div className="dropdown-content" style={{display: isHovered ? 'block' : 'none',
                                            position: "absolute",
                                            minWidth: "160px",
                                            boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                                            flexDirection: "column",
                                            padding: "24px 30px 31px",
                                            zIndex: "1",
                                            color: "whitesmoke",
                                            cursor: "pointer",
                                            backgroundColor: "#002349",
                                            borderRadius: "5px"
                                            }}>
                                        <p>Exclusive (Default)</p>
                                        <p>Price High-Low</p>
                                        <p>Price Low-High</p>
                                        <p>New Listings First</p>
                                        <p>Sq Foot High-Low</p>
                                        <p>Acreage High-Low</p>
                                        <p>Distance</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="news-card-items style-2 mt-0 pb-0">
                                            <div className="news-image">
                                                <img src="https://valoteam-ebon.vercel.app/_next/static/media/apartment2.a250b828.jpg" alt="news-img" />
                                                {/* <div className="post-date">
                                                    <h3>
                                                        17 <br />
                                                        <span>Feb</span>
                                                    </h3>
                                                </div> */}
                                            </div>
                                            <div className="news-content">
                                            <ul style={{ display: 'flex',marginBottom:"10px !important", justifyContent: 'space-between', width: '100%', listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-tag" style={{ marginRight: '8px' }} />
                Rent
            </li>
            <li style={{ marginLeft: 'auto' }}>
            $65,000,000
            </li>
        </ul>

                                                <h3>
                                                    <Link href="/project-details">LENOX HILL
                                                    <br></br>15 East 63rd Street
New York, NY, 10065 United States</Link>
                                                </h3>
                                                <Link href="/project-details" className="theme-btn-2 mt-3">
                                                    read More
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="news-card-items style-2 mt-0 pb-0">
                                            <div className="news-image">
                                                <img src="/assets/img/1.jpg" alt="news-img" />
                                                {/* <div className="post-date">
                                                    <h3>
                                                        20 <br />
                                                        <span>May</span>
                                                    </h3>
                                                </div> */}
                                            </div>
                                            <div className="news-content">
                                            <ul style={{ display: 'flex',marginBottom:"10px !important", justifyContent: 'space-between', width: '100%', listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-tag" style={{ marginRight: '8px' }} />
                Rent
            </li>
            <li style={{ marginLeft: 'auto' }}>
            Price Upon Request
            </li>
        </ul>
                                                <h3>
                                                    <Link href="/project-details">CENTRAL PARK SOUTH
<br></br>
50 Central Park South, 30/31
New York, NY, 10019 United States</Link>
                                                </h3>
                                                <Link href="/project-details" className="theme-btn-2 mt-3">
                                                    read More
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="news-card-items style-2 mt-0 pb-0">
                                            <div className="news-image">
                                                <img src="/assets/img/2.jpg" />
                                                {/* <div className="post-date">
                                                    <h3>
                                                        17 <br />
                                                        <span>Feb</span>
                                                    </h3>
                                                </div> */}
                                            </div>
                                            <div className="news-content">
                                            <ul style={{ display: 'flex',marginBottom:"10px !important", justifyContent: 'space-between', width: '100%', listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-tag" style={{ marginRight: '8px' }} />
                Rent
            </li>
            <li style={{ marginLeft: 'auto' }}>
            $64,102,564
            </li>
        </ul>

                                                <h3>
                                                    <Link href="/project-details">LENOX HILL
                                                    <br></br>15 East 63rd Street
New York, NY, 10065 United States</Link>
                                                </h3>
                                                <Link href="/project-details" className="theme-btn-2 mt-3">
                                                    read More
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="news-card-items style-2 mt-0 pb-0">
                                            <div className="news-image">
                                                <img src="/assets/img/3.jpg" alt="news-img" />
                                                {/* <div className="post-date">
                                                    <h3>
                                                        17 <br />
                                                        <span>Feb</span>
                                                    </h3>
                                                </div> */}
                                            </div>
                                            <div className="news-content">
                                            <ul style={{ display: 'flex',marginBottom:"10px !important", justifyContent: 'space-between', width: '100%', listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-tag" style={{ marginRight: '8px' }} />
                Rent
            </li>
            <li style={{ marginLeft: 'auto' }}>
            $65,000,000
            </li>
        </ul>

                                                <h3>
                                                    <Link href="/project-details">LENOX HILL
                                                    <br></br>15 East 63rd Street
New York, NY, 10065 United States</Link>
                                                </h3>
                                                <Link href="/project-details" className="theme-btn-2 mt-3">
                                                    read More
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="news-card-items style-2 mt-0 pb-0">
                                            <div className="news-image">
                                                <img src="/assets/img/4.jpg" alt="news-img" />
                                                {/* <div className="post-date">
                                                    <h3>
                                                        17 <br />
                                                        <span>Feb</span>
                                                    </h3>
                                                </div> */}
                                            </div>
                                            <div className="news-content">
                                            <ul style={{ display: 'flex',marginBottom:"10px !important", justifyContent: 'space-between', width: '100%', listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-tag" style={{ marginRight: '8px' }} />
                Rent
            </li>
            <li style={{ marginLeft: 'auto' }}>
                $200
            </li>
        </ul>

                                                <h3>
                                                    <Link href="/project-details">LENOX HILL
                                                    <br></br>15 East 63rd Street
New York, NY, 10065 United States</Link>
                                                </h3>
                                                <Link href="/project-details" className="theme-btn-2 mt-3">
                                                    read More
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="news-card-items style-2 mt-0 pb-0">
                                            <div className="news-image">
                                                <img src="https://valoteam-ebon.vercel.app/_next/static/media/apartment1.f273f3fa.jpg" alt="news-img" />
                                                {/* <div className="post-date">
                                                    <h3>
                                                        10 <br />
                                                        <span>Feb</span>
                                                    </h3>
                                                </div> */}
                                            </div>
                                            <div className="news-content">
                                            <ul style={{ display: 'flex',marginBottom:"10px !important", justifyContent: 'space-between', width: '100%', listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-tag" style={{ marginRight: '8px' }} />
                Rent
            </li>
            <li style={{ marginLeft: 'auto' }}>
                $200
            </li>
        </ul>
                                                <h3>
                                                    <Link href="/project-details">Supervisor Disapproved of Latest Work.</Link>
                                                </h3>
                                                <Link href="/project-details" className="theme-btn-2 mt-3">
                                                    read More
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="news-card-items style-2 mt-0 pb-0">
                                            <div className="news-image">
                                                <img src="https://valoteam-ebon.vercel.app/_next/static/media/apartment2.a250b828.jpg" alt="news-img" />
                                                {/* <div className="post-date">
                                                    <h3>
                                                        17 <br />
                                                        <span>Feb</span>
                                                    </h3>
                                                </div> */}
                                            </div>
                                            <div className="news-content">
                                            <ul style={{ display: 'flex',marginBottom:"10px !important", justifyContent: 'space-between', width: '100%', listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-tag" style={{ marginRight: '8px' }} />
                Rent
            </li>
            <li style={{ marginLeft: 'auto' }}>
            $65,000,000
            </li>
        </ul>

                                                <h3>
                                                    <Link href="/project-details">LENOX HILL
                                                    <br></br>15 East 63rd Street
New York, NY, 10065 United States</Link>
                                                </h3>
                                                <Link href="/project-details" className="theme-btn-2 mt-3">
                                                    read More
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="news-card-items style-2 mt-0 pb-0">
                                            <div className="news-image">
                                                <img src="/assets/img/3.jpg" alt="news-img" />
                                                {/* <div className="post-date">
                                                    <h3>
                                                        17 <br />
                                                        <span>Feb</span>
                                                    </h3>
                                                </div> */}
                                            </div>
                                            <div className="news-content">
                                            <ul style={{ display: 'flex',marginBottom:"10px !important", justifyContent: 'space-between', width: '100%', listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-tag" style={{ marginRight: '8px' }} />
                Rent
            </li>
            <li style={{ marginLeft: 'auto' }}>
                $200
            </li>
        </ul>

                                                <h3>
                                                    <Link href="/project-details">Simplify Streamline Succeed  IT Solutions</Link>
                                                </h3>
                                                <Link href="/project-details" className="theme-btn-2 mt-3">
                                                    read More
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-12 col-lg-6 order-1 order-md-2">
                                    <div className="service-details-items">
                                        {/*<< Map Section Start >>*/}
                                    <div className="map-section">
                                        <div className="map-items">
                                            <div className="googpemap">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd" style={{ border: 0, position: 'fixed', height: '100%', width: '100%' }} allowFullScreen loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                {/* </div> */}
                                        {/* <div className="details-image">
                                            <img src="/assets/img/service/map.png" style={{position: "-webkit-sticky",position: 'sticky', top: 0}} alt="img" />
                                        </div> */}
                                        {/* <div className="details-content">
                                            <h3>IT Consultancy</h3>
                                            <p className="mt-3">
                                                The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.
                                            </p>
                                            <p className="mt-3">
                                                lacus sed pretium pretium justo. Integer is vitae venenatis lorem. Maecenas lacinia turpis the in nunc quam hendrerit scelerisque at finibus enim sagittis. Aliquam erat is volutpat nam nec purus at is orci volutpat semper vel id turpis In a malesuada arcu ac hendrerit.
                                            </p>
                                            <div className="details-video-items">
                                                <div className="video-thumb">
                                                    <img src="/assets/img/service/details-video.jpg" alt="img" />
                                                    <VideoPopup style={1} />
                                                </div>
                                                <div className="content">
                                                    <h4>Benefits With Our Service</h4>
                                                    <p> Fusce is eleifend porta arcu In hac <br /> habitasse the platea thelorem</p>
                                                    <ul className="list">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Branding and design Identity
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Web site Marketing Solutions
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            unlimited Download Data
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p>
                                                Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.
                                            </p>
                                            <div className="image-area">
                                                <div className="row g-4">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="thumb">
                                                            <img src="/assets/img/service/details-2.jpg" alt="img" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="thumb">
                                                            <img src="/assets/img/service/details-3.jpg" alt="img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                                                Where should I incorporate my business?
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
                                                                How long should a business plan be?
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
                                                                What is included in your services?
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
                                                                What type of company is measured?
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
                                        </div> */}
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
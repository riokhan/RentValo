'use client'
import VideoPopup from '@/components/elements/VideoPopup'
import Layout from "@/components/layout/Layout"
import { Diphylleia } from 'next/font/google'
import Link from "next/link"
import { useState } from 'react'
import Button from '@mui/material/Button';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
export default function Listing() {
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
                                <div className="col-12 col-lg-6 order-1 order-md-1">
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
                                    <div className="single-team-items">
                                        <div className="team-image">
                                            <img src="/assets/img/2.jpg" alt="team-img" />
                                           
                                        </div>
                                        <div className="team-content text-left">
                                          
                                           
                                          
                                          
                                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                                            <h3 style={{fontSize:"14px"}}>
                                                <Link href="/property">2 Beds | 2 Baths</Link>
                                              
                                            </h3>
                                    <h4 style={{ margin: 0 }}>
                                        
                                    <Link href="/property" style={{color:"#ffffff", fontSize:"25px",fontWeight:"bold"}}>$200.00</Link>
                                    </h4>
                                </div>
                                          
                                          
                                          
                                          
                                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                                            <h3 style={{fontSize:"20px"}}>
                                                <Link href="/property">74 Georgia</Link>
                                                <p style={{fontSize:"14px" , paddingTop:"10px"}}>New York, NY, 10019 United States</p>
                                            </h3>
                                    <h4 style={{ margin: 0 }}>
                                        
                                        <Link href="/property"><Button variant="outlined" endIcon={<ArrowOutwardIcon />}  className='buttonhero42 buttonheroonenew'>
                                        check now
      </Button></Link>
                                    </h4>
                                </div>
                                       
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="single-team-items">
                                        <div className="team-image">
                                            <img src="/assets/img/1.jpg" alt="team-img" />
                                           
                                        </div>
                                        <div className="team-content text-left">
                                          
                                           
                                          
                                          
                                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                                            <h3 style={{fontSize:"14px"}}>
                                                <Link href="/property">2 Beds | 2 Baths</Link>
                                              
                                            </h3>
                                    <h4 style={{ margin: 0 }}>
                                        
                                    <Link href="/property" style={{color:"#ffffff", fontSize:"25px",fontWeight:"bold"}}>$200.00</Link>
                                    </h4>
                                </div>
                                          
                                          
                                          
                                          
                                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                                            <h3 style={{fontSize:"20px"}}>
                                                <Link href="/property">74 Georgia</Link>
                                                <p style={{fontSize:"14px" , paddingTop:"10px"}}>New York, NY, 10019 United States</p>
                                            </h3>
                                    <h4 style={{ margin: 0 }}>
                                        
                                        <Link href="/property"><Button variant="outlined" endIcon={<ArrowOutwardIcon />}  className='buttonhero42 buttonheroonenew'>
                                        check now
      </Button></Link>
                                    </h4>
                                </div>
                                       
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="single-team-items">
                                        <div className="team-image">
                                            <img src="/assets/img/4.jpg" alt="team-img" />
                                           
                                        </div>
                                        <div className="team-content text-left">
                                          
                                           
                                          
                                          
                                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                                            <h3 style={{fontSize:"14px"}}>
                                                <Link href="/property">2 Beds | 2 Baths</Link>
                                              
                                            </h3>
                                    <h4 style={{ margin: 0 }}>
                                        
                                    <Link href="" style={{color:"#ffffff", fontSize:"25px",fontWeight:"bold"}}>$200.00</Link>
                                    </h4>
                                </div>
                                          
                                          
                                          
                                          
                                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                                            <h3 style={{fontSize:"20px"}}>
                                                <Link href="/property">74 Georgia</Link>
                                                <p style={{fontSize:"14px" , paddingTop:"10px"}}>New York, NY, 10019 United States</p>
                                            </h3>
                                    <h4 style={{ margin: 0 }}>
                                        
                                        <Link href="/property"><Button variant="outlined" endIcon={<ArrowOutwardIcon />}  className='buttonhero42 buttonheroonenew'>
                                        check now
      </Button></Link>
                                    </h4>
                                </div>
                                       
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="single-team-items">
                                        <div className="team-image">
                                            <img src="/assets/img/3.jpg" alt="team-img" />
                                           
                                        </div>
                                        <div className="team-content text-left">
                                          
                                           
                                          
                                          
                                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                                            <h3 style={{fontSize:"14px"}}>
                                                <Link href="/property">2 Beds | 2 Baths</Link>
                                              
                                            </h3>
                                    <h4 style={{ margin: 0 }}>
                                        
                                    <Link href="" style={{color:"#ffffff", fontSize:"25px",fontWeight:"bold"}}>$200.00</Link>
                                    </h4>
                                </div>
                                          
                                          
                                          
                                          
                                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                                            <h3 style={{fontSize:"20px"}}>
                                                <Link href="/property">74 Georgia</Link>
                                                <p style={{fontSize:"14px" , paddingTop:"10px"}}>New York, NY, 10019 United States</p>
                                            </h3>
                                    <h4 style={{ margin: 0 }}>
                                        
                                        <Link href="/property"><Button variant="outlined" endIcon={<ArrowOutwardIcon />}  className='buttonhero42 buttonheroonenew'>
                                        check now
      </Button></Link>
                                    </h4>
                                </div>
                                       
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="single-team-items">
                                        <div className="team-image">
                                            <img src="/assets/img/1.jpg" alt="team-img" />
                                           
                                        </div>
                                        <div className="team-content text-left">
                                          
                                           
                                          
                                          
                                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                                            <h3 style={{fontSize:"14px"}}>
                                                <Link href="/property">2 Beds | 2 Baths</Link>
                                              
                                            </h3>
                                    <h4 style={{ margin: 0 }}>
                                        
                                    <Link href="" style={{color:"#ffffff", fontSize:"25px",fontWeight:"bold"}}>$200.00</Link>
                                    </h4>
                                </div>
                                          
                                          
                                          
                                          
                                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                                            <h3 style={{fontSize:"20px"}}>
                                                <Link href="/property">74 Georgia</Link>
                                                <p style={{fontSize:"14px" , paddingTop:"10px"}}>New York, NY, 10019 United States</p>
                                            </h3>
                                    <h4 style={{ margin: 0 }}>
                                        
                                        <Link href="/property"><Button variant="outlined" endIcon={<ArrowOutwardIcon />}  className='buttonhero42 buttonheroonenew'>
                                        check now
      </Button></Link>
                                    </h4>
                                </div>
                                       
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="single-team-items">
                                        <div className="team-image">
                                            <img src="/assets/img/4.jpg" alt="team-img" />
                                           
                                        </div>
                                        <div className="team-content text-left">
                                          
                                           
                                          
                                          
                                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                                            <h3 style={{fontSize:"14px"}}>
                                                <Link href="/property">2 Beds | 2 Baths</Link>
                                              
                                            </h3>
                                    <h4 style={{ margin: 0 }}>
                                        
                                    <Link href="" style={{color:"#ffffff", fontSize:"25px",fontWeight:"bold"}}>$200.00</Link>
                                    </h4>
                                </div>
                                          
                                          
                                          
                                          
                                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                                            <h3 style={{fontSize:"20px"}}>
                                                <Link href="/property">74 Georgia</Link>
                                                <p style={{fontSize:"14px" , paddingTop:"10px"}}>New York, NY, 10019 United States</p>
                                            </h3>
                                    <h4 style={{ margin: 0 }}>
                                        
                                        <Link href="/property"><Button variant="outlined" endIcon={<ArrowOutwardIcon />}  className='buttonhero42 buttonheroonenew'>
                                        check now
      </Button></Link>
                                    </h4>
                                </div>
                                       
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="single-team-items">
                                        <div className="team-image">
                                            <img src="/assets/img/3.jpg" alt="team-img" />
                                           
                                        </div>
                                        <div className="team-content text-left">
                                          
                                           
                                          
                                          
                                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                                            <h3 style={{fontSize:"14px"}}>
                                                <Link href="/property">2 Beds | 2 Baths</Link>
                                              
                                            </h3>
                                    <h4 style={{ margin: 0 }}>
                                        
                                    <Link href="" style={{color:"#ffffff", fontSize:"25px",fontWeight:"bold"}}>$200.00</Link>
                                    </h4>
                                </div>
                                          
                                          
                                          
                                          
                                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                                            <h3 style={{fontSize:"20px"}}>
                                                <Link href="/property">74 Georgia</Link>
                                                <p style={{fontSize:"14px" , paddingTop:"10px"}}>New York, NY, 10019 United States</p>
                                            </h3>
                                    <h4 style={{ margin: 0 }}>
                                        
                                        <Link href="/property"><Button variant="outlined" endIcon={<ArrowOutwardIcon />}  className='buttonhero42 buttonheroonenew'>
                                        check now
      </Button></Link>
                                    </h4>
                                </div>
                                       
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="single-team-items">
                                        <div className="team-image">
                                            <img src="/assets/img/1.jpg" alt="team-img" />
                                           
                                        </div>
                                        <div className="team-content text-left">
                                          
                                           
                                          
                                          
                                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                                            <h3 style={{fontSize:"14px"}}>
                                                <Link href="/property">2 Beds | 2 Baths</Link>
                                              
                                            </h3>
                                    <h4 style={{ margin: 0 }}>
                                        
                                    <Link href="" style={{color:"#ffffff", fontSize:"25px",fontWeight:"bold"}}>$200.00</Link>
                                    </h4>
                                </div>
                                          
                                          
                                          
                                          
                                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                                            <h3 style={{fontSize:"20px"}}>
                                                <Link href="/property">74 Georgia</Link>
                                                <p style={{fontSize:"14px" , paddingTop:"10px"}}>New York, NY, 10019 United States</p>
                                            </h3>
                                    <h4 style={{ margin: 0 }}>
                                        
                                        <Link href="/property"><Button variant="outlined" endIcon={<ArrowOutwardIcon />}  className='buttonhero42 buttonheroonenew'>
                                        check now
      </Button></Link>
                                    </h4>
                                </div>
                                       
                                        </div>
                                    </div>
                                </div>










                                </div>
                                </div>
                                <div className="col-6 col-lg-6 order-2 order-md-2">
                                    <div className="service-details-items">
                                      
                                    <div className="map-section">
                                        <div className="map-items">
                                            <div className="googpemap">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd" style={{ border: 0, position: 'fixed', height: '100%', width: '100%' }} allowFullScreen loading="lazy" />
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
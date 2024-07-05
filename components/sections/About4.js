
import Link from 'next/link'

export default function About4() {
    return (
        <>
            <section className="about-section section-padding fix bg-cover pt-0 mb-2" id="about" style={{paddingTop:"76px !important",backgroundColor:"rgba(239, 239, 239, 0.96) !important"}}>
                <div className="container">
                    <div className="about-wrapper-2 style-2">
                    <h2 style={{paddingBottom:"33px"}}>Our guiding principles</h2>
                        <div className="row">
                           
                            <div className="col-lg-6 mt-4 mt-lg-0">
                           
                            <div className="col-lg-6 mt-4 mt-lg-0" style={{width:"100% !important"}}>
                            <div className="about43">
                                <div className="icon">
                                    <img src="https://noblq.com/wp-content/uploads/2024/01/Sustainability.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h4 style={{paddingBottom:"12px",paddingTop:"25px"}}>
                                        <Link href="/service-details">
                                        Sustainability
                                        </Link>
                                    </h4>
                                    <p>
                                    Actively engaged in tech education, digital inclusion, and environmental initiatives, we uphold our dedication to social responsibility and sustainable practices.           
                                    </p>
                                </div>
                            </div>
                            </div>


                             <div style={{display:"flex"}}>
                            {/* <div className="col-lg-6 mt-6 mt-lg-0 aboutnewcard">
                            <div className="about42">
                                <div className="icon">
                                    <img src="https://noblq.com/wp-content/uploads/2024/01/Customer-centricity.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h4 style={{paddingBottom:"12px",paddingTop:"25px"}}>
                                        <Link href="/service-details">
                                        Customer centricity
                                        </Link>
                                    </h4>
                                    <p>
                                 
                                    We are committed to understanding, anticipating, and exceeding the needs of our customers.            
                                    </p>
                                </div>
                            </div>
                            </div> */}
                            <div className="col-lg-6 mt-6 mt-lg-0 aboutnewcard2" >
                            <div className="about41">
                                <div className="icon">
                                    <img src="https://noblq.com/wp-content/uploads/2024/01/Employee-experiences.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h4 style={{paddingBottom:"12px",paddingTop:"25px"}}>
                                        <Link href="/service-details">
                                        Employee experiences
                                        </Link>
                                    </h4>
                                    <p>
                                 
                                    Our culture celebrates and embodies the principle of prioritizing people, making it an intuitive part of our work environment.             
                                    </p>
                                </div>
                            </div>
                            </div>
                            </div>

                            </div>




                            <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="about4">
                                <div className="icon">
                                    <img src="https://noblq.com/wp-content/uploads/2024/01/Resilience.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h4 style={{paddingBottom:"12px",paddingTop:"25px"}}>
                                        <Link href="/service-details">
                                        Resilience
                                        </Link>
                                    </h4>
                                    <p>
                                 
              Fostering adaptability and innovation, our commitment to continuous improvement ensures we deliver robust, reliable solutions.              
                                    </p>
                                    <div className="icon" style={{display:"flex",justifyContent:"center",paddingTop:"17px"}}>
                                    <img src="https://noblq.com/wp-content/uploads/2024/01/big-icon.svg" alt="icon-img" className='imgnew' />
                                </div>
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

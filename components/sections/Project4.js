
import Link from 'next/link'
import ProjectSlider1 from '../slider/ProjectSlider1'

export default function Project4() {
    return (
        <>
            <section className="project-section fix section-padding pt-0 mt-4" id="project">
                <div className="container">
                    <div className="section-title text-center">
                        {/* <span className="wow fadeInUp"> Our Projects</span> */}
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Latest showcase and Rooms 
                        </h2>
                        <div className="header-button" style={{paddingTop:"20px"}}>
                                        <Link href="/news" className="theme-btn" style={{padding:"12px"}}>
                                            <span style={{color:"white",marginBottom:"0px"}}>
                                            View More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </span>
                                        </Link>
                                    </div>
                    </div>
                </div>
                <ProjectSlider1 />
                
                
            </section>
        </>
    )
}

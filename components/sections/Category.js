
import Link from 'next/link'

export default function Category() {
    return (
        <>
            <section className="team-section-2 section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/team/bg.jpg")' }}>
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="wow fadeInUp">Team Members</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Find your perfect home by Property Type
                            </h2>
                        </div>
                        <Link href="/team" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                            View All Property
                            <i className="fa-solid fa-arrow-right-long" />
                        </Link>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="team-card-items">
                                <div className="team-image">
                                    <img src="/assets/img/team/01.jpg" alt="team-img" />
                                    <div className="social-profile">
                                        <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                        <ul>
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h3>
                                        <Link href="/team-details">Luxury Living</Link>
                                    </h3>
                                    <p>High-end amenities</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="team-card-items">
                                <div className="team-image">
                                    <img src="/assets/img/team/02.jpg" alt="team-img" />
                                    <div className="social-profile">
                                        <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                        <ul>
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h3>
                                        <Link href="/team-details">Family Homes</Link>
                                    </h3>
                                    <p>Spacious and comfortable</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="team-card-items">
                                <div className="team-image">
                                    <img src="/assets/img/team/03.jpg" alt="team-img" />
                                    <div className="social-profile">
                                        <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                        <ul>
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h3>
                                        <Link href="/team-details">Modern Apartments</Link>
                                    </h3>
                                    <p>Stylish and contemporary</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="team-card-items">
                                <div className="team-image">
                                    <img src="/assets/img/team/03.jpg" alt="team-img" />
                                    <div className="social-profile">
                                        <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                        <ul>
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h3>
                                        <Link href="/team-details">Cozy Studios</Link>
                                    </h3>
                                    <p>Affordable and compact</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="team-card-items">
                                <div className="team-image">
                                    <img src="/assets/img/team/03.jpg" alt="team-img" />
                                    <div className="social-profile">
                                        <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                        <ul>
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h3>
                                        <Link href="/team-details">Eco-Friendly Homes</Link>
                                    </h3>
                                    <p>Sustainable living</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

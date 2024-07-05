"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [activeItem, setActiveItem] = useState(1);
  console.log(activeItem);

  const handleActiveItem = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <div className="mobile-menu fix mb-3 mean-container">
        <div className="mean-bar">
          <Link
            href="/#nav"
            className="meanmenu-reveal"
            style={{ right: 0, left: "auto", display: "inline" }}
          >
            <span>
              <span>
                <span />
              </span>
            </span>
          </Link>
          <nav className="mean-nav">
            {/* <ul>
                            <li className="has-dropdown active menu-thumb">
                                <Link href="/">
                                    Home
                                    <i className="fas fa-angle-down" />
                                </Link>
                                <ul className="submenu has-homemenu" style={{ display: `${activeItem === 1 ? "block" : "none"}` }}>
                                    <li><Link href="/">Home 1</Link></li>
                                    <li><Link href="/index-2">Home 2</Link></li>
                                    <li><Link href="/index-3">Home 3</Link></li>
                                    <li><Link href="/index-4">Home 4</Link></li>
                                </ul>
                                <a className={`mean-expand ${activeItem === 1 ? "mean-clicked" : ""}`} onClick={() => handleActiveItem(1)}>
                                    <i className="far fa-plus" />
                                </a>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/news">
                                    Services
                                    <i className="fas fa-angle-down" />
                                </Link>
                                <ul className="submenu" style={{ display: `${activeItem === 2 ? "block" : "none"}` }}>
                                    <li><Link href="/service">Services</Link></li>
                                    <li><Link href="/service-carousel">Service Carousel</Link></li>
                                    <li><Link href="/service-details">Service Details</Link></li>
                                </ul>
                                <a className={`mean-expand ${activeItem === 2 ? "mean-clicked" : ""}`} onClick={() => handleActiveItem(2)}>
                                    <i className="far fa-plus" />
                                </a>
                            </li>
                            <li className="has-dropdown">
                                <Link href="/news">
                                    Pages
                                    <i className="fas fa-angle-down" />
                                </Link>
                                <ul className="submenu" style={{ display: `${activeItem === 3 ? "block" : "none"}` }}>
                                    <li><Link href="/project">Project</Link></li>
                                    <li><Link href="/project-carousel">Project Carousel</Link></li>
                                    <li><Link href="/project-details">Project Details</Link></li>
                                    <li><Link href="/team">Our Team</Link></li>
                                    <li><Link href="/team-carousel">Team Carousel</Link></li>
                                    <li><Link href="/team-details">Team Details</Link></li>
                                    <li><Link href="/pricing">Pricing</Link></li>
                                    <li><Link href="/faq">Faq's</Link></li>
                                    <li><Link href="/404">404 Page</Link></li>
                                </ul>
                                <a className={`mean-expand ${activeItem === 3 ? "mean-clicked" : ""}`} onClick={() => handleActiveItem(3)}>
                                    <i className="far fa-plus" />
                                </a>
                            </li>
                            <li>
                                <Link href="/news">
                                    Blog
                                    <i className="fas fa-angle-down" />
                                </Link>
                                <ul className="submenu" style={{ display: `${activeItem === 4 ? "block" : "none"}` }}>
                                    <li><Link href="/news">Blog Grid</Link></li>
                                    <li><Link href="/news-standard">Blog Standard</Link></li>
                                    <li><Link href="/news-details">Blog Details</Link></li>
                                </ul>
                                <a className={`mean-expand ${activeItem === 4 ? "mean-clicked" : ""}`} onClick={() => handleActiveItem(4)}>
                                    <i className="far fa-plus" />
                                </a>
                            </li>
                            <li className="mean-last">
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul> */}

            <ul>
              <li className="has-dropdown active menu-thumb">
                <Link href="/listing">
                  Street Review
                  {/* <i className="fas fa-angle-down ps-1" /> */}
                </Link>
                {/* <ul className="submenu has-homemenu">
                        <li>
                            <div className="homemenu-items">
                                <div className="homemenu">
                                    <div className="homemenu-thumb">
                                        <img src="/assets/img/header/home-1.jpg" alt="img" />
                                        <div className="demo-button">
                                            <Link href="/" className="theme-btn">
                                                <span>Multi Page</span>
                                            </Link>
                                            <Link href="/index-one-page" className="theme-btn">
                                                <span>One Page</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="homemenu-content text-center">
                                        <h4 className="homemenu-title">
                                            Home 01
                                        </h4>
                                    </div>
                                </div>
                                <div className="homemenu">
                                    <div className="homemenu-thumb mb-15">
                                        <img src="/assets/img/header/home-2.jpg" alt="img" />
                                        <div className="demo-button">
                                            <Link href="/index-2" className="theme-btn">
                                                <span>Multi Page</span>
                                            </Link>
                                            <Link href="/index-two-page" className="theme-btn">
                                                <span>One Page</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="homemenu-content text-center">
                                        <h4 className="homemenu-title">
                                            Home 02
                                        </h4>
                                    </div>
                                </div>
                                <div className="homemenu">
                                    <div className="homemenu-thumb mb-15">
                                        <img src="/assets/img/header/home-3.jpg" alt="img" />
                                        <div className="demo-button">
                                            <Link href="/index-3" className="theme-btn">
                                                <span>Multi Page</span>
                                            </Link>
                                            <Link href="/index-three-page" className="theme-btn">
                                                <span>One Page</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="homemenu-content text-center">
                                        <h4 className="homemenu-title">
                                            Home 03
                                        </h4>
                                    </div>
                                </div>
                                <div className="homemenu">
                                    <div className="homemenu-thumb mb-15">
                                        <img src="/assets/img/header/home-4.jpg" alt="img" />
                                        <div className="demo-button">
                                            <Link href="/index-4" className="theme-btn">
                                                <span>Multi Page</span>
                                            </Link>
                                            <Link href="/index-four-page" className="theme-btn">
                                                <span>One Page</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="homemenu-content text-center">
                                        <h4 className="homemenu-title">
                                            Home 04
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul> */}
              </li>
              <li>
                <Link href="/listing">Student Buddy</Link>
              </li>
              <li>
                <Link href="/listing">
                  Housing Checklist
                  {/* <i className="fas fa-angle-down ps-1" /> */}
                </Link>
                {/* <ul className="submenu">
                        <li><Link href="/service">Services</Link></li>
                        <li><Link href="/service-carousel">Service Carousel</Link></li>
                        <li><Link href="/service-details">Service Details</Link></li>
                    </ul> */}
              </li>
              {/* <li className="has-dropdown">
                    <Link href="/news">
                    Housing Checklist
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu">
                        <li className="has-dropdown">
                            <Link href="/project">
                                Projects
                                <i className="fas fa-angle-down ps-1" />
                            </Link>
                            <ul className="submenu">
                                <li><Link href="/project">Project</Link></li>
                                <li><Link href="/project-carousel">Project Carousel</Link></li>
                                <li><Link href="/project-details">Project Details</Link></li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <Link href="/team">
                                Team
                                <i className="fas fa-angle-down ps-1" />
                            </Link>
                            <ul className="submenu">
                                <li><Link href="/team">Our Team</Link></li>
                                <li><Link href="/team-carousel">Team Carousel</Link></li>
                                <li><Link href="/team-details">Team Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/pricing">Pricing</Link></li>
                        <li><Link href="/faq">Faq's</Link></li>
                        <li><Link href="/404">404 Page</Link></li>
                    </ul>
                </li> */}
              {/* <li>
                    <Link href="/news">
                        Blog
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu">
                        <li><Link href="/news">Blog Grid</Link></li>
                        <li><Link href="/news-standard">Blog Standard</Link></li>
                        <li><Link href="/news-details">Blog Details</Link></li>
                    </ul>
                </li> */}
              {/* <li>
                    <Link href="/contact">
 
Contact Us</Link>
                </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

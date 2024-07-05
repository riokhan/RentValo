"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "@mui/material/Button";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Layout from "@/components/layout/Layout"
export default function Listing({ handleSearch }) {
  const [setActiveItem] = useState(1);

  const [isHovered, setIsHovered] = useState(false);
  //   const [selectedOption, setSelectedOption] = useState("Exclusive (Default)");
  //   const [hoveredOption, setHoveredOption] = useState(null);
  const [setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
  });
  const [openDropdown, setOpenDropdown] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [beds, setBeds] = useState(1);
  const [baths, setBaths] = useState(1);
  const [homeTypes, setHomeTypes] = useState({
    Apartment: false,
    House: false,
    Condo: false,
    Townhouse: false,
    Villa: false,
  });
  const [homeTypePriceRange, setHomeTypePriceRange] = useState({
    min: 0,
    max: 1000,
  });
  const [filtersPriceRange, setFiltersPriceRange] = useState({
    min: 0,
    max: 1000,
  });
  const [appliedPriceRange, setAppliedPriceRange] = useState({
    min: 0,
    max: 1000,
  });
  const [appliedBeds, setAppliedBeds] = useState(1);
  const [appliedBaths, setAppliedBaths] = useState(1);
  const [appliedHomeTypes, setAppliedHomeTypes] = useState([]);
  const [appliedHomeTypePriceRange, setAppliedHomeTypePriceRange] = useState({
    min: 0,
    max: 1000,
  });
  const [appliedFiltersPriceRange, setAppliedFiltersPriceRange] = useState({
    min: 0,
    max: 1000,
  });

  // const handleClick = (index) => {
  //   setActiveItem(index);
  // };
  //   const handleMouseEnter = () => {
  //     setIsHovered(true);
  //   };
  //   const handleMouseLeave = () => {
  //     setIsHovered(false);
  //   };

  // const options = [
  //   "Exclusive (Default)",
  //   "Price High-Low",
  //   "Price Low-High",
  //   "New Listings First",
  //   "Sq Foot High-Low",
  //   "Acreage High-Low",
  //   "Distance",
  // ];

  const homeTypeOptions = Object.keys(homeTypes);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // const handleContextMenu = (e) => {
  //   e.preventDefault();
  //   setContextMenu({ visible: true, x: e.clientX, y: e.clientY });
  // };

  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  // const closeDropdown = () => {
  //   setOpenDropdown(null);
  // };

  const updatePriceRange = (e) => {
    setPriceRange({ ...priceRange, [e.target.name]: parseInt(e.target.value) });
  };

  const updateBeds = (e) => {
    setBeds(parseInt(e.target.value));
  };

  const updateBaths = (e) => {
    setBaths(parseInt(e.target.value));
  };

  const updateHomeType = (type) => {
    setHomeTypes({
      ...homeTypes,
      [type]: !homeTypes[type],
    });
  };

  const updateHomeTypePriceRange = (e) => {
    setHomeTypePriceRange({
      ...homeTypePriceRange,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const updateFiltersPriceRange = (e) => {
    setFiltersPriceRange({
      ...filtersPriceRange,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const clearPriceRange = () => {
    setPriceRange({ min: 0, max: 1000 });
    setAppliedPriceRange({ min: 0, max: 1000 });
  };

  const applyPriceRange = () => {
    setAppliedPriceRange({ ...priceRange });
    setOpenDropdown(null); // Close dropdown after applying
  };

  const clearBedsAndBaths = () => {
    setBeds(1);
    setBaths(1);
    setAppliedBeds(1);
    setAppliedBaths(1);
  };

  const applyBedsAndBaths = () => {
    setAppliedBeds(beds);
    setAppliedBaths(baths);
    setOpenDropdown(null); // Close dropdown after applying
  };

  const clearHomeTypes = () => {
    setHomeTypes({
      Apartment: false,
      House: false,
      Condo: false,
      Townhouse: false,
      Villa: false,
    });
    setAppliedHomeTypes([]);
    setHomeTypePriceRange({ min: 0, max: 1000 });
    setAppliedHomeTypePriceRange({ min: 0, max: 1000 });
  };

  const applyHomeTypes = () => {
    const selectedTypes = homeTypeOptions.filter((type) => homeTypes[type]);
    setAppliedHomeTypes(selectedTypes);
    setAppliedHomeTypePriceRange({ ...homeTypePriceRange });
    setOpenDropdown(null); // Close dropdown after applying
  };

  const clearFiltersPriceRange = () => {
    setFiltersPriceRange({ min: 0, max: 1000 });
    setAppliedFiltersPriceRange({ min: 0, max: 1000 });
  };

  const applyFiltersPriceRange = () => {
    setAppliedFiltersPriceRange({ ...filtersPriceRange });
    setOpenDropdown(null); // Close dropdown after applying
  };

  const getDropdownStyles = (dropdown) => ({
    display: openDropdown === dropdown ? "block" : "none",
    position: "absolute",
    backgroundColor: "#1e298c",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    zIndex: 10,
    minWidth: "250px",
    padding: "20px",
    borderRadius: "10px",
    left:
      dropdown === "price"
        ? "34%"
        : dropdown === "beds"
        ? "47%"
        : dropdown === "homeTypePrice"
        ? "60.50%"
        : dropdown === "filtersPrice"
        ? "72.50%"
        : "34%",
    color: "#fff",
  });

  const rangeBarStyles = {
    padding: "20px",
  };

  const inputStyles = {
    width: "100%",
    appearance: "none",
    height: "8px",
    background: "#d3d3d3",
    outline: "none",
    opacity: "0.7",
    transition: "opacity .2s",
    fontSize: "16px", // Increase font size for options
  };

  const buttonStyles = {
    marginTop: "20px",
    marginRight: "30px",
    padding: "8px 15px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
    textAlign: "center",
    display: "inline-block",
    fontSize: "14px",
    transitionDuration: "0.4s",
  };

  const clearButtonStyles = {
    ...buttonStyles,
    backgroundColor: "#f44336",
  };

  return (
    <>
      <Layout headerStyle={4} footerStyle={4}>

      {/* <section className="service-details-section fix">
        <div className="container-fluid">
          <div className="news-details-area">
            <div className="row g-5">
              <div className="col-12 col-lg-12">
                <div className="blog-post-details">
                  <div
                    className="post-featured-thumb bg-cover"
                    style={{
                      backgroundImage: 'url("assets/img/news/post-4.jpg")',
                    }}
                  />
                  <div className="row tag-share-wrap mt-4 mb-5">
                    <div className="col-lg-12 col-12 new-map">
                      <div className="tagcloud">
                        <a
                          onClick={handleSearch}
                          className="search-trigger search-icon"
                        >
                          <i className="fal fa-search" />
                        </a>
                        <Link href="">Buy Rent</Link>

                        <Link href="#" onClick={() => toggleDropdown("price")}>
                          PRICE RANGE
                        </Link>
                        <div style={getDropdownStyles("price")}>
                          <div style={rangeBarStyles}>
                            <p style={{ color: "#fff" }}>Price</p>
                            <p style={{ color: "#fff", marginTop: "10px" }}>
                              Any
                            </p>
                            <input
                              type="range"
                              min="0"
                              max="1000"
                              step="10"
                              name="min"
                              value={priceRange.min}
                              onChange={updatePriceRange}
                              style={inputStyles}
                            />
                            <label
                              style={{
                                display: "block",
                                marginTop: "10px",
                                color: "#fff",
                              }}
                            >
                              Price Range: ${priceRange.min} - ${priceRange.max}
                            </label>
                            <div
                              data-v-0e247d3d=""
                              className="Filter-slider__range u-color-white"
                            >
                              <span
                                data-v-0e247d3d=""
                                className="Filter-slider__range-label Filter-slider__range-label--min p2"
                              >
                                No Min
                              </span>
                              <span
                                data-v-0e247d3d=""
                                className="Filter-slider__range-label Filter-slider__range-label--max p2"
                              >
                                No Max
                              </span>
                            </div>
                            <div>
                              <button
                                style={clearButtonStyles}
                                onClick={clearPriceRange}
                              >
                                Clear
                              </button>
                              <button
                                style={buttonStyles}
                                onClick={applyPriceRange}
                              >
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>

                        <Link href="#" onClick={() => toggleDropdown("beds")}>
                          BEDS &amp; BATHS
                        </Link>
                        <div style={getDropdownStyles("beds")}>
                          <div style={rangeBarStyles}>
                            <p style={{ color: "#fff" }}>Beds</p>
                            <input
                              type="range"
                              min="1"
                              max="5"
                              step="1"
                              value={beds}
                              onChange={updateBeds}
                              style={inputStyles}
                            />
                            <p style={{ color: "#fff", marginTop: "10px" }}>
                              Baths
                            </p>
                            <input
                              type="range"
                              min="1"
                              max="5"
                              step="1"
                              value={baths}
                              onChange={updateBaths}
                              style={inputStyles}
                            />
                            <hr style={{ backgroundColor: "#fff" }} />
                            <div>
                              <button
                                style={clearButtonStyles}
                                onClick={clearBedsAndBaths}
                              >
                                Clear
                              </button>
                              <button
                                style={buttonStyles}
                                onClick={applyBedsAndBaths}
                              >
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>

                        <Link
                          href="#"
                          onClick={() => toggleDropdown("homeTypePrice")}
                        >
                          HOME TYPE
                        </Link>
                        <div style={getDropdownStyles("homeTypePrice")}>
                          <div style={rangeBarStyles}>
                            <p style={{ color: "#fff" }}>Home Types</p>
                            {homeTypeOptions.map((option, index) => (
                              <label
                                key={index}
                                style={{
                                  display: "block",
                                  marginTop: "5px",
                                  cursor: "pointer",
                                }}
                              >
                                <input
                                  type="checkbox"
                                  checked={homeTypes[option]}
                                  onChange={() => updateHomeType(option)}
                                  style={{ marginRight: "5px" }}
                                />
                                {option}
                              </label>
                            ))}
                            <p style={{ color: "#fff", marginTop: "10px" }}>
                              Price Range
                            </p>
                            <input
                              type="range"
                              min="0"
                              max="1000"
                              step="10"
                              name="min"
                              value={homeTypePriceRange.min}
                              onChange={updateHomeTypePriceRange}
                              style={inputStyles}
                            />
                            <label
                              style={{
                                display: "block",
                                marginTop: "10px",
                                color: "#fff",
                              }}
                            >
                              Price Range: ${homeTypePriceRange.min} - $
                              {homeTypePriceRange.max}
                            </label>
                            <div>
                              <button
                                style={clearButtonStyles}
                                onClick={clearHomeTypes}
                              >
                                Clear
                              </button>
                              <button
                                style={buttonStyles}
                                onClick={applyHomeTypes}
                              >
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>

                        <Link
                          href="#"
                          onClick={() => toggleDropdown("filtersPrice")}
                        >
                          FILTERS
                        </Link>
                        <div style={getDropdownStyles("filtersPrice")}>
                          <div style={rangeBarStyles}>
                            <p style={{ color: "#fff" }}>Filters Price</p>
                            <p style={{ color: "#fff", marginTop: "10px" }}>
                              Any
                            </p>
                            <input
                              type="range"
                              min="0"
                              max="1000"
                              step="10"
                              name="min"
                              value={filtersPriceRange.min}
                              onChange={updateFiltersPriceRange}
                              style={inputStyles}
                            />
                            <label
                              style={{
                                display: "block",
                                marginTop: "10px",
                                color: "#fff",
                              }}
                            >
                              Price Range: ${filtersPriceRange.min} - $
                              {filtersPriceRange.max}
                            </label>
                            <div
                              data-v-0e247d3d=""
                              className="Filter-slider__range u-color-white"
                            >
                              <span
                                data-v-0e247d3d=""
                                className="Filter-slider__range-label Filter-slider__range-label--min p2"
                              >
                                No Min
                              </span>
                              <span
                                data-v-0e247d3d=""
                                className="Filter-slider__range-label Filter-slider__range-label--max p2"
                              >
                                No Max
                              </span>
                            </div>
                            <div>
                              <button
                                style={clearButtonStyles}
                                onClick={clearFiltersPriceRange}
                              >
                                Clear
                              </button>
                              <button
                                style={buttonStyles}
                                onClick={applyFiltersPriceRange}
                              >
                                Apply
                              </button>
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
      </section> */}

      <section className="service-details-section fix">
        <div className="container-fluid">
          <div className="service-details-wrapper">
            <div className="row g-4 section-padding">
              <div className="col-12 col-lg-7 col-md-6 order-1 order-md-1">
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
                  {/* <div className="section-title-area">
                    <div className="section-title">
                      <span className="wow fadeInUp">
                        Viewing 24 of 732,748 Homes for Sale in All locations
                      </span>
                      <h6
                        className="wow fadeInUp"
                        style={{ color: "#a19c9c" }}
                        data-wow-delay=".3s"
                      >
                        Showing listings marketed by all brokers in the searched
                        area.
                      </h6>
                    </div>
                
                  </div> */}
                  <div
                    className="dropdown"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      cursor: "pointer",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span style={{ color: "#002349 !important" }}>
                      SORT: EXCLUSIVE (DEFAULT)
                      <i className="fas fa-angle-down ps-1" />
                    </span>

                    <div
                      className="dropdown-content"
                      style={{
                        display: isHovered ? "block" : "none",
                        position: "absolute",
                        minWidth: "160px",
                        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                        flexDirection: "column",
                        padding: "24px 30px 31px",
                        zIndex: "1",
                        color: "whitesmoke",
                        cursor: "pointer",
                        backgroundColor: "#002349",
                        borderRadius: "5px",
                      }}
                    >
                      <p>Exclusive (Default)</p>
                      <p>Price High-Low</p>
                      <p>Price Low-High</p>
                      <p>New Listings First</p>
                      <p>Sq Foot High-Low</p>
                      <p>Acreage High-Low</p>
                      <p>Distance</p>
                    </div>
                  </div>
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="single-team-items">
                      <div className="team-image">
                        <img src="/assets/img/2.jpg" alt="team-img" />
                      </div>
                      <div className="team-content text-left">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <h3 style={{ fontSize: "14px" }}>
                            <Link href="/property">2 Beds | 2 Baths</Link>
                          </h3>
                          <h4 style={{ margin: 0 }}>
                            <Link
                              href="/property"
                              style={{
                                color: "#ffffff",
                                fontSize: "25px",
                                fontWeight: "bold",
                              }}
                            >
                              $200.00
                            </Link>
                          </h4>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <h3 style={{ fontSize: "20px" }}>
                            <Link href="/property">74 Georgia</Link>
                            <p style={{ fontSize: "14px", paddingTop: "10px" }}>
                              New York, NY, 10019 United States
                            </p>
                          </h3>
                          <h4 style={{ margin: 0 }}>
                            <Link href="/property">
                              <Button
                                variant="outlined"
                                endIcon={<ArrowOutwardIcon />}
                                className="buttonhero42 buttonheroonenew"
                              >
                                check now
                              </Button>
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="single-team-items">
                      <div className="team-image">
                        <img src="/assets/img/1.jpg" alt="team-img" />
                      </div>
                      <div className="team-content text-left">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <h3 style={{ fontSize: "14px" }}>
                            <Link href="/property">2 Beds | 2 Baths</Link>
                          </h3>
                          <h4 style={{ margin: 0 }}>
                            <Link
                              href="/property"
                              style={{
                                color: "#ffffff",
                                fontSize: "25px",
                                fontWeight: "bold",
                              }}
                            >
                              $200.00
                            </Link>
                          </h4>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <h3 style={{ fontSize: "20px" }}>
                            <Link href="/property">74 Georgia</Link>
                            <p style={{ fontSize: "14px", paddingTop: "10px" }}>
                              New York, NY, 10019 United States
                            </p>
                          </h3>
                          <h4 style={{ margin: 0 }}>
                            <Link href="/property">
                              <Button
                                variant="outlined"
                                endIcon={<ArrowOutwardIcon />}
                                className="buttonhero42 buttonheroonenew"
                              >
                                check now
                              </Button>
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="single-team-items">
                      <div className="team-image">
                        <img src="/assets/img/4.jpg" alt="team-img" />
                      </div>
                      <div className="team-content text-left">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <h3 style={{ fontSize: "14px" }}>
                            <Link href="/property">2 Beds | 2 Baths</Link>
                          </h3>
                          <h4 style={{ margin: 0 }}>
                            <Link
                              href=""
                              style={{
                                color: "#ffffff",
                                fontSize: "25px",
                                fontWeight: "bold",
                              }}
                            >
                              $200.00
                            </Link>
                          </h4>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <h3 style={{ fontSize: "20px" }}>
                            <Link href="/property">74 Georgia</Link>
                            <p style={{ fontSize: "14px", paddingTop: "10px" }}>
                              New York, NY, 10019 United States
                            </p>
                          </h3>
                          <h4 style={{ margin: 0 }}>
                            <Link href="/property">
                              <Button
                                variant="outlined"
                                endIcon={<ArrowOutwardIcon />}
                                className="buttonhero42 buttonheroonenew"
                              >
                                check now
                              </Button>
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="single-team-items">
                      <div className="team-image">
                        <img src="/assets/img/3.jpg" alt="team-img" />
                      </div>
                      <div className="team-content text-left">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <h3 style={{ fontSize: "14px" }}>
                            <Link href="/property">2 Beds | 2 Baths</Link>
                          </h3>
                          <h4 style={{ margin: 0 }}>
                            <Link
                              href=""
                              style={{
                                color: "#ffffff",
                                fontSize: "25px",
                                fontWeight: "bold",
                              }}
                            >
                              $200.00
                            </Link>
                          </h4>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <h3 style={{ fontSize: "20px" }}>
                            <Link href="/property">74 Georgia</Link>
                            <p style={{ fontSize: "14px", paddingTop: "10px" }}>
                              New York, NY, 10019 United States
                            </p>
                          </h3>
                          <h4 style={{ margin: 0 }}>
                            <Link href="/property">
                              <Button
                                variant="outlined"
                                endIcon={<ArrowOutwardIcon />}
                                className="buttonhero42 buttonheroonenew"
                              >
                                check now
                              </Button>
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="single-team-items">
                      <div className="team-image">
                        <img src="/assets/img/1.jpg" alt="team-img" />
                      </div>
                      <div className="team-content text-left">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <h3 style={{ fontSize: "14px" }}>
                            <Link href="/property">2 Beds | 2 Baths</Link>
                          </h3>
                          <h4 style={{ margin: 0 }}>
                            <Link
                              href=""
                              style={{
                                color: "#ffffff",
                                fontSize: "25px",
                                fontWeight: "bold",
                              }}
                            >
                              $200.00
                            </Link>
                          </h4>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <h3 style={{ fontSize: "20px" }}>
                            <Link href="/property">74 Georgia</Link>
                            <p style={{ fontSize: "14px", paddingTop: "10px" }}>
                              New York, NY, 10019 United States
                            </p>
                          </h3>
                          <h4 style={{ margin: 0 }}>
                            <Link href="/property">
                              <Button
                                variant="outlined"
                                endIcon={<ArrowOutwardIcon />}
                                className="buttonhero42 buttonheroonenew"
                              >
                                check now
                              </Button>
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="single-team-items">
                      <div className="team-image">
                        <img src="/assets/img/4.jpg" alt="team-img" />
                      </div>
                      <div className="team-content text-left">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <h3 style={{ fontSize: "14px" }}>
                            <Link href="/property">2 Beds | 2 Baths</Link>
                          </h3>
                          <h4 style={{ margin: 0 }}>
                            <Link
                              href=""
                              style={{
                                color: "#ffffff",
                                fontSize: "25px",
                                fontWeight: "bold",
                              }}
                            >
                              $200.00
                            </Link>
                          </h4>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <h3 style={{ fontSize: "20px" }}>
                            <Link href="/property">74 Georgia</Link>
                            <p style={{ fontSize: "14px", paddingTop: "10px" }}>
                              New York, NY, 10019 United States
                            </p>
                          </h3>
                          <h4 style={{ margin: 0 }}>
                            <Link href="/property">
                              <Button
                                variant="outlined"
                                endIcon={<ArrowOutwardIcon />}
                                className="buttonhero42 buttonheroonenew"
                              >
                                check now
                              </Button>
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="single-team-items">
                      <div className="team-image">
                        <img src="/assets/img/3.jpg" alt="team-img" />
                      </div>
                      <div className="team-content text-left">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <h3 style={{ fontSize: "14px" }}>
                            <Link href="/property">2 Beds | 2 Baths</Link>
                          </h3>
                          <h4 style={{ margin: 0 }}>
                            <Link
                              href=""
                              style={{
                                color: "#ffffff",
                                fontSize: "25px",
                                fontWeight: "bold",
                              }}
                            >
                              $200.00
                            </Link>
                          </h4>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <h3 style={{ fontSize: "20px" }}>
                            <Link href="/property">74 Georgia</Link>
                            <p style={{ fontSize: "14px", paddingTop: "10px" }}>
                              New York, NY, 10019 United States
                            </p>
                          </h3>
                          <h4 style={{ margin: 0 }}>
                            <Link href="/property">
                              <Button
                                variant="outlined"
                                endIcon={<ArrowOutwardIcon />}
                                className="buttonhero42 buttonheroonenew"
                              >
                                check now
                              </Button>
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="single-team-items">
                      <div className="team-image">
                        <img src="/assets/img/1.jpg" alt="team-img" />
                      </div>
                      <div className="team-content text-left">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <h3 style={{ fontSize: "14px" }}>
                            <Link href="/property">2 Beds | 2 Baths</Link>
                          </h3>
                          <h4 style={{ margin: 0 }}>
                            <Link
                              href=""
                              style={{
                                color: "#ffffff",
                                fontSize: "25px",
                                fontWeight: "bold",
                              }}
                            >
                              $200.00
                            </Link>
                          </h4>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <h3 style={{ fontSize: "20px" }}>
                            <Link href="/property">74 Georgia</Link>
                            <p style={{ fontSize: "14px", paddingTop: "10px" }}>
                              New York, NY, 10019 United States
                            </p>
                          </h3>
                          <h4 style={{ margin: 0 }}>
                            <Link href="/property">
                              <Button
                                variant="outlined"
                                endIcon={<ArrowOutwardIcon />}
                                className="buttonhero42 buttonheroonenew"
                              >
                                check now
                              </Button>
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-5 col-md-6 order-2 order-md-2">
                <div className="service-details-items">
                  <div className="map-section">
                    <div className="map-items">
                      <div className="googpemap">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                          style={{
                            border: 0,
                            position: "fixed",
                            height: "100%",
                            width: "100%",
                          }}
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </Layout>
    </>
  );
}

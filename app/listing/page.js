"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "@mui/material/Button";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Layout from "@/components/layout/Layout"
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';


import { Select, MenuItem, Checkbox, ListItemText } from '@mui/material';


const CheckboxOption = ({ value, isChecked, children }) => (
  <MenuItem value={value}>
    <Checkbox checked={isChecked} />
    <ListItemText primary={children} />
  </MenuItem>
);


export default function Listing({ handleSearch }) {

  const [currentValues, setCurrentValues] = useState([]);
  const defaultValue = 'Beds & Baths';
  const defaultValue1 = 'Home Type';
  const defaultValue2 = 'Price Range';

  const handleChange = (event) => {
    const value = event.target.value;
    setCurrentValues(
      currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value]
    );
  };
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

    

      <section className="service-details-section fix  section-padding">
        <div className="container-fluid">
          <div className="service-details-wrapper">
            
            <div className="row g-4 section-padding">
              <div className="col-12 col-lg-7 col-md-6 order-1 order-md-1">
                <div className="row g-4">
                  
                
                  <div
                    className="dropdown"
                    style={{
                      position: "relative",
                      display: "flex",
                      cursor: "pointer",
                      gap:"10px"
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                   
                      <Select
      multiple
      value={currentValues}
      onChange={handleChange}
      displayEmpty
      renderValue={(selected) => (selected.length ? selected.join(', ') : defaultValue2)}
    >
      <CheckboxOption value="$50-$100" isChecked={currentValues.includes('$50-$100')}>
      $50-$100
      </CheckboxOption>
      <CheckboxOption value="$500-$1000" isChecked={currentValues.includes('$500-$1000')}>
      $500-$1000
      </CheckboxOption>
      <CheckboxOption value="$1000-$1500" isChecked={currentValues.includes('$1000-$1500')}>
      $1000-$1500
      </CheckboxOption>
    </Select>
                    <Select
      multiple
      value={currentValues}
      onChange={handleChange}
      displayEmpty
      renderValue={(selected) => (selected.length ? selected.join(', ') : defaultValue)}
    >
      <CheckboxOption value=" 2 Beds & 1 Baths" isChecked={currentValues.includes('2 Beds & 1 Baths')}>
        2 Beds & 1 Baths
      </CheckboxOption>
      <CheckboxOption value=" Beds & 1 Baths" isChecked={currentValues.includes('1 Beds & 1 Baths')}>
       Beds & 1 Baths
      </CheckboxOption>
      <CheckboxOption value="3 Beds & 2 Baths" isChecked={currentValues.includes('3 Beds & 2 Baths')}>
      3 Beds & 2 Baths
      </CheckboxOption>
    </Select>
    <Select
      multiple
      value={currentValues}
      onChange={handleChange}
      displayEmpty
      renderValue={(selected) => (selected.length ? selected.join(', ') : defaultValue1)}
    >
      <CheckboxOption value="Apartments" isChecked={currentValues.includes('Apartments')}>
      Apartments
      </CheckboxOption>
      <CheckboxOption value="Bed And Breakfast" isChecked={currentValues.includes('Bed And Breakfast')}>
      Bed And Breakfast
      </CheckboxOption>
      <CheckboxOption value="Condominiums" isChecked={currentValues.includes('Condominiums')}>
      Condominiums
      </CheckboxOption>
    </Select>
  
                  </div>
                  <div
                    className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
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
                         
                        </div>
                        <Link href="/property" className="theme-btn-2 mt-3" style={{color:"#f29900"}}>
                        check availability
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
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
                           
                          </h4>
                        </div>
                        <Link href="/property" className="theme-btn-2 mt-3" style={{color:"#f29900"}}>
                        check availability
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>

                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
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
                         
                        </div>
                        <Link href="/property" className="theme-btn-2 mt-3" style={{color:"#f29900"}}>
                        Check availability
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
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
                         
                        </div>
                        <Link href="/property" className="theme-btn-2 mt-3" style={{color:"#f29900"}}>
                        Check availability
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
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
                         
                        </div>
                        <Link href="/property" className="theme-btn-2 mt-3" style={{color:"#f29900"}}>
                        Check availability
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
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
                         
                        </div>
                        <Link href="/property" className="theme-btn-2 mt-3" style={{color:"#f29900"}}>
                        Check availability
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
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
                         
                        </div>
                        <Link href="/property" className="theme-btn-2 mt-3" style={{color:"#f29900"}}>
                        Check availability
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
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
                         
                        </div>
                        <Link href="/property" className="theme-btn-2 mt-3" style={{color:"#f29900"}}>
                        Check availability
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
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
                         
                        </div>
                        <Link href="/property" className="theme-btn-2 mt-3" style={{color:"#f29900"}}>
                        Check availability
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
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

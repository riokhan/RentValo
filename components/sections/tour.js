"use client";
import { useState } from "react";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Tour() {
  //   const [selectedDates, setSelectedDates] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);

  const teamImages = [
    {
      main: "/assets/img/team/team1.jpeg",
      thumbnails: [
        "/assets/img/team/team2.jpeg",
        "/assets/img/team/team3.jpeg",
        "/assets/img/team/team4.jpeg",
      ],
    },
    {
      main: "/assets/img/team/team2.jpeg",
      thumbnails: [
        "/assets/img/team/team5.jpg",
        "/assets/img/team/team6.jpeg",
        "/assets/img/team/team7.jpeg",
      ],
    },
    {
      main: "/assets/img/team/team5.jpg",
      thumbnails: [
        "/assets/img/team/team1.jpeg",
        "/assets/img/team/team2.jpeg",
        "/assets/img/team/team3.jpeg",
      ],
    },
  ];

  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateClick = (date) => {
    setSelectedDates((prev) => {
      if (prev.includes(date)) {
        return prev.filter((d) => d !== date);
      }
      return [...prev, date];
    });
  };

  const dates = [
    { day: "Mon", date: 8 },
    { day: "Tue", date: 9 },
    { day: "Wed", date: 10 },
    { day: "Thu", date: 11 },
    { day: "Fri", date: 12 },
    { day: "Sat", date: 13 },
    { day: "Mon", date: 15 },
  ];

  const times = [
    "10:00 am",
    "10:30 am",
    "11:00 am",
    "11:30 am",
    "12:00 pm",
    "12:30 pm",
    "1:00 pm",
    "1:30 pm",
    "2:00 pm",
    "2:30 pm",
    "3:00 pm",
    "3:30 pm",
    "4:00 pm",
    "4:30 pm",
    "5:00 pm",
    "5:30 pm",
    "6:00 pm",
    "6:30 pm",
  ];

  const handleTimeClick = (time) => {
    setSelectedTimes((prev) => {
      if (prev.includes(time)) {
        return prev.filter((t) => t !== time);
      }
      return [...prev, time];
    });
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % teamImages.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + teamImages.length) % teamImages.length);
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={2}>
        <section className="team-details-section fix section-padding">
          <div className="container-fluid">
            <div className="team-details-wrapper">
              <div className="row g-4">
                <div className="col-lg-5 new-team">
                  <p style={{ fontSize: "20px", marginBottom: "5px" }}>
                    21 Cornelius Way, #, (East Cambridge)
                  </p>
                  <div className="team-details-image">
                    <button
                      className="scroll-button left"
                      onClick={handlePrevClick}
                    >
                      &lt;
                    </button>
                    <img
                      src={teamImages[currentIndex].main}
                      alt="team-img"
                      className="main-image"
                    />
                    <button
                      className="scroll-button right"
                      onClick={handleNextClick}
                    >
                      &gt;
                    </button>
                  </div>
                  <div className="thumbnail-container">
                    {teamImages[currentIndex].thumbnails.map(
                      (thumbnail, index) => (
                        <img
                          key={index}
                          src={thumbnail}
                          alt={`thumbnail-${index}`}
                          className="thumbnail"
                          onClick={() => handleThumbnailClick(index)}
                        />
                      )
                    )}
                  </div>
                  <div className="row mt-4">
                    <div className="col-6">
                      <p>
                        Rent
                        <br />
                        <span> $8000/month</span>
                      </p>
                    </div>

                    <div className="col-6 text-end">
                      <p>Move in date</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="team-details-content">
                    <div className="details-info">
                      <h3>Request a viewing</h3>
                      <span>Submit new viewing request</span>
                      <p>
                        Pick all preferred time slots (Can select multiple
                        options)
                      </p>
                    </div>

                    {/* <div className="row">
                      <div className="picker-date col-lg-2 col-sm-2">
                        <div className="postnew-date">
                          <h3>
                            4 <br />
                            <span>July</span>
                          </h3>
                        </div>
                      </div>
                      <div className="picker-date col-lg-2 col-sm-2">
                        <div className="postnew-date">
                          <h3>
                            5 <br />
                            <span>July</span>
                          </h3>
                        </div>
                      </div>
                      <div className="picker-date col-lg-2 col-sm-2">
                        <div className="postnew-date">
                          <h3>
                            6 <br />
                            <span>July</span>
                          </h3>
                        </div>
                      </div>
                      <div className="picker-date col-lg-2 col-sm-2">
                        <div className="postnew-date">
                          <h3>
                            8 <br />
                            <span>July</span>
                          </h3>
                        </div>
                      </div>
                      <div className="picker-date col-lg-2 col-sm-2">
                        <div className="postnew-date">
                          <h3>
                            9 <br />
                            <span>July</span>
                          </h3>
                        </div>
                      </div>
                      <div className="picker-date col-lg-2 col-sm-2">
                        <div className="postnew-date">
                          <h3>
                            10 <br />
                            <span>July</span>
                          </h3>
                        </div>
                      </div>
                    </div> */}

                    {/* <div className="picker-date">
                      <div className="postnew-date">
                        <h3>
                          10 <br />
                          <span>Feb</span>
                        </h3>
                      </div>
                    </div> */}

                    {/* <div className="row">
                        {dates.map((date) => (
                          <div key={date} className="picker-date">
                            <div
                              className={`postnew-date ${
                                selectedDate === date ? "selected" : ""
                              }`}
                              onClick={() => handleDateClick(date)}
                            >
                              <h4>
                                {date} <br />
                                <span>July</span>
                              </h4>
                            </div>
                          </div>
                        ))}
                      </div> */}
                    {/* <div className="date-options">
                        {dates.map(({ day, date }) => (
                          <div
                            key={date}
                            className={`date-option ${
                              selectedDates.includes(date) ? "selected" : ""
                            }`}
                            onClick={() => handleDateClick(date)}
                          >
                            <div>{day}</div>
                            <div>{date}</div>
                          </div>
                        ))}
                      </div> */}
                    <p>Pick Date</p>
                    <div className="date-picker" style={{ marginTop: "15px" }}>
                      {dates.map(({ day, date }) => (
                        <div
                          key={date}
                          className={`date-option ${
                            selectedDates.includes(date) ? "selected" : ""
                          }`}
                          onClick={() => handleDateClick(date)}
                        >
                          <h3>
                            {date}

                            <br />
                            <span>{day}</span>
                          </h3>
                        </div>
                      ))}
                    </div>
                    <p style={{ marginTop: "15px" }}>Pick Time</p>
                    <div className="time-picker" style={{ marginTop: "15px" }}>
                      {times.map((time) => (
                        <div
                          key={time}
                          className={`time-option ${
                            selectedTimes.includes(time) ? "selected" : ""
                          }`}
                          onClick={() => handleTimeClick(time)}
                        >
                          {time}
                        </div>
                      ))}
                    </div>

                    <button className="next-button">Next</button>
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

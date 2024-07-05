import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function BookingPage() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={2}>
        <div>
          <section className="contact-section fix section-padding">
            <div className="container">
              <div className="contact-wrapper-2">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                    <div className="contact-left-items">
                      <div className="contact-info-area-2 newbook">
                        <img
                          src="/assets/img/1.jpg"
                          alt="img"
                          style={{ width: "100%", height: "600px" }}
                        />
                      </div>
                      {/* <div className="video-image">
                        <img src="/assets/img/video.jpg" alt="img" />
                        <VideoPopup style={1} />
                      </div> */}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-content">
                      <h2>Contact Us for Booking</h2>
                      {/* <p>
                        Nullam varius, erat quis iaculis dictum, eros urna
                        varius eros, ut blandit felis odio in turpis. Quisque
                        rhoncus, eros in auctor ultrices,
                      </p> */}
                      <form
                        action="contact.php"
                        id="contact-form"
                        method="POST"
                        className="contact-form-items"
                      >
                        <div className="row g-4">
                          <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div className="form-clt">
                              <span>Name*</span>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your Name"
                              />
                            </div>
                          </div>
                          <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay=".5s"
                          >
                            <div className="form-clt">
                              <span>Email*</span>
                              <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                              />
                            </div>
                          </div>

                          <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div className="form-clt">
                              <span>Phone No*</span>
                              <input
                                type="number"
                                name="phoneno"
                                id="phoneno"
                                placeholder="Your Phone No"
                              />
                            </div>
                          </div>
                          <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay=".5s"
                          >
                            <div className="form-clt">
                              <span>Address*</span>
                              <input
                                type="text"
                                name="address"
                                id="address"
                                placeholder="Your Address"
                              />
                            </div>
                          </div>
                          <div
                            className="col-lg-12 wow fadeInUp"
                            data-wow-delay=".7s"
                          >
                            <div className="form-clt">
                              <span>Write Message*</span>
                              <textarea
                                name="message"
                                id="message"
                                placeholder="Write Message"
                              />
                            </div>
                          </div>
                          <div
                            className="col-lg-7 wow fadeInUp"
                            data-wow-delay=".9s"
                          >
                        <Link href="/" >  <button type="submit" className="theme-btn">
                              Send Message{" "}
                              <i className="fa-solid fa-arrow-right-long" />
                            </button> </Link>  
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*<< Map Section Start >>*/}
        </div>
      </Layout>
    </>
  );
}

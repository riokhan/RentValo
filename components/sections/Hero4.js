
// import Link from 'next/link'
// import VideoPopup from '../elements/VideoPopup'

// export default function Hero4() {
//     return (
//         <>
//             <section className="hero-section hero-4 bg-cover" >
//             <video autoPlay muted loop style={{width:"100%"}}>
//                 <source src="https://www.noblq.com/wp-content/uploads/2024/02/video-3.mp4" type="video/mp4" />
//                 <div className="container">
//                     <div className="row g-4 align-items-center">
//                         <div className="col-lg-6">
//                             <div className="hero-content">
//                                 <h6 className="wow fadeInUp">Applying Data security</h6>
//                                 <h1 className="wow fadeInUp" data-wow-delay=".3s">Security Analytics For Big Data.</h1>
//                                 <p className="wow fadeInUp" data-wow-delay=".5s">
//                                     Consectetur adipiscing elit aenean scelerisque at augue vitae consequat quisque eget congue velit in cursus leo sed sodales est eget turpis.
//                                 </p>
//                                 <div className="hero-button">
//                                     <Link href="/about" className="theme-btn wow fadeInUp" data-wow-delay=".7s">
//                                         Explore More
//                                         <i className="fa-solid fa-arrow-right-long" />
//                                     </Link>
//                                     <VideoPopup style={3}/>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
//                             <div className="hero-image">
//                                 <img src="/assets/img/hero/hero-4.png" alt="hero-img" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 </video>
//             </section>
//         </>
//     )
// }


// import Link from 'next/link';
// import VideoPopup from '../elements/VideoPopup';

// export default function Hero4() {
//     return (
//         <>
//             <section className="hero-section hero-4 bg-cover" style={{ position: 'relative', overflow: 'hidden',height:"100vh" }}>
//                 <video autoPlay muted loop style={{ width: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
//                     <source src="https://www.noblq.com/wp-content/uploads/2024/02/video-3.mp4" type="video/mp4" />
//                 </video>
//                 <div className="container" style={{ position: 'relative', zIndex: 1 }}>
//                     <div className="row g-4 align-items-center">
//                         <div className="col-lg-6">
//                             <div className="hero-content">
//                                 <h6 className="wow fadeInUp">Applying Data Security</h6>
//                                 <h1 className="wow fadeInUp" data-wow-delay=".3s">Security Analytics For Big Data.</h1>
//                                 <p className="wow fadeInUp" data-wow-delay=".5s">
//                                     Consectetur adipiscing elit aenean scelerisque at augue vitae consequat quisque eget congue velit in cursus leo sed sodales est eget turpis.
//                                 </p>
//                                 <div className="hero-button">
//                                     <Link href="/about" className="theme-btn wow fadeInUp" data-wow-delay=".7s">
//                                         Explore More
//                                         <i className="fa-solid fa-arrow-right-long" />
//                                     </Link>
//                                     <VideoPopup style={3} />
//                                 </div>
//                             </div>
//                         </div>
//                         {/* <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
//                             <div className="hero-image">
//                                 <img src="/assets/img/hero/hero-4.png" alt="hero-img" />
//                             </div>
//                         </div> */}
//                     </div>
//                 </div>
//                 {/* <div style={{
//                     position: 'absolute',
//                     top: '50%',
//                     left: '50%',
//                     transform: 'translate(-50%, -50%)',
//                     color: 'white',
//                     zIndex: 2,
//                     textAlign: 'center'
//                 }}>
//                     <h1>Hello Bala</h1>
//                 </div> */}
//             </section>
//         </>
//     );
// }


// import Link from 'next/link';
// import VideoPopup from '../elements/VideoPopup';

// export default function Hero4() {
//     return (
//         <>
//             <section className="hero-section hero-4 bg-cover" style={{ position: 'relative', overflow: 'hidden', height: "100vh" }}>
//                 <video autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
//                     <source src="https://www.noblq.com/wp-content/uploads/2024/02/video-3.mp4" type="video/mp4" />
//                 </video>
//                 <div className="container" style={{ position: 'relative', zIndex: 1 }}>
//                     <div className="row g-4 align-items-center">
//                         <div className="col-lg-6">
//                             <div className="hero-content" style={{width:"60%",position:"absolute"}}>
//                                 {/* <h6 className="wow fadeInUp">Applying Data Security</h6> */}
//                                 <h1 className="wow fadeInUp" data-wow-delay=".3s" style={{fontSize: "64px",
//     fontWeight: "700",
//     lineHeight: "120%",
//     color: "#ffffff",
//     marginBottom: "16px",
//     }}>Building a company that matters</h1>
//                                 <p className="wow fadeInUp" data-wow-delay=".5s">
//                                 A digital solutions company with a strong emphasis on AI and core technologies.                            
//                                       </p>
                               
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

import Link from 'next/link';
import VideoPopup from '../elements/VideoPopup';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function Hero4() {
    return (
        <>
            <section className="hero-section hero-4 bg-cover videonew" style={{ position: 'relative', overflow: 'hidden', height:"100vh"}}>
                <video autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
                    <source src="https://www.noblq.com/wp-content/uploads/2024/02/video-3.mp4" type="video/mp4" />
                </video>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-content hero4new">
                                <h1 className="wow fadeInUp hero4titlenew" data-wow-delay=".3s">Renting made quick & simple.</h1>
                                <p className="wow fadeInUp heroPtag" data-wow-delay=".5s" style={{color:"#ffffff"}}>Your Boston Housing Journey Starts Here. Simple Solutions for Renters</p>
                                <div style={{paddingTop:"20px"}}>
                                <Button variant="contained" className='buttonhero41' endIcon={<ArrowOutwardIcon />}>
        Find my home
      </Button>
                                <Button variant="outlined" endIcon={<ArrowOutwardIcon />}  className='buttonhero42'>
                                Find Roommates
      </Button>
      </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

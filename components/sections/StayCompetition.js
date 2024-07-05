import Link from 'next/link';
import VideoPopup from '../elements/VideoPopup';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function StayCompetition() {
    return (
        <>
            <section className="hero-section hero-4 bg-cover videonew container-fluid" style={{ position: 'relative', overflow: 'hidden' }}>
                <video autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
                    <source src="https://www.noblq.com/wp-content/uploads/2024/02/video-3.mp4" type="video/mp4" />
                </video>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-3 d-none d-lg-block">
                           
                            <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '8px', color: '#fff' }}>
                                Left Content
                            </div>
                        </div>
                       
                        <div className="col-lg-3 d-none d-lg-block">
                            {/* Right dummy content */}
                            <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '8px', color: '#fff' }}>
                                Right Content
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

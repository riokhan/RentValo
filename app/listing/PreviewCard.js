// import React from 'react';
// import './PreviewCard.css';
// import BedIcon from '@mui/icons-material/Bed';
// import BathtubIcon from '@mui/icons-material/Bathtub';
// import Chip from '@mui/material/Chip';
// import PersonIcon from '@mui/icons-material/Person';
// const PreviewCard = () => {
//   return (
//     <div className="container">
//       <div className="row mt-5">
//         <div className="preview-card">
//           <div className="preview-card__wrp">
//             <div className="preview-card__item">
//               <div className="preview-card__img">
//                 <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" alt="" />
//               </div>
//               <div className="preview-card__content">
//                 <span className="preview-card__code">8953 Golf Course Terrace</span>
//                 <div className="preview-card__title">Beach House in Collingwood</div>
//                 <div className="preview-card__text">
//                   {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? */}
//                   <div style={{ display: 'flex', gap: '0px', paddingTop:"12px",paddingBottom:"5px" }}>
 
//   <div className="flex items-center space-x-3" style={{gap:"3px",display:"flex"}}>
//             <PersonIcon />
//             <span className="text-sm text-neutral-500 dark:text-neutral-400">
//                6 guests
//             </span>
//           </div>
//           <div className="flex items-center space-x-3" style={{gap:"3px",display:"flex"}}>
//           <BedIcon />
//             <span className="text-sm text-neutral-500 dark:text-neutral-400">
//                6 beds
//             </span>
//           </div>
//           <div className="space-y-3" >
//           <div className="flex items-center space-x-3" style={{gap:"3px",display:"flex"}}>
//           <BathtubIcon />
//             <span className="text-sm text-neutral-500 dark:text-neutral-400">
//                3 baths
//             </span>
//           </div>
// </div>
//         </div>

        
//                 </div>
             
        

//                 <a href="#" className="preview-card__button">READ MORE</a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="preview-card">
//           <div className="preview-card__wrp">
//             <div className="preview-card__item swiper-slide">
//               <div className="preview-card__img">
//                 <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" alt="" />
//               </div>
//               <div className="preview-card__content">
//                 <span className="preview-card__code">8953 Golf Course Terrace</span>
//                 <div className="preview-card__title">Lorem Ipsum Dolor</div>
//                 <div className="preview-card__text">
//                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?
//                 </div>
//                 <a href="#" className="preview-card__button">READ MORE</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PreviewCard;


import React from 'react';
import './PreviewCard.css';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link'

const PreviewCard = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="preview-card">
          <div className="preview-card__wrp">
            <div className="preview-card__item">
              <div className="preview-card__img">
                <img src="https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
              </div>
              <div className="preview-card__content">
                <span className="preview-card__code">8953 Golf Course Terrace</span>
                <div className="preview-card__title">Beach House in Collingwood</div>
                <div className="preview-card__text">
                  <div className="info-container" style={{gap:"14px", display:"flex"}}>
                    <div className="info-item">
                      <PersonIcon />
                      <span className="info-text">6 guests</span>
                    </div>
                    <div className="info-item">
                      <BedIcon />
                      <span className="info-text">6 beds</span>
                    </div>
                    <div className="info-item">
                      <BathtubIcon />
                      <span className="info-text">3 baths</span>
                    </div>
                  </div>
                </div>
                <div className="preview-card__title">$200</div>
                <div className="hero-button">
                                    <Link href="/listing" className="theme-btn wow fadeInUp" data-wow-delay=".8s">
                                       Check Now
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                </div>
                {/* <a href="#" className="preview-card__button">READ MORE</a> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="preview-card">
          <div className="preview-card__wrp">
            <div className="preview-card__item swiper-slide">
              <div className="preview-card__img">
                <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" alt="" />
              </div>
              <div className="preview-card__content">
                <span className="preview-card__code">8953 Golf Course Terrace</span>
                <div className="preview-card__title">Lorem Ipsum Dolor</div>
                <div className="preview-card__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?
                </div>
                <a href="#" className="preview-card__button">READ MORE</a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PreviewCard;

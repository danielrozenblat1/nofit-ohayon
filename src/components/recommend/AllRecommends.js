import styles from "./Carousels.module.css"
import result1 from "../../images/נופית לקוחות ממליצים 1.webp"
import result2 from "../../images/נופית לקוחות ממליצים 2.webp"
import result3 from "../../images/נופית לקוחות ממליצים 3.webp"
import result4 from "../../images/נופית לקוחות ממליצים 4.webp"
import result5 from "../../images/נופית לקוחות ממליצים 5.webp"
import result6 from "../../images/נופית לקוחות ממליצים 6.webp"
import result7 from "../../images/נופית לקוחות ממליצים 7.webp"
import result8 from "../../images/נופית לקוחות ממליצים 8.webp"
import result9 from "../../images/נופית לקוחות ממליצים 9.webp"
import result10 from "../../images/נופית לקוחות ממליצים 10.webp"
import result11 from "../../images/נופית לקוחות ממליצים 11.webp"
import result12 from "../../images/נופית לקוחות ממליצים 12.webp"
import result13 from "../../images/נופית לקוחות ממליצים 13.webp"
import result14 from "../../images/נופית לקוחות ממליצים 14.webp"


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from "react-slick"
import CustomButton from "../button/CustomButton"


const AllRecommends=()=>{

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2500,
        slidesToShow: window.innerWidth < 450 ? 1 : window.innerWidth < 650 ? 2 : window.innerWidth < 1100 ? 3 :4,
        slidesToScroll:1,
  
      };
   
    const content = [

      {
        type: 'image',
        src: result1,
      },


      {
        type: 'image',
        src: result2,
      },
        
      
   
      {
        type: 'image',
        src: result3,
      },
 

      {
        type: 'image',
        src: result4,
      }, 
              {
                type: 'image',
                src: result5,
              },
              {
                type: 'image',
                src: result6,
              }, 
               {
                  type: 'image',
                  src: result7,
                },
             
        {
            type: 'image',
            src: result8,
          },
     
          {
            type: 'image',
            src: result9,
          },
          {
            type: 'image',
            src: result10,
          },
            {
              type: 'image',
              src: result11,
            },
        {
          type: 'image',
          src: result12,
        },
        {
          type: 'image',
          src: result13,
        },
  
   
        {
          type: 'image',
          src: result14,
        },
     
      
         
    ];
    
   
    return <>
    <div className={styles.background} id="לקוחות ממליצות">
<div className={styles.title}>ורגע לפני שנכיר..</div>
<div className={styles.explain}> החליקו לראות מה הלקוחות שלי אומרים עלי</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img loading="lazy" decoding="async" src={item.src} className={styles.image1} alt={`נופית לקוחות ממליצים מספר ${index + 1}`} />
              )}
              {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                
                  itemprop="image"
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
         
              )}
            </div>
          ))}
        </Slider>
      </div>

  </div>
  <CustomButton text="אתה רק צריך ללחוץ כאן"/>
    </>
}
export default AllRecommends
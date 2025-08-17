import styles from "./Carousels.module.css"
import result1 from "../../images/נופית עמודי סושיאל 1.png"
import result2 from "../../images/נופית עמודי סושיאל 2.png"
import result3 from "../../images/נופית עמודי סושיאל 3.png"
import result4 from "../../images/נופית עמודי סושיאל 4.png"
import result5 from "../../images/נופית עמודי סושיאל 5.png"
import result6 from "../../images/נופית עמודי סושיאל 6.png"
import result7 from "../../images/נופית עמודי סושיאל 7.png"
import result8 from "../../images/נופית עמודי סושיאל 8.png"
import result9 from "../../images/נופית עמודי סושיאל 9.png"
import result10 from "../../images/נופית עמודי סושיאל 10.png"
import result11 from "../../images/נופית עמודי סושיאל 11.png"
import result12 from "../../images/נופית עמודי סושיאל 12.png"
import result13 from "../../images/נופית עמודי סושיאל 13.png"
import result14 from "../../images/נופית עמודי סושיאל 14.png"
import result15 from "../../images/נופית עמודי סושיאל 15.png"
import result16 from "../../images/נופית עמודי סושיאל 16.png"
import result17 from "../../images/נופית עמודי סושיאל 17.png"
import result18 from "../../images/נופית עמודי סושיאל 18.png"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from "react-slick"
import CustomButton from "../button/CustomButton"


const SocialDesign=()=>{

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
     
        {
            type: 'image',
            src: result15,
          },
      {
        type: 'image',
        src: result16,
      },
      {
        type: 'image',
        src: result17,
      },

 
      {
        type: 'image',
        src: result18,
      },
         
    ];
    
   
    return <>
    <div className={styles.background} id="לקוחות ממליצות">
<div className={styles.title}>העמוד שלך יכול להראות ככה</div>
<div className={styles.explain}>כשהעמוד שלך נראה מזמין לעין, התדמית שלך מצטיירת אחרת.. החליקו לראות את שאר העיצובים שלי</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`נופית עמוד סושיאל מספר ${index + 1}`} />
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
export default SocialDesign
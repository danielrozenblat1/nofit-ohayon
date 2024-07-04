import styles from "./Carousels.module.css"
import result1 from "../../videos/נופית UGC 1.mp4"
import result2 from "../../videos/נופית UGC 2.mp4"
import result3 from "../../videos/נופית UGC 3.mp4"
import result4 from "../../videos/נופית UGC 4.mp4"
import result5 from "../../videos/נופית UGC 5.mp4"
import result6 from "../../videos/נופית UGC 6.mp4"
import result7 from "../../videos/נופית UGC 7.mp4"
import result8 from "../../videos/נופית UGC 8.mp4"
import result9 from "../../videos/נופית UGC 9.mp4"
import result10 from "../../videos/נופית UGC 10.mp4"


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
        slidesToShow: window.innerWidth < 450 ? 1 : window.innerWidth < 650 ? 2 : window.innerWidth < 1150 ? 3 :4,
        slidesToScroll:1,
  
      };
   
    const content = [

      {
        type: 'video',
        src: result1,
      },


      {
        type: 'video',
        src: result2,
      },
        
      
   
      {
        type: 'video',
        src: result3,
      },
 

      {
        type: 'video',
        src: result4,
      }, 
              {
                type: 'video',
                src: result5,
              },
              {
                type: 'video',
                src: result6,
              }, 
               {
                  type: 'video',
                  src: result7,
                },
             
        {
            type: 'video',
            src: result8,
          },
     
          {
            type: 'video',
            src: result9,
          },
          {
            type: 'video',
            src: result10,
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
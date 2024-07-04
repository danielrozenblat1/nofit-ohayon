import styles from "./Carousels.module.css"
import result1 from "../../images/נופית סטילס 1.png"
import result2 from "../../images/נופית סטילס 2.png"
import result3 from "../../images/נופית סטילס 3.png"
import result4 from "../../images/נופית סטילס 4.png"
import result5 from "../../images/נופית סטילס 5.png"
import result6 from "../../images/נופית סטילס 6.png"
import result7 from "../../images/נופית סטילס 7.png"
import result8 from "../../images/נופית סטילס 8.png"
import result9 from "../../images/נופית סטילס 9.png"
import result10 from "../../images/נופית סטילס 10.png"
import result11 from "../../images/נופית סטילס 11.png"
import result12 from "../../images/נופית סטילס 12.png"
import result13 from "../../images/נופית סטילס 13.png"
import result14 from "../../images/נופית סטילס 14.png"
import result15 from "../../images/נופית סטילס 15.png"
import result16 from "../../images/נופית סטילס 16.png"
import result17 from "../../images/נופית סטילס 17.png"
import result18 from "../../images/נופית סטילס 18.png"
import result19 from "../../images/נופית סטילס 19.png"
import result20 from "../../images/נופית סטילס 20.png"
import result21 from "../../images/נופית סטילס 21.png"
import result22 from "../../images/נופית סטילס 22.png"
import result23 from "../../images/נופית סטילס 23.png"
import result24 from "../../images/נופית סטילס 24.png"
import result25 from "../../images/נופית סטילס 25.png"
import result26 from "../../images/נופית סטילס 26.png"
import result27 from "../../images/נופית סטילס 27.png"
import result28 from "../../images/נופית סטילס 28.png"
import result29 from "../../images/נופית סטילס 29.png"
import result30 from "../../images/נופית סטילס 30.png"
import result31 from "../../images/נופית סטילס 31.png"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from "react-slick"
import CustomButton from "../button/CustomButton"

const StilsImages=(props)=>{

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

         
      {
        type: 'image',
        src: result19,
      },
   
      {
          type: 'image',
          src: result20,
        },
    {
      type: 'image',
      src: result21,
    },
    {
      type: 'image',
      src: result22,
    },


    {
      type: 'image',
      src: result23,
    },
    {
        type: 'image',
        src: result24,
      },
      {
        type: 'image',
        src: result25,
      },
  
  
      {
        type: 'image',
        src: result26,
      },
      {
        type: 'image',
        src: result27,
      },
      {
        type: 'image',
        src: result28,
      },
  
  
      {
        type: 'image',
        src: result29,
      },
      {
        type: 'image',
        src: result30,
      },{
        type: 'image',
        src: result31,
      },
    ];
    
   
    return <>
    <div className={styles.background} id="לקוחות ממליצות">
<div className={styles.title}>{props.title}</div>
<div className={styles.explain}>כל עסק, מותג ואדם שמייצג את עצמו יודע שללא תדמית מקצועית, הרבה יותר קשה למכור.. ,החליקו והתרשמו</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`נופית סטילס מספר ${index + 1}`} />
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
  <CustomButton text="נופית, בואי נדבר"/>
    </>
}
export default StilsImages
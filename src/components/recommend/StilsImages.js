import styles from "./Stills.module.css"
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

import CustomButton from "../button/CustomButton"

const StilsImages = (props) => {
   
    const images = [
        result1, result2, result3, result4, result5, result6, result7, result8,
        result9, result10, result11, result12, result13, result14, result15, result16,
        result17, result18, result19, result20, result21, result22, result23, result24,
        result25, result26, result27, result28, result29, result30, result31
    ];
    
    return (
        <>
            <div className={styles.background} id="לקוחות ממליצות">
                <div className={styles.title}>{props.title}</div>
                <div className={styles.explain}>
                    כל עסק, מותג ואדם שמייצג את עצמו יודע שללא תדמית מקצועית, הרבה יותר קשה למכור.. ,החליקו והתרשמו
                </div>
                <div className={styles.gridContainer}>
                    {images.map((src, index) => (
                        <div key={index} className={styles.gridItem}>
                            <img 
                                src={src} 
                                className={styles.gridImage} 
                                alt={`נופית סטילס מספר ${index + 1}`} 
                            />
                        </div>
                    ))}
                </div>
            </div>
            <CustomButton text="נופית, בואי נדבר"/>
        </>
    );
}

export default StilsImages
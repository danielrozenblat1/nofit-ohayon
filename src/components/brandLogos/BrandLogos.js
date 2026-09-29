import styles from "./BrandLogos.module.css"

// הקבצים יושבים ב-public/logos - אפשר להחליף/להוסיף בלי לגעת בקוד
const brands = [
    { name: "מטרנה", file: "materna.webp" },
    { name: "אופטיקל סנטר", file: "optical-center.webp", shape: "block" },
    { name: "TOGO", file: "togo.webp", shape: "wordmark" },
    { name: "גלידה גולדה", file: "golda.webp", shape: "wordmark" },
    { name: "smarTrike", file: "smartrike.webp", shape: "block" },
    { name: "LEAVES", file: "leaves.webp", shape: "wordmark" },
    { name: "טבעול", file: "tivall.webp" },
    { name: "NOIZZ", file: "noizz.webp" },
]

const BrandLogos = () => {
    // פעמיים אותה רשימה => גלילה אינסופית וחלקה בלי קפיצה
    const loop = [...brands, ...brands]

    return (
        <div className={styles.wrapper} aria-label="מותגים שעבדתי איתם">
            <div className={styles.track}>
                {loop.map((brand, index) => (
                    <img
                        key={`${brand.file}-${index}`}
                        className={`${styles.logo} ${brand.shape ? styles[brand.shape] : ""}`}
                        src={`${process.env.PUBLIC_URL}/logos/${brand.file}`}
                        alt={brand.name}
                        loading="lazy"
                        aria-hidden={index >= brands.length}
                    />
                ))}
            </div>
        </div>
    )
}

export default BrandLogos

import styles from "./Stills.module.css"
import { useState, useEffect, useCallback } from "react"
import CustomButton from "../button/CustomButton"

// טעינה אוטומטית של כל תמונות הסטילס - אין צורך לערוך קוד כדי להוסיף/להסיר
const context = require.context("../../images/stills", false, /\.webp$/)
const images = context
    .keys()
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((key) => context(key))

const StilsImages = (props) => {
    const [openIndex, setOpenIndex] = useState(null)

    const close = useCallback(() => setOpenIndex(null), [])
    const next = useCallback(
        (step) =>
            setOpenIndex((current) =>
                current === null ? null : (current + step + images.length) % images.length
            ),
        []
    )

    useEffect(() => {
        if (openIndex === null) return undefined
        const onKey = (event) => {
            if (event.key === "Escape") close()
            if (event.key === "ArrowRight") next(-1)
            if (event.key === "ArrowLeft") next(1)
        }
        window.addEventListener("keydown", onKey)
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"
        return () => {
            window.removeEventListener("keydown", onKey)
            document.body.style.overflow = previousOverflow
        }
    }, [openIndex, close, next])

    return (
        <>
            <div className={styles.background} id="stills">
                <div className={styles.title}>{props.title}</div>
                <div className={styles.explain}>
                    כל עסק, מותג ואדם שמייצג את עצמו יודע שללא תדמית מקצועית, הרבה יותר קשה למכור.. ,החליקו והתרשמו
                </div>
                <div className={styles.gridContainer}>
                    {images.map((src, index) => (
                        <button
                            key={src}
                            type="button"
                            className={styles.gridItem}
                            onClick={() => setOpenIndex(index)}
                            aria-label={`הגדלת תמונה מספר ${index + 1}`}
                        >
                            <img
                                src={src}
                                className={styles.gridImage}
                                alt={`נופית סטילס מספר ${index + 1}`}
                                loading="lazy"
                                decoding="async"
                                width="600"
                                height="600"
                            />
                        </button>
                    ))}
                </div>
            </div>

            {openIndex !== null && (
                <div className={styles.lightbox} onClick={close} role="dialog" aria-modal="true">
                    <button
                        type="button"
                        className={styles.close}
                        onClick={close}
                        aria-label="סגירה"
                    >
                        ×
                    </button>
                    <button
                        type="button"
                        className={`${styles.arrow} ${styles.arrowRight}`}
                        onClick={(event) => {
                            event.stopPropagation()
                            next(-1)
                        }}
                        aria-label="התמונה הקודמת"
                    >
                        ‹
                    </button>
                    <img loading="lazy" decoding="async"
                        className={styles.lightboxImage}
                        src={images[openIndex]}
                        alt={`נופית סטילס מספר ${openIndex + 1}`}
                        onClick={(event) => event.stopPropagation()}
                        decoding="async"
                    />
                    <button
                        type="button"
                        className={`${styles.arrow} ${styles.arrowLeft}`}
                        onClick={(event) => {
                            event.stopPropagation()
                            next(1)
                        }}
                        aria-label="התמונה הבאה"
                    >
                        ›
                    </button>
                    <div className={styles.counter}>
                        {openIndex + 1} / {images.length}
                    </div>
                </div>
            )}

            <CustomButton text="נופית, בואי נדבר" />
        </>
    )
}

export default StilsImages

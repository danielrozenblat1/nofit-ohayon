import styles from "./CustomButton.module.css"

// כפתור עוגן - גולל בצורה חלקה לאזור בתוך אותו עמוד
const ScrollToButton = ({ text, targetId }) => {
    const handleClick = () => {
        const target = document.getElementById(targetId)
        if (!target) return

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        const nav = document.querySelector("header, nav")
        const offset = nav ? nav.getBoundingClientRect().height + 12 : 80
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset

        window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" })
    }

    return (
        <button type="button" className={styles.button} style={{ display: "block" }} onClick={handleClick}>
            {text}
        </button>
    )
}

export default ScrollToButton

import { useEffect, useRef, useState, lazy, Suspense } from "react"

// ספריית lottie שוקלת ~77KB - נטענת רק כשאייקון מתקרב למסך
const Player = lazy(() =>
    import("@lordicon/react").then((module) => ({ default: module.Player }))
)

const LazyIcon = ({ icon, size = "100%", loop = true, delay = 0, replayAfter = 2500 }) => {
    const holderRef = useRef(null)
    const playerRef = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const node = holderRef.current
        if (!node) return undefined

        let done = false
        const show = () => {
            if (done) return
            done = true
            setVisible(true)
            cleanup()
        }

        // מסלול ראשי - נטען כשהאייקון מתקרב למסך
        let observer = null
        if (typeof IntersectionObserver !== "undefined") {
            observer = new IntersectionObserver(
                (entries) => {
                    if (entries.some((entry) => entry.isIntersecting)) show()
                },
                { rootMargin: "300px" }
            )
            observer.observe(node)
        }

        // רשתות ביטחון - שהאייקון לעולם לא ייתקע בלי להיטען
        const onScroll = () => {
            const rect = node.getBoundingClientRect()
            if (rect.top < window.innerHeight + 300 && rect.bottom > -300) show()
        }
        window.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", onScroll, { passive: true })

        const idle = window.requestIdleCallback
            ? window.requestIdleCallback(onScroll, { timeout: 3000 })
            : setTimeout(onScroll, 2000)

        function cleanup() {
            observer?.disconnect()
            window.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", onScroll)
            if (window.cancelIdleCallback) window.cancelIdleCallback(idle)
            else clearTimeout(idle)
        }

        onScroll()
        return cleanup
    }, [])

    const handleComplete = () => {
        if (!loop) return
        setTimeout(() => playerRef.current?.playFromBeginning(), replayAfter)
    }

    return (
        <div ref={holderRef} style={{ width: "100%", aspectRatio: "1 / 1" }}>
            {visible && (
                <Suspense fallback={null}>
                    <PlayerBoot
                        playerRef={playerRef}
                        icon={icon}
                        size={size}
                        delay={delay}
                        onComplete={handleComplete}
                    />
                </Suspense>
            )}
        </div>
    )
}

const PlayerBoot = ({ playerRef, icon, size, delay, onComplete }) => {
    useEffect(() => {
        playerRef.current?.playFromBeginning()
    }, [playerRef])

    return (
        <Player
            ref={playerRef}
            icon={icon}
            size={size}
            delay={delay}
            onComplete={onComplete}
        />
    )
}

export default LazyIcon

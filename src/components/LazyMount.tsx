import React, { useEffect, useRef, useState } from 'react'

interface LazyMountProps {
    children: React.ReactNode;
    rootMargin?: string;
    threshold?: number | number[];
    unmountOnExit?: boolean;
}

const LazyMount: React.FC<LazyMountProps> = ({ children, rootMargin = '200px', threshold = 0.01, unmountOnExit = true }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el || typeof IntersectionObserver === 'undefined') {
            setVisible(true)
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true)
                    } else if (unmountOnExit) {
                        // If configured, unmount when leaving viewport to free resources
                        setVisible(false)
                    }
                })
            },
            { root: null, rootMargin, threshold }
        )

        observer.observe(el)

        return () => observer.disconnect()
    }, [rootMargin, threshold, unmountOnExit])

    return <div ref={ref}>{visible ? children : null}</div>
}

export default LazyMount

import React, { useEffect, useState } from 'react'

// Lazy wrapper that dynamically imports framer-motion and renders
// the requested motion element (e.g. motion.div). If framer-motion
// isn't available yet, falls back to a plain DOM element so the
// UI remains functional without animations.
interface LazyMotionProps {
    type?: string;
    children?: React.ReactNode;
    [key: string]: any;
}

const LazyMotion = ({ type = 'div', children, ...props }: LazyMotionProps) => {
    const [MotionEl, setMotionEl] = useState<React.ElementType | null>(null)

    useEffect(() => {
        let mounted = true
        import('framer-motion')
            .then((mod) => {
                if (!mounted) return
                const motion = mod.motion || mod
                const el = (motion as any)[type] || (motion as any)[type.toLowerCase()] || null
                if (el) setMotionEl(() => el)
            })
            .catch(() => {
                // loading failed or framer-motion not installed; ignore
            })

        return () => {
            mounted = false
        }
    }, [type])

    if (MotionEl) {
        return React.createElement(MotionEl, props, children)
    }

    // fallback: render a plain element
    return React.createElement(type, props, children)
}

export default LazyMotion

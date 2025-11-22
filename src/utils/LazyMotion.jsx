import React, { useEffect, useState } from 'react'

// Lazy wrapper that dynamically imports framer-motion and renders
// the requested motion element (e.g. motion.div). If framer-motion
// isn't available yet, falls back to a plain DOM element so the
// UI remains functional without animations.
const LazyMotion = ({ type = 'div', children, ...props }) => {
    const [MotionEl, setMotionEl] = useState(null)

    useEffect(() => {
        let mounted = true
        import('framer-motion')
            .then((mod) => {
                if (!mounted) return
                const motion = mod.motion || mod
                const el = motion[type] || motion[type.toLowerCase()] || null
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
        return <MotionEl {...props}>{children}</MotionEl>
    }

    // fallback: render a plain element
    return React.createElement(type, props, children)
}

export default LazyMotion

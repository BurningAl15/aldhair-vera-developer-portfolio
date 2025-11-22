import React, { useEffect, useState } from 'react'

import CanvasGate from './CanvasGate'

const CanvasLoader = () => {
    const [CanvasComp, setCanvasComp] = useState(null)

    useEffect(() => {
        let mounted = true
        // Dynamic import will create a separate chunk for canvas components
        import('./canvas')
            .then((mod) => {
                // module exports named components; prefer ComputersCanvas if available
                const Comp = mod.ComputersCanvas || mod.default || null
                if (mounted && Comp) setCanvasComp(() => Comp)
            })
            .catch(() => {
                // ignore load failure in dev; component is non-critical
            })
        return () => {
            mounted = false
        }
    }, [])

    if (!CanvasComp) return null
    // Request a canvas slot before mounting the heavy canvas
    return (
        <CanvasGate>
            <CanvasComp />
        </CanvasGate>
    )
}

export default CanvasLoader

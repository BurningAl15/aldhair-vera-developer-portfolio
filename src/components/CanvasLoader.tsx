import React, { useEffect, useState } from 'react'

import CanvasGate from './CanvasGate'

const CanvasLoader = () => {
    const [CanvasComp, setCanvasComp] = useState<React.ComponentType<any> | null>(null)

    useEffect(() => {
        let mounted = true
        // Dynamic import of the specific heavy canvas to avoid pulling
        // all canvases (Ball, Stars, Computers) into one chunk.
        import('./canvas/Computers')
            .then((mod) => {
                const Comp = mod.default || null
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

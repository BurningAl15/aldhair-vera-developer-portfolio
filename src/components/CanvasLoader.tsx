import React, { useEffect, useState } from 'react'

import CanvasGate from './CanvasGate'

import { useIsMobile } from '../hooks/useIsMobile'
import ComputersFallback from './canvas/ComputersFallback'

const CanvasLoader = () => {
    const isMobile = useIsMobile()
    const [CanvasComp, setCanvasComp] = useState<React.ComponentType<any> | null>(null)

    useEffect(() => {
        // On mobile, we never load the heavy 3D component
        if (isMobile) return

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
    }, [isMobile])

    // If mobile, or if desktop but still loading, show the fallback
    if (isMobile || !CanvasComp) {
        return <ComputersFallback />
    }

    // Request a canvas slot before mounting the heavy canvas
    return (
        <CanvasGate>
            <CanvasComp />
        </CanvasGate>
    )
}

export default CanvasLoader

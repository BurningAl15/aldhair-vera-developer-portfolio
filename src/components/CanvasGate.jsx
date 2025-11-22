import React, { useEffect, useRef, useState } from 'react'
import { useCanvasPool } from './CanvasPool'

const CanvasGate = ({ children, fallback = null }) => {
    const mountedRef = useRef(false)
    const [granted, setGranted] = useState(false)
    const releaseRef = useRef(null)
    const pool = useCanvasPool()

    useEffect(() => {
        mountedRef.current = true
        let cancelled = false

        // Request a slot; pool.requestSlot resolves with a release function
        pool.requestSlot().then((release) => {
            if (cancelled) {
                // if cancelled, release immediately
                try { release() } catch (e) { }
                return
            }
            releaseRef.current = release
            if (mountedRef.current) setGranted(true)
        })

        return () => {
            mountedRef.current = false
            cancelled = true
            if (releaseRef.current) {
                try { releaseRef.current() } catch (e) { }
                releaseRef.current = null
            }
        }
    }, [])

    return granted ? <>{children}</> : fallback
}

export default CanvasGate

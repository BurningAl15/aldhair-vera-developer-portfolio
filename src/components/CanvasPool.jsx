import React, { createContext, useContext, useRef, useState } from 'react'

const CanvasPoolContext = createContext(null)

export const CanvasPoolProvider = ({ children, maxSlots = 4 }) => {
    const [active, setActive] = useState(0)
    const queueRef = useRef([])

    const requestSlot = () => {
        return new Promise((resolve) => {
            // If slot available, grant immediately
            setActive((curr) => {
                if (curr < maxSlots) {
                    // grant immediately
                    resolve(() => releaseSlot())
                    return curr + 1
                }
                // otherwise enqueue
                queueRef.current.push(resolve)
                return curr
            })
        })
    }

    const releaseSlot = () => {
        setActive((curr) => {
            const next = Math.max(0, curr - 1)
            // If there's someone waiting, grant immediately (consume the freed slot)
            const queued = queueRef.current.shift()
            if (queued) {
                // increment active because we'll grant to queued
                // Note: we call queued with a release function
                queued(() => releaseSlot())
                return next + 1
            }
            return next
        })
    }

    return (
        <CanvasPoolContext.Provider value={{ requestSlot, releaseSlot, active, maxSlots }}>
            {children}
        </CanvasPoolContext.Provider>
    )
}

export const useCanvasPool = () => {
    const ctx = useContext(CanvasPoolContext)
    if (!ctx) throw new Error('useCanvasPool must be used within CanvasPoolProvider')
    return ctx
}

export default CanvasPoolContext

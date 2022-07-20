import React from 'react'

function Lights() {
    return (
        <>
            <pointLight args={[`#baa898`, 0.05]} position={[-55, 0, 13]} />
            <pointLight args={[`#baa898`, 0.05]} position={[0, 0, 3]} />
        </>
    )
}

export default Lights
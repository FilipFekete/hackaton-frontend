import React from 'react'
import DotGrid from './DotGrid'

const App = () => {
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                position: 'relative',
                margin: 0,
                padding: 0,
                overflow: 'hidden',
            }}
        >
            {/* Dot background */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                }}
            >
                <DotGrid
                    dotSize={10}
                    gap={15}
                    baseColor="#CCCCCC" // brighter grey for visibility
                    activeColor="#FF3333" // vivid red
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            </div>

            {/* Centered content */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: '#fff',
                    fontFamily: 'Arial, sans-serif',
                }}
            >
                <h1
                    style={{
                        marginBottom: '20px',
                        fontSize: '2rem',
                        letterSpacing: '1px',
                    }}
                >
                    Be better than your enemies.
                </h1>
                <input
                    type="text"
                    placeholder="Search..."
                    style={{
                        padding: '12px 20px',
                        fontSize: '1rem',
                        borderRadius: '8px',
                        border: '1px solid #ccc',
                        width: '300px',
                        outline: 'none',
                        transition: '0.3s',
                        backgroundColor: '#111', // darker input background for contrast
                        color: '#fff',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#FF0000')}
                    onBlur={(e) => (e.target.style.borderColor = '#ccc')}
                />
            </div>
        </div>
    )
}

export default App

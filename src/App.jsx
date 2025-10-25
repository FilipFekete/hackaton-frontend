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
                    backgroundColor: '#000', // black background behind the dots

                }}
            >
                <DotGrid
                    dotSize={10}
                    gap={15}
                    baseColor="#000" // brighter grey for visibility
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
                <button
                    type="button"
                    aria-label="Submit"
                    onClick={() => console.log('Submit clicked')}
                    style={{
                        display: 'block',
                        margin: '20px auto 0',
                        padding: '10px 22px',
                        fontSize: '1rem',
                        borderRadius: '8px',
                        border: 'none',
                        backgroundColor: '#a42828ff',
                        color: '#fff',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(255,51,51,0.18)',
                        transition: 'transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease, background-color 0.15s ease',
                        opacity: 0.78, // dimmer by default
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 10px 26px rgba(255,51,51,0.38)';
                        e.currentTarget.style.opacity = '1'; // become lighter / fully opaque
                        e.currentTarget.style.backgroundColor = '#FF5A5A'; // slightly lighter shade
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(255,51,51,0.18)';
                        e.currentTarget.style.opacity = '0.78';
                        e.currentTarget.style.backgroundColor = '#FF3333';
                    }}
                    onFocus={(e) => {
                        e.currentTarget.style.outline = '3px solid rgba(255,51,51,0.22)';
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.backgroundColor = '#FF5A5A';
                    }}
                    onBlur={(e) => {
                        e.currentTarget.style.outline = 'none';
                        e.currentTarget.style.opacity = '0.78';
                        e.currentTarget.style.backgroundColor = '#FF3333';
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default App

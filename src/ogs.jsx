import React from "react";

// Inline SVG fallback so we don't depend on an external ogs.png file.
export default function Ogs() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", background: '#000' }}>
            <svg width="480" height="240" viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ogs">
                <rect width="100%" height="100%" fill="#0b0b0b" />
                <g transform="translate(24,24)">
                    <rect x="0" y="0" width="432" height="192" rx="12" fill="#1a1a1a" stroke="#ff4d4d" strokeWidth="3" />
                    <text x="216" y="96" fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="28" fontWeight="700" textAnchor="middle">OGS</text>
                    <text x="216" y="132" fill="#ffb3b3" fontFamily="Arial, Helvetica, sans-serif" fontSize="14" textAnchor="middle">Official Graphics Sheet</text>
                </g>
            </svg>
        </div>
    )
}
import React from 'react';
import './App.css'; // Make sure to add styles here

// Example of notes array (similar to the content in the image)
const notes = [
    "The average attention span is 8.25 s",
    "E = mc^2",
    "We are a team of dreamers!",
    "Our names are Kaz, Tymur, Daniil, and Mark!",
    "LET'S GO TECH",
    "In my free time, I do poster design for my dorm room"
];

// Utility function to generate random sizes and positions
const getRandomStyles = () => {
    const randomWidth = Math.floor(Math.random() * (200 - 100 + 1)) + 100; // Width between 100 and 200px
    const randomHeight = Math.floor(Math.random() * (150 - 80 + 1)) + 80; // Height between 80 and 150px
    const randomX = Math.floor(Math.random() * 40); // Left margin (to simulate shifting)
    const randomY = Math.floor(Math.random() * 20); // Top margin (for shifting vertically)
    const randomBackground = getRandomColor(); // Assign a random background color

    return {
        width: `${randomWidth}px`,
        height: `${randomHeight}px`,
        marginLeft: `${randomX}px`,
        marginTop: `${randomY}px`,
        backgroundColor: randomBackground,
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.1rem',
        padding: '10px',
        color: '#fff', // White text color
        fontWeight: 'bold'
    };
};

// Helper function to generate a random color from a predefined list
const getRandomColor = () => {
    const colors = ['#F7DC6F', '#E74C3C', '#48C9B0', '#85C1E9', '#F1948A', '#5DADE2'];
    return colors[Math.floor(Math.random() * colors.length)];
};

export default function Landing() {
    return (
        <div className="mindmap-container">
            <h1>Your personal mind space</h1>
            <div className="notes-container">
                {notes.map((note, index) => (
                    <div key={index} style={getRandomStyles()}>
                        {note}
                    </div>
                ))}
            </div>
        </div>
    );
}
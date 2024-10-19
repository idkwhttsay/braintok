"use client"

import React from 'react';
import {notes as initialNotes} from '../data/notes'
// @ts-ignore
import { useState } from "react";
import { motion } from 'framer';
// Example of notes array


// Utility function to generate random sizes and positions
const getRandomStyles = () => {
    const randomX = Math.floor(Math.random() * 20); // Left margin
    const randomY = Math.floor(Math.random() * 10); // Top margin
    const randomBackground = getRandomColor(); // Assign a random background color

    return {
        padding: `${Math.random() * 20 + 10}px`, // Random padding between 10px and 30px
        marginLeft: `${randomX}px`,
        marginTop: `${randomY}px`,
        backgroundColor: randomBackground,
        borderRadius: '10px',
        fontSize: '1.1rem',
        textAlign: 'center',
        flexGrow: 1, // Allow notes to grow and fill the container
        color: '#000', // Black text color
        fontWeight: 'bold',
        minWidth: '100px', // Ensure a minimum width for each note
        boxSizing: 'border-box' // Ensure padding is included in the width calculation
    };
};

// Helper function to generate a random color from a predefined list
const getRandomColor = () => {
    const colors = ['#FFDE59', '#FF5757', '#5CE1E6'];
    return colors[Math.floor(Math.random() * colors.length)];
};

export function MindMap() {
    const [notes, setNotes] = useState<string[]>(initialNotes); // Set the initial state

    return (
        <motion.div style={containerStyles}
                    initial={{ y: 500 }}
                    transition={{ duration: 0.2 }}
                    animate={{ y: 0 }}
                    exit={{ y: 500 }}
        >
            <div style={innerContainerStyles}>
                <div style={notesContainerStyles}>
                    {notes.map((note, index) => (
                        <div key={index} style={getRandomStyles()}>
                            {note}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

// Additional styles for responsiveness
const containerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Ensure the container spans vertically
    padding: "10px",
    width: "100%"
};

const innerContainerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",  // Span the container horizontally
};

const notesContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start', // Align notes to the left
    gap: '10px', // Add some gap between the notes
    width: '100%', // Make notes container take the full width
    margin: 'auto',
};

const headerStyles = {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '50px',
    fontWeight: 'bold'
};
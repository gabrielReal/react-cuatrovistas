
import { useState, useEffect } from "react";
// Import react-circular-progressbar module and styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProgressProvider from "./ProgressProvider";

import React from 'react'

export const CircleGris = () => {
    const [valueEnd, setValueEnd] = useState(0);

    useEffect(() => {
        setValueEnd(0)
    }, []);

  return (
    <div style={{ padding: "40px 40px 40px 40px", margin: "auto" }}>
        <ProgressProvider valueStart={0} valueEnd={valueEnd}>
          {value => <CircularProgressbar 
            value={value} 
            text={`${value}%`}
            styles={buildStyles({
              
              pathTransitionDuration: 0,
          
              // Colors
              stroke: '#d6d6d6',
              pathColor: `#d6d6d6 ${value / 100}`,
              textColor: '#FFFFFF',
              trailColor: '#d6d6d6',
              backgroundColor: '#d6d6d6',
            })} />}
        </ProgressProvider>
    </div>
  );
};


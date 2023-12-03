import React, { useEffect, useState } from 'react'
import '../styles/ProgressBar.css'

const Inner = ({ widthPercent }) => {
    return <div className="inner" style={{ width: `${widthPercent}%` }} />;
  };
  
  const Outer = ({ width }) => {
    return (
      <div className="outer">
        <Inner widthPercent={width} />
      </div>
    );
  };

const ProgressBarComponent = ({ updateCycles }) => {
    const [width, setWidth] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                let newWidth;
                if (width + 0.1 > 100) {
                    updateCycles();
                    newWidth = 0;
                } else {
                    newWidth = width + 0.1;
                }
                setWidth(newWidth);
            }
        }, 10);

        return () => clearInterval(interval);
    }, [width, paused]);

    const togglePaused = () => {
        setPaused(!paused);
    };

    return (
        <div className="progress-bar">
            <Outer width={width} />
            <button className="btn toggle-btn" onClick={togglePaused}>
                {paused ? "Resume" : "Pause"}
            </button>
        </div>
    );
}

const ProgressBar = () => {
    const [count, setCount] = useState(1);
    const [cycles, setCycles] = useState(0);

    const addProgressBar = () => {
        setCount(count + 1);
    };

    const renderFn = () => {
        const result = [];
        for (let i = 0; i < count; i++) {
            result.push(<ProgressBarComponent key={i} updateCycles={updateCycles} />);
        }
        return result;
    };

    const updateCycles = () => {
        setCycles(cycles + 1);
    };

    return (
        <>
            <div className='top-content'>
                <h2>Progress Bar</h2>
            </div>
            <div className='main-content'>
                <div className="cycles-container">Number of Cycles: {cycles}</div>
                <button className="btn add-bar-btn" onClick={() => addProgressBar()}>
                    Add New ProgressBar
                </button>
                {renderFn()}
            </div>
        </>
    )
}

export default ProgressBar

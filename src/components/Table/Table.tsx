import React, { useState, useEffect } from "react"
import Ball from "../Ball/Ball"
import Line from "../Line/Line"
import { generateBalls } from '../../engine/utils/generateBalls'
import { useInterval } from '../../hooks/useInterval'
import { nextBallsPosition } from '../../engine/utils/nextBallsPosition'

const Table = (props: any) => {
    
    const [styleObj, setStyle] = useState(() => ({
        position: 'fixed',
        border: '5px solid lightGrey',
        color: '#ffffff',
        backgroundColor: 'lightGrey',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }))

    const [balls, setBallsPosition] = useState(() => {
        return generateBalls(2, props.radius)
    })
    
    const [count, setCount] = useState(() => 0)  
    const [delay, setDelay] = useState(() => 100)
    const [isPlaying, setPlaying] = useState(() => true)
    useInterval(
        () => {
                // Your custom logic here
                setCount(prevCount => prevCount + 1)
                setBallsPosition(prevBallsPosition => nextBallsPosition(prevBallsPosition, props.width, props.height, props.radius))
                
        },
        // Delay in milliseconds or null to stop it
        isPlaying ? delay : null,
)    
    return (
            <div>
            <div style={{
                position: 'fixed',
                width: `${props.width}px`,
                height: `${props.height}px`,
                border: '5px solid lightGrey',
                color: '#ffffff',
                backgroundColor: '#063c06',               
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)' 
            }}>
                {balls.map((ball) => (
                        <Ball key={ball.index} index={ball.index} x={ball.x} y={ball.y} radius={props.radius} backgroundColor={ball.backgroundColor}/>
                ))}
            </div>
            <h3 className="Counter">Steps {count}</h3>
            <button className="Button" onClick={() => setPlaying(!isPlaying)}>
                {isPlaying ? 'pause' : 'play'}
            </button>
            <Line width={props.width} height={props.height} lineBeginX={balls[0].x + balls[0].radius} lineBeginY={balls[0].y + balls[0].radius} lineEndX={balls[1].x + balls[1].radius} lineEndY={balls[1].y + balls[1].radius} color={'yellow'}/>
            </div>
            )
                
            
}

export default Table
import React, { useState, useEffect, SetStateAction } from "react"
import BallComponent from "../Ball/BallComponent"
import Line from "../Line/Line"
import { generateBalls } from '../../engine/utils/generateBalls'
import { useInterval } from '../../hooks/useInterval'
import { nextBallsPosition } from '../../engine/utils/nextBallsPosition'
import { shotBall } from '../../engine/utils/shotBall'
import { viewportToLocalCoords } from '../../engine/utils/viewport/viewportToLocalCoords'
import { findBallIndexOnPosition } from '../../engine/utils/viewport/findBallOnPosition'

import { Ball } from '../../engine/types/types'

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
    const [selectBallClickPosition, setSelectBallClickPosition]: any = useState(() => {})
    const [shotDirectionClickPosition, setShotDirectionClickPosition]: any = useState(() => {})
    const [selectedBallIndex, setSelectedBallIndex]: any = useState(() => undefined) 
    const [clicksCounter, setClicksCounter] = useState(() => 0)  
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
            <>
            <div style={{
                position: 'fixed',
                // display: 'block',
                width: `${props.width}px`,
                height: `${props.height}px`,
                // border: '5px solid lightGrey',
                color: '#ffffff',
                backgroundColor: '#063c06',               
                // top: '0',
                // bottom: '0',
                // left: '0',
                // right: '0',
                // margin: 'auto',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 2, 
            }}
            // onMouseDown={ (e) => console.log(e) }
            onMouseDown={ (e) => {
                
                if (clicksCounter === 0) {
                    
                    setSelectedBallIndex((prevSelectedBall: any)  => {
                        console.log(clicksCounter)     
                        const {localX: firstClickX, localY: firstClickY} = viewportToLocalCoords(e)
                        return findBallIndexOnPosition(firstClickX, firstClickY, balls)
                    })
                    setClicksCounter(prevClicksCount => prevClicksCount + 1)
                
                } else if (clicksCounter === 1) {
                    console.log(clicksCounter) 
                    const {localX: secondClickX, localY: secondClickY} = viewportToLocalCoords(e)
                    
                    setBallsPosition((prevBallsPosition: Ball[]) => {
                        const SHOT_STRENGTH_DIVISOR = 10
                        return shotBall(secondClickX, secondClickY, selectedBallIndex, SHOT_STRENGTH_DIVISOR, prevBallsPosition)               
                    })

                    setClicksCounter(prevClicksCount => 0)
                    
                } 

            }}

            
            >
                {balls.map((ball) => (
                        <>
                        <BallComponent key={ball.index} index={ball.index} x={ball.x} y={ball.y} radius={props.radius} backgroundColor={ball.backgroundColor}/>
                        <Line width={props.width} height={props.height} lineBeginX={ball.x + ball.radius} lineBeginY={ball.y + ball.radius} lineEndX={ball.x + ball.radius + ball.normalx * 20} lineEndY={ball.y + ball.radius + ball.normaly * 20} color={'green'}/>
                        <Line width={props.width} height={props.height} lineBeginX={ball.x + ball.radius} lineBeginY={ball.y + ball.radius} lineEndX={ball.x + ball.radius + ball.tangentx * ball.dotProductTangent * 10} lineEndY={ball.y + ball.radius + ball.tangenty * ball.dotProductTangent * 10} color={'orange'}/>
                        {/* <Line width={props.width} height={props.height} lineBeginX={ball.x + ball.radius} lineBeginY={ball.y + ball.radius} lineEndX={ball.xspeed } lineEndY={ball.xspeed } color={'red'}/>   */}
                        {/* <Line width={props.width} height={props.height} lineBeginX={ball.x + ball.radius} lineBeginY={ball.y + ball.radius} lineEndX={ball.x + ball.radius + ball.tangentx * 20} lineEndY={ball.y + ball.radius + ball.tangenty * 20} color={'red'}/> */}
                        {/* <Line width={props.width} height={props.height} lineBeginX={ball.x + ball.radius} lineBeginY={ball.y + ball.radius} lineEndX={ball.x + ball.radius + ball.dotProductTangent * 20} lineEndY={ball.y + ball.radius + ball.dotProductTangent * 10} color={'orange'}/> */}
                        </>
                ))}
            </div>
            <h3 className="Counter">Steps {count}</h3>
            <button className="Button" onClick={() => setPlaying(!isPlaying)}>
                {isPlaying ? 'pause' : 'play'}
            </button>
            {/* <Line width={props.width} height={props.height} lineBeginX={balls[0].x + balls[0].radius} lineBeginY={balls[0].y + balls[0].radius} lineEndX={balls[1].x + balls[1].radius} lineEndY={balls[1].y + balls[1].radius} color={'yellow'}/> */}
            
            </>
            )
                
            
}

export default Table
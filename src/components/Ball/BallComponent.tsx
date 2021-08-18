import React, { useState, useEffect } from "react"

const BallComponent = (props : any) => {
    
    const [styleObj, setStyle] = useState(() => ({
                
                backgroundColor: `${props.backgroundColor}`,             
                transform: `translate(${props.x}px, ${props.y}px)` ,

    }))

    useEffect(() => {
        setStyle(prevStyle => {
                return {
                    ...prevStyle,    
                    backgroundColor: `${props.backgroundColor}`,
                    transform: `translate(${props.x}px, ${props.y}px)` 
                }
        })
      })


    return (
        
            <div 
              style={{...styleObj,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute' as 'absolute',
                color: 'black',
                borderRadius: '50%',
                zIndex: 2,
                height: `${props.radius * 2}px`,
                width: `${props.radius * 2}px`, 
                userSelect: 'none'}} 
              // onMouseDown={ () => console.log("mouse down") }
            >{props.index}
            </div>
            )
                
            
}

export default BallComponent
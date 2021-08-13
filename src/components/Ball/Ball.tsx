import React, { useState, useEffect } from "react"

const Ball = (props : any) => {
    
    const [styleObj, setStyle] = useState(() => ({
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute' as 'absolute',
                height: `${props.radius * 2}px`,
                width: `${props.radius * 2}px`,
                color: 'black',
                backgroundColor: `${props.backgroundColor}`,
                // top: '50%',
                // left: '50%',               
                transform: `translate(${props.x}px, ${props.y}px)` ,
                borderRadius: '50%',
                zIndex: 3,

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
              style={styleObj} 
              // onMouseDown={ () => console.log("mouse down") }
            >{props.index}
            </div>
            )
                
            
}

export default Ball
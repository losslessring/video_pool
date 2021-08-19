import React, { useState, useEffect } from "react"

const PocketComponent = (props : any) => {
    
    const [styleObj, setStyle] = useState(() => ({
                
                backgroundColor: `${props.backgroundColor}`,             

    }))

    useEffect(() => {
        setStyle(prevStyle => {
                return {
                    ...prevStyle,    
                    backgroundColor: `${props.backgroundColor}`,
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
                transform: `translate(${props.x}px, ${props.y}px)` , 
                userSelect: 'none'}} 
              // onMouseDown={ () => console.log("mouse down") }
            >{props.index}
            </div>
            )
                
            
}

export default PocketComponent
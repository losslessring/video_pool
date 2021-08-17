import React, { useState, useEffect } from "react"

const Line = (props : any) => {
    
    
    
    return (
        
        <svg style={{
            position: 'fixed',
            width: `${props.width}px`,
            height: `${props.height}px`,
            // border: '5px solid lightGrey',
            // color: '#ffffff',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            // zIndex: 3, 
        }}><line x1={props.lineBeginX} y1={props.lineBeginY} x2={props.lineEndX} y2={props.lineEndY} stroke={props.color}/></svg>
            )
                
            
}

export default Line
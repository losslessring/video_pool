var circle1 = {radius: 20, x: 5, y: 5};
var circle2 = {radius: 12, x: 10, y: 5};

export const checkIntersection = (balls: any) => (masterBall: any) => {

    let collidedBall = {}

    balls.forEach((checkBall: any) => {
        
        if(masterBall.index === checkBall.index) {
            return
        }
        const distanceX = (masterBall.x + masterBall.radius) - (checkBall.x + checkBall.radius)
        const distanceY = (masterBall.y + masterBall.radius) - (checkBall.y + checkBall.radius)
        // const dx = (masterBall.x) - (checkBall.x)
        // const dy = (masterBall.y) - (checkBall.y)
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

        
        const overlap = (distance - masterBall.radius - checkBall.radius) / 2
        //console.log(`distance: ${distance}`)
        //const shiftx = (distance < masterBall.radius + checkBall.radius) ? masterBall.x - (overlap * ( masterBall.x - checkBall.x )) / distance : null
        //console.log(shiftx)
        if (distance < masterBall.radius + checkBall.radius) {
            const shiftX = masterBall.x - (overlap * ( masterBall.x - checkBall.x )) / distance 
            const shiftY = masterBall.y - (overlap * ( masterBall.y - checkBall.y )) / distance 
            //const shiftx =  masterBall.x + (masterBall.radius + checkBall.radius + 1) * dx / distance
            // console.log(`shiftx: ${shiftx} shifty: ${shifty}`)
            
            // collision detected!
            //console.log('collision detected!')
            const normalX = (masterBall.x - checkBall.x) / distance 
            const normalY = (masterBall.y - checkBall.y) / distance 
            console.log(`normalX: ${normalX} normalY: ${normalY}`)
            const tangentX = - normalY
            const tangentY = normalX
            //console.log(`tangentX: ${tangentX} tangentY: ${tangentY}`)

            //const dotProductTangentCheckBall = checkBall.xspeed * tangentX + checkBall.yspeed * tangentY
            const dotProductTangentMasterBall = masterBall.xspeed * tangentX + masterBall.yspeed * tangentY
            //console.log(`dotProductTangentCheckBall: ${dotProductTangentCheckBall} dotProductTangentMasterBall: ${dotProductTangentMasterBall}`)
            console.log(`dotProductTangentMasterBall: ${dotProductTangentMasterBall}`)

            collidedBall = {    
                // x: masterBall.x,
                // y: masterBall.y,
                x: shiftX,
                y: shiftY,
                centerx:        masterBall.centerx,
                centery:        masterBall.centery,
                // x: (distance < masterBall.radius + checkBall.radius) ? masterBall.x - (overlap * ( checkBall.x - masterBall.x )) / distance : masterBall.x,
                // y: (distance < masterBall.radius + checkBall.radius) ? masterBall.y - (overlap * ( checkBall.y - masterBall.y )) / distance : masterBall.y,
                // xspeed: masterBall.xspeed,
                // yspeed: masterBall.yspeed,
                //  xspeed: masterBall.xspeed * -1,
                //  yspeed: masterBall.yspeed * -1,
                xspeed: tangentX * dotProductTangentMasterBall,
                yspeed: tangentY * dotProductTangentMasterBall,
                velocity: masterBall.velocity,
                direction: masterBall.direction,
                radius: masterBall.radius,
                //backgroundColor: (distance < masterBall.radius + checkBall.radius) ? 'blue' : 'yellow',
                backgroundColor: 'blue',
                normalx: normalX,
                normaly: normalY,
                tangentx: tangentX,
                tangenty: tangentY,
                dotProductTangent: dotProductTangentMasterBall,
                index: masterBall.index,


            }
        } else {
            collidedBall = {
                ...masterBall,
                backgroundColor: 'yellow',
                normalx: 0,
                normaly: 0,
                tangentx: 0,
                tangenty: 0,
                dotProductTangent: 0
            }
        }   
    })
    
    return collidedBall
    

}
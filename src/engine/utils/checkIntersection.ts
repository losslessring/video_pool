var circle1 = {radius: 20, x: 5, y: 5};
var circle2 = {radius: 12, x: 10, y: 5};

export const checkIntersection = (balls: any) => (targetBall: any) => {

    let collidedBall = {}

    balls.forEach((currentBall: any) => {
        
        if(targetBall.index === currentBall.index) {
            return
        }
        const distanceX = (targetBall.x + targetBall.radius) - (currentBall.x + currentBall.radius)
        const distanceY = (targetBall.y + targetBall.radius) - (currentBall.y + currentBall.radius)
        // const dx = (targetBall.x) - (currentBall.x)
        // const dy = (targetBall.y) - (currentBall.y)
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)


        const overlap = (distance - targetBall.radius - currentBall.radius) / 2
        console.log(`distance: ${distance}`)
        //const shiftx = (distance < targetBall.radius + currentBall.radius) ? targetBall.x - (overlap * ( targetBall.x - currentBall.x )) / distance : null
        //console.log(shiftx)
        if (distance < targetBall.radius + currentBall.radius) {
            // const shiftx = targetBall.x - (overlap * ( targetBall.x - currentBall.x )) / distance || 1
            // const shifty = targetBall.y - (overlap * ( targetBall.y - currentBall.y )) / distance || 1
            //const shiftx =  targetBall.x + (targetBall.radius + currentBall.radius + 1) * dx / distance
            // console.log(`shiftx: ${shiftx} shifty: ${shifty}`)
            
            // collision detected!
            //console.log('collision detected!')
            collidedBall = {    
                x: targetBall.x,
                y: targetBall.y,
                centerx:        targetBall.centerx,
                centery:        targetBall.centery,
                // x: (distance < targetBall.radius + currentBall.radius) ? targetBall.x - (overlap * ( currentBall.x - targetBall.x )) / distance : targetBall.x,
                // y: (distance < targetBall.radius + currentBall.radius) ? targetBall.y - (overlap * ( currentBall.y - targetBall.y )) / distance : targetBall.y,
                xspeed: targetBall.xspeed,
                yspeed: targetBall.yspeed,
                velocity: targetBall.velocity,
                direction: targetBall.direction,
                radius: targetBall.radius,
                //backgroundColor: (distance < targetBall.radius + currentBall.radius) ? 'blue' : 'yellow',
                backgroundColor: 'blue',
                index: targetBall.index
            }
        } else {
            collidedBall = {
                ...targetBall,
                backgroundColor: 'yellow'
            }
        }   
    })
    
    return collidedBall
    

}
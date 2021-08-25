import { Ball } from '../../types/types'

export const checkBallsCollision = (balls: Ball[]) => (masterBall: Ball) => {

    // let collidedBall = {...masterBall}

    const collidedBalls = balls.map((checkBall: Ball) => {
         
        // console.log(checkBall.index)
        if(masterBall.index === checkBall.index) {
            return
        }
        const distanceX = (masterBall.x + masterBall.radius) - (checkBall.x + checkBall.radius)
        const distanceY = (masterBall.y + masterBall.radius) - (checkBall.y + checkBall.radius)
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        const overlap = (distance - masterBall.radius - checkBall.radius) / 2
        
        if (distance < masterBall.radius + checkBall.radius) {
            const shiftX = masterBall.x - (overlap * ( masterBall.x - checkBall.x )) / distance 
            const shiftY = masterBall.y - (overlap * ( masterBall.y - checkBall.y )) / distance 
            //console.log('collision detected!')
            
            const normalX = (masterBall.x - checkBall.x) / distance 
            const normalY = (masterBall.y - checkBall.y) / distance 
            // console.log(`normalX: ${normalX} normalY: ${normalY}`)
            const tangentX = - normalY
            const tangentY = normalX
            //console.log(`tangentX: ${tangentX} tangentY: ${tangentY}`)


            const dotProductTangentMasterBall = masterBall.xspeed * tangentX + masterBall.yspeed * tangentY
            // console.log(`masterBall.index: ${masterBall.index}`)
            // console.log(`checkBall.index: ${checkBall.index}`)
            
            // console.log(masterBall)
            // console.log(checkBall)
            // console.log(`dotProductTangentMasterBall: ${dotProductTangentMasterBall}`)

            const dotProductNormalMasterBall = masterBall.xspeed * normalX + masterBall.yspeed * normalY
            const dotProductNormalCheckBall = checkBall.xspeed * normalX + checkBall.yspeed * normalY
            const impulseMasterBall = (dotProductNormalMasterBall * ( masterBall.mass - checkBall.mass ) + 2 * checkBall.mass * dotProductNormalCheckBall ) / ( masterBall.mass + checkBall.mass)

            
            return {    
                x: shiftX,
                y: shiftY,
                centerx:        masterBall.centerx,
                centery:        masterBall.centery,
                xspeed: (tangentX * dotProductTangentMasterBall + normalX * impulseMasterBall),
                yspeed: (tangentY * dotProductTangentMasterBall + normalY * impulseMasterBall),
                velocity: masterBall.velocity,
                direction: masterBall.direction,
                radius: masterBall.radius,
                backgroundColor: 'blue',
                normalx: normalX,
                normaly: normalY,
                tangentx: tangentX,
                tangenty: tangentY,
                dotProductTangent: dotProductTangentMasterBall,
                dotProductNormal: dotProductNormalMasterBall,
                mass: masterBall.mass,
                impulse: impulseMasterBall,
                hitPocket: masterBall.hitPocket,
                hitPocketNumber: masterBall.hitPocketNumber,
                hitStep: 0,
                index: masterBall.index,
            }
            //collidedBall = hitBall
            //return hitBall
        } 
        
    })
    
    // return collidedBall
    const collidedBall = collidedBalls.find(item => item !== undefined) 
    // console.log(collidedBall)
    return collidedBall ? collidedBall : masterBall

}
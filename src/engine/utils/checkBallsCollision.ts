import { Ball } from '../types/types'

export const checkBallsCollision = (balls: Ball[]) => (masterBall: Ball) => {

    let collidedBall = {}

    balls.forEach((checkBall: Ball) => {
        
        if(masterBall.index === checkBall.index) {
            return
        }
        const distanceX = (masterBall.x + masterBall.radius) - (checkBall.x + checkBall.radius)
        const distanceY = (masterBall.y + masterBall.radius) - (checkBall.y + checkBall.radius)
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

        
        const overlap = (distance - masterBall.radius - checkBall.radius) / 2
        //console.log(`distance: ${distance}`)
        //console.log(shiftx)
        if (distance < masterBall.radius + checkBall.radius) {
            const shiftX = masterBall.x - (overlap * ( masterBall.x - checkBall.x )) / distance 
            const shiftY = masterBall.y - (overlap * ( masterBall.y - checkBall.y )) / distance 
            //console.log('collision detected!')
            const normalX = (masterBall.x - checkBall.x) / distance 
            const normalY = (masterBall.y - checkBall.y) / distance 
            console.log(`normalX: ${normalX} normalY: ${normalY}`)
            const tangentX = - normalY
            const tangentY = normalX
            //console.log(`tangentX: ${tangentX} tangentY: ${tangentY}`)


            const dotProductTangentMasterBall = masterBall.xspeed * tangentX + masterBall.yspeed * tangentY

            console.log(`dotProductTangentMasterBall: ${dotProductTangentMasterBall}`)

            const dotProductNormalMasterBall = masterBall.xspeed * normalX + masterBall.yspeed * normalY
            const dotProductNormalCheckBall = checkBall.xspeed * normalX + checkBall.yspeed * normalY
            const impulseMasterBall = (dotProductNormalMasterBall * ( masterBall.mass - checkBall.mass ) + 2 * checkBall.mass * dotProductNormalCheckBall ) / ( masterBall.mass + checkBall.mass)

            collidedBall = {    
                x: shiftX,
                y: shiftY,
                centerx:        masterBall.centerx,
                centery:        masterBall.centery,
                xspeed: tangentX * dotProductTangentMasterBall + normalX * impulseMasterBall,
                yspeed: tangentY * dotProductTangentMasterBall + normalY * impulseMasterBall,
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
                dotProductTangent: 0,
                dotProductNormal: 0
            }
        }   
    })
    
    return collidedBall
    

}
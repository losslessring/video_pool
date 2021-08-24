import { Ball } from '../types/types'

export const checkBallsCollision = (balls: Ball[]) => (masterBall: Ball) => {

    let collidedBall = {...masterBall}
    
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
        // const slowdownX = -masterBall.xspeed * 0.99
        // const slowdownY = -masterBall.yspeed * 0.99
        const slowdownX = -masterBall.xspeed * 0.025
        const slowdownY = -masterBall.yspeed * 0.025
        // const slowdownX = 0.96
        // const slowdownY = 0.96
        // console.log(`xspeed: ${masterBall.xspeed} yspeed: ${masterBall.yspeed}`)
        // console.log(masterBall.hitStep)
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
            
            console.log(masterBall)
            console.log(checkBall)
            // console.log(`dotProductTangentMasterBall: ${dotProductTangentMasterBall}`)

            const dotProductNormalMasterBall = masterBall.xspeed * normalX + masterBall.yspeed * normalY
            const dotProductNormalCheckBall = checkBall.xspeed * normalX + checkBall.yspeed * normalY
            const impulseMasterBall = (dotProductNormalMasterBall * ( masterBall.mass - checkBall.mass ) + 2 * checkBall.mass * dotProductNormalCheckBall ) / ( masterBall.mass + checkBall.mass)

            //const speedX = (masterBall.xspeed) > 0.1 ? (tangentX * dotProductTangentMasterBall + normalX * impulseMasterBall) * slowdownX : 0

            collidedBall = {    
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
        } else {
            collidedBall = {
                ...masterBall,
                xspeed: masterBall.xspeed + slowdownX, //* (currentStep - masterBall.hitStep) / 100,
                yspeed: masterBall.yspeed + slowdownY, //* (currentStep - masterBall.hitStep) / 100,
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
import { Pocket, Ball } from '../../types/types'
import { distanceBetweenTwoCircles } from '../../math/distanceBetweenTwoCircles'

export const checkPocketsHit = (pockets: Pocket[]) => (ball: Ball) => {
    
    let ballHitPocket = {...ball}
    pockets.forEach((pocket: Pocket) => {
        const distance = distanceBetweenTwoCircles(ball.x + ball.radius, ball.y + ball.radius, pocket.x, pocket.y)
        // console.log(distance)
        if (distance < ball.radius + pocket.radius) {
            //console.log("Hit pocket")
            ballHitPocket = {...ball, hitPocket: true, hitPocketNumber: pocket.index}
        }
    })
    
    return ballHitPocket
}
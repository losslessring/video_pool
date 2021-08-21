import { Pocket, Ball } from '../types/types'
import { distanceBetweenTwoCircles } from '../../engine/math/distanceBetweenTwoCircles'

export const checkPocketsHit = (pockets: Pocket[]) => (ball: Ball) => {
    pockets.forEach((pocket: Pocket) => {
        const distance = distanceBetweenTwoCircles(ball.x + ball.radius, ball.y + ball.radius, pocket.x, pocket.y)
        // console.log(distance)
        if (distance < ball.radius + pocket.radius) {
            console.log("Hit pocket")
        }
    })
    return ball
}
import { Ball } from '../types/types'
import { BallPosition } from '../types/types'

export const checkBoundaries = (width: number): Function => (height: number): Function => (radius: number): Function => (ball: Ball): Ball => {
    const diameter = radius * 2
    return {
        x:              ((ball.x > width - diameter )  || (ball.x < 0)) ? ball.x - ball.xspeed : ball.x + ball.xspeed, 
        y:              ((ball.y > height - diameter ) || (ball.y < 0)) ? ball.y - ball.yspeed : ball.y + ball.yspeed,
        centerx:        ball.x + ball.radius,
        centery:        ball.y + ball.radius,
        xspeed:         ((ball.x > width - diameter )  || (ball.x < 0)) ? ball.xspeed * -1 : ball.xspeed,
        yspeed:         ((ball.y > height - diameter ) || (ball.y < 0)) ? ball.yspeed * -1 : ball.yspeed,
        // xspeed: xspeed,
        // yspeed: yspeed,
        velocity:       0,
        direction:      0,
        radius:         ball.radius,
        backgroundColor:((ball.x > width - diameter )  || (ball.x < 0) || (ball.y > height - diameter ) || (ball.y < 0)) ? 'red' : ball.backgroundColor,
        index:          ball.index
    }
}
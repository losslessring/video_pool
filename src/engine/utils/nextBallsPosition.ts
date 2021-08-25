import { Ball } from '../types/types'
import { Pocket } from '../types/types'
import { BallPosition } from '../types/types'
import { checkBoundaries } from './ball_control/checkBoundaries'
import { checkBallsCollision } from './ball_control/checkBallsCollision'
import { checkPocketsHit } from './ball_control/checkPocketsHit'
import { pipe } from './func/func'
import { slowdownBall } from './ball_control/slowdownBall'

export function nextBallsPosition(balls: Ball[], pockets: Pocket[], width: number, height: number, radius: number):Ball[] {
    
    const updatedBallsPositions = balls.map(ball => {
        
        const nextBallPosition = pipe(
            checkBallsCollision(balls),
            checkPocketsHit(pockets),
            checkBoundaries(width)(height)(radius),
            slowdownBall
        )(ball)


        return nextBallPosition
    })

    // console.log(updatedBallsPositions)
    return updatedBallsPositions.filter(ball => !ball.hitPocket )
    
    


    
}
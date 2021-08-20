import { Ball } from '../types/types'
import { BallPosition } from '../types/types'
import { checkBoundaries } from './checkBoundaries'
import { checkBallsCollision } from './checkBallsCollision'
import { pipe } from './func/func'

export function nextBallsPosition(balls: Ball[], width: number, height: number, radius: number):Ball[] {
    
    return balls.map(ball => {
        
        const nextBallPosition = pipe(
            checkBallsCollision(balls),
            checkBoundaries(width)(height)(radius)
        )(ball)
        
        return nextBallPosition
    })
    
}
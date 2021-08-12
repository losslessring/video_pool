import { Ball } from '../types/types'
import { BallPosition } from '../types/types'
import { checkBoundaries } from './checkBoundaries'
import { checkIntersection } from './checkIntersection'
import { pipe } from './func/func'

export function nextBallsPosition(balls: Ball[], width: number, height: number, radius: number):Ball[] {
    
    return balls.map(ball => {
        
        const nextBallPosition = pipe(
            checkIntersection(balls),
            checkBoundaries(width)(height)(radius)
        )(ball)
        
        return nextBallPosition
    })
    
}
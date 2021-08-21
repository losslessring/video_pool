import { Ball } from '../types/types'
import { Pocket } from '../types/types'
import { BallPosition } from '../types/types'
import { checkBoundaries } from './checkBoundaries'
import { checkBallsCollision } from './checkBallsCollision'
import { checkPocketsHit } from './checkPocketsHit'
import { pipe } from './func/func'

export function nextBallsPosition(balls: Ball[], pockets: Pocket[], width: number, height: number, radius: number):Ball[] {
    
    return balls.map(ball => {
        
        const nextBallPosition = pipe(
            checkBallsCollision(balls),
            checkPocketsHit(pockets),
            checkBoundaries(width)(height)(radius)
        )(ball)
        
        return nextBallPosition
    })
    
}
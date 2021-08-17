import { Ball } from '../../types/types'

export function findBallIndexOnPosition(clickX: number, clickY: number, balls: Ball[]): number | undefined {
    
    const foundBall = balls.find((checkBall: any) => {
        const distanceX = clickX - (checkBall.x + checkBall.radius)
        const distanceY = clickY - (checkBall.y + checkBall.radius)
        
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        
        if (distance < checkBall.radius) {
          // console.log(checkBall)
          return true

        } 
    })

    return foundBall ? foundBall.index : undefined
    
}
import { Ball } from '../../types/types'

export function findBallOnPosition(clickX: number, clickY: number, balls: Ball[]) {
    
    balls.forEach((checkBall: any) => {
        const distanceX = clickX - (checkBall.x + checkBall.radius)
        const distanceY = clickY - (checkBall.y + checkBall.radius)
        
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        
        if (distance < checkBall.radius) {
          console.log(checkBall)
          return checkBall.index

        } 
    })
    
}
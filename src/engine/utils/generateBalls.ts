import { ballsLayoutClassic } from './ballsLayout'
import { Ball } from '../types/types'



export function generateBalls(amount :number, radius: number, ballsLayout = ballsLayoutClassic) :Ball[] {
    const balls = [...Array(amount)]
            .map((_, i) => {
                    const ballPosition = ballsLayout.find(currentBall => currentBall.index === i)   
                    
                    if (ballPosition){ 
                        return {
                                        x:              ballPosition.x, 
                                        y:              ballPosition.y,
                                        centerx:        ballPosition.x + radius,
                                        centery:        ballPosition.y + radius,
                                        xspeed:         10,
                                        yspeed:         5,
                                        velocity:       0,
                                        direction:      0,
                                        radius:         radius,
                                        backgroundColor:'yellow',
                                        index:          i
                                }
                    } else return {
                        x:              i * 10, 
                        y:              i * 10,
                        centerx:        i * 10 + radius,
                        centery:        i * 10 + radius,
                        xspeed:         0,
                        yspeed:         0,
                        velocity:       0,
                        direction:      0,
                        radius:         radius,
                        backgroundColor:'yellow',
                        index:          i
                    }
             })
    return balls
}
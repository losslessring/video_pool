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
                                        xspeed:         i ? i * - 6 : 10,
                                        yspeed:         i ? i * - 6 : 10,
                                        velocity:       0,
                                        direction:      0,
                                        radius:         radius,
                                        backgroundColor:'yellow',
                                        normalx:        0,
                                        normaly:        0,
                                        tangentx:       0,
                                        tangenty:       0,
                                        dotProductTangent: 0,
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
                        normalx:        0,
                        normaly:        0,
                        tangentx:       0,
                        tangenty:       0,
                        dotProductTangent: 0,
                        index:          i
                    }
             })
    return balls
}
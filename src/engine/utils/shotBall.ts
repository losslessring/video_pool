import { Ball } from '../types/types'

export function shotBall(directionX: number, directionY: number, selectedBallIndex: number | undefined, shotStrength: number, balls: Ball[]): Ball[] {


    return balls.map((ball: Ball) =>{
                            if (ball.index === selectedBallIndex) {
                                
                                return {
                                    ...ball,
                                    xspeed: (ball.x + ball.radius - directionX) / -shotStrength ,
                                    yspeed: (ball.y + ball.radius - directionY) / -shotStrength
                                }
                            }
                            else {
                                return ball
                            }
                        }

                        )       
}
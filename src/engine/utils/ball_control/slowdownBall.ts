import { Ball } from '../../types/types'

export const slowdownBall = (masterBall: Ball) => {      
 
        const slowdownX = -masterBall.xspeed * 0.025
        const slowdownY = -masterBall.yspeed * 0.025
       
        return {
                ...masterBall,
                xspeed: masterBall.xspeed + slowdownX,
                yspeed: masterBall.yspeed + slowdownY,
        }
} 
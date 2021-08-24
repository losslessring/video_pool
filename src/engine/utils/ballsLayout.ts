
import { BallPosition } from '../types/types'


export const ballsLayoutClassic = (table: any, radius: number) :BallPosition[] => { 
        return [
                {
                        x: table.width / 4,
                        y: table.height / 2,
                        index: 0
                },
                {
                        x: (table.width / 4) * 3,
                        y: table.height / 2,
                        index: 1
                },
                {
                        x: ((table.width / 4) * 3) + radius + 10,
                        y: (table.height / 2) - radius - 10,
                        index: 2
                },
                {
                        x: ((table.width / 4) * 3) + radius + 10,
                        y: (table.height / 2) + radius + 10,
                        index: 3
                }
        ]

}
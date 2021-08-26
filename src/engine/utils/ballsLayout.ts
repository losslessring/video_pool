
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
                        x: ((table.width / 4) * 3) + radius * 2,
                        y: (table.height / 2) - radius - 1,
                        index: 2
                },
                {
                        x: ((table.width / 4) * 3) + radius * 2,
                        y: (table.height / 2) + radius + 1,
                        index: 3
                },
                {
                        x: ((table.width / 4) * 3) + radius * 4,
                        y: (table.height / 2) - radius * 2.1,
                        index: 4
                },
                {
                        x: ((table.width / 4) * 3) + radius * 4,
                        y: (table.height / 2),
                        index: 5
                },
                {
                        x: ((table.width / 4) * 3) + radius * 4,
                        y: (table.height / 2) + radius * 2.1,
                        index: 6
                }
        ]

}
import { Pocket } from '../types/types'

export function generatePockets(tableCoords: any): Pocket[] {
    return [
        {
            x: tableCoords.width/2,
            y: tableCoords.height/2,
            backgroundColor: 'skyBlue',
            radius: 30,
            index: 0
        }
    ]

}
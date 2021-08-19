import { Pocket } from '../types/types'

export function generatePockets(tableCoords: any): Pocket[] {
    return [
        {
            x: tableCoords.width,
            y: tableCoords.height,
            backgroundColor: 'skyBlue',
            radius: 30,
            index: 0
        }
    ]

}
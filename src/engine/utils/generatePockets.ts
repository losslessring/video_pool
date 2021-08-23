import { Pocket } from '../types/types'

export function generatePockets(tableCoords: any): Pocket[] {
    return [
        {
            x: 0,
            y: 0,
            backgroundColor: 'skyBlue',
            radius: 14.2,
            index: 0
        },
        
        {
            x: tableCoords.width,
            y: tableCoords.height,
            backgroundColor: 'skyBlue',
            radius: 14.2,
            index: 3
        },
        
    ]

}
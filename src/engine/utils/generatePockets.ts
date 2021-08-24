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
            x: tableCoords.width / 2,
            y: 0,
            backgroundColor: 'skyBlue',
            radius: 14.2,
            index: 1
        },
        {
            x: tableCoords.width,
            y: 0,
            backgroundColor: 'skyBlue',
            radius: 14.2,
            index: 2
        },
        {
            x: tableCoords.width,
            y: tableCoords.height,
            backgroundColor: 'skyBlue',
            radius: 14.2,
            index: 3
        },
        {
            x: tableCoords.width / 2,
            y: tableCoords.height ,
            backgroundColor: 'skyBlue',
            radius: 14.2,
            index: 4
        },
        {
            x: 0,
            y: tableCoords.height,
            backgroundColor: 'skyBlue',
            radius: 14.2,
            index: 5
        },
        
    ]

}
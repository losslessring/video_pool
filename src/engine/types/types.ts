export type Ball = {
    
    x: number,
    y: number,
    centerx: number,
    centery: number,
    xspeed: number,
    yspeed: number,
    velocity: number,
    direction: number,
    radius: number,
    backgroundColor: string,
    normalx: number,
    normaly: number,
    tangentx: number,
    tangenty: number,
    dotProductTangent: number,
    index: number

}

export type BallPosition = {
    x: number,
    y: number,
    index: number
}

export type LocalCoords = {
    localX: number,
    localY: number
}
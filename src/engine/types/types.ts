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
    dotProductNormal: number,
    mass: number,
    impulse: number,
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

export type Pocket = {
    x: number,
    y: number,
    backgroundColor: string,
    radius: number,
    index: number
}

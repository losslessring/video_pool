
export function distanceBetweenTwoCircles(circle1X: number, circle1Y: number, circle2X: number, circle2Y: number): number {
    const distanceX = circle1X - circle2X
    const distanceY = circle1Y - circle2Y
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
    return distance
}
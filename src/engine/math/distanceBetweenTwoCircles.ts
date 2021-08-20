
export function distanceBetweenTwoCircles(circle1X: number, circle1Y: number, circle2X: number, circle2Y: number, circle1Radius: number, circle2Radius: number): number {
    const distanceX = (circle1X + circle1Radius) - (circle2X + circle2Radius)
    const distanceY = (circle1Y + circle1Radius) - (circle2Y + circle2Radius)
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
    return distance
}
import { LocalCoords } from '../../types/types'

export function viewportToLocalCoords(event: any): LocalCoords {            
			
    
            const viewportX = event.clientX
			const viewportY = event.clientY
 
			
			const boxRectangle = event.currentTarget.getBoundingClientRect()

            const borderWidth = parseInt( window.getComputedStyle( event.target ).borderTopWidth, 10 )
			
			const localX = ( viewportX - boxRectangle.left ) - borderWidth
			const localY = ( viewportY - boxRectangle.top ) - borderWidth

            
            return { localX, localY }
 
}
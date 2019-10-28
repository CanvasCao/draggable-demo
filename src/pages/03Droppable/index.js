import React from 'react'
import './index.css'

class Index extends React.Component {
    render() {
        return (
            <>
                <div id="drag">DRAG ME!</div>
                <div id="drop">DROP ME!</div>
            </>
        )
    }

    componentDidMount() {
        this.startDragging()
    }

    startDragging = () => {
        let isDragging = false
        let dX, dY
        let originX, originY
        let boxX, boxY
        const dragComponent = document.querySelector('#drag')
        const dropComponent = document.querySelector('#drop')

        dragComponent.addEventListener('mousedown', (e) => {
            isDragging = true
            originX = e.clientX
            originY = e.clientY
            boxX = dragComponent.offsetLeft
            boxY = dragComponent.offsetTop
            console.log('mousedown', e)
        })

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                dX = e.clientX - originX
                dY = e.clientY - originY
                dragComponent.style.top = (boxY + dY) + 'px'
                dragComponent.style.left = (boxX + dX) + 'px'
                console.log('mousemove', e)

                if (this.isOverlap(dragComponent, dropComponent)) {
                    dropComponent.style.background = 'red'
                    dropComponent.innerHTML = 'Hey! You can drop now!'
                } else {
                    dropComponent.style.background = 'white'
                    dropComponent.innerHTML = 'DROP ME!'
                }
            }
        })

        document.addEventListener('mouseup', (e) => {
            if (isDragging) {
                isDragging = false
                console.log('mouseup', e)
            }
        })
    }

    isOverlap = (ele1, ele2) => {
        var rect1 = ele1.getBoundingClientRect()
        var rect2 = ele2.getBoundingClientRect()

        var overlap = !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom)
        return overlap
    }
}

export default Index

import React from 'react'
import './index.css'

class Index extends React.Component {
    render() {
        return (
            <div id="drag">DRAG ME!</div>
        )
    }

    componentDidMount() {
        let isDragging = false
        let dX, dY
        let originX, originY
        let boxX, boxY
        const dragComponent = document.querySelector('#drag')
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
            }
        })

        document.addEventListener('mouseup', (e) => {
            if (isDragging) {
                isDragging = false
                console.log('mouseup', e)
            }
        })
    }
}

export default Index

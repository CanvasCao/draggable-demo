import React from 'react'
import {useDrag} from 'react-dnd'
import ItemTypes from './itemType'

const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
}
const Box = () => {
    const [{isDragging}, drag] = useDrag({
        item: {type: ItemTypes.BOX, name: 'Yuhao'},
        end: (item, monitor) => {
            console.log(item)
            console.log(monitor.getDropResult())

            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                alert(`You dropped ${item.type} ${item.name} into ${dropResult.type} ${dropResult.name}!`)
            }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })
    return (
        <div
            ref={drag}
            style={{...style}}
        >BOX Yuhao:<br />Drag me!</div>
    )
}
export default Box

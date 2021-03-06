import React from 'react'
import {useDrop} from 'react-dnd'
import ItemTypes from './itemType'

const style = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
}
const Bin = () => {
    const [{canDrop, isOver}, drop] = useDrop({
        accept: [ItemTypes.BOX],
        drop: () => ({name: 'John', type: ItemTypes.DUST_BIN}),
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    const isActive = canDrop && isOver
    let backgroundColor = '#222'
    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }
    return (
        <div
            ref={drop}
            style={{
                ...style,
                backgroundColor
            }}>
            DustBin John:<br />Drag a box here
        </div>
    )
}
export default Bin

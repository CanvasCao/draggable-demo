import React from 'react'
import {useDrop} from 'react-dnd'
import ItemTypes from './itemType'
import './column.css'
import _ from 'lodash'

const Column = ({columnId, columnName, children, columns}) => {
    const [{canDrop, isOver, getItem}, drop] = useDrop({
        accept: [ItemTypes.STORY_CARD],
        drop: () => ({columnId}),
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            getItem: monitor.getItem(),
        }),
    })

    let ifDropToSameColumn = true
    if (getItem) {
        ifDropToSameColumn = _.find(_.find(columns, {id: columnId}).storyCards, {id: getItem.storyCardId})
    }

    const paddingBottom = (canDrop && isOver && !ifDropToSameColumn) ? 125 : 10

    return (
        <div className="column"
             ref={drop}
             style={{paddingBottom}}
        >
            <div className='columnName'>{columnName}</div>
            {children}
        </div>
    )

}

export default Column

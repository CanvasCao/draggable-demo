import React from 'react'
import {useDrag} from 'react-dnd'
import ItemTypes from './itemType'
import './storycard.css'

const Storycard = ({storyCardIdName, storyCardId, handleStoryCardChangeColumn}) => {
    const [{isDragging}, drag] = useDrag({
        item: {type: ItemTypes.STORY_CARD, storyCardId},
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                // alert(`You dropped ${item.type} ${id} into ${dropResult.columnId}!`)
                handleStoryCardChangeColumn({
                    targetColumnId: dropResult.columnId,
                    storyCardId,
                })
            }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1
    return (
        <div className="story-card"
             ref={drag}
             style={{opacity}}
        >
            {storyCardIdName}
        </div>
    )
}
export default Storycard

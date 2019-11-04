import React from 'react'
import Column from './column'
import HTML5Backend from 'react-dnd-html5-backend/lib/index'
import {DndProvider} from 'react-dnd'
import Storycard from './storycard'
import _ from 'lodash'
import storycards from '../../data/storycards2.json'

class Index extends React.Component {
    state = storycards

    handleStoryCardChangeColumn = ({storyCardId, targetColumnId}) => {
        let columns = [...this.state.columns]
        let draggingStoryCard = null
        columns.forEach((column) => {
            const storyCard = _.find(column.storyCards, {id: storyCardId})
            if (storyCard) {
                draggingStoryCard = storyCard
                column.storyCards = _.reject(column.storyCards, storyCard)
            }
        })
        if (draggingStoryCard) {
            _.find(columns, {id: targetColumnId}).storyCards.push(draggingStoryCard)
            this.setState({columns})
        }
    }

    render() {
        return (
            <DndProvider backend={HTML5Backend}>
                <div id="columns-container">
                    {this.state.columns.map((column) =>
                        <Column
                            key={column.id}
                            columnName={column.name}
                            columnId={column.id}
                            columns={this.state.columns}
                            storycards={column.storyCards}
                        >
                            {column.storyCards.map((storycard) =>
                                <Storycard
                                    key={storycard.id}
                                    storyCardId={storycard.id}
                                    storyCardIdName={storycard.name}
                                    handleStoryCardChangeColumn={this.handleStoryCardChangeColumn}
                                />
                            )}
                        </Column>
                    )}
                </div>
            </DndProvider>
        )
    }
}

export default Index
import React from 'react'
import Column from './column'
import HTML5Backend from 'react-dnd-html5-backend/lib/index'
import {DndProvider} from 'react-dnd'
import Storycard from './storycard'
import _ from 'lodash'

class Index extends React.Component {
    state = {
        columns: [
            {
                id: 1,
                name: 'Ready For Dev',
                storyCards: [
                    {id: 1, name: 'Story card 1'},
                    {id: 2, name: 'Story card 2'},
                ],
            },
            {
                id: 2,
                name: 'In Dev',
                storyCards: [
                    {id: 3, name: 'Story card 3'},
                ],
            },
            {
                id: 3,
                name: 'Ready For QA',
                storyCards: [],
            },
            {
                id: 4,
                name: 'In QA',
                storyCards: [
                    {id: 6, name: 'Story card 6'},
                    {id: 7, name: 'Story card 7'},
                ],
            },
        ],
    }

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
            </DndProvider>
        )
    }
}

export default Index
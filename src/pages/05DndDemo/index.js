import React from 'react'
import Bin from './bin'
import Box from './box'
import HTML5Backend from 'react-dnd-html5-backend/lib/index'
import {DndProvider} from 'react-dnd'

class Index extends React.Component {
    render() {
        return (
            <DndProvider backend={HTML5Backend}>
                <>
                    <Bin />
                    <Box />
                </>
            </DndProvider>
        )
    }
}

export default Index
import React from 'react';
import { GridContext } from './GridContext';
import Counter from './Counter';
import Cell from './Cell';

const INITIAL_GRID_STATE = Array(4).fill(false);

const Grid = () => {
    const [gridState, setGridState] = React.useState(INITIAL_GRID_STATE);

    const toggleCell = (index) => {
        setGridState(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <GridContext.Provider value={{ cells: gridState, toggleCell }}>
            <div className="grid-container">
                <Counter />
                <div className="grid">
                    {gridState.map((_, index) => (
                        <Cell key={index} index={index} />
                    ))}
                </div>
            </div>
        </GridContext.Provider>
    );
};

export default Grid; 
import React from 'react';
import { GridContext } from './GridContext';

const Counter = () => {
    const { cells } = React.useContext(GridContext);
    const activeCount = cells.reduce((count, cell) => count + (cell ? 1 : 0), 0);
    
    return (
        <div className="counter">
            Active Cells: {activeCount}
        </div>
    );
};

export default Counter; 
const Cell = ({ index }) => {
    const { cells, toggleCell } = React.useContext(GridContext);
    return (
        <div 
            className="cell"
            style={{ backgroundColor: cells[index] ? 'black' : 'white' }}
            onClick={() => toggleCell(index)}
        />
    );
};
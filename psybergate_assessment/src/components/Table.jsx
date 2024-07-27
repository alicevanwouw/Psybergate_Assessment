
function Table({ columns, data }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column.displayName}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column, colIndex) => (
                            column.key !== "Action" ? (
                                <td key={colIndex}>{row[column.key]}</td>
                            ) : (
                                <td key={colIndex}>{row.Action(row.Id)}</td>
                            )
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;

function Table({ columns, data }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map((column, index) => (
                       
                         column.key !== "Action" ? (
                            <th key={index}>{column.displayName}</th>
                        ) : (
                            <th className="items-end pe-3" style={{ border: 'none' }} key={index}>{column.displayName}</th>
                        )
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="table-row">
                        {columns.map((column, colIndex) => (
                            column.key !== "Action" ? (
                                <td key={colIndex}>{row[column.key]}</td>
                            ) : (
                                    <td  key={colIndex}>
                                        <div class="grid-container">
                                            <div class="grid-item-right">{row.Action(row.Id)}</div>
                                        </div>                                       
                                    </td>
                            )
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
import React from 'react';

const TableRow = ({ item, columns }) => (
    <tr>
        {columns.map((column) => (
            <td key={column}>
                {item[column] !== undefined && item[column] !== null ? item[column] : 'N/A'}
            </td>
        ))}
    </tr>
);

export default TableRow;

import React from 'react';

const TableHeader = ({ columns, formatColumnName }) => (
    <thead>
        <tr>
            {columns.map((column) => (
                <th key={column}>{formatColumnName(column)}</th>
            ))}
        </tr>
    </thead>
);

export default TableHeader;

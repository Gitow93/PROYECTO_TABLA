import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import '../styles/css/Table.css';
import useBooksData from '../hooks/useBooksData';

const Table = () => {
    const { data, columns, loading } = useBooksData();


    const formatColumnName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="table-container">
            <table>
                <TableHeader columns={columns} formatColumnName={formatColumnName} />
                <tbody>
                    {data.map((item, index) => (
                        <TableRow key={index} item={item} columns={columns} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;

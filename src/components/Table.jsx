import React, { useEffect, useState } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import '../styles/css/Table.css';

const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = [
                {
                    título: 'Dune',
                    autor: 'Frank Herbert',
                    año: 1965,
                    género: 'Ciencia Ficción',
                    páginas: 412,
                    isbn: '9780441013593',
                },
                {
                    título: 'Neuromante',
                    autor: 'William Gibson',
                    año: 1984,
                    género: 'Cyberpunk',
                    páginas: 271,
                    isbn: '9780441569595',
                },
            ];
            setData(data);
        };

        fetchData();
    }, []);

    const columns = Array.from(
        new Set(data.flatMap((item) => Object.keys(item)))
    );

    const formatColumnName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

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

import React from 'react';
import '../styles/css/Table.css';


const Table = () => {

    const books = [
        {
            title: 'Dune',
            author: 'Frank Herbert',
            year: 1965,
            genre: 'Science Fiction',
            pages: 412,
            isbn: '9780441013593'
        },
        {
            title: 'Neuromancer',
            author: 'William Gibson',
            year: 1984,
            genre: 'Cyberpunk',
            pages: 271,
            isbn: '9780441569595'
        }
    ];

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>Genre</th>
                        <th>Pages</th>
                        <th>ISBN</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.isbn}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.year}</td>
                            <td>{book.genre}</td>
                            <td>{book.pages}</td>
                            <td>{book.isbn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;

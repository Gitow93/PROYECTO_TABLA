import { useState, useEffect } from "react";
import booksData from "../assets/books.json";

const useBooksData = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(booksData);

        const allColumns = Array.from(
          new Set(booksData.flatMap((item) => Object.keys(item)))
        );
        setColumns(allColumns);

        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los datos de los libros:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, columns, loading };
};

export default useBooksData;

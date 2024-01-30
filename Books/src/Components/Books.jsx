import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const Books = () => {
  const [BooksData, setData] = useState([]);

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })
      .then((response) => {
        setData(response.data.books); 
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      {BooksData.map((e) => (
        <div  className="Main">
          <div className='BooksPart'>
            <p className='title' style={{
              width:"200px"
            }}>{e.title}</p>
            <a href={e.previewLink} target='blank'>

            <img src={e.imageLinks.smallThumbnail} alt="" />
          
            </a>
            <p className='AuthorName'>{e.authors}</p>
          </div>
          <p className='Description'>{e.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Books;

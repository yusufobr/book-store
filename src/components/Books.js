import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

export default function Books() {
  const { books } = useSelector((state) => state.books);

  return (
    <div className="flex flex-col gap-12">
      <div>
        {books.map((item) => (
          <Book
            key={item.item_id}
            id={item.item_id}
            title={item.title}
            author={item.author}
            category={item.category}
          />
        ))}
      </div>
      <hr />
      <h2 className="text-gray-400 text-xl font-bold uppercase">add new book</h2>
      <AddBook />
    </div>
  );
}

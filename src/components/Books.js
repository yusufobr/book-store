import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

export default function Books() {
  const booksData = [
    { title: 'Walter secrets', author: 'Jhon Doe' },
    { title: 'Space Life', author: 'Jane Doe' },
  ];
  return (
    <div className="flex flex-col gap-12">
      <div>
        {booksData.map((item) => (
          <Book title={item.title} author={item.author} key={item.id} />
        ))}
      </div>
      <AddBook />
    </div>
  );
}

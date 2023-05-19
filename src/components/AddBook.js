import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [alert, setAlert] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: Math.random().toString().substr(2, 6),
      title,
      author,
      category,
    };
    if (newBook.category === '') { setAlert(true); } else {
      dispatch(addBook(newBook));
      setAlert(false);
      setTitle('');
      setAuthor('');
    }
  };

  const inputStyles = 'border rounded-sm border-gray-300 h-10 pl-4 w-[28%]';

  return (
    <form className="container flex items-center justify-between gap-2 mb-12">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Book Title"
        className={inputStyles}
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author Name"
        className={inputStyles}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={alert ? `${inputStyles} border-rose-600` : inputStyles}
        required
      >
        <option value="" disabled selected>select option</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-fiction">Non-fiction</option>
        <option value="Mystery/Thriller">Mystery/Thriller</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Romance">Romance</option>
      </select>
      <button
        onClick={handleSubmit}
        className="text-white font-light rounded uppercase py-2 px-6 w-[13rem] bg-[#0290ff]"
        type="submit"
      >
        Add Book
      </button>
    </form>
  );
}

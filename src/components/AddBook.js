export default function AddBook() {
  return (
    <form className="container flex items-center justify-between gap-2">
      <input placeholder="Book Title" className="bg-gray-100 w-full" />
      <input placeholder="Author Name" className="bg-gray-100 w-full" />
      <button className="text-right text-gray-600" type="submit">AddBook</button>
    </form>
  );
}

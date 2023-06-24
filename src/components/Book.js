import React from 'react';
// eslint-disable-next-line
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import './Book.css';

export default function Book(props) {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();

  const progressNumber = Math.floor(Math.random() * 100) + 1;

  return (
    <div className="py-8 px-6 grid grid-cols-3 gap-32 my-4 border rounded-sm border-gray-300 bg-white hover:border-gray-400">
      <div className="col-span-2 flex justify-between">
        <div className="flex flex-col gap-1 capitalize">
          <span className="text-gray-500 font-semibold">{category}</span>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">{title}</span>
            <span className="text-[#4386bf] font-light">{author}</span>
          </div>
          <div className="flex gap-4 mt-6 text-[#4386bf] items-center font-light">
            <span>comments</span>
            <span className="w-[1px] h-4 bg-[#e8e8e8]" />
            <button
              onClick={() => dispatch(deleteBook(id))}
              id={id}
              type="button"
            >
              remove
            </button>
            <span className="w-[1px] h-4 bg-[#e8e8e8]" />
            <span>edite</span>
          </div>
        </div>
        <div id="thediv" className="mr-16">
          <div
            role="progressbar"
            aria-valuenow="65"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ '--value': progressNumber }}
          >
            .
          </div>
          <div className="completed-div">
            <span className="prc">
              {progressNumber}
              {' '}
              %
            </span>
            <span className="completed -mt-2">Completed</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-gray-300 uppercase">current chapter</span>
        <span className="capitalize text-2xl font-light">chapter 17</span>
        <button
          className="text-white font-light rounded uppercase mt-6 py-2 px-6 w-[13rem] bg-[#0290ff]"
          type="button"
        >
          update progress
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

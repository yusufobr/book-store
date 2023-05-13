import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';

export default function Book(props) {
  const { title, author } = props;
  return (
    <div className="py-1 flex justify-between">
      <span>{title}</span>
      <span>
        by :
        {author}
      </span>
      <button className="bg-gray-200 p-1" type="button">remove</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

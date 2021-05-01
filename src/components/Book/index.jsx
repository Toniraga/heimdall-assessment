import React from 'react';
import { ElrButton } from '../Button';

const Book = ({ book }) => {

  const borrowBook = (book) => {
    // eslint-disable-next-line no-restricted-globals
    const accept = confirm('Are you sure you want to borrow a book?')
    if (accept) {
      alert('Book Added')
    }
  }

  return (
    <div className="w-40 mb-8 mx-5">
      <img src={book?.image} className="rounded-xl" alt="" />
      <ElrButton
        text="Borrow"
        onClick={() => borrowBook(book)}
        className="bg-elr-black text-white text-lg mt-4 mb-2 w-full"
      />
      <p className="mb-2 text-sm text-center"> 
        Title : <span className="text-elr-green text-sm font-semibold"> {book?.name} </span> 
      </p>
      <p className="mb-2 text-sm text-center"> 
        Author : <span className="text-elr-green text-sm font-semibold"> {book?.author} </span> 
      </p>
      <p className="flex flex-col items-center justify-center h-14 text-sm rounded-xl border border-elr-green">
        <span> Qty : <span className='text-lg text-elr-green'> {book?.quantity}</span> </span>
        <span> Rating : <span className='text-base text-elr-green'> {book?.stars}</span> </span>
      </p>
    </div>
  );
};
export default Book;
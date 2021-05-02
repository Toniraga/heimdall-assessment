import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Axios from '../../Axios.config';
import { ElrButton } from '../Button';

const Book = ({ book, borrowed }) => {
  const history = useHistory();

  const borrowBook = async (book) => {
    console.log(borrowed);
    const duplicate = borrowed.length > 0 && borrowed.find(one => one.id === book.id);
    try {
      // Check is book is duplicate or user has reached borrow limit
      if (borrowed?.length >= 2) return toast.error('Sorry, you cannot borrow more books', { position: 'top-right' });

      if (duplicate) return toast.error('Sorry, you cannot borrow another copy of this book', { position: 'top-right' });
        
      const borrowedClone = [...borrowed]
      // eslint-disable-next-line no-restricted-globals
      const accept = confirm('Are you sure you want to borrow a book?')
      if (accept) {
        borrowedClone.push(book)
        await Axios.init().patch('/update', { borrowedbooks: borrowedClone })
        await Axios.init().patch(`/book/${book.id}`, { quantity: book.quantity - 1 })
      }
      return history().push('/borrowed');
    } catch(err) {
      console.log(err);
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
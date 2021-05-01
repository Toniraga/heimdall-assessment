import React from 'react';
import { ElrButton } from '../Button';

const Book = () => {

  return (
    <div className="w-40 mb-8 mx-5">
      <img src="https://mockuptree.com/wp-content/uploads/edd/2019/03/Fashion-Book-Cover-Free-PSD-Mockup.jpg" className="rounded-xl" alt="" />
      <ElrButton
        text="Borrow"
        submit
        className="bg-elr-black text-white text-lg mt-4 mb-2 w-full"
      />
      <p className="mb-2 text-sm text-center"> 
        Title : <span className="text-elr-green text-sm font-semibold">How to get Rich</span> 
      </p>
      <p className="mb-2 text-sm text-center"> 
        Author : <span className="text-elr-green text-sm font-semibold">Priya Yahoo</span> 
      </p>
      <p className="flex flex-col items-center justify-center h-14 text-sm rounded-xl border border-elr-green">
        <span> Qty : <span className='text-xl text-elr-green'> 4</span> </span>
        <span> Rating : <span className='text-base text-elr-green'> 4.5</span> </span>
      </p>
    </div>
  );
};
export default Book;
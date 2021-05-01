import React from 'react';
import { ElrButton } from '../Button';

const BorrowedBook = () => {

  return (
    <>
      <div className="w-40 flex flex-col items-center mx-10">
        <img src="https://www.free-mockup.com/wp-content/uploads/edd/2020/10/Letter-Size-Cover-Branding-Book-Free-Mockup.jpg" className="rounded-xl" alt="" />
        <p className="mb-2 text-sm text-center"> 
          Title : <span className="text-elr-green text-sm font-semibold">How to get Rich</span> 
        </p>
        <p className="mb-2 text-sm text-center"> 
          Author : <span className="text-elr-green text-sm font-semibold">Priya Yahoo</span> 
        </p>
        <p className="flex flex-col items-center justify-center w-full h-10 text-sm rounded-xl border border-elr-green">
          <span> Rating : <span className='text-base text-elr-green'> 4.5</span> </span>
        </p>
      </div>
      <div className="flex flex-col">
        <ElrButton
          text="Borrow"
          className="bg-elr-black text-white text-lg mt-4 mb-2"
        />
        <ElrButton
          text="Return"
          className="bg-elr-green text-white text-lg mt-4 mb-2"
        />
      </div>
    </>
  );
};
export default BorrowedBook;
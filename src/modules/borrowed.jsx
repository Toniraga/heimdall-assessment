import React from 'react';
import BorrowedBook from '../components/BorrowedBook';

const Borrowed = () => {
  return (
    <>
      <div className="flex flex-col overflow-y-scroll h-screen items-center bg-elr-gray-500 py-20">
        <div>
          <div>
            <h1 className="text-3xl"> BORROWED </h1>
            <div className="border borber-b border-elr-black mb-14 opacity-60" />
          </div>
        </div>
        {[0, 1].map((_, i) => {
            return (
              <div key={i} className="w-80 rounded items-center flex flex-col md:flex-row md:w-1/2 py-5 mb-8 justify-center border border-elr-green">
                <BorrowedBook />
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Borrowed;

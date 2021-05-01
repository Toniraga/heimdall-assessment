import React from 'react';
import Book from '../components/Book';
// import { ElrButton } from '../components/Button';

const Library = () => {

  return (
    <>
      <div className="flex flex-col overflow-y-scroll h-screen items-center bg-elr-gray-500 py-20">
        <div>
          <div>
            <h1 className="text-3xl"> LIBRARY </h1>
            <div className="border borber-b border-elr-black mb-14 opacity-60" />
          </div>
        </div>
        <div className="w-5/6 md:w-3/5 mx-auto">
          <div className="grid grid-cols-medium-auto-fill md:grid-cols-auto-fill">
            {[0, 1, 2, 3].map((_, i) => {
            return (
              <div key={i}> 
                <Book />
              </div>
            )
          })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Library;
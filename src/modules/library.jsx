import React from 'react';
import Book from '../components/Book';
import { useFetchBooks } from '../hooks/books';

const Library = () => {
  const { data, loading } = useFetchBooks();
  console.log(data, loading);

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
          {data ? (
            data?.map((datum, i) => {
              return (
                <div key={i}> 
                  <Book book={datum} />
                </div>
              )
            })) : (
              <div> Sorry, We couldn't fint any books </div>
          )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Library;
import React from 'react';
import Nav from '../components/Nav';
import Book from '../components/Book';
import { useFetchBooks } from '../hooks/books';
import { useFetchUser } from '../hooks/user';
import { useLocation } from 'react-router-dom';

const Library = () => {
  const { data } = useFetchBooks();
  const userId =
    new URLSearchParams(useLocation().search).get('id');
  const { isFetched, isError, user } = useFetchUser(userId)
  const borrowedArr = user?.borrowedbooks || user?.pages[0]?.user.borrowedbooks;

  return (
    <>
      <div className="flex flex-col overflow-y-scroll h-screen items-center bg-elr-gray-500 pb-20">
        <Nav userId={userId} />
        <div>
          <div>
            <h1 className="text-3xl"> LIBRARY </h1>
            <div className="border borber-b border-elr-black mb-14 opacity-60" />
          </div>
        </div>
        <div className="w-5/6 md:w-3/5 mx-auto">
          <div className="grid grid-cols-medium-auto-fill md:grid-cols-auto-fill">
          {data && !isError && isFetched ? (
            data?.map((datum, i) => {
              return (
                <div key={i}> 
                  <Book 
                    book={datum}
                    borrowed={borrowedArr}
                    userId={userId}
                  />
                </div>
              )
            })) : (
              <div> Loading... </div>
          )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Library;
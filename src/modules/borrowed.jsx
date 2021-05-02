import React from 'react';
import { useLocation } from 'react-router-dom';
import BorrowedBook from '../components/BorrowedBook';
import Nav from '../components/Nav';
import { useFetchBooks } from '../hooks/books';
import { useFetchUser } from '../hooks/user';

const Borrowed = () => {
  const { data } = useFetchBooks();
  const userId =
    new URLSearchParams(useLocation().search).get('id');
  const { isFetched, isError, user } = useFetchUser(userId)
  
  const fetchedBooks = data;
  const borrowedArr = user?.borrowedbooks || user?.pages[0]?.user.borrowedbooks;
  const borrowedBooks = fetchedBooks?.filter((data) => {
    const borrowed = borrowedArr?.find((id) => data.id === id)
    return data.id === borrowed;
  }) || undefined

  console.log(borrowedBooks);
  console.log(isFetched, isError, user);

  return (
    <>
      <div className="flex flex-col overflow-y-scroll h-screen items-center bg-elr-gray-500 pb-20">
        <Nav userId={userId} />
        <div>
          <div>
            <h1 className="text-3xl"> BORROWED </h1>
            <div className="border borber-b border-elr-black mb-14 opacity-60" />
          </div>
        </div>
        {borrowedBooks && isFetched ? borrowedBooks?.map((book, i) => {
          return (
            <div key={i} className="w-80 rounded items-center flex flex-col md:flex-row md:w-1/2 py-5 mb-8 justify-center border border-elr-green">
              <BorrowedBook book={book} />
            </div>
          )
        }) : (
          <div> Loading... </div>
        )}
      </div>
    </>
  )
}

export default Borrowed;

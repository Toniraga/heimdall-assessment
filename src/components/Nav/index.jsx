import React from 'react'
import { useHistory } from 'react-router-dom';

const Nav = ({ userId }) => {
  const history = useHistory();
  return (
    <div 
      className="flex cursor-pointer justify-between w-full pt-5 pb-10 px-20">
      <h1 className="text-3xl"> BOOK
        <span className="text-elr-purple">Lib</span> 
      </h1>
      <div 
        onClick={() => history.push(`/borrowed?id=${userId}`)} className="text-xl cursor-pointer text-elr-green"> ReadList </div>
    </div>
  )
}

export default Nav

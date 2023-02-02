import React, { useEffect } from 'react';

const Modal = ({ modelText, closeModal }) => {

  useEffect(() => {

    setTimeout(() => {
        console.log('finished');
      closeModal();
    }, 2000);
  });
  return (
    <div className='h-[30px] bg-red-400 w-[100%]'>
      <h1>{modelText}</h1>
    </div>
  );
};

export default Modal;

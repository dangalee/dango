import React from 'react';
import AlertModalSVG from './AlertModalSVG';
import { IoClose } from 'react-icons/io5';
export default function AlertModal({ isOpen, closeModal }) {
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modal-background')) {
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className='fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-brightness-50'
          onClick={handleBackgroundClick}
        >
          <div className='p-8 rounded-lg w-full h-full ' onClick={closeModal}>
            <button onClick={closeModal}>
              <IoClose
                fill='white'
                className='absolute top-0 right-0 mt-4 mr-4'
              />
            </button>
            <AlertModalSVG />
          </div>
        </div>
      )}
    </>
  );
}

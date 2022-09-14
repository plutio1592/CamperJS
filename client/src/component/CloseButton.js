import React from 'react';
// import '../styles/CloseButton.css';

function CloseButton({ onClick }) {
  return (
    <button className='close_button' type='button' onClick={onClick}>
      <img src='/icons/icon_close.svg' alt='close' />
    </button>
  );
};

export default CloseButton;
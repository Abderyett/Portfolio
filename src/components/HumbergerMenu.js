import React from 'react';

function Hamburger() {
  return (
    <svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8a1.333 1.333 0 000 2.667h32A1.333 1.333 0 1036 8H4zM2.667 20A1.333 1.333 0 014 18.667h32a1.333 1.333 0 110 2.666H4A1.333 1.333 0 012.667 20zm0 10.667A1.333 1.333 0 014 29.333h32A1.333 1.333 0 1136 32H4a1.334 1.334 0 01-1.333-1.333z"
        fill="#000"
      />
    </svg>
  );
}

export default Hamburger;

'use client';

import React from 'react';

export default function CustomButton({ children, ...props }) {
  return (
    <button className="btn" {...props}>
      {children}
    </button>
    
  );
}

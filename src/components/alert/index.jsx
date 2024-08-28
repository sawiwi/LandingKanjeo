import React from 'react';

const Alert = ({ message }) => {
  return (
    <div
      className="  z-50  p-4 mb-4 text-sm text-red-900 rounded-lg bg-red-200 dark:bg-gray-800 dark:text-red-400 "
      role="alert"
    >
      <span className="font-medium">{message}</span>
    </div>
  );
};

export default Alert;

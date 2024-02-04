import React from 'react';

const Alert = ({ message }) => {
  return (
    <div
      className="tw-p-4 tw-mb-4 tw-text-sm tw-text-red-800 tw-rounded-lg tw-bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <span className="tw-font-medium">{message}</span>
    </div>
  );
};

export default Alert;

import React from 'react';

const Badge = ({ content, color }) => {
  const getBadgeColor = (color) => {
    switch (color) {
      case 'blue':
        return 'tw-bg-blue-100 tw-text-blue-800';
      case 'red':
        return 'tw-bg-red-100 tw-text-red-800';
      case 'yellow':
        return 'tw-bg-yellow-100 tw-text-yellow-800';
      case 'green':
        return 'tw-bg-green-100 tw-text-green-800';
      case 'gray':
        return 'tw-bg-gray-100 tw-text-gray-800';
      default:
        return 'tw-bg-gray-100 tw-text-gray-800';
    }
  };

  return (
    <span
      className={`${getBadgeColor(
        color
      )} tw-text-xs tw-font-medium tw-mr-2 tw-px-2.5 tw-py-0.5 tw-rounded`}
    >
      {content}
    </span>
  );
};

export default Badge;

import React from 'react';

const Badge = ({ content, color }) => {
  const getBadgeColor = (color) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100 text-blue-800';
      case 'red':
        return 'bg-red-100 text-red-800';
      case 'yellow':
        return 'bg-yellow-100 text-yellow-800';
      case 'green':
        return 'bg-green-100 text-green-800';
      case 'gray':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span
      className={`${getBadgeColor(
        color
      )} text-xs font-medium mr-2 px-2.5 py-0.5 rounded`}
    >
      {content}
    </span>
  );
};

export default Badge;

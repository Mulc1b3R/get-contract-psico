import React from 'react';

const RemixButton = () => {
  const redirectToRemix = () => {
    window.location.href = 'https://remix.org';
  };

  return (
    <button className="remix-button" onClick={redirectToRemix}>
      Go to remix.org
    </button>
  );
};

export default RemixButton;

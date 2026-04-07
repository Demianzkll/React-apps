import React from 'react';

const NewsCard = ({ title, text }) => {
  return (
    <div className="news-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default NewsCard;
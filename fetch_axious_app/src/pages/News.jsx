import React from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from '../Reusable_components/NewsCard';

const News = () => {
  const { name } = useParams();

  const newsData = [
    { id: 1, title: `Нова подія у ${name}`, text: "Опис цікавої події, що відбудеться незабаром." },
    { id: 2, title: `Ремонт доріг у ${name}`, text: "Будьте уважні, центральні вулиці перекриті." }
  ];

  return (
    <div className="news-page">
      <h1>Новини міста {name}</h1>
      <div className="news-list">
        {newsData.map(item => (
          <NewsCard key={item.id} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default News;
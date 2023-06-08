import React from 'react';
import './News.css'
const News = () => {
  // Create an array of news articles or fetch the data from an API
  const newsArticles = [
    {
      id: 1,
      title: 'Exciting Event Coming Up',
      description: 'Join us for an exciting event happening this weekend. Don\'t miss out on the opportunity to connect and grow together!',
      date: 'May 25, 2023',
    }
    // {
    //   id: 2,
    //   title: 'Volunteer Appreciation Day',
    //   description: 'We want to express our heartfelt gratitude to all our dedicated volunteers. Join us this Sunday as we honor and appreciate their invaluable service.',
    //   date: 'May 26, 2023',
    // },
    // Add more news articles as needed
  ];

  return (
    <div>
      <h2 className='news-title'>Daily News</h2>
      {newsArticles.map((article) => (
        <div key={article.id}>
          <h3 className='news-article-title'>{article.title}</h3>
          <p className='news-description'>{article.description}</p>
          <p className='news-description-date'>{article.date}</p>
        </div>
      ))}
    </div>
  );
};

export default News;

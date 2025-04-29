import React from 'react';

const repos = [
  {
    url: 'https://github.com/jsanc33/Project-1',
    name: 'Project 1',
  },
  {
    url: 'https://github.com/AmnaEjaz488/Project-2',
    name: 'Project 2',
  },
  {
    url: 'https://github.com/jsanc33/Book-Search-Engine',
    name: 'Book Search Engine',
  },
  {
    url: 'https://github.com/jsanc33/nosql-api',
    name: 'NoSQL API',
  },
  {
    url: 'https://github.com/jsanc33/Vehicle-Builder',
    name: 'Vehicle Builder',
  },
  {
    url: 'https://github.com/jsanc33/personnel-fulfillment',
    name: 'Personnel Fulfillment',
  },
];

const Portfolio = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {repos.map((repo, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold mb-2">{repo.name}</h2>
          <p className="text-gray-600 break-words">{repo.url}</p>
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            View Repository →
          </a>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;

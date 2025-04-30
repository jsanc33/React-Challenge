import React from 'react';
import ProjectCard from '../ProjectCard';

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
      {repos.map((repo) => (
        <ProjectCard repo={repo}/>
      ))}
    </div>
  );
};

export default Portfolio;

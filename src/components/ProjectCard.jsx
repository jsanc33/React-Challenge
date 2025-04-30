import React from 'react'
import imgSrc from '../assets/hansoloplaceholder.png'


const ProjectCard = ({repo}) => {
  return (
    <div
    key={repo.name}
    className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition"
  >
    <h2 className="text-xl font-bold mb-2">{repo.name}</h2>
    <img src={imgSrc} alt="placeholder image" />
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
  )
}

export default ProjectCard
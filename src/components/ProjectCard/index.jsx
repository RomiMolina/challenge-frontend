import React from 'react';
import Card from './Card';
import './index.css';

export default function ProjectCard({ project }) {
  console.log('holaa', project);
  return (
    <div>
      {project?.map((p) => (
        <div key={p.id}>
          <Card p={p} />
        </div>
      ))}
    </div>
  );
}

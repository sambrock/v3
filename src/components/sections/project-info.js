import React from 'react';
import { Github } from '@styled-icons/boxicons-logos'
import {Launch} from '@styled-icons/material';

import TechList from '../tech-list';

const ProjectInfo = ({ project }) => {
  return (
    <section className="flex py-20 px-8 md:px-24 flex-col lg:flex-row justify-between">
      <div className="flex flex-col w-full lg:w-2/3 mr-12">
        <h2 className="text-heading">{project.shortDescription}</h2>
        <p className="text-base my-8" dangerouslySetInnerHTML={{ __html: project.description }}></p>
        <div className="mt-0 flex items-center">
          <a className="link font-bold" target="__blank" rel="noopener" style={{ color: project.color, borderColor: project.color }} href={project.url}>Launch <Launch className="h-5 line-height-0 mb-1"/></a>
          {project.github && (
            <a href={project.github} target="__blank" rel="noopener" className="link ml-12 text-opacity">View code <Github className="h-5 line-height-0 mb-1" /></a>
          )}
        </div>
      </div>
      <div className="flex flex-col mt-20 lg:mt-0">
        <div className="flex">
          <div className="mr-auto sm:mr-12">
            <h3 style={{ color: project.color }}>Completed</h3>
            <span>{project.completed}</span>
          </div>
          <div>
            <h3 style={{ color: project.color }}>My role</h3>
            <ul>
              {project.role.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
        </div>
        <div className="col-span-2 w-full mt-6">
          <h3 style={{ color: project.color }}>Made with</h3>
          <TechList items={project.tech} />
        </div>
      </div>
    </section>
  )
}

export default ProjectInfo;
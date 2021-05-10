import React, { useState, useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import TLink from '../transition-link';

const Buttons = ({ data, current }) => {
  const [projects, setProjects] = useState(data.projects.edges)
  const [prevProject, setPrevProject] = useState();
  const [nextProject, setNextProject] = useState();

  let currentIndex = current - 1;

  useEffect(() => {
    let prevProject = projects[currentIndex - 1];
    if (!prevProject) return;
    setPrevProject(prevProject.node);
  }, [currentIndex, projects])

  useEffect(() => {
    let nextProject = projects[currentIndex + 1];
    if (!nextProject) return;
    setNextProject(nextProject.node);
  }, [currentIndex, projects])

  return (
    <section className="flex justify-between w-full px-8 sm:px-24 items-baseline pt-0 sm:py-20">
      {prevProject && (
        <div className="flex mr-auto">
          <TLink to={`/${prevProject.title.toLowerCase()}`} color={prevProject.color}>
            <span className="text-opacity text-sm uppercase font-medium">Prev</span>
            <div className="text-xl sm:text-heading font-semibold">{prevProject.title}</div>
          </TLink>
        </div>
      )}
      {nextProject && (
        <div className="flex ml-auto">
          <TLink to={`/${nextProject.title.toLowerCase()}`} color={nextProject.color}>
            <span className="text-opacity text-right w-full block uppercase text-sm font-medium">Next</span>
            <div className="text-xl sm:text-heading font-semibold">{nextProject.title}</div>
          </TLink>
        </div>
      )}
    </section>
  )
}

const ProjectPrevNext = (props) => (
  <StaticQuery
    query={graphql`
      query {
        projects: allProjectsJson {
          edges {
            node {
              id
              title
              color
            }
          }
        }
      }
      `}
    render={data => <Buttons data={data} {...props} />}
  />
)

export default ProjectPrevNext;
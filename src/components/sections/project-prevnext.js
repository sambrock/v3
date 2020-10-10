import React, { useState, useEffect } from 'react';
import { StaticQuery } from 'gatsby';
import styled from 'styled-components';
import TLink from '../transition-link';

const StyledPrevNextContainer = styled.section`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .project__prev-btn, .project__next-btn {
    display: flex;
    flex-direction: column;
  }

  .project__prev-btn {
    grid-column: 1;
    margin-right: auto;
  }

  .project__next-btn {
    grid-column: 2;
    margin-left: auto;
    display: flex;

    .sub-title {
      align-items: flex-end;
      margin-left: auto;
    }
  }
`;

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
    <StyledPrevNextContainer>
      {prevProject ? (
        <div className="project__prev-btn">
          <TLink to={`/${prevProject.title.toLowerCase()}`} color={prevProject.color}>
            <span className="sub-title">Prev</span>
            <div className="title">{prevProject.title}</div>
          </TLink>
        </div>
      ) : (<div className="project__prev-btn" />)}
      {nextProject ? (
        <div className="project__next-btn">
          <TLink to={`/${nextProject.title.toLowerCase()}`} color={nextProject.color}>
            <span className="sub-title">Next</span>
            <div className="title">{nextProject.title}</div>
          </TLink>
        </div>
      ) : (<div className="project__next-btn" />)}
    </StyledPrevNextContainer>
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
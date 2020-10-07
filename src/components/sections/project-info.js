import React from 'react';
import styled from 'styled-components'

import TechList from '../tech-list';

const StyledProjectInfoContaiener = styled.section`
    display: flex;

    @media (min-width: 1550px) {
      max-width: 1200px;
    }
    
    @media (max-width: 1080px) {
      flex-direction: column;
      width: 100%;
    }

    .project__mini-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 1rem;
      grid-column-gap: 3.5rem;
      flex-shrink: 0;

      .project__info-item {
        &:last-child {
          grid-column: span 2;
        }

        h3 {
          font-size: .9em;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0 0 .75rem 0;
        }

        ul {
          margin: 0;
          padding: 0;

          li {
            list-style-type: none;
            margin: 0 0 .3525rem 0;
            font-weight: 500;
          }
        }

        .project__tech-list {
          display: flex;
          align-items: center;

          .tech {
            margin: 0 .75rem 0 0;

            &.no-icon {
              margin: 0 .75rem 5px 0;
            }
          }

        }
      }
    }

    .project__txt {
      display: flex;
      flex-direction: column;
      margin: 0 10rem 0 0;

      @media (max-width: 1080px) {
        order: 2;
        margin: 10vh 0 0 0;
      }

      .project__sub-heading {
        margin: 0 0 2rem 0;
        grid-column: 2;
        font-size: 2rem;

        @media (max-width: 1080px) {
          font-size: 2.25em;
          line-height: 1.1em;
        }
      }

      .project__description {
        margin: 0 0 3rem 0;
        grid-column: 2;

      }

      .project__btns {
        .project__launch-btn {
          ${({ theme }) => theme.button};
          margin: 0 2rem 0 0;
        }

        .project__github-link {
          color: var(--black-light);
        }
      }
    }
`;

const ProjectInfo = ({ project }) => {
  return (
    <StyledProjectInfoContaiener>
      <div className="project__txt">
        <h2 className="project__sub-heading">{project.shortDescription}</h2>
        <p className="project__description">{project.description}</p>
        <div className="project__btns">
          <a className="project__launch-btn btn" target="__blank" rel="noopener" style={{ color: project.color, border: `1px ${project.color} solid` }} href={project.url}>Launch project</a>
          {project.github && (
            <a href={project.github} target="__blank" rel="noopener" className="project__github-link btn no-border">View on GitHub</a>
          )}
        </div>
      </div>
      <div className="project__mini-info">
        <div className="project__info-item">
          <h3 style={{ color: project.color }}>Completed</h3>
          <span>{project.completed}</span>
        </div>
        <div className="project__info-item">
          <h3 style={{ color: project.color }}>My role</h3>
          <ul>
            {project.role.map(r => <li>{r}</li>)}
          </ul>
        </div>
        <div className="project__info-item">
          <h3 style={{ color: project.color }}>Made with</h3>
          <div className="project__tech-list">
            <TechList items={project.tech} />
          </div>
        </div>
      </div>
    </StyledProjectInfoContaiener>
  )
}

export default ProjectInfo;
import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout';
import Image from "../components/image";
import styled from "styled-components";
import ProjectImages from "../components/project-images";
import TechList from "../components/tech-list";
// import TechList from "../components/tech-list";
// import { useWindowSize } from "../hooks/useWindowSize";
// import { projectPageAnimateIn, animateHeaderColor, projectHeroScroll } from "../animations/animations";
// import ProjectImages from "../components/project-images";
// import { Waypoint } from 'react-waypoint';
// import Footer from "../components/footer";
// import Head from '../components/head';

const StyledHeroContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 2fr 1fr;
    overflow: hidden;
    background: ${props => props.color};

    @media (max-width: 375px) {
      height: 80vh;
      grid-template-rows: 60vh 1fr;
    }

    .project__logo {
      overflow: visible !important;
      grid-row: 1;
      position: relative;

      img {
        /* position: fixed; */
        max-height: 20vh;
        max-width: 50vw;
        margin-top: 12%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        @media (max-width: 768px) {
          position: relative;
          margin-top: 50%;
          max-width: none;
          width: calc(100vw - 50px);
        }
      }
    }

    .project__mainimg {
      margin: 0 auto;
      height: 55vh;
      width: 80vw;
      grid-row: 2;
      overflow: visible !important;

      img {
        width: 100%;
      }

      @media (max-width: 768px) {
        height: auto;
        width: auto;
        
        
        img {
          // height: 100%;
          width: 100%;
        }
      }

      &.phone {
        display: flex;
        justify-content: center;
        position: relative;
        height: 55vh;
        width: 50vw;

        .gatsby-image-wrapper {
          overflow: visible !important;
        }

        img {
          width: 100%;
        }

        @media (max-width: 768px) {
          height: 35vh;
          width: auto;
          margin: 0 25px;

          img {
            // height: 100%;
            width: 100%;
          }
        }

        .gatsby-image-wrapper:nth-child(1) {
          margin-top: 8%;
        }

        .gatsby-image-wrapper:nth-child(2) {
          margin-left: -8%;
          z-index: 3;
        }

        .gatsby-image-wrapper:nth-child(3) {
          margin-top: 8%;
          margin-left: -8%;
        }
      }
    }
`;

const StyledProjectInfoContaiener = styled.div`
      max-width: 1100px;
    margin: 0 auto;
    padding: 5rem 0;
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column;
      margin: 0 25px;
      padding: 50px 0;
    }

    .project__mini-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: .5rem;
      grid-column-gap: 3.5rem;
      // width: 60%;
      flex-shrink: 0;

      .project__info-item {
        &:last-child {
          grid-column: span 2;
        }


        h3 {
          margin: 0 0 .75rem 0;
        }

        ul {
          margin: 0;
          padding: 0;

          li {
            list-style-type: none;
            margin: 0 0 .3525rem 0;
          }
        }

        .project__tech-list {
          display: flex;
          align-items: center;

          .tech {
            margin: 0 .75rem 0 0;

            &.no-icon {
              margin: 0 .75rem 5px 0;
              font-size: .9em;
              font-family: $medium;
            }
          }

        }
      }
    }

    .project__txt {
      display: flex;
      flex-direction: column;
      margin: 0 0 0 10rem;

      @media (max-width: 768px) {
        margin: 50px 0 0 0;
      }

      .project__sub-heading {
        margin: 0 0 2.25rem 0;
        grid-column: 2;

        @media (max-width: 768px) {
          font-size: 2.25em;
          line-height: 1.1em;
        }
      }

      .project__description {
        margin: 0 0 2.25rem 0;
        grid-column: 2;

      }

      .project__btns {

        // margin: 3.5rem 0 0 auto;
        .project__launch-btn {
          margin: 0 2rem 0 0;
        }
      }
    }
`;

const StyledProjectImagesContainer = styled.div`
 padding: 2.25rem 0;
  background: $white;

  @media (max-width: 768px) {
    margin: 0 25px;
  }

  .project__img {
    padding: 2.25rem 0;
    max-width: 1300px;
    margin: 0 auto;

    img {
      width: 100%;
    }

    @media (max-width: 768px) {
      padding: 12.5px 0;
    }
  }

  .project__fluid-img {
    margin: 2.25rem 0 0 auto;

    img {
      width: 100%;
    }
  }

  .project__phone-images {
    display: flex;
    justify-content: space-between;
    padding: 2.25rem 0;
    max-width: 1300px;
    margin: 0 auto;
    grid-gap: 2.25rem;

    &.grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 768px) {
      grid-gap: 25px;

      &.grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .project__img {
      max-width: 375px;
    }
  }

  .project__videos {
    padding: 5rem 0;
    background: $greyTransparent2;

  .project__vid {
    display: block;
    max-width: 1300px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: 50px 25px;

    .project__vid {
      width: 100%;
    }
  }

}
`;

export default function Project({ data }) {
  const [project, setProject] = useState();

  useEffect(() => {
    setProject(data.projects.edges[0].node)
  }, [data])

  if (!project) return <div></div>;

  return (
    <Layout>
      <StyledHeroContainer color={project.color}>
        <div className="project__logo">
          <Image filename={`project__${project.title}.png`} alt={project.title} />
        </div>
        {project.type === 'web' && (
          <Image filename={`project-slide__${project.title}.png`} alt={project.title} classes="project__mainimg" />
        )}
        {project.type === 'phone' && (
          <div className="project__mainimg phone">
            <Image filename={`project-slide__${project.title}-1.png`} alt={project.title} />
            <Image filename={`project-slide__${project.title}-2.png`} alt={project.title} />
            <Image filename={`project-slide__${project.title}-3.png`} alt={project.title} />
          </div>
        )}
      </StyledHeroContainer>
      <StyledProjectInfoContaiener>
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
        <div className="project__txt">
          <h2 className="project__sub-heading">{project.shortDescription}</h2>
          <p className="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="project__btns">
            <a className="project__launch-btn btn" target="__blank" rel="noopener" style={{ color: project.color, border: `1px ${project.color} solid` }} href={project.url}>Launch project</a>
            {project.github && (
              <a href={project.github} target="__blank" rel="noopener" className="project__github-link btn no-border">View on GitHub</a>
            )}
          </div>
        </div>
      </StyledProjectInfoContaiener>
      <StyledProjectImagesContainer>
        <ProjectImages title={project.title} />
      </StyledProjectImagesContainer>
    </Layout>
  )
}
export const query = graphql`
  query($id: String!) {
    projects: allProjectsJson(filter: {id: {eq: $id}}) {
      edges {
        node {
          id
          url
          title
          type
          shortDescription
          completed
          color
          role
          tech
          github
        }
      }
    }
  }
`
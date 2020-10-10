import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

import ProjectHero from '../components/sections/project-hero';
import ProjectImages from "../components/sections/project-images";
import ProjectInfo from "../components/sections/project-info";
import ProjectVideo from "../components/sections/project-video";
import ProjectPrevNext from "../components/sections/project-prevnext";
// import TechList from "../components/tech-list";
// import { useWindowSize } from "../hooks/useWindowSize";
// import { projectPageAnimateIn, animateHeaderColor, projectHeroScroll } from "../animations/animations";
// import ProjectImages from "../components/project-images";
// import { Waypoint } from 'react-waypoint';
// import Footer from "../components/footer";
// import Head from '../components/head';

export default function Project({ data, location }) {
  const [project, setProject] = useState(data.projects.edges[0].node);

  if (!project) return <div></div>;

  return (
    <>
      <ProjectHero color={project.color} title={project.title} type={project.type} />
      <ProjectInfo project={project} />
      {project.video && <ProjectVideo title={project.title} color={project.color} />}
      <ProjectImages title={project.title} />
      <ProjectPrevNext current={project.id} />
    </>
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
          description
          video
        }
      }
    }
  }
`
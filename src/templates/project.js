import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import ProjectHero from '../components/sections/project-hero';
import ProjectImages from "../components/sections/project-images";
import ProjectInfo from "../components/sections/project-info";
import ProjectVideo from "../components/sections/project-video";
import ProjectPrevNext from "../components/sections/project-prevnext";

export default function Project({ data }) {
  const project = data.projects.edges[0].node;

  if (!project) return <div></div>;

  return (
    <>
      <Helmet title={project.title} />
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
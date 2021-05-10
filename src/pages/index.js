import React, { useEffect, useState } from 'react';

import Hero from '../components/sections/hero';
import Projects from '../components/sections/projects';
import ScrollIndicator from '../components/scroll-indicator';

const Index = ({ data }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data.projects.edges);
  }, [data])

  return (
    <>
      <Hero />
      <Projects projects={projects.map(project => project.node)} />
      <ScrollIndicator />
    </>
  )
}

export const query = graphql`
  query ProjectsQuery {
    projects: allProjectsJson {
      edges {
        node {
          id
          title
          type
          shortDescription
          color
        }
      }
    }
  }
`;

export default Index;
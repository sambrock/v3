import React, { useEffect, useState } from 'react';

import Head from '../components/head';
import Hero from '../components/sections/hero';
import Projects from '../components/sections/projects';

const Index = ({ data, location }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data.projects.edges);
  }, [data])

  return (
    <>
      <Head />
      <Hero />
      <Projects projects={projects.map(project => project.node)} />
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
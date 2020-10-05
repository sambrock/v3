import React, { useEffect, useState } from "react"
import Layout from "../components/layout";
import styled from 'styled-components';
import Hero from "../components/sections/hero";
import Projects from "../components/projects";

const StyledMainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 0 0 0;

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0 2rem;
  }
`;

const Index = ({ data }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data.projects.edges);
  }, [data])

  return (
    <Layout>
      <StyledMainContainer>
        <Hero />
        <Projects projects={projects.map(project => project.node)} />
      </StyledMainContainer>
    </Layout>
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
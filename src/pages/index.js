import React, { useEffect, useState } from "react"
import Layout from "../components/layout";
import Hero from "../components/sections/hero";
import Projects from "../components/projects";

const Index = ({ data }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data.projects.edges);
  }, [data])

  return (
    <Layout>
      <Hero />
      <Projects projects={projects.map(project => project.node)} />
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
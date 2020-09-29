import React from "react"
import Layout from "../components/layout";
import styled from 'styled-components';
import Hero from "../components/sections/hero";

const StyledMainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 0 0 11rem;
`;


const Index = () => {
  return (
    <Layout>
      <StyledMainContainer>
        <Hero />
        <Projects />
      </StyledMainContainer>
    </Layout>
  )
}

export default Index;
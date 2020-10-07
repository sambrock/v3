import React from 'react'
import styled from 'styled-components';

import Image from '../image'

const StyledProjectImagesContainer = styled.section`

  div:nth-child(1) {
    padding-top: 0;
  }

  .project__img {
    width: 100%;
    margin: 0 auto 5rem;

    @media (max-width: 768px) {
      margin: 0 auto 3rem;
    }

    img {
      width: 100%;
    }
  }

  .project__phone-images {
    display: flex;
    justify-content: space-between;
    padding-top: 5vh;
    padding-bottom: 5vh;
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
      padding-top: 0;
      max-width: 375px;
    }
  }
`;

export default function ProjectImages({ title }) {
  if (title === "Filmlist") return (
    <StyledProjectImagesContainer>
      <Image filename="project__filmlist-home.png" alt={title} classes="project__img" />
      <Image filename="project__filmlist-seen.png" alt={title} classes="project__img" />
      <Image filename="project__filmlist-details.png" alt={title} classes="project__img" />
      <Image filename="project__filmlist-favorite.png" alt={title} classes="project__img" />
      <div className="project__phone-images">
        <Image filename="project__filmlist-details-mobile-1.png" alt={title} classes="project__img" />
        <Image filename="project__filmlist-details-mobile-2.png" alt={title} classes="project__img" />
      </div>
    </StyledProjectImagesContainer>
  )

  if (title === "Pace") return (
    <StyledProjectImagesContainer>
      <div className="project__phone-images grid">
        <Image filename="project__pace-app-1.jpg" alt={title} classes="project__img" />
        <Image filename="project__pace-app-2.jpg" alt={title} classes="project__img" />
        <Image filename="project__pace-app-4.jpg" alt={title} classes="project__img" />
        <Image filename="project__pace-app-5.jpg" alt={title} classes="project__img" />
        <Image filename="project__pace-app-6.jpg" alt={title} classes="project__img" />
        <Image filename="project__pace-app-8.jpg" alt={title} classes="project__img" />
        <Image filename="project__pace-app-9.jpg" alt={title} classes="project__img" />
        <Image filename="project__pace-app-10.jpg" alt={title} classes="project__img" />
        <Image filename="project__pace-app-11.jpg" alt={title} classes="project__img" />
        <Image filename="project__pace-app-12.jpg" alt={title} classes="project__img" />
        <Image filename="project__pace-app-13.jpg" alt={title} classes="project__img" />
        <Image filename="project__pace-app-14.jpg" alt={title} classes="project__img" />
        <Image filename="project__pace-app-15.jpg" alt={title} classes="project__img" />
        <Image filename="project__pace-app-16.jpg" alt={title} classes="project__img" />
        <Image filename="project__pace-app-17.jpg" alt={title} classes="project__img" />
        <Image filename="project__pace-app-18.jpg" alt={title} classes="project__img" />
        <Image filename="project__pace-app-19.jpg" alt={title} classes="project__img" />
      </div>
      <Image filename="project__pace-colours.png" alt={title} classes="project__img" />
      <Image filename="project__pace-typography.png" alt={title} classes="project__img" />
      <Image filename="project__pace-wireframes.jpg" alt={title} classes="project__img" />
    </StyledProjectImagesContainer>
  )

  if (title === "INFLOWSEM") return (
    <StyledProjectImagesContainer>
      <Image filename="project__inflowsem-home.png" alt={title} classes="project__img" />
      <Image filename="project__inflowsem-pdf.png" alt={title} classes="project__img" />
      <Image filename="project__inflowsem-contact.png" alt={title} classes="project__img" />
    </StyledProjectImagesContainer>
  )

  if (title === "TRYP") return (
    <StyledProjectImagesContainer>
      <Image filename="project__tryp-home.jpg" alt={title} classes="project__img" />
      <Image filename="project__tryp-details.jpg" alt={title} classes="project__img" />
      <div className="project__phone-images">
        <Image filename="project__tryp-home-m.jpg" alt={title} classes="project__img" />
        <Image filename="project__tryp-details-m.jpg" alt={title} classes="project__img" />
      </div>
    </StyledProjectImagesContainer>
  )

  return <div className="project__images"></div>;
}

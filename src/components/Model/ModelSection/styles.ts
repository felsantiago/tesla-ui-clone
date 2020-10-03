import styled from "styled-components";

interface PropImages {
  desktop: string;
  mobile: string;
}

interface PropType {
  images: PropImages;
}

export const Container = styled.div.attrs((props: PropType) => ({
  background: props.images,
}))<PropType>`
  background: #000 url(${(props) => props.images.desktop}) no-repeat;

  height: 100vh;
  scroll-snap-align: start;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 600px) {
    background: #000 url(${(props) => props.images.mobile}) no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

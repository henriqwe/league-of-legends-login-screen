import styled from 'styled-components'

export const Wallpaper = styled.div<{ imageurl: string }>`
  width: 100%;
  background-image: url(${({ imageurl }) => imageurl});
  background-size: cover;
  background-position: center;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`

import styled from 'styled-components'

export const Wallpaper = styled.div<{ imageURL: string }>`
  width: 100%;
  background-image: url(${({ imageURL }) => imageURL});
  background-size: cover;
  background-position: center;
  flex: 1;
`

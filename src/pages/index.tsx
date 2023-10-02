import { LoginSection } from '@/components/LoginSection'
import { Wallpaper } from '@/components/Wallpaper'
import styled from 'styled-components'

export function Login() {
  return (
    <Main>
      <LoginSection />
      <Wallpaper />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  padding: 5rem 10rem;
  height: 100vh;
  width: 100vw;
  transition: all ease-in-out 100ms;

  @media (max-width: 768px) {
    padding: 0;
  }
`

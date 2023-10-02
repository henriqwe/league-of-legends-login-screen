import { theme } from '@/styles'
import styled from 'styled-components'

export const Button = styled.button<{ bgcolor: keyof typeof theme.colors }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  border-radius: 5px;
  cursor: pointer;
  border: none;

  background-color: ${({ theme, bgcolor }) => theme.colors[bgcolor]};
`

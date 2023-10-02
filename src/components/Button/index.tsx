import { ButtonHTMLAttributes } from 'react'
import * as S from './style'
import { theme } from '@/styles'

interface Props
  extends React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  bgcolor: keyof typeof theme.colors
}

export function Button({ children, ...props }: Props) {
  return <S.Button {...props}> {children}</S.Button>
}

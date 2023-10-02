import { InputHTMLAttributes, useRef, useState } from 'react'
import * as S from './style'

interface Props
  extends React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
}

export function Input({ label, ...props }: Props) {
  const [active, setActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  function handleActive() {
    setActive(true)
    inputRef.current?.focus()
  }

  function handleDeactive() {
    if (inputRef.current?.value === '') {
      setActive(false)
    }
  }

  return (
    <S.Container onClick={handleActive}>
      <S.Label active={active}>{label}</S.Label>
      <S.Input {...props} ref={inputRef} onBlur={handleDeactive} />
    </S.Container>
  )
}

import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  margin-bottom: 20px;
  width: 100%;
`
export const Label = styled.label<{ active: boolean }>`
  position: absolute;
  font-size: ${({ active }) => (active ? '0.7em' : '0.8em')};
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mediumGrey};
  margin: ${({ active }) => (active ? '8px 10px' : '20px')};
  cursor: text;
  transition: all 200ms ease;
`

export const Input = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  outline: none;
  font-size: 0.9em;
  padding: 25px 10px 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.deepGrey};

  &:focus {
    background-color: ${({ theme }) => theme.colors.whitesmoke};
    border: 2px solid ${({ theme }) => theme.colors.grey};
  }
`

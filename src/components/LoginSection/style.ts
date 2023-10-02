import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex: 1;
  background: white;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  min-width: 200px;
  min-height: 100%;
  padding: clamp(35px, 8%, 70px);

  @media (max-width: 768px) {
    max-width: 100%;
    min-width: 100%;
  }
`
export const Logo = styled.img`
  width: 130px;
  margin-bottom: 80px;
`
export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.deepGrey};
  font-size: 1.5em;
  margin-bottom: 30px;
  font-weight: 700;
`

export const Anchor = styled.a`
  display: flex;
  font-size: 0.8em;
  text-decoration: none;
  justify-content: center;
  color: ${({ theme }) => theme.colors.mediumGrey};
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
`

export const ButtonsWapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  margin-top: 20px;

  img {
    width: 20px;
  }
`

export const LabelCheckBox = styled.label`
  width: 100%;
  margin: 15px 0 50px;
  font-size: 0.9em;
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 700;
`

export const CheckBox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  margin-right: 8px;
  border-radius: 3px;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.colors.red};
  }

  &:checked::after {
    content: '';
    display: block;
    width: 5px;
    height: 10px;
    border: 3px solid ${({ theme }) => theme.colors.white};
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    margin: 2px 6px;
  }
`

export const LoginButton = styled.button`
  width: 60px;
  height: 60px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-bottom: 60px;

  svg {
    fill: white;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: white;
    border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  }

  &:disabled svg {
    fill: ${({ theme }) => theme.colors.grey};
  }
`

export const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
`

export const AnchorWapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`

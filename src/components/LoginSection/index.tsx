import { Input } from '@/components/Input'
import * as S from './style'
import { Button } from '@/components/Button'

export function LoginSection() {
  return (
    <S.Container>
      <S.Logo src="images/logo.png" />

      <S.H1>Fazer login</S.H1>
      <S.Form action="">
        <Input type="text" name="username" label="NOME DE USUÁRIO" />
        <Input type="password" name="password" label="SENHA" />

        <S.ButtonsWapper>
          <Button type="button" bgcolor="blue">
            <img src="./images/icons/facebook-icon.png" alt="facebok logo" />
          </Button>

          <Button type="button" bgcolor="lightGrey">
            <img src="./images/icons/google-icon.png" alt="google logo" />
          </Button>

          <Button type="button" bgcolor="black">
            <img src="./images/icons/apple-icon.png" alt="apple logo" />
          </Button>
          <Button type="button" bgcolor="green">
            <img src="./images/icons/xbox-icon.png" alt="xbox logo" />
          </Button>
        </S.ButtonsWapper>
        <S.LabelCheckBox>
          <S.CheckBox type="checkbox" name="manter-login" />
          Manter login
        </S.LabelCheckBox>
        <S.LoginButton type="button" disabled>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
          </svg>
        </S.LoginButton>
      </S.Form>
      <S.AnchorWapper>
        <S.Anchor>Não consegue inciar sessão?</S.Anchor>
        <S.Anchor>Criar conta</S.Anchor>
      </S.AnchorWapper>
    </S.Container>
  )
}

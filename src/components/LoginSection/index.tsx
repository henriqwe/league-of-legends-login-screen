import { Input } from '@/components/Input'
import * as S from './style'

export function LoginSection() {
  return (
    <S.Container>
      <div>logo</div>
      <form action="">
        <h2>Fazer login</h2>
        <Input type="text" name="username" label="NOME DE USUÁRIO" />
        <Input type="password" name="password" label="SENHA" />

        <div>
          <div>facebook</div>
          <div>google</div>
          <div>apple</div>
        </div>
        <div>
          <input type="checkbox" name="manter-login" id="manter-login" />
          <label htmlFor="manter-login">Manter login</label>
        </div>
        <button>Botão login</button>
      </form>

      <div>
        <p>NÃO CONSEGUE INICIAR SESSÃO?</p>
        <p>CRIA CONTA</p>
      </div>
    </S.Container>
  )
}

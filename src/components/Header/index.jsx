import { Container, Profile } from './styles'

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/RaINNxx.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Cauã Henrique</strong>
        </div>
      </Profile>
    </Container>
  )
}
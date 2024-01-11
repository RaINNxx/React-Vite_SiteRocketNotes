import { Container, Links } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'

export function Details() {
  return (
    <Container>
      <Header />
      <Section title="Links uteis">
         <Links>
          <li>
          <li> <a href="#">Link 1</a> </li>

          </li>
         
         </Links>
      </Section>
      <Button title="Voltar" />
    </Container>
  )
}
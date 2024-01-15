import { Container, Links,Content } from './styles'

import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
      <ButtonText title="excluir nota"/>
      <h1>
        Introdução ao react
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing
         elit. Quo amet qui fuga omnis dolores expedita
          recusandae ab animi tempore iste molestias vero
           rem minima, accusamus aperiam officia? Laborum,
            aliquid voluptas.
      </p>

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">https://rocketseat.com.br</a>
          </li>
          <li>
            <a href="#">https://rocketseat.com.br</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="node" />
      </Section>

      <Button title="Voltar" />
      </Content>
      </main>
    </Container>
  )
}
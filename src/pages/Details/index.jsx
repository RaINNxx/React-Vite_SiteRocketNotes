import { Container } from './styles'

import { Button } from '../../components/button'

export function Details(){
    
    return (
        <Container>
         <h1>hello word</h1>

         <Button title="Entrar" loading/>
         <Button title="sair"/>
         <Button title="voltar"/>
        </Container>
    )
}
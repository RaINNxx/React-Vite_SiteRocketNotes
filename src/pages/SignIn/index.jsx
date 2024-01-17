import { Container } from './styles'
import {  FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/button'

export function SigIn(){
    return(
        <Container>
            <form >
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Faça seu login</h2>

                <Input
                   placeholder="E-mail"
                   type="text"
                   icon={ FiMail }
                />

                
                <Input
                   placeholder="Senha"
                   type="password"
                   icon={ FiLock }
                />

                <Input
                   placeholder="Senha"
                   type="password"
                   icon={ FiLock }
                />

                <Button>
                    Entrar
                </Button>
                
            </form>
        </Container>  
    )
}
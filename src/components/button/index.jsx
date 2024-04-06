import { Container } from './styles'

export function Button({title,onClick,loading = false, ...rest}){
    return (
    <Container
     type="button" onClick={onClick}
     disabled={loading}
     >
        {loading ? 'carregando..' : title} 
    </Container>
    ) 
}
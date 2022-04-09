import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Olá</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}

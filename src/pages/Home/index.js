import { toast } from 'react-toastify';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  toast.success('Home', {
    toastId: 1,
    theme: 'dark',
  });
  return (
    <Container>
      <Title>Home</Title>
      <Paragrafo>Lorem ipsum dolor sit amet</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}

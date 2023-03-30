import { Container } from '../components/Container/Container';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

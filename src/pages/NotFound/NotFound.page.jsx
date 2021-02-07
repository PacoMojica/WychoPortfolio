import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import { Header, Icon, Container } from 'semantic-ui-react';
import { useEffect } from 'react';
import { useMenu } from '../../providers/Menu';

import './NotFound.css';

function NotFound() {
  const { setActiveItem } = useMenu();

  useEffect(() => {
    setActiveItem('');

    return () => setActiveItem('');
  });

  return (
    <div className='Main-not-found'>
      <Menu />
      <Container textAlign='center' className='Container'>
        <Header as='h2' icon textAlign='center' inverted>
          <Icon name='warning sign' />
          <Header.Content>Page Not Found</Header.Content>
        </Header>
      </Container>
      <Footer />
    </div>
  );
}

export default NotFound;
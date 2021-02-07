import Menu from '../../components/Menu';
import { useEffect } from 'react';
import { useMenu } from '../../providers/Menu';
import { Container, Segment, Header, Divider, Icon } from 'semantic-ui-react';

import './Contact.css';

function Contact() {
  const { setActiveItem } = useMenu();

  useEffect(() => {
    setActiveItem('contact');

    return () => setActiveItem('');
  });

  return (
    <div className='Main-contact'>
      <Menu />
      <Container text>
        <Divider inverted />
        <Segment raised inverted >
          <p>
            Egresado de la Lic. En Artes Cinematográficas y Audiovisuales de la Universidad Autónoma de Aguascalientes.
          </p>
          <p>
            Durante el 2020 impartió un curso llamado “Aspectos Técnicos en la Dirección de Fotografía” en el espacio experimental ‘’Artefacto’’ con una duración de 52 horas.
          </p>
          <p>
            Posterior a ello trabajó como maestro de la materia ‘’Laboratorio de Fotografía’’ bajo la materia de Criminalística en el ‘’Tecnológico Universitario Aguascalientes’’
          </p>
          <p>
            Actualmente reside en la ciudad de Aguascalientes y se encuentra en proceso de certificación de corrección de color por parte de DaVinci Resolve y realizando proyectos independientes como freelance.
          </p>
        </Segment>
        <Divider inverted />
        <Header as='h2' icon textAlign='center' inverted>
          <Header.Content>contact@wychomojica.com</Header.Content>
        </Header>
        <Divider inverted />
        <Header icon textAlign='center' inverted>
          <Header.Content>
            <div className='Links'>
              <a target="_blank" rel="noreferrer" href='https://www.instagram.com/lofi_hooman/'>
                <Icon name='instagram' size='big' />
              </a>
              <a href="mailto:contact@wychomojica.com">
                <Icon name='mail outline' size='big' />
              </a>
            </div>
          </Header.Content>
        </Header>
        <Divider inverted />
      </Container>
    </div>
  );
}

export default Contact;
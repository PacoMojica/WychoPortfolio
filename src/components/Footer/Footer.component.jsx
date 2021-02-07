import { Icon } from 'semantic-ui-react';

import './Footer.css';

function Footer() {
  return (
    <div className='Footer'>
      <a target="_blank" rel="noreferrer" href='https://www.instagram.com/lofi_hooman/'>
        <Icon name='instagram' size='big' />
      </a>
      <a href="mailto:contact@wychomojica.com">
        <Icon name='mail outline' size='big' />
      </a>
    </div>
  );
}

export default Footer;
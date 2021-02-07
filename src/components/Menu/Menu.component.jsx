import './Menu.css';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';
import { useMenu } from '../../providers/Menu';


const menuRoutes = [
  { name: 'work', label: 'work', to: '/work' },
  { name: 'photo', label: 'photo', to: '/photo' },
  { name: 'contact', label: 'contact', to: '/contact' },
]

function MyMenu() {
  const { activeItem } = useMenu();

  return (
    <Segment className='Segment' inverted >
      <Menu pointing secondary stackable inverted size='large' className='Menu'>
        <Menu.Item
          name='home'
          header
        >
          <Link to='/'>
            <h2>Wycho Mojica</h2>
          </Link>
        </Menu.Item>

        <Menu.Menu position='right'>
          {menuRoutes.map(({ name, label, to }, i) => (
            <Menu.Item
              key={`menu-item-${i}`}
              name={name}
              active={activeItem === name}
            >
              <Link to={to}>
                {label}
              </Link>
            </Menu.Item>
          ))}
        </Menu.Menu>
      </Menu>
    </ Segment>
  );
}

export default MyMenu;
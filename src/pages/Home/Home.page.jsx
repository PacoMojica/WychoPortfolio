import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import { useEffect } from 'react';
import { useMenu } from '../../providers/Menu';

import './Home.css';

function Home() {
  const { setActiveItem } = useMenu();

  useEffect(() => {
    setActiveItem('home');

    return () => setActiveItem('');
  });

  return (
    <div className='Main-home'>
      <Menu className='.Menu' />
      <Footer />
    </div>
  );
}

export default Home;
import Menu from '../../components/Menu';
import { useEffect } from 'react';
import { useMenu } from '../../providers/Menu';

function Work() {
  const { setActiveItem } = useMenu();

  useEffect(() => {
    setActiveItem('work');

    return () => setActiveItem('');
  });

  return (
    <div style={{ paddingBottom: '0.66rem' }}>
      <Menu />
      <div
        style={{ padding: '46.25% 0 0 0', position: 'relative' }}
      >
        <iframe
          title='Reel 2020'
          src="https://player.vimeo.com/video/436230024?color=ffffff"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
      <div style={{ margin: '0.66rem 0 4rem 0', padding: "34.71% 0 0 0", position: 'relative' }}>
        <iframe
          title='Reel 2019'
          src="https://player.vimeo.com/video/436233287?color=ffffff"
          style={{ margin: '0.66rem 0', position: 'absolute', top: 0, left: 0, width: "100%", height: '100%' }}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
}

export default Work;
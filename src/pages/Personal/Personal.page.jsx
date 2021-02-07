import Menu from '../../components/Menu';
import { useEffect, useRef } from 'react';
import { useMenu } from '../../providers/Menu';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import { CustomGallery, Item, DefaultLayout } from 'react-photoswipe-gallery';

import './Personal.css';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

import images from './images.json';

function Personal() {
  const { setActiveItem } = useMenu();
  const layoutRef = useRef();

  useEffect(() => {
    setActiveItem('photo');

    return () => setActiveItem('');
  });

  return (
    <div>
      <Menu />
      <div className='Gallery'>
        <CustomGallery layoutRef={layoutRef} ui={PhotoswipeUIDefault}>
          {images.map(({ src, width, height }, i) => (
            <Item
              key={`galley-item-${i}`}
              original={`/imgs/${src}`}
              thumbnail={`/thumb/${src}`}
              width={width}
              height={height}
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  key={`img-personl-${i}`}
                  src={`/thumb/${src}`}
                  alt={`Wycho Mojica | Portfolio ${i}`}
                />
              )}
            </Item>
          ))}
        </CustomGallery>
      </div>
      <DefaultLayout
        shareButton={false}
        ref={layoutRef}
      />
    </div>
  );
}

export default Personal;
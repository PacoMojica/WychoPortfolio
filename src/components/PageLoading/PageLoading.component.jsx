import { Dimmer, Loader } from 'semantic-ui-react';
import './PageLoading.css';

function PageLoading() {

  return (
    <Dimmer active className='Dimmer'>
      <Loader>Loading ...</Loader>
    </Dimmer>
  );
}

export default PageLoading;
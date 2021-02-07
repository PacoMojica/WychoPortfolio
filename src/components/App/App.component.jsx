import Switch from '../RouterSwitch';
import ContextComposer from '../ContextComposer';
import MenuProvider from '../../providers/Menu';

function App() {
  const providers = [
    MenuProvider,
  ];

  return (
    <ContextComposer providers={providers}>
      <Switch />
    </ContextComposer>
  );
}

export default App;

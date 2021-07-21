import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/App.scss';
import Container from './components/Container';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container />
      </div>
    </Provider>
  );
}

export default App;

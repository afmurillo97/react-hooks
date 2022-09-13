import Header from './components/Header';
import Characters from './components/Characters';
import '../src/App.css';
import { DarkModeContext } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Characters />
    </div>
  );
}

export default App;

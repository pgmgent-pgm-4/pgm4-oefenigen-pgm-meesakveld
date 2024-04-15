import logo from './logo.svg';
import './App.css';
import AgeCheck from './components/AgeCheck';

function App() {
  let age = 21;
  return (
    <div className="App">
      <AgeCheck age={ age }/>
      <AgeCheck age="2"/>
      <AgeCheck age="16"/>
    </div>
  );
}

export default App;

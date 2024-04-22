import './App.css';
import Colors from './components/Colors';


function App() {

  const colorsArray = [
    'FF0000',
    '00FF00',
    '0000FF',
    'FFFF00',
    'FF00FF',
    '00FFFF'
  ];

  return (
    <div className="App">
        <Colors colorsArr={ colorsArray }/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

function App() {
  const todos = [
    {
      id: 1,
      title: 'Todo 1'
    },
    {
      id: 2,
      title: 'Todo 2'
    },
    {
      id: 3,
      title: 'Todo 3'
    }
  ]

  return (
    <div className="App">
      <Todos TodosArr={todos}/>
    </div>
  );
}

export default App;

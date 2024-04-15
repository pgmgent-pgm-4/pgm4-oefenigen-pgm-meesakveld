import './App.css';

function App() {
  const showMessage = true
  return (
    <div className="App">
      { showMessage && <p>Message</p> }
    </div>
  );
}

export default App;

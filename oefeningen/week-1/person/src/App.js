import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person firstname="John" familyname="Doe" pictureUrl="https://www.shutterstock.com/image-illustration/very-big-size-man-without-260nw-126920099.jpg" age={ 30 } length={ 1.80 } weigth={ 80 } />
    </div>
  );
}

export default App;

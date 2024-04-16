import logo from './logo.svg';
import './App.css';
import Student from './component/Student';

function App() {
  const student = {
    firstName: "Jan",
    lastName: "Janssens",
    sexCode: 1,
    dateOfBirth: "1/1/1990",
    courses: [
      { name: "Programming", teachers: ["John Doe", "Jane Doe"] },
      { name: "Design", teachers: ["Jane Doe", "Jack Doe"] },
      { name: "Math", teachers: ["Jack Doe", "John Doe"] }
    ]
  }


  return (
    <div className="App">
      <Student {...student} />
    </div>
  );
}

export default App;

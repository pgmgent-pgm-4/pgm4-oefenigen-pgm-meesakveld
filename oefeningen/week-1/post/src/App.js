import './App.css';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Post title="My first post" synopsis="This is the synopsis of my first post" story="This is the story of my first post" authorName="John Doe" authorPictureUrl="https://www.shutterstock.com/image-illustration/very-big-size-man-without-260nw-126920099.jpg" publishDate="2021-09-01" />
    </div>
  );
}

export default App;

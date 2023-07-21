import './App.css';
import img from './logo.svg'

function App() {
  console.log("Hello from main page");
  return (
    <div className='parent'>
      This is Fatima Alaa from the main page
      <center>
        <img src={img} className='imgP' alt='img'></img>
      </center>
    </div>
  );
}

export default App;
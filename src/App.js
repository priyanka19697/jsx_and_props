import logo from './logo.svg';
import './App.css';
import Greeting from './Greetings/Greetings';
import Counter from './Counter/Counter'
import ListView  from './ListView/ListView';
import SignupForm from './SignupForm/SignupForm';

function App() {
  return (
    <div className="App">
      {/* <Greeting name="Anya"/> */}
      {/* <Counter value= {10} /> */}
      {/* <ListView numbers = {[1,2,3,4,5]}></ListView> */}
      <SignupForm/>
    </div>
  );
}



export default App;

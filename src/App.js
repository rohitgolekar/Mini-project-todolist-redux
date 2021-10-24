import './App.css';
import Login from './redux/action/Login';
import {useSelector} from 'react-redux';
import {selectUser} from "./redux/reducer/loginreducer";
import Header from './components/Header';

function App() {

  const user = useSelector(selectUser);
  return (
    <div className="App">
      {
        user ? <Header/> : <Login />
      }
    </div>
  );
}

export default App;

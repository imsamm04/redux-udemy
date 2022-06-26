import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'  
import { decrement, increment } from './redux/slices/counterSlice';

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Viet dep trai vo dịch nhat vu tru</div>
        <div className='btn-action'>
            <button onClick={()=> dispatch(increment())}>Increase</button>
            <button onClick={()=> dispatch(decrement())}>Decrease</button>
          </div>
          <div>Count : {count}</div>
      </header>
    </div>
  );
}

export default App;

import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, toggle} from "./Reducers/CountSlice.ts";

function App() {

    const count = useSelector((state) => state.counter.count);
    const show = useSelector((state) => state.counter.show);
    const dispatch = useDispatch();
  return (
      <>
          {show && count}
          <br/>
          <button onClick={() => dispatch(increment())}>INCREMENT</button>
          <button onClick={() => dispatch(decrement())}>DECREMENT</button>
          <button onClick={() => dispatch(toggle())}>TOGGLE</button>

      </>
  )
}

export default App

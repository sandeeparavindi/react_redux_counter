import './App.css'
import {useDispatch, useSelector} from "react-redux";

function App() {

  const count = useSelector((state) => state)
  const dispatch = useDispatch();
  return (
      <>
        {count}
        <br/>
        <button onClick={() => dispatch({type: "INCREMENT", payload: 1})}>INCREMENT</button>
        <button onClick={() => dispatch({type: "DECREMENT", payload: 1})}>DECREMENT</button>
        <button>Toggle</button>
      </>
  )
}

export default App

import { useDispatch, useSelector } from "react-redux";
import { increaseCount, decreaseCount } from "./redux/actions/actionCreator";

const App = () => {
  const count = useSelector(store => store?.counter?.count);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCount());
  }

  const handleDecrease = () => {
    dispatch(decreaseCount());
  }

  return (
    <div>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>+1</button>
      <h1>{count}</h1>
    </div>
  );
};

export default App;

// ===========================================================================================================================================================================================================

// import { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   const handleIncrease = () => {
//     setCount(count + 1);
//   }

//   const handleDecrease = () => {
//     setCount(count - 1);
//   }

//   return (
//     <div>
//       <button onClick={handleIncrease}>+1</button>
//       <button onClick={handleDecrease}>+1</button>
//       <h1>{count}</h1>
//     </div>
//   );
// };

// export default App;

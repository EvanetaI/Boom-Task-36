import "./App.css";
import { useMemo, useState } from "react";

function App() {
  let [value, setValue] = useState(false)
  const pattern = new RegExp(/^\d+$/);
  
  const set =(e)=>{
    setValue(e.target.value)
  }

  const memoizedValue = useMemo(() => {
    if (pattern.test(value)) {
      return true
    } else {
      return false
    }
  }, [value]);

  return (
    <div className="App">
     <div className="control has-icons-right">
        <input onChange={set}
          className="input is-large"
          type="text"
          placeholder="Enter number..."

        />
        <span className="icon is-small is-right">
          <i className={memoizedValue ? "fa-check" : "fas fa-times"}/>
        </span> 
      </div>
    </div>
  );
}

export default App;

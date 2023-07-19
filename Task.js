import { render } from "solid-js/web";

import { createSignal } from "solid-js";

function Counter() {
    const [count, setCount] = createSignal(1);

    const increment = () =>{
        setCount(count() + 1) 
    }

    const double = () =>{
        return count() + 2
    }

    return(
        <>
          <button type="button" onClick={increment}>
            {count()}
          </button>

          <p>double value: {double()}</p>
        </>
    );
}

render(() => <Counter/>, document.getElementById("app"));


// function component() {
//     const [count, setCount] =createSignal(0);

//     return(
//         <>
//         <p>{count()}</p>

//         <button onClick={() => setCount(count() +1)}>Add One</button>
//         </>
//     );
// }
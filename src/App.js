import { useState } from "react";
import "./App.css";

function App() {
  // const arr = [];
  const [input, setinput] = useState([]);
  const [arr, setarr] = useState([]);
  const [sum, setsum] = useState(0);
  const [myinput, setmyinput] = useState([]);
  const [operator, setoperator] = useState(false);

  const dostuff = (num, sym) => {
    if (num !== null) {
      setoperator(true);
      setinput((e) => e.toString() + num);
      setmyinput((e) => e.toString() + num);
    } else if (operator) {
      setarr((e) => [...e, { myinput, sym }]);
      setinput((e) => e.toString() + sym);
      setoperator(false);
      setmyinput("");
    }

    // if (sym == "=") {
    //   getresult(myinput, sym);
    // }
  };

  // console.log(1, eval(input));
  // console.log(2, arr);

  const getresult = (myinput) => {
    arr.push({ myinput, myinput });
    console.log(200000, eval(input));
    var done = document.getElementsByClassName("display");
    done.item(0).style.backgroundColor = "green";
    done.item(0).innerHTML = eval(input);
  };
  console.log(sum, 2000);
  return (
    <div className="App">
      <div className="display">{input}</div>
      <div className="body">
        <div class="grid-container" style={{ display: "grid" }}>
          <div class="grid-item" onClick={() => dostuff(1)}>
            1
          </div>
          <div class="grid-item" onClick={() => dostuff(2)}>
            2
          </div>
          <div class="grid-item" onClick={() => dostuff(3)}>
            3
          </div>
          <div class="grid-item" onClick={() => dostuff(null, "/")}>
            /
          </div>
          <div class="grid-item" onClick={() => dostuff(4)}>
            4
          </div>
          <div class="grid-item" onClick={() => dostuff(5)}>
            5
          </div>
          <div class="grid-item" onClick={() => dostuff(6)}>
            6
          </div>
          <div class="grid-item" onClick={() => dostuff(null, "*")}>
            *
          </div>
          <div class="grid-item" onClick={() => dostuff(7)}>
            7
          </div>
          <div class="grid-item" onClick={() => dostuff(8)}>
            8
          </div>
          <div class="grid-item" onClick={() => dostuff(9)}>
            9
          </div>
          <div
            class="grid-item"
            onClick={() => {
              dostuff(null, "-");
            }}
          >
            -
          </div>
          <div class="grid-item" onClick={() => dostuff(0)}>
            0
          </div>
          <div
            class="grid-item"
            onClick={() => {
              dostuff(null, ".");
            }}
          >
            .
          </div>
          <div
            class="grid-item"
            onClick={() => {
              getresult(myinput);
            }}
          >
            =
          </div>
          <div
            class="grid-item"
            onClick={() => {
              dostuff(null, "+");
            }}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

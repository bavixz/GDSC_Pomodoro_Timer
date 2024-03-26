import './App.css';
import { start } from './timer';

function App() {
  const handleStartClick = () => {
    start();
  }

  const handleResetClick = () => {
    // Reset the timer to its initial state
    document.getElementById('minutes').innerHTML = 25;
    document.getElementById('seconds').innerHTML = "00";

    

    // Show the start button and hide the reset button
    document.getElementById('start').style.display = "block";
    document.getElementById('reset').style.display = "none";

    // Reset the timer
    // ...
  }

  return (
    <div className="App">
      <body>
        <section>
          <div class="container">
            <h1>pomodoro</h1>

             <div class="painel">
              <p id="work">work</p>
              <p id="break">break</p>
            </div> 
            
            <div class="timer">
              <div class="circle">
                <div class="time">
                  <p id="minutes"></p>
                  <p>:</p>
                  <p id="seconds"></p>
                </div>
              </div>
            </div>

            <div class="controls">
              <button id="start" onClick={handleStartClick}><i class="fa-solid fa-play">start</i></button>

              <button id="reset" onClick={handleResetClick}><i class="fa-solid fa-arrow-rotate-left">Reset</i></button>
            </div>
          </div>
        </section>

        <script src="./script.js"></script>
      </body>
    </div>
  );
}

export default App;
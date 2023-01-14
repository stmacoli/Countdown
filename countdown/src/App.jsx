import Title from "./Components/Title";
import Counter from "./Components/Counter";

import timeImg from "./assets/timeImg.jpg";

import useCountdown from "./hooks/useCountdown";

import "./App.css";

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2024 00:00:00");

  return (
    <div className="App" style={{ backgroundImage: `url(${timeImg})` }}>
      <div className="container">
        <Title title="Contagem Regressiva" />
        <div className="countdown-container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
      </div>
    </div>
  );
}

export default App;

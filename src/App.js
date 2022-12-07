import { useState } from 'react';
import './App.css';
import RobotCheck from './Components/RobotCheck/RobotCheck';
import LoginFrame from './Components/LoginFrame/LoginFrame/LoginFrame';
import MainFrame from './Components/MainFrame/MainFrame';

function App() {
  const [isRobot, setIsRobot] = useState(true);
  const [isLogged, setLogged] = useState(false);

  if (isRobot) return (
    <div className="App">
      <header className="App-header">
        <RobotCheck isRobot={isRobot} setIsRobot={setIsRobot} />
      </header>
    </div>
  );
  if (!isLogged) return (
    <div className="App">
      <header className="App-header">
        <LoginFrame isLogged={isLogged} setLogged={setLogged}/>
      </header>
    </div>
  );
  if (isLogged) return (
    <div className="App">
      <header className="App-header">
        <MainFrame/>
      </header>
    </div>
  );
}

export default App;
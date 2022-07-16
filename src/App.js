import React from "react";
import './App.css';
import Box from './components/Box'
import './styles/global.css'

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000


class App extends React.Component {
  constructor () {
    super ()

    this.state = {
      water : 0,
      heart : 120,
      temperature : -10,
      steps : 3000
    }
  }

  // méthode pour changer le state heart avec la valeur de l'input
  onHeartChange(e) {
    this.setState({ heart: e.target.value })
  }
  // méthode pour changer le state steps avec la valeur de l'input
  onStepsChange(e) {
    this.setState({ steps: e.target.value })
  }
  // méthode pour changer le state temperature avec la valeur de l'input
  onTemperatureChange(e) {
    this.setState({ temperature: e.target.value })
  }


  render() {
    return (
      <div className="container-fluid">
          <div className="row">
            <p>Heart : {heartMin}</p>
            <p>Temperature : {tempMin}</p>
            <p>Steps : {stepsMin}</p>
            {/* water */}
            <Box icon ="local_drink" color="#3A85FF" value={1.5} unit="L"/>
            {/* steps */}
            <Box icon ="directions_walk" color="black" value={this.state.steps} unit="steps" min={stepsMin} max={stepsMax} onChange={(e) => this.onStepsChange(e)}/>
            {/* heart */}
            <Box icon ="favorite" color="red" value={this.state.heart} unit="bpm" min={heartMin} max={heartMax} onChange={(e) => this.onHeartChange(e)}/>
            {/* temperature */}
            <Box icon ="wb_sunny" color="yellow" value={this.state.temperature} unit="°C" min={tempMin} max={tempMax} onChange={(e) => this.onTemperatureChange(e)}/>
          </div>
      </div>
    );
  }
}

export default App;




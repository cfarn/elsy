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
      water : 1.5,
      heart : 120,
      temperature : -10,
      steps : 3000
    }
  }

  // méthode pour changer le state heart avec la valeur de l'input
  onHeartChange(e) {
    this.setState({ heart: e.target.value })
    this.calculateWater()
  }
  // méthode pour changer le state steps avec la valeur de l'input
  onStepsChange(e) {
    this.setState({ steps: e.target.value })
    this.calculateWater()
  }
  // méthode pour changer le state temperature avec la valeur de l'input
  onTemperatureChange(e) {
    this.setState({ temperature: e.target.value })
    this.calculateWater()
  }

  // méthode pour calculer l'eau à boire en fonction des autres states
  calculateWater = () => {
    let drink = 1.5

    if(this.state.temperature > 20) {
      drink = drink + (this.state.temperature - 20) * 0.02
      // return drink
    }
    if(this.state.heart > 120) {
      drink = drink + (this.state.heart - 120) * 0.0008
      // return drink
    }
    if(this.state.steps > 10000) {
      drink = drink + (this.state.steps - 10000) * 0.00002
      // return drink
    }

    this.setState({
      water : drink
    })
  }


  render() {
    return (
      <div className="container-fluid">
          <div className="row">
            <p>Heart : {heartMin}</p>
            <p>Temperature : {tempMin}</p>
            <p>Steps : {stepsMin}</p>
            {/* water */}
            <Box icon ="local_drink" color="#3A85FF" value={this.state.water} unit="L"/>
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




import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timer: 0}

  handleStart = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  handleStop = () => clearTimeout(this.timerId)

  handleReset = () => this.setState({timer: 0})

  tick = () => this.setState(prevState => ({timer: prevState.timer + 1}))

  render() {
    const {timer} = this.state

    const minutes = Math.floor(timer / 60)
    const seconds = timer % 60

    return (
      <div className="bg-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="timer-card">
          <div>
            <div className="logo-text-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="watch-img"
              />
              <p className="timer-text">Timer</p>
            </div>
          </div>
          <h1 className="timer">
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
          <div className="button-container">
            <button type="button" onClick={this.handleStart}>
              Start
            </button>
            <button type="button" onClick={this.handleStop}>
              Stop
            </button>
            <button type="button" onClick={this.handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch

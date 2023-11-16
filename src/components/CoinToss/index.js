// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {count: 0, result: null, heads: 0, tails: 0}

  tossChange = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({
      count: prevState.count + 1,
      result: tossResult,
      heads: prevState.heads + (tossResult === 0 ? 1 : 0),
      tails: prevState.tails + (tossResult === 1 ? 1 : 0),
    }))
  }

  render() {
    const {count, result, heads, tails} = this.state
    const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    const mainImage = result ? tailsImage : headsImage
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={mainImage} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.tossChange}>
            Toss Coin
          </button>
          <div className="outcome-container">
            <p>Total: {count}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

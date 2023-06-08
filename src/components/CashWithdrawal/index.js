import {Component} from 'react'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onClickDeductFifty = () => {
    this.setState(prevState => ({
      balance: prevState.balance - 50,
    }))
  }

  onClickDeductHundred = () => {
    this.setState(prevState => ({
      balance: prevState.balance - 100,
    }))
  }

  onClickDeductTwoHundred = () => {
    this.setState(prevState => ({
      balance: prevState.balance - 200,
    }))
  }

  onClickDeductFiveHundred = () => {
    this.setState(prevState => ({
      balance: prevState.balance - 500,
    }))
  }

  render() {
    const {balance} = this.state
    console.log(balance)
    const name = 'Sarah Williams'
    const logo = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="card">
          <div className="customer-container">
            <p className="customer-logo">{logo}</p>
            <p className="customer-name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="text">Your Balance</p>
            <div>
              <p className="rupees">{balance}</p>
              <p className="text">In Rupees</p>
            </div>
          </div>
          <p className="text">Withdraw</p>
          <p className="text">CHOOSE SUM (IN RUPEES)</p>
          <ul>
            <div className="notes-container">
              <div>
                <li>
                  <button
                    onClick={this.onClickDeductFifty}
                    className="button"
                    type="button"
                  >
                    50
                  </button>
                </li>
                <br />
                <li>
                  <button
                    onClick={this.onClickDeductHundred}
                    className="button"
                    type="button"
                  >
                    100
                  </button>
                </li>
              </div>
              <div>
                <li>
                  <button
                    onClick={this.onClickDeductTwoHundred}
                    className="button"
                    type="button"
                  >
                    200
                  </button>
                </li>
                <br />
                <li>
                  <button
                    onClick={this.onClickDeductFiveHundred}
                    className="button"
                    type="button"
                  >
                    500
                  </button>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

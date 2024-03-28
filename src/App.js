/* import {Component} from 'react'
import './App.css'

// Replace your code here
class App extends Component {
    state={
        sear
    }
  submitForm = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="app-container">
        <div className="left-side">
          <h1 className="left-heading">Count the characters like a Boss...</h1>
          <div className="container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="image"
            />
          </div>
        </div>
        <div className="right-side">
          <h1 className="right-heading">Characters Counter</h1>
          <form className="form" onSubmit={this.submitForm}>
            <input type="text" onChange={this.onChangeSearchInput} className="input" />
            <button type="button" className="button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
*/

import './App.css'
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'

class App extends Component {
  state = {charachtersCount: [], addValue: ''}

  inputChange = e => {
    this.setState({addValue: e.target.value})
  }

  submit = e => {
    e.preventDefault()
    this.setState({addValue: ''})
  }

  addBtn = () => {
    const {addValue, charachtersCount} = this.state
    if (addValue !== '') {
      const newData = {
        id: uuidv4(),
        addValue,
      }
      charachtersCount.push(newData)
      this.setState(charachtersCount)
    }
  }

  render() {
    const {charachtersCount, addValue} = this.state

    return (
      <div className="bg-container">
        <div className="count-container">
          <div className="count-para">
            <h1>Count the characters like a Boss...</h1>
          </div>
          {charachtersCount.length > 0 ? (
            <ul>
              {charachtersCount.map(items => (
                <li key={items.id}>
                  <p>{`${items.addValue} : ${items.addValue.length} `}</p>
                </li>
              ))}
            </ul>
          ) : (
            <img
              className="no-user"
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          )}
        </div>
        <div className="character-container">
          <h1>Character Counter</h1>
          <form className="character-input" onSubmit={this.submit}>
            <input
              placeholder="Enter the Characters here"
              onChange={this.inputChange}
              value={addValue}
            />
            <button onClick={this.addBtn}>Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default App

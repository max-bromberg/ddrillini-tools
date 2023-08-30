import './App.css';
import { Component } from 'react';
var packs = {
  main: (callback) => {
    import('./packs/main.json').then(module => {
      callback(module.default)
    })
  }
}

export default class App extends Component {
  state = {
    pack: [],
    picks: [],
    pickString: []
  }
  componentDidMount() {

  }

  selectPack = (event) => {
    let pick = event.target.value
    if (pick.toLowerCase() === 'main') {
      packs.main(this.selectPackCallback)
      
    }
  }

  selectPackCallback = (packjson) => {
    console.log(packjson)
    this.setState({
      ...this.state,
      pack: packjson
    })
  }

  drawNew = () => {
    var drawNum = 5;
    // Move drawnum to argument

    console.log('Before copy')
    console.log(this.state.pack)
    var deepCopy = [...this.state.pack]

    // let pick1 = Math.floor(Math.random() * deepCopy.length)

    let picks = []
    for (let i = 0; i < drawNum; i++) {
      var magicNum = Math.floor(Math.random() * deepCopy.length)
      picks[i] = deepCopy[magicNum]
      deepCopy.splice(magicNum, 1)

    }

    let pickStringT = []
    for (let i = 0; i < drawNum; i++) {
      pickStringT[i] = picks[i]["Song Title"] + "\n"
    }

    this.setState({
      ...this.state,
      pickString: pickStringT
    })

    console.log(picks)
    console.log(deepCopy)
  }

  render() {
    return (
      <>
        <div className='has-background-dark' style={{ height: '100vh' }}>
          <div className='section'>
            <div className='select is-large'>
              <select onChange={this.selectPack}>
                <option>Main</option>
                <option>Dev</option>
              </select>
            </div>
            <div className='columns'>

              <button className='column button is-black is-large is-one-quarter' onClick={this.drawNew}>Draw</button>
              {/* <button className='button is-primary is-large'>Choose CSV</button> */}
              <h2 className='is-size-1 has-text-white column'>
                {this.state.pickString[0] && <img src={'/images/' + (this.state.pickString[0]) + '.png'} />}
                {this.state.pickString[0] && this.state.pickString[0]}
                <br></br>
                {this.state.pickString[1] && <img src={'/images/' + (this.state.pickString[1]) + '.png'} />}
                {this.state.pickString[1] && this.state.pickString[1]}
                <br></br>
                {this.state.pickString[2] && <img src={'/images/' + (this.state.pickString[2]) + '.png'} />}
                {this.state.pickString[2] && this.state.pickString[2]}
                <br></br>
                {this.state.pickString[3] && <img src={'/images/' + (this.state.pickString[3]) + '.png'} />}
                {this.state.pickString[3] && this.state.pickString[3]}
                <br></br>
                {this.state.pickString[4] && <img src={'/images/' + (this.state.pickString[4]) + '.png'} />}
                {this.state.pickString[4] && this.state.pickString[4]}
                <br></br>
                {this.state.pickString[5] && <img src={'/images/' + (this.state.pickString[5]) + '.png'} />}
                {this.state.pickString[5] && this.state.pickString[5]}
                <br></br>
                {this.state.pickString[6] && <img src={'/images/' + (this.state.pickString[6]) + '.png'} />}
                {this.state.pickString[6] && this.state.pickString[6]}
                <br></br>
                {this.state.pickString[7] && <img src={'/images/' + (this.state.pickString[7]) + '.png'} />}
                {this.state.pickString[7] && this.state.pickString[7]}
                <br></br>
                {this.state.pickString[8] && <img src={'/images/' + (this.state.pickString[8]) + '.png'} />}
                {this.state.pickString[8] && this.state.pickString[8]}
              </h2>
            </div>
          </div>
        </div>
      </>
    )
  }
}

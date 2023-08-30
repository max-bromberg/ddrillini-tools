import './App.css';
import { Component } from 'react';
var packs = {
  main: (callback) => {
    import('./packs/main.json').then(module => {
      callback(module.default)
    })
  },
  dev: (callback) => {
    import('./packs/dev.json').then(module => {
      callback(module.default)
    })
  }
}

export default class App extends Component {
  state = {
    initLoad: false,
    pack: [],
    picks: [],
    pickString: [],
    drawNum: 5
  }

  componentDidMount() {
    if (!this.state.initLoad) {
      packs.main(this.selectPackCallback)
    }
  }

  selectPack = (event) => {
    let pick = event.target.value
    if (pick.toLowerCase() === 'main') {
      packs.main(this.selectPackCallback)
    } else if (pick.toLowerCase() === 'dev') {
      packs.dev(this.selectPackCallback)
    }
  }

  selectPackCallback = (packjson) => {
    this.setState({
      ...this.state,
      initLoad: false,
      pack: packjson
    })
  }

  drawNew = () => {
    let drawNum = this.state.drawNum
    if (drawNum > this.state.pack.length) {
      drawNum = this.state.pack.length
    }
    // Move drawnum to argument
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
  }

  render() {
    return (
      <>
        <div className='has-background-dark' style={{ height: '100vh', zIndex: '-1', position: 'static' }}>
          <div className='section'>
            <div className='columns'>
            <div className='select is-large column is-one-fifth' style={{}}>
              <select onChange={this.selectPack}>
                <option>Main</option>
                <option>Dev</option>
              </select>
            </div>
              <button className='column button is-black is-large is-one-quarter' onClick={this.drawNew}>Draw</button>
              {/* <button className='button is-primary is-large'>Choose CSV</button> */}
              <h2 className='is-size-1 has-text-white column'>
                {this.state.pickString[0] && <img style={{marginRight: '15px', borderRadius: '6px'}} src={'/images/' + (this.state.pickString[0]) + '.png'} />}
                {this.state.pickString[0] && this.state.pickString[0]}
                <br></br>
                {this.state.pickString[1] && <img style={{marginRight: '15px', borderRadius: '6px'}} src={'/images/' + (this.state.pickString[1]) + '.png'} />}
                {this.state.pickString[1] && this.state.pickString[1]}
                <br></br>
                {this.state.pickString[2] && <img style={{marginRight: '15px', borderRadius: '6px'}} src={'/images/' + (this.state.pickString[2]) + '.png'} />}
                {this.state.pickString[2] && this.state.pickString[2]}
                <br></br>
                {this.state.pickString[3] && <img style={{marginRight: '15px', borderRadius: '6px'}} src={'/images/' + (this.state.pickString[3]) + '.png'} />}
                {this.state.pickString[3] && this.state.pickString[3]}
                <br></br>
                {this.state.pickString[4] && <img style={{marginRight: '15px', borderRadius: '6px'}} src={'/images/' + (this.state.pickString[4]) + '.png'} />}
                {this.state.pickString[4] && this.state.pickString[4]}
                <br></br>
                {this.state.pickString[5] && <img style={{marginRight: '15px', borderRadius: '6px'}} src={'/images/' + (this.state.pickString[5]) + '.png'} />}
                {this.state.pickString[5] && this.state.pickString[5]}
                <br></br>
                {this.state.pickString[6] && <img style={{marginRight: '15px', borderRadius: '6px'}} src={'/images/' + (this.state.pickString[6]) + '.png'} />}
                {this.state.pickString[6] && this.state.pickString[6]}
                <br></br>
                {this.state.pickString[7] && <img style={{marginRight: '15px', borderRadius: '6px'}} src={'/images/' + (this.state.pickString[7]) + '.png'} />}
                {this.state.pickString[7] && this.state.pickString[7]}
                <br></br>
                {this.state.pickString[8] && <img style={{marginRight: '15px', borderRadius: '6px'}} src={'/images/' + (this.state.pickString[8]) + '.png'} />}
                {this.state.pickString[8] && this.state.pickString[8]}
              </h2>
            </div>
          </div>
        </div>
      </>
    )
  }
}

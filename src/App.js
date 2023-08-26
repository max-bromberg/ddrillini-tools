import './App.css';
import { Component } from 'react';

var pack = [
  {
    "": "",
    "Tier": 1,
    "CMOD": "Y",
    "Song Title": "Utopia",
    "Block": 1
  },
  {
    "": "",
    "Tier": 1,
    "CMOD": "Y",
    "Song Title": "Synchronize",
    "Block": 1
  },
  {
    "": "",
    "Tier": 1,
    "CMOD": "Y",
    "Song Title": "Gangnam Style",
    "Block": 1
  },
  {
    "": "",
    "Tier": 1,
    "CMOD": "Y",
    "Song Title": "Summer Days (Haywyre Remix)",
    "Block": 1
  },
  {
    "": "",
    "Tier": 1,
    "CMOD": "Y",
    "Song Title": "Fly as Me",
    "Block": 1
  },
  {
    "": "",
    "Tier": 1,
    "CMOD": "Y",
    "Song Title": "Counting Stars",
    "Block": 1
  },
  {
    "": "",
    "Tier": 2,
    "CMOD": "Y",
    "Song Title": "Virtual Freedom",
    "Block": 2
  },
  {
    "": "",
    "Tier": 2,
    "CMOD": "Y",
    "Song Title": "SELFISH (Kyun x moo Remix)",
    "Block": 2
  },
  {
    "": "",
    "Tier": 2,
    "CMOD": "Y",
    "Song Title": "edamame",
    "Block": 2
  },
  {
    "": "",
    "Tier": 2,
    "CMOD": "Y",
    "Song Title": "Ride It",
    "Block": 2
  },
  {
    "": "",
    "Tier": 2,
    "CMOD": "Y",
    "Song Title": "Smokin Out The Window",
    "Block": 2
  },
  {
    "": "",
    "Tier": 2,
    "CMOD": "Y",
    "Song Title": "Candy Carousel",
    "Block": 2
  },
  {
    "": "",
    "Tier": 2,
    "CMOD": "Y",
    "Song Title": "Vanquish The Ghost",
    "Block": 2
  },
  {
    "": "",
    "Tier": 2,
    "CMOD": "Y",
    "Song Title": "Pale Garden",
    "Block": 2
  },
  {
    "": "",
    "Tier": 3,
    "CMOD": "Y",
    "Song Title": "Go Go Sing",
    "Block": 3
  },
  {
    "": "",
    "Tier": 3,
    "CMOD": "N",
    "Song Title": "Luxvinore",
    "Block": 3
  },
  {
    "": "",
    "Tier": 3,
    "CMOD": "Y",
    "Song Title": "DO IT !",
    "Block": 3
  },
  {
    "": "",
    "Tier": 3,
    "CMOD": "Y",
    "Song Title": "Wicked Fate",
    "Block": 3
  },
  {
    "": "",
    "Tier": 3,
    "CMOD": "Y",
    "Song Title": "Hora Din Moldova",
    "Block": 3
  },
  {
    "": "",
    "Tier": 3,
    "CMOD": "Y",
    "Song Title": "HAPPEE",
    "Block": 3
  },
  {
    "": "",
    "Tier": 3,
    "CMOD": "Y",
    "Song Title": "9mm",
    "Block": 3
  },
  {
    "": "",
    "Tier": 4,
    "CMOD": "Y",
    "Song Title": "Get Down",
    "Block": 4
  },
  {
    "": "",
    "Tier": 4,
    "CMOD": "Y",
    "Song Title": "The Queen",
    "Block": 4
  },
  {
    "": "",
    "Tier": 4,
    "CMOD": "Y",
    "Song Title": "AND LAUGH",
    "Block": 4
  },
  {
    "": "",
    "Tier": 4,
    "CMOD": "Y",
    "Song Title": "Felis",
    "Block": 4
  },
  {
    "": "",
    "Tier": 4,
    "CMOD": "Y",
    "Song Title": "Earthquake",
    "Block": 4
  },
  {
    "": "",
    "Tier": 4,
    "CMOD": "Y",
    "Song Title": "Across The Ocean",
    "Block": 4
  },
  {
    "": "",
    "Tier": 5,
    "CMOD": "Y",
    "Song Title": "Bad Blood",
    "Block": 5
  },
  {
    "": "",
    "Tier": 5,
    "CMOD": "Y",
    "Song Title": "Good 2 Go",
    "Block": 5
  },
  {
    "": "",
    "Tier": 5,
    "CMOD": "Y",
    "Song Title": "kannabis kultivation",
    "Block": 5
  },
  {
    "": "",
    "Tier": 5,
    "CMOD": "Y",
    "Song Title": "Coffee World",
    "Block": 5
  },
  {
    "": "",
    "Tier": 5,
    "CMOD": "Y",
    "Song Title": "Bad Apple",
    "Block": 5
  },
  {
    "": "",
    "Tier": 6,
    "CMOD": "Y",
    "Song Title": "Bubble In The Air",
    "Block": 6
  },
  {
    "": "",
    "Tier": 6,
    "CMOD": "Y",
    "Song Title": "Libertas",
    "Block": 6
  },
  {
    "": "",
    "Tier": 6,
    "CMOD": "Y",
    "Song Title": "Leviathan",
    "Block": 6
  },
  {
    "": "",
    "Tier": 6,
    "CMOD": "Y",
    "Song Title": "Heartbeat",
    "Block": 6
  },
  {
    "": "",
    "Tier": 7,
    "CMOD": "N",
    "Song Title": "Prism",
    "Block": 7
  },
  {
    "": "",
    "Tier": 7,
    "CMOD": "Y",
    "Song Title": "Lover's Trick",
    "Block": 7
  },
  {
    "": "",
    "Tier": 7,
    "CMOD": "Y",
    "Song Title": "6FINGERDEATHPUNCH",
    "Block": 7
  }
]

export default class App extends Component {
  state = {
    picks: [],
    pickString: []
  }
  componentDidMount() {
    // console.log(pack)
  }

  drawNew = () => {
    var drawNum = 5;
    // Move drawnum to argument

    console.log('Before copy')
    var deepCopy = [...pack]

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

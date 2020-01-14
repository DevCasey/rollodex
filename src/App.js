import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      users: []
    }
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    fetch('https://randomuser.me/api?results=25')
    .then((res) => { return res.json() })
    .then((res) => { console.log(res); this.setState( {users: res.results}) })
    .catch(error => console.log('Parsing failed', error))
  }


  render () {
    return (
    <div className="App">
      <div>
        {this.state.users.map((item,index) => {
        return <div key={index}>{<img src={item.picture.medium}/>} {item.name.first} {item.name.last}<button>Details</button></div>
        })}
      </div>
    </div>
    )
  } 
}

export default App;

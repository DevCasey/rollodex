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
    .then((res) => { console.log(res);this.setState( {users: res.results}) })
    // .then((res) => {console.log(this.state.users)})
    // .catch(error => console.log('Parsing failed', error))
  }


  render () {
    return (
    <div className="App">
      <header className="App-header">
      
      </header>
    </div>
    )
  } 
}

export default App;

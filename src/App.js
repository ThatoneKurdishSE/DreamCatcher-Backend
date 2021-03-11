import React, {Component} from 'react';
import DreamContainer from './components/DreamContainer'
import DreamForm from './components/DreamForm'
import './App.css';

class App extends Component {

  state = {
    dreams: []
  }


componentDidMount(){
  this.getDreams()
}

getDreams = () => {
  fetch(`http://localhost:3000/dreams`)
  .then(response => response.json())
  .then(dreams => this.setState({dreams}))
}

addDream = (newDream) => {
  this.setState({
    dreams: [...this.state.dreams, newDream]
  })

  fetch(`http://localhost:3000/dreams`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newDream)
  })
}

deleteDream = (id) => {
  let filtered = this.state.dreams.filter( dream => dream.id !== id)
  this.setState({
    dreams: filtered
  })
  fetch(`http://localhost:3000/dreams/${id}`, {method: 'DELETE'})
}
  render(){
    return (
      <div className="App">
        <h1>Catch em dreams bbygrl</h1>
        <DreamForm addDream={this.addDream}/>
        <DreamContainer deleteDream={this.deleteDream} dreams={this.state.dreams}/>
      </div>
    );
  }
}
export default App;

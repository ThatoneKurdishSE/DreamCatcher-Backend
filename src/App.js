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
        <h1> ᴅʀᴇᴀᴍʟᴀɴᴅɪᴀ </h1>
        <div className="about-info">
        <p className="about-title"> Ｄｒｅａｍｓ　ガ若桜
          <br/>
          <p className="about-body">
          【﻿Ｒｅｓｅａｒｃｈｅｓ　ｄｏｎｅ　ｂｙ　ＲＩＦＧＳ　（Ｒａｚ　ｉｎｓｔｉｔｕｔｅ　ｆｏｒ　Ｇｏｏｄ　Ｓｌｅｅｐ）　ｓｈｏｗｓ　ｔｈａｔ，　ｔｈｉｓ　ａｐｐ，　ｉｓ　ｌｉｋｅ　ｓｕｐｅｒ　ｉｍｐｏｒｔａｎｔ．　Ｂｙ　ｋｅｅｐｉｎｇ　ｔｒａｃｋ　ｏｆ　ｙｏｕｒ　ｄｒｅａｍｓ　ａｎｄ　ｙｏｕｒ　ｏｖｅｒａｌｌ　ｍｏｏｄ　ａｎｄ　ｔｈｅｍｅ，　ｙｏｕ　ａｌｌｏｗ　ｙｏｕｒｓｅｌｆ　ｔｏ　ｂｅ　ｂｅｔｔｅｒ　ａｗａｒｅ　ｏｆ　ｈｏｗ　ｙｏｕ　ｐｒｏｃｅｓｓｅｄ　ｐａｒｔｓ　ｏｆ　ｙｏｕｒ　ｄａｙ．　Ｅｖｅｎ　ｉｆ　ｙｏｕ　ｓｕｐｐｒｅｓｓ　ｙｏｕｒ　ｅｘｐｅｒｉｅｎｃｅｓ　ｗｈｅｎ　ａｗａｋｅ，　ｔｈｅｙ　ｗｉｌｌ　ｃｏｍｅ　ｂｕｒｓｔｉｎｇ　ｏｕｔ　ｏｆ　ｙｏｕｒ　ｓｕｂｃｏｎｓｃｉｏｕｓ　ｗｈｅｎ　ａｓｌｅｅｐ．】
          </p>
        </p>
        <p>

        </p>
        </div>
        <section className="split">
          <DreamForm addDream={this.addDream}/>
          <DreamContainer deleteDream={this.deleteDream} dreams={this.state.dreams}/>
        </section>
      </div>
    );
  }
}
export default App;

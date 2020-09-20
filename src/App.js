import React, {Component} from 'react';
import './App.css';

class App extends Component{

  render() {
    const name = 'John Doe';
    const loading = false;
    const showName = true;

    return (
      <div className='App'>
        {loading ? <h4>Loading...</h4> : <h1> Hello {showName && name}</h1>} 
        {/* if loading then display loading if not then show name */}
        {/* if showName is true then show name, if false then don't */}
      </div>
    )
  }
}
  
export default App;
